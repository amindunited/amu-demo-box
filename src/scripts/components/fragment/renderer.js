import Registry from './registry';

class Renderer {

  /*
   * Sets a parnet element for the engine to attach to
   */
  init (parentElement) {
    if (typeof parentElement === 'string') {
      this.parentElement = document.querySelector(parentElement);
    } else if (!parentElement) {
      this.parentElement = document.querySelector('body');
    } else {
      this.parentElement = parentElement;
    }
    this.currentInstances = [];
    this.run();

  }

  findComponents (container) {
    console.log('components .... ', Registry.getAll());
    let components = Registry.getAll();
    let keys = Object.keys(components)
    for (let i in keys) {
      console.log('key loop ', components[keys[i]], components[keys[i]].name);
      let Component = components[keys[i]];
      let dashedName = Component.name.replace(/([A-Z])/g, (g) => '-' + g[0].toLowerCase());
      dashedName = dashedName.slice(1);
      console.log('dashed name ', dashedName);
      let instances = document.querySelectorAll(dashedName);
      console.log('instances ', instances);
      instances.forEach((val) => {
        let element = val;
        let component = new Component();
        component.element = element;
        //component.init();
        component.attachDOMListeners();
        this.currentInstances.push({
          name: dashedName,
          component: component
        });
      });
    };
  }

  render (container, value) {
    console.log('going to render ', container, value);
    let frag = document.createDocumentFragment();
    let range = document.createRange();
    let valueHTML = range.createContextualFragment(value);
    frag.appendChild(valueHTML);
    container.innerHTML = '';
    container.appendChild(frag);
  }

  run (container) {
    let _container = container ? container : this.parentElement;
    let components = this.findComponents(_container);
    this.currentInstances.forEach((val) => {
      val.component.render();
    });
  }

}

export default new Renderer();