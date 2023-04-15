import React, { FC } from "react";
import { ShopLayout } from "@/components/layouts";
import { Box, Button, Card, CardContent, Chip, Divider, Grid, Link, Typography } from "@mui/material";
import CartList from "@/components/cart/CartList";
import NextLink from "next/link";
import OrderSummary from "@/components/cart/OrderSummary";
import CreditCardOffOutlined from "@mui/icons-material/CreditCardOffOutlined";
import CreditScoreOutlined from "@mui/icons-material/CreditScoreOutlined";

interface Props {
	children?: React.ReactNode
}

const OrderPage: FC<Props> = ( {} ) => {
	return (
		<ShopLayout title={ 'Resumen de la orden 4234324324' } pageDescription={ 'Resumen de la orden' }>
			<Typography variant={ 'h1' } component={ 'h1' }>Orden ABC 123123123</Typography>
			<Chip sx={ { my: 2 } }
				  icon={ <CreditCardOffOutlined/> }
				  label={ 'Pendiente de pago' }
				  color={ 'error' }
				  variant={ 'outlined' }/>
			<Chip sx={ { my: 2 } }
				  icon={ <CreditScoreOutlined/> }
				  label={ 'Pagada' }
				  color={ 'success' }
				  variant={ 'outlined' }/>
			<Grid container>
				<Grid item xs={ 12 } sm={ 7 }>
					<CartList/>
				</Grid>
				<Grid item xs={ 12 } sm={ 5 }>
					<Card className={ 'summary-card' }>
						<CardContent>
							<Typography variant={ 'h2' }>Resumen (3 productos)</Typography>
							<Divider sx={ { my: 1 } }/>
							<Box display={ 'flex' } justifyContent={ 'end' }>
								<NextLink href={ '/checkout/address' }>
									<Link component={ 'span' } underline={ 'always' }>
										<Typography>Editar</Typography>
									</Link>
								</NextLink>
							</Box>
							<Typography variant={ 'subtitle1' }>Direccion de entrega</Typography>
							<Typography>Nombre de usuario</Typography>
							<Typography>323 Algun lugar</Typography>
							<Typography>Stittsiviefw, HYA 233</Typography>
							<Typography>+1 23423432432</Typography>
							<Divider sx={ { my: 1 } }/>
							<Box display={ 'flex' } justifyContent={ 'end' }>
								<NextLink href={ '/cart' }>
									<Link component={ 'span' } underline={ 'always' }>
										<Typography>Editar</Typography>
									</Link>
								</NextLink>
							</Box>
							<OrderSummary/>
							<Box sx={ { mt: 3 } }>
								<Button color={ 'secondary' } className={ 'circular-btn' }>
									Confirmar orden
								</Button>
								<Chip sx={ { my: 2 } }
									  icon={ <CreditScoreOutlined/> }
									  label={ 'Pagada' }
									  color={ 'success' }
									  variant={ 'outlined' }/>
							</Box>
						</CardContent>
					</Card>
				</Grid>
			</Grid>
		</ShopLayout>
	)
}

export default OrderPage
