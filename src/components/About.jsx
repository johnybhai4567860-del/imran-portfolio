import React from 'react';
import FadeIn from './FadeIn';
import { Tooltip, TooltipTrigger, TooltipContent } from './Tooltip';
import { content } from '../lib/content';

const { about } = content;
const stats = about.stats;
const journey = about.journey;

function EducationCard({ year, title, institution, degree, achievements, description, isHighlight }) {
  return (
    <div className="relative group w-full">
      <div
        className={`relative p-6 md:p-8 rounded-none bg-card text-foreground border-4 border-foreground shadow-[6px_6px_0px_0px_var(--foreground)] group-hover:-translate-x-1 group-hover:-translate-y-1 group-hover:shadow-[10px_10px_0px_0px_var(--foreground)] active:translate-x-0 active:translate-y-0 active:shadow-[6px_6px_0px_0px_var(--foreground)] transition-all duration-300 ease-out ${
          isHighlight ? "ring-4 ring-offset-2 ring-foreground/20" : ""
        }`}
      >
        <div className="relative z-10 flex flex-col gap-3 pr-2 sm:pr-32">
          <div className="sm:absolute sm:top-0 sm:right-0 flex items-center gap-2 mb-2 sm:mb-0 sm:translate-y-[-2px]">
            <span className="font-mono text-xs font-black tracking-widest uppercase bg-foreground/10 px-2 py-1 border-2 border-foreground select-none">
              {year}
            </span>
            {isHighlight && (
              <span className="font-mono text-[10px] font-black tracking-wider uppercase bg-foreground text-background px-2.5 py-1 border-2 border-foreground select-none">
                ACTIVE_SYS
              </span>
            )}
          </div>

          <h3 className="text-xl md:text-2xl font-black tracking-tight leading-snug whitespace-nowrap overflow-hidden text-ellipsis sm:overflow-visible">
            {title}
          </h3>

          {institution ? (
            <div className="flex flex-col gap-1">
              <Tooltip>
                <TooltipTrigger asChild>
                  <a
                    href={institution.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="self-start text-foreground underline underline-offset-4 decoration-2 decoration-foreground font-black hover:bg-foreground hover:text-background px-1 transition-all"
                  >
                    {institution.name}
                  </a>
                </TooltipTrigger>
                <TooltipContent className="w-72 p-4 bg-card border-3 border-foreground text-foreground rounded-none shadow-[4px_4px_0px_0px_var(--foreground)]">
                  <p className="text-sm font-semibold leading-relaxed mb-3">
                    {institution.tooltipDescription}
                  </p>
                  <a
                    href={institution.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground font-black text-sm flex items-center gap-1 hover:underline"
                  >
                    Visit Website {'>'}
                  </a>
                </TooltipContent>
              </Tooltip>
              {degree && (
                <p className="text-sm font-semibold text-muted-foreground mt-1">
                  {degree}
                </p>
              )}
            </div>
          ) : (
            degree && (
              <p className="text-sm font-semibold text-muted-foreground italic">
                {degree}
              </p>
            )
          )}

          {achievements && (
            <div className="flex flex-wrap items-center gap-2 mt-1">
              {achievements.honors?.map((honor, idx) => (
                <Tooltip key={idx}>
                  <TooltipTrigger asChild>
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-background border-2 border-foreground hover:bg-foreground hover:text-background transition-colors font-mono text-xs font-black cursor-help whitespace-nowrap">
                      {honor.name}
                    </div>
                  </TooltipTrigger>
                  <TooltipContent className="w-72 p-4 bg-card border-3 border-foreground text-foreground rounded-none shadow-[4px_4px_0px_0px_var(--foreground)]">
                    <div className="font-mono text-xs font-black uppercase text-muted-foreground mb-1">
                      {honor.years}
                    </div>
                    <p className="text-sm font-semibold leading-relaxed">
                      {honor.tooltipDescription}
                    </p>
                  </TooltipContent>
                </Tooltip>
              ))}
            </div>
          )}

          <div className="w-full h-1 bg-foreground/10 my-1"></div>

          <p className="text-foreground/80 leading-relaxed font-medium text-sm md:text-base">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="md:py-24 py-12 w-full border-b-4 border-foreground">
      <div className="max-w-6xl mx-auto px-6 sm:px-10">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-foreground select-none uppercase font-mono">
              About Me
            </h2>
            <div className="w-16 h-2 bg-foreground mx-auto mt-3"></div>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          <FadeIn direction="right" delay={0.2}>
            <div className="flex flex-col gap-6 text-left text-foreground bg-card border-4 border-foreground p-6 sm:p-10 shadow-[8px_8px_0px_0px_var(--foreground)]">
              <p className="text-lg leading-relaxed font-medium">
                {about.intro.paragraph1}
              </p>
              <p className="text-lg leading-relaxed font-medium">
                {about.intro.paragraph2}
              </p>
              <div className="grid grid-cols-3 gap-3 mt-4 pt-6 border-t-4 border-foreground">
                {stats.map((item, index) => (
                  <div
                    key={item.label}
                    className="text-center bg-background border-2 border-foreground p-3 shadow-[3px_3px_0px_0px_var(--foreground)]"
                  >
                    <div className={`text-xl sm:text-2xl font-black ${item.accent || 'text-foreground'}`}>
                      {item.value}
                    </div>
                    <div className="text-[10px] sm:text-xs font-mono font-black uppercase tracking-tight text-muted-foreground mt-1.5 leading-tight">
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="left" delay={0.4}>
            <div className="flex justify-center">
              <div className="relative w-80 h-96 bg-card border-4 border-foreground shadow-[10px_10px_0px_0px_var(--foreground)] p-3 select-none">
                <div className="w-full h-full border-2 border-foreground overflow-hidden">
                  <img
                    src="/profile.webp"
                    alt="Profile of Imran"
                    className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-105"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Education & Journey Section */}
      <div className="max-w-4xl mx-auto mt-28 px-6 sm:px-10">
        <FadeIn>
          <div className="text-center mb-16">
            <span className="font-mono inline-block px-3 py-1.5 text-xs font-black tracking-wider uppercase bg-foreground text-background border-2 border-foreground mb-4 select-none">
              My Journey
            </span>
            <h2 className="text-4xl font-black text-foreground mb-4 uppercase">
              Education & Growth
            </h2>
            <div className="w-24 h-1.5 bg-foreground mx-auto mb-4"></div>
            <p className="text-muted-foreground text-md sm:text-lg max-w-2xl mx-auto font-medium">
              Learning by doing: from course assignments to real social media work.
            </p>
          </div>
        </FadeIn>

        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-4 sm:left-6 top-0 bottom-0 w-1 bg-foreground"></div>
          <div className="space-y-10 md:space-y-14">
            {journey.map((item, index) => (
              <FadeIn key={item.id} delay={index * 0.2} direction="right">
                <div className="relative flex items-start">
                  <div className="absolute left-4 sm:left-6 w-6 h-6 rounded-full bg-background border-4 border-foreground transform -translate-x-1/2 mt-8 z-10 shadow-[2px_2px_0px_var(--foreground)]"></div>
                  <div className="w-full ml-10 sm:ml-14">
                    <EducationCard {...item} />
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