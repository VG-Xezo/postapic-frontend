import React, { useRef } from 'react'
import axios from "axios"
import { useForm } from "react-hook-form";
import "../css/Form.css"
import { Input } from "@chakra-ui/react"
import {
    FormControl,
    FormLabel,
} from "@chakra-ui/react"
import { Button } from "@chakra-ui/react"
import { useToast } from "@chakra-ui/react"
import { AddIcon } from '@chakra-ui/icons'
import { Divider } from "@chakra-ui/react"

function Form() {

    const inputRef = useRef()

    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        axios.post('http://localhost:8000/insertpost', data)
        inputRef.current.reset()
    }

    const toast = useToast()

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit(onSubmit)} ref={inputRef}>
                <FormControl id="title">
                    <FormLabel>Name of the Picture</FormLabel>
                    <Input name="title" type="text" ref={register} />
                </FormControl>
                <FormControl id="url" className="url">
                    <FormLabel>Url of the Picture</FormLabel>
                    <Input name="url" type="text" ref={register} />
                </FormControl>
                <Button leftIcon={<AddIcon w={5} h={5} />} className="submit-btn" colorScheme="blue" variant="outline" type="submit" onClick={() =>
                    toast({
                        title: "Success!",
                        description: "Your post was successfully posted! Please refresh the page.",
                        status: "success",
                        duration: 9000,
                        isClosable: true,
                    })}>Post</Button>
            </form>
            <Divider className="divider" />
        </div>
    )
}

export default Form
