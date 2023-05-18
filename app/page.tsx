import Link from 'next/link';
import { IconEnum } from '@/types/icon';

import { siteConfig } from '@/config/site';
import Icon from '@/components/icon/icon';

export default function HomePage() {
  return (
    <section className="site-max flex h-full-screen flex-col pt-header">
      <div className="flex flex-col items-start gap-24">
        <h1 className="text-32 font-extrabold s:text-96">
          Next template for building apps with Tailwind CSS.
        </h1>
        <p>
          This template is a starting point for building apps with Next.js and Tailwind CSS. It
          includes a minimal setup for Tailwind CSS, TypeScript, and Next.js.
        </p>
      </div>
      <hr className="my-32 h-[0.3rem] bg-primary-500 s:my-40" />
      <div className="flex justify-center gap-16">
        <Link
          className="group relative flex gap-8"
          title="GitHub"
          target="_blank"
          rel="noopener noreferrer"
          href={siteConfig.links.github}>
          <span className="-z-1 absolute inset-0 scale-0 transform-gpu rounded-full bg-primary-500 transition-transform duration-400 ease-circ-out group-hover:scale-150"></span>
          <Icon
            name={IconEnum.GITHUB}
            className="relative z-10 h-24 w-24 transition-colors duration-400 ease-circ-out group-hover:text-light s:h-40 s:w-40"
          />
          <span className="sr-only">GitHub</span>
        </Link>
        <Link
          className="group relative flex gap-8"
          title="Twitter"
          target="_blank"
          rel="noopener noreferrer"
          href={siteConfig.links.twitter}>
          <span className="-z-1 absolute inset-0 scale-0 transform-gpu rounded-full bg-primary-500 transition-transform duration-400 ease-circ-out group-hover:scale-150"></span>
          <Icon
            name={IconEnum.TWITTER}
            className="relative z-10 h-24 w-24 transition-colors duration-400 ease-circ-out group-hover:text-light s:h-40 s:w-40"
          />
          <span className="sr-only">Twitter</span>
        </Link>
      </div>
    </section>
  );
}
