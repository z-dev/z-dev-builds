import React, { Component } from 'react'
import _ from 'lodash'
import ResponsiveContainer from 'components/core/responsiveContainer'
import Project from 'components/project'
import styled from 'styled-components'

const Container = styled(ResponsiveContainer)`
  #innerContainer {
    justify-content: center;
    flex-direction: column;
    align-items: center;
    padding-top: 20px;
    padding-bottom: 90px;
  }

  padding-top: 30px;
  padding-bottom: 25px;
`

export default class Projects extends Component {
  render() {
    console.log(this.props.projects)
    return (
      <Container>
        {_.map(this.props.projects, (project, index) => (
          <Project key={`project-${index}`} project={project} />
        ))}
      </Container>
    )
  }
}
