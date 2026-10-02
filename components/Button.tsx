import { ChevronRight } from "lucide-react";
export function Button({ href, children, secondary=false }: { href:string; children:React.ReactNode; secondary?:boolean }) {
 return <a href={href} className={`inline-flex min-h-11 items-center justify-center gap-2 rounded-[14px] px-5 text-sm font-semibold transition hover:-translate-y-0.5 ${secondary ? "border border-[var(--line)] bg-[var(--card)]" : "bg-[#16384f] text-white shadow-[0_0_0_5px_rgba(22,56,79,.07)]"}`}>{children}<ChevronRight size={16}/></a>;
}
