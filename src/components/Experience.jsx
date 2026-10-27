import React from 'react';
import { ExternalLink } from 'lucide-react';
import FadeIn from './FadeIn';
import { content } from '../lib/content';

function ExperienceCard({ role, company, companyLink, duration, description, technologies, projectLink }) {
  return (
    <div className="group relative w-full">
      <div className="relative bg-card text-foreground p-6 sm:p-8 rounded-none border-4 border-foreground shadow-[6px_6px_0px_0px_var(--foreground)] group-hover:-translate-x-1 group-hover:-translate-y-1 group-hover:shadow-[10px_10px_0px_0px_var(--foreground)] active:translate-x-0 active:translate-y-0 active:shadow-[6px_6px_0px_0px_var(--foreground)] transition-all duration-300 ease-out">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
          <div className="flex items-center gap-2">
            <h3 className="text-xl sm:text-2xl font-black tracking-tight leading-snug">
              {role}
            </h3>
            {projectLink && (
              <a
                href={projectLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:bg-foreground hover:text-background p-1 border-2 border-transparent hover:border-foreground transition-all"
                title="View Project / Website"
              >
                <ExternalLink className="size-4.5" />
              </a>
            )}
          </div>
          <span className="font-mono text-xs font-black tracking-widest uppercase bg-foreground/10 px-2.5 py-1 border-2 border-foreground self-start sm:self-auto select-none">
            {duration}
          </span>
        </div>

        <div className="text-sm sm:text-base font-black text-foreground uppercase tracking-wider mb-2">
          {companyLink ? (
            <a
              href={companyLink}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 decoration-2 hover:bg-foreground hover:text-background px-1 transition-all"
            >
              {company}
            </a>
          ) : (
            company
          )}
        </div>

        <div className="w-full h-1 bg-foreground/10 my-3"></div>

        <p className="text-foreground/80 leading-relaxed font-medium text-sm sm:text-base">
          {description}
        </p>

        {technologies && (
          <>
            <div className="w-full h-0.5 border-b-2 border-dashed border-foreground/15 my-4"></div>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="font-mono text-xs font-black px-2.5 py-1 bg-background border-2 border-foreground shadow-[2px_2px_0px_var(--foreground)] hover:bg-foreground hover:text-background transition-colors select-none"
                >
                  {tech}
                </span>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default function Experience() {
  const experiences = content.experiences;

  return (
    <section id="experience" className="md:py-24 py-12 w-full border-b-4 border-foreground">
      <div className="max-w-4xl mx-auto px-6 sm:px-10">
        <FadeIn>
          <div className="text-center mb-20">
            <span className="font-mono inline-block px-3 py-1.5 text-xs font-black tracking-wider uppercase bg-foreground text-background border-2 border-foreground mb-4 select-none">
              My Path
            </span>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-foreground select-none uppercase font-mono">
              Experience
            </h2>
            <div className="w-16 h-2 bg-foreground mx-auto mt-3 mb-4"></div>
            <p className="text-md sm:text-lg text-muted-foreground max-w-2xl mx-auto font-medium">
              My work in social media, SEO and digital marketing so far.
            </p>
          </div>
        </FadeIn>

        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-4 sm:left-6 top-0 bottom-0 w-1 bg-foreground"></div>
          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <FadeIn key={exp.id} delay={idx * 0.2}>
                <div className="relative flex items-start">
                  <div className="absolute left-4 sm:left-6 w-6 h-6 rounded-full bg-background border-4 border-foreground transform -translate-x-1/2 top-8 z-10 shadow-[2px_2px_0px_var(--foreground)]"></div>
                  <div className="w-full ml-10 sm:ml-14">
                    <ExperienceCard {...exp} />
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}