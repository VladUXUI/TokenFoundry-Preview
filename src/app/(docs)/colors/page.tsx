"use client";

import { useState } from "react";
import { colorTokens } from "@/data/design-tokens";

function ColorCard({
  variable,
  name,
  showBorder,
}: {
  variable: string;
  name: string;
  showBorder?: boolean;
}) {
  return (
    <div className="flex w-[236px] flex-col overflow-hidden rounded-[var(--radius-m)] bg-surface-1 shadow-[0px_6px_10px_0px_rgba(0,0,0,0.1),0px_2px_3px_0px_rgba(0,0,0,0.1)]">
      <div
        className={`h-[55px] rounded-t-[var(--radius-m)] ${showBorder ? "border border-border" : ""}`}
        style={{ backgroundColor: `var(${variable})` }}
      />
      <div className="flex flex-col gap-0 p-4">
        <p className="font-inter text-[14px] font-semibold leading-[1.45] text-text-primary">
          {name}
        </p>
        <p className="font-inter text-[13px] font-medium leading-[1.6] text-text-tertiary">
          {variable}
        </p>
      </div>
    </div>
  );
}

function Section({
  title,
  description,
  tokens,
  showBorder,
}: {
  title: string;
  description: string;
  tokens: readonly { name: string; variable: string }[];
  showBorder?: boolean;
}) {
  return (
    <section className="flex flex-col gap-6">
      <div className="flex w-full flex-col gap-2">
        <h3 className="font-outfit text-[27px] font-medium leading-[1.15] tracking-[0.216px] text-text-primary">
          {title}
        </h3>
        <p className="font-inter text-base font-normal leading-[1.45] text-text-secondary">
          {description}
        </p>
      </div>
      <div className="grid w-full grid-cols-[repeat(auto-fill,236px)] gap-4">
        {tokens.map((t) => (
          <ColorCard
            key={t.variable}
            variable={t.variable}
            name={t.name}
            showBorder={showBorder}
          />
        ))}
      </div>
    </section>
  );
}

export default function ColorsPage() {
  const [activeTab, setActiveTab] = useState<"ui" | "primitives">("ui");

  return (
    <>
      <div className="flex w-full flex-col gap-4">
        <div className="flex flex-col gap-1">
          <p className="font-inter text-[13px] font-medium leading-[1.6] text-text-secondary">
            FOUNDATIONAL
          </p>
          <h2 className="font-outfit text-[40px] font-bold leading-[0.96] tracking-[0.32px] text-text-primary">
            Colors
          </h2>
        </div>
        <p className="font-inter text-base font-normal leading-[1.45] text-text-secondary">
          Tokens are a set of foundational design decisions represented as
          reusable data. These tokens are shared across all platforms, iOS,
          Android, and Web, and control the entire visual part of our design
          system.
        </p>
      </div>

      <div className="flex flex-col gap-16">
        <div className="relative isolate -mb-px flex items-start gap-6">
          <button
            type="button"
            onClick={() => setActiveTab("ui")}
            className="z-10 flex flex-col gap-2"
          >
            <span
              className={`font-inter text-base leading-[1.45] ${
                activeTab === "ui"
                  ? "font-semibold text-text-primary"
                  : "font-normal text-text-tertiary"
              }`}
            >
              UI-Colors
            </span>
            {activeTab === "ui" && (
              <div className="h-0.5 w-full bg-text-primary" />
            )}
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("primitives")}
            className="flex flex-col gap-2"
          >
            <span
              className={`font-inter text-base leading-[1.45] ${
                activeTab === "primitives"
                  ? "font-semibold text-text-primary"
                  : "font-normal text-text-tertiary"
              }`}
            >
              Primitives
            </span>
            {activeTab === "primitives" && (
              <div className="h-0.5 w-full bg-text-primary" />
            )}
          </button>

          <div className="absolute bottom-0 left-0 right-0 z-0 h-px bg-surface-3" />
        </div>

        {activeTab === "ui" && (
          <>
            <Section
              title="Accents"
              description="Brand and interactive accent colors from globals.css."
              tokens={colorTokens.accents}
            />
            <Section
              title="Surfaces"
              description="Background and surface layers from globals.css."
              tokens={colorTokens.surfaces}
            />
            <Section
              title="Text colors"
              description="Text hierarchy: primary, secondary, tertiary."
              tokens={colorTokens.text}
            />
            <Section
              title="Border"
              description="Default border color used across the system."
              tokens={colorTokens.border}
            />
          </>
        )}

        {activeTab === "primitives" && (
          <section className="flex flex-col gap-6">
            <div className="flex w-full flex-col gap-2">
              <h3 className="font-outfit text-[27px] font-medium leading-[1.15] tracking-[0.216px] text-text-primary">
                Primitives
              </h3>
              <p className="font-inter text-base font-normal leading-[1.45] text-text-secondary">
                Underlying primitive color tokens (e.g. brand, neutrals) that
                UI colors are built from. Connect these once primitives are
                defined in your token set.
              </p>
            </div>
          </section>
        )}
      </div>
    </>
  );
}
