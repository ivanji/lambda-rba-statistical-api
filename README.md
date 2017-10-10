# lambda-rba-statistical-api
REST API for all statistical data from the Reserve Bank of Australia. 
Integrated with AWS Lambda and API Gateway, using claudiajs, to deploy it as an event-driven microservice.

*Requirements*
- AWS account with access to IAM and Lambda (AWS CLI)
- Node.js 6
- NPM
- claudiajs ```npm i claudia -g```


*To deploy*

```claudia create --handler lambda.handler --deploy-proxy-api --region us-west-2 --role rba-statistics-executor```
