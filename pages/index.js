import Head from 'next/head'
import NextLink from 'next/link'
//import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Container, Box, Heading, Image, Link, Button, useColorModeValue } from '@chakra-ui/react'
import styles from '@/styles/Home.module.css'
import Section from '../components/section.js'
import Paragraph from '../components/paragraph.js'
import { ChevronRightIcon } from '@chakra-ui/icons'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Container>
      <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3} mb={6} align="center">
      Hello, I&apos;m a full-stack developer based in Orlando, Fl.
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Michael Sousa
          </Heading>
          <p>Developer / Designer / Digital Craftsman</p>
        </Box>
      <Box flexShrink={0} mt={{base: 4, md: 0}} ml={{md: 6}} align="center">
        <Image borderColor="whiteAlpha.800" borderWidth={2} borderStyle="solid" maxWidth="100px" display="inline-block" borderRadius="full" src="/images/me.jpeg" alt="profile picture"/>
        </Box>
      </Box>
    <Section delay={0.1}>
      <Heading as="h3" variant="section-title" textUnderlineOffset={1}>
        Work
      </Heading>
      
      <Paragraph>
        Hi I'm Michael.
        {' '}
        <NextLink href="/works/nolepatrol">
          <Link>Nole Patrol</Link>
        </NextLink>
      .
      </Paragraph>
    <Box align="center" my={4}>
      <NextLink href="/works">
        <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
          My Portfolio
        </Button>
      </NextLink>
    </Box>
    </Section>
    </Container>
  )
}
