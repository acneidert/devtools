import Nullstack from 'nullstack';
import _ from 'lodash';

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

  render({instance = null }) {
    if(!instance) return false
    const lifecycle = ['prepare', 'initiate', 'hydrate', 'update', 'terminate']
    return (
      <div>
        <ul>
          <h2 class="text-2xl font-semibold">Properties</h2>
          {this.getProps().map((prop) => (
            <li>
              <b>{prop[0]}:</b> {prop[1]}
            </li>
          ))}
        </ul>
        <div class="divider"></div> 
        <ul>
          <h2 class="text-2xl font-semibold">Functions</h2>
          {this.getFunctions().map((prop) => {
            const func = prop[1].name;
            var type = 'Function';
            if (func ==='render'){
              type = 'Render Function'
            } else {
              if (lifecycle.includes(func)) type = 'Lifecycle'
              if (func.startsWith('render')) type = 'Inner Component'
              if (func ==='_invoke') type = 'Server Function'
            }
            return (
             <li>
               <div data-tip={type} class="tooltip tooltip-left">
                  <b>{prop[0]}:</b>
               </div>
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
