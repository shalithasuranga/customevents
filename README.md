# customevents
A friendly wrapper for [`CustomEvent`](https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent).

### Example

```js
import * as customevents from 'customevents'

// Define a new event handler
function onMyEvent(event) {
  console.log(event.detail);
}
customevents.on('myEvent', onMyEvent);

// Dispatch events.
customevents.dispatch('myEvent', {myData: 'Test data'});

// Remove a handler
customevents.off('myEvent', onMyEvent);
```

### License
MIT
