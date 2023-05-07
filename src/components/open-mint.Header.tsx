import Image from "next/image";
import { Dispatch } from "react";
import ConnectWalletButton from "./ConnectWalletButton";

const Header: React.FC<{
  setHasConnected: Dispatch<boolean>
}> = ({ setHasConnected }) => {
  return (
    <nav
      className="border-b-2 ml-2 mr-2 flex flex-row justify-between content-baseline items-center"
      style={{ borderColor: "#43676e", borderBottomWidth: "medium" }}
    >
      <Image
        src="/logo.png"
        alt=""
        width="200"
        height="80"
        className="m-4"
      />
      <ConnectWalletButton setHasConnected={setHasConnected} />
    </nav>
  );
}

export default Header;