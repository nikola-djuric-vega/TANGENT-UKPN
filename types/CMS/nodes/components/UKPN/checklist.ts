import { ComponentsTypeName } from '_types/CMS'

export interface ChecklistType {
  __typename: ComponentsTypeName.CHECKLIST
  title?: string
  checklistItems?: string[]
}
