import {gpClient} from 'gigapaxos-client';

const EXECUTE_TYPE = 2000;

export function initialize(newReconfiguratorAddress) {
  gpClient.initialize(newReconfiguratorAddress);
}

export function sendRequest(service, request, callback) {
  gpClient.sendAppRequest(service, EXECUTE_TYPE, {APP_REQUEST: request}, callback);
}

export function test() {

  gpClient.initialize('http://127.0.0.1:9300');
  gpClient.sendAppRequest('LinWritesLocReadsApp0', 402, {REQUEST_VALUE : 0, STOP : false, EPOCH : 0}, function (response) {
    console.log('Received response : ' + JSON.stringify(response));
    alert('Received response : ' + JSON.stringify(response))
  });
}