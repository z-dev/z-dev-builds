import styled from 'styled-components'

export default styled.a`
  font-family: ${props => props.theme.fontFamily};
  font-size: ${props => props.theme.fontSizes.medium}px;
  color: ${props => props.theme.colors.white};
  text-decoration: underline;
`
