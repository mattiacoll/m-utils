/**
 * Shorthand for `document.getElementById`
 *
 * @param {String} id - The selector's id
 *
 * @returns {Element|null} - The selected element
 */
export function byId( id ) {
	return document.getElementById( id );
}

/**
 * Shorthand for `document.getElementsByClassName`
 *
 * @param {String} selClass - The selector's class
 * @param {Element} [parent=document] - Parent element
 *
 * @returns {HTMLCollection} - The selected elements
 */
export function byClass( selClass, parent = document ) {
	return parent.getElementsByClassName( selClass );
}


/**
 * Shorthand for `document.querySelector`
 *
 * @param {String} selector - Selector
 * @param {Element} [parent=document] - Parent element
 *
 * @returns {Element|null} - The selected element
 */
export function query( selector, parent = document ) {
	return parent.querySelector( selector );
}


/**
 * Shorthand per `document.querySelectorAll`
 *
 * @param {String} selector - Selector
 * @param {Element} [parent=document] - Parent element
 *
 * @returns {NodeList} - The selected element
 */
export function queryAll( selector, parent = document ) {
	return parent.querySelectorAll( selector );
}


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


/**
 * Shorthand for `element.addEventListener`, works with multiple elements
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
 * Shorthand for `element.removeEventListener`, works with multiple elements
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