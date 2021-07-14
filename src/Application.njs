import Nullstack from 'nullstack';
import './Application.scss';
import ComponentTest from './ComponentTest.njs';
import InfoPanel from './InfoPanel.njs';
import Panel from './Panel.njs';
import SearchBar from './SearchBar.njs';
import formatName from './util/FormatName';
import Third_Snake from './Third_Snake'

class Application extends Nullstack {
  nullApp = null;
  selected = null;
  testee = '';

  prepare({ page }) {
    page.locale = 'pt-BR';
  }

  hydrate({ environment, instances }) {
    if (environment.development) {
      window.nullstack = this;
    }

    // console.log(this);

    if (window.__NULLSTACK_COMPONENTS__) {
      this.nullApp = window.__NULLSTACK_COMPONENTS__;
    }
    // console.log('teste');
    // if (typeof __NULLSTACK_DEVTOOLS_HOOK__ !== 'undefined') {
    //   __NULLSTACK_DEVTOOLS_HOOK__.subscribe('event_a', event => {
    //     console.log(event);
    //     __NULLSTACK_DEVTOOLS_HOOK__.sendMessage({ data: 'foo' });
    //   });
    // } else {
    //   console.log('Please install my awesome chrome extension 🙏');
    // }
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

  renderNameComponent({ nullApp }) {
    var name = ' ';
    if (this.selected) {
      name = this.getInstance().name;
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

  // getInstances({ instances }) {
  //   return instances;
  // }

  render() {
    return (
      <main>
        
        <Teste thisValue="HAHAHAHHAH"/>
        <ComponentTest newValue="pppppppp" />
        <Head />
        <div class="container">
          NullStack Devtools {this.testee}
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
        <Third_Snake />
        <Third_Snake />
        <Third_Snake key="0000"/>
        <Third_Snake key="1111"/>
      </main>
    );
  }
}

export default Application;
