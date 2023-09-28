import { DnosEntity } from '_types/CMS/nodes'
import upperCase from 'lodash/upperCase'
import { DNO } from '_types/local'

export const getDnoContent = (currentDno: number, Dnos?: DnosEntity[]) => {
  const dnoRef = Object.values(DNO)[currentDno]
  return Dnos?.find((dno) => dno.name === upperCase(dnoRef))
}
