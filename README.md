# Basic_Shop

Basic_Shop React project, shop for Ajvar

## Technologies

- [Git](https://git-scm.com/) - Version control system
- [Node](https://nodejs.org/en) - Runtime
- [NPM](https://www.npmjs.com/) - Package manager
- [Vite](https://vitejs.dev/) - Bundler
- [React](https://react.dev/) - Framework
- [Typescript](https://www.typescriptlang.org/) - Static types
- [ESLint](https://eslint.org/) - Linter
- [Prettier](https://prettier.io/) - Formatter
- [Husky](https://typicode.github.io/husky/) - Git hook helper
- [Commitlint](https://commitlint.js.org/) - Lint commit messages
- [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0-beta.2/) - Specification for commit messages
- [Lint Staged](https://github.com/okonet/lint-staged/) - Run linters and formatters against staged git files
- [Tailwindcss](https://tailwindcss.com/) - Styling
- [React Router](https://reactrouter.com/en/main/) - Routing
- [JSON server](https://github.com/typicode/json-server) - Server and Database
- [Concurrently](https://github.com/open-cli-tools/concurrently) - Run multiple commands concurrently

#### Loaders

- [SVGR](https://www.npmjs.com/package/vite-plugin-svgr) - SVG Loader

## Installation

Clone repository with command:

```sh
$ git clone git@github.com:NicknamerSRB/basic-shop.git
```

And enter cloned folder with command:

```sh
$ cd basic-shop
```

Then specify node version (It is recommend to use nvm for node version control) with command:

```sh
$ nvm use
```

And install dependencies with command:

```sh
$ npm install
```

## Development

Run dev server:

```sh
$ npm run dev
```

## Building and Testing

To build project use command:

```sh
$ npm run build
```

## Contributing

- Create a new feature branch

```sh
$ git checkout -b feat/<feature-name>
```

- Commit messages need to follow [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)

```sh
$ git add .
$ git commit -m '<type>[optional scope]: <description>'
```

- Open a pull request and once approved merge by squashing commits

- Optional: Rebase beforehand

```sh
$ git rebase master HEAD~<number-of-commits> -i
```
