import { ActivityProps } from 'core/types'
import { ReactNode } from 'react'

export interface ContainerChildProps {
	id?: string
	data?: ActivityProps
	loader?: ReactNode
	isActivityEdit?: boolean
}
