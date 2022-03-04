# Comandos npm

### Seguindo a ordem de uso, comandos e configurações usadas no projeto do portal.

<br>

> Após a instalação dos <br>
>
> 1. [Programas](./programs.md) <br>
> 2. [Dependências Globais](./npm-global-dependencies.md)

<br>

## Criando workspace do portal com Angular CLI

```sh
# iniciando o workspace
ng new mfe-workspace-portal --create-application=false --commit=true --prefix=mfe
```

<br>

---

<br>

## Adicionando e configurando o Eslint

```sh
# Adicionando eslint e incluindo no cli angular.json
ng add @angular-eslint/schematics
ng config cli.defaultCollection @angular-eslint/schematics
```

```sh
## Criando .eslintrc.json root
{
  "root": true,
  "ignorePatterns": ["projects/**/*"],
  "overrides": [
    {
      "files": ["*.ts"],
      "parserOptions": {
        "project": ["tsconfig.json", "e2e/tsconfig.json"],
        "createDefaultProgram": true
      },
      "extends": [
        "plugin:@angular-eslint/recommended",
        "plugin:@angular-eslint/template/process-inline-templates"
      ],
      "rules": {}
    },
    {
      "files": ["*.html"],
      "extends": ["plugin:@angular-eslint/template/recommended"],
      "rules": {}
    }
  ]
}
```

```sh
## Gerando MFE app portal com eslint, routing e style
ng g @angular-eslint/schematics:app portal --routing=true --strict=true --style=scss --prefix=mfe
```

<br>

---

<br>

## Configurando o Karma

```sh
## Adicionando o karma.root.conf.js
module.exports = function () {
  return {
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage'),
      require('@angular-devkit/build-angular/plugins/karma'),
    ],
    client: {
      jasmine: {},
      clearContext: false, // leave Jasmine Spec Runner output visible in browser
    },
    jasmineHtmlReporter: {
      suppressAll: true, // removes the duplicated traces
    },
    thresholds: {
      emitWarning: false,
      global: {
        statements: 80,
        lines: 80,
        branches: 80,
        functions: 80,
      },
      each: {
        statements: 80,
        lines: 80,
        branches: 80,
        functions: 80,
      },
    },
    reporters: ['progress', 'coverage', 'kjhtml'],
    port: 9876,
    colors: true,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false,
    restartOnFileChange: true,
    customLaunchers: {
      ChromeHeadlessNoSandbox: {
        base: 'ChromeHeadless',
        flags: ['--headless', '--no-sandbox', '--remote-debugging-port=9222'],
      },
    },
    browserDisconnectTolerance: 8,
    browserNoActivityTimeout: 60000,
    browserDisconnectTimeout: 20000,
    captureTimeout: 210000,
  };
};
```

```sh
## Editando o karma.conf.js (todos devem seguir essa estrutura, fora o __dirname)
var getBaseKarmaConfig = require('./../../karma.root.conf');

module.exports = function (config) {
  var baseRootConfig = getBaseKarmaConfig();
  config.set({
    ...baseRootConfig,
    coverageReporter: {
      dir: require('path').join(__dirname, '../../coverage/shared-lib'),
      subdir: '.',
      reporters: [{ type: 'html' }, { type: 'text-summary' }, { type: 'lcov' }],
      fixWebpackSourcePaths: true,
    },
    logLevel: config.LOG_INFO,
  });
};
```

<br>

---

<br>

## Adicionando e configurando o Ngx Build Plus e o Module Federation

```sh
## Instalando o ngx build plus e o module federation
npm install ngx-build-plus@12.2.0
npm install @angular-architects/module-federation@12.5.3
npm install @angular-architects/module-federation-tools@12.5.3
```

```sh
## Adicionando a configuração do module federation no mfe portal com a porta 5000
ng add @angular-architects/module-federation --project=portal --port=5000
```

```sh
## Server ou Build do Portal
ng serve --project=portal --port=5000 --host=0.0.0.0 --disable-host-check --open

ng build --project=portal --base-href ./ --single-bundle=true --output-hashing=none --vendor-chunk=false --aot
```

<br>

---

<br>

## Adicionando e configurando o Prettier

```sh
# Criando o .prettierignore
build
coverage
node_modules
dist

# Criando o .prettierrc.json
{
  "trailingComma": "es5",
  "tabWidth": 2,
  "semi": false,
  "singleQuote": true
}
```

```sh
## Adicionando o Prettier, editando e checando
npm install prettier --save-dev --save-exact

# Editando e checando
npx prettier --write --ignore-unknown .
npx prettier --check .
```

```sh
## Adicionando scripts do prettier no package.json
npm set-script prettier-write "npx prettier --write --ignore-unknown ."
npm set-script prettier-check "npx prettier --check ."
```

<br>

---

<br>

## Adicionando e configurando o Lint-staged

```sh
## Criando o .lintstagedrc.json
{
  "*.{js,jsx,ts,tsx,md,html,scss,json}": [
    "npm run prettier-write",
    "git add",
    "npm run prettier-check"
  ]
}
```

```sh
## Adicionando o Lint Staged
npm install lint-staged --save-dev
```

<br>

---

<br>

## Adicionando e configurando o Husky

```sh
## Adicionando o Husky
npm install husky --save-dev
npx husky install
```

```sh
## Configurando o Husky
npx husky add .husky/pre-commit "npm run pre-commit"

# Adicionando scripts para husky no package.json
npm set-script test "ng test --no-watch --no-progress --code-coverage --browsers ChromeHeadlessNoSandbox"
npm set-script pre-commit "npx --no-install lint-staged && npm run lint && npm run test"
npm set-script postinstall "npx husky install"
```

<br>

---

<br>

## Adicionando os Scripts

```sh
## Adicionando scripts de serve:portal, test:dev e build:portal no package.json
npm set-script serve:portal "ng serve --project=portal --port=5000 --host=0.0.0.0 --disable-host-check --open"
npm set-script test:dev "ng test --code-coverage --progress --browsers Chrome"
npm set-script build:portal "ng build --project=portal --base-href ./ --single-bundle=true --output-hashing=none --vendor-chunk=false --aot"
```

<br>

---

<br>

## Adicionando e configurando o Travis CI

```sh
## Adicionando o Travis CI
# Criando o Token GITHUB_TOKEN_TRAVIS
https://github.com/settings/tokens

# martins86 / mfe-workspace-portal
https://app.travis-ci.com/github/martins86/mfe-workspace-portal

# Criando o .travis.yml
language: node_js

os: linux

node_js:
  - node

dist: trusty

sudo: required

addons:
  chrome: stable

cache:
  yarn: true
  directories:
    - node_modules

install:
  - npm install -g @angular/cli@12.2.13
  - npm install

before_install:
  - export DISPLAY=:99.0
  - export NODE_OPTIONS=--openssl-legacy-provider
  - sh -e /etc/init.d/xvfb start

script:
  - npm run lint
  - npm run test
  - npm run build:portal
  - cd dist/portal
  - cp index.html 404.html

branches:
  only:
    - master

env:
  - EMBER_VERSION=release

jobs:
  fast_finish: true
  allow_failures:
    - env: EMBER_VERSION=release

deploy:
  provider: pages
  skip_cleanup: true
  github_token: $GITHUB_TOKEN_TRAVIS
  local_dir: dist/portal
  on:
    branch: master
```

<br>

---

<br>

## Adicionando e configurando o SonarCloud

```sh
## Adicionando o sonar no projeto
# Acesse o https://sonarcloud.io entre com sua conta do github para acesso aos projetos
https://sonarcloud.io

# Crie a empresa e adicione o repositório desejado, logo após ele executara um scan, finalizando o scan acesse o information para obter as keys do projeto
https://sonarcloud.io/project/information?id=martins86_mfe-workspace-dashboard
```

```sh
# Adicionando sonar-project.properties
sonar.host.url=https://sonarcloud.io
sonar.organization=martins86
sonar.projectVersion=1.0
sonar.projectName=martins86_mfe-workspace-portal
sonar.projectKey=martins86_mfe-workspace-portal

sonar.sourceEncoding=UTF-8
sonar.sources=projects

sonar.exclusions=**/node_modules/**,**/*.js
sonar.coverage.exclusions=**/*.js,src/main.ts,src/polyfills.ts,**/*environment*.ts,**/*module.ts

sonar.tests=app
sonar.test.inclusions=**/*.spec.ts,**/*test.ts

sonar.typescript.tsconfigPath=tsconfig.json

sonar.javascript.lcov.reportPaths=coverage/lcov.info
```

<br>

---

<br>

## Commits e Versionamento

```sh
## Instalando o Commitizen
npm install -g commitizen
```

```sh
## Instalando o Commitizen no projeto.
npm install -D commitizen
```

```sh
## Inicializando o configurador do changelog.
commitizen init cz-conventional-changelog --save-dev --save-exact
```

```sh
## Instalando o Standard Version no projeto.
npm install -D standard-version
```

```sh
## Adiconando o Script de release no package.json.
npm set-script release "standard-version"
```

<br>

---

<br>

## Criando itens do portal

```sh
## Criando o layout padrão
ng g m layout/default/ --module app --routing --project portal
ng g m layout/default/header --project portal
ng g m layout/default/footer --project portal

ng g c layout/default/ --project portal
ng g c layout/default/header --project portal
ng g c layout/default/footer --project portal
```

```sh
## Adicionando o component da pagina não encontrada
ng g c pages/not-found --project portal
```
