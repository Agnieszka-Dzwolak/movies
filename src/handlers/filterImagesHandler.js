const filterImagesHandler = (value) => {
    const images = document.querySelectorAll('.image-box');
    images.forEach((img) => {
        const title = img.querySelector('h6').innerText;

        if (title.toLocaleLowerCase().includes(value.toLocaleLowerCase())) {
            img.classList.remove('hidden');
        } else {
            img.classList.add('hidden');
        }
    });
};

export default filterImagesHandler;
