# DOM Particles
Want flying content on your site? Use my Particles script.

## Init
Add a DOM element to your first parameter (or a string to an id or something you can select with a querySelector). With the second parameter you can hack the defaults.
```js
new Particles(domElement, settings);
```

## Defaults
```js
var defaults = { min: 10, max: 50, particles: [{ content: '&bull;', minWidth: 10, maxWidth: 30 }], autoPlay: true };
```

## Howto?
Here's a code you can use for valentine.
```js
new Particles('#valentine', {
    min: 5,
    max: 10,
    particles: [
        {
            content: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 55 10"><path fill="#F6BF39" fill-rule="nonzero" d="M53.91 4.395l-7.46-2.809a13.522 13.522 0 0 0-.407 2.33h-36C8.096 1.421 7.045.68 6.172.36 5.729.198 3.513-.295 2.484 1.778c-.42.845-.308 1.578-.048 2.138H1.411a1.163 1.163 0 1 0 0 2.327h1.025c-.26.56-.372 1.293.047 2.138 1.03 2.074 3.246 1.58 3.688 1.419.874-.32 1.924-1.062 3.872-3.557H46.045c.068.774.196 1.553.404 2.33l7.461-2.81c.632-.237.632-1.13 0-1.368z"/></svg>',
            minWidth: 10,
            maxWidth: 40
        },
        {
            content: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 81 46"><path fill="#F6BF39" fill-rule="nonzero" d="M78.684 12.144c-.09-.168-.2-.327-.31-.465 2.63-2.336 3.35-6.275 1.47-9.423-1.22-2.05-3.89-2.722-5.97-1.534l-15.2 8.686a13.324 13.324 0 0 0-9.467-3.937c-3.292 0-6.383 1.167-8.813 3.305-2.43-2.14-5.521-3.305-8.814-3.305-3.704 0-7.056 1.51-9.47 3.936L6.915.72C4.834-.467 2.164.206.944 2.255c-1.88 3.148-1.16 7.087 1.47 9.423-.11.139-.22.297-.31.465-1.83 3.138-1.11 7.047 1.51 9.363-.12.139-.22.297-.31.465l-.2.337c-1.99 3.415-.81 7.77 2.63 9.74l3.23 1.84c6.482 3.712 14.03 3.889 20.41 1.16l9.606 9.508a2.012 2.012 0 0 0 2.828 0l9.604-9.51c6.38 2.73 13.93 2.554 20.412-1.157l3.23-1.841c3.44-1.97 4.62-6.325 2.63-9.74l-.2-.337a2.51 2.51 0 0 0-.31-.465c2.62-2.315 3.34-6.225 1.51-9.362zm-68.26 18.014l-2.69-1.544a3.15 3.15 0 0 1-1.17-4.325l.2-.337a.41.41 0 0 1 .55-.148l4.48 2.564c.87.495 2.01.366 2.64-.396.8-.97.51-2.376-.54-2.98l-7.01-3.998a3.546 3.546 0 0 1-1.31-4.89c.11-.178.36-.228.54-.13l4.49 2.565c.86.495 2 .366 2.63-.396.8-.97.51-2.376-.54-2.98l-7-3.998a3.546 3.546 0 0 1-1.31-4.89.4.4 0 0 1 .53-.13l14.847 8.483a12.965 12.965 0 0 0-1.478 6.004c0 3.67 1.566 7.202 4.238 9.632l3.56 3.525c-5.037 1.613-10.717 1.196-15.657-1.631zm29.97 10.199l-15.105-14.95a9.19 9.19 0 0 1-3.006-6.774c0-5.075 4.17-9.203 9.298-9.203a9.26 9.26 0 0 1 7.25 3.443c.379.468.95.742 1.557.744h.007c.603 0 1.174-.27 1.554-.733a9.27 9.27 0 0 1 7.259-3.453c5.127.003 9.299 4.13 9.299 9.203 0 2.567-1.096 5.036-3.066 6.832l-15.047 14.89zm34.7-31.193l-7 3.999a1.974 1.974 0 0 0-.54 2.979c.63.762 1.77.89 2.63.396l4.49-2.564c.18-.1.43-.05.54.129 1.01 1.712.42 3.9-1.31 4.89l-7.01 3.999a1.974 1.974 0 0 0-.54 2.979c.63.762 1.77.89 2.64.396l4.48-2.564a.41.41 0 0 1 .55.148l.2.337a3.15 3.15 0 0 1-1.17 4.325l-2.69 1.544c-4.94 2.828-10.621 3.245-15.66 1.63l3.502-3.467a13.136 13.136 0 0 0 4.299-9.69c0-2.162-.54-4.2-1.48-6.002l14.849-8.482a.4.4 0 0 1 .53.129c1.01 1.712.42 3.9-1.31 4.889z"/></svg>',
            minWidth: 10,
            maxWidth: 70
        },
        {
            content: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 37 33"><g fill="#F6BF39" fill-rule="nonzero"><path fill="#F6BF39" d="M36.832 10.047c-.228-2.619-.893-4.172-2.542-5.937C32.064 1.727 29.673.52 27.185.52c-3.87 0-6.875 2.91-8.475 4.898C17.11 3.43 14.106.52 10.235.52c-2.488 0-4.879 1.208-7.104 3.59C1.481 5.875.816 7.428.591 10.02c-1.176 11 14.43 20.881 17.168 22.526a1.371 1.371 0 0 0 1.268.315 1.461 1.461 0 0 0 .566-.274c2.536-1.515 18.423-11.471 17.24-22.54zM18.71 29.858C15.523 27.867 2.397 19.1 3.34 10.293c.174-1.999.577-2.955 1.798-4.26C6.82 4.23 8.536 3.315 10.236 3.315c3.187 0 6.093 3.283 7.309 5.223.253.403.693.648 1.165.648.472 0 .912-.245 1.165-.649.335-.535 3.386-5.222 7.309-5.222 1.7 0 3.416.914 5.1 2.716 1.22 1.306 1.623 2.262 1.8 4.288.939 8.78-12.186 17.547-15.374 19.538z"/><path fill="#F6BF39" d="M28.73 6.939a1.379 1.379 0 0 0-1.71.953 1.4 1.4 0 0 0 .94 1.733c.58.17.961.447 1.137.822.19.405.155.959-.098 1.56-.3.71.027 1.531.728 1.835.176.076.36.112.54.112a1.38 1.38 0 0 0 1.271-.85c.568-1.348.587-2.716.054-3.854-.362-.778-1.154-1.81-2.861-2.311z"/></g></svg>',
            minWidth: 10,
            maxWidth: 70
        },
        {
            content: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 22"><path fill="#F6BF39" fill-rule="nonzero" d="M22.94 2.62c-1.134-1.13-2.7-1.696-4.7-1.696-.554 0-1.12.098-1.695.294a6.789 6.789 0 0 0-1.607.793 17.16 17.16 0 0 0-1.28.937c-.356.291-.696.601-1.017.93-.321-.329-.66-.639-1.018-.93a17.204 17.204 0 0 0-1.279-.937 6.798 6.798 0 0 0-1.607-.793A5.244 5.244 0 0 0 7.043.924c-2 0-3.567.565-4.701 1.696C1.208 3.75.64 5.317.64 7.323c0 .61.105 1.24.315 1.886.21.647.449 1.199.716 1.655.268.455.572.9.911 1.333.34.433.587.73.743.895.157.164.28.283.369.355l8.357 8.23c.16.165.357.247.589.247a.794.794 0 0 0 .59-.246l8.343-8.203c2.045-2.087 3.067-4.138 3.067-6.152 0-2.006-.567-3.573-1.7-4.703z"/></svg>',
            minWidth: 10,
            maxWidth: 70
        }
    ]
});
```
