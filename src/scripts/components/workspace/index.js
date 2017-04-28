
class Workspace {
  constructor (parentDiv) {
    if (typeof parentDiv === 'string') {
      this.parentDiv = document.querySelector(parentDiv);
    } else if (!parentDiv) {
      this.parentDiv = document.querySelector('body');
    } else {
      this.parentDiv = parentDiv;
    }
  }

  render (content) {
    this.parentDiv.innerHTML = content;
  }

  handleChange () {
  }
}

export default Workspace;