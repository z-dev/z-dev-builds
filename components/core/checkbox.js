import React from 'react'
import Div from 'components/core/div'
import Label from 'components/core/label'
import styled from 'styled-components'

const CheckboxContainer = styled(Div)`
  align-items: center;
`

const Checkbox = styled.input`
  margin: 0 ${props => props.theme.spaces.small}px;
`

const CheckboxLabel = styled(Label)`
  color: ${props => props.theme.colors.white};
  margin-right: ${props => props.theme.spaces.small}px;
  font-size: ${props => props.theme.fontSizes.small}px;
`

export default props => (
  <CheckboxContainer className={props.className}>
    <Checkbox type="checkbox" checked={props.checked} id={props.id} onChange={event => props.onChange(event.target.checked)} />
    <CheckboxLabel htmlFor={props.id}>{props.text}</CheckboxLabel>
  </CheckboxContainer>
)
