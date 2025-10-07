"client";
import React from "react";
import { SectionCards } from "./includes/section-cards";
import ChartAreaInteractive from "./includes/chart-area-interactive";
import { ChartCard } from "./includes/chart-card";
import data from "./data.json";
import { DataTable } from "./includes/table/table";

export default function DashboardIndex() {
  return (
    <div>
      <div className="@container/main flex flex-col gap-4 py-4 md:gap-6 md:py-6">
        <SectionCards />
        <ChartAreaInteractive />
        <ChartCard />
        <DataTable data={data} />
        <div className="bg-muted/50 min-h-[100vh] flex-1 rounded-xl md:min-h-min" />
      </div>
    </div>
  );
}
