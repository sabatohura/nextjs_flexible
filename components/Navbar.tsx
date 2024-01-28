import Image from "next/image";
import Link from "next/link";
const Navbar = () => {
  return (
    <nav className="flexBetween navbar">
      <div className="flex-1 flexStart gap-10">
        <Link href="/">
          <Image src="/logo.svg" alt="Flexible" width={115} height={43} />
        </Link>
      </div>
      <ul className="xl:flex hidden text-small gap-7"></ul>
    </nav>
  );
};

export default Navbar;
