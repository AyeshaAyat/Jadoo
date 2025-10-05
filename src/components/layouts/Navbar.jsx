import React from "react";
import Container from "../Container";
import Image from "../Image";
import logo from "../../assets/Logo.png";
import Flex from "../flex";
import { Link } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa";

import banner from "../../assets/Hero Content.png";
import bannergirl from "../../assets/bannergirl.png";
import bannerTxt from "../../assets/Desc.png";

const Navbar = () => {
  return (
    <>
      <Container>
        <div className="bg-[url('/src/assets/Decore.png')]   bg-right-top bg-fit  bg-no-repeat ">
          {/* ---------------------hearderPart----------- */}
          <div className=" main pt-6   flex gap-40 ">
            <div className="pl-25 ">
              <Image imgSrc={logo} imgAlt={logo} />
            </div>
            <div className="flex mt-2">
              <ul className="gap-x-12 flex ">
                <li className="text-[14px] font-medium font-sans text-[#212832]">
                  Desitnations
                </li>

                <li className="text-[14px] font-medium font-sans text-[#212832]">
                  Hotels
                </li>

                <li className="text-[14px] font-medium font-sans text-[#212832]">
                  Flights
                </li>

                <li className="text-[14px] font-medium font-sans text-[#212832]">
                  Bookings
                </li>

                <li className="text-[14px] pl-2 font-medium font-sans text-[#212832]">
                  Login
                </li>

                <li className="  border-1 py-0.5  px-2.5 text-center font-medium rounded-[2px] text-[14px] text-[#212832] cursor-pointer ">
                  Sign up
                </li>
              </ul>

              <li className="ml-10 flex font-medium  text-[14px] text-[#212832] cursor-pointer ">
                <>
                  EN

                  <FaAngleDown className=" ml-0.5 size-3 mt-1.5 opacity-70" />
                </>
              </li>
            </div>

            {/* ---------------------hearderPart----------- */}
          </div>
          {/* ----------------------bannerPart-------------- */}
        <div className="BannerMain ">
          <div className="Girl flex relative">

              <Image imgSrc={banner}  className="ml-20  mt-3 h-[560px] w-[970px]"  imgAlt={banner} />
              {/* <Image imgSrc={bannerTxt}  className="ml-20 mt-12 h-[315px] w-[392px]"  imgAlt={bannerTxt} />
              <Image imgSrc={bannergirl} className="absolute left-105 h-[420px] w-[440px] " imgAlt={bannergirl} />
            <div className="text">

            </div> */}
          </div>
        </div>

          {/* ----------------------bannerPart-------------- */}
        </div>
      </Container>
    </>
  );
};

export default Navbar;
