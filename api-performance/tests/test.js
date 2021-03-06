import { Rate } from 'k6/metrics';
import postTest from '../src/test-functions/post';

// global errors rate variable needed to store all errors for all tests we import here
export const errorRate = new Rate('errors');
// options for k6
export const options = {
    thresholds: {
        http_req_duration: ['p(95)<250'],
        errors: ['rate<0.1']
    }
};

export function setup() {
    /*
     you can run some pre-script requests here
     get sama data 
     and return it into the actual test
     example: 
     return userAuth;
    */
}

// data parameter - any data you return from setup function 
export default function(data) {
    // you can use setup ${data} here now
    postTest();
  
};
