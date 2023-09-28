import { Incident, Marker, PowerCutType } from '_types/local/incidents'
import { StepName } from '_types/local/step'

export const mockUnplannedIncident: Incident = {
  incidentReference: 'INCD-298285-Z',
  panelContentUrl: '/power-cut/map/unplanned?incidentId=INCD-298285-Z',
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
  powerCutType: PowerCutType.UNPLANNED_INCIDENT,
  ukpnIncident: {
    incidentId: 'Z00048d2dINCD',
    incidentReference: 'INCD-298285-Z',
    incidentCategory: '140',
    incidentType: 3,
    incidentPriority: 2,
    statusId: 1,
    creationDateTime: '2022-04-06T18:10:26',
    restoredDateTime: null,
    estimatedRestorationDate: '2022-04-06T23:30:00',
    plannedDate: null,
    receivedDate: '2022-04-06T18:10:17',
    noCustomerAffected: 37,
    noPlannedCustomers: 0,
    noCallsReported: 16,
    latitude: 0,
    longitude: 0,
    resource: {
      id: null,
      name: 'PAUL',
      estimatedTimeOfArrival: '2022-04-06T19:00:00',
      dispatchedDate: '2022-04-06T18:14:07',
      arrivalDate: '2022-04-06T18:49:43',
      statusId: 6,
    },
    affectedCustomers: [],
    logs: [
      {
        actualEventTime: '2022-04-06T19:07:00',
        categoryId: 263,
        typeId: 0,
        comment:
          "Update at 19:07 - Thanks for your patience this evening.\n\nOur staff are checking our equipment throughout the area to pinpoint the reports of an overhead cable laying on the ground. In addition to this, they are liaising closely with our control room to find safe and reliable ways to divert power around any problems and get everyone restored.\n\nWe know that our customers may be worried about the food in the fridge and freezer, so we want to try and help with advice. Food should keep for up to 6 hours in the fridge, and between 15-24 hours in the freezer if you avoid opening them. We'll keep you updated on our engineers progress.",
        loggedTime: '2022-04-06T19:07:42.463',
      },
    ],
    postCodesAffected: ['HP16 9', 'HP27 0', 'HP27 9'],
    postCodesRestored: [
      'HP270AX',
      'HP270DR',
      'HP270EN',
      'HP270EP',
      'HP270EU',
      'HP270EX',
      'HP270EY',
      'HP270HT',
      'HP270PG',
      'HP270RW',
      'HP279AW',
      'HP279DX',
      'HP279EG',
      'HP279EH',
      'HP279EJ',
      'HP279HB',
      'HP279NG',
      'HP279NQ',
      'HP279QT',
      'HP169PT',
      'HP270BN',
      'HP270BP',
      'HP270BS',
      'HP270BT',
      'HP270BW',
      'HP270HU',
      'HP270HX',
      'HP270HY',
      'HP270HZ',
      'HP270JA',
      'HP270JB',
      'HP270JD',
      'HP270JE',
      'HP270JF',
      'HP270LA',
      'HP270LB',
      'HP270LE',
      'HP270NL',
      'HP270NN',
      'HP270NP',
      'HP270NR',
      'HP270NS',
      'HP270NW',
      'HP270PA',
      'HP270PF',
      'HP270RH',
      'HP270RJ',
      'HP270RL',
      'HP270RN',
      'HP270RP',
      'HP270RS',
    ],
    postCodesPlanned: [
      'HP270AX',
      'HP270DR',
      'HP270EN',
      'HP270EP',
      'HP270EU',
      'HP270EX',
      'HP270EY',
      'HP270HT',
      'HP270PG',
      'HP270RW',
      'HP279AW',
      'HP279DX',
      'HP279EG',
      'HP279EH',
      'HP279EJ',
      'HP279HB',
      'HP279NG',
      'HP279NQ',
      'HP279QT',
      'HP169PT',
      'HP270BN',
      'HP270BP',
      'HP270BS',
      'HP270BT',
      'HP270BW',
      'HP270HU',
      'HP270HX',
      'HP270HY',
      'HP270HZ',
      'HP270JA',
      'HP270JB',
      'HP270JD',
      'HP270JE',
      'HP270JF',
      'HP270LA',
      'HP270LB',
      'HP270LE',
      'HP270NL',
      'HP270NN',
      'HP270NP',
      'HP270NR',
      'HP270NS',
      'HP270NW',
      'HP270PA',
      'HP270PF',
      'HP270RH',
      'HP270RJ',
      'HP270RL',
      'HP270RN',
      'HP270RP',
      'HP270RS',
    ],
    customersOnSupply: 525,
    customersOffSupply: 37,
    timestamp: '2022:04:06:19:34:20:76',
    incidentTypeName: 'Unplanned',
    plannedIncidentReason: '',
    scope: null,
  },
  postcodesRemaining: ['HP16 9', 'HP27 0', 'HP27 9'],
  postcodeData: [
    {
      center: {
        lat: 51.70832,
        lng: -0.80694,
      },
      coordinates: [
        {
          lat: 51.72781,
          lng: -0.78982,
        },
        {
          lat: 51.72075,
          lng: -0.78673,
        },
        {
          lat: 51.72027,
          lng: -0.78584,
        },
        {
          lat: 51.71332,
          lng: -0.78357,
        },
        {
          lat: 51.70936,
          lng: -0.78678,
        },
        {
          lat: 51.7032,
          lng: -0.78615,
        },
        {
          lat: 51.70299,
          lng: -0.78224,
        },
        {
          lat: 51.7008,
          lng: -0.77555,
        },
        {
          lat: 51.69909,
          lng: -0.77424,
        },
        {
          lat: 51.69867,
          lng: -0.77276,
        },
        {
          lat: 51.69263,
          lng: -0.77235,
        },
        {
          lat: 51.69209,
          lng: -0.77313,
        },
        {
          lat: 51.68946,
          lng: -0.77189,
        },
        {
          lat: 51.687,
          lng: -0.77981,
        },
        {
          lat: 51.68566,
          lng: -0.78121,
        },
        {
          lat: 51.68444,
          lng: -0.78213,
        },
        {
          lat: 51.6838,
          lng: -0.78327,
        },
        {
          lat: 51.68409,
          lng: -0.78543,
        },
        {
          lat: 51.68438,
          lng: -0.78652,
        },
        {
          lat: 51.68434,
          lng: -0.78676,
        },
        {
          lat: 51.68399,
          lng: -0.79504,
        },
        {
          lat: 51.68477,
          lng: -0.80256,
        },
        {
          lat: 51.68487,
          lng: -0.80286,
        },
        {
          lat: 51.68428,
          lng: -0.80563,
        },
        {
          lat: 51.6765,
          lng: -0.81059,
        },
        {
          lat: 51.67816,
          lng: -0.81574,
        },
        {
          lat: 51.67979,
          lng: -0.81945,
        },
        {
          lat: 51.68648,
          lng: -0.81764,
        },
        {
          lat: 51.68821,
          lng: -0.82319,
        },
        {
          lat: 51.68861,
          lng: -0.82342,
        },
        {
          lat: 51.68925,
          lng: -0.82355,
        },
        {
          lat: 51.69044,
          lng: -0.82505,
        },
        {
          lat: 51.69227,
          lng: -0.82782,
        },
        {
          lat: 51.69375,
          lng: -0.82826,
        },
        {
          lat: 51.70037,
          lng: -0.83564,
        },
        {
          lat: 51.70115,
          lng: -0.83362,
        },
        {
          lat: 51.71061,
          lng: -0.83355,
        },
        {
          lat: 51.71089,
          lng: -0.83569,
        },
        {
          lat: 51.71119,
          lng: -0.83699,
        },
        {
          lat: 51.71273,
          lng: -0.83853,
        },
        {
          lat: 51.71285,
          lng: -0.83869,
        },
        {
          lat: 51.71377,
          lng: -0.8397,
        },
        {
          lat: 51.71484,
          lng: -0.83862,
        },
        {
          lat: 51.71504,
          lng: -0.83858,
        },
        {
          lat: 51.71531,
          lng: -0.83849,
        },
        {
          lat: 51.71554,
          lng: -0.83847,
        },
        {
          lat: 51.71636,
          lng: -0.83813,
        },
        {
          lat: 51.71713,
          lng: -0.83631,
        },
        {
          lat: 51.71728,
          lng: -0.83626,
        },
        {
          lat: 51.7179,
          lng: -0.8373,
        },
        {
          lat: 51.71795,
          lng: -0.8376,
        },
        {
          lat: 51.71842,
          lng: -0.83805,
        },
        {
          lat: 51.71915,
          lng: -0.83713,
        },
        {
          lat: 51.71923,
          lng: -0.8371,
        },
        {
          lat: 51.71947,
          lng: -0.83625,
        },
        {
          lat: 51.7197,
          lng: -0.83607,
        },
        {
          lat: 51.72017,
          lng: -0.83603,
        },
        {
          lat: 51.72057,
          lng: -0.83773,
        },
        {
          lat: 51.72075,
          lng: -0.83795,
        },
        {
          lat: 51.72171,
          lng: -0.83687,
        },
        {
          lat: 51.72197,
          lng: -0.83696,
        },
        {
          lat: 51.72256,
          lng: -0.83528,
        },
        {
          lat: 51.72279,
          lng: -0.83506,
        },
        {
          lat: 51.72287,
          lng: -0.83512,
        },
        {
          lat: 51.72386,
          lng: -0.83435,
        },
        {
          lat: 51.72356,
          lng: -0.83351,
        },
        {
          lat: 51.72372,
          lng: -0.83327,
        },
        {
          lat: 51.72369,
          lng: -0.83215,
        },
        {
          lat: 51.72379,
          lng: -0.8321,
        },
        {
          lat: 51.72421,
          lng: -0.83283,
        },
        {
          lat: 51.72422,
          lng: -0.83282,
        },
        {
          lat: 51.72427,
          lng: -0.83278,
        },
        {
          lat: 51.72459,
          lng: -0.83295,
        },
        {
          lat: 51.72477,
          lng: -0.83274,
        },
        {
          lat: 51.72576,
          lng: -0.83358,
        },
        {
          lat: 51.726,
          lng: -0.83242,
        },
        {
          lat: 51.72601,
          lng: -0.83189,
        },
        {
          lat: 51.72628,
          lng: -0.83106,
        },
        {
          lat: 51.72636,
          lng: -0.83094,
        },
        {
          lat: 51.72702,
          lng: -0.83098,
        },
        {
          lat: 51.72741,
          lng: -0.83042,
        },
        {
          lat: 51.72826,
          lng: -0.8301,
        },
        {
          lat: 51.72835,
          lng: -0.82946,
        },
        {
          lat: 51.72783,
          lng: -0.82815,
        },
        {
          lat: 51.72815,
          lng: -0.82717,
        },
        {
          lat: 51.72836,
          lng: -0.82696,
        },
        {
          lat: 51.72838,
          lng: -0.82695,
        },
        {
          lat: 51.72879,
          lng: -0.82606,
        },
        {
          lat: 51.72932,
          lng: -0.82623,
        },
        {
          lat: 51.73027,
          lng: -0.82514,
        },
        {
          lat: 51.73057,
          lng: -0.82572,
        },
        {
          lat: 51.73185,
          lng: -0.82524,
        },
        {
          lat: 51.73151,
          lng: -0.82449,
        },
        {
          lat: 51.73082,
          lng: -0.82141,
        },
        {
          lat: 51.73096,
          lng: -0.82131,
        },
        {
          lat: 51.73174,
          lng: -0.82013,
        },
        {
          lat: 51.73201,
          lng: -0.81935,
        },
        {
          lat: 51.73541,
          lng: -0.81859,
        },
        {
          lat: 51.73542,
          lng: -0.81796,
        },
        {
          lat: 51.73651,
          lng: -0.81562,
        },
        {
          lat: 51.73782,
          lng: -0.8154,
        },
        {
          lat: 51.73888,
          lng: -0.81481,
        },
        {
          lat: 51.73884,
          lng: -0.81332,
        },
        {
          lat: 51.74046,
          lng: -0.81098,
        },
        {
          lat: 51.7378,
          lng: -0.80803,
        },
        {
          lat: 51.73942,
          lng: -0.79419,
        },
        {
          lat: 51.72973,
          lng: -0.79321,
        },
        {
          lat: 51.72781,
          lng: -0.78982,
        },
      ],
      postcode: 'HP27 0',
      powerCutType: PowerCutType.UNPLANNED_INCIDENT,
      panelContentUrl: '',
    },
    {
      center: {
        lat: 51.72522,
        lng: -0.86142,
      },
      coordinates: [
        {
          lat: 51.74046,
          lng: -0.81098,
        },
        {
          lat: 51.73884,
          lng: -0.81332,
        },
        {
          lat: 51.73888,
          lng: -0.81481,
        },
        {
          lat: 51.73782,
          lng: -0.8154,
        },
        {
          lat: 51.73651,
          lng: -0.81562,
        },
        {
          lat: 51.73542,
          lng: -0.81796,
        },
        {
          lat: 51.73541,
          lng: -0.81859,
        },
        {
          lat: 51.73201,
          lng: -0.81935,
        },
        {
          lat: 51.73174,
          lng: -0.82013,
        },
        {
          lat: 51.73096,
          lng: -0.82131,
        },
        {
          lat: 51.73082,
          lng: -0.82141,
        },
        {
          lat: 51.73151,
          lng: -0.82449,
        },
        {
          lat: 51.73185,
          lng: -0.82524,
        },
        {
          lat: 51.73057,
          lng: -0.82572,
        },
        {
          lat: 51.73027,
          lng: -0.82514,
        },
        {
          lat: 51.72932,
          lng: -0.82623,
        },
        {
          lat: 51.72879,
          lng: -0.82606,
        },
        {
          lat: 51.72838,
          lng: -0.82695,
        },
        {
          lat: 51.72836,
          lng: -0.82696,
        },
        {
          lat: 51.72815,
          lng: -0.82717,
        },
        {
          lat: 51.72783,
          lng: -0.82815,
        },
        {
          lat: 51.72835,
          lng: -0.82946,
        },
        {
          lat: 51.72826,
          lng: -0.8301,
        },
        {
          lat: 51.72741,
          lng: -0.83042,
        },
        {
          lat: 51.72702,
          lng: -0.83098,
        },
        {
          lat: 51.72636,
          lng: -0.83094,
        },
        {
          lat: 51.72628,
          lng: -0.83106,
        },
        {
          lat: 51.72601,
          lng: -0.83189,
        },
        {
          lat: 51.726,
          lng: -0.83242,
        },
        {
          lat: 51.72576,
          lng: -0.83358,
        },
        {
          lat: 51.72477,
          lng: -0.83274,
        },
        {
          lat: 51.72459,
          lng: -0.83295,
        },
        {
          lat: 51.72427,
          lng: -0.83278,
        },
        {
          lat: 51.72422,
          lng: -0.83282,
        },
        {
          lat: 51.72421,
          lng: -0.83283,
        },
        {
          lat: 51.72379,
          lng: -0.8321,
        },
        {
          lat: 51.72369,
          lng: -0.83215,
        },
        {
          lat: 51.72372,
          lng: -0.83327,
        },
        {
          lat: 51.72356,
          lng: -0.83351,
        },
        {
          lat: 51.72386,
          lng: -0.83435,
        },
        {
          lat: 51.72287,
          lng: -0.83512,
        },
        {
          lat: 51.72279,
          lng: -0.83506,
        },
        {
          lat: 51.72256,
          lng: -0.83528,
        },
        {
          lat: 51.72197,
          lng: -0.83696,
        },
        {
          lat: 51.72171,
          lng: -0.83687,
        },
        {
          lat: 51.72075,
          lng: -0.83795,
        },
        {
          lat: 51.72057,
          lng: -0.83773,
        },
        {
          lat: 51.72017,
          lng: -0.83603,
        },
        {
          lat: 51.7197,
          lng: -0.83607,
        },
        {
          lat: 51.71947,
          lng: -0.83625,
        },
        {
          lat: 51.71923,
          lng: -0.8371,
        },
        {
          lat: 51.71915,
          lng: -0.83713,
        },
        {
          lat: 51.71842,
          lng: -0.83805,
        },
        {
          lat: 51.71795,
          lng: -0.8376,
        },
        {
          lat: 51.7179,
          lng: -0.8373,
        },
        {
          lat: 51.71728,
          lng: -0.83626,
        },
        {
          lat: 51.71713,
          lng: -0.83631,
        },
        {
          lat: 51.71636,
          lng: -0.83813,
        },
        {
          lat: 51.71554,
          lng: -0.83847,
        },
        {
          lat: 51.71531,
          lng: -0.83849,
        },
        {
          lat: 51.71504,
          lng: -0.83858,
        },
        {
          lat: 51.71484,
          lng: -0.83862,
        },
        {
          lat: 51.71377,
          lng: -0.8397,
        },
        {
          lat: 51.71285,
          lng: -0.83869,
        },
        {
          lat: 51.71273,
          lng: -0.83853,
        },
        {
          lat: 51.71119,
          lng: -0.83699,
        },
        {
          lat: 51.71089,
          lng: -0.83569,
        },
        {
          lat: 51.71061,
          lng: -0.83355,
        },
        {
          lat: 51.70115,
          lng: -0.83362,
        },
        {
          lat: 51.70037,
          lng: -0.83564,
        },
        {
          lat: 51.69375,
          lng: -0.82826,
        },
        {
          lat: 51.69227,
          lng: -0.82782,
        },
        {
          lat: 51.69044,
          lng: -0.82505,
        },
        {
          lat: 51.68925,
          lng: -0.82355,
        },
        {
          lat: 51.68861,
          lng: -0.82342,
        },
        {
          lat: 51.68821,
          lng: -0.82319,
        },
        {
          lat: 51.68645,
          lng: -0.82554,
        },
        {
          lat: 51.68304,
          lng: -0.82599,
        },
        {
          lat: 51.68258,
          lng: -0.83094,
        },
        {
          lat: 51.68501,
          lng: -0.83583,
        },
        {
          lat: 51.68559,
          lng: -0.84008,
        },
        {
          lat: 51.68543,
          lng: -0.84066,
        },
        {
          lat: 51.69245,
          lng: -0.85488,
        },
        {
          lat: 51.6931,
          lng: -0.85474,
        },
        {
          lat: 51.69962,
          lng: -0.8602,
        },
        {
          lat: 51.70141,
          lng: -0.86331,
        },
        {
          lat: 51.70305,
          lng: -0.87107,
        },
        {
          lat: 51.70221,
          lng: -0.87538,
        },
        {
          lat: 51.71041,
          lng: -0.88718,
        },
        {
          lat: 51.71043,
          lng: -0.88717,
        },
        {
          lat: 51.71228,
          lng: -0.88766,
        },
        {
          lat: 51.71458,
          lng: -0.88925,
        },
        {
          lat: 51.71776,
          lng: -0.89074,
        },
        {
          lat: 51.71852,
          lng: -0.89086,
        },
        {
          lat: 51.72007,
          lng: -0.89236,
        },
        {
          lat: 51.7205,
          lng: -0.89248,
        },
        {
          lat: 51.7206,
          lng: -0.89248,
        },
        {
          lat: 51.72196,
          lng: -0.89564,
        },
        {
          lat: 51.72681,
          lng: -0.90328,
        },
        {
          lat: 51.73085,
          lng: -0.90259,
        },
        {
          lat: 51.73514,
          lng: -0.89967,
        },
        {
          lat: 51.73679,
          lng: -0.90159,
        },
        {
          lat: 51.74032,
          lng: -0.90964,
        },
        {
          lat: 51.7448,
          lng: -0.91076,
        },
        {
          lat: 51.7508,
          lng: -0.90254,
        },
        {
          lat: 51.75056,
          lng: -0.89298,
        },
        {
          lat: 51.74891,
          lng: -0.88851,
        },
        {
          lat: 51.74893,
          lng: -0.88785,
        },
        {
          lat: 51.75751,
          lng: -0.87934,
        },
        {
          lat: 51.75315,
          lng: -0.87128,
        },
        {
          lat: 51.75252,
          lng: -0.86564,
        },
        {
          lat: 51.75535,
          lng: -0.85927,
        },
        {
          lat: 51.74629,
          lng: -0.84945,
        },
        {
          lat: 51.74689,
          lng: -0.84422,
        },
        {
          lat: 51.74199,
          lng: -0.83911,
        },
        {
          lat: 51.74118,
          lng: -0.83776,
        },
        {
          lat: 51.74171,
          lng: -0.83275,
        },
        {
          lat: 51.74521,
          lng: -0.82742,
        },
        {
          lat: 51.74401,
          lng: -0.82193,
        },
        {
          lat: 51.744,
          lng: -0.81815,
        },
        {
          lat: 51.74411,
          lng: -0.81697,
        },
        {
          lat: 51.74435,
          lng: -0.81634,
        },
        {
          lat: 51.74434,
          lng: -0.81305,
        },
        {
          lat: 51.74423,
          lng: -0.81271,
        },
        {
          lat: 51.74361,
          lng: -0.81164,
        },
        {
          lat: 51.74046,
          lng: -0.81098,
        },
      ],
      postcode: 'HP27 9',
      powerCutType: PowerCutType.UNPLANNED_INCIDENT,
      panelContentUrl: '',
    },
    {
      center: {
        lat: 51.71867,
        lng: -0.72872,
      },
      coordinates: [
        {
          lat: 51.71791,
          lng: -0.6718,
        },
        {
          lat: 51.71764,
          lng: -0.67502,
        },
        {
          lat: 51.71436,
          lng: -0.68003,
        },
        {
          lat: 51.71277,
          lng: -0.67732,
        },
        {
          lat: 51.71171,
          lng: -0.67392,
        },
        {
          lat: 51.70756,
          lng: -0.67361,
        },
        {
          lat: 51.70764,
          lng: -0.6741,
        },
        {
          lat: 51.70789,
          lng: -0.68109,
        },
        {
          lat: 51.70835,
          lng: -0.68155,
        },
        {
          lat: 51.70871,
          lng: -0.68417,
        },
        {
          lat: 51.70868,
          lng: -0.68458,
        },
        {
          lat: 51.70989,
          lng: -0.68618,
        },
        {
          lat: 51.70816,
          lng: -0.68716,
        },
        {
          lat: 51.70764,
          lng: -0.68584,
        },
        {
          lat: 51.7057,
          lng: -0.6864,
        },
        {
          lat: 51.70492,
          lng: -0.68837,
        },
        {
          lat: 51.70492,
          lng: -0.68842,
        },
        {
          lat: 51.70397,
          lng: -0.69075,
        },
        {
          lat: 51.70546,
          lng: -0.69398,
        },
        {
          lat: 51.70258,
          lng: -0.69902,
        },
        {
          lat: 51.70361,
          lng: -0.70062,
        },
        {
          lat: 51.70485,
          lng: -0.70168,
        },
        {
          lat: 51.70452,
          lng: -0.70338,
        },
        {
          lat: 51.70456,
          lng: -0.70486,
        },
        {
          lat: 51.7047,
          lng: -0.70529,
        },
        {
          lat: 51.70399,
          lng: -0.70798,
        },
        {
          lat: 51.70311,
          lng: -0.70928,
        },
        {
          lat: 51.70343,
          lng: -0.71,
        },
        {
          lat: 51.70322,
          lng: -0.71173,
        },
        {
          lat: 51.70042,
          lng: -0.71241,
        },
        {
          lat: 51.7001,
          lng: -0.71287,
        },
        {
          lat: 51.69783,
          lng: -0.71751,
        },
        {
          lat: 51.69705,
          lng: -0.71793,
        },
        {
          lat: 51.69693,
          lng: -0.7182,
        },
        {
          lat: 51.69844,
          lng: -0.72163,
        },
        {
          lat: 51.69919,
          lng: -0.72575,
        },
        {
          lat: 51.70106,
          lng: -0.72837,
        },
        {
          lat: 51.7,
          lng: -0.72925,
        },
        {
          lat: 51.69934,
          lng: -0.72913,
        },
        {
          lat: 51.69976,
          lng: -0.73044,
        },
        {
          lat: 51.6994,
          lng: -0.73072,
        },
        {
          lat: 51.69939,
          lng: -0.73164,
        },
        {
          lat: 51.69922,
          lng: -0.73182,
        },
        {
          lat: 51.69916,
          lng: -0.732,
        },
        {
          lat: 51.69968,
          lng: -0.7334,
        },
        {
          lat: 51.69946,
          lng: -0.73367,
        },
        {
          lat: 51.69874,
          lng: -0.73398,
        },
        {
          lat: 51.69866,
          lng: -0.73498,
        },
        {
          lat: 51.69934,
          lng: -0.73607,
        },
        {
          lat: 51.69896,
          lng: -0.73709,
        },
        {
          lat: 51.69931,
          lng: -0.73794,
        },
        {
          lat: 51.69852,
          lng: -0.73898,
        },
        {
          lat: 51.69853,
          lng: -0.73938,
        },
        {
          lat: 51.69833,
          lng: -0.7397,
        },
        {
          lat: 51.69832,
          lng: -0.74113,
        },
        {
          lat: 51.69834,
          lng: -0.74117,
        },
        {
          lat: 51.69887,
          lng: -0.74139,
        },
        {
          lat: 51.6992,
          lng: -0.74115,
        },
        {
          lat: 51.69924,
          lng: -0.74117,
        },
        {
          lat: 51.69973,
          lng: -0.74208,
        },
        {
          lat: 51.69975,
          lng: -0.74224,
        },
        {
          lat: 51.70006,
          lng: -0.74269,
        },
        {
          lat: 51.69946,
          lng: -0.74356,
        },
        {
          lat: 51.69978,
          lng: -0.74552,
        },
        {
          lat: 51.69977,
          lng: -0.74567,
        },
        {
          lat: 51.69835,
          lng: -0.74947,
        },
        {
          lat: 51.69743,
          lng: -0.75453,
        },
        {
          lat: 51.69737,
          lng: -0.75466,
        },
        {
          lat: 51.69816,
          lng: -0.75623,
        },
        {
          lat: 51.69745,
          lng: -0.76542,
        },
        {
          lat: 51.69407,
          lng: -0.76716,
        },
        {
          lat: 51.69263,
          lng: -0.77235,
        },
        {
          lat: 51.69867,
          lng: -0.77276,
        },
        {
          lat: 51.69909,
          lng: -0.77424,
        },
        {
          lat: 51.7008,
          lng: -0.77555,
        },
        {
          lat: 51.70299,
          lng: -0.78224,
        },
        {
          lat: 51.7032,
          lng: -0.78615,
        },
        {
          lat: 51.70936,
          lng: -0.78678,
        },
        {
          lat: 51.71332,
          lng: -0.78357,
        },
        {
          lat: 51.72027,
          lng: -0.78584,
        },
        {
          lat: 51.72075,
          lng: -0.78673,
        },
        {
          lat: 51.72781,
          lng: -0.78982,
        },
        {
          lat: 51.73067,
          lng: -0.77971,
        },
        {
          lat: 51.73182,
          lng: -0.76488,
        },
        {
          lat: 51.73343,
          lng: -0.76255,
        },
        {
          lat: 51.73135,
          lng: -0.74914,
        },
        {
          lat: 51.73143,
          lng: -0.74887,
        },
        {
          lat: 51.7293,
          lng: -0.73736,
        },
        {
          lat: 51.72765,
          lng: -0.73496,
        },
        {
          lat: 51.72428,
          lng: -0.73287,
        },
        {
          lat: 51.72306,
          lng: -0.72939,
        },
        {
          lat: 51.72846,
          lng: -0.71443,
        },
        {
          lat: 51.72859,
          lng: -0.7144,
        },
        {
          lat: 51.73068,
          lng: -0.70958,
        },
        {
          lat: 51.73295,
          lng: -0.70691,
        },
        {
          lat: 51.73675,
          lng: -0.70731,
        },
        {
          lat: 51.73997,
          lng: -0.71055,
        },
        {
          lat: 51.7389,
          lng: -0.72076,
        },
        {
          lat: 51.73919,
          lng: -0.7214,
        },
        {
          lat: 51.74672,
          lng: -0.72086,
        },
        {
          lat: 51.75048,
          lng: -0.71372,
        },
        {
          lat: 51.74963,
          lng: -0.70938,
        },
        {
          lat: 51.74645,
          lng: -0.7072,
        },
        {
          lat: 51.74558,
          lng: -0.70381,
        },
        {
          lat: 51.74471,
          lng: -0.69293,
        },
        {
          lat: 51.74484,
          lng: -0.69182,
        },
        {
          lat: 51.74321,
          lng: -0.68678,
        },
        {
          lat: 51.74241,
          lng: -0.68676,
        },
        {
          lat: 51.73734,
          lng: -0.68095,
        },
        {
          lat: 51.73703,
          lng: -0.68041,
        },
        {
          lat: 51.73636,
          lng: -0.67464,
        },
        {
          lat: 51.72952,
          lng: -0.67446,
        },
        {
          lat: 51.72876,
          lng: -0.6738,
        },
        {
          lat: 51.72795,
          lng: -0.67381,
        },
        {
          lat: 51.72514,
          lng: -0.67217,
        },
        {
          lat: 51.72445,
          lng: -0.67147,
        },
        {
          lat: 51.72391,
          lng: -0.6705,
        },
        {
          lat: 51.71791,
          lng: -0.6718,
        },
      ],
      postcode: 'HP16 9',
      powerCutType: PowerCutType.UNPLANNED_INCIDENT,
      panelContentUrl: '',
    },
  ] as Marker[],
  fullPostcodeData: [
    'HP270AX',
    'HP270DR',
    'HP270EN',
    'HP270EP',
    'HP270EU',
    'HP270EX',
    'HP270EY',
    'HP270HT',
    'HP270PG',
    'HP270RW',
    'HP279AW',
    'HP279DX',
    'HP279EG',
    'HP279EH',
    'HP279EJ',
    'HP279HB',
    'HP279NG',
    'HP279NQ',
    'HP279QT',
    'HP169PT',
    'HP270BN',
    'HP270BP',
    'HP270BS',
    'HP270BT',
    'HP270BW',
    'HP270HU',
    'HP270HX',
    'HP270HY',
    'HP270HZ',
    'HP270JA',
    'HP270JB',
    'HP270JD',
    'HP270JE',
    'HP270JF',
    'HP270LA',
    'HP270LB',
    'HP270LE',
    'HP270NL',
    'HP270NN',
    'HP270NP',
    'HP270NR',
    'HP270NS',
    'HP270NW',
    'HP270PA',
    'HP270PF',
    'HP270RH',
    'HP270RJ',
    'HP270RL',
    'HP270RN',
    'HP270RP',
    'HP270RS',
  ],
  pinLatitude: null,
  pinLongitude: null,
  incidentCategoryCustomerFriendlyDescription:
    'We were investigating a high voltage overhead electricity line fault which caused a power cut in the local area.',
  incidentTypeTBCEstimatedFriendlyDescription: '06 Apr 23:00 - 00:00',
  serviceDown: false,
  serviceDownUrl: null,
  scope: null,
  postcode: 'HP27 0',
  coordinates: {
    'HP27 0': [
      {
        lat: 51.72781,
        lng: -0.78982,
      },
      {
        lat: 51.72075,
        lng: -0.78673,
      },
      {
        lat: 51.72027,
        lng: -0.78584,
      },
      {
        lat: 51.71332,
        lng: -0.78357,
      },
      {
        lat: 51.70936,
        lng: -0.78678,
      },
      {
        lat: 51.7032,
        lng: -0.78615,
      },
      {
        lat: 51.70299,
        lng: -0.78224,
      },
      {
        lat: 51.7008,
        lng: -0.77555,
      },
      {
        lat: 51.69909,
        lng: -0.77424,
      },
      {
        lat: 51.69867,
        lng: -0.77276,
      },
      {
        lat: 51.69263,
        lng: -0.77235,
      },
      {
        lat: 51.69209,
        lng: -0.77313,
      },
      {
        lat: 51.68946,
        lng: -0.77189,
      },
      {
        lat: 51.687,
        lng: -0.77981,
      },
      {
        lat: 51.68566,
        lng: -0.78121,
      },
      {
        lat: 51.68444,
        lng: -0.78213,
      },
      {
        lat: 51.6838,
        lng: -0.78327,
      },
      {
        lat: 51.68409,
        lng: -0.78543,
      },
      {
        lat: 51.68438,
        lng: -0.78652,
      },
      {
        lat: 51.68434,
        lng: -0.78676,
      },
      {
        lat: 51.68399,
        lng: -0.79504,
      },
      {
        lat: 51.68477,
        lng: -0.80256,
      },
      {
        lat: 51.68487,
        lng: -0.80286,
      },
      {
        lat: 51.68428,
        lng: -0.80563,
      },
      {
        lat: 51.6765,
        lng: -0.81059,
      },
      {
        lat: 51.67816,
        lng: -0.81574,
      },
      {
        lat: 51.67979,
        lng: -0.81945,
      },
      {
        lat: 51.68648,
        lng: -0.81764,
      },
      {
        lat: 51.68821,
        lng: -0.82319,
      },
      {
        lat: 51.68861,
        lng: -0.82342,
      },
      {
        lat: 51.68925,
        lng: -0.82355,
      },
      {
        lat: 51.69044,
        lng: -0.82505,
      },
      {
        lat: 51.69227,
        lng: -0.82782,
      },
      {
        lat: 51.69375,
        lng: -0.82826,
      },
      {
        lat: 51.70037,
        lng: -0.83564,
      },
      {
        lat: 51.70115,
        lng: -0.83362,
      },
      {
        lat: 51.71061,
        lng: -0.83355,
      },
      {
        lat: 51.71089,
        lng: -0.83569,
      },
      {
        lat: 51.71119,
        lng: -0.83699,
      },
      {
        lat: 51.71273,
        lng: -0.83853,
      },
      {
        lat: 51.71285,
        lng: -0.83869,
      },
      {
        lat: 51.71377,
        lng: -0.8397,
      },
      {
        lat: 51.71484,
        lng: -0.83862,
      },
      {
        lat: 51.71504,
        lng: -0.83858,
      },
      {
        lat: 51.71531,
        lng: -0.83849,
      },
      {
        lat: 51.71554,
        lng: -0.83847,
      },
      {
        lat: 51.71636,
        lng: -0.83813,
      },
      {
        lat: 51.71713,
        lng: -0.83631,
      },
      {
        lat: 51.71728,
        lng: -0.83626,
      },
      {
        lat: 51.7179,
        lng: -0.8373,
      },
      {
        lat: 51.71795,
        lng: -0.8376,
      },
      {
        lat: 51.71842,
        lng: -0.83805,
      },
      {
        lat: 51.71915,
        lng: -0.83713,
      },
      {
        lat: 51.71923,
        lng: -0.8371,
      },
      {
        lat: 51.71947,
        lng: -0.83625,
      },
      {
        lat: 51.7197,
        lng: -0.83607,
      },
      {
        lat: 51.72017,
        lng: -0.83603,
      },
      {
        lat: 51.72057,
        lng: -0.83773,
      },
      {
        lat: 51.72075,
        lng: -0.83795,
      },
      {
        lat: 51.72171,
        lng: -0.83687,
      },
      {
        lat: 51.72197,
        lng: -0.83696,
      },
      {
        lat: 51.72256,
        lng: -0.83528,
      },
      {
        lat: 51.72279,
        lng: -0.83506,
      },
      {
        lat: 51.72287,
        lng: -0.83512,
      },
      {
        lat: 51.72386,
        lng: -0.83435,
      },
      {
        lat: 51.72356,
        lng: -0.83351,
      },
      {
        lat: 51.72372,
        lng: -0.83327,
      },
      {
        lat: 51.72369,
        lng: -0.83215,
      },
      {
        lat: 51.72379,
        lng: -0.8321,
      },
      {
        lat: 51.72421,
        lng: -0.83283,
      },
      {
        lat: 51.72422,
        lng: -0.83282,
      },
      {
        lat: 51.72427,
        lng: -0.83278,
      },
      {
        lat: 51.72459,
        lng: -0.83295,
      },
      {
        lat: 51.72477,
        lng: -0.83274,
      },
      {
        lat: 51.72576,
        lng: -0.83358,
      },
      {
        lat: 51.726,
        lng: -0.83242,
      },
      {
        lat: 51.72601,
        lng: -0.83189,
      },
      {
        lat: 51.72628,
        lng: -0.83106,
      },
      {
        lat: 51.72636,
        lng: -0.83094,
      },
      {
        lat: 51.72702,
        lng: -0.83098,
      },
      {
        lat: 51.72741,
        lng: -0.83042,
      },
      {
        lat: 51.72826,
        lng: -0.8301,
      },
      {
        lat: 51.72835,
        lng: -0.82946,
      },
      {
        lat: 51.72783,
        lng: -0.82815,
      },
      {
        lat: 51.72815,
        lng: -0.82717,
      },
      {
        lat: 51.72836,
        lng: -0.82696,
      },
      {
        lat: 51.72838,
        lng: -0.82695,
      },
      {
        lat: 51.72879,
        lng: -0.82606,
      },
      {
        lat: 51.72932,
        lng: -0.82623,
      },
      {
        lat: 51.73027,
        lng: -0.82514,
      },
      {
        lat: 51.73057,
        lng: -0.82572,
      },
      {
        lat: 51.73185,
        lng: -0.82524,
      },
      {
        lat: 51.73151,
        lng: -0.82449,
      },
      {
        lat: 51.73082,
        lng: -0.82141,
      },
      {
        lat: 51.73096,
        lng: -0.82131,
      },
      {
        lat: 51.73174,
        lng: -0.82013,
      },
      {
        lat: 51.73201,
        lng: -0.81935,
      },
      {
        lat: 51.73541,
        lng: -0.81859,
      },
      {
        lat: 51.73542,
        lng: -0.81796,
      },
      {
        lat: 51.73651,
        lng: -0.81562,
      },
      {
        lat: 51.73782,
        lng: -0.8154,
      },
      {
        lat: 51.73888,
        lng: -0.81481,
      },
      {
        lat: 51.73884,
        lng: -0.81332,
      },
      {
        lat: 51.74046,
        lng: -0.81098,
      },
      {
        lat: 51.7378,
        lng: -0.80803,
      },
      {
        lat: 51.73942,
        lng: -0.79419,
      },
      {
        lat: 51.72973,
        lng: -0.79321,
      },
      {
        lat: 51.72781,
        lng: -0.78982,
      },
    ],
    'HP27 9': [
      {
        lat: 51.74046,
        lng: -0.81098,
      },
      {
        lat: 51.73884,
        lng: -0.81332,
      },
      {
        lat: 51.73888,
        lng: -0.81481,
      },
      {
        lat: 51.73782,
        lng: -0.8154,
      },
      {
        lat: 51.73651,
        lng: -0.81562,
      },
      {
        lat: 51.73542,
        lng: -0.81796,
      },
      {
        lat: 51.73541,
        lng: -0.81859,
      },
      {
        lat: 51.73201,
        lng: -0.81935,
      },
      {
        lat: 51.73174,
        lng: -0.82013,
      },
      {
        lat: 51.73096,
        lng: -0.82131,
      },
      {
        lat: 51.73082,
        lng: -0.82141,
      },
      {
        lat: 51.73151,
        lng: -0.82449,
      },
      {
        lat: 51.73185,
        lng: -0.82524,
      },
      {
        lat: 51.73057,
        lng: -0.82572,
      },
      {
        lat: 51.73027,
        lng: -0.82514,
      },
      {
        lat: 51.72932,
        lng: -0.82623,
      },
      {
        lat: 51.72879,
        lng: -0.82606,
      },
      {
        lat: 51.72838,
        lng: -0.82695,
      },
      {
        lat: 51.72836,
        lng: -0.82696,
      },
      {
        lat: 51.72815,
        lng: -0.82717,
      },
      {
        lat: 51.72783,
        lng: -0.82815,
      },
      {
        lat: 51.72835,
        lng: -0.82946,
      },
      {
        lat: 51.72826,
        lng: -0.8301,
      },
      {
        lat: 51.72741,
        lng: -0.83042,
      },
      {
        lat: 51.72702,
        lng: -0.83098,
      },
      {
        lat: 51.72636,
        lng: -0.83094,
      },
      {
        lat: 51.72628,
        lng: -0.83106,
      },
      {
        lat: 51.72601,
        lng: -0.83189,
      },
      {
        lat: 51.726,
        lng: -0.83242,
      },
      {
        lat: 51.72576,
        lng: -0.83358,
      },
      {
        lat: 51.72477,
        lng: -0.83274,
      },
      {
        lat: 51.72459,
        lng: -0.83295,
      },
      {
        lat: 51.72427,
        lng: -0.83278,
      },
      {
        lat: 51.72422,
        lng: -0.83282,
      },
      {
        lat: 51.72421,
        lng: -0.83283,
      },
      {
        lat: 51.72379,
        lng: -0.8321,
      },
      {
        lat: 51.72369,
        lng: -0.83215,
      },
      {
        lat: 51.72372,
        lng: -0.83327,
      },
      {
        lat: 51.72356,
        lng: -0.83351,
      },
      {
        lat: 51.72386,
        lng: -0.83435,
      },
      {
        lat: 51.72287,
        lng: -0.83512,
      },
      {
        lat: 51.72279,
        lng: -0.83506,
      },
      {
        lat: 51.72256,
        lng: -0.83528,
      },
      {
        lat: 51.72197,
        lng: -0.83696,
      },
      {
        lat: 51.72171,
        lng: -0.83687,
      },
      {
        lat: 51.72075,
        lng: -0.83795,
      },
      {
        lat: 51.72057,
        lng: -0.83773,
      },
      {
        lat: 51.72017,
        lng: -0.83603,
      },
      {
        lat: 51.7197,
        lng: -0.83607,
      },
      {
        lat: 51.71947,
        lng: -0.83625,
      },
      {
        lat: 51.71923,
        lng: -0.8371,
      },
      {
        lat: 51.71915,
        lng: -0.83713,
      },
      {
        lat: 51.71842,
        lng: -0.83805,
      },
      {
        lat: 51.71795,
        lng: -0.8376,
      },
      {
        lat: 51.7179,
        lng: -0.8373,
      },
      {
        lat: 51.71728,
        lng: -0.83626,
      },
      {
        lat: 51.71713,
        lng: -0.83631,
      },
      {
        lat: 51.71636,
        lng: -0.83813,
      },
      {
        lat: 51.71554,
        lng: -0.83847,
      },
      {
        lat: 51.71531,
        lng: -0.83849,
      },
      {
        lat: 51.71504,
        lng: -0.83858,
      },
      {
        lat: 51.71484,
        lng: -0.83862,
      },
      {
        lat: 51.71377,
        lng: -0.8397,
      },
      {
        lat: 51.71285,
        lng: -0.83869,
      },
      {
        lat: 51.71273,
        lng: -0.83853,
      },
      {
        lat: 51.71119,
        lng: -0.83699,
      },
      {
        lat: 51.71089,
        lng: -0.83569,
      },
      {
        lat: 51.71061,
        lng: -0.83355,
      },
      {
        lat: 51.70115,
        lng: -0.83362,
      },
      {
        lat: 51.70037,
        lng: -0.83564,
      },
      {
        lat: 51.69375,
        lng: -0.82826,
      },
      {
        lat: 51.69227,
        lng: -0.82782,
      },
      {
        lat: 51.69044,
        lng: -0.82505,
      },
      {
        lat: 51.68925,
        lng: -0.82355,
      },
      {
        lat: 51.68861,
        lng: -0.82342,
      },
      {
        lat: 51.68821,
        lng: -0.82319,
      },
      {
        lat: 51.68645,
        lng: -0.82554,
      },
      {
        lat: 51.68304,
        lng: -0.82599,
      },
      {
        lat: 51.68258,
        lng: -0.83094,
      },
      {
        lat: 51.68501,
        lng: -0.83583,
      },
      {
        lat: 51.68559,
        lng: -0.84008,
      },
      {
        lat: 51.68543,
        lng: -0.84066,
      },
      {
        lat: 51.69245,
        lng: -0.85488,
      },
      {
        lat: 51.6931,
        lng: -0.85474,
      },
      {
        lat: 51.69962,
        lng: -0.8602,
      },
      {
        lat: 51.70141,
        lng: -0.86331,
      },
      {
        lat: 51.70305,
        lng: -0.87107,
      },
      {
        lat: 51.70221,
        lng: -0.87538,
      },
      {
        lat: 51.71041,
        lng: -0.88718,
      },
      {
        lat: 51.71043,
        lng: -0.88717,
      },
      {
        lat: 51.71228,
        lng: -0.88766,
      },
      {
        lat: 51.71458,
        lng: -0.88925,
      },
      {
        lat: 51.71776,
        lng: -0.89074,
      },
      {
        lat: 51.71852,
        lng: -0.89086,
      },
      {
        lat: 51.72007,
        lng: -0.89236,
      },
      {
        lat: 51.7205,
        lng: -0.89248,
      },
      {
        lat: 51.7206,
        lng: -0.89248,
      },
      {
        lat: 51.72196,
        lng: -0.89564,
      },
      {
        lat: 51.72681,
        lng: -0.90328,
      },
      {
        lat: 51.73085,
        lng: -0.90259,
      },
      {
        lat: 51.73514,
        lng: -0.89967,
      },
      {
        lat: 51.73679,
        lng: -0.90159,
      },
      {
        lat: 51.74032,
        lng: -0.90964,
      },
      {
        lat: 51.7448,
        lng: -0.91076,
      },
      {
        lat: 51.7508,
        lng: -0.90254,
      },
      {
        lat: 51.75056,
        lng: -0.89298,
      },
      {
        lat: 51.74891,
        lng: -0.88851,
      },
      {
        lat: 51.74893,
        lng: -0.88785,
      },
      {
        lat: 51.75751,
        lng: -0.87934,
      },
      {
        lat: 51.75315,
        lng: -0.87128,
      },
      {
        lat: 51.75252,
        lng: -0.86564,
      },
      {
        lat: 51.75535,
        lng: -0.85927,
      },
      {
        lat: 51.74629,
        lng: -0.84945,
      },
      {
        lat: 51.74689,
        lng: -0.84422,
      },
      {
        lat: 51.74199,
        lng: -0.83911,
      },
      {
        lat: 51.74118,
        lng: -0.83776,
      },
      {
        lat: 51.74171,
        lng: -0.83275,
      },
      {
        lat: 51.74521,
        lng: -0.82742,
      },
      {
        lat: 51.74401,
        lng: -0.82193,
      },
      {
        lat: 51.744,
        lng: -0.81815,
      },
      {
        lat: 51.74411,
        lng: -0.81697,
      },
      {
        lat: 51.74435,
        lng: -0.81634,
      },
      {
        lat: 51.74434,
        lng: -0.81305,
      },
      {
        lat: 51.74423,
        lng: -0.81271,
      },
      {
        lat: 51.74361,
        lng: -0.81164,
      },
      {
        lat: 51.74046,
        lng: -0.81098,
      },
    ],
    'HP16 9': [
      {
        lat: 51.71791,
        lng: -0.6718,
      },
      {
        lat: 51.71764,
        lng: -0.67502,
      },
      {
        lat: 51.71436,
        lng: -0.68003,
      },
      {
        lat: 51.71277,
        lng: -0.67732,
      },
      {
        lat: 51.71171,
        lng: -0.67392,
      },
      {
        lat: 51.70756,
        lng: -0.67361,
      },
      {
        lat: 51.70764,
        lng: -0.6741,
      },
      {
        lat: 51.70789,
        lng: -0.68109,
      },
      {
        lat: 51.70835,
        lng: -0.68155,
      },
      {
        lat: 51.70871,
        lng: -0.68417,
      },
      {
        lat: 51.70868,
        lng: -0.68458,
      },
      {
        lat: 51.70989,
        lng: -0.68618,
      },
      {
        lat: 51.70816,
        lng: -0.68716,
      },
      {
        lat: 51.70764,
        lng: -0.68584,
      },
      {
        lat: 51.7057,
        lng: -0.6864,
      },
      {
        lat: 51.70492,
        lng: -0.68837,
      },
      {
        lat: 51.70492,
        lng: -0.68842,
      },
      {
        lat: 51.70397,
        lng: -0.69075,
      },
      {
        lat: 51.70546,
        lng: -0.69398,
      },
      {
        lat: 51.70258,
        lng: -0.69902,
      },
      {
        lat: 51.70361,
        lng: -0.70062,
      },
      {
        lat: 51.70485,
        lng: -0.70168,
      },
      {
        lat: 51.70452,
        lng: -0.70338,
      },
      {
        lat: 51.70456,
        lng: -0.70486,
      },
      {
        lat: 51.7047,
        lng: -0.70529,
      },
      {
        lat: 51.70399,
        lng: -0.70798,
      },
      {
        lat: 51.70311,
        lng: -0.70928,
      },
      {
        lat: 51.70343,
        lng: -0.71,
      },
      {
        lat: 51.70322,
        lng: -0.71173,
      },
      {
        lat: 51.70042,
        lng: -0.71241,
      },
      {
        lat: 51.7001,
        lng: -0.71287,
      },
      {
        lat: 51.69783,
        lng: -0.71751,
      },
      {
        lat: 51.69705,
        lng: -0.71793,
      },
      {
        lat: 51.69693,
        lng: -0.7182,
      },
      {
        lat: 51.69844,
        lng: -0.72163,
      },
      {
        lat: 51.69919,
        lng: -0.72575,
      },
      {
        lat: 51.70106,
        lng: -0.72837,
      },
      {
        lat: 51.7,
        lng: -0.72925,
      },
      {
        lat: 51.69934,
        lng: -0.72913,
      },
      {
        lat: 51.69976,
        lng: -0.73044,
      },
      {
        lat: 51.6994,
        lng: -0.73072,
      },
      {
        lat: 51.69939,
        lng: -0.73164,
      },
      {
        lat: 51.69922,
        lng: -0.73182,
      },
      {
        lat: 51.69916,
        lng: -0.732,
      },
      {
        lat: 51.69968,
        lng: -0.7334,
      },
      {
        lat: 51.69946,
        lng: -0.73367,
      },
      {
        lat: 51.69874,
        lng: -0.73398,
      },
      {
        lat: 51.69866,
        lng: -0.73498,
      },
      {
        lat: 51.69934,
        lng: -0.73607,
      },
      {
        lat: 51.69896,
        lng: -0.73709,
      },
      {
        lat: 51.69931,
        lng: -0.73794,
      },
      {
        lat: 51.69852,
        lng: -0.73898,
      },
      {
        lat: 51.69853,
        lng: -0.73938,
      },
      {
        lat: 51.69833,
        lng: -0.7397,
      },
      {
        lat: 51.69832,
        lng: -0.74113,
      },
      {
        lat: 51.69834,
        lng: -0.74117,
      },
      {
        lat: 51.69887,
        lng: -0.74139,
      },
      {
        lat: 51.6992,
        lng: -0.74115,
      },
      {
        lat: 51.69924,
        lng: -0.74117,
      },
      {
        lat: 51.69973,
        lng: -0.74208,
      },
      {
        lat: 51.69975,
        lng: -0.74224,
      },
      {
        lat: 51.70006,
        lng: -0.74269,
      },
      {
        lat: 51.69946,
        lng: -0.74356,
      },
      {
        lat: 51.69978,
        lng: -0.74552,
      },
      {
        lat: 51.69977,
        lng: -0.74567,
      },
      {
        lat: 51.69835,
        lng: -0.74947,
      },
      {
        lat: 51.69743,
        lng: -0.75453,
      },
      {
        lat: 51.69737,
        lng: -0.75466,
      },
      {
        lat: 51.69816,
        lng: -0.75623,
      },
      {
        lat: 51.69745,
        lng: -0.76542,
      },
      {
        lat: 51.69407,
        lng: -0.76716,
      },
      {
        lat: 51.69263,
        lng: -0.77235,
      },
      {
        lat: 51.69867,
        lng: -0.77276,
      },
      {
        lat: 51.69909,
        lng: -0.77424,
      },
      {
        lat: 51.7008,
        lng: -0.77555,
      },
      {
        lat: 51.70299,
        lng: -0.78224,
      },
      {
        lat: 51.7032,
        lng: -0.78615,
      },
      {
        lat: 51.70936,
        lng: -0.78678,
      },
      {
        lat: 51.71332,
        lng: -0.78357,
      },
      {
        lat: 51.72027,
        lng: -0.78584,
      },
      {
        lat: 51.72075,
        lng: -0.78673,
      },
      {
        lat: 51.72781,
        lng: -0.78982,
      },
      {
        lat: 51.73067,
        lng: -0.77971,
      },
      {
        lat: 51.73182,
        lng: -0.76488,
      },
      {
        lat: 51.73343,
        lng: -0.76255,
      },
      {
        lat: 51.73135,
        lng: -0.74914,
      },
      {
        lat: 51.73143,
        lng: -0.74887,
      },
      {
        lat: 51.7293,
        lng: -0.73736,
      },
      {
        lat: 51.72765,
        lng: -0.73496,
      },
      {
        lat: 51.72428,
        lng: -0.73287,
      },
      {
        lat: 51.72306,
        lng: -0.72939,
      },
      {
        lat: 51.72846,
        lng: -0.71443,
      },
      {
        lat: 51.72859,
        lng: -0.7144,
      },
      {
        lat: 51.73068,
        lng: -0.70958,
      },
      {
        lat: 51.73295,
        lng: -0.70691,
      },
      {
        lat: 51.73675,
        lng: -0.70731,
      },
      {
        lat: 51.73997,
        lng: -0.71055,
      },
      {
        lat: 51.7389,
        lng: -0.72076,
      },
      {
        lat: 51.73919,
        lng: -0.7214,
      },
      {
        lat: 51.74672,
        lng: -0.72086,
      },
      {
        lat: 51.75048,
        lng: -0.71372,
      },
      {
        lat: 51.74963,
        lng: -0.70938,
      },
      {
        lat: 51.74645,
        lng: -0.7072,
      },
      {
        lat: 51.74558,
        lng: -0.70381,
      },
      {
        lat: 51.74471,
        lng: -0.69293,
      },
      {
        lat: 51.74484,
        lng: -0.69182,
      },
      {
        lat: 51.74321,
        lng: -0.68678,
      },
      {
        lat: 51.74241,
        lng: -0.68676,
      },
      {
        lat: 51.73734,
        lng: -0.68095,
      },
      {
        lat: 51.73703,
        lng: -0.68041,
      },
      {
        lat: 51.73636,
        lng: -0.67464,
      },
      {
        lat: 51.72952,
        lng: -0.67446,
      },
      {
        lat: 51.72876,
        lng: -0.6738,
      },
      {
        lat: 51.72795,
        lng: -0.67381,
      },
      {
        lat: 51.72514,
        lng: -0.67217,
      },
      {
        lat: 51.72445,
        lng: -0.67147,
      },
      {
        lat: 51.72391,
        lng: -0.6705,
      },
      {
        lat: 51.71791,
        lng: -0.6718,
      },
    ],
  },
}
