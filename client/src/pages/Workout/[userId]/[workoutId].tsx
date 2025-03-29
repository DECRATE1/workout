import ExercisePopUp from "@/components/PopUp";
import { useEffect, useState } from "react";

export async function getStaticPaths() {
  return {
    paths: [
      {
        params: {
          userId: "userId",
          workoutId: "workoutId",
        },
      },
    ],
    fallback: true,
  };
}

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:3001/api/exercise");
  const exercises = await res.json();
  return { props: { exercises } };
};

export default function WorkoutPage({
  exercises,
}: {
  exercises: {
    id: number;
    title: string;
    description: string;
    linkToVideo: string;
  }[];
}) {
  const [popUpIsClosed, setPopUpIsClosed] = useState<boolean>(true);
  const handlePopUp = () => {
    setPopUpIsClosed(!popUpIsClosed);
  };

  return (
    <div className="w-full flex items-center min-h-screen text-white font-black uppercase flex-col relative">
      <div className="text-[24px] mt-16 select-none w-[50%] flex justify-center h-[1024px]">
        <span>ЗДЕСЬ ПОКА НИЧЕГО НЕТУ</span>
      </div>

      <button
        className="bg-[#FA1059] size-20 bottom-50 rounded-full flex items-center text-center justify-center text-[35px] cursor-pointer mt-10"
        onClick={handlePopUp}
      >
        +
      </button>

      {!popUpIsClosed && (
        <ExercisePopUp
          handlePopUp={handlePopUp}
          exercises={exercises}
        ></ExercisePopUp>
      )}
    </div>
  );
}
