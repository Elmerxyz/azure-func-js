# Azure Functions App

This project contains two Azure Functions: an HTTP Trigger and a Timer Trigger.

## HTTP Trigger

The HTTP Trigger function responds to HTTP requests. It is configured in the `HttpTrigger/function.json` file and the logic is implemented in `HttpTrigger/index.js`.

### Setup

1. Navigate to the `HttpTrigger` directory.
2. Open `function.json` to configure the route and methods.
3. Implement your logic in `index.js`.

## Timer Trigger

The Timer Trigger function runs on a schedule. It is configured in the `TimerTrigger/function.json` file and logs "Hello World" to the console every 30 seconds in `TimerTrigger/index.js`.

### Setup

1. Navigate to the `TimerTrigger` directory.
2. Open `function.json` to configure the schedule.
3. The logic is implemented in `index.js`.

## Global Configuration

The `host.json` file contains global settings for the Azure Functions host, including logging and timeout settings.

## Local Settings

The `local.settings.json` file contains local configuration settings, such as connection strings and application settings. This file is not deployed to Azure.

## Running the Project

To run the project locally, use the Azure Functions Core Tools. Make sure to install the necessary dependencies and run the functions using the command line.

## License

This project is licensed under the MIT License.# azure-func-js
# azure-func-js
