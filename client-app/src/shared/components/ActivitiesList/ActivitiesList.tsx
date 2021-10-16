import React from 'react'
import axios from 'axios'
import { Button, Item, Label, Segment } from 'semantic-ui-react'
import { useQuery } from 'react-query'
import { ActivitiesListProps } from './ActivitiesList.types'
import { API_URL } from 'core/consts'
import { List as ListLoader } from 'react-content-loader'
import { ActivityProps } from 'core/types'

export const ActivitiesList: React.FC<ActivitiesListProps> = React.memo(
	({ onShowActivity }) => {
		const { isLoading, isError, data, error } = useQuery(
			'activities',
			async () => {
				const { data } = await axios.get<ActivityProps[]>(
					`${API_URL}/activities`
				)

				return data
			}
		)

		if (isError) {
			console.error(error)

			return <span>Error...</span>
		}

		if (isLoading) {
			return <ListLoader />
		}

		return (
			<Segment>
				<Item.Group divided>
					{data?.map((activity) => (
						<Item key={activity.id}>
							<Item.Content>
								<Item.Header as="a">{activity.title}</Item.Header>

								<Item.Meta>{activity.date}</Item.Meta>

								<Item.Description>
									<div>{activity.description}</div>

									<div>{activity.venue}</div>
								</Item.Description>

								<Item.Extra>
									<Button
										floated="right"
										content="View"
										color="blue"
										onClick={() => onShowActivity(activity.id)}
									/>

									<Label basic content={activity.category} />
								</Item.Extra>
							</Item.Content>
						</Item>
					))}
				</Item.Group>
			</Segment>
		)
	}
)
