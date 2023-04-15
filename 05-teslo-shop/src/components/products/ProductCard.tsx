import React, { FC, useMemo, useState } from "react";
import { Box, Card, CardActionArea, CardMedia, Grid, Link, Typography } from "@mui/material";
import { IProduct } from "@/interfaces";
import NextLink from "next/link";

interface Props {
	product: IProduct
}

export const ProductCard: FC<Props> = ( { product } ) => {
	const [ isHovered, setIsHovered ] = useState( false )
	const productImage = useMemo( () => {
		return isHovered
			? `products/${ product.images[ 1 ] }`
			: `products/${ product.images[ 0 ] }`
	}, [ isHovered ] )

	return (
		<Grid item xs={ 6 } sm={ 4 }
			  key={ product.slug }
			  onMouseLeave={ () => setIsHovered( false ) }
			  onMouseEnter={ () => setIsHovered( true ) }>
			<Card>
				<NextLink href={ '/product/slug' }>
					<Link component={ 'div' }>
						<CardActionArea>
							<CardMedia component={ 'img' }
									   alt={ product.title }
									   image={ productImage }/>
						</CardActionArea>
					</Link>
				</NextLink>
			</Card>
			<Box sx={ { mt: 1 } } className={ 'fadeIn' }>
				<Typography fontWeight={ 700 }>{ product.title }</Typography>
				<Typography fontWeight={ 500 }>{ `$ ${ product.price }` }</Typography>
			</Box>
		</Grid>
	)
}
