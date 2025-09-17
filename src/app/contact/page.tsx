'use client';
import { useState } from 'react';

type Status = 'idle' | 'sending' | 'ok' | 'error';
type ContactResponse = { ok: boolean; error?: string };

export default function ContactPage() {
  const [status, setStatus] = useState<Status>('idle');
  const [msg, setMsg] = useState('');

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('sending');

    const form = e.currentTarget;
    const fd = new FormData(form);

    const data = {
      name: String(fd.get('name') || ''),
      email: String(fd.get('email') || ''),
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
      setMsg("Thanks—I'll get back to you shortly.");
      form.reset();
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Something went wrong.';
      setStatus('error');
      setMsg(message);
    }
  }

  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="mx-auto max-w-3xl px-6 py-12">
        <h1 className="text-3xl md:text-4xl font-bold">Contact</h1>
        <p className="mt-2 text-sm text-muted">Tell me about your project or role.</p>

        <form onSubmit={onSubmit} className="mt-8 space-y-5 rounded-2xl border border-border bg-surface p-6">
          <div>
            <label htmlFor="name" className="block text-sm mb-1">Name</label>
            <input id="name" name="name" required className="w-full rounded-xl border border-border bg-background px-3 py-2" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm mb-1">Email</label>
            <input id="email" name="email" type="email" required className="w-full rounded-xl border border-border bg-background px-3 py-2" />
          </div>
          <div className="hidden">
            {/* Honeypot field to deter bots */}
            <label htmlFor="company">Company</label>
            <input id="company" name="company" autoComplete="off" />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm mb-1">Message</label>
            <textarea id="message" name="message" rows={6} required className="w-full rounded-xl border border-border bg-background px-3 py-2" />
          </div>

          <button type="submit" className="btn-primary disabled:opacity-70" disabled={status === 'sending'}>
            {status === 'sending' ? 'Sending...' : 'Send'}
          </button>

          {status !== 'idle' && (
            <p className={`text-sm ${status === 'ok' ? 'text-primary' : status === 'error' ? 'text-red-400' : 'text-muted'}`}>
              {msg}
            </p>
          )}
        </form>
      </section>
    </main>
  );
}
