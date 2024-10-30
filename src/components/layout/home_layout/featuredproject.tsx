import { Box, Text, Heading, Icon, Flex, Image } from "@chakra-ui/react";
import { ProjectFlex } from "../../../data/featuredproject";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FaArrowRight } from "react-icons/fa6";
import { IconType } from "react-icons";

const FeaturedProject: React.FC = () => {
    const ProjectSliderSettings = {
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        pauseOnHover: true
    }
    return (
        <Box w="100%" h="70vh" mt="5%">
            <Heading fontSize="35px" textAlign="center">Featured Project</Heading>
            <Text textAlign="center" mt="1%">Check out all of my Projects</Text>

            <Box h="50vh" w="100%" px="10%" mt="3%">
                <Slider {...ProjectSliderSettings}>
                    {ProjectFlex.map((projectAccess) => (
                        <Box key={projectAccess.id} w="100%" h="47vh" display="flex" justifyContent="center" alignItems="center"
                            m="auto"
                        >
                            <Box w="320px" m="auto" h="auto" p="20px"
                             borderRadius="8px" boxShadow="md"
                             border="1px" borderStyle="solid"
                             borderColor="gray.700"
                             >
                                <Heading fontSize="22px" mb="2">{projectAccess.nameproject}</Heading>
                                <Text mb="4">{projectAccess.descriptionproject}</Text>

                                <Flex alignItems="center" mb="4">
                                    {projectAccess.techStack.map((logoStack, index) => (
                                        <Icon key={index} w="20px" h="20px" mr="5px">
                                            <Text color="white">{logoStack}</Text>
                                        </Icon>
                                    ))}
                                </Flex>

                                <Image src={projectAccess.projectIMG} w="100%" h="200px" borderRadius="md" mb="4" />

                                <Box display="flex" alignItems="center" cursor="pointer">
                                    <Text color="gray.400" fontWeight="bold" mr="1">See more</Text>
                                    <Icon color="gray.400">
                                        <FaArrowRight />
                                    </Icon>
                                </Box>
                            </Box>
                        </Box>
                    ))}
                </Slider>
                <Text p="10px" borderRadius="15px" bg="transparent"
                    border="1px"
                    borderColor="gray.700"
                    borderStyle="solid"
                    m="auto"
                    w="200px"
                    textAlign="center"
                    mt="3%"
                    cursor="pointer"
                >See All Project</Text>
            </Box>
        </Box>

    );
};

export default FeaturedProject;
