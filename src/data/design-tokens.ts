/**
 * Token definitions that mirror globals.css.
 * Used to drive the documentation pages; values are read from CSS variables at runtime.
 */

export const colorTokens = {
  accents: [
    { name: "Primary", variable: "--accent-primary" },
    { name: "Pill surface", variable: "--pill-surface" },
    { name: "Pill text", variable: "--pill-text" },
  ],
  surfaces: [
    { name: "Surface 1", variable: "--surface-1" },
    { name: "Surface 3", variable: "--surface-3" },
    { name: "Surface 4", variable: "--surface-4" },
  ],
  text: [
    { name: "Text primary", variable: "--text-primary" },
    { name: "Text secondary", variable: "--text-secondary" },
    { name: "Text tertiary", variable: "--text-tertiary" },
  ],
  border: [{ name: "Border", variable: "--border" }],
  /** Base colors that UI tokens reference. Add more in globals.css and here as needed. */
  primitives: [
    { name: "Brand", variable: "--accent-primary" },
    { name: "Neutral light", variable: "--surface-1" },
    { name: "Neutral dark", variable: "--text-primary" },
    { name: "Neutral mid", variable: "--surface-3" },
    { name: "Pill / highlight", variable: "--pill-surface" },
  ],
} as const;

export const typographyTokens = [
  { name: "H1 (40px)", variable: "--text-40", usage: "Page titles" },
  { name: "H2 (27px)", variable: "--text-27", usage: "Section headings" },
  { name: "H3 (23px)", variable: "--text-23", usage: "Sidebar / small headings" },
  { name: "Body (16px)", variable: "--text-16", usage: "Body copy" },
  { name: "Small (14px)", variable: "--text-14", usage: "Labels, nav" },
  { name: "Caption (13px)", variable: "--text-13", usage: "Captions, metadata" },
] as const;

export const fontFamilyTokens = [
  { name: "Outfit", variable: "--font-outfit", usage: "Headings" },
  { name: "Inter", variable: "--font-inter", usage: "Body, UI" },
] as const;

export const spacingTokens = [
  { name: "2", variable: "--spacing-2" },
  { name: "4", variable: "--spacing-4" },
  { name: "8", variable: "--spacing-8" },
  { name: "16", variable: "--spacing-16" },
  { name: "24", variable: "--spacing-24" },
  { name: "32", variable: "--spacing-32" },
  { name: "40", variable: "--spacing-40" },
  { name: "48", variable: "--spacing-48" },
  { name: "64", variable: "--spacing-64" },
] as const;

export const radiusTokens = [
  { name: "Small (s)", variable: "--radius-s" },
  { name: "Medium (m)", variable: "--radius-m" },
  { name: "Extra large (xl)", variable: "--radius-xl" },
  { name: "Round", variable: "--radius-round" },
] as const;
