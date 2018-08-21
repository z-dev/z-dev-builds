import React, { Component } from 'react'
import withRedux from 'redux/reduxWrapper'
import { connectSocket } from 'common/socket'
import Projects from 'components/projects'
import Header from 'components/header'
import Footer from 'components/footer'
import Page from 'components/page'
import Div from 'components/core/div'
import ProjectFilters from 'components/projectFilters'
import styled from 'styled-components'
import { projectsListener } from 'redux/actions/projects'
import { updateProjectQuery, updateShowFailed } from 'redux/actions/filters'
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
          <ProjectFilters
            updateShowFailed={showFailed => this.props.dispatch(updateShowFailed(showFailed))}
            updateProjectQuery={projectQuery => this.props.dispatch(updateProjectQuery(projectQuery))}
          />
          <Projects projects={this.props.projects.projects} />
          <Footer />
        </PageContainer>
      </Page>
    )
  }
}

export default withRedux(state => ({ projects: projectsSelector(state) }))(Index)
