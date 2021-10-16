import React, { PropsWithChildren, useEffect } from 'react'
import axios from 'axios'
import { useQuery } from 'react-query'
import { API_URL } from 'core/consts'
import { ActivityProps } from 'core/types'
import { ContainerChildProps } from './withActivitiesDetails.types'

export function withActivitiesDetails<T>(
	/** Дочерний компонент. */
	WrappedComponent: React.FC<T & Omit<ContainerChildProps, 'loader'>>
) {
	/** Компонент конейнер, содержит доп. логику. */
	return function (
		props: PropsWithChildren<T & Omit<ContainerChildProps, 'data'>>
	) {
		const { id, loader } = props

		const { isFetching, isError, data, error, refetch } = useQuery(
			'activity',
			async () => {
				const { data } = await axios.get<ActivityProps>(
					`${API_URL}/activities/${id}`
				)

				return data
			},
			{ enabled: false }
		)

		useEffect(() => {
			id && refetch()
		}, [id, refetch])

		if (isError) {
			console.error(error)

			return <span>error...</span>
		}

		if (isFetching) {
			return loader ? <>{loader}</> : <span>loading...</span>
		}

		return <WrappedComponent data={data} {...props} />
	}
}
