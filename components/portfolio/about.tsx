import { Section } from "./section"
import { profile } from "@/lib/portfolio-data"

export function About() {
  return (
    <Section id="about" title="About">
      <div className="space-y-4">
        {profile.about.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    </Section>
  )
}
