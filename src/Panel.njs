import Nullstack from 'nullstack';
import Third_Snake from './Third_Snake.njs';
import formatName from './util/FormatName';
import './Panel.scss';

class Panel extends Nullstack {
  selected = null;

  getInstances({ nullApp = null }) {
    if (!nullApp) return {};
    const instan = nullApp.getData('instance');
    return nullApp;
  }

  setSelected({ data, onchange }) {
    // this.selected = data.instance;
    // const value = data.instance;
    // onchange({ value, data });
    
  }

  renderInnerComponent(ctx) {
    const {name} = ctx;
    return <span class='inner' onclick={this.setSelected}>{name}</span>
  }

  renderComponent(ctx) {
    const {name} = ctx;
    console.log(ctx);
    return <span class='component'>{name}</span>
  }

  renderTree({ node }) {
    return node.children.map((el) => {
      const ul = this.renderTree({ node: el });
      if (!!el.data.name) {
        return (
          <li>
            {el.data.type === 'COMPONENT' && <Component {...el.data} />}
            {el.data.type === 'INNER' && <InnerComponent {...el.data} />}
            {ul.lenght !== 0 && <ul>{ul}</ul>}
          </li>
        );
      } else {
        if (ul.lenght !== 0) {
          return <>{ul}</>;
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
