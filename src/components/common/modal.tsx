"use client"

import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
} from "@heroui/react";
import {ReactNode} from "react";

interface Props {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    children: ReactNode;
    size?: "xs" | "sm" | "md"| "lg"| "xl";
}

const CustomModal = ({
    isOpen,
    onClose,
    title,
    children,
    size = "md"
}: Props) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose} size={size}>
            <ModalContent>
                <ModalHeader className="flex flex-col gap-1">
                    {title}
                </ModalHeader>
                <ModalBody>
                    {children}
                </ModalBody>
            </ModalContent>
        </Modal>
    )
}

export default CustomModal;