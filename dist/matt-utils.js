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
function hasClass(el, ...classes) {
  let hasClasses = false;
  classes.forEach(cls => {
    hasClasses = el.classList.contains(cls);
  });
  return hasClasses;
}

function addEvent(el, ev, fn, opts) {
  el.addEventListener(ev, fn, opts);
}
function removeEvent(el, ev, fn, opts) {
  el.removeEventListener(ev, fn, opts);
}

function getAttr(el, attr) {
  return el.getAttribute(attr);
}
function setAttr(el, attr, val) {
  el.setAttribute(attr, val);
}
function remAttr(el, attr) {
  el.removeAttribute(attr);
}
function hasAttr(el, attr) {
  return el.hasAttribute(attr);
}

export { addClass, addEvent, byClass, byId, forEachHTML, getAttr, getElementIndex, getLeftPos, getTopPos, hasAttr, hasClass, nextFrame, query, queryAll, remAttr, removeClass, removeEvent, setAttr };
