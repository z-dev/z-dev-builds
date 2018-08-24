import React from 'react'
import Div from 'components/core/div'
import SearchBox from 'components/core/searchBox'
import Checkbox from 'components/core/checkbox'
import styled from 'styled-components'

const FiltersContainer = styled(Div)`
  justify-content: flex-end;
  align-items: center;
  min-height: 30px;
  margin: 0 ${props => props.theme.spaces.large}px ${props => props.theme.spaces.medium}px ${props => props.theme.spaces.large}px;
`

const FailedCheckbox = styled(Checkbox)``

export default props => (
  <FiltersContainer>
    <FailedCheckbox checked={props.showFailed} onChange={props.updateShowFailed} id="showFailed" text={'show failed projects'} />
    <SearchBox placeholder="Project name" value={props.projectQuery} onChange={props.updateProjectQuery} />
  </FiltersContainer>
)
