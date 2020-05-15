
export const state = () => {
    return {
        isOpen: false
    };
};

export const mutations = {
    open(state) {
        state.isOpen = true;
    },
    close(state) {
        state.isOpen = false;
    }
};