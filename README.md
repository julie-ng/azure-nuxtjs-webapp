# Nuxt.js on Azure App Service

Example Azure Pipelines for deploying a _non-containerized_ [Nuxt.js](https://nuxtjs.org/) App to Azure App Service

| Status | npm run build | Deployment Method | URL |
|:--|:--|:--|:--|
| [![Build Status](https://dev.azure.com/julie-msft/public-demos/_apis/build/status/nuxtjs-webapp-git-deploy?branchName=main)](https://dev.azure.com/julie-msft/public-demos/_build/latest?definitionId=44&branchName=main) | CI Pipeline | [git push](./azure-pipelines/git-deploy.yaml) |  [nuxt-test-git-deploy.azurewebsites.net ](https://nuxt-test-git-deploy.azurewebsites.net) |
| [![Build Status](https://dev.azure.com/julie-msft/public-demos/_apis/build/status/nuxtjs-webapp-zip-deploy?branchName=main)](https://dev.azure.com/julie-msft/public-demos/_build/latest?definitionId=45&branchName=main) | App Service | [zip file](./azure-pipelines/zip-deploy.yaml) | [nuxt-test-zip-deploy.azurewebsites.net ](https://nuxt-test-zip-deploy.azurewebsites.net) |


## Requirements

- Azure Web App
- Nuxt.js applicaiton with Server Side Rendering (SSR)
- Azure Pipelines triggers Build & Zip Deployment 

## Files of Interest

- [`azure-pipelines/git-deploy.yaml`](./azure-pipelines/git-deploy.yaml)  

- [`azure-pipelines/zip-deploy.yaml`](./azure-pipelines/zip-deploy.yaml)  

- [`nuxt-config.js`](./nuxt-config.js)  
  configuration, including binding to `0.0.0.0` for docker and listening for port based on environment variable, i.e. `process.env.PORT`

- [`Dockerfile`](./Dockerfile)  
  to confirm whether app itself can run. It can run
  - Working Docker Image: [hub.docker.com/repository/docker/julieio/webapp-nuxt-test](https://hub.docker.com/repository/docker/julieio/webapp-nuxt-test)
  - Working Azure Web App: [nuxt-container-test.azurewebsites.net](https://nuxt-container-test.azurewebsites.net/)

---

(From original Nuxt.js Boilerplate code)

## Build Setup 

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out the [documentation](https://nuxtjs.org).

---

## Resources

### Pipeline

- https://stackoverflow.com/questions/64638097/ui-tests-in-azure-pipelines-displays-error-cannot-find-chrome-binary-using-node
- https://stackoverflow.com/questions/50642308/webdriverexception-unknown-error-devtoolsactiveport-file-doesnt-exist-while-t
- https://github.com/microsoft/axe-pipelines-samples/tree/main/typescript-selenium-webdriver-sample