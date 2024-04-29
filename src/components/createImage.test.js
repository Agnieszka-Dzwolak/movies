/**
 * @jest-environment jsdom
 */

import createImage from './createImage';

describe('create an image element', () => {
    const imageDom = createImage({
        id: 1,
        dataName: 'spiderman',
        src: './assets/spiderman.jpg',
        title: 'Spiderman',
    });

    test('nodeName -> DIV', () => {
        expect(imageDom.nodeName).toEqual('DIV');
    });

    test('childElementCount -> 2', () => {
        expect(imageDom.childElementCount).toEqual(2);
    });

    test('class name -> image-box', () => {
        expect(imageDom.className).toEqual('image-box');
    });
});
