export default function CircleProgress({ percent }: { percent: number }) {
  const circumference = ((2 * 22) / 7) * 120;
  return (
    <div className="flex items-center justify-center flex-col">
      <svg className="transform -rotate-90 size-48 flex items-center justify-center text-center">
        <circle
          cx="96"
          cy="96"
          r="50"
          stroke="currentColor"
          stroke-width="30"
          fill="transparent"
          className="text-gray-700"
        />

        <circle
          cx="96"
          cy="96"
          r="50"
          stroke="currentColor"
          stroke-width="30"
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={circumference - (percent / 100) * circumference}
          className="text-blue-500 transition-all"
        />
      </svg>
    </div>
  );
}
