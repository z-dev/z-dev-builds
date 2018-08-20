import React, { Component } from 'react'
import withRedux from 'redux/reduxWrapper'
import { connectSocket } from 'common/socket'
import Projects from 'components/projects'
import Header from 'components/header'
import Footer from 'components/footer'
import Page from 'components/page'
import Div from 'components/core/div'
import ProjectSearch from 'components/projectSearch'
import styled from 'styled-components'
import { projectsListener, updateProjectQuery } from 'redux/actions/projects'
import projectsSelector from 'redux/selectors/projects'
import '~/styles/global'

const PageContainer = styled(Div)`
  flex-direction: column;
  font-family: ${props => props.theme.fontFamily};
  background-color: ${props => props.theme.colors.grey};
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
          <Header />
          <ProjectSearch updateProjectQuery={projectQuery => this.props.dispatch(updateProjectQuery(projectQuery))} />
          <Projects projects={this.props.projects.projects} />
          <Footer />
        </PageContainer>
      </Page>
    )
  }
}

export default withRedux(state => ({ projects: projectsSelector(state) }))(Index)
