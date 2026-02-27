"use client";

import { useState } from "react";

type TabId = "ui" | "primitives";
type TabsDocsTab = "states" | "specs";

const tabs: { id: TabId; label: string; description: string }[] = [
  {
    id: "ui",
    label: "UI-Colors",
    description:
      "Tabs used to switch between UI color documentation and primitive tokens.",
  },
  {
    id: "primitives",
    label: "Primitives",
    description:
      "Shows the underlying primitive color tokens that UI colors are built from.",
  },
];

type SpecItem = {
  category: string;
  name: string;
  variable: string;
  usage: string;
};

const tabsSpecs: SpecItem[] = [
  {
    category: "Color",
    name: "Active label",
    variable: "--text-primary",
    usage: "Text color for the active tab.",
  },
  {
    category: "Color",
    name: "Inactive label",
    variable: "--text-tertiary",
    usage: "Text color for inactive tabs.",
  },
  {
    category: "Color",
    name: "Active underline",
    variable: "--text-primary",
    usage: "1px underline below the active tab.",
  },
  {
    category: "Color",
    name: "Divider line",
    variable: "--surface-3",
    usage: "Subtle 1px divider under the tab list.",
  },
  {
    category: "Typography",
    name: "Label font family",
    variable: "--font-inter",
    usage: "Tab label typeface.",
  },
  {
    category: "Typography",
    name: "Label size",
    variable: "--text-16",
    usage: "Base font size for tab labels.",
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

export default function TabsPage() {
  const [docsTab, setDocsTab] = useState<TabsDocsTab>("states");
  const [activeTab, setActiveTab] = useState<TabId>("ui");

  return (
    <>
      <div className="flex w-full flex-col gap-4">
        <div className="flex flex-col gap-1">
          <p className="font-inter text-[13px] font-medium leading-[1.6] text-text-secondary">
            COMPONENTS
          </p>
          <h2 className="font-outfit text-[40px] font-bold leading-[0.96] tracking-[0.32px] text-text-primary">
            Tabs
          </h2>
        </div>
        <p className="font-inter text-base font-normal leading-[1.45] text-text-secondary">
          Tab component used in the Colors page to switch between UI colors and
          primitive tokens. It uses an underline and text color to indicate the
          active tab.
        </p>
      </div>

      <div className="flex flex-col gap-16">
        <div className="relative isolate -mb-px flex items-start gap-6">
          <button
            type="button"
            onClick={() => setDocsTab("states")}
            className="flex flex-col gap-2"
          >
            <span
              className={`font-inter text-base leading-[1.45] ${
                docsTab === "states"
                  ? "font-semibold text-text-primary"
                  : "font-normal text-text-tertiary"
              }`}
            >
              States
            </span>
            {docsTab === "states" && (
              <div className="h-0.5 w-full bg-text-primary" />
            )}
          </button>

          <button
            type="button"
            onClick={() => setDocsTab("specs")}
            className="flex flex-col gap-2"
          >
            <span
              className={`font-inter text-base leading-[1.45] ${
                docsTab === "specs"
                  ? "font-semibold text-text-primary"
                  : "font-normal text-text-tertiary"
              }`}
            >
              Specs
            </span>
            {docsTab === "specs" && (
              <div className="h-0.5 w-full bg-text-primary" />
            )}
          </button>

          <div className="absolute bottom-0 left-0 right-0 z-0 h-px bg-surface-3" />
        </div>

        {docsTab === "states" && (
          <section className="flex flex-col gap-6">
            <div className="flex w-full flex-col gap-2">
              <h3 className="font-outfit text-[27px] font-medium leading-[1.15] tracking-[0.216px] text-text-primary">
                States
              </h3>
              <p className="font-inter text-base font-normal leading-[1.45] text-text-secondary">
                The tab component has an active and inactive state. The active
                tab uses primary text color and a 1px underline; inactive tabs
                use tertiary text color with no underline.
              </p>
            </div>

            <div className="flex flex-col gap-8 rounded-[var(--radius-m)] border border-border bg-surface-1 p-4 shadow-[0px_2px_4px_0px_rgba(0,0,0,0.06)]">
              {/* Live tabs preview */}
              <div className="relative isolate -mb-px flex items-start gap-6">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveTab(tab.id)}
                    className="flex flex-col gap-2"
                  >
                    <span
                      className={`font-inter text-base leading-[1.45] ${
                        activeTab === tab.id
                          ? "font-semibold text-text-primary"
                          : "font-normal text-text-tertiary"
                      }`}
                    >
                      {tab.label}
                    </span>
                    {activeTab === tab.id && (
                      <div className="h-0.5 w-full bg-text-primary" />
                    )}
                  </button>
                ))}

                <div className="absolute bottom-0 left-0 right-0 z-0 h-px bg-surface-3" />
              </div>

              {/* State breakdown */}
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between gap-4">
                  <div className="relative isolate flex items-start gap-6">
                    <button
                      type="button"
                      className="flex flex-col gap-2"
                      disabled
                    >
                      <span className="font-inter text-base font-semibold leading-[1.45] text-text-primary">
                        Active
                      </span>
                      <div className="h-0.5 w-full bg-text-primary" />
                    </button>
                    <button
                      type="button"
                      className="flex flex-col gap-2"
                      disabled
                    >
                      <span className="font-inter text-base leading-[1.45] text-text-tertiary">
                        Inactive
                      </span>
                    </button>
                    <div className="absolute bottom-0 left-0 z-0 h-px w-[240px] bg-surface-3" />
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {docsTab === "specs" && (
          <section className="flex flex-col gap-6">
            <div className="flex w-full flex-col gap-2">
              <h3 className="font-outfit text-[27px] font-medium leading-[1.15] tracking-[0.216px] text-text-primary">
                Specs
              </h3>
              <p className="font-inter text-base font-normal leading-[1.45] text-text-secondary">
                Design tokens used by the tab component: label typography, text
                colors, and divider / underline colors.
              </p>
            </div>

            <SpecsTable items={tabsSpecs} />
          </section>
        )}
      </div>
    </>
  );
}

