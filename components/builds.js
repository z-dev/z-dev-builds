import React, { Component } from 'react'
import ResponsiveContainer from 'components/core/responsiveContainer'
import styled from 'styled-components'

const Container = styled(ResponsiveContainer)`
  #innerContainer {
    justify-content: center;
    flex-direction: column;
    align-items: center;
    padding-top: 20px;
    padding-bottom: 90px;
  }

  padding-top: 30px;
  padding-bottom: 25px;
`

export default class About extends Component {
  render() {
    return <Container />
  }
}
