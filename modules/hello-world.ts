import { ZuploContext, ZuploRequest } from "@zuplo/runtime";

const routes = {
  "foo": "https://example.com",
  "bar": "https://hello.com"
}

export default async function (request: ZuploRequest, context: ZuploContext) {
  const url = routes[request.user.data.orgid];
  return fetch(url);
}
