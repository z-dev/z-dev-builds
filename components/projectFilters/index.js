import React from 'react'
import Div from 'components/core/div'
import Input from 'components/core/input'
import Checkbox from 'components/core/checkbox'
import Label from 'components/core/label'

export default props => (
  <Div>
    <Checkbox checked={props.showFailed} id="showFailed" onChange={event => props.updateShowFailed(event.target.checked)} />
    <Label htmlFor="showFailed">Show recently failed projects</Label>
    <Input value={props.projectQuery} onChange={event => props.updateProjectQuery(event.target.value)} />
  </Div>
)
