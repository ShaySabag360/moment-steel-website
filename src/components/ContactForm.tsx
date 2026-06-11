"use client";

import { useState } from "react";
import type { ContactFormDictionary } from "@/content/types";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mwvjljyp";

type Status = "idle" | "submitting" | "success" | "error";

const inputClass =
  "w-full bg-[#1a1a1a] border border-[#2d2d2d] text-white text-base px-4 py-3 placeholder-gray-600 focus:outline-none focus:border-[#fd008d] transition-colors";
const labelClass =
  "block text-sm font-semibold uppercase tracking-widest text-gray-400 mb-2";

export default function ContactForm({ dict }: { dict: ContactFormDictionary }) {
  const [values, setValues] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<Status>("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(values),
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center text-center py-16">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.5}
          className="w-16 h-16 text-[#fd008d] mb-6"
        >
          <path
            d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <p className="text-white text-lg leading-relaxed max-w-sm">
          {dict.success}
        </p>
      </div>
    );
  }

  const submitting = status === "submitting";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className={labelClass}>
            {dict.nameLabel}
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={values.name}
            onChange={handleChange}
            placeholder={dict.namePlaceholder}
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="company" className={labelClass}>
            {dict.companyLabel}
          </label>
          <input
            id="company"
            name="company"
            type="text"
            value={values.company}
            onChange={handleChange}
            placeholder={dict.companyPlaceholder}
            className={inputClass}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="phone" className={labelClass}>
            {dict.phoneLabel}
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            value={values.phone}
            onChange={handleChange}
            placeholder={dict.phonePlaceholder}
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>
            {dict.emailLabel}
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={values.email}
            onChange={handleChange}
            placeholder={dict.emailPlaceholder}
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>
          {dict.messageLabel}
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          value={values.message}
          onChange={handleChange}
          placeholder={dict.messagePlaceholder}
          className={`${inputClass} resize-none`}
        />
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="w-full bg-[#fd008d] text-white py-4 text-sm font-bold uppercase tracking-widest hover:bg-[#e0007c] transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {submitting ? dict.submitting : dict.submit}
      </button>

      {status === "error" && (
        <p className="text-red-400 text-sm text-center">
          {dict.error}
        </p>
      )}

      <p className="text-gray-600 text-sm text-center">
        {dict.helper}
      </p>
    </form>
  );
}
