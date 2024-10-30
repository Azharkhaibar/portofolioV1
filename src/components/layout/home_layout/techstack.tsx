import { Box, Heading, Text, Image, Flex } from "@chakra-ui/react";
import Firebase from '../../../assets/public/img/software/firebase.png';
import Javascript from '../../../assets/public/img/software/javascript.png';
import Java from '../../../assets/public/img/software/java.png';
import Python from '../../../assets/public/img/software/python.png';
import Typescript from '../../../assets/public/img/software/typescript.png';
import Mongodb from '../../../assets/public/img/software/mongodb.png';
import Figma from '../../../assets/public/img/software/figma.png';
import '../../design/textsphere.css';
import TextSphere from "../../textsphere";

const TechStack: React.FC = () => {
    return (
        <Box w="100%" h="70vh" display="flex">
            <Box w="50%" h="100%" p="20px" pl="10%">
                <Heading fontSize="42px" lineHeight="110%" mt="30%">
                    I've used these things to create powerful software that helps people and businesses 🥳
                </Heading>
                <Text mt="2%">
                    Technology without ideas and collaboration is nothing. I combine technologies, tools, and frameworks to deliver high-quality software.
                </Text>
                <Flex alignItems="center" mt="2%" gap="1%">
                    {[Firebase, Javascript, Java, Python, Typescript, Figma, Mongodb].map((logo, index) => (
                        <Box key={index}>
                            <Image src={logo}
                                h="33px"
                                w="33px"
                                objectFit="contain"
                            />
                        </Box>
                    ))}
                </Flex>
            </Box>
            <Box w="50%" h="100%" display="flex" justifyContent="center" alignItems="center">
                <TextSphere />
            </Box>
        </Box>
    );
}

export default TechStack;
