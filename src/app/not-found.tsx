"use client"

import {Button} from "@heroui/react";
import Link from "next/link";

const notFoundPage = () => {
    return (
        <div className="flex flex-col items-center justify-center px-4 text-center">
            <h1 className="text-7xl font-bold text-white">404</h1>

            <p className="mt-4 text-lg text-gray-400">
                Страница не найдена
            </p>

            <p className="mt-2 max-w-md text-sm text-gray-500">
                Возможно, страница была удалена или вы перешли по неверной ссылке.
            </p>

            <div className="mt-8">
                <Button
                    as={Link}
                    href="/"
                    color="primary"
                    variant="solid"
                    className="px-6"
                >
                    Вернуться на главную
                </Button>
            </div>
        </div>
    )
}

export default notFoundPage