import React from 'react'
import { Box, Text, Heading } from '@chakra-ui/react'
import Header from '../../components/layout/home_layout/header'
import Pendidikan from '../../components/layout/home_layout/experience'
import TechStack from '../../components/layout/home_layout/techstack'
import Certificate from '../../components/layout/home_layout/certificate'
import FeaturedProject from '../../components/layout/home_layout/featuredproject'
import Footer from '../../components/layout/footer'
const Home = () => {
  return (
    <Box
    >
      <Header />
      <Pendidikan />
      <TechStack />
      <FeaturedProject />
      <Certificate />
      <Footer />
    </Box>
  )
}

export default Home;