import React, { FC } from "react";
import { Box, IconButton, Typography } from "@mui/material";
import RemoveCircleOutline from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlined from "@mui/icons-material/AddCircleOutlined";

interface Props {
	children?: React.ReactNode
}

const ItemCounter: FC<Props> = ( {} ) => {
	return (
		<Box display={ 'flex' } alignItems={ 'center' }>
			<IconButton>
				<RemoveCircleOutline/>
			</IconButton>
			<Typography sx={ { width: 40, textAlign: 'center' } }>1</Typography>
			<IconButton>
				<AddCircleOutlined/>
			</IconButton>
		</Box>
	)
}

export default ItemCounter
