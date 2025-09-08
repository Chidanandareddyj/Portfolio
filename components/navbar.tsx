import { Dock, DockIcon } from "@/components/magicui/dock";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
// import { DATA } from "@/data/resume";
import DATA from "@/Data/data";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="fixed inset-x-0 bottom-6 z-30 mx-auto flex justify-center pointer-events-none">
      <Dock
        iconMagnification={60}
        direction="middle"
        className="group z-50 pointer-events-auto relative mx-auto flex h-14 min-h-full items-center px-1 rounded-2xl bg-background/90 backdrop-blur [box-shadow:0_0_0_1px_rgba(0,0,0,.06),0_6px_24px_rgba(0,0,0,.12)] transition-all duration-300 transform-gpu hover:-translate-y-1 hover:[box-shadow:0_0_0_1px_rgba(0,0,0,.08),0_12px_36px_rgba(0,0,0,.24)] dark:[border:1px_solid_rgba(255,255,255,.12)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]"
      >
        {DATA.navbar.map((item) => (
          <DockIcon key={item.href}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href={item.href}
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "icon" }),
                    "size-12 transition-transform duration-200 hover:scale-110"
                  )}
                >
                  <item.icon className="size-4" />
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>{item.name}</p>
              </TooltipContent>
            </Tooltip>
          </DockIcon>
        ))}
        <Separator orientation="vertical" className="h-full" />
        {Object.entries(DATA.contact.social)
          .filter(([_, social]) => social.navbar)
          .map(([name, social]) => (
            <DockIcon key={name}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href={social.url}
                    className={cn(
                      buttonVariants({ variant: "ghost", size: "icon" }),
                      "size-12 transition-transform duration-200 hover:scale-110"
                    )}
                  >
                    <social.icon className="size-4" />
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{name}</p>
                </TooltipContent>
              </Tooltip>
            </DockIcon>
          ))}
      </Dock>
    </div>
  );
}
