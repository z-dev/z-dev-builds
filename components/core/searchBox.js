import React from 'react'
import Div from 'components/core/div'
import Input from 'components/core/input'
import styled from 'styled-components'

const SearchBoxContainer = styled(Div)`
  background-color: ${props => props.theme.colors.darkGrey};
  border-radius: ${props => props.theme.borderRadius}px;
  padding: 0 ${props => props.theme.spaces.small}px;
`

const SearchIcon = styled.img`
  margin-right: ${props => props.theme.spaces.small}px;
`

const SearchBoxInput = styled(Input)`
  font-size: ${props => props.theme.fontSizes.small}px;
`

export default props => (
  <SearchBoxContainer>
    <SearchIcon src="/static/searchIcon.svg" alt="Search Icon" />
    <SearchBoxInput placeholder={props.placeholder} value={props.value} onChange={event => props.onChange(event.target.value)} />
  </SearchBoxContainer>
)
