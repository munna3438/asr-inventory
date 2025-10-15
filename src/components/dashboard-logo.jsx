"use client";

import React from "react";
export default function DashboardLogo() {
  return (
    <a
      href="/dashboard"
      size="lg"
      className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground h-[70px]"
    >
      <div className=" text-sidebar-primary-foreground flex aspect-square size-full items-center justify-center rounded-lg overflow-hidden">
        <img className="w-full" src="/logo/vartical_logo.jpg" />
      </div>
    </a>
  );
}
