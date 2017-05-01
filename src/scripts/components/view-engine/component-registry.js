const components = {};

class ComponentRegistry {

  constructor () {}

  addComponent (key, val) {
    components[key] = val;

    console.log('added',val, typeof val);
    //let hrm = new val();
    //console.log('create ', new val());
  }

  getComponent (key) {
    return components[key];
  }

}

export default new ComponentRegistry();