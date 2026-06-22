"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowUp } from "lucide-react"

export function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const onClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <div
      className={`fixed bottom-4 right-4 z-50 transition-opacity ${
        visible ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
    >
      <Button
        size="icon"
        variant="default"
        onClick={onClick}
        aria-label="Back to top"
        className="rounded-full shadow-md bg-primary text-primary-foreground hover:bg-primary/90"
      >
        <ArrowUp className="h-4 w-4" aria-hidden="true" />
        <span className="sr-only">Back to top</span>
      </Button>
    </div>
  )
}
