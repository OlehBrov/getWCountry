import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";

const NavBar = () => {
  return (
    <header className="w-full p-2 bg-slate-500">
      <MaxWidthWrapper>
        <nav className="flex justify-between items-center">
          <Link href="/" className="flex text-6xl text-slate-950 w-36">
            <img
              className="h-full w-full object-cover"
              src="/img/world.png"
              alt=""
            />
          </Link>
          <p className="text-4xl">Find your favorite country</p>
        </nav>
      </MaxWidthWrapper>
    </header>
  );
};

export default NavBar;
