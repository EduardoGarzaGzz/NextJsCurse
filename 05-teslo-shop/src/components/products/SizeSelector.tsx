import React, { FC } from "react";
import { ISize } from "@/interfaces";
import { Box, Button } from "@mui/material";

interface Props {
	selectedSize?: ISize
	sizes: ISize[]
	children?: React.ReactNode
}

const SizeSelector: FC<Props> = ( { selectedSize, sizes } ) => {
	console.log( 'S', sizes )
	return (
		<Box>
			{
				sizes.map( size => (
					<Button key={ size }
							color={ ( selectedSize === size ) ? 'primary' : 'info' }
							size={ 'small' }>
						{ size }
					</Button>
				) )
			}
		</Box>
	)
}

export default SizeSelector
