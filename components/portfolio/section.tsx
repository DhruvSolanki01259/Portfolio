import type React from "react"
import { cn } from "@/lib/utils"

export function Section({
  id,
  title,
  className,
  children,
}: {
  id: string
  title: string
  className?: string
  children: React.ReactNode
}) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className={cn("scroll-mt-24", className)}>
      <h2 id={`${id}-title`} className="text-xl md:text-2xl font-semibold tracking-tight text-primary mb-4">
        {title}
      </h2>
      <div className="text-muted-foreground leading-relaxed">{children}</div>
    </section>
  )
}
