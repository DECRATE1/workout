import CircleProgress from "@/components/circle";
import Image from "next/image";

export default function Auth() {
  const percent = 100;
  const weak: any = {
    ПН: 20,
    ВТ: 0,
    СР: 0,
    ЧТ: 5,
    ПТ: 100,
    СБ: 99,
    ВС: 0,
  };
  console.log();
  return (
    <div className="relative flex w-screen h-screen bg-black items-center justify-center overflow-hidden">
      <div className="w-full text-white flex items-center text-center justify-center">
        {Object.keys(weak).map((e: any) => {
          return (
            <div className="flex items-center justify-center text-center flex-col">
              <span>{e}</span>
              <CircleProgress percent={weak[e]} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
