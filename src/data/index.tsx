import { MdPeople, MdConnectWithoutContact } from 'react-icons/md';
import { BiDonateHeart } from 'react-icons/bi';
import { SiActivitypub } from "react-icons/si";

export const navItems = [
    { href: "", label: "About Us", icon: MdPeople, size: 23, text: "About Us" },
    { href: "/pages/contact", label: "Contact", icon: MdConnectWithoutContact, size: 23, text: "Contact" },
    { href: "/pages/programs", label: "Programs", icon: SiActivitypub, size: 23, text: "Programs" },
    { href: "/pages/donate", label: "Donate", icon: BiDonateHeart, size: 23, text: "Donate" },
]