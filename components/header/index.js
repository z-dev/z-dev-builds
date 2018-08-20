import React from 'react'
import Div from 'components/core/div'
import { H1 } from 'components/core/headerText'
import styled from 'styled-components'

const HeaderContainer = styled(Div)`
  height: ${props => props.theme.header.height}px;
  padding: 0 ${props => props.theme.spaces.extraLarge}px;
  align-items: center;
`

const HeaderTitle = styled(H1)`
  margin-left: ${props => props.theme.spaces.small}px;
`

export default () => {
  return (
    <HeaderContainer>
      <img src="/static/logo.svg" alt="ZDEV Logo" />
      <HeaderTitle>Continuous Integration</HeaderTitle>
    </HeaderContainer>
  )
}
