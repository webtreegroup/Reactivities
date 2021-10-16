import React, { useCallback, useState } from 'react'
import { Navigation } from 'core/components'
import {
	ActivitiesDetails,
	ActivitiesList,
	ActivityForm,
	ActivityFormLoader,
} from 'shared/components'
import styles from './Main.module.css'
import { Container, Grid } from 'semantic-ui-react'
import { Instagram } from 'react-content-loader'

export const Main: React.FC = React.memo(() => {
	const [selectedActivityId, setSelectedActivityId] = useState<string>()
	const [activityFormVisible, setActivityFormVisible] = useState<boolean>()
	const [isActivityEdit, setActivityEdit] = useState<boolean>()

	const handleShowActivity = useCallback((id: string) => {
		setSelectedActivityId(id)
		setActivityFormVisible(false)
	}, [])

	const handleCloseActivity = useCallback(() => {
		setSelectedActivityId(undefined)
	}, [])

	const handleEditActivity = useCallback(() => {
		setActivityFormVisible(true)
		setActivityEdit(true)
	}, [])

	const handleCreateActivity = useCallback(() => {
		setActivityFormVisible(true)
		setActivityEdit(false)
	}, [])

	const handleCancelEditActivity = useCallback(() => {
		setActivityFormVisible(false)
	}, [])

	return (
		<div className={styles.wrapper}>
			<Navigation onCreateActivity={handleCreateActivity} />

			<Container>
				<Grid>
					<Grid.Column width="10">
						<ActivitiesList onShowActivity={handleShowActivity} />
					</Grid.Column>

					<Grid.Column width="6">
						{selectedActivityId && !activityFormVisible && (
							<ActivitiesDetails
								id={selectedActivityId}
								onEditActivity={handleEditActivity}
								onCloseActivity={handleCloseActivity}
								loader={<Instagram />}
							/>
						)}

						{activityFormVisible && (
							<ActivityForm
								isActivityEdit={isActivityEdit}
								id={selectedActivityId}
								onCancelEditActivity={handleCancelEditActivity}
								loader={<ActivityFormLoader />}
							/>
						)}
					</Grid.Column>
				</Grid>
			</Container>
		</div>
	)
})
