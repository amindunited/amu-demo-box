
const renderQueue = [];

let fps = 60;
let lastUpdate;

class Renderer {

  run () {

    if ( this.renderQueue.length > 0 ) {
      let nextElm = this.renderQueue.shift();
      nextElm.elm.innerHTML = nextElm.content;

      setTimeout(()=> {
        requestAnimationFrame(() => { this.run(); });
      }, 1000 / fps );

    }
  }

  addToRenderQueue (elm, content) {
    //add an element to the render queue
    this.renderQueue.push({elm: elm, content: content});
    //run the loop
    this.run();
  }

}

export default new Renderer();