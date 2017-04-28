require("file-loader?name=assets/fonts/[name].[ext]!../../node_modules/material-design-icons/iconfont/MaterialIcons-Regular.eot");
require("file-loader?name=assets/fonts/[name].[ext]!../../node_modules/material-design-icons/iconfont/MaterialIcons-Regular.woff2");
require("file-loader?name=assets/fonts/[name].[ext]!../../node_modules/material-design-icons/iconfont/MaterialIcons-Regular.woff");
require("file-loader?name=assets/fonts/[name].[ext]!../../node_modules/material-design-icons/iconfont/MaterialIcons-Regular.ttf");

import '../styles/app.scss';

import js from 'codemirror/mode/javascript/javascript';
import CodeMirror from 'codemirror';

import Workspace from './components/workspace/index';
import DomWriter from './components/dom-writer/index';

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
    console.log('constructing app ', this, Workspace);
    this.workspace = new Workspace('#domWriter');
    this.workspace.render(`<h3>Once was moo!</h3>`);

    //let _workspace_2 = new Workspace('#domWriter');
    //let _workspace_3 = new Workspace('#domWriter');
    //
    let elms = document.querySelectorAll('.domWriter');
    let refs = [];
    elms.forEach((val, index, arr) => {
      console.log('for each ', val, index, arr);
      let newElm = new Workspace(val);
      refs.push(newElm);
      newElm.render(`<h3>Once was moo! ${index}</h3>`);
    });

    refs[1].render(`...and then we changed this`);

    ex1.on("change", (t)=>{
      console.log('saw me some change', t);
    })
  }

  updateCode (e) {
    console.log('hey', e, e.target.parentElement.querySelector('article'));//.querySelector('article')
  }

  createCodeExample () {

  }
}

window.app = new App();