"use client";

import { useState } from "react";
import { SidebarButton } from "@/components/SidebarButton";

type SidebarDocsTab = "states" | "specs";

type SpecItem = {
  category: string;
  name: string;
  variable: string;
  usage: string;
};

const sidebarSpecs: SpecItem[] = [
  {
    category: "Color",
    name: "Active indicator",
    variable: "--accent-primary",
    usage: "Left rail indicator bar for the active item.",
  },
  {
    category: "Color",
    name: "Hover / indicator",
    variable: "--text-secondary",
    usage: "Indicator and label color on hover.",
  },
  {
    category: "Color",
    name: "Default label",
    variable: "--text-tertiary",
    usage: "Label color for the default state.",
  },
  {
    category: "Color",
    name: "Active label",
    variable: "--accent-primary",
    usage: "Label color when the item is active.",
  },
  {
    category: "Radius",
    name: "Indicator rounding",
    variable: "--radius-xl",
    usage: "Rounded ends of the left indicator bar.",
  },
  {
    category: "Typography",
    name: "Label font family",
    variable: "--font-inter",
    usage: "Sidebar label typeface.",
  },
  {
    category: "Typography",
    name: "Label size",
    variable: "--text-14",
    usage: "Sidebar label font size.",
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

export default function SidebarButtonsPage() {
  const [activeTab, setActiveTab] = useState<SidebarDocsTab>("states");

  return (
    <>
      <div className="flex w-full flex-col gap-4">
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
        )}

        {activeTab === "specs" && (
          <section className="flex flex-col gap-6">
            <div className="flex w-full flex-col gap-2">
              <h3 className="font-outfit text-[27px] font-medium leading-[1.15] tracking-[0.216px] text-text-primary">
                Specs
              </h3>
              <p className="font-inter text-base font-normal leading-[1.45] text-text-secondary">
                Design tokens used by the sidebar button: indicator colors,
                label colors, radius, and typography.
              </p>
            </div>

            <SpecsTable items={sidebarSpecs} />
          </section>
        )}
      </div>
    </>
  );
}

