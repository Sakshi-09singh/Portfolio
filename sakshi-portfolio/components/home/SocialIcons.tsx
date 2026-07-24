"use client";

import Link from "next/link";
import {  Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/Sakshi-09singh",
    icon: FaGithub,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/sakshi-09singh/",
    icon: FaLinkedin,
  },
  {
    name: "LeetCode",
    href: "https://leetcode.com/u/Sakshi_09singh/",
    icon: SiLeetcode,
  },
  {
    name: "Email",
    href: "mailto:sakshisingh9906@email.com",
    icon: Mail,
  },
];

export default function SocialIcons() {
  return (
    <div className="flex items-center justify-center gap-5 lg:justify-start">
      {socialLinks.map((item) => {
        const Icon = item.icon;

        return (
          <Link
            key={item.name}
            href={item.href}
            target="_blank"
            aria-label={item.name}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-cyan-400 text-cyan-400 transition-all duration-300 hover:-translate-y-1 hover:scale-110 hover:bg-cyan-400 hover:text-[#070B17] hover:shadow-[0_0_25px_rgba(34,211,238,0.6)]"
          >
            <Icon size={22} />
          </Link>
        );
      })}
    </div>
  );
}