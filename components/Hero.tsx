"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";

import { profile } from "@/lib/data";
import { RevealText } from "./RevealText";
import { Button } from "./Button";

export function Hero() {
  return (
    <section
      id="home"
      className="grid-glow relative min-h-screen pt-28"
    >
      <div className="container-site grid min-h-[calc(100vh-8rem)] items-center gap-14 pb-20 lg:grid-cols-[1.05fr_.95fr]">
        {/* =====================================================
            LEFT CONTENT
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#c9a24a]">
            Hello, I&apos;m
          </p>

          <h1 className="display max-w-2xl text-5xl font-semibold leading-[0.98] sm:text-6xl md:text-7xl">
            Sabin Karmacharya
          </h1>

          <p className="mt-6 text-xl font-semibold text-[#16384f] dark:text-white">
            {profile.role}
          </p>

          <div className="mt-5 max-w-xl text-lg text-[var(--muted)]">
            <RevealText>{profile.tagline}</RevealText>
          </div>

          {/* Buttons */}

          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="#experience">
              View Experience
            </Button>

            <Button
              href="#contact"
              secondary
            >
              Contact Me
            </Button>

            <button
              type="button"
              onClick={() => window.print()}
              className="inline-flex min-h-11 items-center rounded-[14px] border border-[var(--line)] px-5 text-sm font-semibold transition hover:-translate-y-0.5 hover:border-[#c9a24a] hover:text-[#c9a24a] focus:outline-none focus:ring-2 focus:ring-[#c9a24a]/50"
            >
              Download CV
            </button>
          </div>

          {/* Social Links */}

          <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-[var(--muted)]">
            <a
              href={profile.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold transition hover:text-[#c9a24a]"
            >
              Facebook
            </a>

            <a
              href={profile.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 transition hover:text-[#c9a24a]"
            >
              <span className="font-bold">◉</span>
              WhatsApp
            </a>

            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-1 transition hover:text-[#c9a24a]"
            >
              <Mail size={16} />
              Email
            </a>

            <a
              href={`tel:${profile.phone}`}
              className="flex items-center gap-1 transition hover:text-[#c9a24a]"
            >
              <Phone size={16} />
              Phone
            </a>
          </div>
        </motion.div>

        {/* =====================================================
            RIGHT PROFILE IMAGE
        ====================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.96,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 0.8,
            delay: 0.15,
          }}
          className="relative mx-auto w-full max-w-[530px]"
        >
          {/* Decorative glow */}

          <div
            className="absolute -inset-5 rounded-[36px] bg-[#c9a24a]/10 blur-2xl"
            aria-hidden="true"
          />

          {/* Image Card */}

          <div className="gold-ring relative overflow-hidden rounded-[28px] border border-[#c9a24a]/40 bg-[var(--card)] p-3">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[22px] bg-[#e8eef2]">
             <Image
  src="/profile.jpg"
  alt="Sabin Karmacharya - Senior Waiter and Hospitality Professional"
  fill
  priority
  sizes="(max-width: 768px) 90vw, 530px"
  className="object-cover"
/>

              {/* Current Location */}

              <div className="absolute left-4 top-4 rounded-full bg-white/85 px-3 py-2 text-xs font-semibold text-[#16384f] shadow-sm backdrop-blur">
                <span
                  className="mr-1 inline-block h-2 w-2 rounded-full bg-green-500"
                  aria-hidden="true"
                />
                Currently in Dubai
              </div>

              {/* Fine Dining Badge */}

              <div className="absolute bottom-4 left-4 rounded-2xl bg-white/80 px-3 py-2 text-xs font-semibold text-[#16384f] shadow-sm backdrop-blur">
                Fine Dining
              </div>

              {/* Guest Experience Badge */}

              <div className="absolute bottom-4 right-4 rounded-2xl bg-white/80 px-3 py-2 text-xs font-semibold text-[#16384f] shadow-sm backdrop-blur">
                Guest Experience
              </div>

              {/* Dubai / Nepal Badge */}

              <div className="absolute right-4 top-16 rounded-2xl bg-white/80 px-3 py-2 text-xs font-semibold text-[#16384f] shadow-sm backdrop-blur">
                Dubai · Nepal
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}