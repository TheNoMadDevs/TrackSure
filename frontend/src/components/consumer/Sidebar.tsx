import React, { useState } from "react";
import { Link } from "react-router-dom";
import { cn } from "@lib/utils";
import { Button } from "@components/ui/button";
import { ScrollArea } from "@components/ui/scroll-area";
import { Home,  FileText, FileStack, LogOut, ChevronLeft, ChevronRight, MapPinHouse } from 'lucide-react';

interface SidebarItem {
  name: string;
  icon: React.ElementType;
  href: string;
}

function LogOutt(){
  console.log('LogOut');
}

const sidebarItems: SidebarItem[] = [
  { name: "Dashboard", icon: Home, href: "/" },
  { name: "Products", icon: FileText, href: "/products" },
  { name: "Tracking", icon: MapPinHouse, href: "/tracking" },
  { name: "Order History", icon: FileStack, href: "/history" },

];

const Sidebar: React.FC = () => {
  const [collapsed, setCollapsed] = useState<boolean>(false);

  return (
    <div className={cn(
      "relative flex flex-col border-r bg-background",
      collapsed ? "w-16" : "w-64"
    )}>
      <ScrollArea className="flex-grow">
        <nav className="flex flex-col gap-2 p-2">
          {sidebarItems.map((item) => (
            <Link key={item.name} to={item.href}>
              <Button variant="ghost" className="w-full justify-start">
                <item.icon className={cn("h-5 w-5", collapsed ? "mr-0" : "mr-2")} />
                {!collapsed && <span>{item.name}</span>}
              </Button>
            </Link>
          ))}
        </nav>
      </ScrollArea>
      <div className="border-t p-2">
        <Button variant="ghost" className="w-full justify-start">
          <LogOut className={cn("h-5 w-5", collapsed ? "mr-0" : "mr-2")} />
          {!collapsed && <span onClick={LogOutt}>Logout</span>}
        </Button>
      </div>
      <Button
        variant="ghost"
        size="icon"
        className="absolute -right-4 top-4 z-10 rounded-full border bg-background"
        onClick={() => setCollapsed(!collapsed)}
      >
        {collapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
      </Button>
    </div>
  );
};

export default Sidebar;
