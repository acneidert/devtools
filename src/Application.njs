import Nullstack from 'nullstack';
import './Application.scss';
import InfoPanel from './InfoPanel.njs';
import Panel from './Panel.njs';
import SearchBar from './SearchBar.njs';

class Application extends Nullstack {
  nullApp = null;
  selected = null;
  testee = '';

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
      this.nullApp = window.__NULLSTACK_COMPONENTS__;
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
    return this.nullApp.getNodeBydata('keyComponent', this.selected )
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
      <main>
        <Head />
        <div class="container mx-auto">
          NullStack Devtools
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
