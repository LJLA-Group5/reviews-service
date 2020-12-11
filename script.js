import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  stages: [
    { duration: '30s', target: 1500 },
    { duration: '45s', target: 1500 },
    { duration: '10s', target: 0 },
  ],
};

export default function () {
  let response;

  response = http.get(`http://localhost:3002/api/products/arango/product/${getRandomNum}`);
  check(response, {
    'status equals 200': (response) => response.status.toString() === '200',
  });

  sleep(1);
};
