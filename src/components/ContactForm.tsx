"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ArrowUpRight, Loader2 } from "lucide-react";
import { services } from "@/lib/data";

const schema = z.object({
  name: z.string().trim().min(1, "Required"),
  email: z.string().trim().email("Enter a valid email"),
  service: z.string().optional(),
  message: z.string().trim().min(10, "Tell me a bit more (10+ characters)"),
  company: z.string().max(0).optional(),
});

type FormValues = z.infer<typeof schema>;

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  async function onSubmit(values: FormValues) {
    setStatus("sending");
    setErrorMsg("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Something went wrong");
      setStatus("sent");
      reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong");
    }
  }

  if (status === "sent") {
    return (
      <div className="border border-foreground p-8">
        <p className="font-display text-2xl italic">Message sent.</p>
        <p className="mt-2 text-sm text-foreground/70">
          Thanks — I reply within 24 hours on weekdays.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
      <input type="text" tabIndex={-1} autoComplete="off" className="hidden" {...register("company")} />

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="font-mono text-xs uppercase tracking-wider text-muted">
            Name
          </label>
          <input
            id="name"
            type="text"
            autoComplete="name"
            className="mt-2 w-full border-b border-border bg-transparent py-2 outline-none focus:border-foreground"
            {...register("name")}
          />
          {errors.name && <p className="mt-1 text-xs text-accent">{errors.name.message}</p>}
        </div>

        <div>
          <label htmlFor="email" className="font-mono text-xs uppercase tracking-wider text-muted">
            Email
          </label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            className="mt-2 w-full border-b border-border bg-transparent py-2 outline-none focus:border-foreground"
            {...register("email")}
          />
          {errors.email && <p className="mt-1 text-xs text-accent">{errors.email.message}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="service" className="font-mono text-xs uppercase tracking-wider text-muted">
          Service (optional)
        </label>
        <select
          id="service"
          className="mt-2 w-full border-b border-border bg-transparent py-2 outline-none focus:border-foreground"
          defaultValue=""
          {...register("service")}
        >
          <option value="">Not sure yet</option>
          {services.map((s) => (
            <option key={s.title} value={s.title}>
              {s.title}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="font-mono text-xs uppercase tracking-wider text-muted">
          Message
        </label>
        <textarea
          id="message"
          rows={5}
          className="mt-2 w-full border-b border-border bg-transparent py-2 outline-none focus:border-foreground"
          {...register("message")}
        />
        {errors.message && <p className="mt-1 text-xs text-accent">{errors.message.message}</p>}
      </div>

      {status === "error" && <p className="text-sm text-accent">{errorMsg}</p>}

      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex items-center gap-2 bg-foreground px-6 py-3 font-mono text-xs uppercase tracking-wider text-background transition-opacity hover:opacity-80 disabled:opacity-50"
      >
        {status === "sending" ? (
          <>
            Sending <Loader2 size={14} className="animate-spin" />
          </>
        ) : (
          <>
            Send Message <ArrowUpRight size={14} />
          </>
        )}
      </button>
    </form>
  );
}
