import Nullstack from 'nullstack';
import _ from 'lodash';
import bulmaDivider from 'bulma-divider';

class InfoPanel extends Nullstack {
  getInstance({ nullApp = null, instance = null }) {
    if (!nullApp || !instance) return {};
    return nullApp._scope.instances[instance];
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

  render({instance = null }) {
    if(!instance) return false
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
          {this.getFunctions().map((prop) => (
            <li>
              <b>{prop[0]}:</b> {prop[1]}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default InfoPanel;
