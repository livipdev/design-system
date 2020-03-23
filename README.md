<p align="center">
  <br>
   <img src="https://media.giphy.com/media/MvovQGsMBY9H2/giphy.gif" alt="A bunch of blocks squeezing" title="Design System header's GIF" />
  <br>
</p>
<p align="center">
Components package for our React applications
</p>

## 📖 About this Project

Many of our applications can use shared components. Also, all components from every application should follow the same design and code structure. That's why we've created this package. This is where most of our components live, in a way that we can import those in our applications, configure an duse them.

## 💾 Dependencies

To use this library, your application must have the following packages installed:

* [@material-ui/core](https://www.npmjs.com/package/@material-ui/core)
* [@material-ui/icons](https://www.npmjs.com/package/@material-ui/icons)

## 🤖 Getting Started

This is a monorepo, containing multiple interface components packages. Here is a short list of all our packages:

* [@livip/core](packages/core)

You can install each one of those packages with a simple `yarn add` or `npm install` command. This library is not yet deployed on any package manager. In order to use any of our packages in your application you may first run the following command on this package:

``` sh
yarn build
```

Then, you can install a package (`@livip/core`, on this example) with:

``` sh
yarn add <path-to-this-repo>/packages/core/dist
```

After installing it, you can import any of our components with:

``` javascript
import Box from '@livip/core';

...
```

And use it on your code! :)

**IMPORTANT:** Don't forget to install all [dependencies](#dependencies) for our components to properly run on your application.

## 🌱 Feature requests

You can see and create feature requests by navigating to the `issues` tab of this repository and filtering by the label `feature-request`(or simply [clicking here](https://github.com/livipdev/design-system/labels/feature-request)). There, you'll find major features that have been requested by our users in a broad scenario. Project-related features are created inside the specific project Github repository. Sometimes you can create a new feature request here and we may move it to a given tool that is the true owner of the context your feature is in, so don't worry if this happens to you.

Also, we've created a simple `feature-request` template, that should be imported as soon as you start a new issue. Please use that to make our triage easier :D

## ⏳ Pending features

Before opening a new feature request, please check out here all the pending features that we're already developing. Those features are not organized in any order, the list is only a place to see if your desired feature is being developed by us.

To view, all issues and feature request that our team is currently developing, go on the [selected-for-development](https://github.com/livipdev/design-system/labels/selected-for-development) tag on our issues tab.

## 🐛 Reporting bugs

You can create new bugs on the `issues` tab (or simply [clicking here](https://github.com/livipdev/design-system/issues)). Don't worry if you aren't sure if your bug relates to this project if there is another tool that is more related to the context behind your issue we're going to move it there.

We've created a template for issues, that contains multiple scenarios that you can use. Please use it to make our triage easier.

## 💻 Contributing

Contributions are what make our company such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**. You can learn how to contribute to this project on the [`CONTRIBUTING`](CONTRIBUTING.md) file.

## 🔗 Useful links

* [Material UI's website](https://material-ui.com/)

## 🔓 License

Distributed under the MIT License. See [`LICENSE`](LICENSE) for more information.
