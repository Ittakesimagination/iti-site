"use client";

import React, { useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore/lite";
import { getAuth, signInAnonymously } from "firebase/auth";
import { db } from "@/lib/firebase";

interface ContactConfig {
  title: string;
  description: string;
  successMessage: string;
  errorMessage: string;
}
interface ContactFormProps {
  config: ContactConfig;
}

export default function ContactForm({ config }: ContactFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [errMsg, setErrMsg] = useState("");

  async function ensureAuth() {
    const auth = getAuth();
    if (!auth.currentUser) {
      await signInAnonymously(auth);
    }
    return auth.currentUser;
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setErrMsg("");

    try {
      const user = await ensureAuth();
      if (!user) throw new Error("auth/missing-user");

      await addDoc(collection(db, "contacts"), {
        name,
        email,
        message,
        createdAt: serverTimestamp(),
        ownerUid: user.uid,
      });

      // Optional analytics event
      try {
        const { getAnalytics, logEvent, isSupported } = await import("firebase/analytics");
        if (await isSupported()) {
          const analytics = getAnalytics();
          logEvent(analytics, "contact_submit", {
            source: "web",
            project: "ittakesimagination",
          });
        }
      } catch {
        // ignore analytics errors
      }

      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      console.error(err);
      setErrMsg(config.errorMessage || "Hm, something went sideways. Please try again.");
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="py-16">
      <h2 className="text-3xl font-bold mb-4">{config.title}</h2>
      <p className="mb-6">{config.description}</p>

      <form onSubmit={onSubmit} className="space-y-4 max-w-lg" aria-describedby="formhelp">
        <div>
          <label htmlFor="name" className="block font-medium">
            Name
          </label>
          <input
            id="name"
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border rounded p-2"
            autoComplete="name"
          />
        </div>

        <div>
          <label htmlFor="email" className="block font-medium">
            Email
          </label>
          <input
            id="email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border rounded p-2"
            autoComplete="email"
          />
        </div>

        <div>
          <label htmlFor="message" className="block font-medium">
            Message
          </label>
          <textarea
            id="message"
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full border rounded p-2"
            rows={4}
          />
        </div>

        <div>
          <button
            type="submit"
            disabled={status === "loading"}
            className={`px-4 py-2 rounded-lg font-semibold shadow-md transition ${
              status === "loading"
                ? "bg-gray-400 text-white cursor-wait"
                : "bg-yellow-500 text-black hover:bg-yellow-400 active:translate-y-px"
            }`}
          >
            {status === "loading" ? "Sending..." : "Send"}
          </button>
        </div>

        <p id="formhelp" className="sr-only">
          All fields are required.
        </p>

        {status === "success" && (
          <p role="status" className="text-green-600 dark:text-green-400">
            {config.successMessage}
          </p>
        )}

        {status === "error" && (
          <p role="alert" className="text-red-600 dark:text-red-400">
            {errMsg}
          </p>
        )}
      </form>
    </section>
  );
}

