import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer className="border-t py-4 text-center text-sm text-muted-foreground">
      © {new Date().getFullYear()} TrackSure. Team NoMads
    </footer>
  );
};

export default Footer;
