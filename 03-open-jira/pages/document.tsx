import Document, { DocumentContext, Head, Html, Main, NextScript } from 'next/document'

class AppDocument extends Document {
	static async getInitialProps( ctx: DocumentContext ) {
		return await Document.getInitialProps( ctx )
	}

	public render(): JSX.Element {
		return (
			<Html>
				<Head>
					<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}

export default AppDocument
