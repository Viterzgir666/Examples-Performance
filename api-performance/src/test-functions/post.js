import http from 'k6/http';
import {check} from 'k6';
import {errorRate} from '../../tests/test';
import { baseURL, postEndpoint } from '../constants';
import * as casual from 'casual';

export default function() {
    const uri = `${baseURL}${postEndpoint}`;
    const data = { 
        userId: casual.integer(100,200),
        id: casual.integer(1, 100),
        title: casual.title,
        body: casual.description
    };
    let res = http.post(uri, data);
    const result = check(res, { 'post is successfully added': (r) => r.status === 201 });
    errorRate.add(!result);
}
