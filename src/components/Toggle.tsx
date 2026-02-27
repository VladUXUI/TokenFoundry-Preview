"use client";

import { useState } from "react";

export type ToggleMode = "light" | "dark";

export function Toggle({
  mode,
  initialMode = "dark",
  className = "",
  onChange,
}: {
  mode?: ToggleMode;
  initialMode?: ToggleMode;
  className?: string;
  onChange?: (mode: ToggleMode) => void;
}) {
  const [internalMode, setInternalMode] = useState<ToggleMode>(initialMode);
  const effectiveMode = mode ?? internalMode;
  const isDark = effectiveMode === "dark";

  const handleClick = () => {
    const nextMode: ToggleMode = isDark ? "light" : "dark";
    if (mode === undefined) {
      setInternalMode(nextMode);
    }
    onChange?.(nextMode);
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`flex h-8 w-[53px] items-center justify-start rounded-[var(--radius-round)] border-2 border-[color:var(--toggle-track-bg)] p-1 transition-colors duration-400 ease-out ${
        isDark ? "" : "bg-[color:var(--toggle-track-bg)]"
      } ${className}`}
      role="switch"
      aria-checked={isDark}
    >
      <span
        className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full p-1 transition-transform transition-colors duration-400 ease-out ${
          isDark
            ? "translate-x-[calc(53px-2px-2*0.25rem-1.5rem)] bg-[color:var(--toggle-knob-bg)]"
            : "translate-x-0 bg-[color:var(--toggle-knob-bg)]"
        }`}
      >
        {isDark ? (
          // Moon icon (dark on light knob in dark theme)
          <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ color: "var(--surface-1-inverted)" }}
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
          </svg>
        ) : (
          // Sun icon
          <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ color: "var(--text-primary)" }}
          >
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
          </svg>
        )}
      </span>
    </button>
  );
}

