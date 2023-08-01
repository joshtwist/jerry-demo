import { ZuploContext, ZuploRequest } from "@zuplo/runtime";

type MyPolicyOptionsType = {
  myOption: any;
};
export default async function (
  request: ZuploRequest,
  context: ZuploContext,
  options: MyPolicyOptionsType,
  policyName: string
) {
  // your policy code goes here, and can use the options to perform any
  // configuration
  // See the docs: https://www.zuplo.com/docs/policies/custom-code-inbound


  const auth = 'user:password';
  const digest = btoa(auth);

  const nr = new Request(request, {
    headers: {
      authorization: `Basic ${digest}`
    }
  })

  return nr;
}
