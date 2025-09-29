import { AppSidebar } from "@/styles/components/app-sidebar";
import { SidebarInset, SidebarProvider } from "@/styles/components/ui/sidebar";
import React from "react";

export default function Dashboard({ children }) {
  return (
    <div>
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>{children}</SidebarInset>
      </SidebarProvider>
    </div>
  );
}
