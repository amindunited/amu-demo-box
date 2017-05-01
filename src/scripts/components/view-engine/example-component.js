import ViewComponent from './view-component';
import ComponentRegistry from './component-registry';

class ExampleComponent extends ViewComponent {

}
let mmm = new ExampleComponent();
console.log('making it ', ExampleComponent, typeof ExampleComponent);
ComponentRegistry.addComponent('ExampleComponent', ExampleComponent);

export default ExampleComponent;