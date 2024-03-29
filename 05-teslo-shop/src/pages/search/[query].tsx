import React, { FC } from "react";
import { ShopLayout } from "@/components/layouts";
import { Box, Typography } from "@mui/material";
import { ProductList } from "@/components/products";
import { dbProducts } from "@/database";
import { GetServerSideProps } from "next";
import { IProduct } from "@/interfaces";

interface Props {
	children?: React.ReactNode
	products: IProduct[]
	query: string
	foundProducts: boolean
}

const SearchPage: FC<Props> = ( { products, query, foundProducts } ) => {
	return (
		<ShopLayout title={ 'Teslo-Shop - Home' }
					pageDescription={ 'Encuentra los mejores productos de teslo aqui' }>
			<Typography variant={ 'h1' } component={ 'h1' }>Buscar producto</Typography>
			{
				foundProducts
					? <Typography variant={ 'h2' } sx={ { mb: 1 } } textTransform={ 'capitalize' }>
						Termino: { query }
					</Typography>
					: <Box display={ 'flex' }>
						<Typography variant={ 'h2' } sx={ { mb: 1 } }>
							No encontramos ningún producto
						</Typography>
						<Typography variant={ 'h2' } sx={ { ml: 1 } } color={ 'secondary' }>{ query }</Typography>
					</Box>
			}
			<ProductList products={ products }/>
		</ShopLayout>
	)
}

export const getServerSideProps: GetServerSideProps = async ( { params } ) => {
	const { query = '' } = params as { query: string }

	if ( query.length === 0 ) {
		return {
			redirect: {
				destination: '/',
				permanent: true
			}
		}
	}

	let products = await dbProducts.getProductsByTerm( query )
	const foundProducts = products.length > 0

	if ( !foundProducts ) {
		products = await dbProducts.getAllProducts()
	}

	return {
		props: {
			products,
			query,
			foundProducts
		}
	}
}

export default SearchPage
