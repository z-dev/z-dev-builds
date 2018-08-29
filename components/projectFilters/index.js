import React from 'react'
import Div from 'components/core/div'
import SearchBox from 'components/core/searchBox'
import LabelledCheckbox from 'components/core/labelledCheckbox'
import styled from 'styled-components'

const FiltersContainer = styled(Div)`
  justify-content: flex-start;
  align-items: center;
  min-height: 30px;
  margin: 0 ${props => props.theme.spaces.extraExtraLarge}px ${props => props.theme.spaces.medium}px ${props => props.theme.spaces.extraExtraLarge}px;

  @media (max-width: ${props => props.theme.screenSizes.small}px) {
    margin: 0 0 ${props => props.theme.spaces.medium}px 0;
    justify-content: center;
  }
`

const FailedCheckbox = styled(LabelledCheckbox)`
  margin-left: ${props => props.theme.spaces.medium}px;
`

export default props => (
  <FiltersContainer>
    <SearchBox placeholder="Project name" value={props.projectQuery} onChange={props.updateProjectQuery} />
    <FailedCheckbox checked={props.showFailed} onChange={props.updateShowFailed} id="showFailed" text={'show failed projects'} />
  </FiltersContainer>
)
