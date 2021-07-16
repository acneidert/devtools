export function _getNodeBydata(name, value, node) {
    if(node === null || node === undefined) return null;
    if(node.data !== undefined && node.data !== null ) {
          if((name in node.data)) {
              if(node.data[name] === value) return node.data;
          }
      }
      var find = null;
      for (var i = 0; i < node.children.length; i++) {
          find = _getNodeBydata(name, value, node.children[i]);
          if (find !== null) break;
      }
      return find;
  }