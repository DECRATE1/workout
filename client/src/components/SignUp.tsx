import { usePathname } from "next/navigation";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";

export default function SignUp({
  onTop,
  buttonCD,
  signUpPos,
  handleSignUpPos,
}: {
  onTop: string;
  buttonCD: boolean;
  signUpPos: string;
  handleSignUpPos: () => void;
}) {
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [otherPassword, setOtherPassword] = useState<string>("");
  const router = useRouter();
  const path = usePathname();
  const submitSignUp = async (formData: FormData) => {
    if (password === otherPassword) {
      const response = await fetch("http://localhost:3001/api/signUp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(Object.fromEntries(formData)),
      });
      if (response) {
        console.log(path);
        handleSignUpPos();
        router.push("http://localhost:3001/Auth?auth=in");
        return;
      }
    }
    return;
  };
  return (
    <div
      className={`bg-[#FA1059] w-[706px] h-[943px] rounded-[51px] flex flex-col items-center scale-[0.8] transition-all duration-300 ease-in-out absolute`}
      style={{
        translate: signUpPos === "right" ? "600px" : "0px",
        zIndex: onTop === "in" ? 10 : 20,
      }}
    >
      <button
        className="text-white text-2xl font-bold absolute mt-5 uppercase cursor-pointer select-none"
        style={{ pointerEvents: buttonCD ? "none" : "auto" }}
        onClick={handleSignUpPos}
      >
        Вход
      </button>
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
          placeholder="CONFIRM PASSWORD"
          type="password"
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setOtherPassword(e.target.value)
          }
          className="bg-black w-[571px] font-bold h-[78px] rounded-4xl text-white text-[28px] pl-2 outline-0 placeholder-white focus:text-transparent focus:[text-shadow:0px_0px_0px_white] focus:placeholder:opacity-0"
        ></input>
        <button
          type="submit"
          className="mt-auto mb-10 p-1 bg-black rounded-4xl text-white text-[28px] px-8 font-bold py-2 cursor-pointer"
        >
          ПОТВЕРДИТЬ
        </button>
      </form>
    </div>
  );
}
