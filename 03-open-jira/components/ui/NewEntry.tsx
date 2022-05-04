import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined'
import SaveOutlinedIcon             from '@mui/icons-material/SaveOutlined'
import { Box, Button, TextField }   from '@mui/material'
import { FC }                       from 'react'

export const NewEntry: FC = () => {

	return (
		<Box sx={ { marginBottom: 2, paddingX: 2 } }>
			<Button fullWidth variant={ 'outlined' } startIcon={ <AddCircleOutlineOutlinedIcon /> }> Agregar Tarea</Button>
			<TextField fullWidth placeholder={ 'Nueva entrada' } autoFocus multiline label={ 'Nuevo entrada' }
					   helperText={ 'Ingrese un valor' } sx={ {
				marginTop   : 2,
				marginBottom: 1
			} } />
			<Box display={ 'flex' } justifyContent={ 'space-between' }>
				<Button variant={ 'text' }>Cancelar</Button>
				<Button variant={ 'outlined' } color={ 'secondary' } endIcon={ <SaveOutlinedIcon /> }>Guardar</Button>
			</Box>
		</Box>
	)
}
