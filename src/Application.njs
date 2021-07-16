import Nullstack from 'nullstack';
import './Application.scss';
import InfoPanel from './InfoPanel.njs';
import Panel from './Panel.njs';
import SearchBar from './SearchBar.njs';

import { _getNodeBydata } from './util/nodes';

class Application extends Nullstack {
  nullApp = null;
  selected = null;
  testee = '';
  theme = 'dark'

  initiate(){
    require('../public/tailwind.css');
  }
  prepare({ page }) {
    page.locale = 'pt-BR';
  }

  hydrate({ environment, instances }) {
    if (environment.development) {
      window.nullstack = this;
    }

    if (window.__NULLSTACK_COMPONENTS__) {
      this.nullApp = JSON.parse(JSON.stringify(window.__NULLSTACK_COMPONENTS__));
    }

    if (!!chrome.devtools) {
      chrome.devtools.inspectedWindow.eval(
        "__NULLSTACK_COMPONENTS__.toJson()", 
        (res) => {
          this.nullApp = JSON.parse(res);
        });
    }
  }

  update() {
    if (environment.development) {
      window.nullstack = this;
    }

    if (window.__NULLSTACK_COMPONENTS__) {
      this.nullApp = JSON.parse(JSON.stringify(window.__NULLSTACK_COMPONENTS__));
    }

    if (!!chrome.devtools) {
      chrome.devtools.inspectedWindow.eval(
        "__NULLSTACK_COMPONENTS__.toJson()", 
        (res) => {
          this.nullApp = JSON.parse(res);
        });
    }
  }

  renderTeste({thisValue}) {
    return (<span>{thisValue}</span>)
  }

  renderHead() {
    return (
      <>
        <link
          rel="stylesheet"
          href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
          integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
          crossorigin="anonymous"
        />
      </>
    );
  }

  
  getInstance() {
    return _getNodeBydata('keyComponent', this.selected, this.nullApp.node )
  }

  renderNameComponent() {
    var name = ' ';
    if (this.selected) {
      name = this.getInstance().name;
    }
    return (
      <div>
          <h1 class="text-3xl">{name}</h1>
      </div>
    );
  }

  handlePanel({ value }) {
    this.selected = value;
  }

  render() {
    return (
      <main data-theme={this.theme}>
        <Head />
        <div class="container mx-10">
          NullStack Devtools
          {/* <select class="select select-bordered select-error w-full max-w-xs" bind={this.theme}>
            <option disabled="disabled" selected="selected">Choose your superpower</option> 
            <option>light</option> 
            <option>dark</option> 
            <option>cupcake</option>
            <option>bumblebee</option>
            <option>emerald</option>
            <option>corporate</option>
            <option>synthwave</option>
            <option>retro</option>
            <option>cyberpunk</option>
            <option>valentine</option>
            <option>halloween</option>
            <option>garden</option>
            <option>forest</option>
            <option>aqua</option>
            <option>lofi</option>
            <option>pastel</option>
            <option>fantasy</option>
            <option>wireframe</option>
            <option>black</option>
            <option>luxury</option>
            <option>dracula</option>
          </select> */}
            <div class="grid grid-rows-2">
              <div class="grid grid-cols-2">
                <SearchBar nullApp={this.nullApp} />
                <NameComponent />
              </div>
            </div>
            <div class="grid grid-rows-2">
              <div class="grid grid-cols-2">
                <Panel nullApp={this.nullApp} onchange={this.handlePanel} />
                <InfoPanel nullApp={this.nullApp} instance={this.selected} />
              </div>
            </div>
        </div>
      </main>
    );
  }
}

export default Application;
