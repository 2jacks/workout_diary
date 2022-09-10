import { renderHook, fireEvent } from '@testing-library/react'
import { useScreenSize } from '@hooks/useScreenSize'
import { act } from 'react-dom/test-utils'

test('Change hook output on resize', () => {
	let { result } = renderHook(() => useScreenSize())
	expect(result.current).toEqual([window.innerWidth, window.innerHeight])

	act(() => {
		// Change the viewport to 500px.
		window.innerWidth = 500
		window.innerHeight = 500

		// Trigger the window resize event.
		// window.dispatchEvent(new Event('resize'))
		fireEvent(window, new Event('resize'))
	})
	expect(result.current).toEqual([500, 500])
})
