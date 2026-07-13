//@ts-nocheck
"use client";

import { sidebarMenu } from "@/constants/sidebarData";
import { cn } from "@/lib/utils";
import { Menu, User, X } from "lucide-react";
import Image from "next/image";
import { usePathname, useSearchParams } from "next/navigation";
import { useState } from "react";
import { useAppSelector } from "../Redux/hooks";
import { useCurrentUserInfo } from "../Redux/Slice/authSlice";

import {
  SidebarDropdown,
  SidebarDropdownItem,
  SidebarMenuItem,
} from "./sidebar-menu-item";
import Link from "next/link";
export function Sidebar({ open, collapsed, onToggle, onCollapse }) {
  const [expandedMenu, setExpandedMenu] = useState<string | null>("");
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const role = searchParams.get("role");
  const user = useAppSelector(useCurrentUserInfo);

  // console.log({ user })
  const toggleMenu = (menu: string) => {
    setExpandedMenu(expandedMenu === menu ? null : menu);
  };

  // ✅ Role-based active check
  const isActive = (href: string) => {
    // For non-role-based routes
    if (!href.includes("admin-management")) {
      return pathname === href;
    }
    // For role-based User Management routes
    if (href.includes("role=") && role) {
      return href.includes(`role=${role}`);
    }
    return false;
  };

  // ✅ Auto-expand User Management when role exists
  const isUserManagementActive =
    pathname.includes("/dashboard/admin-management") && role;

  return (
    <div className="flex flex-col">




      {/* Mobile Toggle */}
      <button
        onClick={onToggle}
        className="fixed top-4 left-4 z-50 md:hidden bg-white p-2 rounded-none border border-border"
      >
        {open ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed md:relative h-screen p t-2 bg- sidebar bg-[#2a2d2a] text-white transition-all duration-300  border-r border-sidebar-border flex flex-col transition-all duration-300 z-40",
          open ? "translate-x-0" : "-translate-x-full md:translate-x-0",
          collapsed ? "w-20" : "w-72"
        )}
      >
        {/* Logo Section */}
        <div
        className={cn(
          "flex items-center justify-between bg-white transition-all duration-300",
          collapsed ? "p -3" : "p-2 border-b border-sidebar-border"
        )}
      >
        {!collapsed && (
          <Link href={`/dashboard/`}>
            <div className="p-2 md:p-3">
              <Image
                src={"/logo.png"}
                alt="logo"
                width={200}
                height={80}
                className="mx-auto w-36 md:w-40 lg:w-48 xl:w-52 h-auto"
              />
            </div>
          </Link>
        )}
      </div>
        {collapsed && (
          <div className="">
            <Image
              src={"/fav.png"}
              alt="logo"
              width={40}
              height={40}
              className="mx-auto rounded-full w-8 h-8"
            />
          </div>
        )}
        {/* Profile */}
        <div className="flex flex-col hidden items-center mb-8">
          <div className="w-18 h-18  relative bg-white rounded-full flex overflow-hidden items-center justify-center mb-4 shadow-lg">

            {user?.profile ? <div className="p-1"> <Image src={user?.profile} width={100} height={100} alt="" ></Image></div> : <User size={40} className="text-blue-900" />}
          </div>
          {open && (
            <div className="text-center">
              <h2 className="font-bold text-lg">  Hello, {user?.name || "User"}</h2>
              <p className="text-sm text-blue-100"> {user?.role}</p>
            </div>
          )}
        </div>

        <nav className="flex-1  pt-5 overflow-y-auto p-2 px-5 space-y-2">
          {sidebarMenu.map((menu) =>
            menu.type === "dropdown" ? (
              <SidebarDropdown
                key={menu.id}
                icon={menu.icon}
                label={menu.label}
                collapsed={collapsed}
                expanded={
                  expandedMenu === menu.key ||
                  (menu.label === "User Management" && isUserManagementActive)
                }
                onToggle={() => toggleMenu(menu.key)}
              >
                {menu.items?.map((item) => (
                  <div className="mx-2" key={item.href}>
                    <SidebarDropdownItem
                      href={item.href}
                      label={item.label}
                      isActive={isActive(item.href)}
                    />
                  </div>
                ))}
              </SidebarDropdown>
            ) : (
              <SidebarMenuItem
                key={menu.id || menu.key}
                icon={menu.icon}
                label={menu.label}
                href={menu.href}
                collapsed={collapsed}
                isActive={isActive(menu.href ?? "")}
              />
            )
          )}
        </nav>
      </aside>
    </div>
  );
}
