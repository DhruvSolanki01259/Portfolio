import { Hero } from "@/components/portfolio/hero"
import { About } from "@/components/portfolio/about"
import { Skills } from "@/components/portfolio/skills"
import { Projects } from "@/components/portfolio/projects"
import { Education } from "@/components/portfolio/education"
import { Contact } from "@/components/portfolio/contact"
import { BackToTop } from "@/components/portfolio/back-to-top"

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Main content */}
      <main className="mx-auto max-w-6xl px-4 md:px-6 py-10 md:py-16 flex-grow">
        <div className="grid gap-10 md:gap-16 md:grid-cols-12">
          {/* Left rail */}
          <aside className="md:col-span-4 md:sticky md:top-8 self-start space-y-8">
            <div className="rounded-lg border bg-card p-4 text-center">
              <img
                src="/images/2.png"
                alt="Your profile photo"
                className="mx-auto w-full max-w-40 md:max-w-48 aspect-square rounded-lg md:rounded-full object-cover ring-2 ring-border"
              />
            </div>

            <Hero />

            <nav aria-label="Section navigation" className="hidden md:block">
              <ul className="space-y-2 text-sm">
                {[
                  { id: "about", label: "About" },
                  { id: "skills", label: "Skills" },
                  { id: "projects", label: "Projects" },
                  { id: "education", label: "Education" },
                  { id: "contact", label: "Contact" },
                ].map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className="block rounded-md px-3 py-2 text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>

          {/* Content */}
          <div className="md:col-span-8 space-y-12 md:space-y-16">
            <About />
            <Skills />
            <Projects />
            <Education />
            <Contact />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-6 text-center text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} Dhruv Solanki. All rights reserved.</p>
        <p className="mt-1">Professional portfolio showcasing work and skills.</p>
      </footer>

      {/* BackToTop floating button */}
      <BackToTop />
    </div>
  )
}
