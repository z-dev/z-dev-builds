import React, { Component } from 'react'
import withRedux from 'redux/reduxWrapper'
import { getAllBuilds } from 'redux/actions/builds'
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
  componentWillMount() {
    this.props.dispatch(getAllBuilds())
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
