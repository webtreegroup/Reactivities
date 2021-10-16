import React from 'react'
import { Button, Container, Icon, Menu } from 'semantic-ui-react'
import { NavigationProps } from './Navigation.types'

export const Navigation: React.FC<NavigationProps> = React.memo(
	({ onCreateActivity }) => {
		return (
			<Menu inverted fixed="top">
				<Container>
					<Menu.Item header>
						<Icon name="home" />
					</Menu.Item>

					<Menu.Item>Activities</Menu.Item>

					<Menu.Item>
						<Button
							content="Create Activity"
							positive
							onClick={onCreateActivity}
						/>
					</Menu.Item>
				</Container>
			</Menu>
		)
	}
)
