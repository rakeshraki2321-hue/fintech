import React from "react";
import { Link, useLocation } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Sprout, LayoutDashboard, Plus, Activity, ListTodo } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

const navigationItems = [
  {
    title: "Dashboard",
    url: createPageUrl("Dashboard"),
    icon: LayoutDashboard,
  },
  {
    title: "Add Plant",
    url: createPageUrl("AddPlant"),
    icon: Plus,
  },
  {
    title: "Record Sensors",
    url: createPageUrl("SensorInput"),
    icon: Activity,
  },
  {
    title: "Care Tasks",
    url: createPageUrl("Tasks"),
    icon: ListTodo,
  },
];

export default function Layout({ children, currentPageName }) {
  const location = useLocation();

  return (
    <SidebarProvider>
      <style>{`
        :root {
          --garden-primary: #2d5016;
          --garden-secondary: #4a7c2c;
          --garden-accent: #7fb069;
          --garden-light: #e8f5e9;
          --garden-dark: #1b3409;
        }
      `}</style>
      <div className="min-h-screen flex w-full bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
        <Sidebar className="border-r border-green-200 bg-white/80 backdrop-blur-sm">
          <SidebarHeader className="border-b border-green-100 p-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg">
                <Sprout className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="font-bold text-gray-900 text-lg">Smart Garden</h2>
                <p className="text-xs text-green-600 font-medium">AI Assistant</p>
              </div>
            </div>
          </SidebarHeader>
          
          <SidebarContent className="p-3">
            <SidebarGroup>
              <SidebarGroupLabel className="text-xs font-semibold text-gray-500 uppercase tracking-wider px-3 py-2">
                Navigation
              </SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {navigationItems.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton 
                        asChild 
                        className={`hover:bg-green-50 hover:text-green-700 transition-all duration-200 rounded-lg mb-1 ${
                          location.pathname === item.url ? 'bg-green-100 text-green-800 font-medium' : ''
                        }`}
                      >
                        <Link to={item.url} className="flex items-center gap-3 px-3 py-2.5">
                          <item.icon className="w-4 h-4" />
                          <span>{item.title}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>

          <SidebarFooter className="border-t border-green-100 p-4">
            <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
              <div className="w-9 h-9 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center">
                <Sprout className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-gray-900 text-sm">Gardener</p>
                <p className="text-xs text-green-600">Growing with AI</p>
              </div>
            </div>
          </SidebarFooter>
        </Sidebar>

        <main className="flex-1 flex flex-col">
          <header className="bg-white/60 backdrop-blur-md border-b border-green-100 px-6 py-4 md:hidden sticky top-0 z-10">
            <div className="flex items-center gap-4">
              <SidebarTrigger className="hover:bg-green-100 p-2 rounded-lg transition-colors duration-200" />
              <div className="flex items-center gap-2">
                <Sprout className="w-5 h-5 text-green-600" />
                <h1 className="text-lg font-bold text-gray-900">Smart Garden</h1>
              </div>
            </div>
          </header>

          <div className="flex-1 overflow-auto">
            {children}
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
}