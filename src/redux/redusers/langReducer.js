export default function lang(state = true, action) {
    switch (action.type) {
        case 'LANG':
            return !state;
        default:
            return state;
    }
}
