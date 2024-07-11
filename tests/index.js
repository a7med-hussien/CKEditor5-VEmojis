import { icons } from '../src/index.js';

import ckeditor from './../theme/icons/emoji.svg';

describe( 'CKEditor5 VEmojis', () => {
	describe( 'icons', () => {
		it( 'exports the "ckeditor" icon', () => {
			expect( icons.ckeditor ).to.equal( ckeditor );
		} );
	} );
} );
