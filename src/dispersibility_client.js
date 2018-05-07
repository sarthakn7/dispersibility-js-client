const EXECUTE_TYPE = 2000;

export function initialize(newReconfiguratorAddress) {
  gpClient.initialize(newReconfiguratorAddress);
}

export function sendRequest(service, request, callback) {
  gpClient.sendAppRequest(service, EXECUTE_TYPE, {APP_REQUEST: request}, callback);
}