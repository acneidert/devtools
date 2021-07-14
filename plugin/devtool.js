import _ from 'lodash';
import {isClass, isFunction} from 'nullstack/shared/nodes';
import Tree from './tree';

function transform(_context) {
    const {node, depth, instances} = _context;
    if (!window.__NULLSTACK_COMPONENTS__) window.__NULLSTACK_COMPONENTS__ = new Tree();
    const newNode = {}
    const instance = depth.join('-') === '0' ? 'application' : `n-${depth.join('-')}`;
    
    if(isClass(node)) {
        newNode.type = 'COMPONENT';
        newNode.name = node.type.name;
        newNode.definition = node.type;
        newNode.attributes = node.attributes;
        newNode.instance = instances[node.attributes.key || instance];
        newNode.keyComponent = node.attributes.key || instance;
    }
    else if(isFunction(node)) {
        newNode.type = 'INNER';
        newNode.name =  node.type.name.replace(/^(render)/g, '');
        newNode.definition = node.type;
        newNode.attributes = node.attributes;
        newNode.instance = null;
        newNode.keyComponent = `${instance}-${newNode.name}`;
    }
    window.__NULLSTACK_COMPONENTS__.add(newNode, depth);
}

function load(_context) {
   return 
}  
export default { transform, load, client: true, server: false };
