import Head from "next/head";
import { FC } from "react";
import { Navbar } from "@/components/ui/Navbar";

interface Props {
	children: any
}

export const Layout: FC<Props> = ( { children } ) => {
	return (
		<>
			<Head>

			</Head>
			<nav>
				<Navbar />
			</nav>
			<main style={ { padding: '20px 50px' } }>
				{ children }
			</main>
		</>
	)
}
