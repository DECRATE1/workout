import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { TiTick } from "react-icons/ti";
import { FaPlus } from "react-icons/fa";
import { usePathname } from "next/navigation";
export default function PopUpRow({
  text,
  url,
  exerciseId,
}: {
  text: string;
  url: string;
  exerciseId: number;
}) {
  const path = usePathname();
  const workoutId = +path.split("/")[3];
  const createWorkoutExercise = async () => {
    const response = await fetch(
      `http://localhost:3001/api/workoutExercise/createWorkoutExercise`,
      {
        method: "POST",
        body: JSON.stringify({ workoutId, exerciseId }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  };
  return (
    <div className="w-full h-[250px] flex items-center px-5 gap-5">
      <Link className="flex items-center gap-5 text-[24px]" href={"/"}>
        <Image
          src={url}
          alt="image"
          width={250}
          height={180}
          className="rounded-4xl"
        ></Image>
        <span>{text}</span>
      </Link>
      <div className="ml-auto">
        <FaPlus
          onClick={createWorkoutExercise}
          size={48}
          className="rotate-0 transition-all cursor-pointer"
        ></FaPlus>
      </div>
    </div>
  );
}
