import { useEffect, useState } from 'react'

function useTypewriter(phrases, speed = 60, pause = 2000) {
  const [display, setDisplay] = useState('')
  const [phraseIdx, setPhraseIdx] = useState(0)
  const [charIdx, setCharIdx] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = phrases[phraseIdx]
    const atWordEnd = !deleting && charIdx === current.length - 1
    const delay = atWordEnd ? pause : deleting ? speed / 2 : speed

    const timeout = setTimeout(() => {
      if (!deleting) {
        setDisplay(current.slice(0, charIdx + 1))

        if (charIdx + 1 === current.length) {
          setDeleting(true)
        } else {
          setCharIdx((currentChar) => currentChar + 1)
        }
      } else {
        if (charIdx <= 0) {
          setDisplay('')
          setDeleting(false)
          setPhraseIdx((index) => (index + 1) % phrases.length)
        } else {
          setDisplay(current.slice(0, charIdx - 1))
          setCharIdx((currentChar) => currentChar - 1)
        }
      }
    }, delay)

    return () => clearTimeout(timeout)
  }, [charIdx, deleting, phraseIdx, phrases, speed, pause])

  return display
}

export default useTypewriter
