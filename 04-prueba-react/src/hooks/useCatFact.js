import { useState, useEffect } from 'react'
import { getNewFact } from '../services/facts'

export const useCatFact = () => {
  const [fact, setFact] = useState()

  const refreshFact = async () => {
    const fact = await getNewFact()
    setFact(fact)
  }

  // Recuperar la cita de la pagina
  useEffect(refreshFact, [])

  return { fact, refreshFact }
}
