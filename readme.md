## Expected

1. If the promise is rejected, the final callback should be executed
2. After that, it should throw the UnhandledPromiseRejection error

## Actual without zone.js

Work as expected

## Actual with zone.js

UnhandledPromiseRejection error is thrown only without finally callback

## Side effect

Unhandled errors in promises with finally callback is missing. Console is empty. Logging systems also do not see such errors.
