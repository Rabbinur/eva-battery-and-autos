

"use client";

import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import { Button } from "../ui/button";

interface SidebarMenuItemProps {
  icon: ReactNode;
  label: string;
  href?: string;
  collapsed?: boolean;
  isActive?: boolean;
  onClick?: () => void;
}

export function SidebarMenuItem({
  icon,
  label,
  href,
  collapsed = false,
  isActive = false,
  onClick,
}: SidebarMenuItemProps) {
  const pathname = usePathname();
  const active = isActive || (href && pathname === href);

  const content = (
    <div className="flex items-center gap-3">
      {icon}
      {!collapsed && <span className="font-medium">{label}</span>}
    </div>
  );

  if (href) {
    return (
      <Link
        href={href}
        className={cn(
          "flex items-center gap-3 px-3 py-3 rounded-none transition-all duration-200",
          active
            ? "bg-destructive  text-white "
            : "text-white  hover:text-white hover:bg-destructive ",
          collapsed && "justify-center"
        )}
        title={collapsed ? label : ""}
      >
        {content}
      </Link>
    );
  }

  return (
    <Button
      onClick={onClick}
      className={cn(
        "w-full flex items-center justify-between px-3 py-3 rounded-none transition-all duration-200",
        active
          ? "bg-destructive  text-white"
          : "text-white  hover:bg-destructive",
        collapsed && "justify-center"
      )}
      title={collapsed ? label : ""}
    >
      {content}
    </Button>
  );
}

interface SidebarDropdownProps {
  icon: ReactNode;
  label: string;
  collapsed?: boolean;
  expanded?: boolean;
  onToggle?: () => void;
  children?: ReactNode;
}

export function SidebarDropdown({
  icon,
  label,
  collapsed = false,
  expanded = false,
  onToggle,
  children,
}: SidebarDropdownProps) {
  return (
    <div>
      <Button
        onClick={onToggle}
        className={cn(
          "w-full flex items-center bg-transparent shadow-none justify-between px-3 py-3 rounded-none transition-all duration-200",
          expanded
            ? "bg-destructive  text-white  hover:bg-destructive "
            : "text-white sidebar-foreground hover:bg-destructive  hover:text-white",
          collapsed && "justify-center"
        )}
        title={collapsed ? label : ""}
      >
        <div className="flex items-center gap-3">
          {icon}
          {!collapsed && <span className="font-medium">{label}</span>}
        </div>
        {!collapsed && (
          <ChevronDown
            size={16}
            className={cn(
              "transition-transform duration-300",
              expanded ? "rotate-180" : ""
            )}
          />
        )}
      </Button>
      {expanded && !collapsed && (
        <div className="ml-4 mt-2 space-y-1 border-l animate-in duration-200">
          {children}
        </div>
      )}
    </div>
  );
}

interface SidebarDropdownItemProps {
  href: string;
  label: string;
  isActive?: boolean;
}

export function SidebarDropdownItem({
  href,
  label,
  isActive = false,
}: SidebarDropdownItemProps) {
  const pathname = usePathname();
  const active = isActive || pathname === href;

  return (
    <Link
      href={href}
      className={cn(
        "block px-4 py-2 text-sm rounded-none transition-all duration-200",
        active
          ? "bg-destructive sidebar-primary text-white  hover:bg-destructive "
          : "text-white hover:text-white hover:bg-destructive "
      )}
    >
      {label}
    </Link>
  );
}
