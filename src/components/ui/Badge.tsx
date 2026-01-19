import * as React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: "default" | "secondary" | "outline" | "emerald";
}

function Badge({ className, variant = "default", ...props }: BadgeProps) {
    const variants = {
        default: "border-transparent bg-indigo-500/10 text-indigo-400 hover:bg-indigo-500/20",
        secondary: "border-transparent bg-zinc-800 text-zinc-300 hover:bg-zinc-700",
        outline: "text-zinc-400 border border-zinc-800",
        emerald: "border-transparent bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20"
    };

    return (
        <div
            className={cn(
                "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-zinc-950 focus:ring-offset-2",
                variants[variant],
                className
            )}
            {...props}
        />
    );
}

export { Badge };
