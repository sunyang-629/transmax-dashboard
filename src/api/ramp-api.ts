import { RAMP_ALGORITHM_ARRAY } from '../constants'
import type { Ramp } from '../types'

function getRampAlgorithms(onUpdate: (ramps: Ramp[]) => void) {
  const count = 50
  return setInterval(() => {
    const ramps = []
    for (let i = 0; i < count; i++) {
      ramps.push({
        id: `ramp-${i}`,
        algorithm: RAMP_ALGORITHM_ARRAY[Math.floor(Math.random() * 5)],
      })
    }
    onUpdate(ramps)
  }, 500)
}

export { getRampAlgorithms }
