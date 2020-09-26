
/**
 * Toggles the menu items
 */
const activateMenuItems = () => {
    const links = document.getElementsByClassName('nav-link-ref');

    let menuItemEl = null;
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < links.length; i++) {
        // tslint:disable-next-line: no-string-literal
        if (window.location.pathname === links[i]['pathname']) {
            menuItemEl = links[i];
            break;
        }
    }

    if (menuItemEl) {
        menuItemEl.classList.add('active');
        const parentEl = menuItemEl.parentElement;

        if (parentEl) {
            const parent2El = parentEl.parentElement;
            if (parent2El) {
                parent2El.classList.add('active');
            }

            const parent3El = parent2El.parentElement;
            if (parent3El) {
                const parent4El = parent3El.parentElement;
                if (parent4El) {
                    parent4El.classList.add('active');

                    const parent5El = parent4El.parentElement;
                    if (parent5El) {
                        const parent6El = parent5El.parentElement;
                        if (parent6El) {
                            parent6El.classList.add('active');
                        }
                    }
                }
            }
        }
    }
};


/**
 * Resets the menus
 */
const resetMenuItems = () => {
    const links = document.getElementsByClassName('nav-link-ref');


    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < links.length; i++) {
        const menuItemEl = links[i];
        menuItemEl.classList.remove('active');
        const parentEl = menuItemEl.parentElement;

        if (parentEl) {
            const parent2El = parentEl.parentElement;
            if (parent2El) {
                parent2El.classList.remove('active');
            }

            const parent3El = parent2El.parentElement;
            if (parent3El) {
                const parent4El = parent3El.parentElement;
                if (parent4El) {
                    parent4El.classList.remove('active');

                    const parent5El = parent4El.parentElement;
                    if (parent5El) {
                        const parent6El = parent5El.parentElement;
                        if (parent6El) {
                            parent6El.classList.remove('active');
                        }
                    }
                }
            }
        }
    }
};

export { activateMenuItems, resetMenuItems };
