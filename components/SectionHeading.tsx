import { RevealText } from "./RevealText";
export function SectionHeading({ eyebrow, title, description }: { eyebrow: string; title: string; description?: string }) {
  return <div className="mb-12 max-w-3xl">
    <p className="mb-3 text-xs font-bold uppercase tracking-[.2em] text-[#c9a24a]">{eyebrow}</p>
    <h2 className="display text-4xl font-semibold leading-tight md:text-5xl"><RevealText>{title}</RevealText></h2>
    {description && <p className="mt-5 text-lg text-[var(--muted)]"><RevealText>{description}</RevealText></p>}
  </div>;
}
