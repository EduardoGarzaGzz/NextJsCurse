import AddCircleOutlineOutlinedIcon  from '@mui/icons-material/AddCircleOutlineOutlined'
import SaveOutlinedIcon              from '@mui/icons-material/SaveOutlined'
import { Box, Button, TextField }    from '@mui/material'
import { ChangeEvent, FC, useState } from 'react'

export const NewEntry: FC = () => {
	const [ isAdding, setIsAdding ]     = useState( false )
	const [ inputValue, setInputValue ] = useState( '' )
	const [ touched, setTouched ]       = useState( false )
	const onTextFieldChanged            = ( event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement> ) => {
		setInputValue( event.target.value )
	}
	const onSave                        = () => {

	}

	return (
		<Box sx={ { marginBottom: 2, paddingX: 2 } }>
			{
				isAdding
				? ( <>
					<TextField fullWidth placeholder={ 'Nueva entrada' } autoFocus multiline label={ 'Nuevo entrada' }
							   error={ inputValue.length <= 0 && touched }
							   value={ inputValue }
							   onChange={ onTextFieldChanged }
							   onBlur={ () => setTouched( true ) }
							   helperText={ inputValue.length <= 0 && touched && 'Ingrese un valor' } sx={ {
						marginTop   : 2,
						marginBottom: 1
					} } />
					<Box display={ 'flex' } justifyContent={ 'space-between' }>
						<Button onClick={ () => setIsAdding( false ) } variant={ 'text' }>Cancelar</Button>
						<Button onClick={ onSave } variant={ 'outlined' } color={ 'secondary' }
								endIcon={ <SaveOutlinedIcon /> }>Guardar</Button>
					</Box>
				</> )
				: ( <Button onClick={ () => setIsAdding( true ) } fullWidth variant={ 'outlined' }
							startIcon={ <AddCircleOutlineOutlinedIcon /> }> Agregar Tarea </Button> )
			}
		</Box>
	)
}
