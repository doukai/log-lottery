import antfu from '@antfu/eslint-config'

export default antfu(
  {
    ignores: ['**/node_modules', '**/public', '**/dist', '**/package.json', '**/*.yaml', '**/.gitignore', '**/.env*', '**/tsconfig*'],
  },
  {
    rules: {
      'no-console': [1],
      'max-len': ['error', {
        code: 120,
        tabWidth: 2,
        ignoreComments: false,
        ignoreTrailingComments: true,
        ignoreUrls: false,
        ignoreStrings: false,
        ignoreTemplateLiterals: false,
        wrapAttributesIndentSize: 80,
        wrapAttributesIgnoreList: ['vue/max-attributes-per-line'],
      }],
    },
  },
)
