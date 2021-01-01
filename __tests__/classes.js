function t(t){return document.getElementById(t)}function n(t,n=document){return n.getElementsByClassName(t)}function e(t,n=document){return n.querySelector(t)}function o(t,n=document){return n.querySelectorAll(t)}function u(t,n,e){for(let o=0,u=t.length;o<u;o++)n.call(e,t[o],o);}function f(t,...n){function e(t,...n){n.forEach((n=>{t.classList.add(n);}));}void 0===t.length?e(t,...n):u(t,(t=>{e(t,...n);}));}function s(t,...n){function e(t,...n){n.forEach((n=>{t.classList.remove(n);}));}void 0===t.length?e(t,...n):u(t,(t=>{e(t,...n);}));}function d(t,...n){let e=!1;if(void 0===t.length)e=o(t,...n);else {let i=0;u(t,(t=>{o(t,...n)&&i++;})),e=i===t.length;}return e;function o(t,...n){let e=0;return n.forEach((n=>{t.classList.contains(n)&&e++;})),e===n.length}}

document.body.innerHTML = `
	<div id="get-el-1" class="outer">
		<div id="inner-1" class="inner"></div>
	</div>
	<div id="get-el-2" class="outer">
		<div id="inner-2" class="inner"></div>
	</div>
	<div id="get-el-3" class="outer">
		<div id="inner-3" class="inner"></div>
	</div>
`;

describe( 'Classes', () => {

	// byId
	describe( 'byId()', () => {

		// add 1 class
		test( 'Add single class', () => {

			let el = t( 'get-el-1' );

			expect( el ).not.toBe( null );
			f( el, 'test-byId' );

			expect( el.getAttribute( 'class' ) ).toEqual( expect.stringContaining( 'test-byId' ) );

			s( el, 'test-byId' );

		});

		test( 'Has class', () => {

			let el = t( 'get-el-1' );

			expect( el ).not.toBe( null );

			f( el, 'test-byId' );

			expect( d( el, 'test-byId' ) ).toEqual( true );
			expect( d( el, 'test-random' ) ).toEqual( false );

			s( el, 'test-byId' );

		});

		// remove 1 class
		test( 'Remove single class', () => {

			let el = t( 'get-el-1' );

			expect( el ).not.toBe( null );

			f( el, 'test-byId' );
			s( el, 'test-byId' );

			expect( el.getAttribute( 'class' ) ).toEqual( expect.not.stringContaining( 'test-byId' ) );

		});

		// add 2 classes
		test( 'Add multiple classes', () => {

			let el = t( 'get-el-1' );

			expect( el ).not.toBe( null );
			f( el, 'test-byId', 'test-byId-2' );

			expect( el.getAttribute( 'class' ) ).toEqual( expect.stringContaining( 'test-byId-2' ) );
			expect( el.getAttribute( 'class' ) ).toEqual( expect.stringContaining( 'test-byId' ) );

			s( el, 'test-byId', 'test-byId-2' );

		});

		test( 'Has class multiple', () => {

			let el = t( 'get-el-1' );

			expect( el ).not.toBe( null );

			f( el, 'test-byId', 'test-byId-2' );

			expect( d( el, 'test-byId', 'test-byId-2' ) ).toEqual( true );
			expect( d( el, 'test-byId', 'test-random' ) ).toEqual( false );
			expect( d( el, 'test-random', 'test-byId-2' ) ).toEqual( false );

			s( el, 'test-byId', 'test-byId-2' );

		});

		// remove 2 classes
		test( 'Remove multiple classes', () => {

			let el = t( 'get-el-1' );

			expect( el ).not.toBe( null );

			f( el, 'test-byId', 'test-byId-2' );
			s( el, 'test-byId', 'test-byId-2' );

			expect( el.getAttribute( 'class' ) ).toEqual( expect.not.stringContaining( 'test-byId-2' ) );
			expect( el.getAttribute( 'class' ) ).toEqual( expect.not.stringContaining( 'test-byId' ) );

		});

	});

	// query
	describe( 'query()', () => {

		// add 1 class
		test( 'Add single class', () => {

			let el = e( '#get-el-1' );

			expect( el ).not.toBe( null );
			f( el, 'test-query' );

			expect( el.getAttribute( 'class' ) ).toEqual( expect.stringContaining( 'test-query' ) );

			s( el, 'test-query' );

		});

		test( 'Has class', () => {

			let el = e( '#get-el-1' );

			expect( el ).not.toBe( null );

			f( el, 'test-query' );

			expect( d( el, 'test-query' ) ).toEqual( true );
			expect( d( el, 'test-random' ) ).toEqual( false );

			s( el, 'test-query' );

		});

		// remove 1 class
		test( 'Remove single class', () => {

			let el = e( '#get-el-1' );

			expect( el ).not.toBe( null );
			f( el, 'test-query' );
			s( el, 'test-query' );

			expect( el.getAttribute( 'class' ) ).toEqual( expect.not.stringContaining( 'test-query' ) );

		});

		// add 2 classes
		test( 'Add multiple classes', () => {

			let el = e( '#get-el-1' );

			expect( el ).not.toBe( null );
			f( el, 'test-query', 'test-query-2' );

			expect( el.getAttribute( 'class' ) ).toEqual( expect.stringContaining( 'test-query-2' ) );
			expect( el.getAttribute( 'class' ) ).toEqual( expect.stringContaining( 'test-query' ) );

			s( el, 'test-query', 'test-query-2' );

		});

		test( 'Has class multiple', () => {

			let el = e( '#get-el-1' );

			expect( el ).not.toBe( null );

			f( el, 'test-query', 'test-query-2' );

			expect( d( el, 'test-query', 'test-query-2' ) ).toEqual( true );
			expect( d( el, 'test-query', 'test-random' ) ).toEqual( false );
			expect( d( el, 'test-random', 'test-query-2' ) ).toEqual( false );

			s( el, 'test-query', 'test-query-2' );

		});

		// remove 2 classes
		test( 'Remove multiple classes', () => {

			let el = e( '#get-el-1' );

			expect( el ).not.toBe( null );

			f( el, 'test-query', 'test-query-2' );
			s( el, 'test-query', 'test-query-2' );

			expect( el.getAttribute( 'class' ) ).toEqual( expect.not.stringContaining( 'test-query-2' ) );
			expect( el.getAttribute( 'class' ) ).toEqual( expect.not.stringContaining( 'test-query' ) );
		});

	});

	// byClass
	describe( 'byClass()', () => {

		// add 1 class
		test( 'Add single class to single el', () => {

			let el = n( 'outer' );

			expect( el.length ).not.toBe( 0 );
			f( el[0], 'test-byClass' );

			expect( el[0].getAttribute( 'class' ) ).toEqual( expect.stringContaining( 'test-byClass' ) );

			s( el[0], 'test-byClass' );

		});

		test( 'Has class', () => {

			let el = n( 'outer' );

			expect( el.length ).not.toBe( 0 );

			f( el[0], 'test-byClass' );

			expect( d( el[0], 'test-byClass' ) ).toEqual( true );
			expect( d( el[0], 'test-random' ) ).toEqual( false );

			s( el[0], 'test-byClass' );

		});

		// remove 1 class
		test( 'Remove single class from single el', () => {

			let el = n( 'outer' );

			expect( el.length ).not.toBe( 0 );
			f( el[0], 'test-byClass' );
			s( el[0], 'test-byClass' );

			expect( el[0].getAttribute( 'class' ) ).toEqual( expect.not.stringContaining( 'test-byClass' ) );
		});

		// add 1 class to 3 els
		test( 'Add single class to multiple el', () => {

			let el = n( 'outer' );

			expect( el.length ).not.toBe( 0 );
			f( el, 'test-byClass' );

			expect( el[0].getAttribute( 'class' ) ).toEqual( expect.stringContaining( 'test-byClass' ) );
			expect( el[1].getAttribute( 'class' ) ).toEqual( expect.stringContaining( 'test-byClass' ) );
			expect( el[2].getAttribute( 'class' ) ).toEqual( expect.stringContaining( 'test-byClass' ) );

			s( el, 'test-byClass' );

		});

		test( 'Has single class multiple elements', () => {

			let el = n( 'outer' );

			expect( el.length ).not.toBe( 0 );

			f( el[0], 'test-byClass' );

			expect( d( el, 'test-byClass' ) ).toEqual( false );
			expect( d( el, 'test-random' ) ).toEqual( false );

			f( el, 'test-byClass-mult' );
			expect( d( el, 'test-byClass-mult' ) ).toEqual( true );

			s( el, 'test-byClass', 'test-byClass-mult' );

		});

		// remove 1 class to 3 els
		test( 'Remove single class from multiple el', () => {

			let el = n( 'outer' );

			expect( el.length ).not.toBe( 0 );

			f( el, 'test-byClass' );
			s( el, 'test-byClass' );

			expect( el[0].getAttribute( 'class' ) ).toEqual( expect.not.stringContaining( 'test-byClass' ) );
			expect( el[1].getAttribute( 'class' ) ).toEqual( expect.not.stringContaining( 'test-byClass' ) );
			expect( el[2].getAttribute( 'class' ) ).toEqual( expect.not.stringContaining( 'test-byClass' ) );
		});

		// add 2 classes
		test( 'Add multiple classes to single el', () => {

			let el = n( 'outer' );

			expect( el.length ).not.toBe( 0 );
			f( el[0], 'test-byClass', 'test-byClass-2' );

			expect( el[0].getAttribute( 'class' ) ).toEqual( expect.stringContaining( 'test-byClass-2' ) );
			expect( el[0].getAttribute( 'class' ) ).toEqual( expect.stringContaining( 'test-byClass' ) );

			s( el[0], 'test-byClass', 'test-byClass-2' );

		});

		test( 'Has class multiple', () => {

			let el = n( 'outer' );

			expect( el.length ).not.toBe( 0 );

			f( el[0], 'test-byClass', 'test-byClass-2' );

			expect( d( el[0], 'test-byClass', 'test-byClass-2' ) ).toEqual( true );
			expect( d( el[0], 'test-byClass', 'test-random' ) ).toEqual( false );
			expect( d( el[0], 'test-random', 'test-byClass-2' ) ).toEqual( false );

			s( el[0], 'test-byClass', 'test-byClass-2' );

		});

		// remove 2 classes
		test( 'Remove multiple classes from single el', () => {

			let el = n( 'outer' );

			expect( el.length ).not.toBe( 0 );
			f( el[0], 'test-byClass', 'test-byClass-2' );
			s( el[0], 'test-byClass', 'test-byClass-2' );

			expect( el[0].getAttribute( 'class' ) ).toEqual( expect.not.stringContaining( 'test-byClass-2' ) );
			expect( el[0].getAttribute( 'class' ) ).toEqual( expect.not.stringContaining( 'test-byClass' ) );
		});

		// add 2 classes to 3 els
		test( 'Add multiple classes to multiple el', () => {

			let el = n( 'outer' );

			expect( el.length ).not.toBe( 0 );
			f( el, 'test-byClass', 'test-byClass-2' );

			expect( el[0].getAttribute( 'class' ) ).toEqual( expect.stringContaining( 'test-byClass-2' ) );
			expect( el[1].getAttribute( 'class' ) ).toEqual( expect.stringContaining( 'test-byClass-2' ) );
			expect( el[2].getAttribute( 'class' ) ).toEqual( expect.stringContaining( 'test-byClass-2' ) );
			expect( el[0].getAttribute( 'class' ) ).toEqual( expect.stringContaining( 'test-byClass' ) );
			expect( el[1].getAttribute( 'class' ) ).toEqual( expect.stringContaining( 'test-byClass' ) );
			expect( el[2].getAttribute( 'class' ) ).toEqual( expect.stringContaining( 'test-byClass' ) );

			s( el, 'test-byClass', 'test-byClass-2' );

		});

		test( 'Has multiple class multiple elements', () => {

			let el = n( 'outer' );

			expect( el.length ).not.toBe( 0 );

			f( el, 'test-byClass' );
			expect( d( el, 'test-byClass', 'test-byClass-2' ) ).toEqual( false );
			s( el, 'test-byClass' );

			f( el, 'test-byClass-mult', 'test-byClass-2-mult' );
			expect( d( el, 'test-byClass-mult', 'test-byClass-2-mult' ) ).toEqual( true );
			expect( d( el, 'test-byClass-mult', 'test-random' ) ).toEqual( false );
			expect( d( el, 'test-random', 'test-byClass-2-mult' ) ).toEqual( false );
			s( el, 'test-byClass-mult', 'test-byClass-2-mult' );

		});

		// remove 2 classes to 3 els
		test( 'Remove multiple classes from multiple el', () => {

			let el = n( 'outer' );

			expect( el.length ).not.toBe( 0 );
			f( el, 'test-byClass', 'test-byClass-2' );
			s( el, 'test-byClass', 'test-byClass-2' );

			expect( el[0].getAttribute( 'class' ) ).toEqual( expect.not.stringContaining( 'test-byClass-2' ) );
			expect( el[1].getAttribute( 'class' ) ).toEqual( expect.not.stringContaining( 'test-byClass-2' ) );
			expect( el[2].getAttribute( 'class' ) ).toEqual( expect.not.stringContaining( 'test-byClass-2' ) );
			expect( el[0].getAttribute( 'class' ) ).toEqual( expect.not.stringContaining( 'test-byClass' ) );
			expect( el[1].getAttribute( 'class' ) ).toEqual( expect.not.stringContaining( 'test-byClass' ) );
			expect( el[2].getAttribute( 'class' ) ).toEqual( expect.not.stringContaining( 'test-byClass' ) );
		});

	});

	// queryAll
	describe( 'queryAll()', () => {

		// add 1 class
		test( 'Add single class to single el', () => {

			let el = o( '.outer' );

			expect( el.length ).not.toBe( 0 );

			f( el[0], 'test-queryAll' );
			expect( el[0].getAttribute( 'class' ) ).toEqual( expect.stringContaining( 'test-queryAll' ) );
			s( el[0], 'test-queryAll' );

		});

		test( 'Has class', () => {

			let el = o( '.outer' );

			expect( el.length ).not.toBe( 0 );

			f( el[0], 'test-queryAll' );
			expect( d( el[0], 'test-queryAll' ) ).toEqual( true );
			expect( d( el[0], 'test-random' ) ).toEqual( false );
			s( el[0], 'test-queryAll' );

		});

		// remove 1 class
		test( 'Remove single class from single el', () => {

			let el = o( '.outer' );

			expect( el.length ).not.toBe( 0 );
			f( el[0], 'test-queryAll' );
			s( el[0], 'test-queryAll' );

			expect( el[0].getAttribute( 'class' ) ).toEqual( expect.not.stringContaining( 'test-queryAll' ) );
		});

		// add 1 class to 3 els
		test( 'Add single class to multiple el', () => {

			let el = o( '.outer' );

			expect( el.length ).not.toBe( 0 );
			f( el, 'test-queryAll' );

			expect( el[0].getAttribute( 'class' ) ).toEqual( expect.stringContaining( 'test-queryAll' ) );
			expect( el[1].getAttribute( 'class' ) ).toEqual( expect.stringContaining( 'test-queryAll' ) );
			expect( el[2].getAttribute( 'class' ) ).toEqual( expect.stringContaining( 'test-queryAll' ) );

			s( el, 'test-queryAll' );

		});

		test( 'Has single class multiple elements', () => {

			let el = o( '.outer' );

			expect( el.length ).not.toBe( 0 );

			f( el[0], 'test-queryAll' );

			expect( d( el, 'test-queryAll' ) ).toEqual( false );
			expect( d( el, 'test-random' ) ).toEqual( false );

			f( el, 'test-queryAll-mult' );
			expect( d( el, 'test-queryAll-mult' ) ).toEqual( true );

			s( el, 'test-queryAll', 'test-queryAll-mult' );

		});

		// remove 1 class to 3 els
		test( 'Remove single class from multiple el', () => {

			let el = o( '.outer' );

			expect( el.length ).not.toBe( 0 );
			f( el, 'test-queryAll' );
			s( el, 'test-queryAll' );

			expect( el[0].getAttribute( 'class' ) ).toEqual( expect.not.stringContaining( 'test-queryAll' ) );
			expect( el[1].getAttribute( 'class' ) ).toEqual( expect.not.stringContaining( 'test-queryAll' ) );
			expect( el[2].getAttribute( 'class' ) ).toEqual( expect.not.stringContaining( 'test-queryAll' ) );
		});

		// add 2 classes
		test( 'Add multiple classes to single el', () => {

			let el = o( '.outer' );

			expect( el.length ).not.toBe( 0 );

			f( el[0], 'test-queryAll', 'test-queryAll-2' );
			expect( el[0].getAttribute( 'class' ) ).toEqual( expect.stringContaining( 'test-queryAll-2' ) );
			expect( el[0].getAttribute( 'class' ) ).toEqual( expect.stringContaining( 'test-queryAll' ) );
			s( el[0], 'test-queryAll', 'test-queryAll-2' );

		});

		test( 'Has class multiple', () => {

			let el = o( '.outer' );

			expect( el.length ).not.toBe( 0 );

			f( el[0], 'test-queryAll', 'test-queryAll-2' );
			expect( d( el[0], 'test-queryAll', 'test-queryAll-2' ) ).toEqual( true );
			expect( d( el[0], 'test-queryAll', 'test-random' ) ).toEqual( false );
			expect( d( el[0], 'test-random', 'test-queryAll-2' ) ).toEqual( false );
			s( el[0], 'test-queryAll', 'test-queryAll-2' );

		});

		// remove 2 classes
		test( 'Remove multiple classes from single el', () => {

			let el = o( '.outer' );

			expect( el.length ).not.toBe( 0 );
			f( el[0], 'test-queryAll', 'test-queryAll-2' );
			s( el[0], 'test-queryAll', 'test-queryAll-2' );

			expect( el[0].getAttribute( 'class' ) ).toEqual( expect.not.stringContaining( 'test-queryAll-2' ) );
			expect( el[0].getAttribute( 'class' ) ).toEqual( expect.not.stringContaining( 'test-queryAll' ) );
		});

		// add 2 classes to 3 els
		test( 'Add multiple classes to multiple el', () => {

			let el = o( '.outer' );

			expect( el.length ).not.toBe( 0 );

			f( el, 'test-queryAll', 'test-queryAll-2' );
			expect( el[0].getAttribute( 'class' ) ).toEqual( expect.stringContaining( 'test-queryAll-2' ) );
			expect( el[1].getAttribute( 'class' ) ).toEqual( expect.stringContaining( 'test-queryAll-2' ) );
			expect( el[2].getAttribute( 'class' ) ).toEqual( expect.stringContaining( 'test-queryAll-2' ) );
			expect( el[0].getAttribute( 'class' ) ).toEqual( expect.stringContaining( 'test-queryAll' ) );
			expect( el[1].getAttribute( 'class' ) ).toEqual( expect.stringContaining( 'test-queryAll' ) );
			expect( el[2].getAttribute( 'class' ) ).toEqual( expect.stringContaining( 'test-queryAll' ) );
			s( el, 'test-queryAll', 'test-queryAll-2' );

		});

		test( 'Has multiple class multiple elements', () => {

			let el = o( '.outer' );

			expect( el.length ).not.toBe( 0 );

			f( el, 'test-queryAll' );
			expect( d( el, 'test-queryAll', 'test-queryAll-2' ) ).toEqual( false );
			s( el, 'test-queryAll' );

			f( el, 'test-queryAll-mult', 'test-queryAll-2-mult' );
			expect( d( el, 'test-queryAll-mult', 'test-queryAll-2-mult' ) ).toEqual( true );
			expect( d( el, 'test-queryAll-mult', 'test-random' ) ).toEqual( false );
			expect( d( el, 'test-random', 'test-queryAll-2-mult' ) ).toEqual( false );
			s( el, 'test-queryAll-mult', 'test-queryAll-2-mult' );

		});

		// remove 2 classes to 3 els
		test( 'Remove multiple classes from multiple el', () => {

			let el = o( '.outer' );

			expect( el.length ).not.toBe( 0 );
			f( el, 'test-queryAll', 'test-queryAll-2' );
			s( el, 'test-queryAll', 'test-queryAll-2' );

			expect( el[0].getAttribute( 'class' ) ).toEqual( expect.not.stringContaining( 'test-queryAll-2' ) );
			expect( el[1].getAttribute( 'class' ) ).toEqual( expect.not.stringContaining( 'test-queryAll-2' ) );
			expect( el[2].getAttribute( 'class' ) ).toEqual( expect.not.stringContaining( 'test-queryAll-2' ) );
			expect( el[0].getAttribute( 'class' ) ).toEqual( expect.not.stringContaining( 'test-queryAll' ) );
			expect( el[1].getAttribute( 'class' ) ).toEqual( expect.not.stringContaining( 'test-queryAll' ) );
			expect( el[2].getAttribute( 'class' ) ).toEqual( expect.not.stringContaining( 'test-queryAll' ) );
		});

	});

});
