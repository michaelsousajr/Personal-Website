import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import { WorkGridItem } from '../components/grid-item'
import Section from '../components/section'
import Layout from '../components/layouts/article'

import thumbHappyCat from '../public/images/happycat.png'

const Portfolio = () => {
  return (
    <Layout title="Portfolio">
      <Container>
        <Heading as="h3" fontSize={20} mb={4} variant="section-title">
          Code
        </Heading>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <WorkGridItem
              id="nole-patrol"
              title="Nole Patrol"
              thumbnail={thumbHappyCat}
            >
              Data breach search engine for FSU emails(Not Available)
            </WorkGridItem>
          </Section>
          <Section delay={0.1}>
            <WorkGridItem
              id="happy-cat"
              title="Happy Cat"
              thumbnail={thumbHappyCat}
            >
              Bash script that motivates you.
            </WorkGridItem>
          </Section>

          <Section delay={0.2}>
            <WorkGridItem
              id="link-page-app"
              title="Personal Link Page"
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
