import type { Interface } from "node:readline/promises";

/**
 * Options object for the `question` function.
 */
// eslint-disable-next-line functional/no-mixed-types
export type QuestionOptions<FormattedValue = string> = {
	/**
	 * Function to format the question's answer given by the user.
	 *
	 * @example
	 * ```typescript
	 * {
	 * 	format: value => parseInt(value, 18),
	 * }
	 * ```
	 * @param value The question's answer given by the user.
	 * @returns Formatted value.
	 */
	readonly format?: (value: string) => FormattedValue;
	/**
	 * Query to show to the user.
	 */
	readonly query: string;
	/**
	 * Node's `readline` interface.
	 */
	readonly readlineInterface: Interface;
	/**
	 * Whether to retry the question if the answer is invalid.
	 */
	readonly retry?: boolean;
	/**
	 * Function to validate the question's answer given by the user (after formatting).
	 * Returning an string will be used to reject with an error, while an empty
	 * string or undefined is considered valid.
	 *
	 * @example
	 * ```typescript
	 * {
	 * 	validate: value => value % 2 === 0,
	 * }
	 * ```
	 * @param value The question's answer given by the user.
	 * @returns Either an error, an empty string or undefined.
	 */
	readonly validate?: (value: FormattedValue) => string | undefined;
};
