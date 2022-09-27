import 'zone.js';

Promise.reject(new Error('test error')).finally(() => console.log('finally'));
