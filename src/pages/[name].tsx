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
            alignItems="center"
            justifyContent="center"
            h={`${height_v}px`}
        >
            <Box
                bg="#ddd"
                p="0px 3px"
                borderRadius="5px"
                mr="5px"
            >{route.query.name}</Box> is Not Founded
        </Flex>
    )
}