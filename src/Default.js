export const DEFAULT_TEXT = `# Markdown syntax guide

## Headers

# This is a Heading h1
## This is a Heading h2 
#### This is a Heading h4

## Emphasis

*This text will be italic*  
_This will also be italic_

**This text will be bold**  
__This will also be bold__

_You **can** combine them_

## Lists

### Unordered

* Item 1
* Item 2
* Item 3

### Ordered

1. Item 1
1. Item 2
1. Item 3


## Images

![This is a alt text.](./images/sample.jpg "This is a sample image.")

## Links

You are using [Markdown Previewer](https://github.com/dwrik/markdown-previewer/).

## Blockquotes

> Markdown is a lightweight markup language with plain-text-formatting syntax, created in 2004 by John Gruber with Aaron Swartz.
>
>> Markdown is often used to format readme files, for writing messages in online discussion forums, and to create rich text using a plain text editor.

## Tables

| Left columns  | Right columns |
| ------------- |:-------------:|
| left foo      | right foo     |
| left bar      | right bar     |
| left baz      | right baz     |

## Blocks of code

\`\`\`
const message = 'Hello world';
console.log(message);
\`\`\`

## Inline code

This site uses \`markedjs/marked\`.
`
