import _ from 'lodash';
import {isClass, isFunction} from 'nullstack/shared/nodes';
import Tree from './tree';

function transform(_context) {
    const {node, depth, instances} = _context;
    if (!window.__NULLSTACK_COMPONENTS__) window.__NULLSTACK_COMPONENTS__ = new Tree();
    const newNode = {}
    
    if(isClass(node)) {
        const instance = depth.join('-') === '0' ? 'application' : `n-${depth.join('-')}`;
        newNode.type = 'COMPONENT';
        newNode.name = node.type.name;
        newNode.definition = node.type;
        newNode.attributes = node.attributes;
        newNode.instance = instances[instance];
    }
    else if(isFunction(node)) {
        newNode.type = 'INNER';
        newNode.name =  node.type.name.replace(/^(render)/g, '');
        newNode.definition = node.type;
        newNode.attributes = node.attributes;
        newNode.instance = null;
    }
    window.__NULLSTACK_COMPONENTS__.add(newNode, depth);
}

// function load(_context) {
   
// }
export default { transform, load, client: true, server: false };
