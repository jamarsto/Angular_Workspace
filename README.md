# Kiunzi

<!-- [![Build Status](https://github.com/jamarsto/Angular_Workspace/actions/workflows/workflow_file/badge.svg)](https://github.com/jamarsto/Angular_Workspace/actions/workflows/workflow_file/badge.svg) -->

Kiunzi is a microservices platform that provides the scaffolding needed by modern cloud native microservices based applications.

This repository contains an example angular project workspace.  It demonstrates a app-shell and two micro-frontend applications as the user interface for a microservices based application.

The framework here demonstrates the following features:
- [Webpack module federation](https://webpack.js.org/concepts/module-federation/)
- Module isolation using a [custom element](https://angular.io/guide/elements)
- Route synchronisation between the Shell and Modules
- Dynamic navbar generation in Shell from Modules
- Cross Shell and Module Authentication & Authorisation using OIDC Code Flow with PKCE
