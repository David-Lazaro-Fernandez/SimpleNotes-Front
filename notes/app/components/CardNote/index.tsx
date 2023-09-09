"use client"
import { useState } from 'react'
import {
    Card,
    CardHeader,
    Button,
    CardBody,
    CardFooter,
    Divider,
    Image,
    useDisclosure,
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Textarea,
    Input,
} from "@nextui-org/react";
import { BiSolidTrash } from 'react-icons/bi'
import { MdModeEditOutline } from 'react-icons/md'

interface CardProps {
    title: string,
    description: string
}



export default function CardNote({ title, description }: CardProps) {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [data, setData] = useState<CardProps>({ title, description })
    const [openModal, setOpenModal] = useState(false)
    const date = new Date()
    const today = date.toLocaleDateString()


    const handleModal = () => {
        setOpenModal(!openModal)
    }

    return (
        <>
            <Card className="max-w-[400px]">
                <CardHeader className="flex gap-3">
                    <Image
                        alt="nextui logo"
                        height={40}
                        radius="sm"
                        src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
                        width={40}
                    />
                    <div className="flex flex-col">
                        <p className="text-md">{data.title}</p>
                        <p className="text-small text-default-500">{today}</p>
                    </div>
                </CardHeader>
                <Divider />
                <CardBody>
                    <p>{data.description}</p>
                </CardBody>
                <Divider />
                <CardFooter className='flex flex-row justify-end gap-3'>
                    <Button isIconOnly className='bg-transparent hover:bg-gray-200'>
                        <BiSolidTrash />
                    </Button>
                    <Button isIconOnly onPress={onOpen} className='bg-transparent hover:bg-gray-200'>
                        <MdModeEditOutline />
                    </Button>
                </CardFooter>
            </Card>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1 text-gray-900">
                                <Input
                                    value={data.title}
                                    onValueChange={(value) => setData({ ...data, title: value })}
                                    classNames={{
                                        input: [
                                            "bg-transparent",
                                            "text-black/90 dark:text-white/90",
                                            "placeholder:text-default-700/50 dark:placeholder:text-white/60",
                                        ],
                                        innerWrapper: "bg-transparent",

                                        inputWrapper: [
                                            "shadow-xl",
                                            "bg-default-200/50",
                                            "dark:bg-default/60",
                                            "backdrop-blur-xl",
                                            "backdrop-saturate-200",
                                            "hover:bg-transparent",
                                            "group-data-[focused=true]:bg-transparent",
                                            "dark:group-data-[focused=true]:bg-transparent",
                                            "!cursor-text",
                                        ],

                                    }}
                                />
                            </ModalHeader>
                            <ModalBody className=' text-gray-700'>
                                <Textarea
                                    label=""
                                    labelPlacement="outside"
                                    value={data.description}
                                    onValueChange={(value) => setData({ ...data, description: value })}
                                    className="w-full"
                                />
                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="light" onPress={onClose}>
                                    Close
                                </Button>
                                <Button color="primary" onPress={onClose}>
                                    Update
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    )
}
