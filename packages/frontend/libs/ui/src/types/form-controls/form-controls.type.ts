import { FormControl } from '@angular/forms';

/**
 * Creates a type for Angular FormGroup controls, where each property of `T` becomes a `FormControl`.
 * @template T Data model for the form.
 * @example FormGroupControls<{ name: string; age: number }>
 */
export type FormGroupControls<T> ={
  [key in keyof T]: FormControl<T[key] | null>;
}