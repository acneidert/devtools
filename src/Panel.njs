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

  getAttributes({attributes}){
    var attribs = ''
    attributes.map(
      attrib => 
        attribs = `${attribs} ${attrib.name}=${attrib.value === '' ? '' : attrib.value}`
    );
    return attribs;
  }

  renderInnerComponent(ctx) {
    const {name, keyComponent, attributes} = ctx;
    const attribs = this.getAttributes({attributes});
    
    return (<span class='link link-secondary' onclick={this.setSelected} data-key={keyComponent}>
     <b>{name}</b> <i>{attribs}</i>
    </span>);
  }

  renderComponent(ctx) {
    const {name, keyComponent, attributes} = ctx;
    const attribs = this.getAttributes({attributes});
    return (
    <a 
      class='link link-primary' 
      onclick={this.setSelected} 
      data-key={keyComponent}
    >
      <b>{name}</b> <i>{attribs}</i>
    </a>);
  }

  renderTree({ node }) {
    if(!node) return false;
    console.log(node);
    return node.children.map((el, i) => {
      const ul = this.renderTree({ node: el });
      if(!el) return false;
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
