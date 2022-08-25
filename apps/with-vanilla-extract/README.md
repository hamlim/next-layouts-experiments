# Vanilla Extract and Layouts

## Edit: This is partially working with `.client.tsx` files!

---

_Previous readme content:_

This is a demo app reproducing the currently not working [`@vanilla-extract`](https://vanilla-extract.style/documentation/integrations/next/) setup with the Next.js Layouts feature.

I've converted the default styles that ship with the TS template into vanilla extract + setup the vanilla extract Next.js plugin, however when running the app the styles don't get loaded.

## Steps:

- `yarn` at the root of the repo
- `yarn workspace with-vanilla-extract dev`
- visit `localhost:3000`
- See an unstyled page 😞
