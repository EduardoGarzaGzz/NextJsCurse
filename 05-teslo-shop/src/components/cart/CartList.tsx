import React, { FC } from "react";
import { initialData } from "@/database/products";
import { Box, Button, CardActionArea, CardMedia, Grid, Link, Typography } from "@mui/material";
import NextLink from "next/link";
import ItemCounter from "@/components/ui/ItemCounter";

const productInCart = [
	initialData.products[ 0 ],
	initialData.products[ 1 ],
	initialData.products[ 2 ],
]

interface Props {
	editable?: boolean
	children?: React.ReactNode
}

const CartList: FC<Props> = ( { editable = false } ) => {
	return (
		<>
			{
				productInCart.map( product => (
					<Grid key={ product.slug } container spacing={ 2 } sx={ { mb: 1 } }>
						<Grid item xs={ 3 }>
							<NextLink href={ '/product/slug' }>
								<Link component={ 'span' }>
									<CardActionArea>
										<CardMedia image={ `/products/${ product.images[ 0 ] }` }
												   component={ 'img' }
												   sx={ {
													   borderRadius: '5px'
												   } }/>
									</CardActionArea>
								</Link>
							</NextLink>
						</Grid>
						<Grid item xs={ 7 }>
							<Box display={ 'flex' } flexDirection={ 'column' }>
								<Typography variant={ 'body1' }>{ product.title }</Typography>
								<Typography variant={ 'body2' }>Talla: <strong>M</strong></Typography>
								{
									editable
										? <ItemCounter/>
										: <Typography>3 items</Typography>
								}
							</Box>
						</Grid>
						<Grid item xs={ 2 } display={ 'flex' } alignItems={ 'center' } flexDirection={ 'column' }>
							<Typography variant={ 'subtitle1' }>{ `$ ${ product.price }` }</Typography>
							{ editable && (
								<Button variant={ 'text' } color={ 'secondary' }>Remover</Button>
							) }
						</Grid>
					</Grid>
				) )
			}
		</>
	)
}

export default CartList
