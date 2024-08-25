import { IoSearchOutline } from "react-icons/io5";
import { GoPerson } from "react-icons/go";
import { IoMdHeartEmpty } from "react-icons/io";
import { CiShoppingBasket } from "react-icons/ci";
import Link from "next/link";

export const Header = ({ companyLogo, shopUrl }: any) => {
  return (
    <div className="px-10 flex items-center py-2 border-b border-gray-300 justify-evenly">
      <div className="flex items-center gap-2">
        <img src="/logo.png" alt="logo" className="h-20" />
        <div className="h-20 w-0 border border-gray-300" />
        <img src={companyLogo} alt="logo" className="h-20" />
      </div>
      <div className="flex items-center gap-8">
        <Link href={shopUrl}>Shop</Link>
        <Link href="https://heathergreycollective.com/about">About</Link>
        <Link href="https://heathergreycollective.com/#email-form">
          Contact
        </Link>
        <Link href="/catalogue">Catalogue</Link>
        <Link href="/faq">Faq</Link>
      </div>
      <div className="flex items-center gap-4">
        <p>How to take measurements?</p>
        <p>How to use the website?</p>
      </div>
      <div className="flex items-center gap-4">
        <IoSearchOutline className="h-6 w-6 text-black" />
        <GoPerson className="h-6 w-6 text-black" />
        <IoMdHeartEmpty className="h-6 w-6 text-black" />
        <CiShoppingBasket className="h-[27px] w-[27px] text-black" />
      </div>
    </div>
  );
};
