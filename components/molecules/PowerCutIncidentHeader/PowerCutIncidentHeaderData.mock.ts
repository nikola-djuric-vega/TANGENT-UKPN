import { PowerCutIncidentHeaderProps } from './PowerCutIncidentHeader'
import { Marker, PowerCutType } from '_types/local/incidents'
import { StepName } from '_types/local/step'

export const PowerCutIncidentHeaderData: PowerCutIncidentHeaderProps = {
  cmsData: null,
  incident: {
    incidentReference: 'INCD-276275-Z',
    panelContentUrl: '/power-cut/map/power-back-on?incidentId=INCD-276275-Z',
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
      incidentId: 'Z00043733INCD',
      incidentReference: 'INCD-276275-Z',
      incidentCategory: '47',
      incidentType: 2,
      incidentPriority: 32,
      statusId: 5,
      creationDateTime: '2021-12-26T11:32:57',
      restoredDateTime: '2022-03-11T13:44:45.39',
      estimatedRestorationDate: null,
      plannedDate: null,
      receivedDate: '2022-11-13T11:26:42',
      noCustomerAffected: 0,
      noPlannedCustomers: 0,
      noCallsReported: 1,
      latitude: 0,
      longitude: 0,
      resource: {
        id: null,
        name: 'CATALIN',
        estimatedTimeOfArrival: '2022-02-04T08:45:00',
        dispatchedDate: '2022-02-04T08:03:21',
        arrivalDate: '2022-02-04T08:43:43',
        statusId: 6,
      },
      affectedCustomers: [],
      logs: [],
      postCodesAffected: ['EN6 2', 'EN6 5'],
      postCodesRestored: [
        'EN65ES',
        'EN62RJ',
        'EN62RT',
        'EN65DZ',
        'EN65EB',
        'EN65ED',
        'EN65EH',
        'EN65EP',
        'EN65ER',
        'EN65QS',
        'UK',
      ],
      postCodesPlanned: [
        'EN65ES',
        'EN62RJ',
        'EN62RT',
        'EN65DZ',
        'EN65EB',
        'EN65ED',
        'EN65EH',
        'EN65EP',
        'EN65ER',
        'EN65QS',
        'UK',
      ],
      customersOnSupply: 102,
      customersOffSupply: 0,
      timestamp: '2022:03:11:15:00:44:26',
      incidentTypeName: 'Restored',
      plannedIncidentReason:
        "We're carrying out planned work in your area. For our engineers to carry it out safely they need to turn the power off. We're doing this work as it's essential to provide reliable electricity supplies to your area. We're sorry for any inconvenience caused and thank you for your patience.",
      scope: null,
    },
    postcodesRemaining: ['EN6 2', 'EN6 5'],
    postcodeData: [
      {
        center: {
          lat: 51.68927,
          lng: -0.16504,
        },
        coordinates: [
          {
            lat: 51.70414,
            lng: -0.16816,
          },
          {
            lat: 51.70261,
            lng: -0.16779,
          },
          {
            lat: 51.70195,
            lng: -0.16728,
          },
          {
            lat: 51.70104,
            lng: -0.16549,
          },
          {
            lat: 51.70097,
            lng: -0.16506,
          },
          {
            lat: 51.70015,
            lng: -0.16512,
          },
          {
            lat: 51.69979,
            lng: -0.16499,
          },
          {
            lat: 51.6995,
            lng: -0.1643,
          },
          {
            lat: 51.69949,
            lng: -0.1643,
          },
          {
            lat: 51.69917,
            lng: -0.16476,
          },
          {
            lat: 51.69857,
            lng: -0.1647,
          },
          {
            lat: 51.69829,
            lng: -0.1628,
          },
          {
            lat: 51.69836,
            lng: -0.16248,
          },
          {
            lat: 51.69655,
            lng: -0.15901,
          },
          {
            lat: 51.69478,
            lng: -0.15947,
          },
          {
            lat: 51.69147,
            lng: -0.15641,
          },
          {
            lat: 51.69062,
            lng: -0.15548,
          },
          {
            lat: 51.69031,
            lng: -0.15526,
          },
          {
            lat: 51.68857,
            lng: -0.14894,
          },
          {
            lat: 51.68709,
            lng: -0.15016,
          },
          {
            lat: 51.67759,
            lng: -0.15103,
          },
          {
            lat: 51.6797,
            lng: -0.16161,
          },
          {
            lat: 51.67949,
            lng: -0.164,
          },
          {
            lat: 51.67828,
            lng: -0.16667,
          },
          {
            lat: 51.67845,
            lng: -0.16865,
          },
          {
            lat: 51.67933,
            lng: -0.17359,
          },
          {
            lat: 51.68373,
            lng: -0.1733,
          },
          {
            lat: 51.68452,
            lng: -0.17312,
          },
          {
            lat: 51.68468,
            lng: -0.17294,
          },
          {
            lat: 51.6878,
            lng: -0.17329,
          },
          {
            lat: 51.68799,
            lng: -0.17306,
          },
          {
            lat: 51.68849,
            lng: -0.1734,
          },
          {
            lat: 51.68828,
            lng: -0.17446,
          },
          {
            lat: 51.68835,
            lng: -0.17478,
          },
          {
            lat: 51.68847,
            lng: -0.17486,
          },
          {
            lat: 51.689,
            lng: -0.17418,
          },
          {
            lat: 51.68943,
            lng: -0.17432,
          },
          {
            lat: 51.68908,
            lng: -0.17537,
          },
          {
            lat: 51.68928,
            lng: -0.17558,
          },
          {
            lat: 51.6894,
            lng: -0.17648,
          },
          {
            lat: 51.68995,
            lng: -0.17627,
          },
          {
            lat: 51.69026,
            lng: -0.17705,
          },
          {
            lat: 51.69064,
            lng: -0.17688,
          },
          {
            lat: 51.69096,
            lng: -0.17768,
          },
          {
            lat: 51.691,
            lng: -0.17769,
          },
          {
            lat: 51.69131,
            lng: -0.17813,
          },
          {
            lat: 51.69146,
            lng: -0.17807,
          },
          {
            lat: 51.69187,
            lng: -0.17864,
          },
          {
            lat: 51.69208,
            lng: -0.17869,
          },
          {
            lat: 51.69216,
            lng: -0.17885,
          },
          {
            lat: 51.69251,
            lng: -0.17899,
          },
          {
            lat: 51.69254,
            lng: -0.18063,
          },
          {
            lat: 51.69322,
            lng: -0.18116,
          },
          {
            lat: 51.69353,
            lng: -0.18124,
          },
          {
            lat: 51.69365,
            lng: -0.18118,
          },
          {
            lat: 51.69401,
            lng: -0.18049,
          },
          {
            lat: 51.69402,
            lng: -0.18049,
          },
          {
            lat: 51.69493,
            lng: -0.17854,
          },
          {
            lat: 51.69496,
            lng: -0.17815,
          },
          {
            lat: 51.69505,
            lng: -0.17788,
          },
          {
            lat: 51.69611,
            lng: -0.17796,
          },
          {
            lat: 51.69693,
            lng: -0.17891,
          },
          {
            lat: 51.69719,
            lng: -0.17878,
          },
          {
            lat: 51.698,
            lng: -0.17907,
          },
          {
            lat: 51.69855,
            lng: -0.17886,
          },
          {
            lat: 51.69855,
            lng: -0.17885,
          },
          {
            lat: 51.69937,
            lng: -0.17703,
          },
          {
            lat: 51.69864,
            lng: -0.1755,
          },
          {
            lat: 51.69864,
            lng: -0.17547,
          },
          {
            lat: 51.69888,
            lng: -0.17521,
          },
          {
            lat: 51.69905,
            lng: -0.17416,
          },
          {
            lat: 51.6995,
            lng: -0.17338,
          },
          {
            lat: 51.69967,
            lng: -0.17357,
          },
          {
            lat: 51.69999,
            lng: -0.17374,
          },
          {
            lat: 51.70027,
            lng: -0.17381,
          },
          {
            lat: 51.70103,
            lng: -0.17378,
          },
          {
            lat: 51.70176,
            lng: -0.17275,
          },
          {
            lat: 51.70181,
            lng: -0.17261,
          },
          {
            lat: 51.7025,
            lng: -0.17206,
          },
          {
            lat: 51.70351,
            lng: -0.17013,
          },
          {
            lat: 51.70367,
            lng: -0.16973,
          },
          {
            lat: 51.70414,
            lng: -0.16816,
          },
        ],
        postcode: 'EN6 5',
        panelContentUrl: '',
        powerCutType: PowerCutType.RESTORED_INCIDENT,
      },
      {
        center: {
          lat: 51.69003,
          lng: -0.1936,
        },
        coordinates: [
          {
            lat: 51.68605,
            lng: -0.21235,
          },
          {
            lat: 51.68798,
            lng: -0.21428,
          },
          {
            lat: 51.68851,
            lng: -0.21569,
          },
          {
            lat: 51.69652,
            lng: -0.21649,
          },
          {
            lat: 51.69572,
            lng: -0.21351,
          },
          {
            lat: 51.69487,
            lng: -0.21264,
          },
          {
            lat: 51.69196,
            lng: -0.21194,
          },
          {
            lat: 51.6908,
            lng: -0.21203,
          },
          {
            lat: 51.69081,
            lng: -0.21201,
          },
          {
            lat: 51.69188,
            lng: -0.20892,
          },
          {
            lat: 51.69209,
            lng: -0.20747,
          },
          {
            lat: 51.69296,
            lng: -0.20659,
          },
          {
            lat: 51.69289,
            lng: -0.20591,
          },
          {
            lat: 51.69373,
            lng: -0.20547,
          },
          {
            lat: 51.69366,
            lng: -0.20472,
          },
          {
            lat: 51.69373,
            lng: -0.20432,
          },
          {
            lat: 51.69452,
            lng: -0.20456,
          },
          {
            lat: 51.69479,
            lng: -0.20501,
          },
          {
            lat: 51.69507,
            lng: -0.20508,
          },
          {
            lat: 51.69553,
            lng: -0.20388,
          },
          {
            lat: 51.69635,
            lng: -0.20424,
          },
          {
            lat: 51.69659,
            lng: -0.20359,
          },
          {
            lat: 51.69747,
            lng: -0.2038,
          },
          {
            lat: 51.69751,
            lng: -0.20386,
          },
          {
            lat: 51.69827,
            lng: -0.20304,
          },
          {
            lat: 51.69827,
            lng: -0.203,
          },
          {
            lat: 51.6985,
            lng: -0.20264,
          },
          {
            lat: 51.69869,
            lng: -0.20141,
          },
          {
            lat: 51.69852,
            lng: -0.20078,
          },
          {
            lat: 51.6991,
            lng: -0.19971,
          },
          {
            lat: 51.70018,
            lng: -0.2006,
          },
          {
            lat: 51.70022,
            lng: -0.20061,
          },
          {
            lat: 51.70051,
            lng: -0.20043,
          },
          {
            lat: 51.70091,
            lng: -0.19971,
          },
          {
            lat: 51.70115,
            lng: -0.19971,
          },
          {
            lat: 51.7031,
            lng: -0.19581,
          },
          {
            lat: 51.70287,
            lng: -0.19544,
          },
          {
            lat: 51.70256,
            lng: -0.1948,
          },
          {
            lat: 51.70236,
            lng: -0.19469,
          },
          {
            lat: 51.70111,
            lng: -0.19495,
          },
          {
            lat: 51.70077,
            lng: -0.19512,
          },
          {
            lat: 51.70058,
            lng: -0.19501,
          },
          {
            lat: 51.6987,
            lng: -0.19511,
          },
          {
            lat: 51.69857,
            lng: -0.19489,
          },
          {
            lat: 51.6984,
            lng: -0.19389,
          },
          {
            lat: 51.69737,
            lng: -0.19381,
          },
          {
            lat: 51.69719,
            lng: -0.19329,
          },
          {
            lat: 51.6967,
            lng: -0.19259,
          },
          {
            lat: 51.69667,
            lng: -0.19258,
          },
          {
            lat: 51.69613,
            lng: -0.1911,
          },
          {
            lat: 51.69581,
            lng: -0.19071,
          },
          {
            lat: 51.69568,
            lng: -0.19081,
          },
          {
            lat: 51.69516,
            lng: -0.19077,
          },
          {
            lat: 51.69459,
            lng: -0.19042,
          },
          {
            lat: 51.69407,
            lng: -0.18977,
          },
          {
            lat: 51.69404,
            lng: -0.18916,
          },
          {
            lat: 51.69444,
            lng: -0.18843,
          },
          {
            lat: 51.69408,
            lng: -0.18671,
          },
          {
            lat: 51.69358,
            lng: -0.18641,
          },
          {
            lat: 51.69372,
            lng: -0.18545,
          },
          {
            lat: 51.69354,
            lng: -0.18511,
          },
          {
            lat: 51.69355,
            lng: -0.18487,
          },
          {
            lat: 51.69334,
            lng: -0.18416,
          },
          {
            lat: 51.69356,
            lng: -0.18389,
          },
          {
            lat: 51.69306,
            lng: -0.18262,
          },
          {
            lat: 51.69353,
            lng: -0.18124,
          },
          {
            lat: 51.69322,
            lng: -0.18116,
          },
          {
            lat: 51.69254,
            lng: -0.18063,
          },
          {
            lat: 51.69251,
            lng: -0.17899,
          },
          {
            lat: 51.69216,
            lng: -0.17885,
          },
          {
            lat: 51.69208,
            lng: -0.17869,
          },
          {
            lat: 51.69187,
            lng: -0.17864,
          },
          {
            lat: 51.69146,
            lng: -0.17807,
          },
          {
            lat: 51.69131,
            lng: -0.17813,
          },
          {
            lat: 51.691,
            lng: -0.17769,
          },
          {
            lat: 51.69096,
            lng: -0.17768,
          },
          {
            lat: 51.69064,
            lng: -0.17688,
          },
          {
            lat: 51.69026,
            lng: -0.17705,
          },
          {
            lat: 51.68995,
            lng: -0.17627,
          },
          {
            lat: 51.6894,
            lng: -0.17648,
          },
          {
            lat: 51.68928,
            lng: -0.17558,
          },
          {
            lat: 51.68908,
            lng: -0.17537,
          },
          {
            lat: 51.68943,
            lng: -0.17432,
          },
          {
            lat: 51.689,
            lng: -0.17418,
          },
          {
            lat: 51.68847,
            lng: -0.17486,
          },
          {
            lat: 51.68835,
            lng: -0.17478,
          },
          {
            lat: 51.68828,
            lng: -0.17446,
          },
          {
            lat: 51.68849,
            lng: -0.1734,
          },
          {
            lat: 51.68799,
            lng: -0.17306,
          },
          {
            lat: 51.6878,
            lng: -0.17329,
          },
          {
            lat: 51.68468,
            lng: -0.17294,
          },
          {
            lat: 51.68452,
            lng: -0.17312,
          },
          {
            lat: 51.68373,
            lng: -0.1733,
          },
          {
            lat: 51.67933,
            lng: -0.17359,
          },
          {
            lat: 51.67924,
            lng: -0.17433,
          },
          {
            lat: 51.67945,
            lng: -0.17555,
          },
          {
            lat: 51.67951,
            lng: -0.17685,
          },
          {
            lat: 51.67966,
            lng: -0.17784,
          },
          {
            lat: 51.68058,
            lng: -0.18052,
          },
          {
            lat: 51.68264,
            lng: -0.18405,
          },
          {
            lat: 51.68504,
            lng: -0.18612,
          },
          {
            lat: 51.68534,
            lng: -0.19139,
          },
          {
            lat: 51.68592,
            lng: -0.19197,
          },
          {
            lat: 51.68659,
            lng: -0.19406,
          },
          {
            lat: 51.68689,
            lng: -0.19796,
          },
          {
            lat: 51.68496,
            lng: -0.2054,
          },
          {
            lat: 51.68551,
            lng: -0.20791,
          },
          {
            lat: 51.68549,
            lng: -0.20889,
          },
          {
            lat: 51.68564,
            lng: -0.21098,
          },
          {
            lat: 51.68605,
            lng: -0.21235,
          },
        ],
        postcode: 'EN6 2',
        panelContentUrl: '',
        powerCutType: PowerCutType.RESTORED_INCIDENT,
      },
    ] as Marker[],
    fullPostcodeData: [
      'EN65ES',
      'EN62RJ',
      'EN62RT',
      'EN65DZ',
      'EN65EB',
      'EN65ED',
      'EN65EH',
      'EN65EP',
      'EN65ER',
      'EN65QS',
      'UK',
    ],
    pinLatitude: null,
    pinLongitude: null,
    incidentCategoryCustomerFriendlyDescription:
      'A fault occurred on an underground electricity cable affecting the local area.',
    incidentTypeTBCEstimatedFriendlyDescription: 'To be confirmed',
    serviceDown: false,
    serviceDownUrl: null,
    scope: null,
    postcode: 'EN6 5',
    coordinates: {
      'EN6 5': [
        {
          lat: 51.70414,
          lng: -0.16816,
        },
        {
          lat: 51.70261,
          lng: -0.16779,
        },
        {
          lat: 51.70195,
          lng: -0.16728,
        },
        {
          lat: 51.70104,
          lng: -0.16549,
        },
        {
          lat: 51.70097,
          lng: -0.16506,
        },
        {
          lat: 51.70015,
          lng: -0.16512,
        },
        {
          lat: 51.69979,
          lng: -0.16499,
        },
        {
          lat: 51.6995,
          lng: -0.1643,
        },
        {
          lat: 51.69949,
          lng: -0.1643,
        },
        {
          lat: 51.69917,
          lng: -0.16476,
        },
        {
          lat: 51.69857,
          lng: -0.1647,
        },
        {
          lat: 51.69829,
          lng: -0.1628,
        },
        {
          lat: 51.69836,
          lng: -0.16248,
        },
        {
          lat: 51.69655,
          lng: -0.15901,
        },
        {
          lat: 51.69478,
          lng: -0.15947,
        },
        {
          lat: 51.69147,
          lng: -0.15641,
        },
        {
          lat: 51.69062,
          lng: -0.15548,
        },
        {
          lat: 51.69031,
          lng: -0.15526,
        },
        {
          lat: 51.68857,
          lng: -0.14894,
        },
        {
          lat: 51.68709,
          lng: -0.15016,
        },
        {
          lat: 51.67759,
          lng: -0.15103,
        },
        {
          lat: 51.6797,
          lng: -0.16161,
        },
        {
          lat: 51.67949,
          lng: -0.164,
        },
        {
          lat: 51.67828,
          lng: -0.16667,
        },
        {
          lat: 51.67845,
          lng: -0.16865,
        },
        {
          lat: 51.67933,
          lng: -0.17359,
        },
        {
          lat: 51.68373,
          lng: -0.1733,
        },
        {
          lat: 51.68452,
          lng: -0.17312,
        },
        {
          lat: 51.68468,
          lng: -0.17294,
        },
        {
          lat: 51.6878,
          lng: -0.17329,
        },
        {
          lat: 51.68799,
          lng: -0.17306,
        },
        {
          lat: 51.68849,
          lng: -0.1734,
        },
        {
          lat: 51.68828,
          lng: -0.17446,
        },
        {
          lat: 51.68835,
          lng: -0.17478,
        },
        {
          lat: 51.68847,
          lng: -0.17486,
        },
        {
          lat: 51.689,
          lng: -0.17418,
        },
        {
          lat: 51.68943,
          lng: -0.17432,
        },
        {
          lat: 51.68908,
          lng: -0.17537,
        },
        {
          lat: 51.68928,
          lng: -0.17558,
        },
        {
          lat: 51.6894,
          lng: -0.17648,
        },
        {
          lat: 51.68995,
          lng: -0.17627,
        },
        {
          lat: 51.69026,
          lng: -0.17705,
        },
        {
          lat: 51.69064,
          lng: -0.17688,
        },
        {
          lat: 51.69096,
          lng: -0.17768,
        },
        {
          lat: 51.691,
          lng: -0.17769,
        },
        {
          lat: 51.69131,
          lng: -0.17813,
        },
        {
          lat: 51.69146,
          lng: -0.17807,
        },
        {
          lat: 51.69187,
          lng: -0.17864,
        },
        {
          lat: 51.69208,
          lng: -0.17869,
        },
        {
          lat: 51.69216,
          lng: -0.17885,
        },
        {
          lat: 51.69251,
          lng: -0.17899,
        },
        {
          lat: 51.69254,
          lng: -0.18063,
        },
        {
          lat: 51.69322,
          lng: -0.18116,
        },
        {
          lat: 51.69353,
          lng: -0.18124,
        },
        {
          lat: 51.69365,
          lng: -0.18118,
        },
        {
          lat: 51.69401,
          lng: -0.18049,
        },
        {
          lat: 51.69402,
          lng: -0.18049,
        },
        {
          lat: 51.69493,
          lng: -0.17854,
        },
        {
          lat: 51.69496,
          lng: -0.17815,
        },
        {
          lat: 51.69505,
          lng: -0.17788,
        },
        {
          lat: 51.69611,
          lng: -0.17796,
        },
        {
          lat: 51.69693,
          lng: -0.17891,
        },
        {
          lat: 51.69719,
          lng: -0.17878,
        },
        {
          lat: 51.698,
          lng: -0.17907,
        },
        {
          lat: 51.69855,
          lng: -0.17886,
        },
        {
          lat: 51.69855,
          lng: -0.17885,
        },
        {
          lat: 51.69937,
          lng: -0.17703,
        },
        {
          lat: 51.69864,
          lng: -0.1755,
        },
        {
          lat: 51.69864,
          lng: -0.17547,
        },
        {
          lat: 51.69888,
          lng: -0.17521,
        },
        {
          lat: 51.69905,
          lng: -0.17416,
        },
        {
          lat: 51.6995,
          lng: -0.17338,
        },
        {
          lat: 51.69967,
          lng: -0.17357,
        },
        {
          lat: 51.69999,
          lng: -0.17374,
        },
        {
          lat: 51.70027,
          lng: -0.17381,
        },
        {
          lat: 51.70103,
          lng: -0.17378,
        },
        {
          lat: 51.70176,
          lng: -0.17275,
        },
        {
          lat: 51.70181,
          lng: -0.17261,
        },
        {
          lat: 51.7025,
          lng: -0.17206,
        },
        {
          lat: 51.70351,
          lng: -0.17013,
        },
        {
          lat: 51.70367,
          lng: -0.16973,
        },
        {
          lat: 51.70414,
          lng: -0.16816,
        },
      ],
      'EN6 2': [
        {
          lat: 51.68605,
          lng: -0.21235,
        },
        {
          lat: 51.68798,
          lng: -0.21428,
        },
        {
          lat: 51.68851,
          lng: -0.21569,
        },
        {
          lat: 51.69652,
          lng: -0.21649,
        },
        {
          lat: 51.69572,
          lng: -0.21351,
        },
        {
          lat: 51.69487,
          lng: -0.21264,
        },
        {
          lat: 51.69196,
          lng: -0.21194,
        },
        {
          lat: 51.6908,
          lng: -0.21203,
        },
        {
          lat: 51.69081,
          lng: -0.21201,
        },
        {
          lat: 51.69188,
          lng: -0.20892,
        },
        {
          lat: 51.69209,
          lng: -0.20747,
        },
        {
          lat: 51.69296,
          lng: -0.20659,
        },
        {
          lat: 51.69289,
          lng: -0.20591,
        },
        {
          lat: 51.69373,
          lng: -0.20547,
        },
        {
          lat: 51.69366,
          lng: -0.20472,
        },
        {
          lat: 51.69373,
          lng: -0.20432,
        },
        {
          lat: 51.69452,
          lng: -0.20456,
        },
        {
          lat: 51.69479,
          lng: -0.20501,
        },
        {
          lat: 51.69507,
          lng: -0.20508,
        },
        {
          lat: 51.69553,
          lng: -0.20388,
        },
        {
          lat: 51.69635,
          lng: -0.20424,
        },
        {
          lat: 51.69659,
          lng: -0.20359,
        },
        {
          lat: 51.69747,
          lng: -0.2038,
        },
        {
          lat: 51.69751,
          lng: -0.20386,
        },
        {
          lat: 51.69827,
          lng: -0.20304,
        },
        {
          lat: 51.69827,
          lng: -0.203,
        },
        {
          lat: 51.6985,
          lng: -0.20264,
        },
        {
          lat: 51.69869,
          lng: -0.20141,
        },
        {
          lat: 51.69852,
          lng: -0.20078,
        },
        {
          lat: 51.6991,
          lng: -0.19971,
        },
        {
          lat: 51.70018,
          lng: -0.2006,
        },
        {
          lat: 51.70022,
          lng: -0.20061,
        },
        {
          lat: 51.70051,
          lng: -0.20043,
        },
        {
          lat: 51.70091,
          lng: -0.19971,
        },
        {
          lat: 51.70115,
          lng: -0.19971,
        },
        {
          lat: 51.7031,
          lng: -0.19581,
        },
        {
          lat: 51.70287,
          lng: -0.19544,
        },
        {
          lat: 51.70256,
          lng: -0.1948,
        },
        {
          lat: 51.70236,
          lng: -0.19469,
        },
        {
          lat: 51.70111,
          lng: -0.19495,
        },
        {
          lat: 51.70077,
          lng: -0.19512,
        },
        {
          lat: 51.70058,
          lng: -0.19501,
        },
        {
          lat: 51.6987,
          lng: -0.19511,
        },
        {
          lat: 51.69857,
          lng: -0.19489,
        },
        {
          lat: 51.6984,
          lng: -0.19389,
        },
        {
          lat: 51.69737,
          lng: -0.19381,
        },
        {
          lat: 51.69719,
          lng: -0.19329,
        },
        {
          lat: 51.6967,
          lng: -0.19259,
        },
        {
          lat: 51.69667,
          lng: -0.19258,
        },
        {
          lat: 51.69613,
          lng: -0.1911,
        },
        {
          lat: 51.69581,
          lng: -0.19071,
        },
        {
          lat: 51.69568,
          lng: -0.19081,
        },
        {
          lat: 51.69516,
          lng: -0.19077,
        },
        {
          lat: 51.69459,
          lng: -0.19042,
        },
        {
          lat: 51.69407,
          lng: -0.18977,
        },
        {
          lat: 51.69404,
          lng: -0.18916,
        },
        {
          lat: 51.69444,
          lng: -0.18843,
        },
        {
          lat: 51.69408,
          lng: -0.18671,
        },
        {
          lat: 51.69358,
          lng: -0.18641,
        },
        {
          lat: 51.69372,
          lng: -0.18545,
        },
        {
          lat: 51.69354,
          lng: -0.18511,
        },
        {
          lat: 51.69355,
          lng: -0.18487,
        },
        {
          lat: 51.69334,
          lng: -0.18416,
        },
        {
          lat: 51.69356,
          lng: -0.18389,
        },
        {
          lat: 51.69306,
          lng: -0.18262,
        },
        {
          lat: 51.69353,
          lng: -0.18124,
        },
        {
          lat: 51.69322,
          lng: -0.18116,
        },
        {
          lat: 51.69254,
          lng: -0.18063,
        },
        {
          lat: 51.69251,
          lng: -0.17899,
        },
        {
          lat: 51.69216,
          lng: -0.17885,
        },
        {
          lat: 51.69208,
          lng: -0.17869,
        },
        {
          lat: 51.69187,
          lng: -0.17864,
        },
        {
          lat: 51.69146,
          lng: -0.17807,
        },
        {
          lat: 51.69131,
          lng: -0.17813,
        },
        {
          lat: 51.691,
          lng: -0.17769,
        },
        {
          lat: 51.69096,
          lng: -0.17768,
        },
        {
          lat: 51.69064,
          lng: -0.17688,
        },
        {
          lat: 51.69026,
          lng: -0.17705,
        },
        {
          lat: 51.68995,
          lng: -0.17627,
        },
        {
          lat: 51.6894,
          lng: -0.17648,
        },
        {
          lat: 51.68928,
          lng: -0.17558,
        },
        {
          lat: 51.68908,
          lng: -0.17537,
        },
        {
          lat: 51.68943,
          lng: -0.17432,
        },
        {
          lat: 51.689,
          lng: -0.17418,
        },
        {
          lat: 51.68847,
          lng: -0.17486,
        },
        {
          lat: 51.68835,
          lng: -0.17478,
        },
        {
          lat: 51.68828,
          lng: -0.17446,
        },
        {
          lat: 51.68849,
          lng: -0.1734,
        },
        {
          lat: 51.68799,
          lng: -0.17306,
        },
        {
          lat: 51.6878,
          lng: -0.17329,
        },
        {
          lat: 51.68468,
          lng: -0.17294,
        },
        {
          lat: 51.68452,
          lng: -0.17312,
        },
        {
          lat: 51.68373,
          lng: -0.1733,
        },
        {
          lat: 51.67933,
          lng: -0.17359,
        },
        {
          lat: 51.67924,
          lng: -0.17433,
        },
        {
          lat: 51.67945,
          lng: -0.17555,
        },
        {
          lat: 51.67951,
          lng: -0.17685,
        },
        {
          lat: 51.67966,
          lng: -0.17784,
        },
        {
          lat: 51.68058,
          lng: -0.18052,
        },
        {
          lat: 51.68264,
          lng: -0.18405,
        },
        {
          lat: 51.68504,
          lng: -0.18612,
        },
        {
          lat: 51.68534,
          lng: -0.19139,
        },
        {
          lat: 51.68592,
          lng: -0.19197,
        },
        {
          lat: 51.68659,
          lng: -0.19406,
        },
        {
          lat: 51.68689,
          lng: -0.19796,
        },
        {
          lat: 51.68496,
          lng: -0.2054,
        },
        {
          lat: 51.68551,
          lng: -0.20791,
        },
        {
          lat: 51.68549,
          lng: -0.20889,
        },
        {
          lat: 51.68564,
          lng: -0.21098,
        },
        {
          lat: 51.68605,
          lng: -0.21235,
        },
      ],
    },
  },
}
