import React from "react";
import Container from "../Container";
import Image from "../Image";
import logo from "../../assets/Logo.png";
import Flex from "../flex";
import { Link } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa";

import banner from "../../assets/Hero Content.png";

const Navbar = () => {
  return (
    <>
      <Container>
        <div className="bg-[url('/src/assets/Decore.png')] m-auto  bg-right-top bg-contain  bg-no-repeat ">
          {/* ---------------------hearderPart----------- */}
          <div className=" main py-7 flex gap-50 ">
            <div className="pl-12">
              <Image imgSrc={logo} imgAlt={logo} />
            </div>
            <div className="flex mt-2">
              <ul className="gap-x-10 flex ">
                <li className="text-[14px] font-[450] font-sans text-[#212832]">
                  Desitnations
                </li>

                <li className="text-[14px] font-[450] font-sans text-[#212832]">
                  Hotels
                </li>

                <li className="text-[14px] font-[450] font-sans text-[#212832]">
                  Flights
                </li>

                <li className="text-[14px] font-[450] font-sans text-[#212832]">
                  Bookings
                </li>

                <li className="text-[14px] font-[450] font-sans text-[#212832]">
                  Login
                </li>

                <li className="  border-1 py-0.5  px-2.5 text-center font-[500] rounded-[2px] text-[12px] text-[#212832] cursor-pointer ">
                  Sign up
                </li>
              </ul>

              <li className="ml-5 flex font-[450]  text-[14px] text-[#212832] cursor-pointer ">
                <>
                  EN

                  <FaAngleDown className=" ml-0.5 size-3 mt-1.5 opacity-70" />
                </>
              </li>
            </div>

            {/* ---------------------hearderPart----------- */}
          </div>
          {/* ----------------------bannerPart-------------- */}
          <div className="m-auto pl-6 flex">
            <Image
              imgSrc={banner}
              imgAlt={banner}
              className="h-[650px]  bg-cover bg-center bg-no-repeat"
            />
          </div>

          {/* ----------------------bannerPart-------------- */}
        </div>
      </Container>
    </>
  );
};

export default Navbar;
