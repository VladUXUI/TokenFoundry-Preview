import { SidebarButton } from "@/components/SidebarButton";

export default function SidebarButtonsPage() {
  return (
    <>
      <div className="flex max-w-[632px] flex-col gap-4">
        <div className="flex flex-col gap-1">
          <p className="font-inter text-[13px] font-medium leading-[1.6] text-text-secondary">
            COMPONENTS
          </p>
          <h2 className="font-outfit text-[40px] font-bold leading-[0.96] tracking-[0.32px] text-text-primary">
            Sidebar Buttons
          </h2>
        </div>
        <p className="font-inter text-base font-normal leading-[1.45] text-text-secondary">
          Sidebar navigation button used in the left rail. It supports default,
          hover, and active states and consumes design tokens from globals.css.
        </p>
      </div>

      <div className="flex flex-col gap-16">
        <section className="flex flex-col gap-6">
          <div className="flex max-w-[632px] flex-col gap-2">
            <h3 className="font-outfit text-[27px] font-medium leading-[1.15] tracking-[0.216px] text-text-primary">
              States
            </h3>
            <p className="font-inter text-base font-normal leading-[1.45] text-text-secondary">
              Visual variants for the sidebar button, matching the Figma
              component.
            </p>
          </div>

          <div className="flex flex-col gap-4 rounded-[var(--radius-m)] border border-border bg-surface-1 p-4 shadow-[0px_2px_4px_0px_rgba(0,0,0,0.06)]">
            <div className="flex items-center justify-between gap-4">
              <SidebarButton label="Colors" state="default" />
              <p className="font-inter text-[13px] font-medium leading-[1.6] text-text-tertiary">
                Default
              </p>
            </div>
            <div className="flex items-center justify-between gap-4">
              <SidebarButton label="Colors" state="hover" />
              <p className="font-inter text-[13px] font-medium leading-[1.6] text-text-tertiary">
                Hover
              </p>
            </div>
            <div className="flex items-center justify-between gap-4">
              <SidebarButton label="Colors" state="active" />
              <p className="font-inter text-[13px] font-medium leading-[1.6] text-text-tertiary">
                Active
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

