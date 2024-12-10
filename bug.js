```javascript
// pages/api/hello.js
export default function handler(req, res) {
  // This is the problematic line
  res.status(200).json({ name: req.query.name });
}
```
This code snippet, part of a Next.js API route, will fail when the `req.query.name` is not present (e.g., a GET request to `/api/hello` without a `name` query parameter).  It throws an error because `req.query.name` will be `undefined`, and `undefined` doesn't have a `.name` property.  While this is a common issue, it can be especially problematic in Next.js 15 due to the stricter type checking.