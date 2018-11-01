export default function scrolled(state=0, action) {
    switch (action.type) {
        case 'SCROLLED':
        let scrolled = window.pageYOffset;
        return scrolled;
        default:
           return state;
    }
}