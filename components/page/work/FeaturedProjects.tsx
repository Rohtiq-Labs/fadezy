"use client";

import SectionContainer from "@/components/utilities/containers/SectionContainer";
import ArticleContainer from "@/components/utilities/containers/ArticleContainer";
import CustomScrollAnimation from "@/components/utilities/animations/scroll/CustomScrollAnimation";
import TextRevealScrollAnimation from "@/components/utilities/animations/scroll/TextRevealScrollAnimation";
import ProjectCard from "@/components/utilities/cards/ProjectCard";
import HeadingSmDark from "@/components/utilities/headings/HeadingSmDark";
import { useCurrentLanguages } from "@/contents/languageSupportHooks";
import { workContents } from "@/contents/workContents";
import { cn } from "@/lib/tailwind/cn";
import { FC } from "react";

const FeaturedProjects: FC = () => {
  const lang = useCurrentLanguages();
  const { heading, description, projects } = workContents[lang].featuredProjects;

  return (
    <SectionContainer
      tight
      className="flex flex-col gap-6"
      aria-labelledby="featured-projects-heading"
    >
      <ArticleContainer
        title={heading}
        description={description}
        scrollTriggerVars={{
          start: () => "top center",
          end: () => "top center"
        }}
      />
      <div
        className="grid grid-cols-2 lg:grid-cols-1 w-full gap-6 lg:gap-8"
        aria-label={heading}
      >
        {projects.map((project, i) => (
          <div
            key={`${project.salonName}-${i}`}
            className={cn(
              "w-full max-w-[720px] flex flex-col gap-4 overflow-auto",
              {
                "justify-self-start lg:justify-self-center": i % 2 === 0,
                "justify-self-end lg:justify-self-center": i % 2 !== 0
              }
            )}
          >
            <TextRevealScrollAnimation
              scrollTriggerVars={{
                start: () => "center bottom",
                end: () => "center bottom"
              }}
              trigger="self"
            >
              <HeadingSmDark>{project.salonName}</HeadingSmDark>
            </TextRevealScrollAnimation>
            <CustomScrollAnimation
              scrollTriggerVars={{
                start: () => "center bottom",
                end: () => "center bottom"
              }}
              duration={0.75}
              trigger="self"
              styleFrom={{ opacity: 0, transform: "scale(0.9)" }}
              styleTo={{ opacity: 1, transform: "scale(1)" }}
            >
              <ProjectCard
                index={`0${i + 1}.`}
                description={project.description}
                mediaSrc={project.mockupSrc}
                mediaType="image"
                projectLink={project.demoLink}
              />
            </CustomScrollAnimation>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
};

export default FeaturedProjects;
