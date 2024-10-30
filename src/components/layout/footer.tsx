import { Box, Heading, Text, Icon, Image, Flex } from "@chakra-ui/react";
const Footer: React.FC = () => {
    return (
        <Box w="100%" h="30vh" mt="3%" px="10%">
            <Box w="100%" h="1px" bg="gray.600" mb="4" />
            <Flex m="auto"justifyContent="center" gap="20px">
                {[{
                    menu: "Source code", href: "",
                },{
                    menu: "Design", href: "",
                },{
                    menu: "Project", href: "",
                },{
                    menu: "Statistic", href: "",
                }].map((footerMenu, index) => (
                    <Box key={index} w="100px" mt="1%">
                        <Text
                            color="gray.300"
                            textAlign="center"
                        >{footerMenu.menu}</Text>
                    </Box>
                ))}
            </Flex>

            <Box>
                <Heading>Reach me Out</Heading>
            </Box>
        </Box>
    )
}

export default Footer;