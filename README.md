# Twitter-profile-frontend

A project that allows displaying the information of a user's profile and the list of associated tweets, was created with context, Create React App, Tailwind css.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


    .
    ├── build                   # Compiled files (alternatively `dist`)
    ├── public                  # Public files
    ├── src                     # Source files (alternatively `lib` or `app`)
    |    ├── components         # Main components jsx
    |    ├── config             # Config files
    |    ├── context            # Files with status management
    |    ├── screens            # All project screens
    |    └── utils              # Util files
    └── README.md

## Add in S3 AWS bucket

Before sta start with deploying the project in AWS S3 Bucket yo should replace the **`{URL_API_TWITTER_PROFILE}`** in the file **`src/utils/constants.js`** because is the URL that connects with the `twitter-profile-api` this means, that is necessary first that you deploy the backend `twitter-profile-backend` serverless project.

## Deploy in S3 AWS bucket

> 1.   Create an [AWS](https://aws.amazon.com/free/) account.
> 2.   Install [AWS CLI]( https://aws.amazon.com/cli/).
> 3.   Create [S3 Bucket](https://docs.aws.amazon.com/es_es/AmazonS3/latest/userguide/creating-bucket.html) when you are creating the bucket please make the next steps:
-  `uncheck in the` **Block all public access**
-  `check` **Turning off block all public access might result in this bucket and the objects within becoming public**
> 4.   Create an [IAM CLI AWS user](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_users_create.html#id_users_create_cliwpsapi) the user needs the next permission:
- `AmazonS3FullAccess`
> 5.   Save the credentials IAM CLI AWS user is a file .csv
> 6.   Configure AWS CLI with user IAM keys use in your terminal the command `aws configure`
> 7.   In the package.json file change, the script with the backend bucket name obtained when the backend was deployed and replace the **`{BUCKECT-BACKEND-NAME}`**
> 8.   Execute in the root path to the project `yarn install`
> 9.   Execute in the root path to the project `yarn deploy`
> 10.  Go to your [AWS Console](https://console.aws.amazon.com/console/) find your S3 Service and enter in your S3 Bucket
> 11.  Go and select the Permission tab, find **Static website hosting** edit enable
> 12.  Put in field **Index document** the value **index.html**
> 13.  Put in field **Error document** the value **index.html**
> 14.  Finally, find in the same section Static **website hosting** and copy the site URL in the **block Bucket website endpoint** the URL is like that [http://twitter-profile-frontend.s3-website-us-east-1.amazonaws.com/](http://twitter-profile-frontend.s3-website-us-east-1.amazonaws.com/)

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

Time spent

Design and development 3 hours

Thanks to read!
