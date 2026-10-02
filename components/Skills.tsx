import { Coffee, HandHeart, ShieldCheck, Utensils, Languages, Monitor } from "lucide-react";
import { skills } from "@/lib/data";
import { SectionHeading } from "./SectionHeading";

const icons = [HandHeart, Monitor, Coffee, ShieldCheck];
export function Skills(){
 const entries=Object.entries(skills);
 return <section id="skills" className="section bg-white/50 dark:bg-black/5">
  <div className="container-site">
   <SectionHeading eyebrow="Skills" title="Practical skills for polished hospitality service." description="Focused on guest care, efficient operations, beverage knowledge and safety standards."/>
   <div className="grid gap-5 md:grid-cols-2">
    {entries.map(([group,items],i)=>{const Icon=icons[i]||Utensils; return <div key={group} className="card-ui p-6"><div className="flex items-center gap-3"><span className="grid h-11 w-11 place-items-center rounded-[14px] bg-[#16384f]/10 text-[#16384f] dark:bg-white/10 dark:text-white"><Icon size={20}/></span><h3 className="font-semibold">{group}</h3></div><ul className="mt-5 space-y-3 text-sm text-[var(--muted)]">{items.map(x=><li key={x} className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#c9a24a]"/>{x}</li>)}</ul></div>})}
   </div>
   <div className="card-ui mt-5 p-6"><div className="flex items-center gap-3"><Languages size={20} className="text-[#c9a24a]"/><h3 className="font-semibold">Languages</h3></div><div className="mt-5 grid gap-3 sm:grid-cols-3">{[["English","Professional",3],["Hindi","Fluent",4],["Nepali","Native",5]].map(([a,b,n])=><div key={a} className="rounded-2xl bg-[var(--paper)] p-4"><div className="flex justify-between text-sm font-semibold"><span>{a}</span><span className="text-[var(--muted)]">{b}</span></div><div className="mt-3 flex gap-1">{Array.from({length:5},(_,i)=><span key={i} className={`h-1.5 flex-1 rounded-full ${i<(n as number)?"bg-[#c9a24a]":"bg-[#16384f]/10 dark:bg-white/10"}`}/>)}</div></div>)}</div></div>
  </div>
 </section>
}
