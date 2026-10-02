 "use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import { profile } from "@/lib/data";
import { SectionHeading } from "./SectionHeading";
import { RevealText } from "./RevealText";

export function About(){
 return <section id="about" className="section">
  <div className="container-site">
   <SectionHeading eyebrow="About" title="Service with care, precision and cultural awareness." description="A hospitality professional shaped by hands-on experience in Nepal and Dubai."/>
   <div className="grid gap-10 lg:grid-cols-[.75fr_1.25fr]">
    <div className="card-ui relative overflow-hidden p-3"><div className="relative aspect-[4/5] overflow-hidden rounded-[16px]"><Image src="/photo.jpg" alt="Sabin Karmacharya" fill className="object-cover"/></div></div>
    <div>
      <p className="text-lg leading-8 text-[var(--muted)]"><RevealText>Dedicated and service-oriented waiter with more than 3 years of combined experience, including 1 year in Dubai, in fine-dining and casual hospitality environments. Skilled at delivering exceptional guest experiences, maintaining high standards of cleanliness and presentation, and working efficiently in fast-paced settings. Known for a friendly demeanor, strong teamwork, and the ability to adapt quickly to diverse cultural and service expectations.</RevealText></p>
      <div className="mt-8 grid gap-4 sm:grid-cols-3">
       {[["3+","Years Experience"],["3","Hospitality Roles"],["3","Languages"]].map(([n,l])=><motion.div whileInView={{opacity:[0,1],y:[15,0]}} viewport={{once:true}} key={l} className="card-ui p-5"><div className="display text-3xl font-semibold text-[#16384f] dark:text-white">{n}</div><div className="mt-1 text-sm text-[var(--muted)]">{l}</div></motion.div>)}
      </div>
      <div className="card-ui mt-4 grid gap-3 p-5 sm:grid-cols-3">
       <a href={`tel:${profile.phone}`} className="flex items-center gap-2 text-sm"><Phone size={17} className="text-[#c9a24a]"/>{profile.phone}</a>
       <a href={`mailto:${profile.email}`} className="flex items-center gap-2 text-sm break-all"><Mail size={17} className="text-[#c9a24a]"/>{profile.email}</a>
       <div className="flex items-center gap-2 text-sm"><MapPin size={17} className="text-[#c9a24a]"/>{profile.location}</div>
      </div>
    </div>
   </div>
  </div>
 </section>
}
