# What is Typescript

Typescript is a programming language that is an upgrade of Java. It addresses the shortcoming of Java. Every Javascript is a valid code of typescript.

It is a complied language which means you need a typescript compiler

## Advantages

- 1. Type checking
- 2. Code Completion
- 3. Reactoring
- 4. New Features
- 5. Auto completion

## Development Environment

- 1. Node
- 2. npm i -g typescript (to install complier globally)
- 3. to verify version tsc -v
- 4. The typescript extension is .ts
- 5. compile the file using

## Configuring Typescript Complier

- 1. tsc --init # to initialise the typescript complier

     This creates a tsconfig.json file with the basic configuration of typescript complier

     - a) You can change the target java version in the target line (delete everything in between the qoutes and press ctrl + spacebar)

     - b) Change the root dir and create a directory src to contain the source fie

     - c) Change the output file to //outdir to "./dist" where the complied code will be

     - d) The sourceMap is enabled for debugging

- 2. Create a Launch debugging file

     - a) On the debugging icon of vs code you can create a template
     - ) add "preLaunchTask": "tsc: build - tsconfig.json ",
