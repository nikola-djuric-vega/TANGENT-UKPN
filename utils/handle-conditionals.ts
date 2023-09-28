import isArray from 'lodash/isArray'

import {
  FormConditionRuleOperatorType,
  FormConditionActionType,
  FormConditionLogicType,
  FormConditionRule,
  FormCondition,
} from '_types/CMS'

interface getConditionalType {
  rule: FormConditionRule
  values: unknown
}

const getConditional = ({ rule, values }: getConditionalType) => {
  let refValue = (values as any)[rule.field]

  if (!refValue) {
    return false
  }

  if (rule.value === 'null') {
    rule.value = null
  }

  if (
    isArray(refValue) &&
    rule.operator !== FormConditionRuleOperatorType.CONTAINS
  ) {
    refValue = refValue[0]
  }

  switch (rule.operator) {
    case FormConditionRuleOperatorType.IS:
      if (refValue === rule.value) {
        return true
      } else {
        return false
      }
      break
    case FormConditionRuleOperatorType.IS_NOT:
      if (refValue !== rule.value) {
        return true
      } else {
        return false
      }
      break
    case FormConditionRuleOperatorType.GREATER_THEN:
      if (refValue > (rule.value as string)) {
        return true
      } else {
        return false
      }
      break
    case FormConditionRuleOperatorType.LESS_THEN:
      if (refValue < (rule.value as string)) {
        return true
      } else {
        return false
      }
      break
    case FormConditionRuleOperatorType.CONTAINS:
      if (refValue.includes(rule.value)) {
        return true
      } else {
        return false
      }
  }
}

export const handleConditionals = (
  values: unknown,
  returnItem: any,
  condition?: FormCondition
) => {
  let conditionIsMet
  let conditionIsNotMet

  const conditionResult = condition?.rules.map((rule) =>
    getConditional({ rule, values })
  )
  if (condition) {
    if (condition?.logicType === FormConditionLogicType.ALL) {
      conditionIsNotMet = conditionResult?.includes(false)
      if (condition.actionType === FormConditionActionType.HIDE) {
        return !conditionIsNotMet ? null : returnItem
      } else {
        return !conditionIsNotMet ? returnItem : null
      }
    } else if (condition?.logicType === FormConditionLogicType.ANY) {
      conditionIsMet = conditionResult?.includes(true)
      if (condition.actionType === FormConditionActionType.HIDE) {
        return conditionIsMet ? null : returnItem
      } else {
        return conditionIsMet ? returnItem : null
      }
    } else {
      return returnItem
    }
  } else {
    return returnItem
  }
}
