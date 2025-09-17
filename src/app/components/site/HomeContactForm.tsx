'use client';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { CheckCircle2, AlertTriangle, X } from 'lucide-react';

type Status = 'idle' | 'sending' | 'ok' | 'error';
type ContactResponse = { ok: boolean; error?: string };
type Toast = { msg: string; variant: 'ok' | 'error' } | null;

export default function HomeContactForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [toast, setToast] = useState<Toast>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('sending');

    const fd = new FormData(e.currentTarget);
    const data = {
      name: String(fd.get('name') || ''),
      email: String(fd.get('email') || ''),
      phone: String(fd.get('phone') || ''),
      workType: String(fd.get('workType') || ''),
      message: String(fd.get('message') || ''),
      company: String(fd.get('company') || ''), // honeypot
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(data),
      });
      const j: ContactResponse = await res.json();
      if (!res.ok || !j.ok) throw new Error(j.error ?? 'Send failed');

      setStatus('ok');
      (e.target as HTMLFormElement).reset();
      showToast({ msg: "Thanks—I'll get back to you shortly.", variant: 'ok' });
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Something went wrong.';
      setStatus('error');
      showToast({ msg: message, variant: 'error' });
    }
  }

  function showToast(t: Exclude<Toast, null>) {
    setToast(t);
    window.setTimeout(() => setToast(null), 4000);
  }

  const base =
    'w-full bg-transparent border-0 border-b border-border focus:border-primary outline-none py-2';

  return (
    <>
      <form onSubmit={onSubmit} className="rounded-2xl border border-border bg-surface p-6">
        <h3 className="text-2xl md:text-3xl font-bold">lets work together</h3>

        {/* honeypot — hidden from users & AT, satisfies linter */}
        <div className="hidden" aria-hidden="true">
          <label htmlFor="company">Company (leave blank)</label>
          <input id="company" name="company" autoComplete="off" tabIndex={-1} />
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <div>
            <label htmlFor="name" className="block text-xs uppercase tracking-wide text-muted mb-1">Name</label>
            <input id="name" name="name" required className={base} placeholder="Your name" />
          </div>
          <div>
            <label htmlFor="email" className="block text-xs uppercase tracking-wide text-muted mb-1">Email</label>
            <input id="email" name="email" type="email" required className={base} placeholder="you@email.com" />
          </div>
          <div>
            <label htmlFor="phone" className="block text-xs uppercase tracking-wide text-muted mb-1">Phone number</label>
            <input id="phone" name="phone" className={base} placeholder="(xxx) xxx-xxxx" />
          </div>
          <div>
            <label htmlFor="workType" className="block text-xs uppercase tracking-wide text-muted mb-1">Engagement type</label>
            <select id="workType" name="workType" required className={base} defaultValue="">
              <option value="" disabled>Select one</option>
              <option value="Employment">Employment</option>
              <option value="Freelance work">Freelance work</option>
            </select>
          </div>
        </div>

        <div className="mt-6">
          <label htmlFor="message" className="block text-xs uppercase tracking-wide text-muted mb-1">Details</label>
          <textarea id="message" name="message" rows={6} required className={`${base} resize-y`} placeholder="Tell me about the role or project…" />
        </div>

        <div className="mt-6">
          <button type="submit" className="btn-primary disabled:opacity-70 inline-flex items-center gap-2" disabled={status === 'sending'}>
            {status === 'sending' && (
              <svg viewBox="0 0 24 24" className="h-4 w-4 animate-spin" aria-hidden="true">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" opacity="0.25" />
                <path d="M22 12a10 10 0 0 1-10 10" fill="none" stroke="currentColor" strokeWidth="4" />
              </svg>
            )}
            {status === 'sending' ? 'Sending…' : 'Send'}
          </button>
        </div>
      </form>

      {/* Toast (animated) */}
      <AnimatePresence>
        {toast && (
          <motion.div
            key="home-toast"
            role="status"
            aria-live="polite"
            initial={{ opacity: 0, x: 16, y: 16 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            exit={{ opacity: 0, x: 16, y: 16 }}
            transition={{ duration: 0.22 }}
            className={`fixed bottom-6 right-6 z-50 rounded-xl border px-4 py-3 shadow-lg bg-surface pointer-events-auto
            ${toast.variant === 'ok' ? 'border-primary' : 'border-red-500'}`}
          >
            <div className="flex items-center gap-2">
              {toast.variant === 'ok' ? (
                <CheckCircle2 className="h-5 w-5 text-primary" />
              ) : (
                <AlertTriangle className="h-5 w-5 text-red-400" />
              )}
              <span className="text-sm">{toast.msg}</span>
              <button
                aria-label="Close"
                onClick={() => setToast(null)}
                className="ml-2 p-1 rounded hover:bg-background/40"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
