import React from 'react'
import Div from 'components/core/div'
import styled from 'styled-components'

const BranchContainer = styled(Div)`
  justify-content: space-between;
`

const ValueContainer = styled(Div)`
  color: ${props => (props.header ? props.theme.colors.green : props.theme.colors.white)};
`

const BranchNameContainer = styled(ValueContainer)`
  width: 300px;
  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

const TimeContainer = styled(ValueContainer)`
  width: 180px;
`

const StatusContainer = styled(ValueContainer)`
  width: 100px;
  ${props => (props.failed ? `color: ${props.theme.colors.red};` : '')};
`

export default props => {
  const latestBuild = props.branch.latestBuild

  return (
    <BranchContainer>
      <BranchNameContainer header={props.header}>{props.branch.name}</BranchNameContainer>
      <TimeContainer header={props.header}>{latestBuild.time}</TimeContainer>
      <StatusContainer header={props.header} failed={latestBuild.failed}>
        {latestBuild.status}
      </StatusContainer>
    </BranchContainer>
  )
}
