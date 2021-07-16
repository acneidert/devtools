class Node {
    data = undefined;
    children = [];
    
    constructor (data) {
        this.data = data
    }

    
    _getData(name, arr) {
        this.children.forEach((child) => {
            child._getData(name, arr);
        });
        if(this.data === undefined || this.data === null ) return;
        if(!(name in this.data)) return;
        arr.push(this.data[name]);
    }

    _getNodeBydata(name, value, partial = false) {
        if(this.data !== undefined && this.data !== null ) {
            if((name in this.data)) {
                if(this.data[name] === value) return this.data;
            }
        }
        var find = null;
        for (var i = 0; i < this.children.length; i++) {
            find = this.children[i]._getNodeBydata(name, value, partial);
            if (find !== null) break;
        }
        return find;
    }
}

export default class Tree {
    node = undefined;

    constructor(data = null) {
        this.node = new Node(data);
    }

    toJson() {
        return JSON.stringify(this)
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

    getData(name) {
        const arr = []
        this.node._getData(name, arr);
        return arr
    }

    getNodeBydata(name, value, partial = false) {
        return this.node._getNodeBydata(name, value, partial = false);
    }

}
