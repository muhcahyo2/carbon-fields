/**
 * External dependencies.
 */
import { addFilter } from '@wordpress/hooks';

/**
 * Internal dependencies.
 */
import './style.scss';

addFilter( 'carbon-fields.radio-field.block', 'carbon-fields/blocks', ( OriginalRadioField ) => OriginalRadioField );
