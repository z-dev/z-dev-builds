import React from 'react'
import _ from 'lodash'
import styled from 'styled-components'
import Div from 'components/core/div'
import Branch from './branch'
import headerBranch from './headerBranch'

const ProjectContainer = styled(Div)`
  color: white;
  flex-direction: column;
  background-color: ${props => props.theme.colors.darkGrey};
  border-radius: ${props => props.theme.borderRadius}px;
  font-size: ${props => props.theme.fontSizes.small}px;
  padding: ${props => props.theme.spaces.small}px ${props => props.theme.spaces.medium}px;
  margin: ${props => props.theme.spaces.large}px ${props => props.theme.spaces.small}px;
  width: ${props => props.theme.project.width}px;
  height: ${props => props.theme.project.height}px;
`

const ProjectHeaderContainer = styled(Div)`
  height: 30px;
  align-items: center;
  border-bottom: solid 2px ${props => props.theme.colors.grey};
`

const ProjectBodyContainer = styled(Div)`
  flex-direction: column;
  flex: 1;
  justify-content: space-around;
  margin: 10px 0 5px 0;
`

const GreenCircle = styled(Div)`
  background-color: ${props => props.theme.colors.green};
  border-radius: 100px;
  width: 10px;
  height: 10px;
  margin-right: ${props => props.theme.spaces.extraSmall}px;
`

const ProjectName = styled.p`
  line-height: 10px;
`

const BranchesContainer = styled(Div)`
  flex-direction: column;
  flex: 1;
  justify-content: space-between;
`

export default props => (
  <ProjectContainer>
    <ProjectHeaderContainer>
      <GreenCircle />
      <ProjectName>{props.project.name}</ProjectName>
    </ProjectHeaderContainer>
    <ProjectBodyContainer>
      <Branch branch={headerBranch} header />
      <BranchesContainer>
        {_.map(props.project.branches, (branch, index) => (
          <Branch key={`branch-${index}`} branch={branch} />
        ))}
      </BranchesContainer>
    </ProjectBodyContainer>
  </ProjectContainer>
)
