export let dropdownPanePosition = (dropdownParent, dropdownPane) => {
    dropdownPane.style.width = null;
    if (window.innerWidth <= 640) {
        dropdownPane.style.width = ((window.innerWidth - 18) / 10) + 'rem';
    }

    const initialDropdownOffsetLeft = Math.round((dropdownPane.offsetWidth - dropdownParent.offsetWidth) / 2);
    const dropdownOffsetLeft = adjustDropdownOffsetLeft(dropdownParent, dropdownPane, initialDropdownOffsetLeft);

    dropdownParent.classList.add('js-dropdown-arrow-show');
    // dropdownPane.style.top = (adjustDropdownOffsetTop(dropdownParent) / 10) + 'rem';
    dropdownPane.style.left = ((0 - dropdownOffsetLeft) / 10) + 'rem';
    dropdownPane.style.height = null;

    if (dropdownPane.clientHeight + dropdownPane.getBoundingClientRect().top > window.innerHeight) {
        const overflowHeight =  dropdownPane.clientHeight + dropdownPane.getBoundingClientRect().top + 9 - window.innerHeight;
        dropdownPane.style.height = ((dropdownPane.clientHeight - overflowHeight) / 10) + 'rem';
    }

    dropdownPane.classList.add('js-dropdown-pane-open');
    dropdownParent.classList.add('js-dropdown-arrow-show');

    // function adjustDropdownOffsetTop(dropdownParent) {
    //     if (dropdownParent.classList.contains('js-dropdown-sup')) {
    //         return dropdownParent.offsetHeight - 9;
    //     }
    //     return dropdownParent.offsetHeight + 8;
    // }

    function adjustDropdownOffsetLeft(dropdownParent, dropdownPane, initialDropdownOffsetLeft) {
        if (initialDropdownOffsetLeft > dropdownParent.offsetLeft) {
            return dropdownParent.offsetLeft - 9;
        }
        if (dropdownParent.offsetLeft - initialDropdownOffsetLeft + dropdownPane.offsetWidth > window.innerWidth) {
            const overflowWidth =  dropdownParent.offsetWidth + dropdownParent.offsetLeft + initialDropdownOffsetLeft - window.innerWidth + 9;
            return initialDropdownOffsetLeft + overflowWidth;
        }
        return initialDropdownOffsetLeft;
    }
};

export let closeAllDropdownPanes = () => {
    document.querySelectorAll('.js-dropdown-pane').forEach(dropdownPane => {
        const dropdownParent = dropdownPane.parentNode.parentNode;
        dropdownPane.style.top = null;
        dropdownPane.style.left = null;
        dropdownPane.style.height = null;
        dropdownPane.style.width = null;
        dropdownPane.classList.remove('js-dropdown-pane-open');
        dropdownParent.classList.remove('js-dropdown-arrow-show');
    });
}

export let openCloseDropdownPane = (dropdownParent, dropdownPane) => {
    if (dropdownPane.classList.contains('js-dropdown-pane-open')) {
        closeAllDropdownPanes();
    } else {
        closeAllDropdownPanes();
        dropdownPanePosition(dropdownParent, dropdownPane);
    }
}