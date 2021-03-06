import styled from 'styled-components'

export default styled.input`
  background-color: ${props => props.theme.colors.darkGrey};
  border: none;
  height: 30px;
  color: white;

  &:focus {
    outline: none;
  }
`
