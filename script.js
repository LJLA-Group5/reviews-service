import http from 'k6/http';
import { sleep, check } from 'k6';

function getRandomId(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

export const options = {
  stages: [
    // { duration: '10s', target: 1 },
    // { duration: '15s', target: 10 },
    // { duration: '20s', target: 100 },
    // { duration: '25s', target: 1000 },
    // { duration: '30s', target: 1500 },
    // { duration: '15s', target: 100 },
    // { duration: '10s', target: 0 },
    { duration: '30s', target: 1000 },
    { duration: '45s', target: 1500 },
    { duration: '15s', target: 0 },
  ],
};

export default function () {
  let res = http.get(`http://localhost:3003/api/listings/${getRandomId(1, 10000001)}/reviews/`);
  check(res, {
    'status 200': (response) => response.status.toString() === '200',
  });

  sleep(1);
};
