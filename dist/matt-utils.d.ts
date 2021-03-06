declare module "matt-utils" {
    /**
     * Foreach callback
     */
    export type foreachCB = (value: Element, index?: number | undefined) => any;
    /**
     * Shorthand for `element.classList.add`, works with multiple nodes
     *
     * @param {Element|HTMLCollection|NodeList} el - A list of elements
     * @param {...String} classes - Classes to add
     */
    export function addClass(el: Element | HTMLCollection | NodeList, ...classes: string[]): void;
    /**
     * Shorthand for `element.addEventListener`
     *
     * @param {Element|HTMLCollection|NodeList} el - A list of elements
     * @param {String} ev - Event's name
     * @param {Function} fn - Event's function
     * @param {Object} [opts] - Optional event options
     */
    export function addEvent(el: Element | HTMLCollection | NodeList, ev: string, fn: Function, opts?: Object | undefined): void;
    /**
     * Shorthand for `document.getElementsByClassName`
     *
     * @param {String} selClass - The selector's class
     * @param {Element} [parent=document] - Parent element
     *
     * @returns {HTMLCollection} - The selected elements
     */
    export function byClass(selClass: string, parent?: Element | undefined): HTMLCollection;
    /**
     * Shorthand for `document.getElementById`
     *
     * @param {String} id - The selector's id
     *
     * @returns {Element|null} - The selected element
     */
    export function byId(id: string): Element | null;
    /**
     * Foreach polyfill for NodeList and HTMLCollection
     * https://toddmotto.com/ditch-the-array-foreach-call-nodelist-hack/
     *
     * @param {Array|NodeList|HTMLCollection} els - A list of elements
     * @param {foreachCB} fn - Callback containing ( value, index ) as arguments
     * @param {Scope} [scope] - Scope
     */
    export function forEachHTML(els: any[] | NodeList | HTMLCollection, fn: foreachCB, scope?: any): void;
    /**
     * Shorthand for `element.getAttribute`
     *
     * @param {Element} el - An HTML element
     * @param {String} attr - The attribute to retrieve
     *
     * @returns {String} - The attribute's value
     */
    export function getAttr(el: Element, attr: string): string;
    /**
     * Similar to jQuery `$( el ).index()`
     * index start at 0
     *
     * @param {Element} el - An HTML element
     *
     * @returns {Number} - The element's index
     */
    export function getElementIndex(el: Element): number;
    /**
     * Gets an element left position
     *
     * @param {Element} el - An HTML element
     * @param {Element} [topEl=document.body] - Wrapping element
     *
     * @returns {Number} Element's left position
     */
    export function getLeftPos(el: Element, topEl?: Element | undefined): number;
    /**
     * Gets an element top position
     *
     * @param {Element} el - An HTML element
     * @param {Element} [topEl=document.body] - Wrapping element
     *
     * @returns {Number} Element's top position
     */
    export function getTopPos(el: Element, topEl?: Element | undefined): number;
    /**
     * Shorthand for `element.hasAttribute`
     *
     * @param {Element} el - An HTML element
     * @param {String} attr - The attribute to check the existance of
     *
     * @returns {Boolean} - Whether the attribute exists
     */
    export function hasAttr(el: Element, attr: string): boolean;
    /**
     * Checks if an element has a class or not.
     * If multiple elements are passed the result is true only if all
     * the elements have all the specified classes.
     *
     * @param {Element|HTMLCollection|NodeList} el - A list of elements
     * @param {...String} classes - Classes to check the presence of
     *
     * @returns {Boolean} - The element has the class
     */
    export function hasClass(el: Element | HTMLCollection | NodeList, ...classes: string[]): boolean;
    /**
     * Foreach callback
     *
     * @callback foreachCB
     * @param {Element} value - The element
     * @param {Number} [index] - The index of the element
     */
    /**
     * Runs a function the next frame useful for effects
     * from `display:none` to `display:block` and transition
     *
     * @param {Function} fn - Callback
     */
    export function nextFrame(fn: Function): void;
    /**
     * Shorthand for `document.querySelector`
     *
     * @param {String} selector - Selector
     * @param {Element} [parent=document] - Parent element
     *
     * @returns {Element|null} - The selected element
     */
    export function query(selector: string, parent?: Element | undefined): Element | null;
    /**
     * Shorthand per `document.querySelectorAll`
     *
     * @param {String} selector - Selector
     * @param {Element} [parent=document] - Parent element
     *
     * @returns {NodeList} - The selected element
     */
    export function queryAll(selector: string, parent?: Element | undefined): NodeList;
    /**
     * Shorthand for `element.removeAttribute`
     *
     * @param {Element} el - An HTML element
     * @param {String} attr - The attribute to remove
     */
    export function remAttr(el: Element, attr: string): void;
    /**
     * Shorthand for `element.classList.remove`, works with multiple nodes
     *
     * @param {Element|HTMLCollection|NodeList} el - A list of elements
     * @param {...String} classes - Classes to remove
     */
    export function removeClass(el: Element | HTMLCollection | NodeList, ...classes: string[]): void;
    /**
     * Shorthand for `element.removeEventListener`
     *
     * @param {Element|HTMLCollection|NodeList} el - A list of elements
     * @param {String} ev - Event's name
     * @param {Function} fn - Event's function
     * @param {Object} [opts] - Optional event options
     */
    export function removeEvent(el: Element | HTMLCollection | NodeList, ev: string, fn: Function, opts?: Object | undefined): void;
    /**
     * Shorthand for `element.setAttribute`
     *
     * @param {Element} el - An HTML element
     * @param {String} attr - The attribute to retrieve
     * @param {String} val - The value to set to the attribute
     */
    export function setAttr(el: Element, attr: string, val: string): void;
}
