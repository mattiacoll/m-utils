const { byId, byClass, query, queryAll, addClass, removeClass, hasClass } = require( '../dist/matt-utils' );

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

describe( 'Selectors', () => {

	// byId
	describe( 'byId()', () => {

		test( 'Check byId', () => {

			const getEl = byId( 'get-el-1' );

			expect( getEl ).not.toBe( null );
			expect( getEl ).toBe( document.getElementById( 'get-el-1' ) );

		});

	});

	// byClass
	describe( 'byClass()', () => {

		test( 'Check byClass', () => {

			const getEls = byClass( 'outer' );

			expect( getEls.length ).not.toBe( 0 );
			expect( getEls[0] ).toBe( document.getElementsByClassName( 'outer' )[0] );
			expect( getEls[1] ).toBe( document.getElementsByClassName( 'outer' )[1] );
			expect( getEls[2] ).toBe( document.getElementsByClassName( 'outer' )[2] );

		});

		test( 'Check byClass with parent', () => {

			const parent = document.getElementById( 'get-el-1' ),
				getElsPar	 = byClass( 'inner', parent );

			expect( getElsPar.length ).not.toBe( 0 );
			expect( getElsPar[0] ).toBe( document.getElementById( 'inner-1' ) );

		});

	});

	// query
	describe( 'query()', () => {

		test( 'Check query', () => {

			const getEl = query( '#get-el-1' );

			expect( getEl ).not.toBe( null );
			expect( getEl ).toBe( document.querySelector( '#get-el-1' ) );

		});

		test( 'Check query with parent', () => {

			const parent = query( '#get-el-1' ),
				getEl			 = query( '#inner-1', parent );

			expect( getEl ).not.toBe( null );
			expect( getEl ).toBe( document.querySelector( '#inner-1' ) );

		});
	
	});

	// Query all
	describe( 'queryAll()', () => {

		test( 'Check queryAll', () => {

			const getEl = queryAll( '#get-el-1' );

			expect( getEl.length ).not.toBe( 0 );
			expect( getEl[0] ).toBe( document.querySelectorAll( '#get-el-1' )[0] );

		});

		test( 'Check queryAll with parent', () => {

			const parent = query( '#get-el-1' ),
				getEls		 = queryAll( '.inner', parent );

			expect( getEls.length ).not.toBe( 0 );
			expect( getEls[0] ).toBe( document.querySelectorAll( '.inner' )[0] );

		});
	
	});

});

describe( 'Classes', () => {

	// By id
	describe( 'byId()', () => {

		test( 'Add single class', () => {

			let el = byId( 'get-el-1' );

			expect( el ).not.toBe( null );
			addClass( el, 'test-byId' );

			expect( el.getAttribute( 'class' ) ).toEqual( expect.stringContaining( 'test-byId' ) );
		});

		test( 'Remove single class', () => {

			let el = byId( 'get-el-1' );

			expect( el ).not.toBe( null );
			removeClass( el, 'test-byId' );

			expect( el.getAttribute( 'class' ) ).toEqual( expect.not.stringContaining( 'test-byId' ) );
		});

		test( 'Add multiple classes', () => {

			let el = byId( 'get-el-1' );

			expect( el ).not.toBe( null );
			addClass( el, 'test-byId', 'test-byId-2' );

			expect( el.getAttribute( 'class' ) ).toEqual( expect.stringContaining( 'test-byId-2' ) );
			expect( el.getAttribute( 'class' ) ).toEqual( expect.stringContaining( 'test-byId' ) );
		});

		test( 'Remove multiple classes', () => {

			let el = byId( 'get-el-1' );

			expect( el ).not.toBe( null );
			removeClass( el, 'test-byId', 'test-byId-2' );

			expect( el.getAttribute( 'class' ) ).toEqual( expect.not.stringContaining( 'test-byId-2' ) );
			expect( el.getAttribute( 'class' ) ).toEqual( expect.not.stringContaining( 'test-byId' ) );
		});

	});
	
	// query
	describe( 'query()', () => {

		test( 'Add single class', () => {

			let el = query( '#get-el-1' );

			expect( el ).not.toBe( null );
			addClass( el, 'test-query' );

			expect( el.getAttribute( 'class' ) ).toEqual( expect.stringContaining( 'test-query' ) );
		});

		test( 'Remove single class', () => {

			let el = query( '#get-el-1' );

			expect( el ).not.toBe( null );
			removeClass( el, 'test-query' );

			expect( el.getAttribute( 'class' ) ).toEqual( expect.not.stringContaining( 'test-query' ) );
		});

		test( 'Add multiple classes', () => {

			let el = query( '#get-el-1' );

			expect( el ).not.toBe( null );
			addClass( el, 'test-query', 'test-query-2' );

			expect( el.getAttribute( 'class' ) ).toEqual( expect.stringContaining( 'test-query-2' ) );
			expect( el.getAttribute( 'class' ) ).toEqual( expect.stringContaining( 'test-query' ) );
		});

		test( 'Remove multiple classes', () => {

			let el = query( '#get-el-1' );

			expect( el ).not.toBe( null );
			removeClass( el, 'test-query', 'test-query-2' );

			expect( el.getAttribute( 'class' ) ).toEqual( expect.not.stringContaining( 'test-query-2' ) );
			expect( el.getAttribute( 'class' ) ).toEqual( expect.not.stringContaining( 'test-query' ) );
		});

	});

	// Todo byClass / queryAll

	// Add class multiple els
	/* test( 'Add single class to multiple elements', () => {

		// byClass
		let el = byClass( 'outer' );

		expect( el.length ).not.toBe( 0 );
		addClass( el, 'test-byClass' );

		expect( el[0].getAttribute( 'class' ) ).toMatch( expect.stringContaining( 'test-byClass' ) );
		expect( el[1].getAttribute( 'class' ) ).toMatch( expect.not.stringContaining( 'test-byClass' ) );
		expect( el[2].getAttribute( 'class' ) ).toMatch( expect.not.stringContaining( 'test-byClass' ) );

		// queryAll
		el = queryAll( '.outer' );

		expect( el.length ).not.toBe( 0 );
		addClass( el, 'test-queryAll' );

		expect( el[0].getAttribute( 'class' ) ).toMatch( expect.not.stringContaining( 'test-queryAll' ) );
		expect( el[1].getAttribute( 'class' ) ).toMatch( expect.not.stringContaining( 'test-queryAll' ) );
		expect( el[2].getAttribute( 'class' ) ).toMatch( expect.not.stringContaining( 'test-queryAll' ) );

	});

	// Remove class multiple els
	test( 'Remove single class from multiple elements', () => {

		// byClass
		let el = byClass( 'outer' );

		console.log( el[0].getAttribute( 'class' ) );

		expect( el.length ).not.toBe( 0 );
		removeClass( el, 'test-byClass' );

		expect( el[0].getAttribute( 'class' ) ).toMatch( expect.not.stringContaining( 'test-byClass' ) );
		expect( el[1].getAttribute( 'class' ) ).toMatch( expect.not.stringContaining( 'test-byClass' ) );
		expect( el[2].getAttribute( 'class' ) ).toMatch( expect.not.stringContaining( 'test-byClass' ) );

		// queryAll
		el = queryAll( '.outer' );

		expect( el.length ).not.toBe( 0 );
		removeClass( el, 'test-queryAll' );

		expect( el[0].getAttribute( 'class' ) ).toMatch( expect.not.stringContaining( 'test-queryAll' ) );
		expect( el[1].getAttribute( 'class' ) ).toMatch( expect.not.stringContaining( 'test-queryAll' ) );
		expect( el[2].getAttribute( 'class' ) ).toMatch( expect.not.stringContaining( 'test-queryAll' ) );

	}); */

});