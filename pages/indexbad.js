import Head from 'next/head'
import NextLink from 'next/link'
//import Image from 'next/image'
import { Inter } from 'next/font/google'
import {
  Container,
  Box,
  Heading,
  Image,
  Link,
  Button,
  useColorModeValue
} from '@chakra-ui/react'
import styles from '@/styles/Home.module.css'
import Section from '../components/section.js'
import Paragraph from '../components/paragraph.js'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { BioSection, BioYear } from '../components/bio.js'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Michael Sousa - Developer / Designer</title>
      </Head>
      <Box
        borderRadius="lg"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        p={3}
        mb={6}
        align="center"
      >
        Hello, I'm a full-stack developer based in Orlando, Fl.
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Michael Sousa
          </Heading>
          <p>Developer / Designer / Digital Craftsman (p)</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          align="center"
        >
          <Image
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            maxWidth="100px"
            display="inline-block"
            borderRadius="full"
            src="/images/me.jpeg"
            alt="Profile picture"
          />
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          About Me
        </Heading>

        <Paragraph>
          Hi I'm Michael. This is my most recent project. Include the bioyear
          tags in here?{' '}
          <NextLink href="/works/nolepatrol" passHref>
            <Link>Nole Patrol</Link>
          </NextLink>
          .
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/works">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My Projects
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          Film, Weightlifting, Yoga, Mechanical Keyboards, and Coffee!
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          My Links
        </Heading>
        <Paragraph>add links and images here</Paragraph>
      </Section>

      <Section delay={0.4}>
        <Heading as="h3" variant="section-title">
          Contact Me
        </Heading>
        <Paragraph>Fix this or make a component</Paragraph>
      </Section>
    </Container>
  )
}
