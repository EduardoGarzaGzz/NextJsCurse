import { CssBaseline }                                             from '@nextui-org/react'
import Document, { DocumentContext, Head, Html, Main, NextScript } from 'next/document'

class CustomDocument extends Document {

	static async getInitialProps( ctx: DocumentContext ) {
		const initialProps = await Document.getInitialProps( ctx )
		return {
			...initialProps,
			styles: <>{ initialProps.styles }</>
		}
	}

	public render(): JSX.Element {
		return (
			<Html lang={ 'es-MX' }>
				<Head>
					<title>Pokemon Static</title>
					{ CssBaseline.flush() }
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}

export default CustomDocument
