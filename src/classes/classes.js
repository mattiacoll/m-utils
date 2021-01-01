import { forEachHTML } from '../misc/misc';

/**
 * Shorthand for `element.classList.add`, works with multiple nodes
 *
 * @param {Element|HTMLCollection|NodeList} el - A list of elements
 * @param {...String} classes - Classes to add
 */
export function addClass( el, ...classes ) {

	if ( el.length === undefined )
		addClassEl( el, ...classes );
	else {
		forEachHTML( el, ( currEl ) => {
			addClassEl( currEl, ...classes );
		});
	}

	/**
	 * Adds classes to a single element
	 *
	 * @param {Element} elem - An HTML element
	 * @param {...String} remClass - Classes to add
	 */
	function addClassEl( elem, ...remClass ) {
		remClass.forEach( ( singleClass ) => {
			elem.classList.add( singleClass );
		});
	}
}

/**
 * Shorthand for `element.classList.remove`, works with multiple nodes
 *
 * @param {Element|HTMLCollection|NodeList} el - A list of elements
 * @param {...String} classes - Classes to remove
 */
export function removeClass( el, ...classes ) {

	if ( el.length === undefined )
		removeClassEl( el, ...classes );
	else {
		forEachHTML( el, ( currEl ) => {
			removeClassEl( currEl, ...classes );
		});
	}

	/**
	 * Adds classes to a single element
	 *
	 * @param {Element} elem - An HTML element
	 * @param {...String} remClass - Classes to remove
	 */
	function removeClassEl( elem, ...remClass ) {
		remClass.forEach( ( singleClass ) => {
			elem.classList.remove( singleClass );
		});
	}
}


/**
 * Checks if an element has a class or not
 * // TODO: check for multiple classes of multiple elements
 *
 * @param {Element} el - An HTML element
 * @param {...String} classes - Classes to check the presence of
 *
 * @returns {Boolean} - The element has the class
 */
export function hasClass( el, ...classes ) {

	let hasClasses = false;

	classes.forEach( ( cls ) => {
		hasClasses = el.classList.contains( cls );
	});

	return hasClasses;
}