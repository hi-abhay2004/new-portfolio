"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import type { Certificate } from "@/lib/certificates";

export function CertificateModal({
  certificate,
  onClose,
}: {
  certificate: Certificate | null;
  onClose: () => void;
}) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!certificate) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", handleKey);
    };
  }, [certificate, onClose]);

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {certificate && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-foreground/90 p-4 md:p-10"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={certificate.title}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex h-full w-full max-w-5xl flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-4 pb-4 text-background">
              <div>
                <p className="font-display text-lg md:text-xl">{certificate.title}</p>
                <p className="font-mono text-xs uppercase tracking-wider text-background/60">
                  {certificate.issuer}
                  {certificate.date ? ` · ${certificate.date}` : ""}
                </p>
              </div>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close certificate"
                className="inline-flex items-center justify-center border border-background/40 p-2 text-background transition-colors hover:border-background hover:bg-background hover:text-foreground"
              >
                <X size={18} />
              </button>
            </div>

            <div className="relative flex flex-1 items-center justify-center overflow-auto bg-background">
              {certificate.type === "pdf" ? (
                <iframe
                  src={`${certificate.file}#view=FitH`}
                  title={certificate.title}
                  className="h-full w-full"
                />
              ) : (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={certificate.file}
                  alt={certificate.title}
                  className="max-h-full max-w-full w-auto h-auto object-contain"
                />
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}
