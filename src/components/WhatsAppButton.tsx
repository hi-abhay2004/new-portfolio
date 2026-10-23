"use client";

import { motion } from "framer-motion";
import { SiWhatsapp } from "react-icons/si";
import { profile } from "@/lib/data";

const digits = profile.phone.replace(/\D/g, "");
const message = encodeURIComponent(`Hi ${profile.name.split(" ")[0]}, I found your portfolio and I'd like to talk.`);
const waHref = `https://wa.me/${digits}?text=${message}`;

export function WhatsAppButton() {
  return (
    <motion.a
      href={waHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      initial={{ opacity: 0, scale: 0, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 260, damping: 18, delay: 0.6 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.94 }}
      className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/20"
    >
      <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#25D366] opacity-40 motion-reduce:hidden" />
      <SiWhatsapp size={26} aria-hidden="true" />
    </motion.a>
  );
}
