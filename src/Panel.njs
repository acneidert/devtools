import Nullstack from 'nullstack';
import Third_Snake from './Third_Snake.njs';
import formatName from './util/FormatName';

class Panel extends Nullstack {
  selected = null;

  getInstances({ nullApp = null }) {
    if (!nullApp) return {};
    return nullApp._scope.instances;
  }

  setSelected({ data, onchange }) {
    this.selected = data.instance;
    const value = data.instance;
    onchange({ value, data });
  }

  renderComponent({ name, attributes, instance }) {
    var attibutesDOM = '';
    Object.entries(attributes).map(([key, value]) => {
      var val = typeof value === 'function' ? ` func ${value.name}` : value;
      if (key === 'children') return;
      attibutesDOM = `${attibutesDOM} ${key}="${val}"`;
    });

    return (
      <li>
        <a onclick={this.setSelected} data-instance={instance}>
          {'< '}<big><b>{name}</b></big> <i>{attibutesDOM}</i> {' />'}
        </a>
      </li>
    );
  }

  render() {
    return (
      <div>
        {Object.entries(this.getInstances()).map(([key, value]) => {
          const name = formatName(value.constructor.name);
          const attributes = value._attributes;
          return (
            <ul>
              <Component instance={key} name={name} attributes={attributes} />
            </ul>
          );
        })}
        <Third_Snake data-teste={10} valor11="11" />
      </div>
    );
  }
}

export default Panel;
