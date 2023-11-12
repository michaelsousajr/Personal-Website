import React from 'react'
import { useForm, ValidationError } from '@formspree/react'
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
  Icon
} from '@chakra-ui/react'
import { EmailIcon } from '@chakra-ui/icons'

const ContactMe = () => {
  const [state, handleSubmit] = useForm('mwkdjeya')

  if (state.succeeded) {
    return (
      <Box textAlign="center" p={5}>
        <Heading as="h3" size="lg" mb={3}>
          Thank You!
        </Heading>
        <p>Your message has been sent successfully.</p>
      </Box>
    )
  }

  return (
    <Box
      maxW="500px"
      mx="auto"
      p={5}
      mt={6}
      bg={'whiteAlpha.500','whiteAlpha.200'}
      borderRadius="15px"
    >
      <form onSubmit={handleSubmit}>
        <FormControl isRequired mb={3}>
          <FormLabel htmlFor="name">Name</FormLabel>
          <Input id="name" name="name" placeholder="Your name" />
        </FormControl>
        <FormControl isRequired mb={3}>
          <FormLabel htmlFor="email">Email</FormLabel>
          <Input
            id="email"
            type="email"
            name="email"
            placeholder="Your email"
          />
          <ValidationError field="email" prefix="Email" errors={state.errors} />
        </FormControl>
        <FormControl mb={3}>
          <FormLabel htmlFor="message">Message</FormLabel>
          <Textarea id="message" name="message" placeholder="Your message" />
          <ValidationError
            field="message"
            prefix="Message"
            errors={state.errors}
          />
        </FormControl>
        <Button
          type="submit"
          colorScheme="teal"
          isFullWidth
          leftIcon={<EmailIcon />}
          isLoading={state.submitting}
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
