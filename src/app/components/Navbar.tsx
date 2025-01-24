"use client";

import Image from "next/image";
import Link from "next/link";
import { client } from "../client";
import { useActiveWallet, ConnectButton } from "thirdweb/react";
import { inAppWallet } from "thirdweb/wallets";

const wallets = [
  inAppWallet({
    auth: {
      options: ["email"],
    },
  }),
];

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="flex items-center">
                <Image
                  src="/img/thirdweb-wordmark-dark.png"
                  alt="Logo"
                  width={150}
                  height={32}
                  className="h-8 w-auto"
                />
                <span className="ml-2 text-xl text-black font-bold text-foreground font-medieval">
                  Newsletter Page
                </span>
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <a
                href="/profile"
                className="border-indigo-500 items-center p-2 rounded-md text-sm font-medium text-indigo-600 hover:bg-indigo-50"
              >
                Profile
              </a>
            </div>
          </div>
          <div className="flex items-center">
            <ConnectButton
              client={client}
              wallets={wallets}
              connectModal={{ size: "compact" }}
            />
          </div>
        </div>
      </div>
    </nav>
  );
}
