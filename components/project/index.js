import React from 'react'
import _ from 'lodash'
import Div from 'components/core/div'
import styled from 'styled-components'

const BranchContainer = styled(Div)`
  justify-content: space-between;
`
const BranchNameContainer = styled(Div)`
  width: 200px;
`

const ValueContainer = styled(Div)`
  width: 150px;
`

const Branch = props => {
  const latestBuild = props.branch.latestBuild

  return (
    <BranchContainer>
      <BranchNameContainer>{props.branch.name}</BranchNameContainer>
      <ValueContainer>{latestBuild.time}</ValueContainer>
      <ValueContainer>{latestBuild.buildNumber}</ValueContainer>
      <ValueContainer>{latestBuild.status}</ValueContainer>
    </BranchContainer>
  )
}

const ProjectContainer = styled(Div)`
  color: white;
  flex-direction: column;
  background-color: ${props => props.theme.colors.darkGrey};
  border-radius: 10px;
  font-size: 14px;
  padding: 10px 20px;
  margin: 5px;
  width: 380px;
  height: 160px;
`

const ProjectHeaderContainer = styled(Div)``

const ProjectBodyContainer = styled(Div)`
  flex-direction: column;
`

export default props => (
  <ProjectContainer>
    <ProjectHeaderContainer>
      <p>{props.project.name}</p>
    </ProjectHeaderContainer>
    <ProjectBodyContainer>
      {_.map(props.project.branches, (branch, index) => (
        <Branch key={`branch-${index}`} branch={branch} />
      ))}
    </ProjectBodyContainer>
  </ProjectContainer>
)
