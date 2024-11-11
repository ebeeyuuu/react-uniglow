import React from "react";
import {
  FaRegCopyright,
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import { FaPuzzlePiece, FaXTwitter } from "react-icons/fa6";

const socialIcons = [
  { icon: <FaFacebook size={20} className="opacity-50" />, key: "facebook" },
  { icon: <FaInstagram size={20} className="opacity-50" />, key: "instagram" },
  { icon: <FaXTwitter size={20} className="opacity-50" />, key: "twitter" },
  { icon: <FaGithub size={20} className="opacity-50" />, key: "github" },
  { icon: <FaYoutube size={20} className="opacity-50" />, key: "youtube" },
];

const footerLinks = [
  {
    title: "Links",
    links: ["About Us", "Our Mission", "How It Works", "Careers"],
  },
  {
    title: "Resources",
    links: [
      "University Rankings",
      "Application Guides",
      "Scholarship Information",
      "Blogs",
    ],
  },
  {
    title: "Legal & Support",
    links: ["Terms of Service", "Privacy Policy", "Contact Us", "FAQ"],
  },
  {
    title: "For Students",
    links: ["Sign Up", "Log In", "My Profile", "Saved Universities"],
  },
];

const Footer: React.FC = () => {
  return (
    <footer className="mt-[300px] w-full py-[80px] bg-[#091235]">
      <div className="flex flex-col items-center w-[80%] mx-auto gap-y-[50px] max-[1000px]:gap-y-[50px]">
        <div className="flex flex-col gap-y-[20px] w-full">
          <FaPuzzlePiece size={25} />
          <div className="text-lg font-medium">
            Helping students worldwide discover their dreams.
          </div>
          <div className="flex gap-x-[15px]">
            {socialIcons.map(({ icon, key }) => (
              <div key={key}>{icon}</div>
            ))}
          </div>
        </div>
        <div className="w-full grid grid-cols-4 gap-[30px] max-[900px]:grid-cols-2 max-[400px]:flex-col">
          {footerLinks.map(({ title, links }) => (
            <div key={title} className="flex flex-col gap-y-[15px]">
              <div className="font-bold text-sm">{title}</div>
              {links.map((link) => (
                <div key={link} className="text-xs">
                  {link}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="w-[80%] mx-auto flex justify-center items-center border-2 border-white opacity-30 max-h-[5px] mt-[50px] rounded-full" />
      <div className="flex justify-start items-center gap-x-[10px] font-light opacity-60 w-[80%] mx-auto mt-[30px]">
        <FaRegCopyright />
        2024 Uniglow, Inc. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
