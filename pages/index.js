import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Container, Box, Heading } from '@chakra-ui/react'
import styles from '@/styles/Home.module.css'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Container>
      <Box borderRadius="lg" bg="red" p={3} mb={6} align="center">
      Hello, I&apos;m a full-stack developer based in Orlando, Fl.
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Michael Sousa
          </Heading>
          <p>Developer / Designer / Digital Craftsman</p>
        </Box>
      </Box>
    </Container>
  )
}
