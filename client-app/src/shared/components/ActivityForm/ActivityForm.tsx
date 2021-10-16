import { ActivityProps } from 'core/types'
import React, { ChangeEvent, useCallback, useEffect, useState } from 'react'
import { Button, Form, Segment } from 'semantic-ui-react'
import { withActivitiesDetails } from 'shared/HOCs'
import { ContainerChildProps } from 'shared/HOCs/withActivitiesDetails/withActivitiesDetails.types'
import { ActivityFormProps } from './ActivityForm.types'

export const ActivityFormComponent: React.FC<
	ActivityFormProps & ContainerChildProps
> = React.memo(({ onCancelEditActivity, data, isActivityEdit }) => {
	const [values, setValues] = useState<Partial<ActivityProps | undefined>>(data)

	const handleFieldChange = useCallback(
		({ target }: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
			setValues((prev) => {
				return { ...prev, [target.name]: target.value }
			})
		},
		[]
	)

	const getFieldProps = useCallback(
		(fieldName: keyof ActivityProps) => {
			return {
				onChange: handleFieldChange,
				name: fieldName,
				placeholder: fieldName,
				value: values?.[fieldName],
			}
		},
		[handleFieldChange, values]
	)

	const handleSaveActivity = useCallback(() => {
		console.log(values)
	}, [values])

	useEffect(() => {
		!isActivityEdit &&
			setValues({
				title: '',
				description: '',
				category: '',
				date: '',
				city: '',
				venue: '',
			})
	}, [isActivityEdit])

	return (
		<Segment clearing>
			<Form autoComplete="off" onSubmit={handleSaveActivity}>
				<Form.Input {...getFieldProps('title')} />

				<Form.TextArea {...getFieldProps('description')} />

				<Form.Input {...getFieldProps('category')} />

				<Form.Input {...getFieldProps('date')} />

				<Form.Input {...getFieldProps('city')} />

				<Form.Input {...getFieldProps('venue')} />

				<Button floated="right" positive type="submit" content="save" />

				<Button
					onClick={onCancelEditActivity}
					floated="right"
					type="button"
					content="cancel"
				/>
			</Form>
		</Segment>
	)
})

export const ActivityForm = withActivitiesDetails<ActivityFormProps>(
	ActivityFormComponent
)
