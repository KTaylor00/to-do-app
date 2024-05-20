# ToDoApp Setup!

## Checks
You're going to need to use an lts of node to work with angular. 

### Node
A great tool that I use to manage my node versions is node version manager (nvm). It is an awesome tool. 
You can download it from here -> https://github.com/coreybutler/nvm-windows/releases. You'll have to scroll down to assets and then click on nvm-setup.exe.

Once installed, you're going to have to open the command prompt in administrator, once open, you can type in the command -> nvm install lts
After installation, you can then type the command -> nvm use lts
It will tell you that you are using the latest version of the long term support for node.

### Angular CLI
To start the Angular project you'll have to install their cli, to do so you can type the command -> npm install -g @angular/cli

## Initial Setup
I recommand using visual studio code as the editor, but you are free to use what you prefer.

You'll first have to grab the ZIP folder, once you have extracted the contents you can then open the project in VSCode.

Open the main folder that houses all the project folders and files.

Once inside open the terminal in VSCode, preferably cmd. In the terminal you'll type the command -> npm install , this will install all the dependencies for the project.

When everything has been installed you can type the command -> ng serve --o

That will open the project in your browser and you should be good to go. 

NB. Make sure the API is running via https.
