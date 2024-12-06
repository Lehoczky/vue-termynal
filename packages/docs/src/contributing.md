# Contributing

## Initial setup

First [fork](https://docs.github.com/en/get-started/quickstart/fork-a-repo) the Vue-Termynal repository then clone and build your fork locally. Run the following commands:

```sh
git clone https://github.com/your-username/vue-termynal.git
pnpm install
```

## Development

### Running your code

During development you can test your work in the `playground` folder. You can start the app inside it by running:

```sh
pnpm -F playground dev
```

### Lint errors

The project uses [ESlint](https://eslint.org/), [stylelint](https://stylelint.io/) and [prettier](https://prettier.io/) to ensure good code quality and consistent formatting. You can check your code with one simple command:

```sh
pnpm lint
```

I highly recommend installing the IDE extensions for these tools to see any errors during development.

## After you finish

### Documentation

Please check the docs (and if needed), document your changes and add new examples. The following command starts to the documentation site locally:

```sh
pnpm -F docs dev
```
