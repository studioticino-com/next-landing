import React from "react";
import LogoVPN from "../../public/assets/Logo.svg";
import Image from "next/image";
import Facebook from "../../public/assets/Icon/facebook.svg";
import Twitter from "../../public/assets/Icon/twitter.svg";
import Instagram from "../../public/assets/Icon/instagram.svg";
const Footer = () => {
  return (
    <div className="bg-white-300 pt-44 pb-24">
      <div className="max-w-screen-xl w-full mx-auto px-6 sm:px-8 lg:px-16 grid grid-rows-6 sm:grid-rows-1 grid-flow-row sm:grid-flow-col grid-cols-3 sm:grid-cols-12 gap-4">
        <div className="row-span-2 sm:col-span-4 col-start-1 col-end-4 sm:col-end-5 flex flex-col items-start ">
          <Image
            src="/assets/studioticino.png"
            alt="Aiuto Scolastico Ticino"
            quality={100}
            width={128}
            height={32}
            layout="responsive"
          />
          <p className="mb-4">
            <strong className="font-medium">studioticino.com</strong> Offriamo servizi di aiuto scolastico, tutoring online e lezioni private per studenti delle scuole superiori nel Ticino.
          </p>
          <div className="flex w-full mt-2 mb-8 -mx-2">
            <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
              <Facebook className="h-6 w-6" />
            </div>
            <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
              <Twitter className="h-6 w-6" />
            </div>
            <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
              <Instagram className="h-6 w-6" />
            </div>
          </div>
          <p className="text-gray-400">©{new Date().getFullYear()} - studioticino.com</p>
        </div>
        <div className=" row-span-2 sm:col-span-2 sm:col-start-7 sm:col-end-9 flex flex-col">
          <p className="text-black-600 mb-4 font-medium text-lg">Servizi</p>
          <ul className="text-black-500 ">
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Recupero Matematica{" "}
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Recupero Informatica{" "}
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Recupero Elettronica{" "}
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Recupero Fisica{" "}
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Recupero Chimica{" "}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
