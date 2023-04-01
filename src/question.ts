import type { Interface } from "node:readline/promises";
import type { QuestionOptions } from "./QuestionOptions.js";

/**
 * Interactive question.
 *
 * @remarks
 * Small abstraction layer on top the `question` method of Node's `readline`
 * module.
 * @example
 * ```typescript
 * import { createInterface } from "node:readline/promises";
 *
 * const exampleQuestion = question(createInterface({
 * 	input: process.stdin,
 * 	output: process.stdout,
 * }));
 *
 * exampleQuestion({
 * 	format: value => parseInt(value, 18),
 * 	query: "How old are you?",
 * 	validate: value => (value < 18 ? "You must be at least 18 years old." : ""),
 * }).then(console.log).catch(console.error);
 * ```
 * @see {@link QuestionOptions}
 *
 * @param readlineInterface Readline interface to use (from node or mocked).
 * @returns Curried function with `readlineInterface` set in context.
 */
export const question =
	(readlineInterface: Interface) =>
	/**
	 * Interactive question with `readlineInterface` set in context.
	 *
	 * @see {@link question}
	 *
	 * @template FormattedValue Result of the value after formatting.
	 * @param options Options object for the question.
	 * @returns Promise with the question's answer.
	 */
	<FormattedValue = string>({
		format,
		query,
		retry = false,
		validate,
	}: QuestionOptions<FormattedValue>): Promise<FormattedValue> =>
		readlineInterface.question(`${query} `).then(value => {
			const formattedValue = (
				format !== undefined ? format(value) : value
			) as FormattedValue;
			const validationError = validate?.(formattedValue) ?? "";

			return validationError
				? retry
					? question(readlineInterface)({
							format,
							query: validationError,
							retry,
							validate,
					  })
					: Promise.reject(validationError)
				: formattedValue;
		});
