import {Button, Form, Input} from "@heroui/react";
import React, {useState} from "react";

interface Props {
    onClose: () => void
}

const registrationForm = ({onClose}: Props) => {

    const [formData, setFormData] = useState({
        email: "",
        password: "",
        confirmPassword:""
    })

    const validateEmail = (email: string) => {
        if (!email) return false;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

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
                    if (!validateEmail(value)) return "Некорректный e-mail";
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
                    if (value.length < 6) return "Пароль должен содержать не менее 6 символов";
                    return null;
                }}
            />
            <Input
                className=""
                isRequired
                name="confirmPassword"
                placeholder="Подтвердите пароль"
                type="password"
                value={formData.confirmPassword}
                onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                validate={(value) => {
                    if (!value) return "Пароль для подтверждения обязателен";
                    if (value !== formData.confirmPassword) return "Пароли не совпадают";
                    return null;
                }}
            />

            <Button color="primary" type="submit">
                Зарегистрироваться
            </Button>
            <Button variant="light" onPress={onClose}>
                Отмена
            </Button>
        </Form>
    );
}

export default registrationForm