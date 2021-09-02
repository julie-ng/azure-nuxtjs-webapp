# Nuxt.js on Azure App Service Test

Debugging Nuxt.js on Azure App Service

## Requirements

- Azure Web App
- Nuxt.js applicaiton with Server Side Rendering (SSR)
- Azure Pipelines triggers Build & Zip Deployment 

## Files of Interest

- [`azure-pipelines.yaml`](./azure-pipelines.yaml)  
  zip deploy of application to Azure App Service

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