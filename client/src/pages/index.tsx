import { ADDRGETNETWORKPARAMS } from "dns";
import { METHODS } from "http";
import { ChangeEvent, FormEvent, FormEventHandler, useState } from "react";

export default function Auth() {
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [otherPassword, setOtherPassword] = useState<string>("");

  const submitAuth = async (formData: FormData) => {
    if (password === otherPassword) {
      const response = await fetch("http://localhost:3002/api/auth", {
        method: "POST",
        body: JSON.stringify(Object.fromEntries(formData)),
      });
      if (response.ok) {
        return;
      }
    }
    return;
  };

  return (
    <div className="flex w-screen h-screen bg-black items-center justify-center">
      <div className="bg-[#FA1059] w-[706px] h-[943px] rounded-[51px] flex flex-col items-center scale-[0.8]">
        <span className="mt-40 mb-20 font-bold text-[60px] text-white select-none">
          РЕГИСТРАЦИЯ
        </span>
        <form
          className="gap-[42px] flex flex-col items-center [&>input]:focus:normal-case"
          action={submitAuth}
        >
          <input
            placeholder="EMAIL"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setEmail(e.target.value)
            }
            type="email"
            name="email"
            className="bg-black font-bold w-[571px] h-[78px] rounded-4xl text-white text-[28px] pl-2 outline-0 placeholder-white focus:text-transparent focus:[text-shadow:0px_0px_0px_white] focus:placeholder:opacity-0"
          ></input>
          <input
            placeholder="USERNAME"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setUsername(e.target.value)
            }
            type="text"
            name="name"
            className="bg-black font-bold w-[571px] h-[78px] rounded-4xl text-white text-[28px] pl-2 outline-0 placeholder-white focus:text-transparent focus:[text-shadow:0px_0px_0px_white] focus:placeholder:opacity-0"
          ></input>
          <input
            placeholder="PASSWORD"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setPassword(e.target.value)
            }
            type="password"
            name="password"
            className="bg-black w-[571px] font-bold h-[78px] rounded-4xl text-white text-[28px] pl-2 outline-0 placeholder-white focus:text-transparent focus:[text-shadow:0px_0px_0px_white] focus:placeholder:opacity-0"
          ></input>
          <input
            placeholder="PASSWORD AGAIN"
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
