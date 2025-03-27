export default function Line({
  minusOrPlus,
  catheterOne,
  catheterTwo,
}: {
  minusOrPlus: boolean;
  catheterOne: number;
  catheterTwo: number;
}) {
  const hypotenuse = Math.sqrt(catheterOne ** 2 + catheterTwo ** 2) * (380 / 7);
  const angle = Math.atan(catheterOne / catheterTwo) * (180 / Math.PI);

  return (
    <div
      className="bg-white h-[2.5px] font-black absolute right-[50%] top-[50%] rounded-full"
      style={{
        left: minusOrPlus ? "30%" : "50%",
        width: `${hypotenuse}px`,
        transform: `rotate(${minusOrPlus ? "-" : "+"}${angle}deg)`,
        transformOrigin: "top left",
      }}
    ></div>
  );
}
