"use client"
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@heroui/react";
import Image from "next/image"
import {usePathname} from "next/navigation";
import {siteConfig} from "@/config/site.config";
import {layoutConfig} from "@/config/layout.config";

export const AcmeLogo = () => {
    return (
        <Image
            src="/logo.png"
            alt={siteConfig.title}
            width={50}
            height={50}
            priority
        />
    );
};


export default function Header() {
    const pathName = usePathname();

    const getNavItems = () => {
            return siteConfig.navbarItems.map((item) => {
                const isActive = pathName === item.href
                return <NavbarItem key={item.href}>
                    <Link
                        aria-current="page"
                        href={item.href}
                        className={`
                                  px-3 py-1 rounded-md transition-colors duration-200
                                  ${isActive
                            ? 'bg-blue-100 text-blue-700 font-medium'
                            : 'text-gray-500 hover:bg-gray-100 hover:text-gray-900'
                        }
                                `}

                    >
                        {item.label}
                    </Link>
                </NavbarItem>
            })

    }

    return (
        <Navbar
            style = {{height: layoutConfig.headerHeight}}
        >
            <NavbarBrand>
                <Link href="/public" className="flex gap-1">
                    <AcmeLogo/>
                    <p className="font-bold text-inherit">{siteConfig.description}</p>
                </Link>
            </NavbarBrand>
            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                {getNavItems()}
            </NavbarContent>
            <NavbarContent justify="end">
                <NavbarItem className="hidden lg:flex">
                    <Link href="#">Логин</Link>
                </NavbarItem>
                <NavbarItem>
                    <Button as={Link} color="primary" href="#" variant="flat">
                        Регистрация
                    </Button>
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    );
}
