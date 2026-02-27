export type SidebarButtonState = "default" | "hover" | "active";

export function SidebarButton({
  label,
  state = "default",
  className = "",
}: {
  label: string;
  state?: SidebarButtonState;
  className?: string;
}) {
  const isActive = state === "active";
  const isHover = state === "hover";

  const indicatorClasses =
    state === "active"
      ? "bg-accent-primary"
      : state === "hover"
      ? "bg-text-secondary"
      : "bg-transparent group-hover:bg-text-primary";

  const textClasses =
    state === "active"
      ? "text-text-primary"
      : state === "hover"
      ? "text-text-primary"
      : "text-text-primary group-hover:text-text-primary";

  return (
    <div
      className={`flex h-8 w-[176px] items-center gap-2 py-1.5 ${className}`}
    >
      <span
        className={`h-full w-1 shrink-0 rounded-[var(--radius-xl)] ${indicatorClasses}`}
      />
      <span
        className={`font-inter text-[14px] font-semibold leading-[1.45] ${textClasses}`}
      >
        {label}
      </span>
    </div>
  );
}

