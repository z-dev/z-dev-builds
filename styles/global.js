import { injectGlobal } from 'styled-components'
import theme from './theme'

/* eslint-disable no-unused-expressions */

injectGlobal`
  body {
    background-color: ${theme.colors.grey};
  }
`
