 "use client";
import { ArrowUp } from "lucide-react";
import { useEffect,useState } from "react";
export function BackToTop(){const [show,setShow]=useState(false);useEffect(()=>{const f=()=>setShow(window.scrollY>600);window.addEventListener("scroll",f);return()=>window.removeEventListener("scroll",f)},[]);return show?<button onClick={()=>window.scrollTo({top:0,behavior:"smooth"})} className="back-top fixed bottom-5 right-5 z-40 grid h-11 w-11 place-items-center rounded-full bg-[#16384f] text-white shadow-xl" aria-label="Back to top"><ArrowUp size={18}/></button>:null}
