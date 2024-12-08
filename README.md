# Építész Klub Web

The project runs on Next.js, with built-in Payload Headless CMS.

## Install Guide

To run the project, you need to give your database URI within the `.env` file. You can use the Docker Compose file in the root of the project to host a postgres server. In that case, the `.env` file would look something like this:
```
DATABASE_URI=postgresql://<user>:<password>@127.0.0.1:5432/<dbname>
PAYLOAD_SECRET=<secret>

POSTGRES_USER=<user>
POSTGRES_PASSWORD=<password>
POSTGRES_DB=<dbname>
```
The secret can be any given string (e.g. `1234`)

To install the dependencies of all the packages, be sure to have yarn installed:
```bash
npm install --global yarn
```

Install dependencies with Yarn:
```bash 
yarn
```

To run the project:
```bash 
yarn dev
```

After completing setup, and after making changes to the payload configuration or collections, run the following command to generate the typescript types:
```bash
payload generate:types
```

The CMS is available on the `/admin` sub route. When hosting on a new db, you will need to make a new user before you can use the CMS.