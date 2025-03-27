export default function LogOutButton({
  handleLogOut,
}: {
  handleLogOut: () => void;
}) {
  return (
    <div
      className="w-fit px-5 py-1 h-[52px] bg-[#FA1059] items-center flex justify-center text-[24px] uppercase font-black text-white rounded-[32px] cursor-pointer ml-auto"
      onClick={handleLogOut}
    >
      ВЫЙТИ
    </div>
  );
}
