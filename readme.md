This is a simple Repository to demonstrate an issue with the eslint-deprecation-plugin and ts 4.2.3

run

```
npm install
```

and then

```
npx eslint . --ext .ts
```

---

In the index.ts file the first `.subscribe` call on line 5 should is not deprecated and shouldn't warn, where as the second `.subscribe` call should
