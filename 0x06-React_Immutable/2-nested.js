import { fromjs } from 'immutable';

export default function accessImmutableObject(object, array) {
    const mappedObj = fromjs(object);
    return mappedObj.getIn(array, undefined);
}
