'use strict';

// YOU KNOW WHAT TO DO //

/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 */
function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;

/**
 * identity: Function takes in an input value and returns it unchanged.
 * 
 * @param { Any value } value: Function takes in any data type. 
 * @returns { Any value } value: Function returns input value unchanged.
 */

function identity(value){
    return value;
}

module.exports.identity = identity;

/**
 * filter: (2-3 sentences describing)
 * 
 * @param { Array } collection: Function takes in an array.
 * @param { Function } collection: Function takes in a function designed to test each value.
 * @return { Array } collection: Function returns a new array of only items that passed callback function.
 */

function filter(){

}

module.exports.filter = filter;