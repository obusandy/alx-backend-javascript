/**
 * const instance of WeakMap
 */
export const weakMap = new WeakMap();

/**
 * Makes a query to an API
 * endpoint with rate limiting.
 * @param {*} endpoint - The URL of the API endpoint to query.
 * returns - - Throws an error if the call limit for
 * the endpoint is reached.
 */
export function queryAPI(endpoint) {
  if (!weakMap.has(endpoint)) {
    weakMap.set(endpoint, 0);
  }

  weakMap.set(endpoint, weakMap.get(endpoint) + 1);
  if (weakMap.get(endpoint) >= 5) {
    throw new Error("Endpoint load is high");
  }
}
