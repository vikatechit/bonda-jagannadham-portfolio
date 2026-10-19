import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProjectView } from "@/components/ProjectView";
import { projects } from "@/data/projects";

type Props = { params: Promise<{ id: string }> };

export function generateStaticParams() {
  return projects.map((project) => ({ id: project.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const project = projects.find((item) => item.id === id);
  if (!project) return {};
  return {
    title: project.titleTe,
    description: project.descriptionEn,
  };
}

export default async function WorkPage({ params }: Props) {
  const { id } = await params;
  const project = projects.find((item) => item.id === id);
  if (!project) notFound();
  return <ProjectView project={project} />;
}
