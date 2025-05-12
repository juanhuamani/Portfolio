import type { ReactNode } from "react"

type TimelineItemProps = {
  title: string
  subtitle: string
  children?: ReactNode
}

export function TimelineItem({ title, subtitle, children}: TimelineItemProps) {
  return (
    <div className="relative pl-8 pb-6">
      {/* Timeline dot for each item */}
      <div
        className="absolute left-0 top-1.5 w-4 h-4 bg-blue-500 rounded-full border-2 border-black z-10"
        aria-hidden="true"
      />
      
        <div 
          className="absolute left-[7px] top-6 bottom-0 w-0.5 bg-blue-500" 
          aria-hidden="true"
        />
      
      
      <div className="mb-2">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-blue-400">{subtitle}</p>
      </div>
      {children}
    </div>
  )
}
