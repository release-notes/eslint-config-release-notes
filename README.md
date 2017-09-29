# Release Notes Coding Style

[![Subscribe to Release Notes](https://release-notes.com/badges/v1.svg)](https://release-notes.com/@release-notes/eslint-config-release-notes)

Extends [Airbnb JavaScript Style Guide][airbnb-js-styleguide] for use on [release-notes][release-notes] node projects.

## Installation

`$ npm i --save-dev @release-notes/eslint-config eslint eslint-plugin-import`

And add an `.eslintrc.yml` file:

```yml
extends: '@release-notes'

plugins:
  - import

env:
  es6: true
  node: true

parserOptions:
  sourceType: script
```

## Usage

Run `npm run lint` in order to test the codebase for coding standard violations.

---

### LICENSE

The files in this archive are released under MIT license.
You can find a copy of this license in [LICENSE](LICENSE).


[airbnb-js-styleguide]: https://github.com/airbnb/javascript
[release-notes]: https://github.com/release-notes/release-notes
