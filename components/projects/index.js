import React from 'react'
import _ from 'lodash'
import ProjectFilters from 'components/projectFilters'
import Project from 'components/project'
import Div from 'components/core/div'
import LoadingIndicator from 'components/core/loadingIndicator'
import { H1, H2 } from 'components/core/headerText'
import styled from 'styled-components'

const Container = styled(Div)`
  flex-direction: column;
  flex: 1;
`

const ProjectsContainer = styled(Div)`
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: flex-start;
  overflow: auto;
  padding: 0 ${props => props.theme.spaces.large}px;
`

const ProjectsLoadingIndicator = styled(LoadingIndicator)`
  margin-top: ${props => props.theme.spaces.large}px;
`

const Title = styled(H1)`
  text-align: center;
  color: ${props => props.theme.colors.green};
  padding: 0 ${props => props.theme.spaces.medium}px;
`

const Subtitle = styled(H2)`
  text-align: center;
  margin-bottom: ${props => props.theme.spaces.large}px;
  padding: 0 ${props => props.theme.spaces.medium}px;
`

export default props => (
  <Container>
    <Title>Here are all our recent continuous integration builds</Title>
    <Subtitle>{`We've built this example website so you can see how we write code`}</Subtitle>
    <ProjectFilters showFailed={props.showFailed} updateShowFailed={props.updateShowFailed} projectQuery={props.projectQuery} updateProjectQuery={props.updateProjectQuery} />
    <ProjectsContainer>
      {props.projectsLoading ? <ProjectsLoadingIndicator /> : _.map(props.projects, (project, index) => <Project key={`project-${index}`} project={project} />)}
    </ProjectsContainer>
  </Container>
)
