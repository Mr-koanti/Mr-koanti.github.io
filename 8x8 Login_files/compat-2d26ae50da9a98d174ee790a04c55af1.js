// utilities used to make life easier when avoiding modern JS that doesn't work in IE11

/**
 * Add the CSS class to each element in the array
 * @param elements to add to
 * @param clazz to add
 */
const addClass = function(elements,clazz) {
    for(i = 0; i < elements.length; ++i) {
        elements[i].classList.add(clazz);
    }
}

/**
 * Remove the CSS class from each element in the array
 * @param elements to remove from
 * @param clazz to remove
 */
const removeClass = function(elements,clazz) {
    for(i = 0; i < elements.length; ++i) {
        elements[i].classList.remove(clazz);
    }
}

/**
 * Does an element in the array have the class
 * @param elements to check for
 * @param clazz to look for
 */
const hasClass = function(elements, clazz) {
    for(i = 0; i < elements.length; ++i) {
        if (elements[i].classList.contains(clazz)) {
            return true;
        }
    }
    return false;
}

/**
 * Polyfill for IE11
 */
if (!String.prototype.startsWith) {
    String.prototype.startsWith = function(searchString, position) {
        position = position || 0;
        return this.indexOf(searchString, position) === position;
    };
}

// Determine if browser isIE
const isIE = !!window.MSInputMethodContext && !!document.documentMode;

// The psuedo class causes a syntax error in IE which stops some plugins working
const getAutoFilled = function() {
    return (isIE) ? null : document.querySelector("input:-webkit-autofill")
}
