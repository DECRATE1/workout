import AuthButton from "@/components/AuthButton";
import ProgressBar from "@/components/Circle";
import WorkoutBar from "@/components/WorkoutBar";
import { useEffect, useState } from "react";
import jwt from "jsonwebtoken";
export default function Auth() {
  const weak: { [index: string]: number } = {
    ПН: 50,
    ВТ: 0,
    СР: 0,
    ЧТ: 5,
    ПТ: 100,
    СБ: 99,
    ВС: 0,
  };
  const [userVerified, setUserVerified] = useState<boolean>();

  useEffect(() => {
    const getUserWorkout = async () => {
      const token = localStorage.getItem("token");
      if (token) {
        const userId = jwt.decode(token)?.sub;
        if (userId) {
          setUserVerified(true);
          await fetch("");
          return;
        }
        setUserVerified(false);
        return;
      }
      return;
    };
    getUserWorkout();
  }, []);
  return (
    <div className="relative flex w-full h-full overflow-hidden p-4 flex-col">
      {userVerified === undefined ? (
        <div className="text-red-600"></div>
      ) : userVerified === false ? (
        <div className="w-full bg-inherit flex gap-5 justify-end">
          <AuthButton href="Auth?auth=in" title="Вход"></AuthButton>
          <AuthButton href="Auth?auth=reg" title="Регистрация"></AuthButton>
        </div>
      ) : (
        <div className="text-red-600">Classic</div>
      )}
      <div className="w-full text-white flex items-center justify-center mt-14">
        {Object.keys(weak).map((e: string) => {
          return (
            <div className="flex items-center justify-center text-center flex-col h-fit font-bold -space-x-0.5">
              <span>{e}</span>
              <ProgressBar
                percent={weak[e]}
                w={120}
                h={120}
                width={16}
              ></ProgressBar>
            </div>
          );
        })}
      </div>

      <div className="flex items-center justify-center mt-5">
        <ProgressBar percent={50} w={500} h={500} width={25}></ProgressBar>
      </div>

      <div className="w-full flex flex-col items-center justify-center mt-24">
        <WorkoutBar></WorkoutBar>
      </div>
    </div>
  );
}
