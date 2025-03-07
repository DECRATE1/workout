import AuthField from "@/components/AuthField";
import { ChangeEvent, FormEvent, MouseEvent, useState } from "react";
import { useFormState } from "react-dom";

export default function Auth() {
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [otherPassword, setOtherPassword] = useState<string>("");
  const handleUsername = (e: ChangeEvent<HTMLInputElement>): void => {
    setUsername(e.target.value);
  };

  const handleEmail = (e: ChangeEvent<HTMLInputElement>): void => {
    setEmail(e.target.value);
  };

  const handlePassword = (e: ChangeEvent<HTMLInputElement>): void => {
    setPassword(e.target.value);
  };

  const handleOtherPassword = (e: ChangeEvent<HTMLInputElement>): void => {
    setOtherPassword(e.target.value);
  };

  const submitAuth = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password === otherPassword) {
      console.log("hello world");
      return;
    }
    console.log("password is not valid");
    return;
  };

  return (
    <div className="flex w-screen h-screen bg-black items-center justify-center">
      <div className="bg-[#FA1059] w-[706px] h-[943px] rounded-[51px] flex flex-col items-center scale-[0.8]">
        <span className="mt-40 mb-20 font-bold text-[60px] text-white select-none">
          РЕГИСТРАЦИЯ
        </span>
        <form
          className="gap-[42px] flex flex-col items-center group:text-black [&>input]:uppercase"
          onSubmit={(e) => submitAuth(e)}
        >
          <input
            placeholder="Email"
            onChange={(e: ChangeEvent<HTMLInputElement>) => handleEmail(e)}
            type="email"
            className="bg-black font-bold w-[571px] h-[78px] rounded-4xl text-white text-[28px] pl-2 outline-0 placeholder-white focus:text-transparent focus:[text-shadow:0px_0px_0px_white] focus:placeholder:opacity-0"
          ></input>
          <input
            placeholder="username"
            onChange={(e: ChangeEvent<HTMLInputElement>) => handleUsername(e)}
            type="text"
            className="bg-black font-bold w-[571px] h-[78px] rounded-4xl text-white text-[28px] pl-2 outline-0 placeholder-white focus:text-transparent focus:[text-shadow:0px_0px_0px_white] focus:placeholder:opacity-0"
          ></input>
          <input
            placeholder="Password"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setPassword(e.target.value)
            }
            type="password"
            className="bg-black w-[571px] font-bold h-[78px] rounded-4xl text-white text-[28px] pl-2 outline-0 placeholder-white focus:text-transparent focus:[text-shadow:0px_0px_0px_white] focus:placeholder:opacity-0"
          ></input>
          <input
            placeholder="Password Again"
            type="password"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setOtherPassword(e.target.value)
            }
            className="bg-black w-[571px] font-bold h-[78px] rounded-4xl text-white text-[28px] pl-2 outline-0 placeholder-white focus:text-transparent focus:[text-shadow:0px_0px_0px_white] focus:placeholder:opacity-0"
          ></input>

          <button
            type="submit"
            className="mt-10 p-1 bg-black rounded-4xl text-white text-[28px] px-8 font-bold py-2 cursor-pointer"
          >
            ПОТВЕРДИТЬ
          </button>
        </form>
      </div>
    </div>
  );
}
