# Sales

This is a "Hello World" application which is designed to show the core capabilities and features of both the CUBA Platform and Studio.

The Sales application is a simple purchase management system that enables tracking orders made by customers. Each order consists of a number of products. Customers, products and orders can be created, edited and deleted through the system user interface.

The tutorial videos with the detailed description are available on the [Quick Start](https://www.cuba-platform.com/en/quickstart). The Quick Start enables you to start your own CUBA application within 30 minutes.

The application project covers the following aspects:

- Data Model Design
    - Creating entities
    - Executing DDL scripts
    - Creating relationships in entities
- User Interface Design
    - Generating  CRUD screens
    - Creating views for related entities
    - Creating data sources for screens to display composite screens
    - Visual editing of the existing screens
- Creating Integration Tests

In order to run integration tests, do the following:

- Execute `startTestDb` and `createTestDb` Gradle tasks in the command line or via the Studio *Search* dialog.
- To run the tests from the command line, use the `test` Gradle task.
- To run from an IDE, first execute *Build > Assemble project*, then *Build > Create or update IDE project files*. After that you can run tests from the IDE.

Based on CUBA Platform 6.7.6
