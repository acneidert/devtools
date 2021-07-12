class Node {
    data = undefined;
    children = [];
    
    constructor (data) {
        this.data = data
    }
}

export default class Tree {
    node = undefined;

    constructor(data = null) {
        this.node = new Node(data);
    }

    toString() {
        return `[Tree]: {\n node: ${this.node.toString(0)}}`
    }

    add(data, deep) {
        var node = this.node
        for(var i = 0 ; i < deep.length; i = i + 1 ) {
            if ( typeof node.children[deep[i]] === 'undefined' ){
                node.children[deep[i]] = new Node();
            }
            node = node.children[deep[i]]
        }
        node.data = data;
    }
}
