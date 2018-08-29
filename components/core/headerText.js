import styled from 'styled-components'

export const H1 = styled.h1`
  font-family: ${props => props.theme.fontFamily};
  color: ${props => props.theme.colors.white};
  font-size: ${props => props.theme.fontSizes.large}px;
  font-weight: 300;

  @media (max-width: ${props => props.theme.screenSizes.small}px) {
    font-size: ${props => props.theme.fontSizes.medium}px;
  }
`

export const H2 = styled(H1)`
  font-size: ${props => props.theme.fontSizes.medium}px;

  @media (max-width: ${props => props.theme.screenSizes.small}px) {
    font-size: ${props => props.theme.fontSizes.small}px;
  }
`
