"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { profile } from "@/lib/portfolio-data"
import { Download } from "lucide-react"

export function Hero() {
  return (
    <header className="space-y-4">
      <h1 className="text-3xl md:text-5xl font-semibold text-balance">{profile.name}</h1>
      <p className="text-lg md:text-xl text-muted-foreground">{profile.role}</p>
      <p className="max-w-prose text-pretty">{profile.tagline}</p>

      <div className="flex flex-wrap lg:flex-row lg:flex-wrap gap-2 pt-2">
        {/* View Projects */}
        <Button asChild>
          <Link href="#projects" aria-label="Jump to projects">
            View Projects
          </Link>
        </Button>

        {/* Resume Download */}
        <Button
          asChild
          variant="outline"
          className="border-primary text-primary hover:bg-primary/10 hover:text-primary transition-colors"
        >
          <Link
            href="/resume/dhruv-resume.pdf"
            download
            aria-label="Download resume PDF"
          >
            <Download className="mr-2 h-4 w-4" />
            Resume
          </Link>
        </Button>
      </div>
    </header>
  )
}
