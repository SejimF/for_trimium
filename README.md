# Trimium тест-анкета

Ответы на тест-анкета для Trimium

## Необходимое

### Должно быть установлено

```
npm
mysql 8.0+
```

## Установка

### Копирование проекта
```
git clone https://github.com/SejimF/for_trimium.git

```
### Инициализация и запуск фронт-энд
```
cd for_trimium/front-end
npm i
npm start
```
### Инициализация и запуск бак-энд
```
cd ../back-end
npm i
```
В app.config.js поменять данные на свои.
```
npm start
```

Для запуска скрипта чтения из файла CSV и записи в бд из корневой папки back-end вызвать

```
npm run cliCSVupload
```

## Структура файлов и каталогов

```
+---------------------------back-end/
|                           +---models/
|                           |   \---person.js
|                           +---routes/
|                           |   \---index.js
|                           +---scripts/
|                           |   +---import.csv
|                           |   \---saveCSVtoMySQL.js
|                           +---utils/
|                           |   \---database.js
|                           +---views/
|                           |   +---error.ejs
|                           |   +---fileuploaded.ejs
|                           |   \---landing.ejs
|                           +---.gitignore
|                           +---app.config.js
|                           +---app.js
|                           +---package-lock.json
|                           \---package.json
+---------------front-end/
|               +---e2e/
|               |   +---src/
|               |   |   +---app.e2e-spec.ts
|               |   |   \---app.po.ts
|               |   +---protractor.conf.js
|               |   \---tsconfig.json
|               +---src/
|               |   +---app/
|               |   |   +---components/
|               |   |   |   +---layout/
|               |   |   |   |   +---layout.component.html
|               |   |   |   |   +---layout.component.scss
|               |   |   |   |   +---layout.component.spec.ts
|               |   |   |   |   \---layout.component.ts
|               |   |   |   +---page-not-found/
|               |   |   |   |   +---page-not-found.component.html
|               |   |   |   |   +---page-not-found.component.scss
|               |   |   |   |   +---page-not-found.component.spec.ts
|               |   |   |   |   \---page-not-found.component.ts
|               |   |   |   \---social-network/
|               |   |   |       +---post-details/
|               |   |   |       |   +---post-details.component.html
|               |   |   |       |   +---post-details.component.scss
|               |   |   |       |   +---post-details.component.spec.ts
|               |   |   |       |   \---post-details.component.ts
|               |   |   |       +---post-page/
|               |   |   |       |   +---post-page.component.html
|               |   |   |       |   +---post-page.component.scss
|               |   |   |       |   +---post-page.component.spec.ts
|               |   |   |       |   \---post-page.component.ts
|               |   |   |       +---user/
|               |   |   |       |   +---user.component.html
|               |   |   |       |   +---user.component.scss
|               |   |   |       |   +---user.component.spec.ts
|               |   |   |       |   \---user.component.ts
|               |   |   |       +---social-network.module.ts
|               |   |   |       \---social-network.routing.ts
|               |   |   +---mocks/
|               |   |   |   +---postMocks.ts
|               |   |   |   \---userMocks.ts
|               |   |   +---models/
|               |   |   |   +---post.ts
|               |   |   |   \---user.ts
|               |   |   +---resolvers/
|               |   |   |   +---post.resolver.ts
|               |   |   |   +---postPage.resolver.ts
|               |   |   |   \---user.resolver.ts
|               |   |   +---services/
|               |   |   |   +---post.service.spec.ts
|               |   |   |   +---post.service.ts
|               |   |   |   +---user.service.spec.ts
|               |   |   |   \---user.service.ts
|               |   |   +---app-routing.module.ts
|               |   |   +---app.component.html
|               |   |   +---app.component.scss
|               |   |   +---app.component.spec.ts
|               |   |   +---app.component.ts
|               |   |   \---app.module.ts
|               |   +---assets/
|               |   |   +---config/
|               |   |   |   +---client-config-alternative.json
|               |   |   |   \---client-config.json
|               |   |   \---.gitkeep
|               |   +---environments/
|               |   |   +---environment.prod.ts
|               |   |   \---environment.ts
|               |   +---favicon.ico
|               |   +---index.html
|               |   +---main.ts
|               |   +---polyfills.ts
|               |   +---styles.scss
|               |   \---test.ts
|               +---.editorconfig
|               +---.gitignore
|               +---angular.json
|               +---browserslist
|               +---karma.conf.js
|               +---package-lock.json
|               +---package.json
|               +---README.md
|               +---tsconfig.app.json
|               +---tsconfig.json
|               +---tsconfig.spec.json
|               \---tslint.json
+---README.md
\---Тест-анкета (Angular. SAF).docx
```








