# This repository's code was moved to [this monorepo](https://github.com/vangware/libraries/tree/main/packages/@vangware/prompts).

<img id="logo" alt="Prompts by Vangware" src="./logo.svg" height="128" />

![Coverage][coverage-badge] ![License][license-badge]
![NPM Version][npm-version-badge] ![Open Issues][open-issues-badge]

⁉️ CLI interactive prompts. Can be used to wrap anything that matches the
interface of `node:readline/promises`.

## Usage

### 📦 Node

Install `@vangware/prompts` as a dependency:

```bash
pnpm add @vangware/prompts
# or
npm install @vangware/prompts
# or
yarn add @vangware/prompts
```

Import it and use it:

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

### 🦕 Deno

Import `@vangware/prompts` using the `npm:` prefix, and use it directly with the
native `prompt`:

```typescript
import { question } from "npm:@vangware/prompts";

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

### 🌎 Browser

Import `@vangware/prompts` using [esm.sh][esm.sh], and use it directly with the
native `prompt`:

```javascript
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

## Useful links

-   📝 [Documentation][documentation]: TypeDoc generated documentation.
-   ⏳ [Changelog][changelog]: List of changes between versions.
-   ✅ [Tests Coverage][coverage]: Coveralls page with tests coverage.

<!-- Reference -->

[changelog]: https://github.com/vangware/prompts/blob/main/CHANGELOG.md
[coverage-badge]:
	https://img.shields.io/coveralls/github/vangware/prompts.svg?style=for-the-badge&labelColor=666&color=0a8&link=https://coveralls.io/github/vangware/prompts
[coverage]: https://coveralls.io/github/vangware/prompts
[deno]: https://deno.land/
[documentation]: https://prompts.vangware.com
[esm.sh]: https://esm.sh
[license-badge]:
	https://img.shields.io/npm/l/@vangware/prompts.svg?style=for-the-badge&labelColor=666&color=0a8&link=https://github.com/vangware/prompts/blob/main/LICENSE
[npm-version-badge]:
	https://img.shields.io/npm/v/@vangware/prompts.svg?style=for-the-badge&labelColor=666&color=0a8&link=https://npm.im/@vangware/prompts
[open-issues-badge]:
	https://img.shields.io/github/issues/vangware/prompts.svg?style=for-the-badge&labelColor=666&color=0a8&link=https://github.com/vangware/prompts/issues
[typedoc]: https://typedoc.org/
[vscode]: https://code.visualstudio.com/
