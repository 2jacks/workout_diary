import { useEffect, useState } from 'react'

export function useScreenSize() {
	const [size, setSize] = useState([window.innerWidth, window.innerHeight])

	function updateSize() {
		setSize([window.innerWidth, window.innerHeight])
	}

	useEffect(() => {
		window.addEventListener('resize', updateSize)
		return () => window.removeEventListener('resize', updateSize)
	}, [])

	return size
}
