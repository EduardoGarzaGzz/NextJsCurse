import React, { FC } from "react";
import { ShopLayout } from "@/components/layouts";
import { Box, Button, Card, CardContent, Divider, Grid, Typography } from "@mui/material";
import CartList from "@/components/cart/CartList";
import OrderSummary from "@/components/cart/OrderSummary";

interface Props {
	children?: React.ReactNode
}

const CartPage: FC<Props> = ( {} ) => {
	return (
		<ShopLayout title={ '(3) Carrito' } pageDescription={ 'Carrito de compras de la tienda' }>
			<Typography variant={ 'h1' } component={ 'h1' }>Carrito</Typography>
			<Grid container>
				<Grid item xs={ 12 } sm={ 7 }>
					<CartList editable/>
				</Grid>
				<Grid item xs={ 12 } sm={ 5 }>
					<Card className={ 'summary-card' }>
						<CardContent>
							<Typography variant={ 'h2' }>Order</Typography>
							<Divider sx={ { my: 1 } }/>
							<OrderSummary/>
							<Box sx={ { mt: 3 } }>
								<Button color={ 'secondary' } className={ 'circular-btn' }>Checkout</Button>
							</Box>
						</CardContent>
					</Card>
				</Grid>
			</Grid>
		</ShopLayout>
	)
}

export default CartPage
