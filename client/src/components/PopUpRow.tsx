import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { TiTick } from "react-icons/ti";

export default function PopUpRow({
  text,
  url,
  exerciseId,
}: {
  text: string;
  url: string;
  exerciseId: number;
}) {
  const [check, setCheck] = useState<boolean>(false);
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
          className="size-20 border-10 bg-black border-[#FA1059] rounded-full ml-auto"
          onClick={() => setCheck(!check)}
        ></div>
      )}
      {check && (
        <div
          className="size-20 bg-[#50B6FF] rounded-full ml-auto items-center flex justify-center"
          onClick={() => setCheck(!check)}
        >
          <TiTick size={64}></TiTick>
        </div>
      )}
    </div>
  );
}
