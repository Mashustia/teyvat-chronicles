var fs = require('fs')
var chalk = require('chalk')

const {Languages, NS} = require('./src/const/consts');

module.exports = {
  options: {
    debug: false,
    func: {
      list: ['i18next.t', 'i18n.t', 't', 'transFunc'],
      extensions: ['.js', '.jsx', '.ts', '.tsx']
    },
    trans: false,
    lngs: [Languages.EN, Languages.RU],
    ns: [...NS],
    defaultLng: Languages.EN,
    defaultNs: 'common',
    defaultValue: '',
    resource: {
      loadPath: 'public/locales/{{lng}}/{{ns}}.json',
      savePath: 'public/locales/{{lng}}/{{ns}}.json',
      jsonIndent: 2,
      lineEnding: '\n'
    },
    nsSeparator: ':', // namespace separator
    keySeparator: '.', // key separator
    removeUnusedKeys: true,
    interpolation: {
      prefix: '{{',
      suffix: '}}'
    }
  },
  transform: function customTransform(file, enc, done) {
    const parser = this.parser
    const content = fs.readFileSync(file.path, enc)
    let count = 0

    parser.parseFuncFromString(content, {list: ['i18next._', 'i18next.__']}, (key, options) => {
      parser.set(key, Object.assign({}, options, {
        nsSeparator: ':',
        keySeparator: false
      }))
      ++count
    })

    if (count > 0) {
      console.log(`i18next-scanner: count=${chalk.cyan(count)}, file=${chalk.yellow(JSON.stringify(file.relative))}`)
    }

    done()
  }
}
