import React, { Component } from 'react'
import withRedux from 'redux/reduxWrapper'
import { connectSocket } from 'common/socket'
import Builds from 'components/builds'
import Page from 'components/page'
import Div from 'components/core/div'
import styled from 'styled-components'
import { projectsListener } from 'redux/actions/projects'
import '~/styles/global'

const PageContainer = styled(Div)`
  flex-direction: column;
  font-family: ${props => props.theme.serifFontFamily};
`

class Index extends Component {
  componentDidMount() {
    connectSocket()
    this.props.dispatch(projectsListener())
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

export default withRedux(state => ({ projects: state.projects }))(Index)
