"use client"

import {Button, Form, Input} from "@heroui/react";
import React, {useState} from "react";

interface Props {
    onClose: () => void
}

const loginForm = ({onClose}: Props) => {

    const [formData, setFormData] = useState({
        email: "",
        password: "",
        confirmPassword:""
    })

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        console.log('submitted')

        onClose()
    }

    return (
        <Form className="w-full" onSubmit={handleSubmit}>
            <Input
                className=""
                isRequired
                name="email"
                placeholder="Введите e-mail"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                validate={(value) => {
                    if (!value) return "Почта обязательна";
                    return null;
                }}
            />
            <Input
                className=""
                isRequired
                name="password"
                placeholder="Введите пароль"
                type="password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                validate={(value) => {
                    if (!value) return "Пароль обязателен";
                    return null;
                }}
            />

            <Button color="primary" type="submit">
                Войти
            </Button>
            <Button variant="light" onPress={onClose}>
                Отмена
            </Button>
        </Form>
    );
}

export default loginForm