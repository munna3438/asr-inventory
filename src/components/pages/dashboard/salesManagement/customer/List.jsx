"use client";

import { Button } from "@/styles/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/styles/components/ui/card";
import { Input } from "@/styles/components/ui/input";
import { Plus, Search } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { UsersTable } from "./Table";
import data from "../../data.json";

export default function UserList() {
  const [search, setSearch] = useState("");

  return (
    <div>
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Users List</CardTitle>
            <div className="flex justify-center items-center gap-1">
              <Link href="/dashboard/user-management/users/new">
                <Button className="cursor-pointer">
                  <Plus className="h-4 w-4" />
                  <span className="inline-block md:hidden">Supplier</span>
                  <span className="hidden md:inline-block">New Supplier</span>
                </Button>
              </Link>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-4 mb-6">
            <div className="relative flex-1 max-w-sm">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search suppliers..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
          <UsersTable data={data} setSearch={setSearch} search={search} />
        </CardContent>
      </Card>
    </div>
  );
}
