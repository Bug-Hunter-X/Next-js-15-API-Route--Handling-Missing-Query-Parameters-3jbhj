# Next.js 15 API Route: Handling Missing Query Parameters

This repository demonstrates a common error when working with query parameters in Next.js 15 API routes and its solution.

## Problem

The issue arises when accessing query parameters that might be absent from the request.  Accessing an undefined property throws an error, halting the application.

## Solution

The solution involves safely accessing query parameters using optional chaining and default values.  This ensures that the application gracefully handles requests where the parameter is missing.

## Reproduction

1. Clone the repo.
2. Install dependencies: `npm install`
3. Run the development server: `npm run dev`
4. Try accessing `/api/hello` without any query parameters and then with a query parameter of `name=John`.

## Technologies

* Next.js 15
* JavaScript