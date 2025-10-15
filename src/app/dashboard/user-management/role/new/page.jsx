import DashboardLayout from "@/components/layout/layout";
import UserForm from "@/components/pages/dashboard/user-management/users/Form";
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
    text: "New",
  },
];

export default function Dashboard() {
  return (
    <DashboardLayout breadCrumb={breadCrumb}>
      <UserForm />
    </DashboardLayout>
  );
}
