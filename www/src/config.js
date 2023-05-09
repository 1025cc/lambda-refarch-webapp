// You can obtain these values by running:
// aws cloudformation describe-stacks --stack-name <YOUR STACK NAME> --query "Stacks[0].Outputs[]"

const config = {
  "aws_user_pools_web_client_id": "70n8unmaqitnvru4un3eukalea",     // CognitoClientID
  "api_base_url": "https://5bpfoklt25.execute-api.us-east-1.amazonaws.com/{StageNameParam}",                                     // TodoFunctionApi
  "cognito_hosted_domain": "mytodoappdemo-stack2.auth.us-east-1.amazoncognito.com",                   // CognitoDomainName
  "redirect_url": "https://master.d1a9qsoy01toy.amplifyapp.com"                                      // AmplifyURL
};

export default config;
