import ExercisePopUp from "@/components/PopUp";
import PopUpRow from "@/components/PopUpRow";
import { GetStaticProps, GetStaticPropsContext, NextPageContext } from "next";
import Image from "next/image";
import { useParams, usePathname, useSearchParams } from "next/navigation";
import { Router, useRouter } from "next/router";
import { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";

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

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext
) => {
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
  const [exercisesWorkout, setExercises] = useState<any>([]);
  const handlePopUp = () => {
    setPopUpIsClosed(!popUpIsClosed);
  };
  const params = useParams();
  useEffect(() => {
    if (params.userId) {
      const { userId } = params;
      const getExercises = async () => {
        const response = await fetch(
          `http://localhost:3001/api/workoutExercise/getWorkoutExerciseByUserId/${userId}`,
          {
            method: "GET",
          }
        );
        if (response) {
          const body = await response.json();
          setExercises(body);
        }
      };
      getExercises();
    }
    return;
  }, [params, popUpIsClosed]);

  return (
    <div className="w-full flex items-center min-h-screen text-white font-black uppercase flex-col relative overflow-scroll">
      <div className="w-[50%] min-h-screen">
        {false && (
          <span className="w-full flex items-center justify-center text-2xl mt-5">
            Здесь пока ничего нету
          </span>
        )}
        {exercisesWorkout.map((exercise: any) => {
          return (
            <div className="gap-5 h-48 w-full mt-5 flex items-center pl-3">
              <Image
                src={"/push.jpg"}
                alt="push"
                width={250}
                height={180}
                className="rounded-2xl"
              ></Image>

              <span>{exercise.exercises.title}</span>

              <MdDelete
                className="ml-auto mr-5 cursor-pointer"
                size={50}
              ></MdDelete>
            </div>
          );
        })}
      </div>

      <button
        className="bg-[#FA1059] size-20 bottom-50 rounded-full flex items-center text-center justify-center text-[35px] cursor-pointer mt-10 absolute"
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
