# CRA + Jest + Emotion

Bootstrapped from `npx create-react-app`

## Intention

There is a discrepancy between pseudo classes applied to the button element in a browser and jsdom environment.
Based on the style tags being injected to the document in the jsdom, we can see the `:hover` pseudo class is active.

## Testing

1. Run `npm run start` for a sanity check in a browser environment
2. Run `npm run test`
   - The failing test will contain logs of the style tags injected in the document
   - The failing test **should** be passing since no hover method was called.
