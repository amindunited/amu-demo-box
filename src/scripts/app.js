require("file-loader?name=assets/fonts/[name].[ext]!../../node_modules/material-design-icons/iconfont/MaterialIcons-Regular.eot");
require("file-loader?name=assets/fonts/[name].[ext]!../../node_modules/material-design-icons/iconfont/MaterialIcons-Regular.woff2");
require("file-loader?name=assets/fonts/[name].[ext]!../../node_modules/material-design-icons/iconfont/MaterialIcons-Regular.woff");
require("file-loader?name=assets/fonts/[name].[ext]!../../node_modules/material-design-icons/iconfont/MaterialIcons-Regular.ttf");

import '../styles/app.scss';

import js from 'codemirror/mode/javascript/javascript';
import CodeMirror from 'codemirror';

import { Renderer, Registry } from './components/fragment';
import { ClickMe, MobxExample } from './components/example-components/';

var cheese = 'brie';

let ex1 = CodeMirror(document.getElementById('codeExample_1'), {
  value:
`function myScript() {
  return 100;
}\n`,
  mode:  "javascript",
  lineNumbers: true,
  indentUnit: 2,
  indentWithTabs: false,
  smartIndent: true,
  tabSize: 2
});

console.log('app.js', window);

const project = {
  src: []
}

class App {

  constructor () {
 
    Registry.add([
      ClickMe,
      MobxExample
    ]);

    console.log('renderer ', Renderer);
    let renderer = Renderer.init('body');
  }

  updateCode (e) {
    console.log('hey', e, e.target.parentElement.querySelector('article'));//.querySelector('article')
  }

  createCodeExample () {

  }
}

window.app = new App();