function t(t){return document.getElementById(t)}function e(t,n=document){return n.querySelector(t)}function m(t,n){return t.getAttribute(n)}function h(t,n,e){t.setAttribute(n,e);}function v(t,n){t.removeAttribute(n);}function E(t,n){return t.hasAttribute(n)}

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

describe( 'Attributes', () => {

	// byId
	describe( 'byId()', () => {

		test( 'Check setAttr', () => {

			const getEl = t( 'get-el-1' );

			expect( getEl ).not.toBe( null );

			h( getEl, 'new-attr', '2' );
			expect( getEl.outerHTML ).toBe( `<div id="get-el-1" class="outer" new-attr="2">
		<div id="inner-1" class="inner"></div>
	</div>` );

			v( getEl, 'new-attr' );

		});

		test( 'Check getAttr', () => {

			const getEl = t( 'get-el-1' );

			expect( getEl ).not.toBe( null );

			h( getEl, 'new-attr', '2' );

			const newAttr = m( getEl, 'new-attr' );
			expect( newAttr ).toBe( '2' );

			v( getEl, 'new-attr' );

		});

		test( 'Check hasAttr', () => {

			const getEl = t( 'get-el-1' );

			expect( getEl ).not.toBe( null );

			h( getEl, 'new-attr', '2' );

			expect( E( getEl, 'new-attr' ) ).toBe( true );
			expect( E( getEl, 'otherAttr' ) ).toBe( false );

			v( getEl, 'new-attr' );

		});

		test( 'Check remAttr', () => {

			const getEl = t( 'get-el-1' );

			expect( getEl ).not.toBe( null );

			h( getEl, 'new-attr', '2' );
			v( getEl, 'new-attr' );

			expect( getEl.getAttribute( 'new-attr' ) ).toBe( null );

		});

	});

	// query
	describe( 'query()', () => {

		test( 'Check setAttr', () => {

			const getEl = e( '#get-el-1' );

			expect( getEl ).not.toBe( null );

			h( getEl, 'new-attr', '2' );
			expect( getEl.outerHTML ).toBe( `<div id="get-el-1" class="outer" new-attr="2">
		<div id="inner-1" class="inner"></div>
	</div>` );

			v( getEl, 'new-attr' );

		});

		test( 'Check getAttr', () => {

			const getEl = e( '#get-el-1' );

			expect( getEl ).not.toBe( null );

			h( getEl, 'new-attr', '2' );

			const newAttr = m( getEl, 'new-attr' );
			expect( newAttr ).toBe( '2' );

			v( getEl, 'new-attr' );

		});

		test( 'Check hasAttr', () => {

			const getEl = e( '#get-el-1' );

			h( getEl, 'new-attr', '2' );

			expect( getEl ).not.toBe( null );
			expect( E( getEl, 'new-attr' ) ).toBe( true );
			expect( E( getEl, 'otherAttr' ) ).toBe( false );

			v( getEl, 'new-attr' );

		});

		test( 'Check remAttr', () => {

			const getEl = e( '#get-el-1' );

			expect( getEl ).not.toBe( null );

			h( getEl, 'new-attr', '2' );
			v( getEl, 'new-attr' );

			expect( getEl.getAttribute( 'new-attr' ) ).toBe( null );

		});

	});

});
