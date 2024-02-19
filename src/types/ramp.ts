import { RAMP_ALGORITHM_ARRAY } from '../constants'

export type Ramp = {
  id: string
  algorithm: (typeof RAMP_ALGORITHM_ARRAY)[number]
}
