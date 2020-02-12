import {_} from '../src';

describe('_', () => {
    it('renders a react fragment', () => {
        expect(_('TEST')).toMatchSnapshot();
    });
    it('renders a react fragment without children', () => {
        expect(_()).toMatchSnapshot();
    });
});