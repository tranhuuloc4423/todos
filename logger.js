export default function logger(reducer) {
    return (prevState, action, args) => {
        console.group(action)
        console.log('prevState: ', prevState)
        console.log('action: ', action)
        console.log('args: ', args)
        const newState = reducer(prevState, action, args)
        console.log('newState: ', newState)
        console.log('action: ', action)
        console.log('args: ', args)
        console.groupEnd()
        return newState
    }
}