import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}
export default function layout({ children }: LayoutProps) {
  return (
    <div className="flec flex-col gap-y-4">
      <nav className="text-lg p-1 bg-red-500 text-white">
        I am reusable nav bar
      </nav>
      {children}
    </div>
  );
}
