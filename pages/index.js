import React, { Component } from 'react'
import withRedux from 'redux/reduxWrapper'
import socket, { connectSocket } from 'common/socket'
import Builds from 'components/builds'
import Page from 'components/page'
import Div from 'components/core/div'
import styled from 'styled-components'
import '~/styles/global'

const PageContainer = styled(Div)`
  flex-direction: column;
  font-family: ${props => props.theme.serifFontFamily};
`

class Index extends Component {
  componentDidMount() {
    connectSocket()
    socket().on('builds', () => console.log('builds'))
  }

  render() {
    return (
      <Page>
        <PageContainer>
          <Builds />
        </PageContainer>
      </Page>
    )
  }
}

export default withRedux(state => ({ builds: state.builds }))(Index)
