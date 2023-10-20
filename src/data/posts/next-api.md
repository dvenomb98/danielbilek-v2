---
title: "The most powerful NextJS feature"
author: "Daniel Bílek"
date: "2023-03-01"
summary: "Next.js is a popular React framework that allows developers to build server-rendered React applications. One of the coolest features of Next.js is its API Routes feature, which allows developers to create serverless API endpoints without having to set up a separate server."
draft: false
tags:
    - NextJS
    - APIs
    - React
---

# Next.js API

Next.js is a popular React framework that allows developers to build server-rendered React applications. One of the coolest features of Next.js is its API Routes feature, which allows developers to create serverless API endpoints without having to set up a separate server.

API Routes are implemented using the API folder in Next.js. This folder is a special directory where you can create server-side code that runs when a request is made to a specific API endpoint. The API routes can handle HTTP requests, return JSON data, and interact with databases, third-party APIs, or other services.

## Example code

To create an API endpoint in Next.js, you can create a file in the pages/api folder with the following structure:

```javascript
api/hello-world

export default function handler(req, res) {
  const data = { message: 'Hello, world!' };
  res.status(200).json(data);
}
```

In your Next application you can then create following function:

```javascript
await fetch("/api/hello-world", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
```

## Here are some cool things you can do with the Next.js API folder:

1. **Serverless functions:** With the API Routes feature, you can create serverless functions that run on-demand in response to a client-side request. This means you don't need to worry about setting up or managing a separate server, as Next.js handles all of that for you.

2. **Authentication:** API Routes make it easy to create authentication endpoints that can handle user authentication and authorization. For example, you could create an API endpoint that checks a user's credentials and returns a token that can be used to access protected resources.

3. **Data fetching:** API Routes can also be used to fetch data from third-party APIs or databases and return that data to the client-side. This can be especially useful for building applications that require real-time data updates, such as chat applications or stock market tickers.

4. **Proxying:** Next.js API Routes can also act as a proxy, allowing you to route requests from the client-side to third-party APIs or services. This can be useful if you want to hide API keys or if you need to modify the response before sending it to the client.

5. **E-commerce:** With API Routes, you can easily build e-commerce websites that process orders, handle payments, and manage inventory. For example, you could create an API endpoint that handles a user's shopping cart and checkout process, or an endpoint that handles product searches and returns relevant results.

Overall, the Next.js API folder is a powerful and flexible feature that allows developers to create serverless API endpoints with ease. Whether you're building a simple web application or a complex e-commerce platform, the API Routes feature can help you create the functionality you need quickly and efficiently.