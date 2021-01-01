/**
 * Foreach polyfill for NodeList and HTMLCollection
 * https://toddmotto.com/ditch-the-array-foreach-call-nodelist-hack/
 *
 * @param {Array|NodeList|HTMLCollection} els - A list of elements
 * @param {foreachCB} fn - Callback containing ( value, index ) as arguments
 * @param {Scope} [scope] - Scope
 */
export function forEachHTML( els, fn, scope ) {
	for ( let i = 0, numEls = els.length; i < numEls; i++ )
		fn.call( scope, els[i], i );
}

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
export function nextFrame( fn ) {
	requestAnimationFrame( () => {
		requestAnimationFrame( () => {
			fn.call();
		});
	});
}


/**
 * Gets an element top position
 *
 * @param {Element} el - An HTML element
 * @param {Element} [topEl=document.body] - Wrapping element
 *
 * @returns {Number} Element's top position
 */
export function getTopPos( el, topEl = document.body ) {
	return el.getBoundingClientRect().top - topEl.getBoundingClientRect().top;
}

/**
 * Gets an element left position
 *
 * @param {Element} el - An HTML element
 * @param {Element} [topEl=document.body] - Wrapping element
 *
 * @returns {Number} Element's left position
 */
export function getLeftPos( el, topEl = document.body ) {
	return el.getBoundingClientRect().left - topEl.getBoundingClientRect().left;
}


/**
 * Similar to jQuery `$( el ).index()`
 * index start at 0
 *
 * @param {Element} el - An HTML element
 *
 * @returns {Number} - The element's index
 */
export function getElementIndex( el ) {

	let index = 0;

	while ( ( el = el.previousElementSibling ) )
		index++;

	return index;

}