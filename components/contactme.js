import React from 'react'
import {
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  Link,
  HStack,
  Icon,
  useColorModeValue
} from '@chakra-ui/react'
import { EmailIcon } from '@chakra-ui/icons'
// Add other icons as needed for social media

const ContactMe = () => {
  // You can add a function to handle form submission if needed
  const handleSubmit = event => {
    event.preventDefault()
    // Form submission logic
  }

  return (
    <Box
      maxW="500px"
      mx="auto"
      p={5}
      bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
      borderRadius="15px"
    >
      <form onSubmit={handleSubmit}>
        <FormControl isRequired mb={3}>
          <FormLabel htmlFor="name">Name</FormLabel>
          <Input id="name" placeholder="Your name" />
        </FormControl>
        <FormControl isRequired mb={3}>
          <FormLabel htmlFor="email">Email</FormLabel>
          <Input id="email" type="email" placeholder="Your email" />
        </FormControl>
        <FormControl mb={3}>
          <FormLabel htmlFor="message">Message</FormLabel>
          <Textarea id="message" placeholder="Your message" />
        </FormControl>
        <Button
          type="submit"
          colorScheme="teal"
          isFullWidth
          scroll={false}
          leftIcon={<EmailIcon />}
        >
          Send Message
        </Button>
      </form>
      <Box mt={10}>
        <Heading as="h4" size="md" mb={3}>
          Other Ways to Reach Me
        </Heading>
        <HStack spacing={4}>
          <Link href="mailto:michaelsousajr@gmail.com" isExternal>
            <Icon as={EmailIcon} /> michaelsousajr@gmail.com
          </Link>
        </HStack>
      </Box>
    </Box>
  )
}

export default ContactMe
