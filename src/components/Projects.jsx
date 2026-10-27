import React from 'react';
import { ExternalLink } from 'lucide-react';
import FadeIn from './FadeIn';
import { content, caseStudies } from '../lib/content';

const statusStyle = {
  Live: "bg-foreground text-background",
  Ongoing: "bg-foreground text-background",
  Delivered: "bg-foreground text-background",
  Concept: "bg-background text-foreground border-dashed"
};

function Row({ label, children }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-[130px_1fr] gap-1 sm:gap-4 py-3 border-t-2 border-dashed border-foreground/15 first:border-t-0">
      <div className="font-mono text-xs font-black uppercase tracking-wider text-muted-foreground pt-0.5">{label}</div>
      <div className="text-foreground/80 font-medium text-sm sm:text-base leading-relaxed">{children}</div>
    </div>
  );
}

function List({ items }) {
  return (
    <ul className="list-disc pl-5 space-y-1">
      {items.map((item, i) => <li key={i}>{item}</li>)}
    </ul>
  );
}

function CaseStudy({ title, subtitle, status, context, objective, role, process, deliverables, outcome, evidence, tags }) {
  return (
    <div className="group relative w-full">
      <div className="bg-card text-foreground border-4 border-foreground shadow-[6px_6px_0px_0px_var(--foreground)] group-hover:-translate-x-1 group-hover:-translate-y-1 group-hover:shadow-[10px_10px_0px_0px_var(--foreground)] transition-all duration-300 ease-out">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 p-6 sm:p-8 border-b-4 border-foreground">
          <div>
            <h3 className="text-2xl sm:text-3xl font-black tracking-tight">{title}</h3>
            <div className="font-mono text-xs font-bold text-muted-foreground uppercase tracking-wider mt-1">{subtitle}</div>
          </div>
          <span className={`self-start font-mono text-xs font-black tracking-widest uppercase px-2.5 py-1 border-2 border-foreground select-none ${statusStyle[status] || ''}`}>
            {status}
          </span>
        </div>

        <div className="p-6 sm:p-8">
          <Row label="Brief">{context}</Row>
          <Row label="Objective">{objective}</Row>
          <Row label="My Role">{role}</Row>
          <Row label="Process"><List items={process} /></Row>
          <Row label="Deliverables"><List items={deliverables} /></Row>
          {outcome && <Row label="Outcome">{outcome}</Row>}
          {evidence && evidence.length > 0 && (
            <Row label="Evidence">
              <div className="flex flex-wrap gap-3">
                {evidence.map((e, i) => (
                  <a
                    key={i}
                    href={e.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-black underline underline-offset-4 decoration-2 hover:bg-foreground hover:text-background px-1 transition-all"
                  >
                    {e.label}
                    <ExternalLink size={14} />
                  </a>
                ))}
              </div>
            </Row>
          )}
          <div className="flex flex-wrap gap-2 pt-4 mt-2 border-t-2 border-dashed border-foreground/15">
            {tags.map((t, i) => (
              <span key={i} className="px-2.5 py-1 text-xs font-mono font-black uppercase bg-background border-2 border-foreground select-none">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function WorkCard({ title, subtitle, description, technologies, liveLink }) {
  return (
    <div className="group relative w-full h-full flex flex-col">
      <div className="relative flex flex-col grow bg-card text-foreground border-4 border-foreground shadow-[6px_6px_0px_0px_var(--foreground)] group-hover:-translate-x-1 group-hover:-translate-y-1 group-hover:shadow-[10px_10px_0px_0px_var(--foreground)] transition-all duration-300 ease-out">
        <div className="flex flex-col grow p-6 sm:p-7">
          <div className="flex items-start justify-between gap-3 mb-2">
            <div>
              <h3 className="text-xl sm:text-2xl font-black tracking-tight">{title}</h3>
              <div className="font-mono text-xs font-bold text-muted-foreground uppercase tracking-wider mt-0.5">{subtitle}</div>
            </div>
            {liveLink && (
              <a
                href={liveLink}
                target="_blank"
                rel="noopener noreferrer"
                title="View Site"
                className="shrink-0 p-2 border-2 border-foreground bg-card text-foreground shadow-[2px_2px_0px_0px_var(--foreground)] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[3px_3px_0px_0px_var(--foreground)] active:translate-x-0 active:translate-y-0 active:shadow-none transition-all flex items-center justify-center"
              >
                <ExternalLink size={16} />
              </a>
            )}
          </div>
          <p className="text-foreground/80 leading-relaxed font-medium text-sm sm:text-base mb-6 grow">{description}</p>
          <div className="w-full h-0.5 border-b-2 border-dashed border-foreground/15 my-4 mt-auto"></div>
          <div className="flex flex-wrap gap-2 mt-2">
            {technologies.map((tech, idx) => (
              <span key={idx} className="px-2.5 py-1 text-xs font-mono font-black uppercase bg-background border-2 border-foreground select-none">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const moreWork = content.moreWork;

  return (
    <section id="projects" className="md:py-24 py-12 w-full border-b-4 border-foreground">
      <div className="max-w-5xl mx-auto px-6 sm:px-10">
        <FadeIn>
          <div className="text-center mb-20">
            <span className="font-mono inline-block px-3 py-1.5 text-xs font-black tracking-wider uppercase bg-foreground text-background border-2 border-foreground mb-4 select-none">
              Selected Work
            </span>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-foreground select-none uppercase font-mono mb-4">
              Case Studies
            </h2>
            <div className="w-24 h-1.5 bg-foreground mx-auto mb-4"></div>
            <p className="text-md sm:text-lg text-muted-foreground max-w-2xl mx-auto font-medium">
              What I worked on, what I did myself, and what came out of it.
            </p>
          </div>
        </FadeIn>

        <div className="space-y-12">
          {caseStudies.map((cs, idx) => (
            <FadeIn key={cs.id} delay={0.1}>
              <CaseStudy {...cs} />
            </FadeIn>
          ))}
        </div>

        <FadeIn>
          <div className="text-center mt-24 mb-14">
            <h3 className="text-3xl md:text-4xl font-black tracking-tight text-foreground select-none uppercase font-mono">
              More Work
            </h3>
            <div className="w-16 h-1.5 bg-foreground mx-auto mt-3"></div>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {moreWork.map((p, idx) => (
            <FadeIn key={p.id} delay={idx * 0.1}>
              <WorkCard {...p} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}