import Nullstack from 'nullstack';
import './Panel.scss';

class Panel extends Nullstack {
  
  selected = null;

  setSelected({ nullApp, data, onchange }) {
    // console.log()
    this.selected = data.key
    const value = data.key;
    onchange({ value, data });

  }

  renderInnerComponent(ctx) {
    const {name, keyComponent} = ctx;
    return (<span class='inner' onclick={this.setSelected} data-key={keyComponent}>
      {name}
    </span>);
  }

  renderComponent(ctx) {
    const {name, keyComponent} = ctx;
    return (
    <a 
      class='component' 
      onclick={this.setSelected} 
      data-key={keyComponent}
    >
      {name}
    </a>);
  }

  renderTree({ node }) {
    return node.children.map((el, i) => {
      const ol = this.renderTree({ node: el });
      if (!!el.data.name) {
        return (
          <li key={`${el.data.name}${i}`}>
            {el.data.type === 'COMPONENT' && <Component {...el.data} />}
            {el.data.type === 'INNER' && <InnerComponent {...el.data} />}
            {ol.lenght !== 0 && <ol>{ol}</ol>}
          </li>
        );
      } else {
        if (ol.lenght !== 0) {
          return <>{ol}</>;
        }
      }
    });
  }

  render({ nullApp = [] }) {
    if (nullApp === null) return false;
    return (
      <div class="content">
        <Tree node={nullApp.node} />
      </div>
    );
  }
}

export default Panel;
