import React from 'react'
import theme from 'styles/theme'
import BranchRow from './branchRow'

export default props => {
  const branch = props.branch
  const statusColor = branch.latestBuild.failed ? theme.colors.red : null
  const latestBuild = branch.latestBuild
  const values = [branch.name, latestBuild.time, latestBuild.status]

  return <BranchRow values={values} cell3Color={statusColor} />
}
