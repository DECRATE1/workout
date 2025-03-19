import { ReactElement } from "react";

export default function Layout({ children }: { children: any }) {
  return (
    <div className="flex justify-center bg-black min-h-screen">
      <main className="max-w-[1920px] w-full h-full">{children}</main>
    </div>
  );
}
