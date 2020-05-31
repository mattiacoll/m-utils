(function (global, factory) {
typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
typeof define === 'function' && define.amd ? define(['exports'], factory) :
(global = global || self, factory(global['matt-utils'] = {}));
}(this, (function (exports) {
function byId(id) {
  return document.getElementById(id);
}
function byClass(selClass, parent = document) {
  return parent.getElementsByClassName(selClass);
}
function query(selector, parent = document) {
  return parent.querySelector(selector);
}
function queryAll(selector, parent = document) {
  return parent.querySelectorAll(selector);
}
function forEachHTML(els, fn, scope) {
  for (let i = 0, numEls = els.length; i < numEls; i++) fn.call(scope, els[i], i);
}
function nextFrame(fn) {
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      fn.call();
    });
  });
}
function addClass(el, ...classes) {
  if (el.length === undefined) addClassEl(el, ...classes);else {
    forEachHTML(el, currEl => {
      addClassEl(currEl, ...classes);
    });
  }

  function addClassEl(elem, ...remClass) {
    remClass.forEach(singleClass => {
      elem.classList.add(singleClass);
    });
  }
}
function removeClass(el, ...classes) {
  if (el.length === undefined) removeClassEl(el, ...classes);else {
    forEachHTML(el, currEl => {
      removeClassEl(currEl, ...classes);
    });
  }

  function removeClassEl(elem, ...remClass) {
    remClass.forEach(singleClass => {
      elem.classList.remove(singleClass);
    });
  }
}
function hasClass(el, classes) {
  return el.classList.contains(classes);
}
function addEvent(el, ev, fn, opts) {
  if (el.length === undefined) el.addEventListener(ev, fn, opts);else {
    forEachHTML(el, currEl => {
      el.addEventListener(currEl, fn, opts);
    });
  }
}
function removeEvent(el, ev, fn, opts) {
  if (el.length === undefined) el.removeEventListener(ev, fn, opts);else {
    forEachHTML(el, currEl => {
      el.removeEventListener(currEl, fn, opts);
    });
  }
}
function getTopPos(el, topEl = document.body) {
  return el.getBoundingClientRect().top - topEl.getBoundingClientRect().top;
}
function getLeftPos(el, topEl = document.body) {
  return el.getBoundingClientRect().left - topEl.getBoundingClientRect().left;
}
function getElementIndex(el) {
  let index = 0;

  while (el = el.previousElementSibling) index++;

  return index;
}

exports.addClass = addClass;
exports.addEvent = addEvent;
exports.byClass = byClass;
exports.byId = byId;
exports.forEachHTML = forEachHTML;
exports.getElementIndex = getElementIndex;
exports.getLeftPos = getLeftPos;
exports.getTopPos = getTopPos;
exports.hasClass = hasClass;
exports.nextFrame = nextFrame;
exports.query = query;
exports.queryAll = queryAll;
exports.removeClass = removeClass;
exports.removeEvent = removeEvent;

Object.defineProperty(exports, '__esModule', { value: true });

})));
