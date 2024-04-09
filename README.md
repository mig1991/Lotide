# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs.

## Usage

**Install it:**

`npm install @username/lotide`

**Require it:**

`const _ = require('@username/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

`head(array)`: Returns the first element of an array.
`tail(array)`: Returns the last element(s) of an array as separate values, not in an array.
`middle(array)`: Returns the middle element(s) of an array. If the array length is odd, it returns a single middle element; if even, it returns the two middle elements.
`eqArrays(array1, array2)`: Checks if two arrays are equal in value and length.
`assertEqual(actual, expected)`: Asserts whether two primitive values are equal.
`assertArraysEqual(actual, expected)`: Asserts whether two arrays are equal.
`assertObjectsEqual(actual, expected)`: Asserts whether two objects are equal in structure and value.
`countLetters(sentence)`: Returns an object with counts of each letter in a given sentence.
`countOnly(allItems, itemsToCount)`: Returns an object containing counts of specified items from a provided list.
`eqObjects(object1, object2)`: Checks if two objects are equal in structure and value.
`findKey(object, callback)`: Returns the first key for which the callback function returns a truthy value.
`findKeyByValue(object, value)`: Returns the key of a given value in an object.
`letterPositions(sentence)`: Returns an object with arrays containing the indices of each letter in a given sentence.
`takeUntil(array, callback)`: Returns a slice of an array until the callback returns a truthy value.
`without(source, itemsToRemove)`: Returns a new array with elements from the source array that are not present in the itemsToRemove array.