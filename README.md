# EMS Protocol Application (Work in Progress)

Welcome to the EMS Protocol Application, an evolving and dynamic tool for Emergency Medical Services. Currently in active development, this application is crafted to provide critical information and functionalities across web and Android platforms—with an iOS version planned for release in the near future. Developed with the Angular framework, this project incorporates Capacitor for cross-platform native app capabilities, ngx-extended-pdf-viewer for comprehensive PDF viewing options, and Bootstrap for intuitive, responsive design.

## Getting Started

### Prerequisites

Ensure you have the following installed:

- Node.js (LTS version)
- Angular CLI (version 16.2.6 or later)
- Capacitor (for Android deployment)

### Development server

To fire up the development server, run:

```bash
ng serve
```

Open your browser and visit http://localhost:4200/. The app will automatically reload upon any file changes in the source code, thanks to the live-reload feature.

### Code Scaffolding

If you're looking to add a new component, directive, pipe, service, class, guard, interface, or module, use the Angular CLI's generate command:

```bash
ng generate component component-name
```

### Build

For production, run the following command to build the project:

```bash
ng build
```

The build artifacts will be stored in the dist/ directory, ready for deployment.

### Running Unit Tests

Execute unit tests written in Jasmine via Karma by running:

```bash
ng test
```

### Running End-to-End Tests

To perform end-to-end testing, use the following command:

```bash
ng e2e
```
Note that you must have an end-to-end testing package installed for this to work.

### Native Deployment with Capacitor

To prepare the application for Android, ensure you have the Android development environment set up, then run:

```bash

npx cap add android
npx cap open android
```

### Documentation and Help

To learn more about Angular CLI commands, use ng help or visit the  Angular CLI Overview and Command Reference page. https://angular.io/cli

For Capacitor documentation, check out Capacitor's Official Docs. https://capacitorjs.com/

Refer to ngx-extended-pdf-viewer for PDF integration guides. https://www.npmjs.com/package/ngx-extended-pdf-viewer

For styling with Bootstrap, visit Bootstrap's Official Documentation. https://getbootstrap.com/

Feel free to contribute to the project by submitting pull requests or opening issues. Your feedback and contributions are welcome!
