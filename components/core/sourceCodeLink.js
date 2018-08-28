import React from 'react'
import Link from 'components/core/link'
import Div from 'components/core/div'
import styled from 'styled-components'

const SourceCodeLink = styled(Link)`
  margin-left: ${props => props.theme.spaces.small}px;
`

const SourceCodeLinkContainer = styled(Div)`
  align-items: center;
`

const GithubLogo = styled.img`
  width: 20px;
  height: 50px;
`

export default () => (
  <SourceCodeLinkContainer>
    <GithubLogo src="/static/githubLogo.svg" />
    <SourceCodeLink href="https://github.com/z-dev/z-dev-builds" rel="noopener noreferrer" target="_blank">
      Source Code
    </SourceCodeLink>
  </SourceCodeLinkContainer>
)
