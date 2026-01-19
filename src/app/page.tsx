"use client";

import { useState } from "react";
import { projects } from "@/lib/projects";
import { ProjectCard } from "@/components/ProjectCard";
import { Github, Linkedin, Mail } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";

export default function Home() {
  const [filter, setFilter] = useState<string>("All");

  const categories = ["Todos", "Python"];

  const filteredProjects = filter === "Todos"
    ? projects
    : projects.filter(p => p.category === filter);

  const iconBtnClass = "p-2 rounded-md hover:bg-zinc-900 text-zinc-400 hover:text-zinc-100 transition-colors";

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans selection:bg-indigo-500/30">
      {/* Grid Pattern Background */}
      <div className="fixed inset-0 z-0 opacity-20 pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #3f3f46 1px, transparent 0)', backgroundSize: '44px 44px' }}>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-12 md:py-10">
        {/* Header */}
        <header className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-zinc-100 mb-2">
              <span className="text-indigo-500">PORTAFOLIO</span> DE PROYECTOS
            </h1>
            <p className="text-zinc-500 font-medium text-sm">
              Analisis de Datos
            </p>
          </div>

          <div className="flex items-center gap-1">
            <a href="https://github.com/henryhuaraya123" target="_blank" rel="noopener noreferrer" className={iconBtnClass}>
              <Github className="w-5 h-5" />
            </a>
            <a href="mailto:hhuarayachipana@gmail.com" className={iconBtnClass}>
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </header>

        {/* Hero / Intro Title */}
        <div className="mb-5">
          {/* Filters */}
          <div className="flex flex-wrap gap-2 mt-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={cn(
                  "px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all",
                  filter === cat
                    ? "bg-indigo-600 text-white shadow-lg shadow-indigo-500/40"
                    : "bg-zinc-900/50 text-zinc-500 hover:bg-zinc-800 hover:text-zinc-300 border border-zinc-800"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, idx) => (
            <div
              key={project.id}
              className="animate-in fade-in slide-in-from-bottom-4 duration-700 fill-mode-both"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </section>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="py-20 text-center border border-dashed border-zinc-800 rounded-2xl">
            <p className="text-zinc-500 italic">No se encontraron proyectos en esta categoría.</p>
          </div>
        )}

        {/* Footer */}
        <footer className="mt-32 pt-10 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-6 text-zinc-500 text-xs font-medium uppercase tracking-widest">
          <p>© {new Date().getFullYear()} Henry Denilson Huaraya Chipana</p>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.6)]"></div>
              DEVCAT
            </span>
          </div>
        </footer>
      </div>
    </div>
  );
}
