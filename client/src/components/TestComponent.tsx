import { JSX, useEffect, useRef } from "react";

export default function TestComponent() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const canvasCtxRef = useRef<CanvasRenderingContext2D | null>(null);

  useEffect(() => {
    if (canvasRef.current) {
      canvasCtxRef.current = canvasRef.current.getContext("2d");
    }
  }, []);
  return (
    <div className="w-[700px] h-[450px] bg-red-800">
      <canvas ref={canvasRef}></canvas>
    </div>
  );
}
