import React, { useState, useEffect } from 'react';
import { Mail, MessageSquare, Instagram } from 'lucide-react';
import { LinkedInIcon } from './Icons';
import { content } from '../lib/content';

const contact = content.contact;

const phrases = [
  "am a Digital Marketer.",
  "do SEO research and content strategy.",
  "write Reels scripts and shoot short-form video.",
  "build WordPress sites, including my own: SoloVisuals."
];

function Typewriter() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setText(currentPhrase.substring(0, text.length + 1));
        if (text.length + 1 === currentPhrase.length) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setText(currentPhrase.substring(0, text.length - 1));
        if (text.length === 0) {
          setIsDeleting(false);
          setPhraseIndex((prev) => (prev + 1) % phrases.length);
        }
      }
    }, isDeleting ? 30 : 60);

    return () => clearTimeout(timer);
  }, [text, isDeleting, phraseIndex]);

  return (
    <span>
      {text}
      <span className="inline-block w-2.5 h-5 ml-1 bg-foreground animate-pulse align-middle" />
    </span>
  );
}

export default function Hero() {
  const scrollToProjects = (e) => {
    e.preventDefault();
    const elem = document.getElementById('projects');
    if (elem) {
      const navHeight = 64;
      const elemPosition = elem.getBoundingClientRect().top + window.pageYOffset - navHeight;
      window.scrollTo({
        top: elemPosition,
        behavior: 'smooth'
      });
    }
  };

  const scrollToContact = (e) => {
    e.preventDefault();
    const elem = document.getElementById('contact');
    if (elem) {
      const navHeight = 64;
      const elemPosition = elem.getBoundingClientRect().top + window.pageYOffset - navHeight;
      window.scrollTo({ top: elemPosition, behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="h-screen flex items-center justify-center pt-16 px-4 md:px-8 overflow-hidden">
      <div className="max-w-4xl w-full mx-auto">
        <div className="w-full bg-card border-4 border-foreground shadow-[8px_8px_0px_0px_var(--foreground)] text-foreground overflow-hidden rounded-none transition-all duration-300">
          {/* Terminal Window Header */}
          <div className="flex items-center justify-between bg-foreground text-background px-4 py-3 border-b-4 border-foreground select-none font-mono">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full border-2 border-background bg-background"></span>
              <span className="w-3 h-3 rounded-full border-2 border-background bg-background/50"></span>
              <span className="w-3 h-3 rounded-full border-2 border-background bg-transparent"></span>
            </div>
            <span className="text-xs font-bold tracking-widest uppercase opacity-90">
              IMRAN_ALI.EXE
            </span>
            <div className="text-[10px] sm:text-xs font-bold border-2 border-background bg-background text-foreground px-2 py-0.5 select-none hidden sm:block">
              SYS_INIT
            </div>
          </div>

          {/* Terminal Body */}
          <div className="p-4 sm:p-6 md:p-8 flex flex-col gap-4 md:gap-6 text-left">
            <div className="self-start inline-flex items-center gap-2 px-2.5 py-1 border-3 border-foreground bg-foreground/5 text-foreground font-mono text-xs sm:text-sm font-bold tracking-wider uppercase shadow-[3px_3px_0px_0px_var(--foreground)]">
              Hi, my name is
            </div>

            <div className="space-y-1">
              <h1 className="text-foreground text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight select-none leading-none">
                Imran Ali<span className="text-foreground/30">.</span>
              </h1>
              <div className="w-24 sm:w-28 h-2.5 bg-foreground mt-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,0.15)]"></div>
              <p className="font-mono text-xs sm:text-sm font-black uppercase tracking-wider text-muted-foreground pt-3">
                Digital Marketer | SEO & Content Strategist | Creative Content Specialist
              </p>
            </div>

            {/* Terminal Box */}
            <div className="border-3 border-foreground bg-background p-3 shadow-[4px_4px_0px_0px_var(--foreground)] text-foreground font-mono">
              <div className="flex items-center gap-2 text-foreground/40 text-[10px] sm:text-xs mb-1 select-none">
                <span className="w-2 h-2 rounded-full bg-foreground/60 animate-pulse"></span>
                <span>terminal_status: active</span>
              </div>
              <div className="text-lg sm:text-xl md:text-2xl font-bold flex items-center min-h-8 leading-relaxed">
                <span className="text-foreground mr-2 select-none">{'>'}</span>
                <Typewriter />
              </div>
            </div>

            <p className="text-muted-foreground text-sm sm:text-base md:text-lg leading-relaxed max-w-3xl">
              I combine audience research, SEO, scriptwriting, short-form video and WordPress to create content that supports brand visibility and online growth. Take a look at my case studies below.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-1 w-full font-mono">
              <a
                href="#projects"
                onClick={scrollToProjects}
                className="w-full sm:w-auto cursor-pointer border-3 border-foreground bg-card text-foreground text-xs sm:text-sm font-bold uppercase tracking-wider px-6 py-3 rounded-none shadow-[4px_4px_0px_0px_var(--foreground)] hover:bg-foreground hover:text-background hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_var(--foreground)] active:translate-x-0 active:translate-y-0 active:shadow-none transition-all text-center flex items-center justify-center"
              >
                View Case Studies
              </a>
              <a
                href="#contact"
                onClick={scrollToContact}
                className="w-full sm:w-auto cursor-pointer border-3 border-dashed border-foreground bg-card text-foreground text-xs sm:text-sm font-bold uppercase tracking-wider px-6 py-3 rounded-none shadow-[4px_4px_0px_0px_var(--foreground)] hover:bg-foreground hover:text-background hover:border-solid hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_var(--foreground)] active:translate-x-0 active:translate-y-0 active:shadow-none transition-all text-center flex items-center justify-center gap-2"
              >
                <Mail className="size-4 shrink-0" />
                Hire Me
              </a>
            </div>

            {/* Social Links */}
            <div className="flex space-x-3 sm:space-x-4 pt-2">
              <a
                href={contact.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Profile"
                className="p-2.5 border-3 border-foreground bg-card text-foreground rounded-none shadow-[4px_4px_0px_0px_var(--foreground)] hover:bg-foreground hover:text-background hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_var(--foreground)] active:translate-x-0 active:translate-y-0 active:shadow-none transition-all"
              >
                <Instagram className="size-6" />
              </a>
              <a
                href={contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="p-2.5 border-3 border-foreground bg-card text-foreground rounded-none shadow-[4px_4px_0px_0px_var(--foreground)] hover:bg-foreground hover:text-background hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_var(--foreground)] active:translate-x-0 active:translate-y-0 active:shadow-none transition-all"
              >
                <LinkedInIcon className="size-6" />
              </a>
              <a
                href={`mailto:${contact.email}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Email Address"
                className="p-2.5 border-3 border-foreground bg-card text-foreground rounded-none shadow-[4px_4px_0px_0px_var(--foreground)] hover:bg-foreground hover:text-background hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_var(--foreground)] active:translate-x-0 active:translate-y-0 active:shadow-none transition-all"
              >
                <Mail className="size-6" />
              </a>
              <a
                href={contact.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp Contact"
                className="p-2.5 border-3 border-foreground bg-card text-foreground rounded-none shadow-[4px_4px_0px_0px_var(--foreground)] hover:bg-foreground hover:text-background hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_var(--foreground)] active:translate-x-0 active:translate-y-0 active:shadow-none transition-all"
              >
                <MessageSquare className="size-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}