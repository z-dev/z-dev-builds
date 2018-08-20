import React from 'react'
import Div from 'components/core/div'
import Anchor from 'components/core/anchor'
import styled from 'styled-components'

const Footer = styled(Div)`
  height: ${props => props.theme.footer.height}px;
  padding: 0 ${props => props.theme.spaces.extraLarge}px;
  align-items: center;
  background-color: ${props => props.theme.colors.darkGrey};
`

const FooterLink = styled(Anchor)`
  margin-left: ${props => props.theme.spaces.small}px;
`

export default () => {
  return (
    <Footer>
      <FooterLink href="https://github.com/z-dev/z-dev-builds" rel="noopener noreferrer" target="_blank">
        Source Code
      </FooterLink>
    </Footer>
  )
}
