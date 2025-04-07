# Flag Explorer Setup

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.2.1.

### Download and Install Node and NVM

To setup Node, download the [Windows 64-bit Installer](https://nodejs.org/dist/v16.16.0/node-v16.16.0-x64.msi) from the [Node](https://nodejs.org/en/blog/release/v16.16.0) website.

Download NVM(Node Version Manager) by selecting the 'nvm-setup.exe' file from [this](https://github.com/coreybutler/nvm-windows/releases/tag/1.1.9) website

### Download and Install Angular CLI

From the windows command prompt run the following command to install the angular CLI.

- npm i -g @angular/cli@10.2.1 

##### Check installation

To check the installed Node version, use this command in the windows command prompt.

- node -v

To check the Node Version Manager, use this command in the windows command prompt.

- nvm

To check the installed angular version, use this command in the windows command prompt.

- ng v

# Code Download

The code can be downloaded from this repository [Frontend Code](https://github.com/yaasiercode2025/FlagExplorerFrontend)

### Running the code

Open VSC(Visual Studio Code) and then select the 'Folder' where the code has been downloaded to.

ZScaler blocks the installation of the node package modules when active. This can be disabled by running this command before installing the node_modules.

- npm config set strict-ssl false

Open a new terminal in VSC or the windows command prompt and type the following command to install the node_modules

- npm install --force

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io). The UI will not display becuase the browser runs in headless mode 'ChromeHeadless', this is to cater for the test execution in teh GitHub CI/CD pipeline
