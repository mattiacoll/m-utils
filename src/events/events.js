/**
 * Shorthand for `element.addEventListener`
 *
 * @param {Element|HTMLCollection|NodeList|Window} el - A list of elements
 * @param {String} ev - Event's name
 * @param {Function} fn - Event's function
 * @param {Object} [opts] - Optional event options
 */
export function addEvent( el, ev, fn, opts ) {

	el.addEventListener( ev, fn, opts );

}

/**
 * Shorthand for `element.removeEventListener`
 *
 * @param {Element|HTMLCollection|NodeList|Window} el - A list of elements
 * @param {String} ev - Event's name
 * @param {Function} fn - Event's function
 * @param {Object} [opts] - Optional event options
 */
export function removeEvent( el, ev, fn, opts ) {

	el.removeEventListener( ev, fn, opts );

}