"use client";

import { useState } from "react";
import { radiusTokens } from "@/data/design-tokens";

function RadiusCard({ variable, name }: { variable: string; name: string }) {
  return (
    <div className="flex w-[236px] flex-col gap-4 rounded-[var(--radius-m)] border border-border bg-surface-1 p-4 shadow-[0px_2px_4px_0px_rgba(0,0,0,0.06)]">
      <div
        className="h-24 w-full bg-accent-primary"
        style={{ borderRadius: `var(${variable})` }}
      />
      <div className="flex flex-col gap-0">
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

export default function RadiusPage() {
  const [activeTab, setActiveTab] = useState<"preview" | "scale">("preview");

  return (
    <>
      <div className="flex w-full flex-col gap-4">
        <div className="flex flex-col gap-1">
          <p className="font-inter text-[13px] font-medium leading-[1.6] text-text-secondary">
            FOUNDATIONAL
          </p>
          <h2 className="font-outfit text-[40px] font-bold leading-[0.96] tracking-[0.32px] text-text-primary">
            Radius
          </h2>
        </div>
        <p className="font-inter text-base font-normal leading-[1.45] text-text-secondary">
          Border radius tokens from globals.css. Use for cards, buttons, inputs,
          and any rounded corners.
        </p>
      </div>

      <div className="flex flex-col gap-16">
        <div className="relative isolate -mb-px flex items-start gap-6">
          <button
            type="button"
            onClick={() => setActiveTab("preview")}
            className="flex flex-col gap-2"
          >
            <span
              className={`font-inter text-base leading-[1.45] ${
                activeTab === "preview"
                  ? "font-semibold text-text-primary"
                  : "font-normal text-text-tertiary"
              }`}
            >
              Preview
            </span>
            {activeTab === "preview" && (
              <div className="h-0.5 w-full bg-text-primary" />
            )}
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("scale")}
            className="flex flex-col gap-2"
          >
            <span
              className={`font-inter text-base leading-[1.45] ${
                activeTab === "scale"
                  ? "font-semibold text-text-primary"
                  : "font-normal text-text-tertiary"
              }`}
            >
              Scale
            </span>
            {activeTab === "scale" && (
              <div className="h-0.5 w-full bg-text-primary" />
            )}
          </button>

          <div className="absolute bottom-0 left-0 right-0 z-0 h-px bg-surface-3" />
        </div>

        {activeTab === "preview" && (
          <section className="flex flex-col gap-6">
            <div className="flex w-full flex-col gap-2">
              <h3 className="font-outfit text-[27px] font-medium leading-[1.15] tracking-[0.216px] text-text-primary">
                Preview
              </h3>
              <p className="font-inter text-base font-normal leading-[1.45] text-text-secondary">
                Example components using different radius tokens for chips and
                cards.
              </p>
            </div>

            <div className="flex flex-col gap-6 rounded-[var(--radius-m)] border border-border bg-surface-1 p-6 shadow-[0px_2px_4px_0px_rgba(0,0,0,0.06)]">
              <div className="flex flex-col gap-3">
                <p className="font-inter text-[13px] font-medium leading-[1.6] text-text-tertiary">
                  Chips with small radius (--radius-s)
                </p>
                <div className="flex flex-wrap gap-3">
                  <div className="h-8 rounded-[var(--radius-s)] bg-accent-primary px-4" />
                  <div className="h-8 rounded-[var(--radius-s)] bg-surface-3 px-4" />
                  <div className="h-8 rounded-[var(--radius-s)] bg-surface-3 px-4" />
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <p className="font-inter text-[13px] font-medium leading-[1.6] text-text-tertiary">
                  Cards with medium / xl radius
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="h-20 w-[180px] rounded-[var(--radius-m)] bg-surface-3" />
                  <div className="h-20 w-[180px] rounded-[var(--radius-xl)] bg-surface-3" />
                </div>
              </div>
            </div>
          </section>
        )}

        {activeTab === "scale" && (
          <section className="flex flex-col gap-6">
            <div className="flex w-full flex-col gap-2">
              <h3 className="font-outfit text-[27px] font-medium leading-[1.15] tracking-[0.216px] text-text-primary">
                Scale
              </h3>
              <p className="font-inter text-base font-normal leading-[1.45] text-text-secondary">
                From --radius-s (8px) to --radius-round (999px). Preview shows
                the radius applied to a block.
              </p>
            </div>
            <div className="grid w-full grid-cols-[repeat(auto-fill,236px)] gap-4">
              {radiusTokens.map((t) => (
                <RadiusCard
                  key={t.variable}
                  variable={t.variable}
                  name={t.name}
                />
              ))}
            </div>
          </section>
        )}
      </div>
    </>
  );
}

