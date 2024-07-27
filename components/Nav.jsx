import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const links = [
  { path: "/", name: "Home" },
  { path: "/lokasi", name: "Lokasi" },
  { path: "/kontakkami", name: "Contact Us" },
];

const Nav = ({ containerStyles, linkStyles, underlineStyles }) => {
  const path = usePathname();

  return (
    <nav className={containerStyles}>
      {links.map((link, index) => {
        return (
          <Link href={link.path} key={index} className={`capitalize text-lg ${linkStyles}`}>
            {link.path === path && <motion.span initial={{ y: "-100%" }} animate={{ y: 0 }} transition={{ type: "tween" }} layoutId="underline" className={`${underlineStyles}`} />}
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
