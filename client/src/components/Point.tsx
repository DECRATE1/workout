import React, { JSX, ReactElement, ReactNode } from "react";
interface PointProps {
  children?: React.ReactNode; // Используем children вместо Line
}

export default function Point({
  children,
  x,
  y,
}: {
  children?: React.JSX.Element;
  x: number;
  y: number;
}) {
  return (
    <span
      className={`w-full h-full flex items-center justify-center`}
      style={{ gridColumnStart: `${x}`, gridRowStart: `${7 - y + 1}` }}
    >
      <div className="size-1.5 bg-white rounded-full relative">{children}</div>
    </span>
  );
}
