import { Incident, Marker, PowerCutType } from '_types/local/incidents'
import { StepName } from '_types/local/step'

export const mockPlannedIncident: Incident = {
  incidentReference: 'INCD-57858-C',
  panelContentUrl: '/power-cut/map/planned-work?incidentId=INCD-57858-C',
  steps: [
    {
      active: true,
      date: '2022-04-06T19:07:42.463',
      message:
        "Update at 19:07 - Thanks for your patience this evening.\n\nOur staff are checking our equipment throughout the area to pinpoint the reports of an overhead cable laying on the ground. In addition to this, they are liaising closely with our control room to find safe and reliable ways to divert power around any problems and get everyone restored.\n\nWe know that our customers may be worried about the food in the fridge and freezer, so we want to try and help with advice. Food should keep for up to 6 hours in the fridge, and between 15-24 hours in the freezer if you avoid opening them. We'll keep you updated on our engineers progress.",
      name: StepName.POWER_CUT_REPORTED,
    },
    {
      active: false,
      date: '2022-04-06T18:10:17',
      message:
        '<p>We became aware of this power cut at 18:10. We’re sorry for any disruption this may have caused you. We didn’t know in advance there would be a power cut, but now that we know, our teams will do everything they can to get your power back quickly. Engineers in our control room have switched some customers power back on in your area. To get everyone’s power back on we may need to attend to investigate and make repairs. We’ll continue to update you until everyone’s power is back on.</p>',
      name: StepName.ENGINEERS_ON_THEIR_WAY,
    },
    {
      active: false,
      date: '2022-04-06T18:14:07',
      message:
        '<p>We have engineers on their way. As this is affecting your area, they will not need to attend your property. Rest assured once they arrive, they&rsquo;ll work as quickly as is safely possible to get your power back on.</p>',
      name: StepName.ENGINEERS_INVESTIGATING_AND_FIXING,
    },
    {
      active: true,
      date: '2022-04-06T18:49:43',
      message:
        '<p>Engineers are now on site, carrying out investigations into the fault. Once they have completed their assessment, they will carry out repairs.</p>',
      name: StepName.POWER_RESTORED,
    },
    {
      active: false,
      date: null,
      message: null,
      name: null,
    },
  ],
  powerCutType: PowerCutType.PLANNED_INCIDENT,
  ukpnIncident: {
    incidentId: 'C0000e202INCD',
    incidentReference: 'INCD-57858-C',
    incidentCategory: '28',
    incidentType: 2,
    incidentPriority: 12,
    statusId: 5,
    creationDateTime: '2022-02-11T10:45:00',
    restoredDateTime: '2022-03-11T13:31:30.91',
    estimatedRestorationDate: '2022-03-11T15:00:00',
    plannedDate: '2022-03-11T09:00:00',
    receivedDate: '2022-03-11T09:05:00',
    noCustomerAffected: 0,
    noPlannedCustomers: 4,
    noCallsReported: 0,
    latitude: 0,
    longitude: 0,
    resource: {
      id: null,
      name: null,
      estimatedTimeOfArrival: '0001-01-01T00:00:00',
      dispatchedDate: null,
      arrivalDate: null,
      statusId: 0,
    },
    affectedCustomers: [],
    logs: [],
    postCodesAffected: ['CB8 7'],
    postCodesRestored: ['CB87QL'],
    postCodesPlanned: ['CB87QL'],
    customersOnSupply: 4,
    customersOffSupply: 0,
    timestamp: '2022:03:11:15:00:44:26',
    incidentTypeName: 'Planned',
    plannedIncidentReason:
      "We're carrying out planned work in your area. For our engineers to carry it out safely they need to turn the power off. We're doing this work as it's essential to provide reliable electricity supplies to your area. We're sorry for any inconvenience caused and thank you for your patience.",
    scope: null,
  },
  postcodesRemaining: ['CB8 7'],
  postcodeData: [
    {
      center: {
        lat: 52.27333,
        lng: 0.42884,
      },
      coordinates: [
        {
          lat: 52.29951,
          lng: 0.46753,
        },
        {
          lat: 52.29912,
          lng: 0.4685,
        },
        {
          lat: 52.29171,
          lng: 0.47727,
        },
        {
          lat: 52.29082,
          lng: 0.48111,
        },
        {
          lat: 52.29156,
          lng: 0.48475,
        },
        {
          lat: 52.29319,
          lng: 0.48742,
        },
        {
          lat: 52.29363,
          lng: 0.48785,
        },
        {
          lat: 52.29616,
          lng: 0.48832,
        },
        {
          lat: 52.29656,
          lng: 0.48867,
        },
        {
          lat: 52.29789,
          lng: 0.49308,
        },
        {
          lat: 52.29819,
          lng: 0.49512,
        },
        {
          lat: 52.29689,
          lng: 0.50023,
        },
        {
          lat: 52.2948,
          lng: 0.50127,
        },
        {
          lat: 52.29387,
          lng: 0.50291,
        },
        {
          lat: 52.29261,
          lng: 0.50638,
        },
        {
          lat: 52.28899,
          lng: 0.50547,
        },
        {
          lat: 52.28081,
          lng: 0.5156,
        },
        {
          lat: 52.28405,
          lng: 0.53066,
        },
        {
          lat: 52.26906,
          lng: 0.53999,
        },
        {
          lat: 52.26712,
          lng: 0.53825,
        },
        {
          lat: 52.26867,
          lng: 0.51898,
        },
        {
          lat: 52.26567,
          lng: 0.50969,
        },
        {
          lat: 52.2652,
          lng: 0.50891,
        },
        {
          lat: 52.26322,
          lng: 0.50643,
        },
        {
          lat: 52.26281,
          lng: 0.50508,
        },
        {
          lat: 52.26522,
          lng: 0.5021,
        },
        {
          lat: 52.26908,
          lng: 0.50002,
        },
        {
          lat: 52.27031,
          lng: 0.49856,
        },
        {
          lat: 52.27111,
          lng: 0.49697,
        },
        {
          lat: 52.2721,
          lng: 0.4961,
        },
        {
          lat: 52.27212,
          lng: 0.49608,
        },
        {
          lat: 52.27139,
          lng: 0.49358,
        },
        {
          lat: 52.27065,
          lng: 0.49341,
        },
        {
          lat: 52.27055,
          lng: 0.49307,
        },
        {
          lat: 52.27002,
          lng: 0.49235,
        },
        {
          lat: 52.26984,
          lng: 0.49125,
        },
        {
          lat: 52.27,
          lng: 0.49067,
        },
        {
          lat: 52.27181,
          lng: 0.49077,
        },
        {
          lat: 52.2726,
          lng: 0.49053,
        },
        {
          lat: 52.27481,
          lng: 0.48386,
        },
        {
          lat: 52.26941,
          lng: 0.48691,
        },
        {
          lat: 52.26562,
          lng: 0.48533,
        },
        {
          lat: 52.26555,
          lng: 0.48542,
        },
        {
          lat: 52.26188,
          lng: 0.48736,
        },
        {
          lat: 52.26057,
          lng: 0.48146,
        },
        {
          lat: 52.25922,
          lng: 0.46512,
        },
        {
          lat: 52.26258,
          lng: 0.46175,
        },
        {
          lat: 52.2541,
          lng: 0.44145,
        },
        {
          lat: 52.25559,
          lng: 0.43722,
        },
        {
          lat: 52.25482,
          lng: 0.4336,
        },
        {
          lat: 52.25377,
          lng: 0.43117,
        },
        {
          lat: 52.25224,
          lng: 0.428,
        },
        {
          lat: 52.24818,
          lng: 0.42576,
        },
        {
          lat: 52.24724,
          lng: 0.42555,
        },
        {
          lat: 52.24676,
          lng: 0.42085,
        },
        {
          lat: 52.24687,
          lng: 0.41961,
        },
        {
          lat: 52.24759,
          lng: 0.41699,
        },
        {
          lat: 52.24727,
          lng: 0.41432,
        },
        {
          lat: 52.24732,
          lng: 0.41358,
        },
        {
          lat: 52.24756,
          lng: 0.41206,
        },
        {
          lat: 52.24731,
          lng: 0.41039,
        },
        {
          lat: 52.24557,
          lng: 0.41051,
        },
        {
          lat: 52.2455,
          lng: 0.40928,
        },
        {
          lat: 52.24579,
          lng: 0.40907,
        },
        {
          lat: 52.2467,
          lng: 0.4094,
        },
        {
          lat: 52.24731,
          lng: 0.41033,
        },
        {
          lat: 52.24811,
          lng: 0.40835,
        },
        {
          lat: 52.24785,
          lng: 0.40751,
        },
        {
          lat: 52.24691,
          lng: 0.40666,
        },
        {
          lat: 52.24694,
          lng: 0.40637,
        },
        {
          lat: 52.24727,
          lng: 0.40547,
        },
        {
          lat: 52.24789,
          lng: 0.40532,
        },
        {
          lat: 52.24826,
          lng: 0.4058,
        },
        {
          lat: 52.24827,
          lng: 0.4058,
        },
        {
          lat: 52.24891,
          lng: 0.40576,
        },
        {
          lat: 52.24933,
          lng: 0.4063,
        },
        {
          lat: 52.25025,
          lng: 0.40573,
        },
        {
          lat: 52.2505,
          lng: 0.40576,
        },
        {
          lat: 52.25131,
          lng: 0.40628,
        },
        {
          lat: 52.25115,
          lng: 0.40953,
        },
        {
          lat: 52.25281,
          lng: 0.40832,
        },
        {
          lat: 52.2531,
          lng: 0.40621,
        },
        {
          lat: 52.25207,
          lng: 0.40512,
        },
        {
          lat: 52.25272,
          lng: 0.40398,
        },
        {
          lat: 52.25302,
          lng: 0.40364,
        },
        {
          lat: 52.2533,
          lng: 0.40343,
        },
        {
          lat: 52.25336,
          lng: 0.40249,
        },
        {
          lat: 52.25394,
          lng: 0.40104,
        },
        {
          lat: 52.25455,
          lng: 0.40097,
        },
        {
          lat: 52.25462,
          lng: 0.40101,
        },
        {
          lat: 52.25513,
          lng: 0.40013,
        },
        {
          lat: 52.25608,
          lng: 0.39968,
        },
        {
          lat: 52.25665,
          lng: 0.39962,
        },
        {
          lat: 52.2574,
          lng: 0.39917,
        },
        {
          lat: 52.25794,
          lng: 0.39916,
        },
        {
          lat: 52.25811,
          lng: 0.39874,
        },
        {
          lat: 52.25767,
          lng: 0.39713,
        },
        {
          lat: 52.25773,
          lng: 0.39387,
        },
        {
          lat: 52.25822,
          lng: 0.39347,
        },
        {
          lat: 52.25865,
          lng: 0.39212,
        },
        {
          lat: 52.25907,
          lng: 0.39187,
        },
        {
          lat: 52.2593,
          lng: 0.39111,
        },
        {
          lat: 52.25805,
          lng: 0.38929,
        },
        {
          lat: 52.25834,
          lng: 0.38874,
        },
        {
          lat: 52.25837,
          lng: 0.38761,
        },
        {
          lat: 52.25744,
          lng: 0.38647,
        },
        {
          lat: 52.25651,
          lng: 0.38182,
        },
        {
          lat: 52.2548,
          lng: 0.385,
        },
        {
          lat: 52.25337,
          lng: 0.38521,
        },
        {
          lat: 52.25114,
          lng: 0.38198,
        },
        {
          lat: 52.25278,
          lng: 0.37256,
        },
        {
          lat: 52.25443,
          lng: 0.37166,
        },
        {
          lat: 52.25526,
          lng: 0.35452,
        },
        {
          lat: 52.2595,
          lng: 0.35042,
        },
        {
          lat: 52.26055,
          lng: 0.34797,
        },
        {
          lat: 52.26086,
          lng: 0.34085,
        },
        {
          lat: 52.26466,
          lng: 0.33945,
        },
        {
          lat: 52.27598,
          lng: 0.34262,
        },
        {
          lat: 52.27771,
          lng: 0.34521,
        },
        {
          lat: 52.27953,
          lng: 0.35061,
        },
        {
          lat: 52.2812,
          lng: 0.35166,
        },
        {
          lat: 52.28188,
          lng: 0.3537,
        },
        {
          lat: 52.29492,
          lng: 0.36343,
        },
        {
          lat: 52.29452,
          lng: 0.37304,
        },
        {
          lat: 52.29685,
          lng: 0.37875,
        },
        {
          lat: 52.29678,
          lng: 0.38103,
        },
        {
          lat: 52.28973,
          lng: 0.39126,
        },
        {
          lat: 52.29258,
          lng: 0.40013,
        },
        {
          lat: 52.29578,
          lng: 0.40808,
        },
        {
          lat: 52.29088,
          lng: 0.4111,
        },
        {
          lat: 52.28679,
          lng: 0.41828,
        },
        {
          lat: 52.28457,
          lng: 0.42357,
        },
        {
          lat: 52.27836,
          lng: 0.42718,
        },
        {
          lat: 52.2765,
          lng: 0.42838,
        },
        {
          lat: 52.27393,
          lng: 0.43136,
        },
        {
          lat: 52.27305,
          lng: 0.43308,
        },
        {
          lat: 52.27287,
          lng: 0.43449,
        },
        {
          lat: 52.2735,
          lng: 0.44083,
        },
        {
          lat: 52.28115,
          lng: 0.44755,
        },
        {
          lat: 52.28211,
          lng: 0.46802,
        },
        {
          lat: 52.28605,
          lng: 0.46716,
        },
        {
          lat: 52.28972,
          lng: 0.45847,
        },
        {
          lat: 52.29951,
          lng: 0.46753,
        },
      ],
      postcode: 'CB8 7',
      incidentReference: '',
      panelContentUrl: '',
    } as Marker,
  ],
  fullPostcodeData: ['CB87QL'],
  pinLatitude: null,
  pinLongitude: null,
  incidentCategoryCustomerFriendlyDescription:
    "We're carrying out planned work in your area. For our engineers to carry it out safely they need to turn the power off. We're doing this work as it's essential to provide reliable electricity supplies to your area. We're sorry for any inconvenience caused and thank you for your patience.",
  incidentTypeTBCEstimatedFriendlyDescription: '11 Mar 14:30 - 15:30',
  serviceDown: false,
  serviceDownUrl: null,
  scope: null,
  postcode: 'CB8 7',
  coordinates: {
    'CB8 7': [
      {
        lat: 52.29951,
        lng: 0.46753,
      },
      {
        lat: 52.29912,
        lng: 0.4685,
      },
      {
        lat: 52.29171,
        lng: 0.47727,
      },
      {
        lat: 52.29082,
        lng: 0.48111,
      },
      {
        lat: 52.29156,
        lng: 0.48475,
      },
      {
        lat: 52.29319,
        lng: 0.48742,
      },
      {
        lat: 52.29363,
        lng: 0.48785,
      },
      {
        lat: 52.29616,
        lng: 0.48832,
      },
      {
        lat: 52.29656,
        lng: 0.48867,
      },
      {
        lat: 52.29789,
        lng: 0.49308,
      },
      {
        lat: 52.29819,
        lng: 0.49512,
      },
      {
        lat: 52.29689,
        lng: 0.50023,
      },
      {
        lat: 52.2948,
        lng: 0.50127,
      },
      {
        lat: 52.29387,
        lng: 0.50291,
      },
      {
        lat: 52.29261,
        lng: 0.50638,
      },
      {
        lat: 52.28899,
        lng: 0.50547,
      },
      {
        lat: 52.28081,
        lng: 0.5156,
      },
      {
        lat: 52.28405,
        lng: 0.53066,
      },
      {
        lat: 52.26906,
        lng: 0.53999,
      },
      {
        lat: 52.26712,
        lng: 0.53825,
      },
      {
        lat: 52.26867,
        lng: 0.51898,
      },
      {
        lat: 52.26567,
        lng: 0.50969,
      },
      {
        lat: 52.2652,
        lng: 0.50891,
      },
      {
        lat: 52.26322,
        lng: 0.50643,
      },
      {
        lat: 52.26281,
        lng: 0.50508,
      },
      {
        lat: 52.26522,
        lng: 0.5021,
      },
      {
        lat: 52.26908,
        lng: 0.50002,
      },
      {
        lat: 52.27031,
        lng: 0.49856,
      },
      {
        lat: 52.27111,
        lng: 0.49697,
      },
      {
        lat: 52.2721,
        lng: 0.4961,
      },
      {
        lat: 52.27212,
        lng: 0.49608,
      },
      {
        lat: 52.27139,
        lng: 0.49358,
      },
      {
        lat: 52.27065,
        lng: 0.49341,
      },
      {
        lat: 52.27055,
        lng: 0.49307,
      },
      {
        lat: 52.27002,
        lng: 0.49235,
      },
      {
        lat: 52.26984,
        lng: 0.49125,
      },
      {
        lat: 52.27,
        lng: 0.49067,
      },
      {
        lat: 52.27181,
        lng: 0.49077,
      },
      {
        lat: 52.2726,
        lng: 0.49053,
      },
      {
        lat: 52.27481,
        lng: 0.48386,
      },
      {
        lat: 52.26941,
        lng: 0.48691,
      },
      {
        lat: 52.26562,
        lng: 0.48533,
      },
      {
        lat: 52.26555,
        lng: 0.48542,
      },
      {
        lat: 52.26188,
        lng: 0.48736,
      },
      {
        lat: 52.26057,
        lng: 0.48146,
      },
      {
        lat: 52.25922,
        lng: 0.46512,
      },
      {
        lat: 52.26258,
        lng: 0.46175,
      },
      {
        lat: 52.2541,
        lng: 0.44145,
      },
      {
        lat: 52.25559,
        lng: 0.43722,
      },
      {
        lat: 52.25482,
        lng: 0.4336,
      },
      {
        lat: 52.25377,
        lng: 0.43117,
      },
      {
        lat: 52.25224,
        lng: 0.428,
      },
      {
        lat: 52.24818,
        lng: 0.42576,
      },
      {
        lat: 52.24724,
        lng: 0.42555,
      },
      {
        lat: 52.24676,
        lng: 0.42085,
      },
      {
        lat: 52.24687,
        lng: 0.41961,
      },
      {
        lat: 52.24759,
        lng: 0.41699,
      },
      {
        lat: 52.24727,
        lng: 0.41432,
      },
      {
        lat: 52.24732,
        lng: 0.41358,
      },
      {
        lat: 52.24756,
        lng: 0.41206,
      },
      {
        lat: 52.24731,
        lng: 0.41039,
      },
      {
        lat: 52.24557,
        lng: 0.41051,
      },
      {
        lat: 52.2455,
        lng: 0.40928,
      },
      {
        lat: 52.24579,
        lng: 0.40907,
      },
      {
        lat: 52.2467,
        lng: 0.4094,
      },
      {
        lat: 52.24731,
        lng: 0.41033,
      },
      {
        lat: 52.24811,
        lng: 0.40835,
      },
      {
        lat: 52.24785,
        lng: 0.40751,
      },
      {
        lat: 52.24691,
        lng: 0.40666,
      },
      {
        lat: 52.24694,
        lng: 0.40637,
      },
      {
        lat: 52.24727,
        lng: 0.40547,
      },
      {
        lat: 52.24789,
        lng: 0.40532,
      },
      {
        lat: 52.24826,
        lng: 0.4058,
      },
      {
        lat: 52.24827,
        lng: 0.4058,
      },
      {
        lat: 52.24891,
        lng: 0.40576,
      },
      {
        lat: 52.24933,
        lng: 0.4063,
      },
      {
        lat: 52.25025,
        lng: 0.40573,
      },
      {
        lat: 52.2505,
        lng: 0.40576,
      },
      {
        lat: 52.25131,
        lng: 0.40628,
      },
      {
        lat: 52.25115,
        lng: 0.40953,
      },
      {
        lat: 52.25281,
        lng: 0.40832,
      },
      {
        lat: 52.2531,
        lng: 0.40621,
      },
      {
        lat: 52.25207,
        lng: 0.40512,
      },
      {
        lat: 52.25272,
        lng: 0.40398,
      },
      {
        lat: 52.25302,
        lng: 0.40364,
      },
      {
        lat: 52.2533,
        lng: 0.40343,
      },
      {
        lat: 52.25336,
        lng: 0.40249,
      },
      {
        lat: 52.25394,
        lng: 0.40104,
      },
      {
        lat: 52.25455,
        lng: 0.40097,
      },
      {
        lat: 52.25462,
        lng: 0.40101,
      },
      {
        lat: 52.25513,
        lng: 0.40013,
      },
      {
        lat: 52.25608,
        lng: 0.39968,
      },
      {
        lat: 52.25665,
        lng: 0.39962,
      },
      {
        lat: 52.2574,
        lng: 0.39917,
      },
      {
        lat: 52.25794,
        lng: 0.39916,
      },
      {
        lat: 52.25811,
        lng: 0.39874,
      },
      {
        lat: 52.25767,
        lng: 0.39713,
      },
      {
        lat: 52.25773,
        lng: 0.39387,
      },
      {
        lat: 52.25822,
        lng: 0.39347,
      },
      {
        lat: 52.25865,
        lng: 0.39212,
      },
      {
        lat: 52.25907,
        lng: 0.39187,
      },
      {
        lat: 52.2593,
        lng: 0.39111,
      },
      {
        lat: 52.25805,
        lng: 0.38929,
      },
      {
        lat: 52.25834,
        lng: 0.38874,
      },
      {
        lat: 52.25837,
        lng: 0.38761,
      },
      {
        lat: 52.25744,
        lng: 0.38647,
      },
      {
        lat: 52.25651,
        lng: 0.38182,
      },
      {
        lat: 52.2548,
        lng: 0.385,
      },
      {
        lat: 52.25337,
        lng: 0.38521,
      },
      {
        lat: 52.25114,
        lng: 0.38198,
      },
      {
        lat: 52.25278,
        lng: 0.37256,
      },
      {
        lat: 52.25443,
        lng: 0.37166,
      },
      {
        lat: 52.25526,
        lng: 0.35452,
      },
      {
        lat: 52.2595,
        lng: 0.35042,
      },
      {
        lat: 52.26055,
        lng: 0.34797,
      },
      {
        lat: 52.26086,
        lng: 0.34085,
      },
      {
        lat: 52.26466,
        lng: 0.33945,
      },
      {
        lat: 52.27598,
        lng: 0.34262,
      },
      {
        lat: 52.27771,
        lng: 0.34521,
      },
      {
        lat: 52.27953,
        lng: 0.35061,
      },
      {
        lat: 52.2812,
        lng: 0.35166,
      },
      {
        lat: 52.28188,
        lng: 0.3537,
      },
      {
        lat: 52.29492,
        lng: 0.36343,
      },
      {
        lat: 52.29452,
        lng: 0.37304,
      },
      {
        lat: 52.29685,
        lng: 0.37875,
      },
      {
        lat: 52.29678,
        lng: 0.38103,
      },
      {
        lat: 52.28973,
        lng: 0.39126,
      },
      {
        lat: 52.29258,
        lng: 0.40013,
      },
      {
        lat: 52.29578,
        lng: 0.40808,
      },
      {
        lat: 52.29088,
        lng: 0.4111,
      },
      {
        lat: 52.28679,
        lng: 0.41828,
      },
      {
        lat: 52.28457,
        lng: 0.42357,
      },
      {
        lat: 52.27836,
        lng: 0.42718,
      },
      {
        lat: 52.2765,
        lng: 0.42838,
      },
      {
        lat: 52.27393,
        lng: 0.43136,
      },
      {
        lat: 52.27305,
        lng: 0.43308,
      },
      {
        lat: 52.27287,
        lng: 0.43449,
      },
      {
        lat: 52.2735,
        lng: 0.44083,
      },
      {
        lat: 52.28115,
        lng: 0.44755,
      },
      {
        lat: 52.28211,
        lng: 0.46802,
      },
      {
        lat: 52.28605,
        lng: 0.46716,
      },
      {
        lat: 52.28972,
        lng: 0.45847,
      },
      {
        lat: 52.29951,
        lng: 0.46753,
      },
    ],
  },
}
