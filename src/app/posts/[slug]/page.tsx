import { getPostBySlug } from '@/lib/content';

type Props = { params: { slug: string } };

export default async function PostPage({ params }: Props) {
  const post = await getPostBySlug(params.slug);
  if (!post) return <div className="p-8">Post not found</div>;

  return (
    <main className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-semibold">{post.meta.title}</h1>
      {post.meta.date ? <div className="text-sm text-slate-500 mt-2">{post.meta.date}</div> : null}

      <article className="prose dark:prose-invert mt-6" dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
    </main>
  );
}
