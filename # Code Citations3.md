# Code Citations

## License: unknown
https://github.com/Cirych/cirych.github.io/blob/167f81adde09dfa50311773f5f407a1292fb7d8d/Dockerfile

```
builder --chown=nextjs:nodejs /app/public ./public
    COPY --from=builder --chown=nextjs:nodejs
```


## License: MIT
https://github.com/polar2031/shirokuma-dev/blob/5e6bed8fbd01f3ada904ca34e99b81408abf2614/dockerfile

```
builder --chown=nextjs:nodejs /app/public ./public
    COPY --from=builder --chown=nextjs:nodejs
```


## License: unknown
https://github.com/Cirych/cirych.github.io/blob/167f81adde09dfa50311773f5f407a1292fb7d8d/Dockerfile

```
builder --chown=nextjs:nodejs /app/public ./public
    COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
    COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
```


## License: MIT
https://github.com/polar2031/shirokuma-dev/blob/5e6bed8fbd01f3ada904ca34e99b81408abf2614/dockerfile

```
builder --chown=nextjs:nodejs /app/public ./public
    COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
    COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
```


## License: unknown
https://github.com/praveenjuge/praveenjuge/blob/f7c607592efe59257f18e3337868dd9519bec159/next.config.js

```
, value: 'origin-when-cross-origin' },
              { key: 'X-Frame-Options', value: 'DENY' },
              { key: 'X-Content-Type-Options',
```


## License: unknown
https://github.com/gustavoguichard/vidanatural/blob/22cdf28c1b6e4b051618ddbc5af65e4c1a8b326a/next.config.js

```
, value: 'origin-when-cross-origin' },
              { key: 'X-Frame-Options', value: 'DENY' },
              { key: 'X-Content-Type-Options',
```


## License: unknown
https://github.com/praveenjuge/praveenjuge/blob/f7c607592efe59257f18e3337868dd9519bec159/next.config.js

```
, value: 'origin-when-cross-origin' },
              { key: 'X-Frame-Options', value: 'DENY' },
              { key: 'X-Content-Type-Options', value: 'nosniff' },
              { key: 'X-DNS-Prefetch-Control', value: 'on' },
              { key: 'Strict-Transport-Security', value: 'max-age=31536000; includeSubDomains; preload
```


## License: unknown
https://github.com/gustavoguichard/vidanatural/blob/22cdf28c1b6e4b051618ddbc5af65e4c1a8b326a/next.config.js

```
, value: 'origin-when-cross-origin' },
              { key: 'X-Frame-Options', value: 'DENY' },
              { key: 'X-Content-Type-Options', value: 'nosniff' },
              { key: 'X-DNS-Prefetch-Control', value: 'on' },
              { key: 'Strict-Transport-Security', value: 'max-age=31536000; includeSubDomains; preload
```


## License: unknown
https://github.com/magedabdelsalam/magedabdelsalam.github.io/blob/9602eb88b3de3329218ae9faf03ac62061348f87/pages/_app.js

```
.NEXT_
```


## License: unknown
https://github.com/magedabdelsalam/magedabdelsalam.github.io/blob/9602eb88b3de3329218ae9faf03ac62061348f87/pages/_app.js

```
.NEXT_PUBLIC_POSTHOG_HOST || 'https://app.posthog.com',
        // Enable debug mode in development
        loaded: (posthog) => {
          if (process.env.NODE_ENV === 'development') posthog.debug()
        },
        capture_page
```


## License: unknown
https://github.com/magedabdelsalam/magedabdelsalam.github.io/blob/9602eb88b3de3329218ae9faf03ac62061348f87/pages/_app.js

```
.NEXT_PUBLIC_POSTHOG_HOST || 'https://app.posthog.com',
        // Enable debug mode in development
        loaded: (posthog) => {
          if (process.env.NODE_ENV === 'development') posthog.debug()
        },
        capture_pageview: false
```

