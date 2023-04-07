<img alt="Vangware's Prompts logo" src="./logo.svg" height="128" />

![Coverage][coverage-badge] ![License][license-badge]
![NPM Version][npm-version-badge] ![Open Issues][open-issues-badge]

❓ CLI interactive prompts. Can be used to wrap anything that matches the
interface of Node's question.

## Usage

First:

```bash
# If you use npm
npm install @vangware/prompts
# If you use pnpm
pnpm add @vangware/prompts
# If you use yarn
yarn add @vangware/prompts
```

And then:

```js
import { question } from "@vangware/prompts";
import { createInterface } from "node:readline/promises";

const exampleQuestion = question(
	createInterface({
		input: process.stdin,
		output: process.stdout,
	}),
);

exampleQuestion({
	format: value => parseInt(value, 18),
	query: "How old are you?",
	validate: value => (value < 18 ? "You must be at least 18 years old." : ""),
})
	.then(console.log)
	.catch(console.error)
	.finally(() => readlineInterface.close());
```

Can be used in a browser environment by emulating the Node API. For example:

```js
import { question } from "https://esm.sh/@vangware/prompts";

const exampleQuestion = question({
	question: query => Promise.resolve(prompt(query)),
});

exampleQuestion({
	format: value => parseInt(value, 18),
	query: "How old are you?",
	validate: value => (value < 18 ? "You must be at least 18 years old." : ""),
})
	.then(console.log)
	.catch(console.error);
```

## Documentation

Documentation is available [HERE][documentation]. It is auto-generated with
[typedoc][typedoc] based on the JSDocs and the types in the source. It shouldn't
be necessary to read this. Code editors like [VS Code][vscode] integrate the
documentation in the UI.

## Changelog

Changelog can be found [HERE][changelog].

## Test coverage

Test coverage can be found [HERE][coverage].

<!-- Reference -->

[changelog]: https://github.com/vangware/prompts/blob/main/CHANGELOG.md
[coverage-badge]:
	https://img.shields.io/coveralls/github/vangware/prompts.svg?style=for-the-badge&labelColor=666&color=0a8&link=https://coveralls.io/github/vangware/prompts
[coverage]: https://coveralls.io/github/vangware/prompts
[deno]: https://deno.land/
[documentation]: https://prompts.vangware.com
[license-badge]:
	https://img.shields.io/npm/l/@vangware/prompts.svg?style=for-the-badge&labelColor=666&color=0a8&link=https://github.com/vangware/prompts/blob/main/LICENSE
[npm-version-badge]:
	https://img.shields.io/npm/v/@vangware/prompts.svg?style=for-the-badge&labelColor=666&color=0a8&link=https://npm.im/@vangware/prompts
[open-issues-badge]:
	https://img.shields.io/github/issues/vangware/prompts.svg?style=for-the-badge&labelColor=666&color=0a8&link=https://github.com/vangware/prompts/issues
[typedoc]: https://typedoc.org/
[vscode]: https://code.visualstudio.com/
