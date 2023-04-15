import { ChangeEvent, FC, useEffect, useState } from "react";
import { Layout } from "@/components/layout";
import { Button, Card, CardContent, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from "@mui/material";
import Cookies from 'js-cookie'
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import axios from "axios";

interface Props {
	theme: string
}

export const ThemeChangerPage: FC<Props> = ( { theme } ) => {
	const [ currentTheme, setCurrentTheme ] = useState( theme )
	const onThemeChange = ( event: ChangeEvent<HTMLInputElement> ) => {
		const selectedTheme = event.target.value

		setCurrentTheme( selectedTheme )
		localStorage.setItem( 'theme', selectedTheme )
		Cookies.set( 'theme', selectedTheme )
	}

	useEffect( () => {
		const selectedTheme = localStorage.getItem( 'theme' )
	}, [] )

	const onClick = async () => {
		const { data } = await axios.get( '/api/hello' )
		console.log( { data } )
	}

	return (
		<Layout>
			<Card>
				<CardContent>
					<FormControl>
						<FormLabel>Tema</FormLabel>
						<RadioGroup value={ currentTheme } onChange={ onThemeChange }>
							<FormControlLabel control={ <Radio/> } label={ 'Light' } value={ 'light' }/>
							<FormControlLabel control={ <Radio/> } label={ 'Dark' } value={ 'dark' }/>
							<FormControlLabel control={ <Radio/> } label={ 'Custom' } value={ 'custom' }/>
						</RadioGroup>
					</FormControl>
					<Button onClick={ onClick }>
						Solicitud
					</Button>
				</CardContent>
			</Card>
		</Layout>
	)
}

export const getServerSideProps: GetServerSideProps = async ( { req }: GetServerSidePropsContext ) => {
	const { theme = 'light', name = 'No name' } = req.cookies
	const validThemes = [ 'light', 'dark', 'custom' ]

	return {
		props: {
			theme: validThemes.includes( theme ) ? theme : 'light',
			name
		}
	}
}

export default ThemeChangerPage
