import React from 'react'
import { Button, Card, Image } from 'semantic-ui-react'
import { ActivitiesDetailsProps } from './ActivitiesDetails.types'
import styles from './ActivitiesDetails.module.css'
import { withActivitiesDetails } from 'shared/HOCs'
import { ContainerChildProps } from 'shared/HOCs/withActivitiesDetails/withActivitiesDetails.types'

export const ActivitiesDetailsComponent: React.FC<
	ActivitiesDetailsProps & ContainerChildProps
> = React.memo(({ onCloseActivity, onEditActivity, data }) => {
	return (
		<Card fluid>
			<Image
				className={styles.image}
				src="https://etosibir.ru/wp-content/uploads/2016/04/tajga.jpg"
				wrapped
				ui={false}
			/>

			<Card.Content>
				<Card.Header>{data?.title}</Card.Header>

				<Card.Meta>
					<span className="date">{data?.date}</span>
				</Card.Meta>

				<Card.Description>{data?.description}</Card.Description>
			</Card.Content>

			<Card.Content extra>
				<Button.Group widths="2">
					<Button onClick={onEditActivity} basic color="blue" content="edit" />

					<Button
						onClick={onCloseActivity}
						basic
						color="grey"
						content="close"
					/>
				</Button.Group>
			</Card.Content>
		</Card>
	)
})

export const ActivitiesDetails = withActivitiesDetails<ActivitiesDetailsProps>(
	ActivitiesDetailsComponent
)
