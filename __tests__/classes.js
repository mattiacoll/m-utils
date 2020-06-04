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

describe( 'Classes', () => {

	// byId
	describe( 'byId()', () => {

		// add 1 class
		test( 'Add single class', () => {

			let el = byId( 'get-el-1' );

			expect( el ).not.toBe( null );
			addClass( el, 'test-byId' );

			expect( el.getAttribute( 'class' ) ).toEqual( expect.stringContaining( 'test-byId' ) );
		});

		test( 'Has class', () => {

			let el = byId( 'get-el-1' );

			expect( el ).not.toBe( null );
			expect( hasClass( el, 'test-byId' ) ).toEqual( true );

		});

		// remove 1 class
		test( 'Remove single class', () => {

			let el = byId( 'get-el-1' );

			expect( el ).not.toBe( null );
			removeClass( el, 'test-byId' );

			expect( el.getAttribute( 'class' ) ).toEqual( expect.not.stringContaining( 'test-byId' ) );
		});

		// add 2 classes
		test( 'Add multiple classes', () => {

			let el = byId( 'get-el-1' );

			expect( el ).not.toBe( null );
			addClass( el, 'test-byId', 'test-byId-2' );

			expect( el.getAttribute( 'class' ) ).toEqual( expect.stringContaining( 'test-byId-2' ) );
			expect( el.getAttribute( 'class' ) ).toEqual( expect.stringContaining( 'test-byId' ) );
		});

		test( 'Has class multiple', () => {

			let el = byId( 'get-el-1' );

			expect( el ).not.toBe( null );
			expect( hasClass( el, 'test-byId', 'test-byId-2' ) ).toEqual( true );

		});

		// remove 2 classes
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

		// add 1 class
		test( 'Add single class', () => {

			let el = query( '#get-el-1' );

			expect( el ).not.toBe( null );
			addClass( el, 'test-query' );

			expect( el.getAttribute( 'class' ) ).toEqual( expect.stringContaining( 'test-query' ) );
		});

		test( 'Has class', () => {

			let el = query( '#get-el-1' );

			expect( el ).not.toBe( null );
			expect( hasClass( el, 'test-query' ) ).toEqual( true );

		});

		// remove 1 class
		test( 'Remove single class', () => {

			let el = query( '#get-el-1' );

			expect( el ).not.toBe( null );
			removeClass( el, 'test-query' );

			expect( el.getAttribute( 'class' ) ).toEqual( expect.not.stringContaining( 'test-query' ) );
		});

		// add 2 classes
		test( 'Add multiple classes', () => {

			let el = query( '#get-el-1' );

			expect( el ).not.toBe( null );
			addClass( el, 'test-query', 'test-query-2' );

			expect( el.getAttribute( 'class' ) ).toEqual( expect.stringContaining( 'test-query-2' ) );
			expect( el.getAttribute( 'class' ) ).toEqual( expect.stringContaining( 'test-query' ) );
		});

		test( 'Has class multiple', () => {

			let el = query( '#get-el-1' );

			expect( el ).not.toBe( null );
			expect( hasClass( el, 'test-query', 'test-query-2' ) ).toEqual( true );

		});

		// remove 2 classes
		test( 'Remove multiple classes', () => {

			let el = query( '#get-el-1' );

			expect( el ).not.toBe( null );
			removeClass( el, 'test-query', 'test-query-2' );

			expect( el.getAttribute( 'class' ) ).toEqual( expect.not.stringContaining( 'test-query-2' ) );
			expect( el.getAttribute( 'class' ) ).toEqual( expect.not.stringContaining( 'test-query' ) );
		});

	});

	// byClass
	describe( 'byClass()', () => {

		// add 1 class
		test( 'Add single class to single el', () => {

			let el = byClass( 'outer' );

			expect( el.length ).not.toBe( 0 );
			addClass( el[0], 'test-byClass' );

			expect( el[0].getAttribute( 'class' ) ).toEqual( expect.stringContaining( 'test-byClass' ) );
		});

		test( 'Has class', () => {

			let el = byClass( 'outer' );

			expect( el.length ).not.toBe( 0 );
			expect( hasClass( el[0], 'test-byClass' ) ).toEqual( true );

		});

		// remove 1 class
		test( 'Remove single class from single el', () => {

			let el = byClass( 'outer' );

			expect( el.length ).not.toBe( 0 );
			removeClass( el[0], 'test-byClass' );

			expect( el[0].getAttribute( 'class' ) ).toEqual( expect.not.stringContaining( 'test-byClass' ) );
		});

		// add 1 class to 3 els
		test( 'Add single class to multiple el', () => {

			let el = byClass( 'outer' );

			expect( el.length ).not.toBe( 0 );
			addClass( el, 'test-byClass' );

			expect( el[0].getAttribute( 'class' ) ).toEqual( expect.stringContaining( 'test-byClass' ) );
			expect( el[1].getAttribute( 'class' ) ).toEqual( expect.stringContaining( 'test-byClass' ) );
			expect( el[2].getAttribute( 'class' ) ).toEqual( expect.stringContaining( 'test-byClass' ) );
		});

		// remove 1 class to 3 els
		test( 'Remove single class from multiple el', () => {

			let el = byClass( 'outer' );

			expect( el.length ).not.toBe( 0 );
			removeClass( el, 'test-byClass' );

			expect( el[0].getAttribute( 'class' ) ).toEqual( expect.not.stringContaining( 'test-byClass' ) );
			expect( el[1].getAttribute( 'class' ) ).toEqual( expect.not.stringContaining( 'test-byClass' ) );
			expect( el[2].getAttribute( 'class' ) ).toEqual( expect.not.stringContaining( 'test-byClass' ) );
		});

		// add 2 classes
		test( 'Add multiple classes to single el', () => {

			let el = byClass( 'outer' );

			expect( el.length ).not.toBe( 0 );
			addClass( el[0], 'test-byClass', 'test-byClass-2' );

			expect( el[0].getAttribute( 'class' ) ).toEqual( expect.stringContaining( 'test-byClass-2' ) );
			expect( el[0].getAttribute( 'class' ) ).toEqual( expect.stringContaining( 'test-byClass' ) );
		});

		test( 'Has class multiple', () => {

			let el = byClass( 'outer' );

			expect( el.length ).not.toBe( 0 );
			expect( hasClass( el[0], 'test-byClass', 'test-byClass-2' ) ).toEqual( true );

		});

		// remove 2 classes
		test( 'Remove multiple classes from single el', () => {

			let el = byClass( 'outer' );

			expect( el.length ).not.toBe( 0 );
			removeClass( el[0], 'test-byClass', 'test-byClass-2' );

			expect( el[0].getAttribute( 'class' ) ).toEqual( expect.not.stringContaining( 'test-byClass-2' ) );
			expect( el[0].getAttribute( 'class' ) ).toEqual( expect.not.stringContaining( 'test-byClass' ) );
		});

		// add 2 classes to 3 els
		test( 'Add multiple classes to multiple el', () => {

			let el = byClass( 'outer' );

			expect( el.length ).not.toBe( 0 );
			addClass( el, 'test-byClass', 'test-byClass-2' );

			expect( el[0].getAttribute( 'class' ) ).toEqual( expect.stringContaining( 'test-byClass-2' ) );
			expect( el[1].getAttribute( 'class' ) ).toEqual( expect.stringContaining( 'test-byClass-2' ) );
			expect( el[2].getAttribute( 'class' ) ).toEqual( expect.stringContaining( 'test-byClass-2' ) );
			expect( el[0].getAttribute( 'class' ) ).toEqual( expect.stringContaining( 'test-byClass' ) );
			expect( el[1].getAttribute( 'class' ) ).toEqual( expect.stringContaining( 'test-byClass' ) );
			expect( el[2].getAttribute( 'class' ) ).toEqual( expect.stringContaining( 'test-byClass' ) );
		});

		// remove 2 classes to 3 els
		test( 'Remove multiple classes from multiple el', () => {

			let el = byClass( 'outer' );

			expect( el.length ).not.toBe( 0 );
			removeClass( el, 'test-byClass', 'test-byClass-2' );

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

			let el = queryAll( '.outer' );

			expect( el.length ).not.toBe( 0 );
			addClass( el[0], 'test-queryAll' );

			expect( el[0].getAttribute( 'class' ) ).toEqual( expect.stringContaining( 'test-queryAll' ) );
		});

		test( 'Has class', () => {

			let el = queryAll( '.outer' );

			expect( el.length ).not.toBe( 0 );
			expect( hasClass( el[0], 'test-queryAll' ) ).toEqual( true );

		});

		// remove 1 class
		test( 'Remove single class from single el', () => {

			let el = queryAll( '.outer' );

			expect( el.length ).not.toBe( 0 );
			removeClass( el[0], 'test-queryAll' );

			expect( el[0].getAttribute( 'class' ) ).toEqual( expect.not.stringContaining( 'test-queryAll' ) );
		});

		// add 1 class to 3 els
		test( 'Add single class to multiple el', () => {

			let el = queryAll( '.outer' );

			expect( el.length ).not.toBe( 0 );
			addClass( el, 'test-queryAll' );

			expect( el[0].getAttribute( 'class' ) ).toEqual( expect.stringContaining( 'test-queryAll' ) );
			expect( el[1].getAttribute( 'class' ) ).toEqual( expect.stringContaining( 'test-queryAll' ) );
			expect( el[2].getAttribute( 'class' ) ).toEqual( expect.stringContaining( 'test-queryAll' ) );
		});

		// remove 1 class to 3 els
		test( 'Remove single class from multiple el', () => {

			let el = queryAll( '.outer' );

			expect( el.length ).not.toBe( 0 );
			removeClass( el, 'test-queryAll' );

			expect( el[0].getAttribute( 'class' ) ).toEqual( expect.not.stringContaining( 'test-queryAll' ) );
			expect( el[1].getAttribute( 'class' ) ).toEqual( expect.not.stringContaining( 'test-queryAll' ) );
			expect( el[2].getAttribute( 'class' ) ).toEqual( expect.not.stringContaining( 'test-queryAll' ) );
		});

		// add 2 classes
		test( 'Add multiple classes to single el', () => {

			let el = queryAll( '.outer' );

			expect( el.length ).not.toBe( 0 );
			addClass( el[0], 'test-queryAll', 'test-queryAll-2' );

			expect( el[0].getAttribute( 'class' ) ).toEqual( expect.stringContaining( 'test-queryAll-2' ) );
			expect( el[0].getAttribute( 'class' ) ).toEqual( expect.stringContaining( 'test-queryAll' ) );
		});

		test( 'Has class multiple', () => {

			let el = queryAll( '.outer' );

			expect( el.length ).not.toBe( 0 );
			expect( hasClass( el[0], 'test-queryAll', 'test-queryAll-2' ) ).toEqual( true );

		});

		// remove 2 classes
		test( 'Remove multiple classes from single el', () => {

			let el = queryAll( '.outer' );

			expect( el.length ).not.toBe( 0 );
			removeClass( el[0], 'test-queryAll', 'test-queryAll-2' );

			expect( el[0].getAttribute( 'class' ) ).toEqual( expect.not.stringContaining( 'test-queryAll-2' ) );
			expect( el[0].getAttribute( 'class' ) ).toEqual( expect.not.stringContaining( 'test-queryAll' ) );
		});

		// add 2 classes to 3 els
		test( 'Add multiple classes to multiple el', () => {

			let el = queryAll( '.outer' );

			expect( el.length ).not.toBe( 0 );
			addClass( el, 'test-queryAll', 'test-queryAll-2' );

			expect( el[0].getAttribute( 'class' ) ).toEqual( expect.stringContaining( 'test-queryAll-2' ) );
			expect( el[1].getAttribute( 'class' ) ).toEqual( expect.stringContaining( 'test-queryAll-2' ) );
			expect( el[2].getAttribute( 'class' ) ).toEqual( expect.stringContaining( 'test-queryAll-2' ) );
			expect( el[0].getAttribute( 'class' ) ).toEqual( expect.stringContaining( 'test-queryAll' ) );
			expect( el[1].getAttribute( 'class' ) ).toEqual( expect.stringContaining( 'test-queryAll' ) );
			expect( el[2].getAttribute( 'class' ) ).toEqual( expect.stringContaining( 'test-queryAll' ) );
		});

		// remove 2 classes to 3 els
		test( 'Remove multiple classes from multiple el', () => {

			let el = queryAll( '.outer' );

			expect( el.length ).not.toBe( 0 );
			removeClass( el, 'test-queryAll', 'test-queryAll-2' );

			expect( el[0].getAttribute( 'class' ) ).toEqual( expect.not.stringContaining( 'test-queryAll-2' ) );
			expect( el[1].getAttribute( 'class' ) ).toEqual( expect.not.stringContaining( 'test-queryAll-2' ) );
			expect( el[2].getAttribute( 'class' ) ).toEqual( expect.not.stringContaining( 'test-queryAll-2' ) );
			expect( el[0].getAttribute( 'class' ) ).toEqual( expect.not.stringContaining( 'test-queryAll' ) );
			expect( el[1].getAttribute( 'class' ) ).toEqual( expect.not.stringContaining( 'test-queryAll' ) );
			expect( el[2].getAttribute( 'class' ) ).toEqual( expect.not.stringContaining( 'test-queryAll' ) );
		});

	});

});