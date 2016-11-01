import o from './core/operators';
import createElement from './components/create-element';

/**
 * Flex Component
 */
class Component {

  constructor() {}

  // we need to wait for parent.class to be constructured, before rendering,
  // or props will not be defined
  run() {
    const $root = document.getElementById('app');
    let dom = this.render();
    console.warn('dom', dom);
    $root.appendChild(this.createElement(dom, null));
  }

  createElement(node, parentNode) {

    // when node is a string only
    if(typeof node === 'string') {
      return document.createTextNode(node);
    }

    // create element from node.type ( div, li, ul etc )
    const $el = document.createElement(node.type);

    // logic operators
    // v:if
    // v:forEach
    // v:switch
    // TBC
    if(node.props) {

      // v-if
      if(o.defined(node.props['v-if'])) {
        if(!node.props['v-if']) {
          return null;
        }
      }

      // v-for
      if(o.defined(node.props['v-for']) && node.props['v-for']) {
        node.props['v-for'].forEach((forProp) => {
          node.props['v-for'] = null;
          node.props['value'] = forProp;
          parentNode.appendChild(this.createElement(node));
        });
        // every node will be handled by forEach,
        // that's why we don't want to render current node,
        // we will simply discard it
        return null;
      }

      // v-forEach
      if(o.defined(node.props['v-forEach']) && node.props['v-forEach']) {
        console.error('evalProps - forEach');
        let key = node.props['v-forEach'].split(' in ')[0];
        let arr = this[node.props['v-forEach'].split(' in ')[1]];
        arr.forEach((val) => {
          node.props['v-forEach'] = false;
          node.props['values'] = {};
          node.props['values'][key] = val;
          parentNode.appendChild(this.createElement(node));
        });
        // console.info();
        // every node will be handled by forEach,
        // that's why we don't want to render current node,
        // we will simply discard it
        return null;
      }
    }


    // let's handle the children
    node.children
      // create element for each children ( recursive )
      .map((child) => {
        if(o.function(child)) {
          child = child(node.props.values);
          return document.createTextNode(child);
        }else{
          return this.createElement(child, $el);
        }
      })
      // append children to the node
      .forEach((child) => {
        // if child is not empty
        // could be empty because of v:if etc
        if(child) {
          $el.appendChild(child);
        }
      });

    return $el;
  }


}

/**
 * Flex
 */
class Flex {

  // component class
  Component = Component;

  static create() {
    return new Flex();
  }

  createNode(type, props, ...children) {
    props = this.evalProps.apply(this, [props]);
    return { type, props, children };
  }

  /**
   * Eval props, as this bindings will become un-available on next stage
   * TODO: is eval only way we can do it ?
   * @param props
   * @returns {props}
   */
  evalProps(props) {
    // prop.split(' in ')

    // if(props) {
    //   if(o.defined(props['v-forEach']) && props['v-forEach']) {
    //     console.error('evalProps - forEach');
    //     let key = props['v-forEach'].split(' in ')[0];
    //     let arr = props['v-forEach'].split(' in ')[1];
    //     console.info(this);
    //   }
    // }
    return props;
  }

}

// module.exports = Flex.create();
export default Flex.create();
