import type { ReactNode } from "react"

type TimelineSectionProps = {
  title: string
  children: ReactNode
}

export function TimelineSection({ title, children }: TimelineSectionProps) {
  return (
    <section className="mb-10" aria-labelledby={title.toLowerCase().replace(/\s+/g, "-")}>
      <h2 id={title.toLowerCase().replace(/\s+/g, "-")} className="text-3xl font-bold mb-6 italic">
        {title}
      </h2>
      <div className="relative">
        {children}
      </div>
    </section>
  )
}
