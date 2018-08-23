import React from 'react'
import _ from 'lodash'
import ResponsiveContainer from 'components/core/responsiveContainer'
import ProjectFilters from 'components/projectFilters'
import Project from 'components/project'
import Div from 'components/core/div'
import { H1, H2 } from 'components/core/headerText'
import styled from 'styled-components'

const Container = styled(ResponsiveContainer)`
  #innerContainer {
    justify-content: flex-start;
    flex-direction: column;
    align-items: stretch;
  }
`

const ProjectsContainer = styled(Div)`
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: flex-start;
  overflow: auto;
`

const Title = styled(H1)`
  text-align: center;
  color: ${props => props.theme.colors.green};
`

const Subtitle = styled(H2)`
  text-align: center;
  margin-bottom: ${props => props.theme.spaces.large}px;
`

export default props => (
  <Container>
    <Title>{`ZDEV's Projects tested and deployed with CircleCI`}</Title>
    <Subtitle>Add a search query to find a project or check the box to see which builds failed</Subtitle>
    <ProjectFilters showFailed={props.showFailed} updateShowFailed={props.updateShowFailed} projectQuery={props.projectQuery} updateProjectQuery={props.updateProjectQuery} />
    <ProjectsContainer>
      {_.map(props.projects, (project, index) => (
        <Project key={`project-${index}`} project={project} />
      ))}
    </ProjectsContainer>
  </Container>
)
