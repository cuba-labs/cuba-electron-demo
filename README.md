# cuba-electron-demo

CUBA Platform + Electron.js demo.

## Sales

This is a "Hello World" application which is designed to show the core capabilities and features of both the CUBA Platform and Studio.

The Sales application is a simple purchase management system that enables tracking orders made by customers. Each order consists of a number of products. Customers, products and orders can be created, edited and deleted through the system user interface.

Based on CUBA Platform 6.8.1

## Electron

This project includes an experimental module `electron`. It enables you to build desktop client for your system from the same code as web client, you can even use the same UI technologies such as HTML5 and CSS.

## Try it!

1. Build and start the application using CUBA Studio
2. Run in CLI:
```
> gradlew buildElectronApp
```
3. Go to `./build/electron-app`
4. Start cuba-electron-demo executable

![CUBA Platform Electron integration](/images/sales-electron.png)

## What is under the hood? 

Read more about this approach here: `TODO`.