import React, { FC } from "react";
import { Box, CircularProgress, Typography } from "@mui/material";

interface Props {
	children?: React.ReactNode
}

const FullScreenLoading: FC<Props> = ( {} ) => {
	return (
		<Box display={ 'flex' }
			 flexDirection={ 'column' }
			 justifyContent={ 'center' }
			 alignItems={ 'center' }
			 height={ 'calc(100vh - 200px)' } sx={ {
			flexDirection: { xs: 'column', sm: 'row' }
		} }>
			<Typography variant={ 'h2' } component={ 'h2' } fontSize={ 60 } fontWeight={ 20 }>Cargando</Typography>
			<CircularProgress thickness={ 2 }/>
		</Box>
	)
}

export default FullScreenLoading
