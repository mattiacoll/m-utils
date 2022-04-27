function t(t){return document.getElementById(t)}function n(t,n=document){return n.getElementsByClassName(t)}function e(t,n=document){return n.querySelector(t)}function o(t,n=document){return n.querySelectorAll(t)}

// @ts-check

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

			const getEl = t( 'get-el-1' );

			expect( getEl ).not.toBe( null );
			expect( getEl ).toBe( document.getElementById( 'get-el-1' ) );

		});

	});

	// byClass
	describe( 'byClass()', () => {

		test( 'Check byClass', () => {

			const getEls = n( 'outer' );

			expect( getEls.length ).not.toBe( 0 );
			expect( getEls[0] ).toBe( document.getElementsByClassName( 'outer' )[0] );
			expect( getEls[1] ).toBe( document.getElementsByClassName( 'outer' )[1] );
			expect( getEls[2] ).toBe( document.getElementsByClassName( 'outer' )[2] );

		});

		test( 'Check byClass with parent', () => {

			const parent = document.getElementById( 'get-el-1' ),
				getElsPar	 = n( 'inner', parent );

			expect( getElsPar.length ).not.toBe( 0 );
			expect( getElsPar[0] ).toBe( document.getElementById( 'inner-1' ) );

		});

	});

	// query
	describe( 'query()', () => {

		test( 'Check query', () => {

			const getEl = e( '#get-el-1' );

			expect( getEl ).not.toBe( null );
			expect( getEl ).toBe( document.querySelector( '#get-el-1' ) );

		});

		test( 'Check query with parent', () => {

			const parent = e( '#get-el-1' ),
				getEl			 = e( '#inner-1', parent );

			expect( getEl ).not.toBe( null );
			expect( getEl ).toBe( document.querySelector( '#inner-1' ) );

		});
	
	});

	// Query all
	describe( 'queryAll()', () => {

		test( 'Check queryAll', () => {

			const getEl = o( '#get-el-1' );

			expect( getEl.length ).not.toBe( 0 );
			expect( getEl[0] ).toBe( document.querySelectorAll( '#get-el-1' )[0] );

		});

		test( 'Check queryAll with parent', () => {

			const parent = e( '#get-el-1' ),
				getEls		 = o( '.inner', parent );

			expect( getEls.length ).not.toBe( 0 );
			expect( getEls[0] ).toBe( document.querySelectorAll( '.inner' )[0] );

		});
	
	});

});
