import React, { FC } from "react";
import { ShopLayout } from "@/components/layouts";
import { Chip, Grid, Link, Typography } from "@mui/material";
import { DataGrid, GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import NextLink from "next/link";

interface Props {
	children?: React.ReactNode
}

const columns: GridColDef[] = [
	{ field: 'id', headerName: 'ID', width: 100 },
	{ field: 'fullname', headerName: 'Nombre completo', width: 300 },
	{
		field: 'paid',
		headerName: 'Pagada',
		description: 'Muestra informacion si esta pagada o no',
		width: 200,
		renderCell: ( params: GridRenderCellParams ) => {
			return (
				params.row.paid
					? <Chip color={ 'success' } label={ 'Pagada' } variant={ 'outlined' }/>
					: <Chip color={ 'error' } label={ 'No Pagada' } variant={ 'outlined' }/>
			)
		}
	},
	{
		field: 'order',
		headerName: 'Var order',
		width: 200,
		sortable: false,
		renderCell: ( params: GridRenderCellParams ) => {
			return (
				<NextLink href={ `/orders/${ params.row.id }` }>
					<Link component={ 'span' } underline={ 'always' }>
						Ver orden
					</Link>
				</NextLink>
			)
		}
	}
]

const rows = [
	{ id: 1, fullname: 'Fernando Herrera' }
]

const HistoryPage: FC<Props> = ( {} ) => {
	return (
		<ShopLayout title={ 'Historial de ordenes' } pageDescription={ 'Historial de ordenes del cliente' }>
			<Typography variant={ 'h1' } component={ 'h1' }>Historial de ordenes</Typography>

			<Grid container>
				<Grid item xs={ 12 } sx={ { height: 650, width: '100%' } }>
					<DataGrid columns={ columns }
							  rows={ rows }
							  initialState={ {
								  pagination: {
									  paginationModel: {
										  pageSize: 10
									  }
								  }
							  } }/>
				</Grid>
			</Grid>
		</ShopLayout>
	)
}

export default HistoryPage
