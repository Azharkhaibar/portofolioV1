import { Box, Heading, Text, Icon, Image, Flex, Highlight, Button } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { BiDockLeft } from "react-icons/bi";
import Navbar from "../navbar";

const Header: React.FC = () => {

    const role = [
        "Fullstack Developer", "UI/UX Designer"
    ]
    return (
        <Box pos="relative">
            <Navbar />
            <Flex w="100%" h="100vh" pos="relative">
                <Box
                    w="65%"
                    h="100%"
                    p="9.5%"
                    mt="4%"
                >
                    <Heading fontSize="70px" mb="2%" lineHeight="90%">
                        <span style={{ fontSize: "40px", marginBottom: "2%" }}>Hi!,</span>
                        <br />
                        I'm <span
                            style={{    
                                background: "linear-gradient(90deg, rgba(229,58,247,1) 0%, rgba(115,9,171,1) 81%)",
                                WebkitBackgroundClip: "text",
                                color: "transparent"
}}
                        >Azhar</span>, Fullstack Developer and UI/UX Designer
                    </Heading>
                    <Text fontSize="18px" fontWeight="600" mt="4%"> 
                        I'm a self-taught developer, who's currently pursuing Full-Stack development to create stunning user experiences on the front-end, and scalable, secure infrastructure on the backend.
                    </Text>
                    <Flex gap="15px" mt="3%">
                        <Button bg="transparent" color="white" border="1px"
                            borderColor="white"
                            borderStyle="solid">
                            Read My Blogs
                        </Button>
                        <Button>
                            Know me more
                            <Icon fontSize="12px" color="black">
                                <MdOutlineKeyboardArrowRight />
                            </Icon>
                        </Button>
                    </Flex>
                    <Flex alignItems="center" mt="3%" gap="10px">
                        <Flex alignItems="center" gap="5px">
                            <Icon fontSize="18px" color="whiteAlpha.500">
                                <BiDockLeft />
                            </Icon>
                            Resume</Flex>
                        <Flex alignItems="center" gap="5px">
                            <Icon fontSize="18px" color="whiteAlpha.500">
                                <FaLinkedin />
                            </Icon>
                            LinkedIn</Flex>
                        <Flex alignItems="center" gap="5px">
                            <Icon fontSize="18px" color="whiteAlpha.500">
                                <FaGithub />
                            </Icon>
                            GitHub</Flex>
                    </Flex>

                </Box>
                <Box
                    w="35%"
                    h="100%"
                    bg="blackAlpha.600"
                >

                </Box>
            </Flex>
        </Box>
    )
}

export default Header;