import { CiLocationOn } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FiYoutube } from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa6";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
function Footer() {
  return (
    <div className="w-full min-h-min bg-black flex flex-col justify-center items-center">
      <div className="md:w-10/12 w-11/12 lg:w-3/5 py-5 flex flex-col justify-center">
        <div className="flex flex-col md:flex-row justify-between items-center py-10 gap-10">
          <div>
            <img
              src="/logo-white-large.svg"
              alt="logo"
              className="text-white md:w-2/3 lg:w-full"
            />
          </div>
          <div>
            <button className="text-white font-bold text-sm lg:text-base border-2 border-white flex gap-3 items-center py-1 lg:py-2 px-10 lg:px-16 rounded-full">
              <CiLocationOn className="font-bold text-2xl" />
              <p className="text-sm text-nowrap">India | English</p>
            </button>
          </div>
        </div>
        <div className="bg-white w-full h-[2px] my-2" />
        <div className="hidden md:flex items-start justify-around gap-6 text-white">
          <div className="flex flex-1 flex-col font-bold  gap-3 py-4">
            <p className="uppercase text-gray-300 text-xs">About Us</p>
            <p>Our Company</p>
            <p>Media Center</p>
            <p>History</p>
            <p>Careers</p>
            <p>Leadership</p>
          </div>
          <div className="flex flex-1 flex-col font-bold  gap-3 py-4">
            <p className="text-gray-300 text-xs">NEED HELP?</p>
            <p>FAQ</p>
            <p>Sitemap</p>
            <p>Contact Us</p>
          </div>
          <div className="flex flex-1 flex-col gap-3 font-bold  py-12">
            <p>Terms of Use</p>
            <p>Privacy Policy</p>
            <p>Financial & Policy Documents</p>
          </div>
          <div className="hidden flex-1 lg:flex gap-5 py-4">
            <FaXTwitter className="text-3xl" />
            <FaInstagram className="text-3xl" />
            <FiYoutube className="text-3xl" />
            <FaFacebookF className="text-3xl" />
          </div>
        </div>
        <div className="flex flex-col text-white text-2xl justify-center items-center gap-5 md:hidden">
          <Accordion className="w-9/12" type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>About Us</AccordionTrigger>
              <AccordionContent>Our Company</AccordionContent>
              <AccordionContent>Media Center</AccordionContent>
              <AccordionContent>History</AccordionContent>
              <AccordionContent>Careers</AccordionContent>
              <AccordionContent>Leadership</AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion className="w-9/12" type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>Need Help</AccordionTrigger>
              <AccordionContent>FAQ</AccordionContent>
              <AccordionContent>Sitemap</AccordionContent>
              <AccordionContent>Contact Us</AccordionContent>
            </AccordionItem>
          </Accordion>
          <div className="w-9/12 text-lg">
            <p className="mb-2">Terms of Use</p>
            <p className="mb-2">Privacy Policy</p>
            <p className="mb-2">Financial & Policy Document</p>
          </div>
        </div>
        <div className="bg-white w-full h-[2px] my-5" />
        <div>
          <div className="lg:hidden flex text-white gap-5 py-4">
            <FaXTwitter className="text-xl" />
            <FaInstagram className="text-xl" />
            <FiYoutube className="text-xl" />
            <FaFacebookF className="text-xl" />
          </div>
          <p className="text-start lg:text-right text-white font-medium pb-20 text-sm">
            © 2024 The Coca‑Cola Company. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
