/**
 * Shorthand for `element.addEventListener`
 *
 * @param {Element|HTMLCollection|NodeList} el - A list of elements
 * @param {String} ev - Event's name
 * @param {Function} fn - Event's function
 * @param {Options} [opts] - Optional event options
 */
export function addEvent( el, ev, fn, opts ) {

	// if ( el.length === undefined || el.self === window )
	el.addEventListener( ev, fn, opts );
	/*
	else {
		forEachHTML( el, ( currEl ) => {
			currEl.addEventListener( ev, fn, opts );
		});
	}
	*/

}

/**
 * Shorthand for `element.removeEventListener`
 *
 * @param {Element|HTMLCollection|NodeList} el - A list of elements
 * @param {String} ev - Event's name
 * @param {Function} fn - Event's function
 * @param {Options} [opts] - Optional event options
 */
export function removeEvent( el, ev, fn, opts ) {

	// if ( el.length === undefined || el.self === window )
	el.removeEventListener( ev, fn, opts );
	/*
	else {
		forEachHTML( el, ( currEl ) => {
			currEl.removeEventListener( ev, fn, opts );
		});
	}
	*/

}