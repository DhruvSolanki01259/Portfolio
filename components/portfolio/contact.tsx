import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Section } from "./section"
import { profile } from "@/lib/portfolio-data"
import ContactForm from "./contact-form"

export function Contact() {
  const fallbackEmail =
    profile.socials?.find((s) => s.href?.startsWith("mailto:"))?.href?.replace("mailto:", "") ||
    "dhruvsolanki0129@gmail.com"

  return (
    <Section id="contact" title="Contact">
      <p className="mb-6">
        I’m open to internships and entry‑level roles. If my work resonates, feel free to reach out.
      </p>

      {/* Contact form with resume button included */}
      <div className="mb-10">
        <ContactForm fallbackEmail={fallbackEmail} />
      </div>

      {/* Socials */}
      <div className="space-y-3">
        <h3 className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
          Socials
        </h3>
        <div className="flex flex-wrap gap-3">
          {profile.socials?.map((s) => (
            <Button
              key={s.label}
              variant="secondary"
              asChild
              className="hover:!bg-transparent hover:!text-[var(--foreground)]"
            >
              <Link
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
              >
                {s.label}
              </Link>
            </Button>
          ))}
        </div>
      </div>

      {/* Coding profiles / learning platforms */}
      <div className="mt-8 space-y-3">
        <h3 className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
          Coding Profiles
        </h3>
        <div className="flex flex-wrap gap-3">
          {(profile as any).platforms?.map((p: { label: string; href: string }) => (
            <Button
              key={p.label}
              variant="outline"
              asChild
              className="hover:!bg-transparent hover:!text-[var(--foreground)]"
            >
              <Link
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={p.label}
              >
                {p.label}
              </Link>
            </Button>
          ))}
        </div>
      </div>

    </Section>
  )
}
