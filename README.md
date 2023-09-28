# UKPN website

Below you'll find instruction on setting up the project locally and how to run a production build.

## Getting started

### Environment variables

The project needs certain environment variables to run.

Copy the `.env.sample` file to `.env.local` in the root directory of the project.

Values can be found in LastPass under Shared-Ukpn > "UKPN Redwing local envs"

### Node version

Make sure you are using the correct Node version set in the `.nvmrc` file.

It's recommended to use [nvm](https://github.com/nvm-sh/nvm) to easily switch node version in the terminal.

Once you have `nvm`, installed you can run `nvm use` in the project root to switch the the correct node version (specified in `.nvmrc`).

If you need to install that specific version of node, you can do so with `nvm install <node-version>`. e.g. `nvm install 14.17.3`

### Install dependencies:

```
npm install
```

### Running the development site

```
npm run dev
```

### Running tests

Once:

```
npm run test
```

### Production

To create a production build for deployment run:

```
npm run build
```

This can then be started using the command:

```
npm run start
```

## Code style

See https://ukpn.visualstudio.com/Redwing/_wiki/wikis/Redwing.wiki/117/Linting-and-Formatting
