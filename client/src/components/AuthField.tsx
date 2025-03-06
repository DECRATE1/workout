import { ChangeEvent } from "react";

export default function AuthField({
  handle,
  value,
}: {
  handle: (e: ChangeEvent<HTMLInputElement>) => void;
  value: string;
}) {
  return (
    <input
      type="text"
      className="bg-black w-[571px] h-[78px] rounded-4xl text-white text-[24px] pl-2 outline-0"
      value={value}
      onChange={(e) => handle(e)}
    />
  );
}
