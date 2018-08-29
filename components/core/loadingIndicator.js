import React from 'react'
import ReactLoading from 'react-loading'
import theme from 'styles/theme'

export default props => <ReactLoading className={props.className} type="spin" color={theme.colors.green} width={50} height={50} />
