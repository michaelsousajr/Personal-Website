import {
  Link,
  Container,
  Heading,
  Box,
  Divider,
  Button
} from '@chakra-ui/react'
import { ViewIcon, DownloadIcon } from '@chakra-ui/icons'
import Layout from '../components/layouts/article.js'

import Section from '../components/section'

const Resume = () => {
  return (
    <Layout title="Resume">
      <Container>
        <Heading as="h3" fontSize={20} mb={4} variant="section-title">
          Resume
        </Heading>
        <Section delay={0.1}>
          <Link href="/ms_resume.pdf" isExternal>
            <Button
              scroll={false}
              rightIcon={<ViewIcon />}
              colorScheme="teal"
              target="_blank"
            >
              View
            </Button>
          </Link>{' '}
          <Button
            as="a"
            href="/ms_resume.pdf"
            download
            ml={3}
            scroll={false}
            rightIcon={<DownloadIcon />}
            colorScheme="teal"
            target="_blank"
          >
            Download
          </Button>
        </Section>

        <Divider />

        <Section delay={0.2}>
          <Box
            width="100%"
            mt={3}
            mb={3}
            height="500px"
            borderWidth="1px"
            borderRadius="lg"
            overflowY="scroll"
          >
            <iframe
              src="/ms_resume.pdf"
              title="Resume"
              width="100%"
              height="100%"
              style={{ border: 'none' }}
            ></iframe>
          </Box>
        </Section>
      </Container>
    </Layout>
  )
}

export default Resume
