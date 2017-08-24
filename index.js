'use strict';

module.exports = {
  extends: 'airbnb-base',
  rules: {
    'consistent-return': ['error', { treatUndefinedAsUnspecified: true }],
    'max-len': [
      'error',
      120, // max line length
      2, // tab width
      {
        ignoreUrls: true,
        ignoreComments: false,
        ignoreRegExpLiterals: true,
        ignoreStrings: false,
        ignoreTemplateLiterals: false,
      },
    ],
    'no-void': 'off',
    'comma-dangle': [
      'error', {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'never',
      },
    ],
  },
};
