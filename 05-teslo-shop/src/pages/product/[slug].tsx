import React, { FC } from "react";
import { ShopLayout } from "@/components/layouts";
import { Box, Button, Chip, Grid, Typography } from "@mui/material";
import ProductSlideshow from "@/components/products/ProductSlideshow";
import ItemCounter from "@/components/ui/ItemCounter";
import SizeSelector from "@/components/products/SizeSelector";
import { IProduct } from "@/interfaces";
import { dbProducts } from "@/database";
import { GetStaticPaths, GetStaticProps } from "next";

interface Props {
	children?: React.ReactNode
	product: IProduct
}

const ProductDetail: FC<Props> = ( { product } ) => {
	return (
		<ShopLayout title={ product.title } pageDescription={ product.description }>
			<Grid container spacing={ 3 }>
				<Grid item xs={ 12 } sm={ 7 }>
					<ProductSlideshow images={ product.images }/>
				</Grid>
				<Grid item xs={ 12 } sm={ 5 }>
					<Box display={ 'flex' } flexDirection={ 'column' }>
						<Typography variant={ 'h1' } component={ 'h1' }>{ product.title }</Typography>
						<Typography variant={ 'subtitle1' } component={ 'h2' }>{ `$ ${ product.price }` }</Typography>
						<Box sx={ { my: 2 } }>
							<Typography variant={ 'subtitle2' }>Cantidad</Typography>
							<ItemCounter/>
							<SizeSelector selectedSize={ undefined } sizes={ product.sizes }/>
						</Box>
						<Button color={ 'secondary' } className={ 'circular-btn' }>Agregar al carrito</Button>
						<Chip label={ 'No hay disponibles' } color={ 'error' } variant={ 'outlined' }/>
						<Box sx={ { mt: 3 } }>
							<Typography variant={ 'subtitle2' }>Descripcion</Typography>
							<Typography variant={ 'body2' }>{ product.description }</Typography>
						</Box>
					</Box>
				</Grid>
			</Grid>
		</ShopLayout>
	)
}

export const getStaticPaths: GetStaticPaths = async () => {
	const productSlugs = await dbProducts.getAllProductsSlug()
	const paths = productSlugs.map( ( { slug } ) => ( { params: { slug } } ) )

	return {
		paths,
		fallback: 'blocking'
	}
}

export const getStaticProps: GetStaticProps = async ( { params } ) => {
	const { slug = '' } = params as { slug: string }
	const product = await dbProducts.getProductBySlug( slug )

	if ( !product ) {
		return {
			redirect: {
				destination: '/',
				permanent: false
			}
		}
	}

	return {
		props: {
			product: product
		},
		revalidate: 60 * 60 * 24
	}
}

export default ProductDetail
