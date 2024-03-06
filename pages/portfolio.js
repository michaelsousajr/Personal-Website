import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import { WorkGridItem } from '../components/grid-item'
import Section from '../components/section'
import Layout from '../components/layouts/article'

import thumbHappyCat from '../public/images/happycat.png'
import thumbLinkPage from '../public/images/linkpage.png'
import thumbNolePatrol from '../public/images/np.png'
import thumbFileOperator from '../public/images/fileoperator.png'
import thumbPyParty from '../public/images/pypv_ss.png'
import thumbSatTracker from '../public/images/sattracker.png'

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
              thumbnail={thumbNolePatrol}
            >
              Data breach search engine for FSU emails
            </WorkGridItem>
          </Section>
          <Section delay={0.1}>
            <WorkGridItem
              id="happy-cat"
              title="Happy Cat"
              thumbnail={thumbHappyCat}
            >
              Bash script that motivates you
            </WorkGridItem>
          </Section>

          <Section delay={0.2}>
            <WorkGridItem
              id="link-page-app"
              title="Personal Link Page"
              thumbnail={thumbLinkPage}
            >
              Link-in-bio app
            </WorkGridItem>
          </Section>

          <Section delay={0.3}>
            <WorkGridItem
              id="fileoperator"
              title="fileoperator"
              thumbnail={thumbFileOperator}
            >
              Python file operations package
            </WorkGridItem>
          </Section>

          <Section delay={0.4}>
            <WorkGridItem
              id="PyPartyVisuals"
              title="PyPartyVisuals"
              thumbnail={thumbPyParty}
            >
              BPM synced party visuals
            </WorkGridItem>
          </Section>

          <Section delay={0.5}>
            <WorkGridItem
              id="SatTracker"
              title="SatTracker"
              thumbnail={thumbSatTracker}
            >
              Real time satellite tracker
            </WorkGridItem>
          </Section>

        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Portfolio
