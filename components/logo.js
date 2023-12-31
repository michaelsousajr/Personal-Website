import Link from 'next/link'
import Image from 'next/image'
import { Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;

  &:hover img {
    transform: rotate(-20deg);
    transition: 200ms ease;
  }
`

const Logo = () => {
  const coffeeicon = `/images/code-coffee.png`
  const invertColor = useColorModeValue(false, true) //f=light, t=dark

  return (
    <Link href="/" scroll={false}>
      <LogoBox>
        <Image
          src={coffeeicon}
          width={25}
          height={25}
          alt="coffee"
          style={{ filter: invertColor ? 'invert(1)' : 'none' }}
        />
        <Text
          color={useColorModeValue('gray.800', 'whiteAlpha.900')}
          fontFamily="'Dawning of a New Day', cursive"
          fontWeight="bold"
          fontSize="26px"
          ml={3}
        >
          Michael Sousa
        </Text>
      </LogoBox>
    </Link>
  )
}

export default Logo
