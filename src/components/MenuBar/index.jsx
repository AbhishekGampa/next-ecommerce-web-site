import Link from "next/link";
import logo from "../../app/(parent)/Images/download.png";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

function MenuBar() {
  return (
    <div className="dark">
      <div className="flex flex-row m-6 gap-3 items-center ">
        <span>dsf</span>
        <Link href={"/"}>
          <Image
            src={logo}
            alt="Logo"
            width={40}
            height={10}
            style={{ borderRadius: "15%", border: "0 solid #e5e7eb" }}
          />
        </Link>
        <Link href={"/"}>
          <span className="font-medium text-[15px] font-sans text-white ">
            ACME STORE
          </span>
        </Link>
        <div className="flex items-center justify-end md:ml-auto pr-4">
          <Link href={"/Cart"}>
            <button
              className="border-[2px] rounded-[10px] border-[#404040] h-10 w-10 flex items-center justify-center"
              // onClick={handleClick}
            >
              <FontAwesomeIcon
                icon={faShoppingCart}
                className="h-4 text-white flex justify-end"
              />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MenuBar;
