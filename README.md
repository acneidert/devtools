# Devtools - Alfa of Alfa

## Warning this is on Alfa test and has a lot of bugs

### This Devtool works on Chromium based browsers
### Mozilla's browsers will be implemented soon

<img src='https://raw.githubusercontent.com/nullstack/nullstack/master/nullstack.png' height='60' alt='Nullstack' />

## How to use

### Install plugin on browser
 [Install](https://chrome.google.com/webstore/detail/nullstack-devtools/jbeglhfidlkdojonbjobjpbbjmjlhgjg) Nullstack Devtool Plugin for chromium based


### Install plugin on nullstack app

Go to your project and run 
`npm i @acneidert/devtools`

on your index.js insert:

```js 
import devtools from '@acneidert/devtools';

Nullstack.use(devtools);

```

Now Enjoy


## TODO
  - [ ] Transform Properties objects in a treeview
  - [ ] Change values on Properties and reflect on application
  - [ ] Make server functions callable 
  - [ ] Find best collors on UI
  - [ ] Make search bar usable
  - [ ] Add light and dark mode
  - [ ] Find a way to test this and make tests
 
