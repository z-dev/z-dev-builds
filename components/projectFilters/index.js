import React from 'react'
import Div from 'components/core/div'
import Input from 'components/core/input'
import Checkbox from 'components/core/checkbox'
import Label from 'components/core/label'

export default props => (
  <Div>
    <Checkbox id="showFailed" onChange={event => props.updateShowFailed(event.target.checked)} />
    <Label htmlFor="showFailed">Show recently failed projects</Label>
    <Input onChange={event => props.updateProjectQuery(event.target.value)} />
  </Div>
)
