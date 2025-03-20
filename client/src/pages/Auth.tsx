import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import SignIn from "../components/SignIn";
import SignUp from "@/components/SignUp";

export default function Auth() {
  const router = useRouter();
  let { auth } = router.query;
  const [authParam, setAuthParam] = useState(auth);
  const [signInPos, setSignInPos] = useState<string>("default");
  const [signUpPos, setSignUpPos] = useState<string>("default");
  const [onTop, setOnTop] = useState<string>(auth as string);
  const [buttonCD, setButtonCD] = useState<boolean>(false);

  const handleSignInPos = () => {
    setButtonCD(true);
    setTimeout(() => (onTop === "reg" ? setOnTop("in") : setOnTop("reg")), 600);
    setSignInPos("right");
    setTimeout(() => {
      setButtonCD(false);
      setSignInPos("default");
    }, 900);
  };

  const handleSignUpPos = () => {
    setButtonCD(true);
    setTimeout(() => (onTop === "reg" ? setOnTop("in") : setOnTop("reg")), 600);
    setSignUpPos("right");
    setTimeout(() => {
      setButtonCD(false);
      setSignUpPos("default");
    }, 900);
  };

  useEffect(() => {
    setAuthParam(auth);
    setOnTop(auth as string);
  }, [auth]);
  return (
    <div className="relative flex h-screen items-center justify-center overflow-hidden">
      {authParam === "reg" ? (
        <div className="w-full flex items-center justify-center">
          <SignIn
            buttonCD={buttonCD}
            onTop={onTop}
            signInPos={signInPos as string}
            handleSignInPos={handleSignInPos}
          />
          <SignUp
            buttonCD={buttonCD}
            onTop={onTop}
            signUpPos={signUpPos as string}
            handleSignUpPos={handleSignUpPos}
          />
        </div>
      ) : (
        <div className="w-full flex items-center justify-center">
          <SignUp
            buttonCD={buttonCD}
            onTop={onTop}
            signUpPos={signUpPos as string}
            handleSignUpPos={handleSignUpPos}
          />
          <SignIn
            buttonCD={buttonCD}
            onTop={onTop}
            signInPos={signInPos as string}
            handleSignInPos={handleSignInPos}
          />
        </div>
      )}
    </div>
  );
}
