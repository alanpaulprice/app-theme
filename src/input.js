const Color = require('color');

const colors = {
  blue_50_50: Color('hsl(210, 50%, 50%)')
    .hex()
    .toString(),
  brown_75_35: Color('hsl(30, 75%, 35%)')
    .hex()
    .toString(),
  green_25_50: Color('hsl(90, 25%, 50%)')
    .hex()
    .toString(),
  green_50_50: Color('hsl(90, 50%, 50%)')
    .hex()
    .toString(),

  green_375_50: Color('hsl(90, 37.5%, 50%)')
    .hex()
    .toString(),
  grey_10: Color('hsl(0, 0%, 10%)')
    .hex()
    .toString(),
  grey_375: Color('hsl(0, 0%, 37.5%)')
    .hex()
    .toString(),
  grey_80: Color('hsl(0, 0%, 80%)')
    .hex()
    .toString(),
  red_80_50: Color('hsl(0, 80%, 50%)')
    .hex()
    .toString(),
  red_50_50: Color('hsl(0, 50%, 50%)')
    .hex()
    .toString(),
  white: Color('hsl(0, 0%, 100%)')
    .hex()
    .toString(),
  yellow_50_75: Color('hsl(60, 50%, 75%)')
    .hex()
    .toString()
};

module.exports = {
  name: 'app-theme',
  type: 'dark',
  colors: {
    'editor.background': colors.grey_10,
    'editor.foreground': colors.white,
    'activityBarBadge.background': colors.red_50_50,
    'sideBarTitle.foreground': colors.grey_80
  },
  tokenColors: [
    {
      name: 'Comment',
      scope: ['comment', 'punctuation.definition.comment'],
      settings: {
        fontStyle: 'italic',
        foreground: colors.grey_375
      }
    },
    {
      name: 'Variables',
      scope: ['variable', 'string constant.other.placeholder'],
      settings: {
        foreground: colors.white
      }
    },
    {
      name: 'Colors',
      scope: ['constant.other.color'],
      settings: {
        foreground: colors.white
      }
    },
    {
      name: 'Invalid',
      scope: ['invalid', 'invalid.illegal'],
      settings: {
        foreground: colors.green_50_50
      }
    },
    {
      name: 'Keyword, Storage',
      scope: ['keyword', 'storage.type', 'storage.modifier'],
      settings: {
        foreground: colors.green_375_50
      }
    },
    {
      name: 'Operator, Misc',
      scope: [
        'keyword.control',
        'constant.other.color',
        'punctuation',
        'meta.tag',
        'punctuation.definition.tag',
        'punctuation.separator.inheritance.php',
        'punctuation.definition.tag.html',
        'punctuation.definition.tag.begin.html',
        'punctuation.definition.tag.end.html',
        'punctuation.section.embedded',
        'keyword.other.template',
        'keyword.other.substitution'
      ],
      settings: {
        foreground: colors.brown_75_35
      }
    },
    {
      name: 'Tag',
      scope: ['entity.name.tag', 'meta.tag.sgml', 'markup.deleted.git_gutter'],
      settings: {
        foreground: colors.green_25_50
      }
    },
    {
      name: 'Function, Special Method',
      scope: [
        'entity.name.function',
        'meta.function-call',
        'variable.function',
        'support.function',
        'keyword.other.special-method'
      ],
      settings: {
        foreground: colors.red_80_50
      }
    },
    {
      name: 'Block Level Variables',
      scope: ['meta.block variable.other'],
      settings: {
        foreground: colors.green_25_50
      }
    },
    {
      name: 'Other Variable, String Link',
      scope: ['support.other.variable', 'string.other.link'],
      settings: {
        foreground: colors.green_25_50
      }
    },
    {
      name: 'Number, Constant, Function Argument, Tag Attribute, Embedded',
      scope: [
        'constant.numeric',
        'constant.language',
        'support.constant',
        'constant.character',
        'constant.escape',
        'variable.parameter',
        'keyword.other.unit',
        'keyword.other'
      ],
      settings: {
        foreground: colors.brown_100_875
      }
    },
    {
      name: 'String, Symbols, Inherited Class, Markup Heading',
      scope: [
        'string',
        'constant.other.symbol',
        'constant.other.key',
        'entity.other.inherited-class',
        'markup.heading',
        'markup.inserted.git_gutter',
        'meta.group.braces.curly constant.other.object.key.js string.unquoted.label.js'
      ],
      settings: {
        foreground: colors.yellow_50_75
      }
    },
    {
      name: 'Class, Support',
      scope: [
        'entity.name',
        'support.type',
        'support.class',
        'support.orther.namespace.use.php',
        'meta.use.php',
        'support.other.namespace.php',
        'markup.changed.git_gutter',
        'support.type.sys-types'
      ],
      settings: {
        foreground: colors.blue_50_50
      }
    },
    {
      name: 'Entity Types',
      scope: ['support.type'],
      settings: {
        foreground: colors.red_50_50
      }
    },
    {
      name: 'CSS Class and Support',
      scope: [
        'source.css support.type.property-name',
        'source.sass support.type.property-name',
        'source.scss support.type.property-name',
        'source.less support.type.property-name',
        'source.stylus support.type.property-name',
        'source.postcss support.type.property-name'
      ],
      settings: {
        foreground: colors.green_50_50
      }
    },
    {
      name: 'Sub-methods',
      scope: [
        'entity.name.module.js',
        'variable.import.parameter.js',
        'variable.other.class.js'
      ],
      settings: {
        foreground: colors.green_50_50
      }
    },
    {
      name: 'Language methods',
      scope: ['variable.language'],
      settings: {
        fontStyle: 'italic',
        foreground: colors.green_50_50
      }
    },
    {
      name: 'entity.name.method.js',
      scope: ['entity.name.method.js'],
      settings: {
        fontStyle: 'italic',
        foreground: colors.red_80_50
      }
    },
    {
      name: 'meta.method.js',
      scope: [
        'meta.class-method.js entity.name.function.js',
        'variable.function.constructor'
      ],
      settings: {
        foreground: colors.red_80_50
      }
    },
    {
      name: 'Attributes',
      scope: ['entity.other.attribute-name'],
      settings: {
        foreground: colors.green_375_50
      }
    },
    {
      name: 'HTML Attributes',
      scope: [
        'text.html.basic entity.other.attribute-name.html',
        'text.html.basic entity.other.attribute-name'
      ],
      settings: {
        fontStyle: 'italic',
        foreground: colors.blue_50_50
      }
    },
    {
      name: 'CSS Classes',
      scope: ['entity.other.attribute-name.class'],
      settings: {
        foreground: colors.blue_50_50
      }
    },
    {
      name: "CSS ID's",
      scope: ['source.sass keyword.control'],
      settings: {
        foreground: colors.red_80_50
      }
    },
    {
      name: 'Inserted',
      scope: ['markup.inserted'],
      settings: {
        foreground: colors.yellow_50_75
      }
    },
    {
      name: 'Deleted',
      scope: ['markup.deleted'],
      settings: {
        foreground: colors.green_50_50
      }
    },
    {
      name: 'Changed',
      scope: ['markup.changed'],
      settings: {
        foreground: colors.green_375_50
      }
    },
    {
      name: 'Regular Expressions',
      scope: ['string.regexp'],
      settings: {
        foreground: colors.brown_75_35
      }
    },
    {
      name: 'Escape Characters',
      scope: ['constant.character.escape'],
      settings: {
        foreground: colors.brown_75_35
      }
    },
    {
      name: 'URL',
      scope: ['*url*', '*link*', '*uri*'],
      settings: {
        fontStyle: 'underline'
      }
    },
    {
      name: 'Decorators',
      scope: [
        'tag.decorator.js entity.name.tag.js',
        'tag.decorator.js punctuation.definition.tag.js'
      ],
      settings: {
        fontStyle: 'italic',
        foreground: colors.red_80_50
      }
    },
    {
      name: 'ES7 Bind Operator',
      scope: [
        'source.js constant.other.object.key.js string.unquoted.label.js'
      ],
      settings: {
        fontStyle: 'italic',
        foreground: colors.green_50_50
      }
    },
    {
      name: 'JSON Key - Level 0',
      scope: [
        'source.json meta.structure.dictionary.json support.type.property-name.json'
      ],
      settings: {
        foreground: colors.green_375_50
      }
    },
    {
      name: 'JSON Key - Level 1',
      scope: [
        'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json'
      ],
      settings: {
        foreground: colors.blue_50_50
      }
    },
    {
      name: 'JSON Key - Level 2',
      scope: [
        'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json'
      ],
      settings: {
        foreground: colors.brown_100_875
      }
    },
    {
      name: 'JSON Key - Level 3',
      scope: [
        'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json'
      ],
      settings: {
        foreground: colors.green_50_50
      }
    },
    {
      name: 'JSON Key - Level 4',
      scope: [
        'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json'
      ],
      settings: {
        foreground: colors.red_50_50
      }
    },
    {
      name: 'JSON Key - Level 5',
      scope: [
        'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json'
      ],
      settings: {
        foreground: colors.red_80_50
      }
    },
    {
      name: 'JSON Key - Level 6',
      scope: [
        'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json'
      ],
      settings: {
        foreground: colors.green_25_50
      }
    },
    {
      name: 'JSON Key - Level 7',
      scope: [
        'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json'
      ],
      settings: {
        foreground: colors.green_375_50
      }
    },
    {
      name: 'JSON Key - Level 8',
      scope: [
        'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json'
      ],
      settings: {
        foreground: colors.yellow_50_75
      }
    },
    {
      name: 'Markdown - Plain',
      scope: [
        'text.html.markdown',
        'punctuation.definition.list_item.markdown'
      ],
      settings: {
        foreground: colors.white
      }
    },
    {
      name: 'Markdown - Markup Raw Inline',
      scope: ['text.html.markdown markup.inline.raw.markdown'],
      settings: {
        foreground: colors.green_375_50
      }
    },
    {
      name: 'Markdown - Markup Raw Inline Punctuation',
      scope: [
        'text.html.markdown markup.inline.raw.markdown punctuation.definition.raw.markdown'
      ],
      settings: {
        foreground: colors.green_25_50
      }
    },
    {
      name: 'Markdown - Heading',
      scope: [
        'markdown.heading',
        'markup.heading | markup.heading entity.name',
        'markup.heading.markdown punctuation.definition.heading.markdown'
      ],
      settings: {
        foreground: colors.yellow_50_75
      }
    },
    {
      name: 'Markup - Italic',
      scope: ['markup.italic'],
      settings: {
        fontStyle: 'italic',
        foreground: colors.green_25_50
      }
    },
    {
      name: 'Markup - Bold',
      scope: ['markup.bold', 'markup.bold string'],
      settings: {
        fontStyle: 'bold',
        foreground: colors.green_25_50
      }
    },
    {
      name: 'Markup - Bold-Italic',
      scope: [
        'markup.bold markup.italic',
        'markup.italic markup.bold',
        'markup.quote markup.bold',
        'markup.bold markup.italic string',
        'markup.italic markup.bold string',
        'markup.quote markup.bold string'
      ],
      settings: {
        fontStyle: 'bold',
        foreground: colors.green_25_50
      }
    },
    {
      name: 'Markup - Underline',
      scope: ['markup.underline'],
      settings: {
        fontStyle: 'underline',
        foreground: colors.brown_100_875
      }
    },
    {
      name: 'Markdown - Blockquote',
      scope: ['markup.quote punctuation.definition.blockquote.markdown'],
      settings: {
        foreground: colors.green_25_50
      }
    },
    {
      name: 'Markup - Quote',
      scope: ['markup.quote'],
      settings: {
        fontStyle: 'italic'
      }
    },
    {
      name: 'Markdown - Link',
      scope: ['string.other.link.title.markdown'],
      settings: {
        foreground: colors.red_80_50
      }
    },
    {
      name: 'Markdown - Link Description',
      scope: ['string.other.link.description.title.markdown'],
      settings: {
        foreground: colors.green_375_50
      }
    },
    {
      name: 'Markdown - Link Anchor',
      scope: ['constant.other.reference.link.markdown'],
      settings: {
        foreground: colors.blue_50_50
      }
    },
    {
      name: 'Markup - Raw Block',
      scope: ['markup.raw.block'],
      settings: {
        foreground: colors.green_375_50
      }
    },
    {
      name: 'Markdown - Raw Block Fenced',
      scope: ['markup.raw.block.fenced.markdown'],
      settings: {
        foreground: colors.white
      }
    },
    {
      name: 'Markdown - Fenced Bode Block',
      scope: ['punctuation.definition.fenced.markdown'],
      settings: {
        foreground: colors.white
      }
    },
    {
      name: 'Markdown - Fenced Bode Block Variable',
      scope: [
        'markup.raw.block.fenced.markdown',
        'variable.language.fenced.markdown',
        'punctuation.section.class.end'
      ],
      settings: {
        foreground: colors.white
      }
    },
    {
      name: 'Markdown - Fenced Language',
      scope: ['variable.language.fenced.markdown'],
      settings: {
        foreground: colors.green_25_50
      }
    },
    {
      name: 'Markdown - Separator',
      scope: ['meta.separator'],
      settings: {
        fontStyle: 'bold',
        foreground: colors.green_25_50
      }
    },
    {
      name: 'Markup - Table',
      scope: ['markup.table'],
      settings: {
        foreground: colors.white
      }
    }
  ]
};
