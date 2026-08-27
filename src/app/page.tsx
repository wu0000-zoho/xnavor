import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-900 dark:bg-slate-900 dark:text-slate-100">
      <header className="max-w-6xl mx-auto px-6 py-8 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-md bg-black/5 dark:bg-white/6 flex items-center justify-center font-semibold">
            X
          </div>
          <div>
            <div className="text-lg font-semibold">Beijing Xnavor</div>
            <div className="text-xs text-slate-500 dark:text-slate-400">Xnavor Technology Co., Ltd.</div>
          </div>
        </div>
        <nav className="flex items-center gap-4">
          <Link href="#resources" className="text-sm hover:underline">Resources</Link>
          <Link href="#articles" className="text-sm hover:underline">Articles</Link>
          <a href="mailto:sales@xnavor.com" className="text-sm hover:underline">Contact</a>
        </nav>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12">
        {/* Hero */}
        <section className="grid gap-8 md:grid-cols-2 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">Headless tools, services and cross-border e‑commerce — built by Beijing Xnavor</h1>
            <p className="mt-4 text-slate-600 dark:text-slate-300 max-w-xl">
              We provide technical services and cross-border e‑commerce solutions. Browse our curated resources, case studies and articles to accelerate your headless projects.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="#resources" className="inline-flex items-center gap-2 rounded-full bg-black text-white px-4 py-2 text-sm hover:opacity-95">
                Browse Resources
              </Link>
              <a href="mailto:sales@xnavor.com" className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-sm hover:bg-slate-50 dark:border-slate-700">
                Contact Sales
              </a>
            </div>

            <div className="mt-8 text-sm text-slate-500 dark:text-slate-400">
              <strong>Company:</strong> Beijing Xnavor Technology Company Limited — Technical services & cross-border e‑commerce
            </div>
          </div>

          <div className="order-first md:order-last">
            <div className="rounded-xl bg-gradient-to-br from-slate-50 to-white dark:from-slate-800 dark:to-slate-900 p-6 shadow">
              <Image src="/next.svg" alt="placeholder" width={420} height={120} className="dark:invert" />
              <div className="mt-4 grid grid-cols-1 gap-3">
                <div className="p-4 bg-white dark:bg-slate-800 rounded-md border border-slate-100 dark:border-slate-700">
                  <div className="text-sm font-semibold">Featured case</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">Cross-border store migration — 3x conversion</div>
                </div>
                <div className="p-4 bg-white dark:bg-slate-800 rounded-md border border-slate-100 dark:border-slate-700">
                  <div className="text-sm font-semibold">Engineering</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">Headless storefronts, integrations, and performance</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Resources */}
        <section id="resources" className="mt-12">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold">Curated Resources</h2>
            <Link href="#" className="text-sm text-slate-500 hover:underline">View all</Link>
          </div>

          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <article className="p-6 rounded-lg border border-slate-100 dark:border-slate-700 bg-white dark:bg-slate-800">
              <div className="text-sm font-semibold">Toolkit</div>
              <div className="mt-2 text-sm text-slate-500 dark:text-slate-400">A selection of headless tools we recommend for storefronts and CMS.</div>
              <div className="mt-4">
                <a href="#" className="text-sm text-sky-600 hover:underline">Open toolkit →</a>
              </div>
            </article>

            <article className="p-6 rounded-lg border border-slate-100 dark:border-slate-700 bg-white dark:bg-slate-800">
              <div className="text-sm font-semibold">Integrations</div>
              <div className="mt-2 text-sm text-slate-500 dark:text-slate-400">Examples connecting headless CMS, commerce and shipping providers.</div>
              <div className="mt-4">
                <a href="#" className="text-sm text-sky-600 hover:underline">Explore integrations →</a>
              </div>
            </article>

            <article className="p-6 rounded-lg border border-slate-100 dark:border-slate-700 bg-white dark:bg-slate-800">
              <div className="text-sm font-semibold">Case studies</div>
              <div className="mt-2 text-sm text-slate-500 dark:text-slate-400">Real results from cross-border stores and headless migrations.</div>
              <div className="mt-4">
                <a href="#" className="text-sm text-sky-600 hover:underline">Read case studies →</a>
              </div>
            </article>
          </div>
        </section>

        {/* Latest articles */}
        <section id="articles" className="mt-12">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold">Latest Articles</h2>
            <Link href="#" className="text-sm text-slate-500 hover:underline">See all</Link>
          </div>

          <ul className="mt-6 grid gap-4">
            <li className="p-4 rounded-md border border-slate-100 dark:border-slate-700 bg-white dark:bg-slate-800">
              <a href="#" className="flex items-center justify-between gap-4">
                <div>
                  <div className="text-sm font-semibold">Building a headless storefront in 2026</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">March 10, 2026 — by Xnavor team</div>
                </div>
                <div className="text-sm text-slate-500">Read →</div>
              </a>
            </li>

            <li className="p-4 rounded-md border border-slate-100 dark:border-slate-700 bg-white dark:bg-slate-800">
              <a href="#" className="flex items-center justify-between gap-4">
                <div>
                  <div className="text-sm font-semibold">Cross-border logistics essentials</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">Feb 20, 2026 — by Xnavor</div>
                </div>
                <div className="text-sm text-slate-500">Read →</div>
              </a>
            </li>

            <li className="p-4 rounded-md border border-slate-100 dark:border-slate-700 bg-white dark:bg-slate-800">
              <a href="#" className="flex items-center justify-between gap-4">
                <div>
                  <div className="text-sm font-semibold">Headless commerce SEO tips</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">Jan 15, 2026 — by Xnavor</div>
                </div>
                <div className="text-sm text-slate-500">Read →</div>
              </a>
            </li>
          </ul>
        </section>

        {/* CTA / Subscribe */}
        <section className="mt-12 p-6 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-lg font-semibold">Get updates from Xnavor</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">Subscribe for product updates, engineering notes and cross-border tips.</p>
            </div>
            <form className="flex gap-2 w-full sm:w-auto mt-4 sm:mt-0">
              <input aria-label="Email" type="email" placeholder="you@example.com" className="px-3 py-2 rounded-md border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-sm" />
              <button className="rounded-md bg-black text-white px-4 py-2 text-sm">Subscribe</button>
            </form>
          </div>
        </section>
      </main>

      <footer className="mt-12 border-t border-slate-100 dark:border-slate-800 py-8">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-sm text-slate-600 dark:text-slate-400">© {new Date().getFullYear()} Beijing Xnavor Technology Company Limited</div>
          <div className="flex items-center gap-4 text-sm">
            <a href="mailto:sales@xnavor.com" className="hover:underline">sales@xnavor.com</a>
            <span className="text-slate-400">•</span>
            <a href="#" className="hover:underline">Privacy</a>
            <a href="#" className="hover:underline">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
