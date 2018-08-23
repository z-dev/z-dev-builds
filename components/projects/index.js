import React from 'react'
import _ from 'lodash'
import ResponsiveContainer from 'components/core/responsiveContainer'
import Project from 'components/project'
import Div from 'components/core/div'
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

export default props => (
  <Container>
    <ProjectsContainer>
      {_.map(props.projects, (project, index) => (
        <Project key={`project-${index}`} project={project} />
      ))}
    </ProjectsContainer>
  </Container>
)
