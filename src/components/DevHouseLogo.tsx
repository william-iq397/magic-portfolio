import Link from "next/link";
import DevHouse from "../../public/images/devhouse-logo.png";
import Image from "next/image";

export default function DevHouseLogo() {
  return (
    <Link href="/">
      <Image src={DevHouse} alt="DevHouse Logo" width={160} height={30} style={{ filter: "invert(1)" }} />
    </Link>
  )
}
