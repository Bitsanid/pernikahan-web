import { notFound } from "next/navigation";
import { templates } from "@/lib/data";
import { ModernElegantTemplate } from "@/components/templates/ModernElegant";
import { AdatJawaTemplate } from "@/components/templates/AdatJawa";
import { FloralGardenTemplate } from "@/components/templates/FloralGarden";
import type { Metadata } from "next";

type Params = Promise<{ id: string }>;

const templateComponents: Record<string, React.ComponentType> = {
  "modern-elegant": ModernElegantTemplate,
  "adat-jawa": AdatJawaTemplate,
  "floral-garden": FloralGardenTemplate,
};

export async function generateStaticParams() {
  return templates.map((t) => ({ id: t.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { id } = await params;
  const template = templates.find((t) => t.id === id);
  if (!template) return { title: "Template Tidak Ditemukan" };
  return {
    title: `${template.name} - Undangan Pernikahan Digital | NikahDigital`,
    description: template.description,
  };
}

export default async function UndanganPage({
  params,
}: {
  params: Params;
}) {
  const { id } = await params;
  const TemplateComponent = templateComponents[id];
  if (!TemplateComponent) notFound();

  return <TemplateComponent />;
}
