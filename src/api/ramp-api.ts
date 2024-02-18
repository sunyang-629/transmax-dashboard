import { RAMP_ALGORITHM_ARRAY } from '../constants'
import type { Ramp } from '../types'

// const mock = [
//   {
//     id: 'ramp-0',
//     algorithm: 'Algorithm 1',
//   },
//   {
//     id: 'ramp-1',
//     algorithm: 'Algorithm 1',
//   },
//   {
//     id: 'ramp-2',
//     algorithm: 'Algorithm 5',
//   },
//   {
//     id: 'ramp-3',
//     algorithm: 'Algorithm 3',
//   },
//   {
//     id: 'ramp-4',
//     algorithm: 'Algorithm 4',
//   },
//   {
//     id: 'ramp-5',
//     algorithm: 'Algorithm 1',
//   },
//   {
//     id: 'ramp-6',
//     algorithm: 'Algorithm 4',
//   },
//   {
//     id: 'ramp-7',
//     algorithm: 'Algorithm 2',
//   },
//   {
//     id: 'ramp-8',
//     algorithm: 'Algorithm 1',
//   },
//   {
//     id: 'ramp-9',
//     algorithm: 'Algorithm 5',
//   },
//   {
//     id: 'ramp-10',
//     algorithm: 'Algorithm 4',
//   },
//   {
//     id: 'ramp-11',
//     algorithm: 'Algorithm 4',
//   },
//   {
//     id: 'ramp-12',
//     algorithm: 'Algorithm 3',
//   },
//   {
//     id: 'ramp-13',
//     algorithm: 'Algorithm 1',
//   },
//   {
//     id: 'ramp-14',
//     algorithm: 'Algorithm 1',
//   },
//   {
//     id: 'ramp-15',
//     algorithm: 'Algorithm 4',
//   },
//   {
//     id: 'ramp-16',
//     algorithm: 'Algorithm 2',
//   },
//   {
//     id: 'ramp-17',
//     algorithm: 'Algorithm 2',
//   },
//   {
//     id: 'ramp-18',
//     algorithm: 'Algorithm 1',
//   },
//   {
//     id: 'ramp-19',
//     algorithm: 'Algorithm 2',
//   },
//   {
//     id: 'ramp-20',
//     algorithm: 'Algorithm 4',
//   },
//   {
//     id: 'ramp-21',
//     algorithm: 'Algorithm 4',
//   },
//   {
//     id: 'ramp-22',
//     algorithm: 'Algorithm 4',
//   },
//   {
//     id: 'ramp-23',
//     algorithm: 'Algorithm 3',
//   },
//   {
//     id: 'ramp-24',
//     algorithm: 'Algorithm 2',
//   },
//   {
//     id: 'ramp-25',
//     algorithm: 'Algorithm 4',
//   },
//   {
//     id: 'ramp-26',
//     algorithm: 'Algorithm 5',
//   },
//   {
//     id: 'ramp-27',
//     algorithm: 'Algorithm 5',
//   },
//   {
//     id: 'ramp-28',
//     algorithm: 'Algorithm 1',
//   },
//   {
//     id: 'ramp-29',
//     algorithm: 'Algorithm 2',
//   },
//   {
//     id: 'ramp-30',
//     algorithm: 'Algorithm 3',
//   },
//   {
//     id: 'ramp-31',
//     algorithm: 'Algorithm 5',
//   },
//   {
//     id: 'ramp-32',
//     algorithm: 'Algorithm 5',
//   },
//   {
//     id: 'ramp-33',
//     algorithm: 'Algorithm 2',
//   },
//   {
//     id: 'ramp-34',
//     algorithm: 'Algorithm 4',
//   },
//   {
//     id: 'ramp-35',
//     algorithm: 'Algorithm 2',
//   },
//   {
//     id: 'ramp-36',
//     algorithm: 'Algorithm 2',
//   },
//   {
//     id: 'ramp-37',
//     algorithm: 'Algorithm 3',
//   },
//   {
//     id: 'ramp-38',
//     algorithm: 'Algorithm 4',
//   },
//   {
//     id: 'ramp-39',
//     algorithm: 'Algorithm 1',
//   },
//   {
//     id: 'ramp-40',
//     algorithm: 'Algorithm 2',
//   },
//   {
//     id: 'ramp-41',
//     algorithm: 'Algorithm 5',
//   },
//   {
//     id: 'ramp-42',
//     algorithm: 'Algorithm 5',
//   },
//   {
//     id: 'ramp-43',
//     algorithm: 'Algorithm 3',
//   },
//   {
//     id: 'ramp-44',
//     algorithm: 'Algorithm 4',
//   },
//   {
//     id: 'ramp-45',
//     algorithm: 'Algorithm 1',
//   },
//   {
//     id: 'ramp-46',
//     algorithm: 'Algorithm 3',
//   },
//   {
//     id: 'ramp-47',
//     algorithm: 'Algorithm 1',
//   },
//   {
//     id: 'ramp-48',
//     algorithm: 'Algorithm 4',
//   },
//   {
//     id: 'ramp-49',
//     algorithm: 'Algorithm 4',
//   },
// ]

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
