import 'zone.js';

try {
  await Promise.reject(new Error('test error'));
} finally {
  console.log('finally');
}
