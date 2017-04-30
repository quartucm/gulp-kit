//Es6 Class of a jQUery Clone
export default class jQueryClone {
  constructor(elem) {
    this.elem = elem;
  }
  //This function adds a class to the given constructor element
  addClass(className) {
   this.elem.classList.add(className);
   return this;
  }
   each(callback) {
    if (Array.isArray(this.elem)) {
      let length = this.elem.length;

      for (let i = 0; i < length; i++ ) {
        if (callback.call(this.elem[i], i, this.elem[i] ) === false ) {
          break;
        }
      }

      return this.elem;
    }
  }
  attr(attrToAdd, val) {
    this.elem.setAttribute(attrToAdd, val);
    return this;
  } 
}