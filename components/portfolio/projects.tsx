import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Section } from "./section";
import { profile } from "@/lib/portfolio-data";

export function Projects() {
  return (
    <Section id="projects" title="Projects" className="space-y-16">
      {Object.entries(profile.projects).map(([category, projects]) => (
        <div key={category} className="space-y-6">

          {/* CATEGORY HEADER */}
          <div className="flex items-center gap-3">
            <div className="h-6 w-1 rounded-full bg-primary" />
            <h2 className="text-lg sm:text-xl font-semibold tracking-tight text-foreground">
              {category}
            </h2>
            <span className="text-xs text-muted-foreground">
              ({projects.length})
            </span>
          </div>

          {/* GRID - FIXED (NO COMPRESSION) */}
          <div className="w-full grid gap-6 [grid-template-columns:repeat(auto-fit,minmax(320px,1fr))] mb-10">
            {projects.map((p) => (
              <Card
                key={p.title}
                className="
                  w-full min-w-[320px]
                  h-full flex flex-col
                  overflow-hidden 
                  bg-card/60 backdrop-blur-md 
                  border border-border/60
                  hover:border-primary/40
                  transition-all duration-300
                  hover:-translate-y-1 hover:shadow-xl
                "
              >
                {/* IMAGE */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={p.image || "/placeholder.svg"}
                    alt={p.imageAlt}
                    className="
                      absolute inset-0 h-full w-full object-cover
                      transition-transform duration-500
                      hover:scale-105
                    "
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </div>

                {/* CONTENT */}
                <CardHeader className="space-y-2">
                  <CardTitle className="text-base sm:text-lg">
                    {p.title}
                  </CardTitle>
                  <CardDescription className="text-sm leading-snug">
                    {p.description}
                  </CardDescription>
                </CardHeader>

                {/* TAGS */}
                <CardContent className="flex-1">
                  <div className="flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <Badge
                        key={t}
                        variant="outline"
                        className="text-xs px-2 py-0.5"
                      >
                        {t}
                      </Badge>
                    ))}
                  </div>
                </CardContent>

                {/* FOOTER */}
                <CardFooter className="flex flex-wrap gap-2 pt-4">
                  {p.links?.live && (
                    <Button asChild size="sm" className="flex-1 sm:flex-none">
                      <Link
                        href={p.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Live
                      </Link>
                    </Button>
                  )}

                  {p.links?.repo && (
                    <Button
                      asChild
                      size="sm"
                      variant="secondary"
                      className="flex-1 sm:flex-none"
                    >
                      <Link
                        href={p.links.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Code
                      </Link>
                    </Button>
                  )}

                  {p.links?.document && (
                    <Button
                      asChild
                      size="sm"
                      variant="secondary"
                      className="flex-1 sm:flex-none"
                    >
                      <Link
                        href={p.links.document}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Docs
                      </Link>
                    </Button>
                  )}
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      ))}
    </Section>
  );
}