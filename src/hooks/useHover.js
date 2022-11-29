import React from 'react'

function useHover() {
    const [isHovered, setIsHovered] = React.useState(false)
    const ref = React.useRef(null)

    function enter() {
        setIsHovered(true)
    }

    function leave() {
        setIsHovered(false)
    }

    React.useEffect(() => {
        ref.current. ("mouseenter", enter())
        ref.current.addEventListener("mouseleave", leave())
        return () => {
            ref.current.removeEventListener("mouseenter", enter())
            ref.current.removeEventListener("mouseleave", leave())
        }
    }, [])

    return [isHovered, ref]
}

export default useHover