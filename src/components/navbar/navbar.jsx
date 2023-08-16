"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "./navbar.module.css";

const links = [
	{
		id: 1,
		title: "Home",
		url: "#",
	},
	{
		id: 2,
		title: "Servicios",
		url: "#servicios",
	},
	{
		id: 3,
		title: "Contacto",
		url: "#contacto",
	},
];

const Navbar = () => {
	return (
		<nav className="flex justify-between items-center py-2 px-8 max-h-28">
			<Link href="#" className="">
				<Image src="/logo5.svg" width={150} height={100} alt="logo aria studio" />
			</Link>
			<div className="flex gap-8 z-10">
				{links.map((link) => (
					<Link href={link.url} key={link.id} className={styles.link}>
						{link.title}
					</Link>
				))}
			</div>
		</nav>
	);
};

export default Navbar;
