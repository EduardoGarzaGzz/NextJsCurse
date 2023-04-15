import React, { FC } from "react";
import { Grid, Typography } from "@mui/material";

interface Props {
	children?: React.ReactNode
}

const OrderSummary: FC<Props> = ( {} ) => {
	return (
		<Grid container>
			<Grid item xs={ 6 }>
				<Typography>No. Productos</Typography>
			</Grid>
			<Grid item xs={ 6 } display={ 'flex' } justifyContent={ 'end' }>
				<Typography>3 items</Typography>
			</Grid>
			<Grid item xs={ 6 }>
				<Typography>SubTotal</Typography>
			</Grid>
			<Grid item xs={ 6 } display={ 'flex' } justifyContent={ 'end' }>
				<Typography>{ `$ ${ 134.30 }` }</Typography>
			</Grid>
			<Grid item xs={ 6 }>
				<Typography>Impuesto (15%)</Typography>
			</Grid>
			<Grid item xs={ 6 } display={ 'flex' } justifyContent={ 'end' }>
				<Typography>{ `$ ${ 134.30 }` }</Typography>
			</Grid>
			<Grid item xs={ 6 } sx={ { mt: 2 } }>
				<Typography variant={ 'subtitle1' }>Total:</Typography>
			</Grid>
			<Grid item xs={ 6 } display={ 'flex' } justifyContent={ 'end' }>
				<Typography variant={ 'subtitle1' }>{ `$ ${ 134.30 }` }</Typography>
			</Grid>
		</Grid>
	)
}

export default OrderSummary
