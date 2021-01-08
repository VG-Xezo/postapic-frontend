import React from 'react'
import "../css/Cards.css"
import { Box } from "@chakra-ui/react"
import { Image } from "@chakra-ui/react"

function Card(props) {
    return (
        <div>
            <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
                <Image src={props.imageUrl} alt={props.imageAlt} />
                <Box
                    mt="1"
                    fontWeight="semibold"
                    as="h4"
                    lineHeight="tight"
                    isTruncated
                >
                    {props.title}
                </Box>
            </Box>
        </div>
    )
}

export default Card
