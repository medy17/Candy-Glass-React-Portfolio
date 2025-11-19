// src/components/SocialLinks.tsx
import { resume } from "@/data/resume";

export function SocialLinks() {
    return (
        <div className="flex justify-center gap-2 pt-6 border-t border-glass-border">
            {resume.contact.socials.map((social) => {
                const Icon = social.icon;
                return (
                    <a
                        key={social.name}
                        href={social.url}
                        target={social.url.startsWith("http") ? "_blank" : undefined}
                        rel={social.url.startsWith("http") ? "noreferrer" : undefined}
                        aria-label={social.name}
                        className="w-10 h-10 grid place-items-center glass-card rounded-[0.875rem] border border-glass-border transition-all hover:bg-glass hover:-translate-y-0.5"
                    >
                        <Icon className="h-[18px] w-[18px]"/>
                    </a>
                );
            })}
        </div>
    );
}