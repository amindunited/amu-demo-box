class Registry {

  constructor () {
    this.registeredClasses = {};
  }

  add (classes) {
    classes.forEach((val)=>{
      this.registeredClasses[val.name] = val;
    });
  }

  get (className) {
    if (this.registeredClasses[className]) {
      return this.registeredClasses[className];
    }
    throw(className + ' has not been registered');
  }

  getAll () {
    return this.registeredClasses;
  }

}

export default new Registry();