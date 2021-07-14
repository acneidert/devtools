import Nullstack from 'nullstack';
import _ from 'lodash';
import bulmaDivider from 'bulma-divider';

class InfoPanel extends Nullstack {
  
  node = null

  getInstance({ nullApp = null, instance = null }) {
    this.node = nullApp.getNodeBydata('keyComponent', instance ); 
    return this.node.instance
  }

  getProps() {
    const instance = this.getInstance();
    const keys = _.keys(instance);
    const props = keys.filter((key) => {
      if (_.isFunction(instance[key])) return false;
      return true;
    });
    return _.toPairs(_.pick(instance, props)).sort((el) =>
      el[0].startsWith('_') ? -1 : 1
    );
  }
  getFunctions() {
    return _.toPairs(_.pickBy(this.getInstance(), _.isFunction));
  }

  hydrate() {
    bulmaDivider;
  }

  renderFunction({name, func}) {
    console.log(func);
    
    
    return <></>
  }
  
  render({instance = null }) {
    if(!instance) return false
    const lifecycle = ['prepare', 'initiate', 'hydrate', 'update', 'terminate']
    return (
      <div>
        <ul>
          <h2 class="subtitle">Properties</h2>
          {this.getProps().map((prop) => (
            <li>
              <b>{prop[0]}:</b> {prop[1]}
            </li>
          ))}
        </ul>
        <div class="is-divider"></div>
        <ul>
          <h2 class="subtitle">Functions</h2>
          {this.getFunctions().map((prop) => {
            const func = prop[1].name;
            var type = 'function';
            if (lifecycle.includes(func)) type = 'lifecycle'
            if (func.startsWith('render')) type = 'render'
            if (func ==='_invoke') type = 'serverFunction'
            return (
             <li>
               <i>{type}</i> <b>{prop[0]}:</b>
               {/* <Function name={prop[0]} func={} /> */}
             </li>
           )
          })}
        </ul>
      </div>
    );
  }
}

export default InfoPanel;
