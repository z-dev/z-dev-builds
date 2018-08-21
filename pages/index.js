import React, { Component } from 'react'
import withRedux from 'redux/reduxWrapper'
import Router from 'next/router'
import { connectSocket } from 'common/socket'
import setQueryParameters from 'common/utilities/setQueryParameters'
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
    this.updateStateFromQueries()
  }

  componentDidUpdate(previousProps) {
    const showFailed = this.props.filters.showFailed
    const projectQuery = this.props.filters.projectQuery
    const shouldUpdate = previousProps.filters.showFailed !== showFailed || previousProps.filters.projectQuery !== projectQuery

    if (shouldUpdate) {
      setQueryParameters({ showFailed: showFailed, projectQuery: projectQuery })
    }
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
          <ProjectFilters
            showFailed={this.props.filters.showFailed}
            updateShowFailed={showFailed => this.props.dispatch(updateShowFailed(showFailed))}
            projectQuery={this.props.filters.projectQuery}
            updateProjectQuery={projectQuery => this.props.dispatch(updateProjectQuery(projectQuery))}
          />
          <Projects projects={this.props.projects.projects} />
          <Footer />
        </PageContainer>
      </Page>
    )
  }
}

export default withRedux(state => ({ projects: projectsSelector(state), filters: state.filters }))(Index)
