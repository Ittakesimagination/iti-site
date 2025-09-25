"use client";

import React, { useState } from "react";
import type { ContactConfig } from "@/config/types";
import { getAuth, signInAnonymously } from "firebase/auth";
import { addDoc, collection, serverTimestamp } from "firebase/firestore/lite";
import { db } from "@/lib/firebase";

interface ContactFormProps {
  /** Config from siteConfig.contact (matches ContactConfig interface). */
  config: ContactConfig;
}

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm({ config }: ContactFormProps) {
  const [status, setStatus] = useState<Status>("idle");
  const [errMsg, setErrMsg] = useState<string>("");

  async function ensureAuth() {
    const auth = getAuth();
    if (!auth.currentUser) {
      await signInAnonymously(auth);
    }
    return auth.currentUser!;
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrMsg("");

    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const message = String(formData.get("message") || "").trim();

    if (!name || !email || !message) {
      setErrMsg("Please fill out all fields.");
      setStatus("error");
      return;
    }

    try {
      const user = await ensureAuth();
      await addDoc(collection(db, "contacts"), {
        name,
        email,
        message,
        ownerUid: user.uid,
        createdAt: serverTimestamp(),
      });
      setStatus("success");
      form.reset();
    } catch (err: any) {
      console.error("contact submit failed:", err);
      setErrMsg(config.errorMessage || "Something went wrong. Please try again.");
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="section">
      <h2 className="text-2xl font-bold">{config.heading}</h2>
      <p className="mt-2 text-neutral-700 dark:text-neutral-300">{config.subheading}</p>
      <p className="mt-1 text-sm text-neutral-600 
dark:text-neutral-400">{config.description}</p>

      <form onSubmit={onSubmit} className="mt-6 grid gap-4 max-w-xl" 
aria-describedby="formhelp">
        <div className="grid gap-2">
          <label htmlFor="name" className="font-medium">Name</label>
          <input
            id="name"
            name="name"
            required
            className="rounded-md border border-neutral-300 dark:border-neutral-700 bg-white 
dark:bg-neutral-900 px-3 py-2"
          />
        </div>

        <div className="grid gap-2">
          <label htmlFor="email" className="font-medium">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="rounded-md border border-neutral-300 dark:border-neutral-700 bg-white 
dark:bg-neutral-900 px-3 py-2"
          />
        </div>

        <div className="grid gap-2">
          <label htmlFor="message" className="font-medium">Message</label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            className="rounded-md border border-neutral-300 dark:border-neutral-700 bg-white 
dark:bg-neutral-900 px-3 py-2"
          />
        </div>

        <div className="flex items-center gap-3">
          <button
            type="submit"
            disabled={status === "loading"}
            className={`px-4 py-2 rounded-lg font-semibold shadow-md transition
              ${status === "loading"
                ? "bg-gray-400 text-white cursor-wait"
                : "bg-amber-400 text-black hover:bg-amber-300 active:translate-y-px"}`}
            aria-live="polite"
          >
            {status === "loading" ? "Sending..." : "Send"}
          </button>

          <span className="text-sm text-neutral-500" id="formhelp">
            All fields are required.
          </span>
        </div>

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

