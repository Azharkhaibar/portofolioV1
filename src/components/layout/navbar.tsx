import { Box, Flex, Text, IconButton, Button, Stack, Icon } from "@chakra-ui/react";
import { MdLanguage, MdOutlineNightsStay } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";

const Navbar: React.FC = () => {
    return (
        <Box
            as="nav"
            w="100%"
            bg="transparent"
            backdropFilter="blur(10px)"
            position="fixed"
            top={0}
            zIndex={10}
        >
            <Flex
                maxW="1400px" 
                mx="auto"
                px={6}        
                py={4}
                justify="space-between"
                align="center"
            >
                <Flex align="center" gap={8}>
                    <Text fontSize="2xl" fontWeight="bold">
                        MyPortfolio
                    </Text>

                    <Stack
                        as="ul"
                        direction="row"
                        gap={8}
                        display={{ base: "none", md: "flex" }}
                        align="center"
                        listStyleType="none"
                    >
                        <Text as="li">Home</Text>
                        <Text as="li">About</Text>
                        <Text as="li">Projects</Text>
                        <Text as="li">Blog</Text>
                        <Text as="li">Contact</Text>
                    </Stack>
                </Flex>

                <Flex align="center" gap={6}>
                    <Icon fontSize="22px" color="white">
                        <IoSearch />
                    </Icon>
                    <Icon fontSize="22px" color="white">
                        <MdLanguage />
                    </Icon>
                    <Icon fontSize="22px" color="white">
                        <MdOutlineNightsStay />
                    </Icon>

                    <Button
                        colorScheme="teal"
                        variant="solid"
                        size="md"
                        fontWeight="bold"
                    >
                        Hire Me
                        <Icon fontSize="12px" color="black">
                            <FaArrowRight />
                        </Icon>
                    </Button>
                </Flex>
            </Flex>
        </Box>
    );
};

export default Navbar;
