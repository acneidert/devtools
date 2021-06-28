import Nullstack from 'nullstack';
import './Application.scss';
import InfoPanel from './InfoPanel.njs';
import Panel from './Panel.njs';
import SearchBar from './SearchBar.njs';
import formatName from './util/FormatName';

class Application extends Nullstack {
  nullApp = null;
  selected = null;

  prepare({ page }) {
    page.locale = 'pt-BR';
  }

  hydrate({ environment, instances }) {
    if (environment.development) {
      window.nullstack = this;
    }

    if (window.nullstack) {
      this.nullApp = window.nullstack;
    }
    console.log('teste');
    // if (typeof __NULLSTACK_DEVTOOLS_HOOK__ !== 'undefined') {
    //   __NULLSTACK_DEVTOOLS_HOOK__.subscribe('event_a', event => {
    //     console.log(event);
    //     __NULLSTACK_DEVTOOLS_HOOK__.sendMessage({ data: 'foo' });
    //   });
    // } else {
    //   console.log('Please install my awesome chrome extension 🙏');
    // }
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

  getInstances() {
    if (!this.nullApp) return {};
    return this.nullApp._scope.instances;
  }

  renderNameComponent({ nullApp }) {
    var name = ' ';
    if (this.selected) {
      name = formatName(this.getInstances()[this.selected].constructor.name);
    }
    return (
      <div class="columns">
        <div class="column">
          <h1 class="title">{name}</h1>
        </div>
      </div>
    );
  }

  handlePanel({ value }) {
    this.selected = value;
  }

  getInstances({ instances }) {
    return instances;
  }

  render() {
    return (
      <main>
        <Head />
        <div class="container">
          NullStack Devtools
          <div class="columns">
            <div class="column is-6">
              <SearchBar nullApp={this.nullApp} />
            </div>
            <div class="column is-6">
              <NameComponent />
            </div>
          </div>
          <div class="columns">
            <div class="column is-6">
              <Panel nullApp={this.nullApp} onchange={this.handlePanel} />
            </div>
            <div class="column is-6">
              <InfoPanel nullApp={this.nullApp} instance={this.selected} />
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default Application;
