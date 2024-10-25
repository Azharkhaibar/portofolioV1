import { Box, Text, Heading, Icon, Image, Flex } from "@chakra-ui/react";

const Certificate: React.FC = () => {
    return (
        <Box w="100%" h="100vh" mt="6%">
            <Box w="40%" h="100%" ml="10%">
                <Heading fontSize="38px">Certifications</Heading>
                <Text mt="2%" w="350px">I'm always learning new things and improving my skills. Here are some of my certifications.</Text>
            </Box>
            <Box w="60%" h="100%"></Box>
        </Box>
    )
}

export default Certificate;