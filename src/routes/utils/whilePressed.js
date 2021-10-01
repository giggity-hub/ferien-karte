const defaultOptions = {
    delay: 500,
    interval: 30,
    preventDefault: false,
}
export function whilePressed(element, callback, options={}){
    options = {...defaultOptions, ...options}
    
    element.addEventListener('mousedown', (e)=> {
        if (options.preventDefault) {e.preventDefault()}
        callback(e)
        let isPressed = true
        let interval;

        setTimeout(()=>{
            if(isPressed){
                interval = setInterval( ()=>{
                    callback(e)
                }, options.interval)
            }
        }, options.delay)

        document.addEventListener('mouseup', ()=>{
            isPressed = false
            if (interval){
                clearInterval(interval)
            }
        }, {once: true})
    })
} 