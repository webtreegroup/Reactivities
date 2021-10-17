import { ActivityProps } from 'core/types'
import { requests } from './api'

const BASE_URL = '/activities'

export const ActivityApi = {
    list: () => requests.get<ActivityProps[]>(BASE_URL)
}
