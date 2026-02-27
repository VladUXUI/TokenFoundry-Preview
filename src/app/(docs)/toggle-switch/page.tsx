import { Toggle } from "@/components/Toggle";

export default function ToggleSwitchPage() {
  return (
    <>
      <div className="flex w-full flex-col gap-4">
        <div className="flex flex-col gap-1">
          <p className="font-inter text-[13px] font-medium leading-[1.6] text-text-secondary">
            COMPONENTS
          </p>
          <h2 className="font-outfit text-[40px] font-bold leading-[0.96] tracking-[0.32px] text-text-primary">
            Toggle Switch
          </h2>
        </div>
        <p className="font-inter text-base font-normal leading-[1.45] text-text-secondary">
          Light/Dark toggle used in the header. It animates between light and
          dark states when clicked, matching the Figma component.
        </p>
      </div>

      <div className="flex flex-col gap-16">
        <section className="flex flex-col gap-6">
          <div className="flex w-full flex-col gap-2">
            <h3 className="font-outfit text-[27px] font-medium leading-[1.15] tracking-[0.216px] text-text-primary">
              States
            </h3>
            <p className="font-inter text-base font-normal leading-[1.45] text-text-secondary">
              Both light and dark configurations. Click either to see the knob
              animate between positions and icons.
            </p>
          </div>

          <div className="flex flex-wrap gap-8 rounded-[var(--radius-m)] border border-border bg-surface-1 p-4 shadow-[0px_2px_4px_0px_rgba(0,0,0,0.06)]">
            <div className="flex flex-col items-start gap-3">
              <p className="font-inter text-[13px] font-medium leading-[1.6] text-text-tertiary">
                Light (default)
              </p>
              <Toggle initialMode="light" />
            </div>
            <div className="flex flex-col items-start gap-3">
              <p className="font-inter text-[13px] font-medium leading-[1.6] text-text-tertiary">
                Dark
              </p>
              <Toggle initialMode="dark" />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

