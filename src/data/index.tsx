import { MdPeople, MdConnectWithoutContact } from 'react-icons/md';
import { BiDonateHeart } from 'react-icons/bi';
import { SiActivitypub } from "react-icons/si";

export const navItems = [
    { href: "/pages/about", label: "About", icon: MdPeople, size: 23, text: "About" },
    { href: "/pages/contact", label: "Contact", icon: MdConnectWithoutContact, size: 23, text: "Contact" },
    { href: "/pages/programs", label: "Programs", icon: SiActivitypub, size: 23, text: "Programs" },
    { href: "/pages/donate", label: "Donate", icon: BiDonateHeart, size: 23, text: "Donate" },
]