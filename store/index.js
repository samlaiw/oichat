
export const state = () => {
    return {
        isOpen: false
    };
};

export const mutations = {
    open(state) {
        state.navbar = true;
    },
    close(state) {
        state.navbar = false;
    }
};