import React from 'react'
import _ from 'lodash'
import Div from 'components/core/div'
import styled from 'styled-components'

const Branch = props => {
  const latestBuild = props.branch.latestBuild

  return (
    <Div>
      <p>{props.branch.name}</p>
      <p>{latestBuild.time}</p>
      <p>{latestBuild.buildNumber}</p>
      <p>{latestBuild.status}</p>
    </Div>
  )
}

const ProjectContainer = styled(Div)`
  color: white;
  flex-direction: column;
  background-color: red;
  margin: 5px;
`

export default props => {
  return (
    <ProjectContainer>
      <p>{props.project.name}</p>
      {_.map(props.project.branches, branch => (
        <Branch branch={branch} />
      ))}
    </ProjectContainer>
  )
}
