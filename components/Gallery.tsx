 "use client";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useEffect, useState } from "react";
import { gallery } from "@/lib/data";
import { SectionHeading } from "./SectionHeading";

export function Gallery(){
 const [index,setIndex]=useState<number|null>(null);
 useEffect(()=>{const f=(e:KeyboardEvent)=>{if(index===null)return;if(e.key==="Escape")setIndex(null);if(e.key==="ArrowRight")setIndex((index+1)%gallery.length);if(e.key==="ArrowLeft")setIndex((index-1+gallery.length)%gallery.length)};window.addEventListener("keydown",f);return()=>window.removeEventListener("keydown",f)},[index]);
 return <section id="gallery" className="section"><div className="container-site"><SectionHeading eyebrow="Gallery" title="A visual language of service and hospitality."/><div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">{gallery.map((g,i)=><button key={g.src} onClick={()=>setIndex(i)} className="group relative aspect-[4/3] overflow-hidden rounded-[20px] border border-[var(--line)] bg-[var(--card)] text-left"><Image src={g.src} alt={g.alt} fill className="object-cover transition duration-500 group-hover:scale-105"/><span className="absolute inset-x-3 bottom-3 rounded-xl bg-black/45 px-3 py-2 text-sm font-medium text-white backdrop-blur">{g.alt}</span></button>)}</div></div>
 <AnimatePresence>{index!==null&&<motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} className="fixed inset-0 z-[80] grid place-items-center bg-black/80 p-4" role="dialog" aria-modal="true" aria-label="Gallery lightbox"><button onClick={()=>setIndex(null)} className="absolute right-5 top-5 grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white" aria-label="Close"><X/></button><button onClick={()=>setIndex((index-1+gallery.length)%gallery.length)} className="absolute left-4 grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white" aria-label="Previous"><ChevronLeft/></button><div className="relative h-[75vh] w-[88vw] max-w-5xl"><Image src={gallery[index].src} alt={gallery[index].alt} fill className="object-contain"/></div><button onClick={()=>setIndex((index+1)%gallery.length)} className="absolute right-4 grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white" aria-label="Next"><ChevronRight/></button></motion.div>}</AnimatePresence>
 </section>
}
