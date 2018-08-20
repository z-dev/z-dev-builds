import React from 'react'
import Div from 'components/core/div'
import Input from 'components/core/input'

export default props => {
  return (
    <Div>
      <Input onChange={event => props.updateProjectQuery(event.target.value)} />
    </Div>
  )
}
