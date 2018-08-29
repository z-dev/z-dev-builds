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
        <link rel="apple-touch-icon" sizes="180x180" href="/static/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/static/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/static/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/static/favicon/site.webmanifest" />
        <link rel="mask-icon" href="/static/favicon/safari-pinned-tab.svg" color="#5bbad5" />
        <link rel="shortcut icon" href="/static/favicon/favicon.ico" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="msapplication-config" content="/static/favicon/browserconfig.xml" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href="https://fonts.googleapis.com/css?family=Raleway:400,100,200,300,500,600,800,700,900" rel="stylesheet" type="text/css" />
        <meta name="description" content="ZDEV Builds" />
      </Head>
      {props.children}
    </PageContainer>
  </ThemeProvider>
)
