import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import SignIn from "../components/SignIn";
import SignUp from "@/components/SignUp";

export default function Auth() {
  const router = useRouter();
  let { auth } = router.query;
  const [authParam, setAuthParam] = useState(auth);
  const [signInPos, setSignInPos] = useState<string>();
  const [signUpPos, setSignUpPos] = useState<string>();

  const handleSignInPos = () => {
    setSignInPos("right");
    setTimeout(() => {
      setSignInPos("default");
    }, 900);
  };

  const handleSignUpPos = () => {
    setSignUpPos("right");
    setTimeout(() => {
      setSignUpPos("default");
    }, 900);
  };
  useEffect(() => {
    setAuthParam(auth);
  }, [auth]);
  return (
    <div className="relative flex h-screen items-center justify-center overflow-hidden">
      {authParam === "reg" ? (
        <div className="w-full flex items-center justify-center">
          <SignUp />
          <SignIn />
        </div>
      ) : (
        <div className="w-full flex items-center justify-center">
          <SignIn />
          <SignUp />
        </div>
      )}
    </div>
  );
}
