import React from 'react'
import Div from 'components/core/div'
import styled from 'styled-components'

const Row = styled(Div)`
  justify-content: space-between;
`

const ValueContainer = styled(Div)`
  color: ${props => props.color || props.theme.colors.white};
`

const Cell1 = styled(ValueContainer)`
  width: 300px;
  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

const Cell2 = styled(ValueContainer)`
  margin-left: ${props => props.theme.spaces.extraSmall}px;
  width: 270px;
`

const Cell3 = styled(ValueContainer)`
  width: 100px;
`
export default props => {
  return (
    <Row>
      <Cell1 color={props.color}>{props.values[0]}</Cell1>
      <Cell2 color={props.color}>{props.values[1]}</Cell2>
      <Cell3 color={props.cell3Color || props.color}>{props.values[2]}</Cell3>
    </Row>
  )
}
