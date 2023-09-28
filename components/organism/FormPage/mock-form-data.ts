import {
  FormConditionRuleOperatorType,
  FormFieldIndicationType,
  FormConditionActionType,
  FormConditionLogicType,
  FormCustomFields,
  FieldType,
  Form,
} from '_types/CMS'

export const mockFormData: Form = {
  _id: 'ff8fdc04-3dca-4fbb-98c0-2ca039a5a2ab',
  indicator: '*',
  name: 'Every field',
  nextLabel: 'Next',
  previousLabel: 'Previous',
  submitLabel: 'Submit',
  disableDefaultStylesheet: false,
  fieldIndicationType: FormFieldIndicationType.MARK_MANDATORY_FIELDS,
  hideFieldValidation: false,
  messageOnSubmit: '0',
  showValidationSummary: false,
  pages: [
    {
      caption: 'Property details',
      fieldsets: [
        {
          columns: [
            {
              width: 12,
              fields: [
                {
                  caption: 'Rich text',
                  alias: 'text',
                  required: false,
                  settings: {
                    defaultValue: 'homepage.searchbar',
                    DefaultValue: 'homepage.searchbar',
                    showLabel: 'True',
                    ShowLabel: 'True',
                  },
                  type: FieldType.HIDDEN,
                },
                {
                  caption: 'Consent for storing submitted data',
                  alias: 'dataConsent',
                  required: true,
                  requiredErrorMessage:
                    'Consent is required to store and process the data in this form.',
                  settings: {
                    acceptCopy:
                      'Yes, I give permission to store and process my data',
                    AcceptCopy:
                      'Yes, I give permission to store and process my data',
                    defaultValue: '',
                    DefaultValue: '',
                    showLabel: 'True',
                    ShowLabel: 'True',
                  },
                  type: FieldType.DATA_CONSENT,
                },
                {
                  caption: 'Short answer',
                  helpText: 'Short answer help text',
                  alias: 'shortAnswer',
                  required: true,
                  requiredErrorMessage:
                    'Please provide a value for Short answer',
                  settings: {
                    pattern: '[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+',
                    patternInvalidErrorMessage:
                      'Please provide a valid email address',
                    defaultValue: '',
                    DefaultValue: '',
                    showLabel: 'True',
                    ShowLabel: 'True',
                  },
                  type: FieldType.TEXT,
                },
                {
                  caption: 'Long answer',
                  helpText: 'Longer answer help text',
                  alias: 'longAnswer',
                  required: true,
                  requiredErrorMessage:
                    'Please provide a value for Long answer',
                  settings: {
                    defaultValue: '',
                    DefaultValue: '',
                    showLabel: 'True',
                    ShowLabel: 'True',
                  },
                  type: FieldType.TEXT,
                },
                {
                  caption: 'Date',
                  helpText: 'Date help text',
                  alias: 'date',
                  required: true,
                  requiredErrorMessage: 'Please select a date',
                  settings: {
                    defaultValue: '',
                    DefaultValue: '',
                    showLabel: 'True',
                    ShowLabel: 'True',
                  },
                  type: FieldType.DATE,
                },
                {
                  caption: 'Checkbox',
                  helpText: 'Checkbox help text',
                  alias: 'checkbox',
                  required: true,
                  requiredErrorMessage: 'Please provide a value for Checkbox',
                  settings: {
                    defaultValue: '',
                    DefaultValue: '',
                    showLabel: 'True',
                    ShowLabel: 'True',
                  },
                  type: FieldType.CHECKBOX,
                },
                {
                  caption: 'Password',
                  helpText: 'Password help text',
                  alias: 'password',
                  required: true,
                  requiredErrorMessage: 'Please provide a value for Password',
                  settings: {
                    defaultValue: '',
                    DefaultValue: '',
                    showLabel: 'True',
                    ShowLabel: 'True',
                  },
                  type: FieldType.PASSWORD,
                },
                {
                  caption: 'Multiple choice',
                  helpText: 'Multiple choice help text',
                  alias: 'multipleChoice',
                  required: true,
                  requiredErrorMessage:
                    'Please provide a value for Multiple choice',
                  settings: {
                    defaultValue: '',
                    DefaultValue: '',
                    showLabel: 'True',
                    ShowLabel: 'True',
                  },
                  preValues: ['One', 'Two', 'Three'],
                  type: FieldType.CHECKBOX_LIST,
                },
                {
                  caption: 'Dropdown',
                  helpText: 'Dropdown help text',
                  alias: 'dropdown',
                  required: true,
                  requiredErrorMessage: 'Please provide a value for Dropdown',
                  settings: {
                    defaultValue: '',
                    DefaultValue: '',
                    showLabel: 'True',
                    ShowLabel: 'True',
                  },
                  preValues: ['One', 'Two', 'Three'],
                  type: FieldType.SELECT,
                },
                {
                  caption: 'Single choice',
                  helpText: 'Single choice help text',
                  alias: 'singleChoice',
                  required: true,
                  requiredErrorMessage:
                    'Please provide a value for Single choice',
                  settings: {
                    defaultValue: '',
                    DefaultValue: '',
                    showLabel: 'True',
                    ShowLabel: 'True',
                  },
                  preValues: ['One', 'Two', 'Three'],
                  type: FieldType.RADIO,
                },
                {
                  caption: 'Title and description',
                  helpText: 'Title and description help text',
                  alias: 'titleAndDescription',
                  required: false,
                  requiredErrorMessage:
                    'Please provide a value for Title and description',
                  condition: {
                    actionType: FormConditionActionType.HIDE,
                    logicType: FormConditionLogicType.ANY,
                    rules: [
                      {
                        field: 'singleChoice',
                        operator: FormConditionRuleOperatorType.IS,
                        value: 'One',
                      },
                      {
                        field: 'dropdown',
                        operator: FormConditionRuleOperatorType.IS_NOT,
                        value: 'Two',
                      },
                      {
                        field: 'multipleChoice',
                        operator: FormConditionRuleOperatorType.CONTAINS,
                        value: 'Three',
                      },
                    ],
                  },
                  settings: {
                    defaultValue: '',
                    DefaultValue: '',
                    caption: 'Title text',
                    bodyText: 'Description text',
                    showLabel: 'True',
                    ShowLabel: 'True',
                  },
                  type: FieldType.TITLE_AND_DESCRIPTION,
                },
                {
                  caption: 'Postcode Lookup Manual',
                  alias: 'postcodeLookupManual',
                  helpText: 'Postcode help text',
                  required: true,
                  requiredErrorMessage: 'Please provide a valid address',
                  settings: {
                    defaultValue: FormCustomFields.POSTCODE_LOOKUP_MANUAL,
                    DefaultValue: FormCustomFields.POSTCODE_LOOKUP_MANUAL,
                    showLabel: 'True',
                    ShowLabel: 'True',
                  },
                  type: FieldType.HIDDEN,
                },
                {
                  caption: 'Upload your file',
                  alias: 'uploadYourFile',
                  helpText: 'Drop files here or click to upload',
                  required: true,
                  requiredErrorMessage: 'Please upload the required files',
                  settings: {
                    defaultValue: FormCustomFields.FILE_UPLOAD_MULTIPLE,
                    DefaultValue: FormCustomFields.FILE_UPLOAD_MULTIPLE,
                    showLabel: 'True',
                    ShowLabel: 'True',
                  },
                  type: FieldType.HIDDEN,
                },
                {
                  caption: 'Pick an Appointment',
                  alias: 'pickAnAppointment',
                  helpText: 'Pick an appointment for our visit',
                  required: true,
                  requiredErrorMessage: 'Please pick an appointment',
                  settings: {
                    defaultValue: FormCustomFields.APPOINTMENT_PICKER,
                    DefaultValue: FormCustomFields.APPOINTMENT_PICKER,
                    showLabel: 'True',
                    ShowLabel: 'True',
                  },
                  type: FieldType.HIDDEN,
                },
              ],
            },
          ],
        },
      ],
    },
  ],
  _links: {
    self: {
      href: 'https://api.umbraco.io/forms/ff8fdc04-3dca-4fbb-98c0-2ca039a5a2ab',
    },
  },
}
