import { getAllResources } from '@/lib/content';
import ResourceCard from '@/components/ResourceCard';

export default async function ResourcesPage() {
  const resources = await getAllResources();
  return (
    <main className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-semibold">Resources</h1>
      <p className="mt-2 text-slate-600 dark:text-slate-300">Curated resources about headless tooling and cross-border commerce.</p>

      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {resources.map((r) => (
          <ResourceCard key={r.slug} title={r.title} description={r.description} href={`/resources/${r.slug}`} />
        ))}
      </div>
    </main>
  );
}
