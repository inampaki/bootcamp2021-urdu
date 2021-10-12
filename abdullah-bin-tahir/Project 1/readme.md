  <h1 align="center">Project One</h1>

  <h3>
    Requirements: Study the Chapter One of the Essential Typescript Text book and create a Todo App with a command line interface and persistant storage of data. </h3>

<!-- TABLE OF CONTENTS -->
<details open="open">
  <h3><summary>Table of Contents</summary></h3>
  <ol>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#comments">A note about comments</a></li>
    <li><a href="#inquirer.js">A note about inquirer.js</a></li>
  </ol>
</details>

<!-- GETTING STARTED -->
## Getting Started

### Prerequisites
1. Install nodejs from [here](https://nodejs.org/dist/v14.15.4)
2. Install git from [here](https://nodejs.org/dist/v14.15.4)
3. Install TypeScript
  ```sh
  npm install --global typescript@4.2.2
  ```

### Installation

1. Clone the repo
   ```sh
   git clone <repo-link>
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
3. Compile TypeScript code 
   ```sh
   tsc
   ```
4. Run the project 
   ```sh
   node dist\index.js
   ```
   



## Comments

Comments are color coded (using the [Better Comments](https://marketplace.visualstudio.com/items?itemName=aaron-bond.better-comments) extension for VSCode)

 

 - comments with ! are warnings, topic-headings or important points 
 - comments with ? are a brief explanation of the code
 - comments with * are links to documentation, and StackOverflow
 
 Here are some demos:
 
 ![demo_1](https://i.ibb.co/XLNztqg/demo-1.png)



![enter image description here](https://i.ibb.co/126G62p/demo-2.png)


##  Inquirer.js 

Inquirer.js suggests using *validate* instead of waiting for the promise and **handling bad user-input**  in the call back function.
 
_More detail in [Documentation](https://www.npmjs.com/package/inquirer)_

Here is a usage example in this project:

![enter image description here](https://i.ibb.co/R7ZzFSS/demo-3.png)
