"use client"
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@heroui/react";
import Image from "next/image"
export const AcmeLogo = () => {
    return (
        <Image
         src="/logo.png"
         alt="Узбекская кухня"
         width={50}
         height={50}
         priority
        />
    );
};

const navbarItems = [
    {href: '/', label: "Рецепты"},
    {href: '/ingredients', label: "Ингредиенты"},
    {href: '/about', label: "О нас"}
]

export default function Header() {
    return (
        <Navbar>
            <NavbarBrand>
                <Link href="/" className="flex gap-1">
                    <AcmeLogo />
                    <p className="font-bold text-inherit">Рецепты узбекской кухни</p>
                </Link>
            </NavbarBrand>
            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                {
                    navbarItems.map((item) => {
                        return <NavbarItem key={item.href}>
                                    <Link aria-current="page" href={item.href}>
                                        {item.label}
                                    </Link>
                                </NavbarItem>
                    })
                }
            </NavbarContent>
            <NavbarContent justify="end">
                <NavbarItem className="hidden lg:flex">
                    <Link href="#">Login</Link>
                </NavbarItem>
                <NavbarItem>
                    <Button as={Link} color="primary" href="#" variant="flat">
                        Sign Up
                    </Button>
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    );
}
