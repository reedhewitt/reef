/**
 * Emit a custom reefevent
 * @param  {String} type   The event type
 * @param  {*}      detail Any details to pass along with the event
 * @param  {Node}   elem   The element to emit the event on
 */
function emit (type, detail, elem = document) {

	// Create a new event
	let event = new CustomEvent(`reef:${type}`, {
		bubbles: true,
		cancelable: true,
		detail: detail
	});

	// Dispatch the event
	return elem.dispatchEvent(event);

}

/**
 * Get the element from the UI
 * @param  {String|Node} elem The element or selector string
 * @return {Node}             The element
 */
function getElem (elem) {
	return typeof elem === 'string' ? document.querySelector(elem) : elem;
}

/**
 * Get an object's type
 * @param  {*}      obj The object
 * @return {String}     The type
 */
function getType (obj) {
	return Object.prototype.toString.call(obj).slice(8, -1).toLowerCase();
}


export {emit, getElem, getType};