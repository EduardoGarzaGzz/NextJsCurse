import React, { FC } from "react";
import Head from "next/head";
import { Box } from "@mui/material";

interface Props {
	title: string
	children?: React.ReactNode
}

const AuthLayout: FC<Props> = ( { title, children } ) => {
	return (
		<>
			<Head>
				<title>{ title }</title>
			</Head>
			<main>
				<Box display={ 'flex' }
					 justifyContent={ 'center' }
					 alignItems={ 'center' }
					 height={ 'calc(100vh - 200px)' }>
					{ children }
				</Box>
			</main>
		</>
	)
}

export default AuthLayout
