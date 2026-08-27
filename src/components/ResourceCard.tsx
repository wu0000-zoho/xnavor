import React from 'react';
import Link from 'next/link';

export default function ResourceCard({ title, description, href }: { title: string; description: string; href?: string }) {
  return (
    <article className="p-6 rounded-lg border border-slate-100 dark:border-slate-700 bg-white dark:bg-slate-800">
      <div className="text-sm font-semibold">{title}</div>
      <div className="mt-2 text-sm text-slate-500 dark:text-slate-400">{description}</div>
      {href ? (
        <div className="mt-4">
          <Link href={href} className="text-sm text-sky-600 hover:underline">Read →</Link>
        </div>
      ) : null}
    </article>
  );
}
