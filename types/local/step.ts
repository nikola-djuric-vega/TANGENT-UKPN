export enum StepName {
  POWER_CUT_REPORTED = 'Power cut reported',
  ENGINEERS_ON_THEIR_WAY = 'Engineers on their way',
  ENGINEERS_INVESTIGATING_AND_FIXING = 'Engineers investigating and fixing',
  POWER_RESTORED = 'Power restored',
  RESTORING_CUSTOMERS_AUTO = 'We are restoring customers automatically',
}
export interface Step {
  active: boolean
  date: string | null
  message: string | null
  name: StepName | null
}
