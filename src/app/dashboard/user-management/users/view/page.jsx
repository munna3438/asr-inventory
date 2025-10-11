import DashboardLayout from "@/components/layout/layout";
import DashboardIndex from "@/components/pages/dashboard/Dashboard";
import UserList from "@/components/pages/dashboard/user-management/users/List";
import React from "react";
const breadCrumb = [
  {
    href: "/dashboard",
    text: "Dashboard",
  },
  {
    href: "#",
    text: "user-management",
  },
  {
    href: "/dashboard/user-management/users",
    text: "Users",
  },
  {
    text: "List",
  },
];

export default function Dashboard() {
  return (
    <DashboardLayout breadCrumb={breadCrumb}>
      <UserList />
    </DashboardLayout>
  );
}
