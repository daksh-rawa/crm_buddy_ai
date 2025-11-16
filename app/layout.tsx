import "./globals.css";
import { StackProvider, StackTheme } from "@stackframe/stack";
import { stackClientApp } from "../stack/client";
import Sidebar from "@/components/layout/sidebar";
import Navbar from "@/components/layout/navbar";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex min-h-screen bg-gray-50"><StackProvider app={stackClientApp}><StackTheme>
        <Sidebar />
        <div className="flex flex-col flex-1">
          <Navbar />
          <main className="p-6">{children}</main>
        </div>
      </StackTheme></StackProvider></body>
    </html>
  );
}
