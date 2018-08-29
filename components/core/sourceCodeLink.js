import React from 'react'
import Link from 'components/core/link'
import Text from 'components/core/text'
import styled from 'styled-components'

const SourceCodeLink = styled(Link)`
  margin-left: ${props => props.theme.spaces.small}px;
  flex-direction: row;
  align-items: center;
  display: flex;
`

const GithubLogo = styled.img`
  width: 20px;
  height: 50px;
`

const SourceCodeText = styled(Text)`
  margin-left: ${props => props.theme.spaces.small}px;
`

export default props => (
  <SourceCodeLink className={props.className} href="https://github.com/z-dev/z-dev-builds" rel="noopener noreferrer" target="_blank">
    <GithubLogo src="/static/githubLogo.svg" alt="Github Logo" />
    <SourceCodeText>Source Code</SourceCodeText>
  </SourceCodeLink>
)
