"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* soft gradient blob */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-80 w-80 rounded-full blur-3xl opacity-30 bg-[linear-gradient(135deg,#22D3EE_0%,#A78BFA_50%,#F472B6_100%)]" />

      <div className="mx-auto max-w-6xl px-6 py-16">
        <motion.h1
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="text-4xl md:text-5xl font-bold leading-tight"
        >
          Building reliable, fast, human-centered web apps.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.45 }}
          className="mt-3 text-sm md:text-base text-muted max-w-2xl"
        >
          React/TypeScript, Tailwind, and product thinking—case studies, metrics, and clean code you can browse.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.45 }}
          className="mt-8 flex flex-wrap gap-3"
        >
          <Link href="/projects" className="btn-primary">View Projects</Link>
          <Link href="/case-studies" className="underline text-primary">Read a Case Study</Link>
        </motion.div>
      </div>
    </section>
  );
}
