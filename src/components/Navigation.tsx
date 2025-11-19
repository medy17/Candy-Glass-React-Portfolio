// src/components/Navigation.tsx
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";

interface NavigationProps {
    currentPage: string;
    onNavigate: (page: string) => void;
}

const navItems = [
    { id: "about", label: "About me" },
    { id: "portfolio", label: "Portfolio" },
    { id: "experience", label: "Experience" },
    { id: "contact", label: "Contact me" },
];

export function Navigation({ currentPage, onNavigate }: NavigationProps) {
    const activeIndex = navItems.findIndex((item) => item.id === currentPage);
    const isMobile = useIsMobile();

    return (
        <nav className="relative mt-4">
            {/* Pinkish Sliding Pill */}
            <div
                className={cn(
                    "absolute inset-x-0 h-12 rounded-[0.875rem]",
                    // Pink background tint, stronger pink border
                    "bg-primary/15 border border-primary/40",
                    // Pink glow effect
                    "shadow-[0_0_20px_-4px_hsl(var(--primary)/0.4)]",
                    "pointer-events-none will-change-transform [contain:paint] transform-gpu",
                    !isMobile && "transition-transform duration-200 ease-out"
                )}
                style={{
                    transform: `translate3d(0, ${activeIndex * 56}px, 0)`, // 48px + 8px gap
                }}
            />
            <div className="flex flex-col gap-2">
                {navItems.map((item) => (
                    <button
                        key={item.id}
                        onClick={() => onNavigate(item.id)}
                        className={cn(
                            "relative z-10 flex items-center gap-3 px-4 h-12 rounded-[0.875rem] border border-transparent font-medium transition-all duration-300 ease-in-out",
                            // Active text is white + slightly brighter pinkish hue implication
                            // Inactive text is muted
                            item.id === currentPage ? "text-white" : "text-muted-foreground hover:text-white hover:bg-white/5"
                        )}
                    >
                        <span>{item.label}</span>
                    </button>
                ))}
            </div>
        </nav>
    );
}