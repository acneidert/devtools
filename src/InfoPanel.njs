import Nullstack from 'nullstack';
import _ from 'lodash';
import { _getNodeBydata } from './util/nodes';

class InfoPanel extends Nullstack {
  
  node = null

  getInstance({ nullApp = null, instance = null }) {
    if(nullApp !== null){
      this.node = _getNodeBydata('keyComponent', instance, nullApp.node);// nullApp.getNodeBydata( ); 
      return this.node.instance
    }
  }

  getFunctions() {
    return _.toPairs(_.pickBy(this.getInstance(), _.isFunction));
  }

  hydrate() {
    this.getInstance();
  }

  render({instance = null }) {
    if(!instance) return false
    this.getInstance();
    return (
      <div>
        <ul>
          <h2 class="text-2xl font-semibold">Properties</h2>
          {!!this.node && this.node.instance.props.map((prop) => (
            <li>
              <b>{prop.name}:</b> {prop.value}
            </li>
          ))}
        </ul>
        <div class="divider"></div> 
        <ul>
          <h2 class="text-2xl font-semibold">Functions</h2>
          {!!this.node && this.node.instance.functions.map((func) => {
            return (
             <li>
               <div data-tip={func.type} class="tooltip tooltip-left">
                  <b>{func.name}:</b>
               </div>
             </li>
           )
          })}
        </ul>
      </div>
    );
  }
}

export default InfoPanel;
