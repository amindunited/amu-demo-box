import ComponentRegistry from './component-registry';
const renderQueue = [];
const activeComponents = [];

class Renderer {

  /*
   * Sets a parnet element for the engine to attach to
   */
  constructor (parentElement) {
    if (typeof parentElement === 'string') {
      this.parentElement = document.querySelector(parentElement);
    } else if (!parentElement) {
      this.parentElement = document.querySelector('body');
    } else {
      this.parentElement = parentElement;
    }
    this.registerInitialClasses();
  }

  registerInitialClasses () {

    let elms = [].slice.call(this.parentElement.querySelectorAll('*'));
    elms = elms.filter((val, index, arr) => {
      //console.log('elms ', val, val.tagName);
      if ( val.tagName.indexOf('-') > 0 ) {
        return val;
      } else {
        return false;
      }
    });

    elms.forEach((elm, index, arr) => {
      let lowerCase = elm.tagName.toLowerCase();
      let className = lowerCase.replace(/-([a-z])/g, (g) => g[1].toUpperCase() );
      className = className.charAt(0).toUpperCase() + className.slice(1);
      let component = ComponentRegistry.getComponent(className);
      
      console.log(className, 'component ', component);
      //let comp = new component();
      //console.log('comp ', comp);


      activeComponents.push({
        name: className,
        element: elm,
        //component: new component()
      });

    });
  }

}

export default Renderer;