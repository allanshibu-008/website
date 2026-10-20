import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { CORE_SERVICES } from '@/data/websiteData';
import ServiceDetailClient from './ServiceDetailClient';

export function generateStaticParams() {
  return CORE_SERVICES.map((s) => ({
    slug: s.slug,
  }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = CORE_SERVICES.find((s) => s.slug === slug);
  if (!service) {
    return { title: 'Service Not Found | Hashem General Contracting Est.' };
  }
  return {
    title: `${service.title} | Hashem General Contracting Est. Saudi Arabia`,
    description: service.shortDesc,
    openGraph: {
      title: `${service.title} - Hashem General Contracting Est.`,
      description: service.shortDesc,
      images: [{ url: service.featuredImage }],
    },
  };
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = CORE_SERVICES.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  return <ServiceDetailClient service={service} />;
}
