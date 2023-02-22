import type { QuestionOptions } from "./QuestionOptions.js";

/**
 * Small abstraction layer on top the `question` method of Node's `readline` module.
 *
 * @example
 * ```typescript
 * import { createInterface } from "node:readline/promises";
 *
 * question({
 * 	format: value => parseInt(value, 18),
 * 	query: "How old are you?",
 * 	readlineInterface: createInterface({
 * 		input: process.stdin,
 * 		output: process.stdout,
 * 	}),
 * 	validate: value => (value < 18 ? "You must be at least 18 years old." : ""),
 * }).then(console.log).catch(console.error);
 * ```
 * @param options Options object for the question.
 * @returns Promise with the question's answer.
 */
export const question = <FormattedValue = string>({
	format,
	query,
	readlineInterface,
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
				? question({
						format,
						query: validationError,
						readlineInterface,
						retry,
						validate,
				  })
				: Promise.reject(validationError)
			: formattedValue;
	});
