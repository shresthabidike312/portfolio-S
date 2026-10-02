import { MapPin } from "lucide-react";
import { experiences } from "@/lib/data";
import { SectionHeading } from "./SectionHeading";

export function Experience(){
 return <section id="experience" className="section">
  <div className="container-site"><SectionHeading eyebrow="Experience" title="Hospitality experience across Nepal and Dubai."/>
   <div className="relative ml-2 border-l border-[var(--line)] pl-7 md:ml-8 md:pl-10">
    {experiences.map((x,i)=><div key={x.title} className="relative pb-12 last:pb-0"><span className="absolute -left-[36px] top-1 grid h-3 w-3 rounded-full border-4 border-[var(--paper)] bg-[#c9a24a] md:-left-[46px]"/><div className="card-ui p-6 md:p-7"><div className="flex flex-wrap items-start justify-between gap-3"><div><p className="text-xs font-bold uppercase tracking-[.16em] text-[#c9a24a]">{x.period}</p><h3 className="mt-2 text-xl font-semibold">{x.title}</h3><p className="mt-1 text-sm text-[var(--muted)]">{x.company} · {x.location}</p></div>{x.current&&<span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-700 dark:text-emerald-300">Current</span>}</div><ul className="mt-5 space-y-3 text-[var(--muted)]">{x.bullets.map(b=><li key={b} className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#c9a24a]"/>{b}</li>)}</ul></div></div>)}
   </div>
  </div>
 </section>
}
