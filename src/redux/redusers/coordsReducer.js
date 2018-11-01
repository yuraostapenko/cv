export default function coords(state=document.documentElement.clientHeight, action) {
    switch (action.type) {
        case 'COORDS':
        return state;
       default:
       return state;
    }
}