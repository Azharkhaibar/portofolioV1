import { Box, Text, Heading, Image, Flex } from "@chakra-ui/react";
import { CertificateData } from "../../../data/certificatedata";

const Certificate: React.FC = () => {
    return (
        <Box w="100%" h="auto" mt="6%" display="flex">
            <Box w="33%" h="100%" ml="10%">
                <Heading fontSize="38px" mb="4%">Certifications</Heading>
                <Text mt="2%" w="350px">
                    I'm always learning new things and improving my skills. Here are some of my certifications.
                </Text>
            </Box>

            <Box w="67%" h="100%">
                <Flex align="center" flexWrap="wrap">
                    {CertificateData.map((certificate) => (
                        <Box key={certificate.id} w="400px" h="auto" bg="transparent" m="2" p="20px"
                            borderRadius="25px"
                            border="1px"
                            borderColor="gray.600"
                            borderStyle="solid"
                            pos="relative"
                            cursor="pointer"
                        >
                            <Image src={certificate.company} w="80px" h="80px" alt={`${certificate.title} logo`}
                                objectFit="contain"
                                pos="absolute"
                                top="0"
                            />
                            <Heading fontSize="20px" mt="50px">{certificate.title}</Heading>
                            <Text mt="2">{certificate.description}</Text>
                        </Box>
                    ))}
                </Flex>
            </Box>
        </Box>
    );
};

export default Certificate;
