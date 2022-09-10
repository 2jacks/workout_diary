import { useEffect, useState } from 'react'

export type screenSize = {
	screenWidth: number
	screenHeight: number
}

export function useScreenSize(): screenSize {
	const [size, setSize] = useState<screenSize>({
		screenWidth: window.innerWidth,
		screenHeight: window.innerHeight
	})

	function updateSize() {
		setSize({
			screenWidth: window.innerWidth,
			screenHeight: window.innerHeight
		})
	}

	useEffect(() => {
		window.addEventListener('resize', updateSize)
		return () => window.removeEventListener('resize', updateSize)
	}, [])

	return size
}
