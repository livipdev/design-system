# Contributing to Livip's Design System

It's awesome that you want to contribute to this repository! You can contribute in several ways, like:

* Creating new components
* Fixing existing bugs
* Improving documentation and examples

To help you on this journey we've created this document that will guide you through several steps, like [creating a new component](#creating-a-new-component), [setuping development environment](#setuping-development-environment) and [making a new release](#making-a-new-release).

## Table of contents

* [Contributing to Design System](#)
  * [How it works](#how-it-works)
  * [Setuping development Environment](#setuping-development-environment)
  * [Creating a new component](#creating-a-new-component)
  * [Making a new release](#making-a-new-release)
  * [Versioning](#versioning)


## How it works

Our design system is a monorepo, containing multiple packages. Each package contains a bunch of components that can be used on your applications. Here is a quick example of our architecture:

``` text
design-system
├── packages
| ├── core
| | ├── <component>
| | | ├── index.js
| | | └── ...
| | └── package.json
| ├── <package-name>
| └── ...
└── package.json
```

We're using [Lerna](https://lerna.js.org/) to manage our monorepo packages. As you may've notice, each package contains a different `package.json` file, that contains `dependencies` (only for that package), `peerDependencies`(for all packages) and `devDependencies`(only for that package).

After developing your components, you may run `yarn build` on the root folder to build all packages and transpile those. After that, each package will gain a `dist` folder that will contain the transpiled code that can be imported on your application.

We don't have any package manager yet, so you can simple do a `yarn add <path-to-design-system-repo>/package/<your-package>/<your-component>/dist` to add it as a dependency of your application. But, beware, you must install all dependencies [listed on README.md](./README.md#dependencies) before starting your application.

## Setuping development environment

To setup a new development environment, you can do the following:

### Prerequisites

* [NodeJS](https://nodejs.org/en/) or a Node version manager (I suggest [asdf](https://asdf-vm.com/#/))
* [Yarn](https://yarnpkg.com/)

### 1. Install all dependencies

``` sh
yarn install
```

### 2. Build packages

You can run this command everytime you've updated a new package

``` sh
yarn build
```

## Creating a new component

Creating a new component is pretty straightforward. The first thing you should do is see if there's already a package to place it. Don't create too much packages, problably you can put inside an existing one. If you need to create a new package you can simply create folder inside `packages`, copy the contents of `package.json` from an existing package and update the package name. You must follow the pattern:`@livipdev/<package-name>` to make easier for us to identify our own packages.

After that, you can create a new folder inside the package suits your component and create your component structure right there.

## Making a new release

_TODO_

## Versioning

We use [SemVer 2.0.0](https://semver.org/) for versioning our releases. Also, we use [Gitflow](https://danielkummer.github.io/git-flow-cheatsheet/) with [this awesome tool](https://github.com/nvie/gitflow) plus [Gitmoji](https://gitmoji.carloscuesta.me) to organize our commits/branches.
