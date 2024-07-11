import { ClassicEditor, Essentials, Paragraph, Heading } from 'ckeditor5';
import VEmojis from '../src/vemojis.js';

/* global document */

describe( 'VEmojis', () => {
	it( 'should be named', () => {
		expect( VEmojis.pluginName ).to.equal( 'VEmojis' );
	} );

	describe( 'init()', () => {
		let domElement, editor;

		beforeEach( async () => {
			domElement = document.createElement( 'div' );
			document.body.appendChild( domElement );

			editor = await ClassicEditor.create( domElement, {
				plugins: [
					Paragraph,
					Heading,
					Essentials,
					VEmojis
				],
				toolbar: [
					'VEmojis'
				]
			} );
		} );

		afterEach( () => {
			domElement.remove();
			return editor.destroy();
		} );

		it( 'should load VEmojis', () => {
			const myPlugin = editor.plugins.get( 'VEmojis' );

			expect( myPlugin ).to.be.an.instanceof( VEmojis );
		} );

		it( 'should add an icon to the toolbar', () => {
			expect( editor.ui.componentFactory.has( 'VEmojis' ) ).to.equal( true );
		} );

		it( 'should add a text into the editor after clicking the icon', () => {
			const icon = editor.ui.componentFactory.create( 'VEmojis' );

			expect( editor.getData() ).to.equal( '' );

			icon.fire( 'execute' );

			expect( editor.getData() ).to.equal( '<p>Hello CKEditor 5!</p>' );
		} );
	} );
} );
