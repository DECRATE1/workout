import ExercisePopUp from "@/components/PopUp";

export default function WorkoutPage() {
  return (
    <div className="w-full flex items-center min-h-screen text-white font-black uppercase flex-col relative">
      <div className="text-[24px] mt-16 select-none w-[50%] flex justify-center h-[1024px]">
        <span>ЗДЕСЬ ПОКА НИЧЕГО НЕТУ</span>
      </div>

      <button className="bg-[#FA1059] size-20 bottom-50 rounded-full flex items-center text-center justify-center text-[35px] cursor-pointer mt-10">
        +
      </button>

      <ExercisePopUp></ExercisePopUp>
    </div>
  );
}
