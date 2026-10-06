import type { LucideIcon } from "lucide-react";
import Link from "next/link";

const variants = {
  primary: "btn-primary",
  secondary: "btn-secondary",
  install: "btn-install",
} as const;

type Props = {
  href?: string;
  variant?: keyof typeof variants;
  icon?: LucideIcon;
  size?: "md" | "sm";
  className?: string;
  children: React.ReactNode;
  type?: "button" | "submit";
};

export default function Btn({ href, variant = "primary", icon: Icon, size = "md", className = "", children, type = "button" }: Props) {
  const cls = `${size === "sm" ? "btn-sm" : "btn"} ${variants[variant]} ${Icon ? "btn-icon" : ""} ${className}`;
  const inner = (
    <>
      {Icon && (
        <span className="btn-circulo" aria-hidden="true">
          <Icon className={size === "sm" ? "h-3.5 w-3.5" : "h-4 w-4"} strokeWidth={2.5} />
        </span>
      )}
      {children}
    </>
  );
  if (href) {
    return (
      <Link className={cls} href={href}>
        {inner}
      </Link>
    );
  }
  return (
    <button className={cls} type={type}>
      {inner}
    </button>
  );
}
