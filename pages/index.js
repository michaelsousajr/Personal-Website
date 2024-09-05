import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Button,
  List,
  ListItem,
  Icon,
  useColorModeValue,
  chakra
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioYear, BioSection } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import Image from 'next/image'
import ContactMe from '../components/contactme'
import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
  <Layout>
    <Container>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Michael Sousa
          </Heading>
          <Box
            borderRadius="lg"
            mb={6}
            p={1}
            textAlign="center"
            bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
            css={{ backdropFilter: 'blur(10px)' }}
          >
            <p>Designer | Developer | Digital Creator</p>
          </Box>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="80px"
            h="100px"
            display="inline-block"
            borderRadius="md"
            overflow="hidden"
          >
            <ProfileImage
              src="/images/headshot.png"
              alt="Profile image"
              borderRadius="md"
              width="80"
              height="100"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          About Me
        </Heading>
        <Paragraph mb={6} pb={3}>
          Hello! I&apos;m Michael Sousa,
          A passionate indie developer dedicated to crafting unique digital experiences.
        </Paragraph>
        <BioSection>
          <BioYear>2000</BioYear>Born in Miami, FL
        </BioSection>
        <BioSection>
          <BioYear>2020</BioYear>Printed &quot;Hello World!&quot; for the first time.
        </BioSection>
        <BioSection>
          <BioYear>2024</BioYear>Graduated from Florida State University
        </BioSection>

        <Box align="center" my={4}>
          <Button
            as={NextLink}
            href="/portfolio"
            scroll={false}
            rightIcon={<ChevronRightIcon />}
            colorScheme="teal"
          >
            My Portfolio
          </Button>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          Music, Film, Weightlifting, Yoga, Mech-Keyboards, and
          Coffee.
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          My Links
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/michaelsousajr" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoGithub} />}
              >
                Github
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link
              href="https://www.linkedin.com/in/michael-sousa-02376a225/"
              target="_blank"
            >
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoLinkedin} />}
              >
                Linkedin
              </Button>
            </Link>
          </ListItem>
        </List>

        <Heading as="h3" variant="section-title">
          Contact Me
        </Heading>

        <ContactMe />
      </Section>
    </Container>
  </Layout>
)

export default Home
