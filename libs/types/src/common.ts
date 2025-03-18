export type Exact<T, U> = U extends T ? (T extends U ? U : never) : never;
