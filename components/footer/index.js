import React from 'react'
import Div from 'components/core/div'
import SourceCodeLink from 'components/core/sourceCodeLink'
import styled from 'styled-components'

const Footer = styled(Div)`
  min-height: 50px;
  padding: 0 ${props => props.theme.spaces.large}px;
  align-items: center;
  background-color: ${props => props.theme.colors.darkGrey};
  position: sticky;
  bottom: 0;
`

export default () => {
  return (
    <Footer>
      <SourceCodeLink />
    </Footer>
  )
}
