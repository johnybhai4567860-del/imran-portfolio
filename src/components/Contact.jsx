import React, { useState } from 'react';
import { Mail, Terminal, Copy, Check, MessageSquare, Instagram, Globe } from 'lucide-react';
import FadeIn from './FadeIn';
import { LinkedInIcon } from './Icons';
import { content } from '../lib/content';

const contact = content.contact;

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const email = contact.email;

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="min-h-screen py-20 w-full relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <FadeIn>
          <div className="text-center mb-16">
            <span className="font-mono inline-block px-3 py-1.5 text-xs font-black tracking-wider uppercase bg-foreground text-background border-2 border-foreground mb-4 select-none">
              Get In Touch
            </span>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-foreground select-none uppercase font-mono mb-4">
              Contact Me
            </h2>
            <div className="w-20 h-1.5 bg-foreground mx-auto mb-4"></div>
            <p className="text-md sm:text-lg text-muted-foreground max-w-2xl mx-auto font-medium">
              {contact.intro}
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-10 items-stretch">
          {/* Card 1: Email CTA */}
          <FadeIn delay={0.2} direction="right">
            <div className="bg-card text-foreground p-8 h-full rounded-none border-4 border-foreground shadow-[6px_6px_0px_var(--foreground)] hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[10px_10px_0px_var(--foreground)] active:translate-x-0 active:translate-y-0 active:shadow-[6px_6px_0px_var(--foreground)] transition-all duration-300 flex flex-col justify-center items-center text-center">
              <div className="bg-foreground/5 p-4 border-3 border-foreground rounded-none mb-6">
                <Mail className="size-10 text-foreground" />
              </div>
              <h3 className="text-2xl font-black mb-3">Send me an email</h3>
              <p className="text-muted-foreground font-medium text-sm leading-relaxed mb-8 max-w-sm">
                The best way to reach me for jobs, projects or collaborations.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 w-full justify-center">
                <a
                  href={`mailto:${email}`}
                  className="cursor-pointer border-3 border-foreground bg-card text-foreground font-mono text-sm sm:text-base font-bold uppercase tracking-wider px-6 py-3 rounded-none shadow-[4px_4px_0px_var(--foreground)] hover:bg-foreground hover:text-background hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[8px_8px_0px_var(--foreground)] active:translate-x-0 active:translate-y-0 active:shadow-none transition-all text-center flex items-center justify-center gap-2"
                >
                  Say Hello {'>'}
                </a>
                <a
                  href={contact.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer border-3 border-foreground bg-background text-foreground font-mono text-sm sm:text-base font-bold uppercase tracking-wider px-6 py-3 rounded-none shadow-[4px_4px_0px_var(--foreground)] hover:bg-foreground hover:text-background hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[8px_8px_0px_var(--foreground)] active:translate-x-0 active:translate-y-0 active:shadow-none transition-all text-center flex items-center justify-center gap-2"
                >
                  <MessageSquare className="size-4" />
                  WhatsApp
                </a>
              </div>
            </div>
          </FadeIn>

          {/* Card 2: Terminal Copy Block */}
          <FadeIn delay={0.4} direction="left">
            <div className="bg-card text-foreground p-8 h-full rounded-none border-4 border-foreground shadow-[6px_6px_0px_var(--foreground)] hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[10px_10px_0px_var(--foreground)] active:translate-x-0 active:translate-y-0 active:shadow-[6px_6px_0px_var(--foreground)] transition-all duration-300 flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-6 text-foreground font-mono text-xs border-b-3 border-foreground pb-4 select-none">
                <Terminal size={14} className="animate-pulse" />
                <span className="font-bold uppercase tracking-wider">im_terminal</span>
              </div>

              <div className="space-y-6 font-mono">
                <div className="text-foreground/90 font-bold text-sm select-none">
                  <span className="text-foreground/60 mr-2">➜</span>
                  <span className="text-foreground/80">~</span> show contact-info
                </div>

                <div className="bg-foreground/5 p-4 border-2 border-foreground flex items-center justify-between hover:bg-foreground/10 transition-colors">
                  <code className="text-foreground font-bold text-xs sm:text-sm break-all">
                    {email}
                  </code>
                  <button
                    onClick={handleCopy}
                    className="p-2 border-2 border-foreground bg-card text-foreground shadow-[2px_2px_0px_var(--foreground)] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[3px_3px_0px_var(--foreground)] active:translate-x-0 active:translate-y-0 active:shadow-none transition-all cursor-pointer relative flex items-center justify-center"
                    title="Copy Email"
                  >
                    {copied ? (
                      <Check size={14} className="text-foreground" />
                    ) : (
                      <Copy size={14} />
                    )}
                    <span
                      className={`absolute -top-10 left-1/2 -translate-x-1/2 bg-foreground text-background font-mono text-xs font-black px-2 py-1 border-2 border-foreground transition-opacity whitespace-nowrap select-none ${
                        copied ? "opacity-100" : "opacity-0 pointer-events-none"
                      }`}
                    >
                      Copied!
                    </span>
                  </button>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-4 mt-2 border-t-2 border-dashed border-foreground/15">
                  <a
                    href={contact.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground font-black underline underline-offset-4 decoration-2 hover:bg-foreground hover:text-background px-1 transition-all flex items-center gap-2 text-xs"
                  >
                    <Globe className="size-4 shrink-0" />
                    <span className="truncate">solovisuals.in</span>
                  </a>
                  <a
                    href={contact.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground font-black underline underline-offset-4 decoration-2 hover:bg-foreground hover:text-background px-1 transition-all flex items-center gap-2 text-xs"
                  >
                    <LinkedInIcon className="size-4 shrink-0" />
                    <span className="truncate">linkedin.com/in/imran-ali</span>
                  </a>
                  <a
                    href={contact.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground font-black underline underline-offset-4 decoration-2 hover:bg-foreground hover:text-background px-1 transition-all flex items-center gap-2 text-xs"
                  >
                    <MessageSquare className="size-4 shrink-0" />
                    <span className="truncate">{contact.phone}</span>
                  </a>
                  <a
                    href={contact.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground font-black underline underline-offset-4 decoration-2 hover:bg-foreground hover:text-background px-1 transition-all flex items-center gap-2 text-xs"
                  >
                    <Instagram className="size-4 shrink-0" />
                    <span className="truncate">@fluxtsrsolo</span>
                  </a>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Footer */}
        <footer className="mt-24 text-center font-mono text-xs sm:text-sm font-black border-t-4 border-foreground pt-8 select-none text-muted-foreground uppercase tracking-wider">
          <p>Copyright © 2026 Imran Ali. All rights reserved.</p>
        </footer>
      </div>
    </section>
  );
}