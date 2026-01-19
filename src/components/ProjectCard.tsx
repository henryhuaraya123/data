import { Project } from "@/lib/projects";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "./ui/Card";
import { Badge } from "./ui/Badge";
import { Github, ExternalLink, BarChart3, Database, PlayCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
    project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
    const btnBase = "inline-flex items-center justify-center rounded-md text-[11px] font-bold uppercase tracking-wider transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950 disabled:pointer-events-none disabled:opacity-50 h-9 px-3 gap-2";
    const btnPrimary = cn(btnBase, "bg-indigo-600 text-white hover:bg-indigo-700 shadow-sm shadow-indigo-500/20");
    const btnOutline = cn(btnBase, "border border-zinc-800 bg-transparent hover:bg-zinc-900 text-zinc-400 hover:text-zinc-100");
    const btnVideo = cn(btnBase, "bg-emerald-600/10 text-emerald-400 hover:bg-emerald-600 hover:text-white border border-emerald-600/20");

    return (
        <Card className="flex flex-col h-full group overflow-hidden border-zinc-800/50 hover:border-indigo-500/30 transition-all duration-300">
            {project.image && (
                <div className="relative h-48 overflow-hidden border-b border-zinc-800">
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-zinc-950/20 group-hover:bg-transparent transition-colors"></div>
                    {project.videoUrl && (
                        <div className="absolute top-3 right-3">
                            <div className="bg-zinc-950/60 backdrop-blur-md p-1.5 rounded-full border border-white/10">
                                <PlayCircle className="w-5 h-5 text-emerald-400 animate-pulse" />
                            </div>
                        </div>
                    )}
                </div>
            )}
            <CardHeader className="pb-3">
                <div className="flex justify-between items-start mb-3">
                    <Badge
                        variant={project.category === "Power BI" ? "emerald" : "default"}
                        className="px-2 py-0 text-[10px] uppercase font-bold tracking-widest"
                    >
                        {project.category}
                    </Badge>
                    <Database className="w-4 h-4 text-indigo-500/40" />
                </div>
                <CardTitle className="group-hover:text-indigo-400 text-justify transition-colors text-lg leading-tight">
                    {project.title}
                </CardTitle>
                <CardDescription className="line-clamp-3 mt-3 text-zinc-500 text-[13px] leading-relaxed">
                    {project.description}
                </CardDescription>
            </CardHeader>
            <CardContent className="flex-grow pb-6">
                {project.results && (
                    <div className="mb-6 space-y-3">
                        <span className="text-indigo-400 font-bold block text-[10px] uppercase tracking-[0.2em] border-b border-indigo-500/10 pb-1.5 mb-3">
                            Impacto & Resultados
                        </span>
                        {Object.entries(project.results).map(([key, value]) => (
                            <div key={key} className="text-[12px] leading-relaxed text-zinc-400 text-justify group/item">
                                <span className="text-indigo-300/60 font-bold capitalize mr-1.5 inline-flex items-center">
                                    <div className="w-1 h-1 rounded-full bg-indigo-500 mr-2 opacity-0 group-hover/item:opacity-100 transition-opacity"></div>
                                    {key.replace(/_/g, ' ')}:
                                </span>
                                {value}
                            </div>
                        ))}
                    </div>
                )}
                <div className="flex flex-wrap gap-1.5 mt-auto">
                    {project.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="text-[9px] py-0 px-2 bg-zinc-900/30 border-zinc-800 text-zinc-500 uppercase font-medium">
                            {tag}
                        </Badge>
                    ))}
                </div>
            </CardContent>
            <CardFooter className={cn(
                "grid gap-2 pb-6 px-6",
                project.videoUrl ? "grid-cols-2" : "grid-cols-1"
            )}>
                {project.videoUrl && (
                    <a
                        href={project.videoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={btnVideo}
                        title="Ver Video"
                    >
                        <PlayCircle className="w-3.5 h-3.5" />
                        <span>Explicación</span>
                    </a>
                )}

                <a
                    href={project.reportUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={btnPrimary}
                    title="Ver Reporte"
                >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Ver Proyecto</span>
                </a>
            </CardFooter>
        </Card>
    );
}
