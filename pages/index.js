import React, { Component } from 'react'
import withRedux from 'redux/reduxWrapper'
import Router from 'next/router'
import { connectSocket } from 'common/socket'
import { setQueryParameters } from 'common/utilities/query'
import Projects from 'components/projects'
import Header from 'components/header'
import Footer from 'components/footer'
import Page from 'components/page'
import Div from 'components/core/div'
import styled from 'styled-components'
import { syncProjects } from 'redux/actions/projects'
import { updateProjectQuery, updateShowFailed } from 'redux/actions/filters'
import projectsSelector from 'redux/selectors/projects'
import '~/styles/global'

const PageContainer = styled(Div)`
  min-height: 100vh;
  max-width: 100vw;
  flex-direction: column;
  flex: 1;
  font-family: ${props => props.theme.fontFamily};
  background-color: ${props => props.theme.colors.grey};
`

class Index extends Component {
  componentDidMount() {
    connectSocket()
    this.props.dispatch(syncProjects())
    this.updateStateFromQueries()
  }

  componentDidUpdate() {
    setQueryParameters({ showFailed: this.props.filters.showFailed, projectQuery: this.props.filters.projectQuery })
  }

  updateStateFromQueries() {
    const query = Router.router.query

    this.props.dispatch(updateShowFailed(query.showFailed === 'true'))
    if (query.projectQuery) {
      this.props.dispatch(updateProjectQuery(query.projectQuery))
    }
  }

  render() {
    return (
      <Page>
        <PageContainer>
          <Header />
          <Projects
            projectsLoading={this.props.projects.projectsLoading}
            projects={this.props.projects.projects}
            showFailed={this.props.filters.showFailed}
            updateShowFailed={showFailed => this.props.dispatch(updateShowFailed(showFailed))}
            projectQuery={this.props.filters.projectQuery}
            updateProjectQuery={projectQuery => this.props.dispatch(updateProjectQuery(projectQuery))}
          />
          <Footer />
        </PageContainer>
      </Page>
    )
  }
}

export default withRedux(state => ({ projects: projectsSelector(state), filters: state.filters }))(Index)
