import { Section } from "./section"
import { profile } from "@/lib/portfolio-data"
import { Badge } from "@/components/ui/badge"

export function Skills() {
  return (
    <Section id="skills" title="Skills">
      <ul className="flex flex-wrap gap-2">
        {profile.skills.map((s) => (
          <li key={s}>
            <Badge variant="secondary" className="px-3 py-1">
              {s}
            </Badge>
          </li>
        ))}
      </ul>
    </Section>
  )
}
