# Kiunzi

<!-- [![Build Status](https://github.com/jamarsto/Angular_Workspace/actions/workflows/workflow_file/badge.svg)](https://github.com/jamarsto/Angular_Workspace/actions/workflows/workflow_file/badge.svg) -->

Kiunzi is a microservices platform that provides the scaffolding needed by modern cloud native microservices based applications.

This repository contains an example angular project workspace.  It demonstrates a app-shell and two micro-frontend applications as the user interface for a microservices based application.

The framework here demonstrates the following features:
- [Webpack module federation](https://webpack.js.org/concepts/module-federation/)
- Module isolation using a [custom element](https://angular.io/guide/elements) allowing multiple frameworks for Modules such as:
  - Angular
  - React
  - Vue
  - AngularJS
  - Svelte
- [Router](https://angular.io/guide/router) synchronisation between the Shell and Modules using [Custom Events](https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/CustomEvent)
- Dynamic [Navbar](https://getbootstrap.com/docs/5.0/components/navbar/) generation in Shell from Modules
- Cross Shell and Module [Authentication](https://www.npmjs.com/package/angular-auth-oidc-client) & Authorisation using OIDC Code Flow with [PKCE](https://oauth.net/2/pkce/)

*Note: The modules work best when deployed in [Kubernetes](https://kubernetes.io/) using [Ingress](https://kubernetes.io/docs/concepts/services-networking/ingress/) to map paths to their [Services](https://kubernetes.io/docs/concepts/services-networking/service/).  To the Shell the Modules then look like they are deployed in sub directories rather than separate hosts.  We have prefixed the routes so a module called **app-app1** for instance is exposed on /mfe/**app-app1**/remoteEntry.js instead of https://**&lt;app-app1-host&gt;**:**&lt;port&gt;**/remoteEntry.js*
