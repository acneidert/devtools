import _ from 'lodash';
import formatName from '../src/util/FormatName';
const tree = {}
function transform(ctx) {
    console.log(ctx.node)
    // const obj = {}
    // const {node, depth} = ctx;
    // const path = depth.join('.');
    // if(typeof node === 'string') return;
    // if(typeof node.type === 'string') return;
    // try {
    //     _.set(obj, path, formatName(node.type.name));
    // } catch (error) {
        
    // }
    // _.merge(tree, obj)
    // // console.log(tree)
   
}

function load(_context) {
    // if(typeof __NULLSTACK_DEVTOOLS_HOOK__ !== 'undefined'){
    //     __NULLSTACK_DEVTOOLS_HOOK__.subscribe('init', event => {
    //         console.log(event);
    //         __NULLSTACK_DEVTOOLS_HOOK__.sendMessage({nullApp: window.nullstack})
    //     })
    // }

    // window.__NULLSTACK_HOOK__ = 
    console.log('Load', _context)

}
export default { transform, load, client: true, server: false };
