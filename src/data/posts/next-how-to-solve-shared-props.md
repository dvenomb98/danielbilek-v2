---
title: "Solving Next.js Shared Props Challenge with Cache Solution"
author: "Daniel Bílek"
date: "2023-06-30"
summary: "A practical approach to handling common props in Next.js through global caching mechanism, thus eliminating the need for repeated API calls."
draft: false
tags:
  - NextJS
  - Javascript
---

# Solving Next.js Shared Props Challenge with Cache Solution

Next.js is a powerful and flexible framework for building React applications. However, one limitation it currently has is that the **getStaticProps** function, which allows you to fetch data at build time, can't be used at the app level. This means that if you want to share common props like header data, footer data, etc., you have to make separate API calls for all pages. But worry not, I have figured out a way around this limitation using a **cache solution**.

## Implementing the Cache Solution

My solution was to create a **getCachedData** function that fetches data and stores it in a cache. This cache is stored globally, allowing all pages to access the data without making additional requests. To use the cached data, I wrote a **getSharedProps** function which calls **getCachedData**, and can be used within **getStaticProps** on all pages. This means that only one request will be made, and all subsequent data for the pages will come from the cache.

Here are the functions I created:

```javascript
declare global {
  // var is required for the object to exist in globalThis
  // let or const will be rejected.
  // eslint-disable-next-line no-var
  var sharedCache: any;
}

export async function getCachedData<T>(
  fetcher: () => Promise<T>,
  cacheKey: string,
  cacheTimeInSeconds = 600,
): Promise<T> {
  if (!globalThis.sharedCache) {
    globalThis.sharedCache = {};
  }

  if (globalThis.sharedCache[cacheKey]) {
    const cached = JSON.parse(globalThis.sharedCache[cacheKey]);

    // Cache will expire at TTL
    if (new Date().getTime() < cached.ttl) {
      return cached.data;
    }
  }

  const data = await fetcher();
  const cachedData = {
    ttl: new Date().getTime() + 1000 * cacheTimeInSeconds,
    data,
  };

  try {
    globalThis.sharedCache[cacheKey] = JSON.stringify(cachedData);
  } catch (e: any) {
    console.error('Error caching data to globalThis: ', e.message);
  }

  return data;
}
```


## Creating getSharedProps 

```javascript
export const getSharedProps = async (
  locale: string,
): Promise<SharedPropsType> => {

  // First argument is fetch function and second is cache key

  const data = await getCachedData(
    () => fetchData<MenuTopEntity>('menu-top', locale),
    `menu-top-${locale}`
  );

  return {
    menuData: data
  };
};
```



## Applying solution for each page

Then, on each page, you can use the getStaticProps function like this:

```javascript
export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: { ...(await getSharedProps(locale)) },
});
```

With this approach, you only fetch your common data once, and then serve it from the cache for all subsequent requests. This not only makes your Next.js app more efficient, but also provides a great solution to the limitation of not being able to use getStaticProps on the app level.

It's worth noting that this solution is not a universal fix for all