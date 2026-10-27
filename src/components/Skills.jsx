import React from 'react';
import FadeIn from './FadeIn';
import { content } from '../lib/content';

function SkillBadge({ name, Icon, svgPath }) {
  return (
    <div className="group relative select-none w-full md:w-auto">
      <div className="flex flex-row items-center gap-3 px-4 py-2.5 bg-card text-foreground border-3 border-foreground rounded-none shadow-[3px_3px_0px_var(--foreground)] group-hover:-translate-x-0.5 group-hover:-translate-y-0.5 group-hover:shadow-[5px_5px_0px_var(--foreground)] active:translate-x-0 active:translate-y-0 active:shadow-[3px_3px_0px_var(--foreground)] transition-all duration-200">
        {Icon ? (
          <Icon className="size-5 md:size-6 shrink-0 text-foreground transition-transform duration-300 group-hover:rotate-6" />
        ) : svgPath ? (
          <img
            src={svgPath}
            alt={name}
            className="size-5 md:size-6 shrink-0 object-contain transition-transform duration-300 group-hover:rotate-6 dark:invert-0"
          />
        ) : null}
        <span className="font-mono text-sm font-bold tracking-tight text-foreground truncate">
          {name}
        </span>
      </div>
    </div>
  );
}

export default function Skills() {
  const skillCategories = content.skills;

  return (
    <section id="skills" className="md:py-24 py-12 w-full border-b-4 border-foreground">
      <div className="max-w-6xl mx-auto px-6 sm:px-10">
        <FadeIn>
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-foreground select-none uppercase font-mono">
              Skills & Tools
            </h2>
            <div className="w-20 h-2 bg-foreground mx-auto mt-3"></div>
            <p className="text-muted-foreground text-md sm:text-lg mt-4 font-medium">
              Skills grouped by what I actually do.
            </p>
          </div>
        </FadeIn>

        {skillCategories.map((category, catIdx) => (
          <div
            key={category.title}
            className="flex flex-col md:flex-row items-stretch gap-6 md:gap-8 mb-12 border-b-2 border-dashed border-foreground/15 pb-8 last:border-b-0 last:pb-0"
          >
            <div className="w-full md:w-1/4 shrink-0 flex items-center md:items-start">
              <FadeIn delay={catIdx * 0.1}>
                <div className="inline-flex items-center gap-2 bg-foreground text-background px-4 py-2 border-3 border-foreground shadow-[3px_3px_0px_var(--foreground)] font-mono text-sm sm:text-base font-black uppercase tracking-wider select-none">
                  {category.title}
                </div>
              </FadeIn>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:flex xl:flex-wrap gap-4 w-full justify-start items-center">
              {category.skills.map((skill, skillIdx) => (
                <FadeIn
                  key={skill.name}
                  delay={catIdx * 0.1 + skillIdx * 0.05}
                  className="w-full xl:w-auto"
                >
                  <SkillBadge {...skill} />
                </FadeIn>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}