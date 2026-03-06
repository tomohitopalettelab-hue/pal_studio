# Template authoring rules

## Naming
- id: `template-<slug>` (kebab-case, lowercase, unique)
- file: `<slug>.ts`
- export: `<slug>Template` (camelCase)

## Tags
- lowercase English
- 2-6 tags per template
- use existing tag vocabulary when possible

## Description
- single line
- <= 60 characters
- describe purpose and tone

## Required sections
- top
- concept
- features
- service
- works
- company

## Example
```ts
export const exampleTemplate: Template = {
  id: 'template-example',
  name: 'Example: Short Label',
  tags: ['business', 'clean'],
  description: 'Short purpose statement here.',
  html: `...`
};
```
