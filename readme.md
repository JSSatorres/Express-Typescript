## TypeScript - Express

**Curse fullstackopen typescript - express**

[Fullstack part 9](https://fullstackopen.com/es/part9/escribiendo_la_aplicacion_express)

Create the tsconfig.json and edit

```TypeScript
npm run tsc -- --init
```

```TypeScript
"outDir": "./build",                /* folder to copile javascript*/
"noUnusedLocals": true,             /* Enable error reporting when local variables aren't read. */
"noUnusedParameters": true,         /* Raise an error when a function parameter isn't read. */
"noImplicitReturns": true,          /* Enable error reporting for codepaths that do not explicitly return in a function. */
"esModuleInterop": true,            /* Emit additional JavaScript to ease support for importing CommonJS modules. This enables 'allowSyntheticDefaultImports' for type compatibility. */
```

install ts-node-dev to have a tsc and nodemon in one `npm i -D ts-node-dev`

add the script to run ts-node-dev `"dev": "ts-node-dev src/index.ts"`
