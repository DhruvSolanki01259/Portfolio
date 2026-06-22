"use client"

import type React from "react"
import { useState } from "react"

type ContactFormProps = {
  fallbackEmail: string
}

export default function ContactForm({ fallbackEmail }: ContactFormProps) {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [error, setError] = useState<string | null>(null)
  const [copied, setCopied] = useState(false)

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus("loading")
    setError(null)
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      })
      if (!res.ok) {
        const body = await res.json().catch(() => ({}))
        throw new Error(body?.error || "Failed to send message")
      }
      setStatus("success")
      setName("")
      setEmail("")
      setMessage("")
    } catch (err: any) {
      setStatus("error")
      setError(err?.message || "Something went wrong")
    }
  }

  const notConfigured = status === "error" && (error || "").toLowerCase().includes("not configured")

  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      <div className="grid gap-2">
        <label htmlFor="name" className="text-sm font-medium">
          Name
        </label>
        <input
          id="name"
          name="name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="h-10 rounded-md border border-[var(--border)] bg-[var(--background)] px-3 text-[var(--foreground)] outline-none focus:ring-2 focus:ring-[var(--primary)]"
          placeholder="Your name"
          autoComplete="name"
        />
      </div>
      <div className="grid gap-2">
        <label htmlFor="email" className="text-sm font-medium">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="h-10 rounded-md border border-[var(--border)] bg-[var(--background)] px-3 text-[var(--foreground)] outline-none focus:ring-2 focus:ring-[var(--primary)]"
          placeholder="you@example.com"
          autoComplete="email"
        />
      </div>
      <div className="grid gap-2">
        <label htmlFor="message" className="text-sm font-medium">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="rounded-md border border-[var(--border)] bg-[var(--background)] px-3 py-2 text-[var(--foreground)] outline-none focus:ring-2 focus:ring-[var(--primary)] resize-y"
          placeholder="How can I help?"
        />
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <button
          type="submit"
          disabled={status === "loading"}
          className="inline-flex h-10 items-center justify-center rounded-md bg-[var(--primary)] px-4 text-sm font-medium text-[var(--primary-foreground)] transition-colors hover:opacity-90 disabled:opacity-60 cursor-pointer disabled:cursor-not-allowed"
        >
          {status === "loading" ? "Sending..." : "Send message"}
        </button>

        <button
          type="button"
          onClick={async () => {
            try {
              await navigator.clipboard.writeText(fallbackEmail)
              setCopied(true)
              setTimeout(() => setCopied(false), 1500)
            } catch {
              window.location.href = `mailto:${fallbackEmail}?subject=Portfolio%20Inquiry`
            }
          }}
          className="inline-flex h-10 items-center justify-center rounded-md border border-[var(--border)] bg-[var(--muted)] px-4 text-sm font-medium text-[var(--foreground)] hover:bg-[var(--muted-foreground)]/10 cursor-pointer"
          aria-label="Copy my email address"
        >
          {copied ? "Email copied" : "Copy email"}
        </button>
      </div>

      {/* Status messages with a11y */}
      <div aria-live="polite" className="min-h-5">
        {status === "success" && (
          <p className="text-sm text-[var(--success, #2ecc71)]">Thanks! Your message has been sent.</p>
        )}
        {status === "error" && <p className="text-sm text-[var(--destructive, #e74c3c)]">Error: {error}</p>}
      </div>

      {notConfigured && (
        <div className="rounded-md border border-[var(--border)] bg-[color-mix(in_oklab,var(--background),#fff_3%)] p-3 text-sm">
          Email service isn’t configured yet. You can still reach me directly:{" "}
          <a className="underline hover:opacity-80" href={`mailto:${fallbackEmail}?subject=Portfolio%20Inquiry`}>
            {fallbackEmail}
          </a>
        </div>
      )}
    </form>
  )
}
