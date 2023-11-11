import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import { WorkGridItem } from '../components/grid-item'
import Section from '../components/section'
import Layout from '../components/layouts/article'

import thumbHappyCat from '../public/images/happycat.png'

const Portfolio = () => {
  return (
    <Layout title="Portfolio">
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Code
        </Heading>

        <SimpleGrid column={[1, 1, 2]} gap={6}>
          <Section>
            <WorkGridItem
              id="nolepatrol"
              title="Nole Patrol"
              thumbnail={thumbHappyCat}
            >
              FSU database search engine
            </WorkGridItem>
          </Section>

          <Divider my={6} />

          <Section delay={0.1}>
            <WorkGridItem
              id="happycat"
              title="Happy Cat"
              href="https://github.com/michaelsousajr/happy-cat"
              thumbnail={thumbHappyCat}
            >
              Bash script That movtivates you while you code.
            </WorkGridItem>
          </Section>

          <Divider my={6} />

          <Section delay={0.2}>
            <WorkGridItem
              id="linkpage"
              title="Personal Link Page"
              href="https://michaelsousajr/happycat"
              thumbnail={thumbHappyCat}
            >
              A Link-Tree clone
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Portfolio
//export { getServerSideProps } from '../components/chakra'
