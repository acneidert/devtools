import _ from 'lodash';
import {isClass, isFunction} from 'nullstack/shared/nodes';
import generateKey from 'nullstack/shared/generateKey';
import Tree from './tree';

function getFunctions(instance) {
    return _.toPairs(_.pickBy(instance, _.isFunction));
}

function getProps(instance) {
    const keys = _.keys(instance);
    const props = keys.filter((key) => {
      if (_.isFunction(instance[key])) return false;
      return true;
    });
    return _.toPairs(_.pick(instance, props)).sort((el) =>
      el[0].startsWith('_') ? -1 : 1
    );
  }

function transform(_context) {
    const {node, depth, instances, environment} = _context;
    if(!node) return;
    if(environment.production) return;
    if (!window.__NULLSTACK_COMPONENTS__) window.__NULLSTACK_COMPONENTS__ = new Tree();
    const newNode = {}
    if(isClass(node)) {
        console.log(node)
        const instance = depth.join('-') === '0' ? 'application' : generateKey(node, depth);
        const classInstance = instances[node.attributes.key || instance];
        const functions = getFunctions(classInstance);
        const props = getProps(classInstance);
        const lifecycle = ['prepare', 'initiate', 'hydrate', 'update', 'terminate']
        newNode.type = 'COMPONENT';
        newNode.name = node.type.name;
        newNode.keyComponent = node.attributes.key || instance;

        newNode.instance = {
            functions: [],
            props: [], 
        };
        
        functions.forEach(func => {
            const realName =  func[1].name;
            const name = func[0];
            var type = 'Function'
            if (realName ==='render'){
                type = 'Render Function'
              } else {
                if (lifecycle.includes(realName)) type = 'Lifecycle'
                if (realName.startsWith('render')) type = 'Inner Component'
                if (realName ==='_invoke') type = 'Server Function'
              }
            newNode.instance.functions.push({
                 name,
                 type
            });
        })

        props.forEach(prop => {
            // console.log(prop[0], prop[1])
            newNode.instance.props.push({
                 name: prop[0],
                 value: `${prop[1]}`
            });
        })
        console.log('att', node)

        newNode.attributes = Object.entries(node.attributes).map(
            value => {
                if (value[0] === 'source')
                    return{
                        name: value[0], 
                        value: `this`
                    };
                return {
                    name: value[0], 
                    value: `${value[1]}`
                }
            }
        );

    }
    else if(isFunction(node)) {
        const instance = depth.join('-') === '0' ? 'application' : generateKey(node, depth);
        newNode.type = 'INNER';
        newNode.name =  node.type.name.replace(/^(render)/g, '');
        newNode.attributes = Object.entries(node.attributes).map( 
            value => { return {name: value[0], value: `${value[1]}`}}
        );
        newNode.instance = {
            functions: [],
            props: [], 
        };

        newNode.keyComponent = `${instance}-${newNode.name}`;
    }
    window.__NULLSTACK_COMPONENTS__.add(newNode, depth);
}

function load(_context) {
   return 
}  
export default { transform, load, client: true, server: false };
