# Repro for slow lsp completion

See https://github.com/mrmckeb/typescript-plugin-css-modules/issues/215

## Steps to reproduce

- `npm i`
- `npm run generate` (this will generate a lot of files inside `src/components` folder, see the `generate.mjs` script to tweak the number of files)
- `restart TS server` (just to be sure)
- open `src/App.tsx` and try to type `console.`. It will take a while for completions to show up
  - open TS server logs to see how long it takes to complete
  - for me it takes `::completionInfo: elapsed time (in milliseconds)` around 8–10 seconds for each completion on `1_000` files
  - Almost all the time is spent inside `Finishing updateGraphWorker: Project: …/tsconfig.json Version: 3 structureChanged: false structureIsReused:: Completely Elapsed:`
- try the same thing without the plugin. `console.` completion shows up instantly
