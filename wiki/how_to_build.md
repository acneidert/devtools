# Devtools - Alfa of Alfa

## Warning this is on Alfa test and has a lot of bugs

### This Devtool works on Chromium based browsers
### Mozilla's browsers will be implemented soon

<img src='https://raw.githubusercontent.com/nullstack/nullstack/master/nullstack.png' height='60' alt='Nullstack' />

### Build Devtools

Install the dependencies:
`npm install`
`npm link`

And then, build...

`npm run build` 

### Install plugin on browser

In the chrome, goes to 
 * Goto Chrome Settings using three dots on the top right corner.
 ![IMG 01](/wiki/01.PNG )

 * Goto to More Tools and Extensions.
 ![IMG 02](/wiki/02.PNG )

 * Eneable developer tools and Load Unpacked
  ![IMG 03](/wiki/03.PNG )


### Install plugin on nullstack app

Go to your project and run 
`npm link devtools`

on index.js insert:

```js 
import devtools from 'devtools/plugin/devtool'

Nullstack.use(devtools);

```

Now Enjoy


 
