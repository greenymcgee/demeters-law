/* eslint-disable max-classes-per-file */
const NON_CASED = {
  array: ['not an object'],
  string: 'not an object',
  name: undefined,
  address: null,
}

const CASED_BOOLEAN = false
const CASED_NUMBER = 1
const NESTED_CLASS = class {}
const NEW_CLASS = new (class {})()
const EMPTY_OBJECT = {}

export const CAMEL_CASED = {
  ...NON_CASED,
  arrayWithObjects: [{ shouldFormat: 'should format' }, 1],
  casedBoolean: CASED_BOOLEAN,
  casedNumber: CASED_NUMBER,
  nestedObject: {
    nestedClass: NESTED_CLASS,
    nestedObjectKeyTwo: { emptyObject: EMPTY_OBJECT, newClass: NEW_CLASS },
  },
}

export const SNAKE_CASED = {
  ...NON_CASED,
  array_with_objects: [{ should_format: 'should format' }, 1],
  cased_boolean: CASED_BOOLEAN,
  cased_number: CASED_NUMBER,
  nested_object: {
    nested_class: NESTED_CLASS,
    nested_object_key_two: {
      empty_object: EMPTY_OBJECT,
      new_class: NEW_CLASS,
    },
  },
}
