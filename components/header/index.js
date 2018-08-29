import React from 'react'
import Div from 'components/core/div'
import SourceCodeLink from 'components/core/sourceCodeLink'
import { H1 } from 'components/core/headerText'
import styled from 'styled-components'

const HeaderContainer = styled(Div)`
  min-height: ${props => props.theme.header.height}px;
  padding: 0 ${props => props.theme.spaces.large}px;
  align-items: center;
  justify-content: space-between;
`

const HeaderTitle = styled(H1)`
  margin-left: ${props => props.theme.spaces.small}px;
`

export default () => {
  return (
    <HeaderContainer>
      <Div>
        <img src="/static/logo.svg" alt="ZDEV Logo" />
        <HeaderTitle>Continuous Integration</HeaderTitle>
      </Div>
      <SourceCodeLink />
    </HeaderContainer>
  )
}
