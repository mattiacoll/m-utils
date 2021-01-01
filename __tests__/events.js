function t(t){return document.getElementById(t)}function a(t,n,e,o){t.addEventListener(n,e,o);}function m(t,n,e,o){t.removeEventListener(n,e,o);}

document.body.innerHTML = `
	<div id="get-el-1" class="outer">
		<div id="inner-1" class="inner"></div>
	</div>
	<div id="get-el-2" class="outer">
		<div id="inner-2" class="inner"></div>
	</div>
	<select id="get-el-3" class="outer">
		<option id="inner-3" class="inner"></option>
		<option id="inner-3-1" class="inner"></option>
		<option id="inner-3-2" class="inner"></option>
		<option id="inner-3-3" class="inner"></option>
	</select>
`;

let variable;

function eventFn() {
	variable = 'clicked';
}

describe( 'Events', () => {

	// add 1 class
	test( 'Add event', () => {

		const el = t( 'get-el-3' );

		expect( el ).not.toBe( null );
		a( el, 'click', eventFn );

		el.click();

		expect( variable ).not.toBe( undefined );
		expect( variable ).toBe( 'clicked' );

	});

	// add 1 class
	test( 'Remove event', () => {

		const el = t( 'get-el-3' );

		expect( el ).not.toBe( null );

		variable = undefined;
		m( el, 'click', eventFn );

		el.click();

		expect( variable ).not.toBe( 'clicked' );
		expect( variable ).toBe( undefined );

	});

});
