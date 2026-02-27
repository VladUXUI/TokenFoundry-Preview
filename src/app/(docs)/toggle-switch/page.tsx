"use client";

import { useState } from "react";
import { Toggle } from "@/components/Toggle";

type ToggleDocsTab = "states" | "specs";

type SpecItem = {
  category: string;
  name: string;
  variable: string;
  usage: string;
};

const toggleSpecs: SpecItem[] = [
  {
    category: "Color",
    name: "Track",
    variable: "--toggle-track-bg",
    usage: "Border and background of the toggle track in light/dark modes.",
  },
  {
    category: "Color",
    name: "Knob",
    variable: "--toggle-knob-bg",
    usage: "Background of the circular knob.",
  },
  {
    category: "Color",
    name: "Moon icon on dark knob",
    variable: "--surface-1-inverted",
    usage: "Icon color for dark-mode state.",
  },
  {
    category: "Color",
    name: "Sun icon on light knob",
    variable: "--text-primary",
    usage: "Icon color for light-mode state.",
  },
  {
    category: "Radius",
    name: "Track rounding",
    variable: "--radius-round",
    usage: "Fully rounded track shape.",
  },
];

function SpecsTable({ items }: { items: SpecItem[] }) {
  return (
    <div className="flex w-full flex-col gap-2 rounded-[var(--radius-m)] border border-border bg-surface-1 p-4 shadow-[0px_2px_4px_0px_rgba(0,0,0,0.06)]">
      {items.map((item) => (
        <div
          key={`${item.category}-${item.variable}`}
          className="flex items-baseline justify-between gap-4 border-b border-border last:border-b-0 pb-2 last:pb-0"
        >
          <div className="flex flex-col gap-0">
            <p className="font-inter text-[13px] font-medium leading-[1.6] text-text-tertiary">
              {item.category}
            </p>
            <p className="font-inter text-[14px] font-semibold leading-[1.45] text-text-primary">
              {item.name}
            </p>
          </div>
          <div className="flex min-w-[180px] flex-col items-end gap-0 text-right">
            <p className="font-inter text-[13px] font-medium leading-[1.6] text-text-tertiary">
              {item.variable}
            </p>
            <p className="font-inter text-[13px] font-normal leading-[1.6] text-text-tertiary">
              {item.usage}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function ToggleSwitchPage() {
  const [activeTab, setActiveTab] = useState<ToggleDocsTab>("states");

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
        <div className="relative isolate -mb-px flex items-start gap-6">
          <button
            type="button"
            onClick={() => setActiveTab("states")}
            className="flex flex-col gap-2"
          >
            <span
              className={`font-inter text-base leading-[1.45] ${
                activeTab === "states"
                  ? "font-semibold text-text-primary"
                  : "font-normal text-text-tertiary"
              }`}
            >
              States
            </span>
            {activeTab === "states" && (
              <div className="h-0.5 w-full bg-text-primary" />
            )}
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("specs")}
            className="flex flex-col gap-2"
          >
            <span
              className={`font-inter text-base leading-[1.45] ${
                activeTab === "specs"
                  ? "font-semibold text-text-primary"
                  : "font-normal text-text-tertiary"
              }`}
            >
              Specs
            </span>
            {activeTab === "specs" && (
              <div className="h-0.5 w-full bg-text-primary" />
            )}
          </button>

          <div className="absolute bottom-0 left-0 right-0 z-0 h-px bg-surface-3" />
        </div>

        {activeTab === "states" && (
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
        )}

        {activeTab === "specs" && (
          <section className="flex flex-col gap-6">
            <div className="flex w-full flex-col gap-2">
              <h3 className="font-outfit text-[27px] font-medium leading-[1.15] tracking-[0.216px] text-text-primary">
                Specs
              </h3>
              <p className="font-inter text-base font-normal leading-[1.45] text-text-secondary">
                Design tokens used by the toggle: colors and radius applied to
                the track, knob, and icons.
              </p>
            </div>

            <SpecsTable items={toggleSpecs} />
          </section>
        )}
      </div>
    </>
  );
}

