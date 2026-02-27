"use client";

import { Toggle } from "@/components/Toggle";
import { NavLink } from "@/components/NavLink";
import { useTheme } from "@/components/ThemeProvider";

const nav = [
  { href: "/colors", label: "Colors" },
  { href: "/text", label: "Fonts" },
  { href: "/spacing", label: "Spacing" },
  { href: "/radius", label: "Radius" },
] as const;

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex min-h-screen w-full items-stretch bg-surface-1">
      <aside className="sticky top-0 flex h-screen w-[268px] shrink-0 flex-col justify-between border-r border-border pb-6 self-start">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col">
            <div className="flex flex-col gap-1.5 px-8 py-8">
              <h1 className="font-outfit text-[23px] font-bold leading-[1.15] tracking-[-0.276px] text-text-primary">
                TokenFoundry
              </h1>
              <p className="font-inter text-[13px] font-medium leading-[1.6] text-text-secondary">
                Design System documentation
              </p>
            </div>
            <div className="h-px w-full bg-border" />
          </div>

          <nav className="flex flex-col gap-10 pl-8">
            <div className="flex flex-col gap-1">
              <p className="font-inter text-[13px] font-medium leading-[1.6] text-text-tertiary">
                Foundational
              </p>
              <div className="flex flex-col gap-2">
                {nav.map((item) => (
                  <NavLink key={item.href} href={item.href} label={item.label} />
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <p className="font-inter text-[13px] font-medium leading-[1.6] text-text-tertiary">
                Components
              </p>
              <div className="flex flex-col gap-2">
                <NavLink href="/sidebar-buttons" label="Sidebar Buttons" />
                <NavLink href="/toggle-switch" label="Toggle Switch" />
                <NavLink href="/tabs" label="Tabs" />
              </div>
            </div>
          </nav>
        </div>

        <div className="flex w-full items-center justify-center pl-6">
          <p className="font-inter text-[13px] font-medium leading-[1.6] text-text-tertiary">
            Version nr. 001
          </p>
        </div>
      </aside>

      <main className="flex min-h-0 flex-1 flex-col">
        <header className="flex w-full items-end justify-end border-b border-border p-6">
          <div className="flex items-center gap-6">
            <span className="font-inter text-[13px] font-medium leading-[1.6] text-text-tertiary">
              Light/Dark
            </span>
            <Toggle mode={theme} onChange={setTheme} />
          </div>
        </header>
        <div className="flex flex-1 flex-col px-6 py-16 sm:px-10">
          <div className="mx-auto w-full max-w-[762px] min-w-0 flex-1 flex flex-col gap-12">
            {children}
          </div>
        </div>
      </main>
    </div>
  );
}