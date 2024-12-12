import React from "react";
import { Link } from "react-router-dom";
import { ModeToggle } from "@components/mode-toggle";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@components/ui/breadcrumb";
import { ChevronRight } from "lucide-react";
import { useTheme } from "@components/ThemeProvider"

const Header: React.FC = () => {
  const { theme } = useTheme();

  const logoSrc =
    theme === "dark"
      ? "/src/assets/logo-nobg-white.png"
      : "/src/assets/logo-nobg-black.png";

  return (
    <header className="border-b">
      <div className="flex items-center justify-between px-6 py-3 h-[80px]">
        <div className="flex items-center">
          <Link to={"/"}>
             <img src={logoSrc} alt="Logo" className="h-[100px]" />
          </Link>
          <span className="text-xl font-bold">TrackSure</span>
        </div>
        <ModeToggle />
      </div>
      <Breadcrumb className="px-6 py-2">
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Dashboard</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <ChevronRight className="h-4 w-4" />
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
    </header>
  );
};

export default Header;
