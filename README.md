# MovieApp: Example Vue 3 + Typescript + Vite + Prettier project


## Project inputs

- The project uses Vue 3 with Vue Composition API
- The Project uses TypeScript 
- The Project uses Prettier coding formatting
- The project uses Vite blazing fast as server and build tool
- The API is mocked by msw
- The app is made on top of Modular structure
- SCSS is set up, but not used intensively
- The search in the data is made against the title, generes and actors
- The deployment is done to GitHub pages
- The integration and unit tests are done via Jest + @testing-library/vue
- The E2e tests are done via Cypress
- The CI is done by GitHub actions
- The components naming follows [Vue styleguide](https://v3.vuejs.org/style-guide/#base-component-names-strongly-recommended)
- The app contains a classical pagination pattern via REST API limit, offset parameters
- The search is made agains multiple keywords
- The search is made aginst movie name, actors, genre. For example you may type `drama tim Robbins` and see the results
- The search is case insensitive. All non-alphanumerical symbols are ignored

## Asumption

- Mobile view is out of scope
- Movies searching is done against title, actor and genre


## Further improvements

- Implement a dropdown action near the search box where users may select by which criteria to search (everything, by name, by actor, by genre)
- Setup Vue router, make the movie card item details clickable
- On card detail click navigate to corresponding bage ?searchBy=actior&search={clickedActorName}
- Update the page query when user performs the search
- Implement single movie click through



--------

## Running the project

1. Setup dependencies

`npm i`

2. Run the dev server

`npm run dev`

3. Testing:

The Jest unit tests can be ran by `npm run test:unit`
The Cypress E2E tests can be ran by `npm run test:e2e` or in interactive mode `npm run cy`




## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Vetur](https://marketplace.visualstudio.com/items?itemName=octref.vetur). Make sure to enable `vetur.experimental.templateInterpolationService` in settings!

### If Using `<script setup>`

[`<script setup>`](https://github.com/vuejs/rfcs/pull/227) is a feature that is currently in RFC stage. To get proper IDE support for the syntax, use [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar) instead of Vetur (and disable Vetur).

## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can use the following:

### If Using Volar

Run `Volar: Switch TS Plugin on/off` from VSCode command palette.

### If Using Vetur

1. Install and add `@vuedx/typescript-plugin-vue` to the [plugins section](https://www.typescriptlang.org/tsconfig#plugins) in `tsconfig.json`
2. Delete `src/shims-vue.d.ts` as it is no longer needed to provide module info to Typescript
3. Open `src/main.ts` in VSCode
4. Open the VSCode command palette
5. Search and run "Select TypeScript version" -> "Use workspace version"
