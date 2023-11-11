import Head from 'next/head'
import Navbar from '../navbar.js'
import { Box, Container } from '@chakra-ui/react'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
const Model = dynamic(() => import('../model'), { ssr: false })
import Footer from '../footer'

const Main = ({ children }) => {
  const router = useRouter()

  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Michael Sousa - Homepage</title>
      </Head>

      <Navbar path={router.asPath} />

      <Container maxW="container.md" pt={14}>
        <Model />
        {children}
        <Footer />
      </Container>
    </Box>
  )
}

export default Main
