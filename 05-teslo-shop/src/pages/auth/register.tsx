import React, { FC } from "react";
import AuthLayout from "@/components/layouts/AuthLayout";
import { Box, Button, Grid, Link, TextField, Typography } from "@mui/material";
import NextLink from "next/link";

interface Props {
	children?: React.ReactNode
}

const RegisterPage: FC<Props> = ( {} ) => {
	return (
		<AuthLayout title={ 'Crear cuenta' }>
			<Box sx={ { width: 350, padding: '10px 20px' } }>
				<Grid container spacing={ 2 }>
					<Grid item xs={ 12 }>
						<Typography variant={ 'h1' } component={ 'h1' }>Crear cuenta</Typography>
					</Grid>
					<Grid item xs={ 12 }>
						<TextField label={ 'Nombre completo' } variant={ 'filled' } fullWidth/>
					</Grid>
					<Grid item xs={ 12 }>
						<TextField label={ 'Correo' } variant={ 'filled' } fullWidth/>
					</Grid>
					<Grid item xs={ 12 }>
						<TextField label={ 'Password' } variant={ 'filled' } fullWidth/>
					</Grid>
					<Grid item xs={ 12 }>
						<Button color={ 'secondary' } className={ 'circular-btn' } size={ 'large' } fullWidth>
							Registrarme
						</Button>
					</Grid>
					<Grid item xs={ 12 } display={ 'flex' } justifyContent={ 'end' }>
						<NextLink href={ '/auth/login' }>
							<Link component={ 'span' } underline={ 'always' }>
								Ya tengo cuenta?
							</Link>
						</NextLink>
					</Grid>
				</Grid>
			</Box>
		</AuthLayout>
	)
}

export default RegisterPage
