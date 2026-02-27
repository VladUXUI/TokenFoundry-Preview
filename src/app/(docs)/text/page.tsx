"use client";

import { useState } from "react";
import { typographyTokens, fontFamilyTokens } from "@/data/design-tokens";

function TypeSample({
  variable,
  name,
  usage,
  exampleText = "The quick brown fox",
}: {
  variable: string;
  name: string;
  usage: string;
  exampleText?: string;
}) {
  return (
    <div className="flex w-full flex-col gap-2 rounded-[var(--radius-m)] border border-border bg-surface-1 p-4 shadow-[0px_2px_4px_0px_rgba(0,0,0,0.06)]">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <p className="font-inter text-[14px] font-semibold leading-[1.45] text-text-primary">
          {name}
        </p>
        <p className="font-inter text-[13px] font-medium leading-[1.6] text-text-tertiary">
          {variable}
        </p>
      </div>
      <p className="font-inter text-[13px] font-medium leading-[1.6] text-text-tertiary">
        {usage}
      </p>
      <p
        className="text-text-primary"
        style={{ fontSize: `var(${variable})` }}
      >
        {exampleText}
      </p>
    </div>
  );
}

function FontFamilyCard({
  variable,
  name,
  usage,
}: {
  variable: string;
  name: string;
  usage: string;
}) {
  return (
    <div className="flex w-full max-w-[400px] flex-col gap-2 rounded-[var(--radius-m)] border border-border bg-surface-1 p-4 shadow-[0px_2px_4px_0px_rgba(0,0,0,0.06)]">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <p className="font-inter text-[14px] font-semibold leading-[1.45] text-text-primary">
          {name}
        </p>
        <p className="font-inter text-[13px] font-medium leading-[1.6] text-text-tertiary">
          {variable}
        </p>
      </div>
      <p className="font-inter text-[13px] font-medium leading-[1.6] text-text-tertiary">
        {usage}
      </p>
      <p
        className="text-[24px] text-text-primary"
        style={{ fontFamily: `var(${variable})` }}
      >
        The quick brown fox jumps over the lazy dog.
      </p>
    </div>
  );
}

export default function TextPage() {
  const [activeTab, setActiveTab] = useState<"families" | "sizes">(
    "families"
  );

  return (
    <>
      <div className="flex max-w-[632px] flex-col gap-4">
        <div className="flex flex-col gap-1">
          <p className="font-inter text-[13px] font-medium leading-[1.6] text-text-secondary">
            FOUNDATIONAL
          </p>
          <h2 className="font-outfit text-[40px] font-bold leading-[0.96] tracking-[0.32px] text-text-primary">
            Fonts
          </h2>
        </div>
        <p className="font-inter text-base font-normal leading-[1.45] text-text-secondary">
          Typography tokens from globals.css: font families, sizes, and usage.
          Use the CSS variables in your components for consistent type scale.
        </p>
      </div>

      <div className="flex flex-col gap-16">
        <div className="relative isolate -mb-px flex items-start gap-6">
          <button
            type="button"
            onClick={() => setActiveTab("families")}
            className="flex flex-col gap-2"
          >
            <span
              className={`font-inter text-base leading-[1.45] ${
                activeTab === "families"
                  ? "font-semibold text-text-primary"
                  : "font-normal text-text-tertiary"
              }`}
            >
              Font families
            </span>
            {activeTab === "families" && (
              <div className="h-0.5 w-full bg-text-primary" />
            )}
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("sizes")}
            className="flex flex-col gap-2"
          >
            <span
              className={`font-inter text-base leading-[1.45] ${
                activeTab === "sizes"
                  ? "font-semibold text-text-primary"
                  : "font-normal text-text-tertiary"
              }`}
            >
              Font sizes
            </span>
            {activeTab === "sizes" && (
              <div className="h-0.5 w-full bg-text-primary" />
            )}
          </button>

          <div className="absolute bottom-0 left-0 z-0 h-px w-[762px] bg-surface-3" />
        </div>

        {activeTab === "families" && (
          <section className="flex flex-col gap-6">
            <div className="flex max-w-[632px] flex-col gap-2">
              <h3 className="font-outfit text-[27px] font-medium leading-[1.15] tracking-[0.216px] text-text-primary">
                Font families
              </h3>
              <p className="font-inter text-base font-normal leading-[1.45] text-text-secondary">
                Defined in globals.css as --font-outfit and --font-inter.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              {fontFamilyTokens.map((t) => (
                <FontFamilyCard
                  key={t.variable}
                  variable={t.variable}
                  name={t.name}
                  usage={t.usage}
                />
              ))}
            </div>
          </section>
        )}

        {activeTab === "sizes" && (
          <section className="flex flex-col gap-6">
            <div className="flex max-w-[632px] flex-col gap-2">
              <h3 className="font-outfit text-[27px] font-medium leading-[1.15] tracking-[0.216px] text-text-primary">
                Font sizes
              </h3>
              <p className="font-inter text-base font-normal leading-[1.45] text-text-secondary">
                Size scale from globals.css: --text-13 through --text-40.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              {typographyTokens.map((t) => (
                <TypeSample
                  key={t.variable}
                  variable={t.variable}
                  name={t.name}
                  usage={t.usage}
                />
              ))}
            </div>
          </section>
        )}
      </div>
    </>
  );
}

