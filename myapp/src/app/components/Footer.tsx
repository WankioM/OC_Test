import { HiMail } from 'react-icons/hi'; 
import { FaInstagram, FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa'; 
import Image from 'next/image'; 

export default function Footer() {
  return (
    <footer className="relative bg-primary py-8 ">
      <div className="relative bg-white rounded-3xl mx-auto max-w-[85%] p-8 md:pt-16 md:px-16 sm:w-[90%] md:w-[1315px] sm:h-[521px] md:h-[579px]">
        {/* Section 1: 5 sections */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 text-center md:text-left'>
            {/* Section 1: Say Hello */}
        <div className="mb-4">
        <h2 className="text-sm font-[600] leading-[30px]  text-[#1D2939] font-[DM Sans]">Say Hello</h2>
        <p className="text-sm font-[400] leading-[30px]  text-[#475467] font-[DM Sans]">opencoregroup@gmail.com</p>
        </div>

        {/* Section 2: Social Media Icons */}
        <div className="flex space-x-12 md:space-x-4 mb-4 justify-center md:justify-start">
            <div className="bg-[#F2F4F7] w-10 h-10 flex items-center justify-center ">
                <a href="#" className="text-gray-600 hover:text-gray-800">
                <FaInstagram className="w-6 h-6" />
                </a>
            </div>
            <div className="bg-[#F2F4F7] w-10 h-10 flex items-center justify-center">
                <a href="#" className="text-gray-600 hover:text-gray-800">
                <FaFacebookF className="w-6 h-6" />
                </a>
            </div>
            <div className="bg-[#F2F4F7] w-10 h-10 flex items-center justify-center ">
                <a href="#" className="text-gray-600 hover:text-gray-800">
                <FaTwitter className="w-6 h-6" />
                </a>
            </div>
            <div className="bg-[#F2F4F7] w-10 h-10 flex items-center justify-center ">
                <a href="#" className="text-gray-600 hover:text-gray-800">
                <FaLinkedinIn className="w-6 h-6" />
                </a>
            </div>
        </div>

        {/* Section 3: Links */}
        <div className="grid grid-cols-2 gap-4 mb-4 text-left">
          <div className="space-y-2">
            <div>
            <a href="#" className="text-[#475467] text-sm font-normal hover:underline">Home</a>
            </div>
            <div>
                <a href="#" className="text-[#475467] text-sm font-normal hover:underline">About Us</a>
            </div>
            <a href="#" className="text-[#475467] text-sm font-normal hover:underline">Work</a>
          </div>
          <div className="space-y-2">
            <a href="#" className="text-[#475467] text-sm font-normal hover:underline">Services</a>
            <div>
                <a href="#" className="text-[#475467] text-sm font-normal hover:underline">Contact Us</a>
            </div>
                </div>
        </div>


        {/* Section 4: Address */}
        <div className=" text-center md:text-left">
          <p className="text-sm font-[400] leading-[30px] text-left font-[DM Sans]">Toronto, ON, Canada</p>
        </div>

        {/* Section 5: Footer Text */}
        <div className=" text-center md:text-left">
          <p className="text-sm  font-[400] leading-[30px] text-left font-[DM Sans]">Open Core. All Rights Reserved.</p>
        </div>

        </div>

        
      </div>

      {/* Section 6: OpenCore Logo */}
      <div className="absolute bottom-4 sm:bottom-0 right-0 left-0 flex justify-center">
          <Image
            src="/logo.svg" 
            alt="OpenCore Logo"
            width={321}
            height={57} 
            className="object-contain w-[341px] sm:w-[877px] h-[57] sm:h-[146px]"
          />
        </div>
    </footer>
  );
}
