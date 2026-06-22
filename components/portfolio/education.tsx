import { Section } from "./section"
import { profile } from "@/lib/portfolio-data"

export function Education() {
  const list = Array.isArray(profile.education) ? profile.education : [profile.education]

  return (
    <Section id="education" title="Education">
      <div className="space-y-6">
        {list.map((e) => (
          <div key={`${e.institute}-${e.degree}`} className="space-y-2">
            <div className="flex items-center justify-between gap-2">
              <p className="font-medium">{e.degree}</p>
              {e.period ? <span className="text-sm text-muted-foreground">{e.period}</span> : null}
            </div>

            <p className="text-muted-foreground">{e.institute}</p>

            {e.field ? <p className="text-sm text-muted-foreground">Field: {e.field}</p> : null}

            {e.highlights?.length ? (
              <ul className="mt-2 grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-muted-foreground list-none p-0">
                {e.highlights.map((h: string) => (
                  <li key={h} className="leading-relaxed">
                    {h}
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        ))}
      </div>
    </Section>
  )
}
