export default {
  MAX_ATTACHMENT_SIZE: 5000000,
  s3: {
    REGION: "ca-central-1",
    BUCKET: "bobop-serverless-notes-uploads"
  },
  apiGateway: {
    REGION: "us-east-2",
    URL: "https://7qnrw7wso7.execute-api.us-east-2.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-2",
    USER_POOL_ID: "us-east-2_wWjTF8iC3",
    APP_CLIENT_ID: "7fj85f8vbl2mq6rb0uu0o5hltu",
    IDENTITY_POOL_ID: "us-east-2:74455856-82aa-4074-907c-9c0f39df66f4"
  }
};