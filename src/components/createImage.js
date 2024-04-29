/**
 * Create an image element
 *
 * @param {object} - image object
 * @returns {HTMLElement} - div element with img and title elements appended
 */

const createImage = (image) => {
    //create image-box
    const imageBox = document.createElement('div');
    imageBox.classList.add('image-box');
    imageBox.id = image.id;

    //create img
    const img = document.createElement('img');
    img.src = image.src;
    img.alt = image.title;

    //create title
    const title = document.createElement('h6');
    title.innerText = image.title;

    imageBox.append(img, title);

    return imageBox;
};

export default createImage;
