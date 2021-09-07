# Promise

A `Promise` is in one of these states:

- *pending*: initial state, neither fulfilled nor rejected.
- *fulfilled*: meaning that the operation was completed successfully.
- *rejected*: meaning that the operation failed.

## Chained Promises

```js
const myPromise = (new Promise(myExecutorFunc))
    .then(handleFulfilledA, handleRejectedA)
    .then(handleFulfilledB, handleRejectedB)
    .then(handleFulfilledC, handleRejectedC);

// or, perhaps better ...

const myPromise = (new Promise(myExecutorFunc))
    .then(handleFulfilledA)
    .then(handleFulfilledB)
    .then(handleFulfilledC)
    .catch(handleRejectedAny);
```

## Static methods

### `Promise.all(iterable)`

Wait for all promises to be resolved, or for any to be rejected.

If the returned promise resolves, it is resolved with an aggregating array of the values from the resolved promises, in
the same order as defined in the iterable of multiple promises.

If it rejects, it is rejected with the reason from the first promise in the iterable that was rejected.

```js
const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'foo');
});

Promise.all([promise1, promise2, promise3]).then((values) => {
    console.log(values);
});
// expected output: Array [3, 42, "foo"]

```

### `Promise.allSettled(iterable)`

Wait until all promises have settled (each may resolve or reject).

Returns a Promise that resolves after all of the given promises have either resolved or rejected, with an array of
objects that each describe the outcome of each promise.

```js
const promise1 = Promise.resolve(3);
const promise2 = new Promise((resolve, reject) => setTimeout(reject, 100, 'foo'));
const promises = [promise1, promise2];

Promise.allSettled(promises).then((results) => results.forEach((result) => console.log(result.status)));

// expected output:
// "fulfilled"
// "rejected"

```

### `Promise.any(iterable)`

Takes an iterable of Promise objects and, as soon as one of the promises in the iterable fulfills, returns a single
promise that resolves with the value from that promise.

```js
const promise1 = Promise.reject(0);
const promise2 = new Promise((resolve) => setTimeout(resolve, 100, 'quick'));
const promise3 = new Promise((resolve) => setTimeout(resolve, 500, 'slow'));

const promises = [promise1, promise2, promise3];

Promise.any(promises).then((value) => console.log(value));

// expected output: "quick"

```

### `Promise.race(iterable)`

Wait until any of the promises is resolved or rejected.

If the returned promise resolves, it is resolved with the value of the first promise in the iterable that resolved.

If it rejects, it is rejected with the reason from the first promise that was rejected.

```js
const promise1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 500, 'one');
});

const promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'two');
});

Promise.race([promise1, promise2]).then((value) => {
    console.log(value);
    // Both resolve, but promise2 is faster
});
// expected output: "two"

```

### `Promise.reject(reason)`

Returns a new `Promise` object that is rejected with the given reason.

```js
function resolved(result) {
    console.log('Resolved');
}

function rejected(result) {
    console.error(result);
}

Promise.reject(new Error('fail')).then(resolved, rejected);
// expected output: Error: fail

```

### `Promise.resolve(value)`

Returns a new `Promise` object that is resolved with the given value. If the value is a thenable (i.e. has a `then`
method), the returned promise will "follow" that thenable, adopting its eventual state; otherwise, the returned promise
will be fulfilled with the value.

Generally, if you don't know if a value is a promise or not, `Promise.resolve(value)` it instead and work with the
return value as a promise.
