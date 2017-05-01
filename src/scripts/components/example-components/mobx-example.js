import MobxExampleStore from './mobx-example-store';
import { ViewComponent } from '../fragment';

class MobxExample extends ViewComponent {
  constructor () {
    super();
    this.store = new MobxExampleStore();
    this.drawTemplate();    
  }

  template () {
    return `Loading`;
  };

  drawTemplate () {
    this.template = function () { return `<div>
  <h3>Mobx Example</h3>
  ${this.itemsTemplate()}
  <input type='text'/>
  <button class="myBut">Add</button>
</div>`;
    }
  }

  attachDOMListeners () {
    if (!this.didInit) {
      this.didInit = true;
      this.element.addEventListener('keypress', (e) => {
        if (e.key == 'Enter') {
          this.addTask(e);
        }
      });
    }
    let button = this.element.querySelector('button.myBut').addEventListener('click', (e)=> this.addTask(e));
  }

  afterRender () {
    this.attachDOMListeners();
  }

  addTask (e) {
    let inputElement = this.element.querySelector('input');
    let value = inputElement.value;
    this.store.tasks.push(value);
    inputElement.value = '';
    this.drawTemplate();
    this.render().then(()=> {
      this.element.querySelector('input').focus();
    });
  }

  itemsTemplate () {

    let items = `<ul>`;
    this.store.tasks.forEach((val)=>{
      items += `<li>${val}</li>`
    });
    items += `</ul>`;
    return items;
  }
}

export default MobxExample;