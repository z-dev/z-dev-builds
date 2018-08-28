import Head from 'next/head'
import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import theme from 'styles/theme'
import Div from 'components/core/div'

const PageContainer = styled(Div)`
  flex: 1;
`

export default props => (
  <ThemeProvider theme={theme}>
    <PageContainer>
      <Head>
        <title>ZDEV Builds</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href="https://fonts.googleapis.com/css?family=Raleway:400,100,200,300,500,600,800,700,900" rel="stylesheet" type="text/css" />
        <meta name="description" content="ZDEV Builds" />
      </Head>
      {props.children}
    </PageContainer>
  </ThemeProvider>
)
