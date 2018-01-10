const content = el("#containerData");

window.addEventListener("hashchange", event => {
    // console.log("nayan");
    findPage();
});

const findPage = () => {
    const url = window.location.hash.substr(1);
    // console.log("url  ",url);
    routePage(url);
};

const routePage = (url) => {
    if (url === 'Home') {
        content.innerHTML = homeTemp();
    }

    if (url === 'List') {
        content.innerHTML = listTemp();
    }

    if (url === 'Add') {
        content.innerHTML = addTemp();
    }

    if (url === 'Update') {
        content.innerHTML = updateTemp();
    }
};

window.location.hash = 'List';