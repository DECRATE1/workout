import Link from "next/link";

export default function AuthButton({
  title,
  href,
}: {
  title: string;
  href: string;
}) {
  return (
    <Link
      href={"/" + href}
      className="w-fit px-5 py-1 h-[52px] bg-[#FA1059] items-center flex justify-center text-[24px] uppercase font-black text-white rounded-[32px] cursor-pointer"
    >
      {title}
    </Link>
  );
}
