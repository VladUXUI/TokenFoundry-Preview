"use client";

import { useState } from "react";
import { spacingTokens } from "@/data/design-tokens";

function SpacingRow({ variable, name }: { variable: string; name: string }) {
  return (
    <div className="flex w-full max-w-[400px] items-center gap-6 rounded-[var(--radius-m)] border border-border bg-surface-1 p-4 shadow-[0px_2px_4px_0px_rgba(0,0,0,0.06)]">
      <div
        className="h-8 shrink-0 rounded bg-accent-primary"
        style={{ width: `var(${variable})` }}
      />
      <div className="flex min-w-0 flex-col gap-0">
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

export default function SpacingPage() {
  const [activeTab, setActiveTab] = useState<"preview" | "scale">("preview");

  return (
    <>
      <div className="flex max-w-[632px] flex-col gap-4">
        <div className="flex flex-col gap-1">
          <p className="font-inter text-[13px] font-medium leading-[1.6] text-text-secondary">
            FOUNDATIONAL
          </p>
          <h2 className="font-outfit text-[40px] font-bold leading-[0.96] tracking-[0.32px] text-text-primary">
            Spacing
          </h2>
        </div>
        <p className="font-inter text-base font-normal leading-[1.45] text-text-secondary">
          Spacing tokens from globals.css used for padding, margins, and gaps.
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

          <div className="absolute bottom-0 left-0 z-0 h-px w-[762px] bg-surface-3" />
        </div>

        {activeTab === "preview" && (
          <section className="flex flex-col gap-6">
            <div className="flex max-w-[632px] flex-col gap-2">
              <h3 className="font-outfit text-[27px] font-medium leading-[1.15] tracking-[0.216px] text-text-primary">
                Preview
              </h3>
              <p className="font-inter text-base font-normal leading-[1.45] text-text-secondary">
                Example layouts showing how spacing tokens affect gaps and
                padding.
              </p>
            </div>

            <div className="flex flex-col gap-6 rounded-[var(--radius-m)] border border-border bg-surface-1 p-6 shadow-[0px_2px_4px_0px_rgba(0,0,0,0.06)]">
              <div className="flex flex-col gap-3">
                <p className="font-inter text-[13px] font-medium leading-[1.6] text-text-tertiary">
                  Vertical stack using --spacing-16
                </p>
                <div
                  className="flex flex-col rounded-[var(--radius-s)] bg-surface-1"
                  style={{ gap: "var(--spacing-16)" }}
                >
                  <div className="h-8 rounded-[var(--radius-s)] bg-surface-3" />
                  <div className="h-8 rounded-[var(--radius-s)] bg-surface-3" />
                  <div className="h-8 rounded-[var(--radius-s)] bg-surface-3" />
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <p className="font-inter text-[13px] font-medium leading-[1.6] text-text-tertiary">
                  Inline buttons using --spacing-8
                </p>
                <div
                  className="flex flex-wrap rounded-[var(--radius-s)] bg-surface-1"
                  style={{ gap: "var(--spacing-8)" }}
                >
                  <div className="h-8 w-[96px] rounded-[var(--radius-s)] bg-accent-primary" />
                  <div className="h-8 w-[96px] rounded-[var(--radius-s)] bg-surface-3" />
                  <div className="h-8 w-[96px] rounded-[var(--radius-s)] bg-surface-3" />
                </div>
              </div>
            </div>
          </section>
        )}

        {activeTab === "scale" && (
          <section className="flex flex-col gap-6">
            <div className="flex max-w-[632px] flex-col gap-2">
              <h3 className="font-outfit text-[27px] font-medium leading-[1.15] tracking-[0.216px] text-text-primary">
                Scale
              </h3>
              <p className="font-inter text-base font-normal leading-[1.45] text-text-secondary">
                From --spacing-2 (2px) to --spacing-64 (64px). The purple bar
                width shows the token value.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              {spacingTokens.map((t) => (
                <SpacingRow
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

