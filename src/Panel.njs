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
    const {name, keyComponent, attributes} = ctx;
    var attribs = ''
    Object.entries(attributes).map(
      value => attribs = `${attribs} ${value[0]}=${value[1] === '' ? '' : value[1]}`
    );
      
    
    return (<span class='link link-secondary' onclick={this.setSelected} data-key={keyComponent}>
     <b>{name}</b> <i>{attribs}</i>
    </span>);
  }

  renderComponent(ctx) {
    const {name, keyComponent} = ctx;
    return (
    <a 
      class='link link-primary' 
      onclick={this.setSelected} 
      data-key={keyComponent}
    >
      <b>{name}</b>
    </a>);
  }

  renderTree({ node }) {
    return node.children.map((el, i) => {
      const ul = this.renderTree({ node: el });
      if (!!el.data.name) {
        const klassLi = ul.lenght !== 0 ? 'has-child' : '';
        return (
          <li class={klassLi} key={`${el.data.name}${i}`}>
              <input id="tree-controll1" type="checkbox"/>
              <span class="tree-control"></span>
            <label>
              {el.data.type === 'COMPONENT' && <Component {...el.data} />}
              {el.data.type === 'INNER' && <InnerComponent {...el.data} />}
            </label>
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
      <div class="tree-box box-border">
        <ul class="trees">
          <Tree node={nullApp.node} />
        </ul>
      </div>
    );
  }
}

export default Panel;
