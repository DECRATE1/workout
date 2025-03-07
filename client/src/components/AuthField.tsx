import { ChangeEvent } from "react";

export default function AuthField({
  handle,
  value,
  placeholder,
}: {
  handle: (e: ChangeEvent<HTMLInputElement>) => void;
  value: string;
  placeholder: string;
}) {
  return (
    <input
      type="text"
      className="bg-black w-[571px] h-[78px] rounded-4xl text-white text-[24px] pl-2 outline-0 select-all placeholder-amber-600"
      placeholder="sex"
      value={value}
      onChange={(e) => handle(e)}
    />
  );
}
