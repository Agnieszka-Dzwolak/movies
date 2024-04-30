import data from '../data.js';
import dom from '../dom.js';
import insertChildAtIndex from '../components/insertChildAtIndex.js';

const filterImagesHandler = (value) => {
    data.posters.forEach((poster) => {
        const isExistPoster = document.getElementById(poster.id);
        if (poster.title.toLowerCase().includes(value.toLowerCase())) {
            if (!isExistPoster) {
                dom.images.append(poster.dom);
                insertChildAtIndex(dom.images, poster.dom, poster.id - 1);
            }
        } else {
            if (isExistPoster) {
                isExistPoster.remove();
            }
        }

        //checking if the images has no children, then display an message "No movies found with this title"

        if (dom.images.children.length === 0) {
            dom.message.innerText = 'No movies found with this title';

            dom.images.append(dom.message);
        } else {
            dom.message.remove();
        }
    });
};

export default filterImagesHandler;
