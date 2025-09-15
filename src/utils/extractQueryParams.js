export function extractQueryParams(query = "") {
  if (query.startsWith("?")) {
    query = query.slice(1);
  }
  return query
    .split("&")
    .filter(Boolean)
    .reduce((queryParams, param) => {
      const [key, value] = param.split("=");
      queryParams[key] = value;
      return queryParams;
    }, {});
}
