export default function ProgressBar({
  percent,
  w,
  h,
  width,
}: {
  percent: number;
  w: number;
  h: number;
  width: number;
}) {
  const scheme = "#BD2546";

  function handleProgress(value: number, circle: "track" | "progress") {
    const track = 2 * 3.14 * 90;
    const progress = track * ((100 - value) / 100);
    return circle === "track" ? track : progress;
  }

  return (
    <div className="relative">
      <svg
        width={w}
        height={h}
        viewBox="-25 -25 250 250"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        className="-rotate-90"
      >
        <circle
          r="90"
          cx="100"
          cy="100"
          fill="transparent"
          strokeWidth={width + "px"}
          strokeDasharray="565.48px"
          strokeDashoffset="0"
          className="stroke-[#380C1B]"
        ></circle>
        <circle
          r="90"
          cx="100"
          cy="100"
          strokeWidth={width + "px"}
          strokeDashoffset={handleProgress(percent, "progress")}
          fill="transparent"
          strokeDasharray={handleProgress(percent, "track")}
          stroke={scheme}
          className="transition-all stroke-[#FA1059] ease-in-out duration-1000"
        ></circle>
      </svg>
    </div>
  );
}
