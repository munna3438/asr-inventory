"use client";

import {
  AudioWaveform,
  BadgeDollarSign,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
  UserCog,
} from "lucide-react";

import { NavMain } from "@/styles/components/nav-main";
import { NavProjects } from "@/styles/components/nav-projects";
import { NavUser } from "@/styles/components/nav-user";
import { TeamSwitcher } from "@/styles/components/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
  useSidebar,
} from "@/styles/components/ui/sidebar";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import DashboardLogo from "@/components/dashboard-logo";

export function AppSidebar({ ...props }) {
  const pathname = usePathname();

  const { isMobile, openMobile, setOpenMobile } = useSidebar();

  useEffect(() => {
    if (!isMobile) return;
    if (openMobile) setOpenMobile(false);
  }, [pathname]);

  const checkActive = (base) =>
    pathname === base || pathname.startsWith(`${base}/`);
  // This is sample data.
  const data = {
    user: {
      name: "shadcn",
      email: "m@example.com",
      avatar: "/avatars/shadcn.jpg",
    },
    teams: [
      {
        name: "Acme Inc",
        logo: GalleryVerticalEnd,
        plan: "Enterprise",
      },
      {
        name: "Acme Corp.",
        logo: AudioWaveform,
        plan: "Startup",
      },
      {
        name: "Evil Corp.",
        logo: Command,
        plan: "Free",
      },
    ],
    navMain: [
      {
        title: "User Management",
        url: "#",
        icon: UserCog,
        // isActive: pathname.startsWith("/dashboard/user-management"),
        isActive: checkActive("/dashboard/user-management"),
        items: [
          {
            title: "Users",
            url: "/dashboard/user-management/users",
            isActive: checkActive("/dashboard/user-management/users"),
          },
          {
            title: "Role",
            url: "/dashboard/user-management/role",
            isActive: checkActive("/dashboard/user-management/role"),
          },
          {
            title: "Permission",
            url: "/dashboard/user-management/permission",
            isActive: checkActive("/dashboard/user-management/permission"),
          },
        ],
      },
      {
        title: "Sales Management",
        url: "#",
        icon: BadgeDollarSign,
        isActive: checkActive("/dashboard/sales-management"),
        items: [
          {
            title: "Customer",
            url: "/dashboard/sales-management/customer",
            isActive: checkActive("/dashboard/sales-management/customer"),
          },
          {
            title: "Sales",
            url: "/dashboard/sales-management/sales",
            isActive: checkActive("/dashboard/sales-management/sales"),
          },
          {
            title: "Collection",
            url: "/dashboard/sales-management/collection",
            isActive: checkActive("/dashboard/sales-management/collection"),
          },
          {
            title: "Quotation",
            url: "/dashboard/sales-management/quotation",
            isActive: checkActive("/dashboard/sales-management/quotation"),
          },
          {
            title: "Return",
            url: "/dashboard/sales-management/return",
            isActive: checkActive("/dashboard/sales-management/return"),
          },
          {
            title: "Pos",
            url: "/dashboard/sales-management/pos",
            isActive: checkActive("/dashboard/sales-management/pos"),
          },
        ],
      },
    ],

    // projects: [
    //   {
    //     name: "Design Engineering",
    //     url: "#",
    //     icon: Frame,
    //   },
    //   {
    //     name: "Sales & Marketing",
    //     url: "#",
    //     icon: PieChart,
    //   },
    //   {
    //     name: "Travel",
    //     url: "#",
    //     icon: Map,
    //   },
    // ],
  };

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <DashboardLogo />
        {/* <TeamSwitcher teams={data.teams} /> */}
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
