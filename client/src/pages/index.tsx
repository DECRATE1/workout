import AuthField from "@/components/AuthField";
import { ChangeEvent, useState } from "react";

export default function Auth() {
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const handleUsername = (e: ChangeEvent<HTMLInputElement>): void => {
    setUsername(e.target.value);
  };

  const handleEmail = (e: ChangeEvent<HTMLInputElement>): void => {
    setEmail(e.target.value);
  };

  const handlePassword = (e: ChangeEvent<HTMLInputElement>): void => {
    setPassword(e.target.value);
  };
  return (
    <div className="flex w-screen h-screen bg-black items-center justify-center">
      <div className="bg-[#FA1059] w-[706px] h-[943px] rounded-[51px] flex flex-col items-center scale-[0.85]">
        <span className="mt-40 mb-20 font-bold text-[60px] text-white">
          РЕГИСТРАЦИЯ
        </span>
        <div className="flex flex-col gap-[42px]">
          <AuthField handle={handleUsername} value={username}></AuthField>
          <AuthField handle={handleEmail} value={email}></AuthField>
          <AuthField handle={handlePassword} value={password}></AuthField>
        </div>
      </div>
    </div>
  );
}
