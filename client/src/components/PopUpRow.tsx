import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { TiTick } from "react-icons/ti";

export default function PopUpRow({
  exercisesChoosed,
  setExerciseChoosed,
  text,
  url,
  exerciseId,
}: {
  setExerciseChoosed: any;
  exercisesChoosed: Set<number>;
  text: string;
  url: string;
  exerciseId: number;
}) {
  const [check, setCheck] = useState<boolean>(false);
  const handleCheck = () => {
    setCheck(!check);
  };

  useEffect(() => {
    if (check) {
      return setExerciseChoosed(
        (prev: Set<number>) => new Set([...prev, exerciseId])
      );
    }
    return setExerciseChoosed((prev: Set<number>) => {
      prev.delete(exerciseId);
      return new Set(prev);
    });
  }, [check]);

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

      {!check && (
        <div
          className="size-20 border-10 bg-black border-[#FA1059] rounded-full ml-auto mr-5"
          onClick={() => handleCheck()}
        ></div>
      )}
      {check && (
        <div
          className="size-20 bg-[#50B6FF] rounded-full ml-auto items-center flex justify-center mr-5"
          onClick={() => handleCheck()}
        >
          <TiTick size={64}></TiTick>
        </div>
      )}
    </div>
  );
}
