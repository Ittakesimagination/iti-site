"use client";

import React, { useState, type ChangeEvent, type FormEvent } from "react";

type ContactConfig = {
  /** Optional API endpoint for form submit */
  endpoint?: string;
  /** UI messages if you want to use them later */
  successMessage?: string;
  failureMessage?: string;
};

type FormState = {
  name: string;
  email: string;
  message: string;
};

interface ContactFormProps {
  /** Optional config passed from siteConfig.contact */
  config?: ContactConfig;
}

export default function ContactForm({ config }: ContactFormProps) {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Optional: post to an endpoint if provided
    if (config?.endpoint) {
      try {
        await fetch(config.endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        });
        // You can use config.successMessage here if desired
      } catch {
        // You can use config.failureMessage here if desired
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Your name"
      />
      <input
        type="email"
        name="email"
        value={form.email}
        onChange={handleChange}
        placeholder="you@example.com"
      />
      <textarea
        name="message"
        value={form.message}
        onChange={handleChange}
        placeholder="Say hello…"
      />
      <button type="submit">Send</button>
    </form>
  );
}

