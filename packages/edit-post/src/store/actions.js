/**
 * WordPress dependencies
 */
import deprecated from '@wordpress/deprecated';

/**
 * Returns an action object used in signalling that the user opened an editor sidebar.
 *
 * @param {string} name Sidebar name to be opened.
 *
 * @return {Object} Action object.
 */
export function openGeneralSidebar( name ) {
	return {
		type: 'OPEN_GENERAL_SIDEBAR',
		name,
	};
}

/**
 * Returns an action object signalling that the user closed the sidebar.
 *
 * @return {Object} Action object.
 */
export function closeGeneralSidebar() {
	return {
		type: 'CLOSE_GENERAL_SIDEBAR',
	};
}

/**
 * Returns an action object used in signalling that the user opened an editor sidebar.
 *
 * @param {string} name A string that uniquely identifies the modal.
 *
 * @return {Object} Action object.
 */
export function openModal( name ) {
	return {
		type: 'OPEN_MODAL',
		name,
	};
}

/**
 * Returns an action object signalling that the user closed the sidebar.
 *
 * @return {Object} Action object.
 */
export function closeModal() {
	return {
		type: 'CLOSE_MODAL',
	};
}

/**
 * Returns an action object used in signalling that the user opened the publish
 * sidebar.
 *
 * @return {Object} Action object
 */
export function openPublishSidebar() {
	return {
		type: 'OPEN_PUBLISH_SIDEBAR',
	};
}

/**
 * Returns an action object used in signalling that the user closed the
 * publish sidebar.
 *
 * @return {Object} Action object.
 */
export function closePublishSidebar() {
	return {
		type: 'CLOSE_PUBLISH_SIDEBAR',
	};
}

/**
 * Returns an action object used in signalling that the user toggles the publish sidebar.
 *
 * @return {Object} Action object
 */
export function togglePublishSidebar() {
	return {
		type: 'TOGGLE_PUBLISH_SIDEBAR',
	};
}

/**
 * Returns an action object used to enable or disable a panel in the editor.
 *
 * @param {string} panelName A string that identifies the panel to enable or disable.
 *
 * @return {Object} Action object.
 */
export function toggleEditorPanelEnabled( panelName ) {
	return {
		type: 'TOGGLE_PANEL_ENABLED',
		panelName,
	};
}

/**
 * Returns an action object used to open or close a panel in the editor.
 *
 * @param {string} panelName A string that identifies the panel to open or close.
 *
 * @return {Object} Action object.
*/
export function toggleEditorPanelOpened( panelName ) {
	return {
		type: 'TOGGLE_PANEL_OPENED',
		panelName,
	};
}

/**
 * Returns an action object used to open or close a panel in the editor.
 *
 * @param {string} panelName A string that identifies the panel to open or close.
 *
 * @return {Object} Action object.
*/
export function toggleGeneralSidebarEditorPanel( panelName ) {
	deprecated( 'toggleGeneralSidebarEditorPanel', {
		alternative: 'toggleEditorPanelOpened',
		plugin: 'Gutenberg',
		version: '4.3.0',
	} );
	return toggleEditorPanelOpened( panelName );
}

/**
 * Returns an action object used to toggle a feature flag.
 *
 * @param {string} feature Feature name.
 *
 * @return {Object} Action object.
 */
export function toggleFeature( feature ) {
	return {
		type: 'TOGGLE_FEATURE',
		feature,
	};
}

export function switchEditorMode( mode ) {
	return {
		type: 'SWITCH_MODE',
		mode,
	};
}

/**
 * Returns an action object used to toggle a plugin name flag.
 *
 * @param {string} pluginName Plugin name.
 *
 * @return {Object} Action object.
 */
export function togglePinnedPluginItem( pluginName ) {
	return {
		type: 'TOGGLE_PINNED_PLUGIN_ITEM',
		pluginName,
	};
}

export function initializeMetaBoxState() {
	deprecated( 'initializeMetaBoxState action (`core/edit-post`)', {
		plugin: 'Gutenberg',
		version: '4.2',
	} );
	return {
		type: 'DO_NOTHING',
	};
}

export function setActiveMetaBoxLocations() {
	deprecated( 'setActiveMetaBoxLocations action (`core/edit-post`)', {
		plugin: 'Gutenberg',
		version: '4.2',
	} );
	return {
		type: 'DO_NOTHING',
	};
}

/**
 * Returns an action object used in signaling
 * what Meta boxes are available in which location.
 *
 * @param {Object} metaBoxesPerLocation Meta boxes per location.
 *
 * @return {Object} Action object.
 */
export function setAvailableMetaBoxesPerLocation( metaBoxesPerLocation ) {
	return {
		type: 'SET_META_BOXES_PER_LOCATIONS',
		metaBoxesPerLocation,
	};
}

/**
 * Returns an action object used to request meta box update.
 *
 * @return {Object} Action object.
 */
export function requestMetaBoxUpdates() {
	return {
		type: 'REQUEST_META_BOX_UPDATES',
	};
}

/**
 * Returns an action object used signal a successful meta box update.
 *
 * @return {Object} Action object.
 */
export function metaBoxUpdatesSuccess() {
	return {
		type: 'META_BOX_UPDATES_SUCCESS',
	};
}

/**
 * Returns an action object used to set the saved meta boxes data.
 * This is used to check if the meta boxes have been touched when leaving the editor.
 *
 * @param   {Object} dataPerLocation Meta Boxes Data per location.
 *
 * @return {Object} Action object.
 */
export function setMetaBoxSavedData( dataPerLocation ) {
	deprecated( 'setMetaBoxSavedData action (`core/edit-post`)', {
		plugin: 'Gutenberg',
		version: '4.2',
	} );

	return {
		type: 'META_BOX_SET_SAVED_DATA',
		dataPerLocation,
	};
}
