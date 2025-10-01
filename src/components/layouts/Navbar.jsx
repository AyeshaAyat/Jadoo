import React from 'react'
import Container from '../Container'
import Image from '../Image'
import logo from '../../assets/Logo.png'
import Flex from '../flex'
import { Link } from 'react-router-dom'

import Home from '../pages/Home'
const Navbar = () => {
    return (
        <>    <div className="py-16 mt-10 px-20 ">
        
                <Container>
                    <Flex className="flex  justify-between">

                        <div className="">
                            <Image imgSrc={logo} imgAlt={logo} className='h-[33px] w-[114px]' />

                        </div>
                        <div className="flex gap-x-4">
                            <ul>
                                <Flex className="gap-x-20 px-5  flex justify-between">
                                    <Link to="desitination/">
                                        <li className='text-[22px] font-sans text-[#212832]'>Desitnations</li>
                                    </Link>
                                    <Link to="hotels/">
                                        <li className='text-[22px] font-sans text-[#212832]'>Hotels</li>
                                    </Link>
                                    <Link to="flights/">
                                        <li className='text-[22px] font-sans text-[#212832]'>Flights</li>
                                    </Link>
                                    <Link to="bookings/">
                                        <li className='text-[22px] font-sans text-[#212832]'>Bookings</li>
                                    </Link>

                                </Flex>
                            </ul>
                            <button className='h-[50px] w-[130px] pb-10 rounded-[10px] text-[22px] text-[#212832] cursor-pointer '>Login</button>
                            <button className='h-[50px] w-[130px] pt-2 mb-1 pb- rounded-[10px] text-[22px] text-[#212832] cursor-pointer border-1'>Sign up</button>
                            <button className='h-[50px] w-[130px] pb-10 rounded-[10px] text-[22px] text-[#212832] cursor-pointer '>EN</button>
                        </div>
                    </Flex>

                </Container>
            </div>
          
        </>
    )
}

export default Navbar