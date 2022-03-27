import { NextUIProvider } from '@nextui-org/react'
import type { AppProps }  from 'next/app'

import '../styles/globals.css'
import { daskTheme }      from '../themes'

function App( { Component, pageProps }: AppProps ) {
	return (
		<NextUIProvider theme={ daskTheme }>
        <Component { ...pageProps } />
      </NextUIProvider>
	)
}

export default App
