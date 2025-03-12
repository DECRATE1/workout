import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";

export default function SignUp() {
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [otherPassword, setOtherPassword] = useState<string>("");
  const [width, setWidth] = useState<number>(0);
  const router = useRouter();
  const submitSignUp = async (formData: FormData) => {
    if (password === otherPassword) {
      const response = await fetch("http://localhost:3001/api/signUp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(Object.fromEntries(formData)),
      });
      if (response.ok) {
        if (response.redirected) {
          router.push(response.url);
          return;
        }
        return;
      }
    }
    return;
  };

  return (
    <>
      (
      <div
        className={`bg-[#FA1059] w-[706px] h-[943px] rounded-[51px] flex flex-col items-center scale-[0.8] transition-all duration-500 ease-out absolute`}
      >
        <div>You</div>
        <span className="mt-40 mb-20 font-bold text-[60px] text-white select-none">
          РЕГИСТРАЦИЯ
        </span>
        <form
          className="gap-[42px] flex flex-col items-center [&>input]:focus:normal-case"
          action={submitSignUp}
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
      )
    </>
  );
}
