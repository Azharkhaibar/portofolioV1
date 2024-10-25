import { Box, Text, Heading, Flex, Icon, Image } from "@chakra-ui/react";
import { MdOutlineWork } from "react-icons/md";
import { GoBook } from "react-icons/go";
import Test from '../../../assets/public/img/testexperience.png';
import { FaArrowCircleRight } from "react-icons/fa";

const Pendidikan: React.FC = () => {
    const textHeadlines = [
        { text: "Developing software with 2+ years of experience." },
        { text: "Got into programming in elementary school and have worked on various projects and companies." }
    ];

    return (
        <Box w="100%" h="80vh" p="4">
            <Heading textAlign="center" fontSize="38px">
                {textHeadlines[0].text}
            </Heading>
            <Text textAlign="center" mt="1%">
                {textHeadlines[1].text}
            </Text>

            <Flex w="100%" h="70vh" justifyContent="center" alignItems="center" mt="4" gap="20px">
                <Box
                    w="40%"
                    h="80%"
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    p="20px"
                    borderRadius="20px"
                    boxShadow="lg"
                    position="relative"
                >
                    {/* Colored circles positioned at the top left */}
                    <Flex position="absolute" top="20px" left="20px">
                        <Box w="12px" h="12px" borderRadius="full" bg="red.500" mr="2"></Box>
                        <Box w="12px" h="12px" borderRadius="full" bg="blue.500" mr="2"></Box>
                        <Box w="12px" h="12px" borderRadius="full" bg="green.500"></Box>
                    </Flex>

                    <Box textAlign="center" mt="10%" w="90%">
                        <Flex alignItems="center" mb="4">
                            <Box display="flex" alignItems="center" m="auto">
                                <Icon w="30px" color="gray.600">
                                    <MdOutlineWork />
                                </Icon>
                                <Text fontSize="18px" fontWeight="bold" ml="2">Experience</Text>
                            </Box>
                        </Flex>
                        <Box w="100%" h="1px" bg="gray.600" mb="4" />
                        <Box>
                            <Flex flexDirection="column" justifyContent="space-between">
                                <Box display="flex" justifyContent="space-between" alignItems="center" mb="4"> {/* Added mb here */}
                                    <Box display="flex" alignItems="center">
                                        <Image src={Test} w="30px" h="30px" />
                                        <Flex flexDirection="column" textAlign="left" ml="14px">
                                            <Text color="gray.600">jul 2022 - aug 2022 </Text>
                                            <Heading>CV. Rehab Hati</Heading>
                                            <Text>Matematika dan Ilmu Pengetahuan Alam</Text>
                                        </Flex>
                                    </Box>
                                    <Text color="gray.400" textAlign="right">Freelance</Text>
                                </Box>

                                <Box display="flex" justifyContent="space-between" alignItems="center" mb="4"> {/* Added mb here */}
                                    <Box display="flex" alignItems="center">
                                        <Image src={Test} w="30px" h="30px" />
                                        <Flex flexDirection="column" textAlign="left" ml="14px">
                                            <Text color="gray.600">jan 2024 - jul 2024 </Text>
                                            <Heading>Youtz Media</Heading>
                                            <Text>Frontend Developer & UI/UX Designer</Text>
                                        </Flex>
                                    </Box>
                                    <Text color="gray.400" textAlign="right">Internship</Text>
                                </Box>

                                <Box display="flex" justifyContent="space-between" alignItems="center" mb="4"> {/* Added mb here */}
                                    <Box display="flex" alignItems="center">
                                        <Image src={Test} w="30px" h="30px" />
                                        <Flex flexDirection="column" textAlign="left" ml="14px">
                                            <Text color="gray.600">jan 2024 - jul 2024 </Text>
                                            <Heading>RuangA23</Heading>
                                            <Text>Frontend Developer & UI/UX Designer</Text>
                                        </Flex>
                                    </Box>
                                    <Text color="gray.400" textAlign="right">Internship</Text>
                                </Box>
                            </Flex>

                            <Text mt="4%">see all Experience
                                <Icon w="12px" color="gray.600" ml="8px">
                                    <FaArrowCircleRight />
                                </Icon>
                            </Text>
                        </Box>
                    </Box>
                </Box>

                <Box
                    w="40%"
                    h="80%"
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    p="20px"
                    bg="blackAlpha.50"
                    borderRadius="20px"
                    boxShadow="lg"
                    position="relative"
                >
                    {/* Colored circles positioned at the top left */}
                    <Flex position="absolute" top="20px" left="20px">
                        <Box w="12px" h="12px" borderRadius="full" bg="red.500" mr="2"></Box>
                        <Box w="12px" h="12px" borderRadius="full" bg="blue.500" mr="2"></Box>
                        <Box w="12px" h="12px" borderRadius="full" bg="green.500"></Box>
                    </Flex>

                    <Box textAlign="center" mt="10%" w="90%">
                        <Flex alignItems="center" mb="4">
                            <Box display="flex" m="auto" alignItems="center">
                                <Icon w="30px" color="gray.600">
                                    <GoBook />
                                </Icon>
                                <Text fontSize="18px" fontWeight="bold" ml="2">Education</Text>
                            </Box>
                        </Flex>
                        <Box w="100%" h="1px" bg="gray.600" mb="4" />
                        <Box>
                            <Flex flexDirection="column" justifyContent="space-between">
                                <Box display="flex" justifyContent="space-between" alignItems="center" mb="4"> {/* Added mb here */}
                                    <Box display="flex" alignItems="center">
                                        <Image src={Test} w="30px" h="30px" />
                                        <Flex flexDirection="column" textAlign="left" ml="14px">
                                            <Heading>SMA AL-Minhaj Islamic Boarding School</Heading>
                                            <Text>Matematika dan Ilmu Pengetahuan Alam</Text>
                                        </Flex>
                                    </Box>
                                    <Text color="gray.400" textAlign="right">2018 - 2019</Text>
                                </Box>

                                <Box display="flex" justifyContent="space-between" alignItems="center" mb="4"> {/* Added mb here */}
                                    <Box display="flex" alignItems="center">
                                        <Image src={Test} w="30px" h="30px" />
                                        <Flex flexDirection="column" textAlign="left" ml="14px">
                                            <Heading>Universitas Esa Unggul</Heading>
                                            <Text>Sistem Informasi</Text>
                                        </Flex>
                                    </Box>
                                    <Text color="gray.400" textAlign="right">2018 - 2019</Text>
                                </Box>
                            </Flex>
                        </Box>
                    </Box>
                </Box>
            </Flex>
        </Box>
    );
};

export default Pendidikan;
