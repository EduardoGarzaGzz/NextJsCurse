import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined'

import InboxOutlinedIcon                                                                from '@mui/icons-material/InboxOutlined'
import { Box, Divider, Drawer, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material'
import { FC, useContext }                                                               from 'react'
import { UIContext }                                                                    from '../../context/ui'

const menuItem: string[] = [ 'Inbox', 'Starred', 'Send Email', 'Drafts' ]

export const Sidebar: FC = ( {} ) => {

	const { sideMenuOpen, closeSideMenu } = useContext( UIContext )

	return (
		<Drawer anchor={ 'left' } open={ sideMenuOpen } onClose={ closeSideMenu }>
			<Box sx={ { width: 250 } }>
				<Box sx={ { padding: '5px 10px' } }>
					<Typography variant={ 'h4' }>Menu</Typography>
				</Box>
				<List>
					{
						menuItem.map( ( txt, idx ) => (
							<ListItem key={ idx }>
								<ListItemIcon>
									{ idx % 2 ? <InboxOutlinedIcon /> : <EmailOutlinedIcon /> }
								</ListItemIcon>
								<ListItemText primary={ txt } />
							</ListItem>
						) )
					}
				</List>
				<Divider />
				<List>
					{
						menuItem.map( ( txt, idx ) => (
							<ListItem key={ idx }>
								<ListItemIcon>
									{ idx % 2 ? <InboxOutlinedIcon /> : <EmailOutlinedIcon /> }
								</ListItemIcon>
								<ListItemText primary={ txt } />
							</ListItem>
						) )
					}
				</List>
			</Box>
		</Drawer>
	)

}
