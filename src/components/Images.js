import React, { useState, useEffect } from 'react'
import axios from "axios"
import Card from "./Card"
import "../css/Images.css"
import { Center } from "@chakra-ui/react"
import { Container } from "@chakra-ui/react"
import { SimpleGrid } from "@chakra-ui/react"

function Images() {

    const [res, setRes] = useState([])

    useEffect(() => {
        async function getPosts() {
            axios.get("http://localhost:8000/getposts").then(res => {
                setRes(res.data)
            })
            const reversedRes = res.map(item => item).reverse()
            setRes(reversedRes)
        }
        getPosts()
    }, [])

    return (
        <div className="image-mount">
            <SimpleGrid columns={2} spacingX="40px" spacingY="20px" minChildWidth="300px" spacing="40px">
                {res.map((post) => {
                    return (
                        <div>
                            <Center>
                                <Card imageUrl={post.url} imageAlt={`Either ${post.title} image has not been loaded or was not found`} title={post.title} key={post.title}></Card>
                            </Center>
                        </div>
                    )
                })}
            </SimpleGrid>
        </div>
    )
}

export default Images
