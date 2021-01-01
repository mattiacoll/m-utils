function t(t){return document.getElementById(t)}function n(t,n=document){return n.getElementsByClassName(t)}function e(t,n=document){return n.querySelector(t)}function o(t,n=document){return n.querySelectorAll(t)}function u(t,n,e){for(let o=0,u=t.length;o<u;o++)n.call(e,t[o],o);}function f(t,...n){function e(t,...n){n.forEach((n=>{t.classList.add(n);}));}void 0===t.length?e(t,...n):u(t,(t=>{e(t,...n);}));}function s(t,...n){function e(t,...n){n.forEach((n=>{t.classList.remove(n);}));}void 0===t.length?e(t,...n):u(t,(t=>{e(t,...n);}));}function d(t,...n){let e=0;return n.forEach((n=>{t.classList.contains(n)&&e++;})),e===n.length}

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
		});

		test( 'Has class', () => {

			let el = t( 'get-el-1' );

			expect( el ).not.toBe( null );
			expect( d( el, 'test-byId' ) ).toEqual( true );
			expect( d( el, 'test-random' ) ).toEqual( false );

		});

		// remove 1 class
		test( 'Remove single class', () => {

			let el = t( 'get-el-1' );

			expect( el ).not.toBe( null );
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
		});

		test( 'Has class multiple', () => {

			let el = t( 'get-el-1' );

			expect( el ).not.toBe( null );
			expect( d( el, 'test-byId', 'test-byId-2' ) ).toEqual( true );
			expect( d( el, 'test-byId', 'test-random' ) ).toEqual( false );
			expect( d( el, 'test-random', 'test-byId-2' ) ).toEqual( false );

		});

		// remove 2 classes
		test( 'Remove multiple classes', () => {

			let el = t( 'get-el-1' );

			expect( el ).not.toBe( null );
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
		});

		test( 'Has class', () => {

			let el = e( '#get-el-1' );

			expect( el ).not.toBe( null );
			expect( d( el, 'test-query' ) ).toEqual( true );
			expect( d( el, 'test-random' ) ).toEqual( false );

		});

		// remove 1 class
		test( 'Remove single class', () => {

			let el = e( '#get-el-1' );

			expect( el ).not.toBe( null );
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
		});

		test( 'Has class multiple', () => {

			let el = e( '#get-el-1' );

			expect( el ).not.toBe( null );
			expect( d( el, 'test-query', 'test-query-2' ) ).toEqual( true );
			expect( d( el, 'test-query', 'test-random' ) ).toEqual( false );
			expect( d( el, 'test-random', 'test-query-2' ) ).toEqual( false );

		});

		// remove 2 classes
		test( 'Remove multiple classes', () => {

			let el = e( '#get-el-1' );

			expect( el ).not.toBe( null );
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
		});

		test( 'Has class', () => {

			let el = n( 'outer' );

			expect( el.length ).not.toBe( 0 );
			expect( d( el[0], 'test-byClass' ) ).toEqual( true );
			expect( d( el[0], 'test-random' ) ).toEqual( false );

		});

		// remove 1 class
		test( 'Remove single class from single el', () => {

			let el = n( 'outer' );

			expect( el.length ).not.toBe( 0 );
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
		});

		// remove 1 class to 3 els
		test( 'Remove single class from multiple el', () => {

			let el = n( 'outer' );

			expect( el.length ).not.toBe( 0 );
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
		});

		test( 'Has class multiple', () => {

			let el = n( 'outer' );

			expect( el.length ).not.toBe( 0 );
			expect( d( el[0], 'test-byClass', 'test-byClass-2' ) ).toEqual( true );
			expect( d( el[0], 'test-byClass', 'test-random' ) ).toEqual( false );
			expect( d( el[0], 'test-random', 'test-byClass-2' ) ).toEqual( false );

		});

		// remove 2 classes
		test( 'Remove multiple classes from single el', () => {

			let el = n( 'outer' );

			expect( el.length ).not.toBe( 0 );
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
		});

		// remove 2 classes to 3 els
		test( 'Remove multiple classes from multiple el', () => {

			let el = n( 'outer' );

			expect( el.length ).not.toBe( 0 );
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
		});

		test( 'Has class', () => {

			let el = o( '.outer' );

			expect( el.length ).not.toBe( 0 );
			expect( d( el[0], 'test-queryAll' ) ).toEqual( true );
			expect( d( el[0], 'test-random' ) ).toEqual( false );

		});

		// remove 1 class
		test( 'Remove single class from single el', () => {

			let el = o( '.outer' );

			expect( el.length ).not.toBe( 0 );
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
		});

		// remove 1 class to 3 els
		test( 'Remove single class from multiple el', () => {

			let el = o( '.outer' );

			expect( el.length ).not.toBe( 0 );
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
		});

		test( 'Has class multiple', () => {

			let el = o( '.outer' );

			expect( el.length ).not.toBe( 0 );
			expect( d( el[0], 'test-queryAll', 'test-queryAll-2' ) ).toEqual( true );
			expect( d( el[0], 'test-queryAll', 'test-random' ) ).toEqual( false );
			expect( d( el[0], 'test-random', 'test-queryAll-2' ) ).toEqual( false );

		});

		// remove 2 classes
		test( 'Remove multiple classes from single el', () => {

			let el = o( '.outer' );

			expect( el.length ).not.toBe( 0 );
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
		});

		// remove 2 classes to 3 els
		test( 'Remove multiple classes from multiple el', () => {

			let el = o( '.outer' );

			expect( el.length ).not.toBe( 0 );
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
