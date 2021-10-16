export interface ComponentBaseProps {
	className?: string
}

export type Store<T = any> = {
	[key: string]: T
}

export type FnActionProps<T = any> = (args?: T) => void

export type FnActionRequiredProps<T> = (args: T) => void

export type FnActionAsyncProps<T = any, D = void> = (args?: T) => Promise<D>

export type FnActionAsyncRequiredProps<T, D = void> = (args: T) => Promise<D>

export type UrlParamsBaseProps<Params extends string | number | symbol> =
	Partial<Record<Params, string>>

export type DeepPartial<T> = {
	[P in keyof T]?: DeepPartial<T[P]>
}

export type Optional<T, K extends keyof T> = Pick<Partial<T>, K> & Omit<T, K>
