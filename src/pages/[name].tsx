"use client"
import { Flex, Box } from "@chakra-ui/react";
import { NextRouter, useRouter } from "next/router"
import { useEffect, useState } from "react";

export default () => {
    const route: NextRouter = useRouter();
    let [height_v, height_c] = useState<number>(0);
    useEffect(() => {
        height_c(window.innerHeight-1);
    })
    return (
        <Flex
            fontSize="50px"
            alignItems="center"
            justifyContent="center"
            h={`${height_v}px`}
        >
            <Box
                bg="#ddd"
                p="0px 3px"
                borderRadius="10px"
                mr="5px"
                _hover={{
                    bg: "red"
                }}
                
                _active={{
                    bg: "blue"
                }}
            >{route.query.name}</Box> is Not Founded
        </Flex>
    )
}