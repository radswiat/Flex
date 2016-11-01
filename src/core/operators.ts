class Operators{
  constructor() {}

  static create() {
    return new Operators();
  }

  function(val) {
    if(typeof val === 'function') return true;
    return false;
  }

  defined(obj) {
    return obj === void 1 ? false : true;
  }

  undefined(obj) {
    return obj === void 0 ? false : true;
  }

}

export default Operators.create();