import { useState, type FormEvent } from "react";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MessageCircle,
  Music2,
} from "lucide-react";
import { contact, contactEmail } from "../content";
import { Reveal } from "./Reveal";

const inputClass =
  "mt-1.5 w-full rounded-xl bg-[#f9fafb] px-4 py-3 text-sm text-ink ring-1 ring-slate-200/60 outline-none transition-shadow duration-300 placeholder:text-muted/60 focus:ring-2 focus:ring-brand";

export function Contact() {
  const [sent, setSent] = useState(false);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    const subject = encodeURIComponent(`PlateUp enquiry from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`,
    );

    window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section id="contact" className="scroll-mt-20 bg-[#f9fafb] px-4 pt-5 pb-8 md:px-6 md:pt-6 md:pb-10">
      <div className="mx-auto max-w-[1400px]">
        <div className="overflow-hidden rounded-[48px] border border-slate-200/50 bg-white p-6 shadow-[0_40px_100px_-20px_rgba(232,119,34,0.08)] sm:p-8 lg:p-12">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-deep">
              Contact us
            </p>
            <h2 className="mt-3 font-display text-3xl font-medium tracking-tight text-ink sm:text-4xl">
              Let’s talk about your room
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-muted">
              WhatsApp, email, or social — or send a message and we’ll open it in
              your mail app.
            </p>
          </Reveal>

          <div className="mt-8 grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <Reveal>
              <div className="space-y-4">
                <a
                  href={contact.whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  className="tilt-card flex items-start gap-4 rounded-2xl border border-slate-200/60 bg-[#f9fafb] p-5"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand-deep">
                    <MessageCircle className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-xs font-semibold uppercase tracking-[0.12em] text-muted">
                      WhatsApp
                    </span>
                    <span className="mt-1 block font-medium text-ink">
                      {contact.whatsappDisplay}
                    </span>
                  </span>
                </a>

                <a
                  href={`mailto:${contactEmail}`}
                  className="tilt-card flex items-start gap-4 rounded-2xl border border-slate-200/60 bg-[#f9fafb] p-5"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand-deep">
                    <Mail className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-xs font-semibold uppercase tracking-[0.12em] text-muted">
                      Email
                    </span>
                    <span className="mt-1 block font-medium text-ink">{contactEmail}</span>
                  </span>
                </a>

                <div className="rounded-2xl border border-slate-200/60 bg-[#f9fafb] p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-muted">
                    Social
                  </p>
                  <div className="mt-4 flex flex-wrap gap-3">
                    {[
                      { href: contact.instagram, label: "Instagram", Icon: Instagram },
                      { href: contact.tiktok, label: "TikTok", Icon: Music2 },
                      { href: contact.linkedin, label: "LinkedIn", Icon: Linkedin },
                      { href: contact.facebook, label: "Facebook", Icon: Facebook },
                    ].map(({ href, label, Icon }) => (
                      <a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={label}
                        className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200/60 bg-white text-ink transition-colors duration-300 hover:border-brand hover:bg-brand hover:text-white"
                      >
                        <Icon className="h-5 w-5" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={80}>
              <form
                onSubmit={onSubmit}
                className="rounded-2xl border border-slate-200/60 bg-[#f9fafb] p-6 sm:p-7"
              >
                <h3 className="font-display text-xl font-semibold text-ink">
                  Send a message
                </h3>
                <p className="mt-1 text-sm text-muted">
                  We’ll open your email app with this note addressed to us.
                </p>

                <label className="mt-6 block text-sm font-medium text-ink">
                  Name
                  <input
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    placeholder="Your name"
                    className={inputClass}
                  />
                </label>

                <label className="mt-4 block text-sm font-medium text-ink">
                  Email
                  <input
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="you@restaurant.com"
                    className={inputClass}
                  />
                </label>

                <label className="mt-4 block text-sm font-medium text-ink">
                  Message
                  <textarea
                    name="message"
                    required
                    rows={5}
                    placeholder="How can we help?"
                    className={`${inputClass} resize-y`}
                  />
                </label>

                <button
                  type="submit"
                  className="mt-6 w-full rounded-full bg-brand px-5 py-3 text-sm font-semibold text-white transition-transform duration-300 hover:scale-[1.02] hover:bg-brand-deep"
                >
                  Send message
                </button>

                {sent && (
                  <p className="mt-3 text-center text-sm text-muted">
                    Message ready in your email app.
                  </p>
                )}
              </form>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
