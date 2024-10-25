import React from 'react'
import { Box, Text, Heading } from '@chakra-ui/react'
import Header from '../../components/layout/home_layout/header'
import Pendidikan from '../../components/layout/home_layout/experience'
import TechStack from '../../components/layout/home_layout/techstack'
import Certificate from '../../components/layout/home_layout/certificate'
const Home = () => {
  return (
    <Box
    >
      <Header />
      <Pendidikan />
      <TechStack />
      <Certificate />
    </Box>
  )
}

export default Home;