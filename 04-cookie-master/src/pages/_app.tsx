import '@/styles/globals.css'
import type { AppContext, AppProps } from 'next/app'
import { CssBaseline, ThemeProvider } from "@mui/material";
import { customTheme, darkTheme, lightTheme } from "@/themes";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";

function App( { Component, pageProps }: AppProps ) {
	const [ currentTheme, setCurrentTheme ] = useState( lightTheme )

	useEffect( () => {
		const cookieTheme = Cookies.get( 'theme' ) || 'light'
		const selectedTheme = cookieTheme === 'light'
			? lightTheme
			: ( cookieTheme === 'dark' )
				? darkTheme
				: customTheme

		setCurrentTheme( selectedTheme )
	}, [] )

	return (
		<ThemeProvider theme={ currentTheme }>
			<CssBaseline/>
			<Component { ...pageProps } />
		</ThemeProvider>
	)
}

App.getInitialProps = async ( appContext: AppContext ) => {
	const { theme } = appContext.ctx.req ? ( appContext.ctx.req as any ).cookies : { theme: 'light' }
	const validThemes = [ 'light', 'dark', 'custom' ]

	return {
		theme: validThemes.includes( theme ) ? theme : 'dark'
	}
}

export default App
