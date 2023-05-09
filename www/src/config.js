// You can obtain these values by running:
// aws cloudformation describe-stacks --stack-name <YOUR STACK NAME> --query "Stacks[0].Outputs[]"

const config = {
  "aws_user_pools_web_client_id": "2mchv9h84r3139ho521dv9p5hp",     // CognitoClientID
  "api_base_url": "https://qt7i1uvew6.execute-api.us-east-1.amazonaws.com/{StageNameParam}",                                     // TodoFunctionApi
  "cognito_hosted_domain": "mytodoappdemo-stacknew.auth.us-east-1.amazoncognito.com",                   // CognitoDomainName
  "redirect_url": "https://master.d14fo6y0v83110.amplifyapp.com"                                      // AmplifyURL
};

export default config;
