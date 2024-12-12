import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="border-t flex-center wrapper flex flex-between flex-col sm:flex-row gap-4 p-5 text-center">
        <Link href={"/"}>
          <Image
            src="/assets/images/logo.svg"
            alt="logo"
            width={128}
            height={38}
          />
        </Link>

        <p>{new Date().getFullYear()} EventVertex. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
