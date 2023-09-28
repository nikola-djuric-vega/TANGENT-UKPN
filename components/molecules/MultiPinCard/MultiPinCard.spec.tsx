import { render } from '@testing-library/react'
import MultiPinCard from './MultiPinCard'
import React from 'react'
import {
  IncidentContentPlanned,
  IncidentContentRestored,
  IncidentContentUnplanned,
  PowerCutType,
} from '_types/local/incidents'
import { StepName } from '_types/local/step'

const mockSetIncidentState = jest.fn()

const mockIncident: IncidentContentRestored = {
  incidentReference: 'INCD-345832-Z',
  panelContentUrl: '/power-cut/map/power-back-on?incidentId=INCD-345832-Z',
  steps: [
    {
      active: true,
      date: '2022-12-13T09:20:59Z',
      message:
        "Update at 09:20 - Thanks for your patience today. Our engineers have now investigated the overhead cable that was on the ground, and have deemed it safe to restore power back to all 1264 properties in the Norwich, NR16 2 and surrounding area. We're very sorry we had to turn your power off with so little warning. We usually provide much more notice if we need to interrupt power, but in a situation like this our first priority is the safety of the public and our staff.\n\nWe know that being without power can be especially difficult, so we're sorry for the outage. Please rest assured our staff will continue to work around the clock to keep the lights on.\n\nIf your power is still off or if you have any questions, call our team on 08003163105.",
      name: null,
    },
    {
      active: false,
      date: null,
      message:
        '<p>We became aware of this power cut at 08:00. We’re sorry for any disruption this may have caused you. We didn’t know in advance there would be a power cut, but now that we know, our teams will do everything they can to get your power back quickly. Engineers in our control room have switched some customers power back on in your area. To get everyone’s power back on we may need to attend to investigate and make repairs. We’ll continue to update you until everyone’s power is back on.</p>',
      name: StepName.RESTORING_CUSTOMERS_AUTO,
    },
    {
      active: false,
      date: '2022-12-13T08:33:21Z',
      message:
        '<p>We have engineers on their way. As this is affecting your area, they will not need to attend your property. Rest assured once they arrive, they’ll work as quickly as is safely possible to get your power back on.</p>',
      name: StepName.ENGINEERS_ON_THEIR_WAY,
    },
    {
      active: false,
      date: '2022-12-13T08:34:28Z',
      message:
        '<p>Engineers are now on site, carrying out investigations into the fault. Once they have completed their assessment, they will carry out repairs.</p>',
      name: StepName.ENGINEERS_INVESTIGATING_AND_FIXING,
    },
    {
      active: true,
      date: '2022-12-13T09:14:44Z',
      message:
        '<p>All power in the area should be back on. We’re really sorry for any disruption this caused.</p>',
      name: StepName.POWER_RESTORED,
    },
  ],
  powerCutType: PowerCutType.RESTORED_INCIDENT,
  ukpnIncident: {
    incidentId: 'Z000546e8INCD',
    incidentReference: 'INCD-345832-Z',
    incidentCategory: '118',
    incidentType: 3,
    incidentPriority: 10,
    statusId: 5,
    creationDateTime: '2022-12-13T08:00:33Z',
    restoredDateTime: '2022-12-13T09:14:44Z',
    estimatedRestorationDate: '2022-12-13T09:00:00Z',
    plannedDate: null,
    receivedDate: '2022-12-13T08:00:24Z',
    noCustomerAffected: 0,
    noPlannedCustomers: 0,
    noCallsReported: 5,
    resource: {
      id: null,
      name: 'TAYLOR (R5)',
      reference: null,
      estimatedTimeOfArrival: '2022-12-13T09:30:00Z',
      notificationDetails: null,
      notificationMethod: null,
      dispatchedDate: '2022-12-13T08:33:21Z',
      arrivalDate: '2022-12-13T08:34:28Z',
      statusId: 5,
    },
    affectedCustomers: [],
    logs: [
      {
        actualEventTime: '2022-12-13T09:19:00Z',
        categoryId: 263,
        typeId: 0,
        comment:
          "Update at 09:20 - Thanks for your patience today. Our engineers have now investigated the overhead cable that was on the ground, and have deemed it safe to restore power back to all 1264 properties in the Norwich, NR16 2 and surrounding area. We're very sorry we had to turn your power off with so little warning. We usually provide much more notice if we need to interrupt power, but in a situation like this our first priority is the safety of the public and our staff.\n\nWe know that being without power can be especially difficult, so we're sorry for the outage. Please rest assured our staff will continue to work around the clock to keep the lights on.\n\nIf your power is still off or if you have any questions, call our team on 08003163105.",
        loggedTime: '2022-12-13T09:20:59Z',
      },
    ],
    postCodesAffected: [
      'IP22 2',
      'IP24 2',
      'N R',
      'NR11 7',
      'NR13 6',
      'NR16 2',
    ],
    postCodesRestored: [
      'IP222SL',
      'IP242RY',
      'NR117QY',
      'NR136AS',
      'NR16',
      'NR162BN',
      'NR162FE',
      'NR162GA',
      'NR162GB',
      'NR162GD',
      'NR162GE',
      'NR162GF',
      'NR162GG',
      'NR162JB',
      'NR162JD',
      'NR162JE',
      'NR162JG',
      'NR162LH',
      'NR162LJ',
      'NR162LL',
      'NR162LN',
      'NR162LT',
      'NR162LU',
      'NR162LW',
      'NR162LX',
      'NR162LZ',
      'NR162ND',
      'NR162NE',
      'NR162NF',
      'NR162NG',
      'NR162NH',
      'NR162NJ',
      'NR162NL',
      'NR162NN',
      'NR162NP',
      'NR162NQ',
      'NR162NR',
      'NR162NT',
      'NR162PL',
      'NR162PN',
      'NR162PP',
      'NR162PR',
      'NR162PS',
      'NR162PT',
      'NR162PU',
      'NR162PX',
      'NR162PY',
      'NR162PZ',
      'NR162QA',
      'NR162QB',
      'NR162QD',
      'NR162QE',
      'NR162QF',
      'NR162QG',
      'NR162QH',
      'NR162RF',
      'NR162SE',
      'NR162SF',
      'NR162SG',
      'NR162SH',
      'NR162SJ',
      'NR162SL',
      'NR162SZ',
      'NR162TD',
      'NR162TE',
      'NR162TF',
      'NR162TG',
      'NR162TJ',
      'NR162TN',
      'NR162TP',
      'NR162TQ',
      'NR162TR',
      'NR162TS',
      'NR162TT',
      'UK',
      'NR162AD',
      'NR162LY',
      'NR162NA',
      'NR162NB',
      'NR162SQ',
    ],
    postCodesPlanned: [
      'IP222SL',
      'IP242RY',
      'NR117QY',
      'NR136AS',
      'NR16',
      'NR162BN',
      'NR162FE',
      'NR162GA',
      'NR162GB',
      'NR162GD',
      'NR162GE',
      'NR162GF',
      'NR162GG',
      'NR162JB',
      'NR162JD',
      'NR162JE',
      'NR162JG',
      'NR162LH',
      'NR162LJ',
      'NR162LL',
      'NR162LN',
      'NR162LT',
      'NR162LU',
      'NR162LW',
      'NR162LX',
      'NR162LZ',
      'NR162ND',
      'NR162NE',
      'NR162NF',
      'NR162NG',
      'NR162NH',
      'NR162NJ',
      'NR162NL',
      'NR162NN',
      'NR162NP',
      'NR162NQ',
      'NR162NR',
      'NR162NT',
      'NR162PL',
      'NR162PN',
      'NR162PP',
      'NR162PR',
      'NR162PS',
      'NR162PT',
      'NR162PU',
      'NR162PX',
      'NR162PY',
      'NR162PZ',
      'NR162QA',
      'NR162QB',
      'NR162QD',
      'NR162QE',
      'NR162QF',
      'NR162QG',
      'NR162QH',
      'NR162RF',
      'NR162SE',
      'NR162SF',
      'NR162SG',
      'NR162SH',
      'NR162SJ',
      'NR162SL',
      'NR162SZ',
      'NR162TD',
      'NR162TE',
      'NR162TF',
      'NR162TG',
      'NR162TJ',
      'NR162TN',
      'NR162TP',
      'NR162TQ',
      'NR162TR',
      'NR162TS',
      'NR162TT',
      'UK',
      'NR162AD',
      'NR162LY',
      'NR162NA',
      'NR162NB',
      'NR162SQ',
    ],
    customersOnSupply: 1240,
    customersOffSupply: 0,
    timestamp: '0001-01-01T00:00:00',
    incidentTypeName: 'Restored',
    plannedIncidentReason:
      "We're carrying out planned work in your area. For our engineers to carry it out safely they need to turn the power off. We're doing this work as it's essential to provide reliable electricity supplies to your area. We're sorry for any inconvenience caused and thank you for your patience.",
    scope: null,
  },
  postcodesRemaining: ['IP22 2', 'IP24 2', 'N R', 'NR11 7', 'NR13 6', 'NR16 2'],
  postcodeData: [
    {
      panelContentUrl: '/power-cut/map/power-back-on?incidentId=INCD-345832-Z',
      incidentReference: 'INCD-345832-Z',
      powerCutType: PowerCutType.RESTORED_INCIDENT,
      center: { lat: 52.39587, lng: 0.98331 },
      coordinates: [
        { lat: 52.4178, lng: 0.88564 },
        { lat: 52.41783, lng: 0.88588 },
        { lat: 52.41429, lng: 0.90153 },
        { lat: 52.41243, lng: 0.90617 },
        { lat: 52.4119, lng: 0.90932 },
        { lat: 52.42378, lng: 0.92948 },
        { lat: 52.42377, lng: 0.9301 },
        { lat: 52.4147, lng: 0.94202 },
        { lat: 52.41354, lng: 0.94777 },
        { lat: 52.42261, lng: 0.95371 },
        { lat: 52.42493, lng: 0.95839 },
        { lat: 52.415, lng: 0.96843 },
        { lat: 52.41503, lng: 0.96873 },
        { lat: 52.42236, lng: 0.97989 },
        { lat: 52.41896, lng: 0.98423 },
        { lat: 52.41737, lng: 0.98988 },
        { lat: 52.41758, lng: 0.99914 },
        { lat: 52.41779, lng: 0.99945 },
        { lat: 52.41857, lng: 1.0014 },
        { lat: 52.41943, lng: 1.01142 },
        { lat: 52.41859, lng: 1.01496 },
        { lat: 52.41318, lng: 1.02147 },
        { lat: 52.41266, lng: 1.02289 },
        { lat: 52.41321, lng: 1.02489 },
        { lat: 52.41988, lng: 1.03409 },
        { lat: 52.42635, lng: 1.03843 },
        { lat: 52.4282, lng: 1.04118 },
        { lat: 52.42397, lng: 1.05051 },
        { lat: 52.42285, lng: 1.05483 },
        { lat: 52.42295, lng: 1.05706 },
        { lat: 52.4262, lng: 1.06409 },
        { lat: 52.43317, lng: 1.06568 },
        { lat: 52.43603, lng: 1.06362 },
        { lat: 52.442, lng: 1.07243 },
        { lat: 52.44814, lng: 1.06585 },
        { lat: 52.45203, lng: 1.07189 },
        { lat: 52.46041, lng: 1.0695 },
        { lat: 52.46072, lng: 1.0706 },
        { lat: 52.45552, lng: 1.08176 },
        { lat: 52.45758, lng: 1.08854 },
        { lat: 52.45732, lng: 1.08912 },
        { lat: 52.45476, lng: 1.09046 },
        { lat: 52.45346, lng: 1.092 },
        { lat: 52.44697, lng: 1.09182 },
        { lat: 52.4494, lng: 1.0979 },
        { lat: 52.44833, lng: 1.10693 },
        { lat: 52.44855, lng: 1.10764 },
        { lat: 52.44417, lng: 1.11482 },
        { lat: 52.4445, lng: 1.12111 },
        { lat: 52.43429, lng: 1.1284 },
        { lat: 52.43383, lng: 1.12756 },
        { lat: 52.43242, lng: 1.11289 },
        { lat: 52.42796, lng: 1.11066 },
        { lat: 52.42651, lng: 1.11064 },
        { lat: 52.42132, lng: 1.11668 },
        { lat: 52.41833, lng: 1.11359 },
        { lat: 52.41523, lng: 1.1079 },
        { lat: 52.40831, lng: 1.11455 },
        { lat: 52.40376, lng: 1.10549 },
        { lat: 52.40091, lng: 1.10291 },
        { lat: 52.40238, lng: 1.09502 },
        { lat: 52.4015, lng: 1.08656 },
        { lat: 52.39846, lng: 1.08428 },
        { lat: 52.39827, lng: 1.08106 },
        { lat: 52.39564, lng: 1.07579 },
        { lat: 52.39365, lng: 1.07496 },
        { lat: 52.39316, lng: 1.07523 },
        { lat: 52.39186, lng: 1.07627 },
        { lat: 52.3904, lng: 1.07363 },
        { lat: 52.38997, lng: 1.07326 },
        { lat: 52.39014, lng: 1.06836 },
        { lat: 52.38754, lng: 1.06564 },
        { lat: 52.38825, lng: 1.06248 },
        { lat: 52.38773, lng: 1.05938 },
        { lat: 52.38235, lng: 1.05887 },
        { lat: 52.3798, lng: 1.05634 },
        { lat: 52.38075, lng: 1.05162 },
        { lat: 52.37995, lng: 1.04416 },
        { lat: 52.37975, lng: 1.04346 },
        { lat: 52.38169, lng: 1.03716 },
        { lat: 52.38111, lng: 1.03101 },
        { lat: 52.37748, lng: 1.02468 },
        { lat: 52.37794, lng: 1.02265 },
        { lat: 52.37619, lng: 1.01028 },
        { lat: 52.37426, lng: 1.00708 },
        { lat: 52.37419, lng: 1.00525 },
        { lat: 52.37322, lng: 1.00228 },
        { lat: 52.3729, lng: 0.99707 },
        { lat: 52.37353, lng: 0.98933 },
        { lat: 52.37131, lng: 0.98799 },
        { lat: 52.36848, lng: 0.98424 },
        { lat: 52.36752, lng: 0.97977 },
        { lat: 52.37095, lng: 0.97057 },
        { lat: 52.36893, lng: 0.96719 },
        { lat: 52.36913, lng: 0.96519 },
        { lat: 52.37178, lng: 0.95743 },
        { lat: 52.37156, lng: 0.95539 },
        { lat: 52.37214, lng: 0.9524 },
        { lat: 52.374, lng: 0.95055 },
        { lat: 52.37425, lng: 0.95014 },
        { lat: 52.37564, lng: 0.94033 },
        { lat: 52.37559, lng: 0.94017 },
        { lat: 52.37045, lng: 0.93793 },
        { lat: 52.36915, lng: 0.93755 },
        { lat: 52.36813, lng: 0.93755 },
        { lat: 52.36306, lng: 0.93476 },
        { lat: 52.36197, lng: 0.9357 },
        { lat: 52.35668, lng: 0.93123 },
        { lat: 52.35325, lng: 0.92068 },
        { lat: 52.35262, lng: 0.91979 },
        { lat: 52.34682, lng: 0.92687 },
        { lat: 52.34113, lng: 0.92411 },
        { lat: 52.33826, lng: 0.92845 },
        { lat: 52.33822, lng: 0.93116 },
        { lat: 52.33608, lng: 0.93816 },
        { lat: 52.33588, lng: 0.93845 },
        { lat: 52.33046, lng: 0.93924 },
        { lat: 52.33004, lng: 0.93912 },
        { lat: 52.32929, lng: 0.93882 },
        { lat: 52.32846, lng: 0.93785 },
        { lat: 52.32415, lng: 0.93532 },
        { lat: 52.32314, lng: 0.93564 },
        { lat: 52.32296, lng: 0.93567 },
        { lat: 52.31954, lng: 0.91903 },
        { lat: 52.32303, lng: 0.91629 },
        { lat: 52.32465, lng: 0.90982 },
        { lat: 52.32538, lng: 0.90828 },
        { lat: 52.32811, lng: 0.90522 },
        { lat: 52.32971, lng: 0.90474 },
        { lat: 52.33246, lng: 0.90177 },
        { lat: 52.33258, lng: 0.9016 },
        { lat: 52.33375, lng: 0.89958 },
        { lat: 52.33428, lng: 0.89569 },
        { lat: 52.33437, lng: 0.89554 },
        { lat: 52.34305, lng: 0.88803 },
        { lat: 52.34531, lng: 0.89086 },
        { lat: 52.34649, lng: 0.89417 },
        { lat: 52.3495, lng: 0.8978 },
        { lat: 52.34993, lng: 0.89856 },
        { lat: 52.35418, lng: 0.90309 },
        { lat: 52.35488, lng: 0.90193 },
        { lat: 52.36688, lng: 0.89135 },
        { lat: 52.37201, lng: 0.89388 },
        { lat: 52.37318, lng: 0.89119 },
        { lat: 52.37326, lng: 0.88794 },
        { lat: 52.37458, lng: 0.8699 },
        { lat: 52.3861, lng: 0.86569 },
        { lat: 52.38996, lng: 0.85252 },
        { lat: 52.39922, lng: 0.85699 },
        { lat: 52.40047, lng: 0.86656 },
        { lat: 52.41122, lng: 0.88085 },
        { lat: 52.4165, lng: 0.88354 },
        { lat: 52.4178, lng: 0.88564 },
      ],
      postcode: 'IP22 2',
    },
    {
      panelContentUrl: '/power-cut/map/power-back-on?incidentId=INCD-345832-Z',
      incidentReference: 'INCD-345832-Z',
      powerCutType: PowerCutType.RESTORED_INCIDENT,
      center: { lat: 52.39061, lng: 0.7881 },
      coordinates: [
        { lat: 52.45054, lng: 0.79486 },
        { lat: 52.43693, lng: 0.81139 },
        { lat: 52.4339, lng: 0.8198 },
        { lat: 52.43416, lng: 0.8234 },
        { lat: 52.43491, lng: 0.831 },
        { lat: 52.43442, lng: 0.83728 },
        { lat: 52.4264, lng: 0.84665 },
        { lat: 52.42369, lng: 0.87579 },
        { lat: 52.4178, lng: 0.88564 },
        { lat: 52.4165, lng: 0.88354 },
        { lat: 52.41122, lng: 0.88085 },
        { lat: 52.40047, lng: 0.86656 },
        { lat: 52.39922, lng: 0.85699 },
        { lat: 52.38996, lng: 0.85252 },
        { lat: 52.38844, lng: 0.84833 },
        { lat: 52.38274, lng: 0.84501 },
        { lat: 52.38255, lng: 0.84474 },
        { lat: 52.36751, lng: 0.83913 },
        { lat: 52.36684, lng: 0.83817 },
        { lat: 52.36469, lng: 0.83134 },
        { lat: 52.36477, lng: 0.82441 },
        { lat: 52.35601, lng: 0.81767 },
        { lat: 52.35587, lng: 0.81741 },
        { lat: 52.3486, lng: 0.81069 },
        { lat: 52.34827, lng: 0.81057 },
        { lat: 52.34645, lng: 0.8077 },
        { lat: 52.34503, lng: 0.80493 },
        { lat: 52.34283, lng: 0.79559 },
        { lat: 52.34257, lng: 0.79394 },
        { lat: 52.34794, lng: 0.77892 },
        { lat: 52.34775, lng: 0.77686 },
        { lat: 52.34775, lng: 0.77151 },
        { lat: 52.33779, lng: 0.76226 },
        { lat: 52.34039, lng: 0.7413 },
        { lat: 52.33998, lng: 0.73617 },
        { lat: 52.34007, lng: 0.73584 },
        { lat: 52.34201, lng: 0.73543 },
        { lat: 52.35087, lng: 0.72974 },
        { lat: 52.35322, lng: 0.71498 },
        { lat: 52.35636, lng: 0.70755 },
        { lat: 52.35733, lng: 0.69441 },
        { lat: 52.35819, lng: 0.69342 },
        { lat: 52.37386, lng: 0.70126 },
        { lat: 52.37481, lng: 0.70238 },
        { lat: 52.37543, lng: 0.70329 },
        { lat: 52.37621, lng: 0.70554 },
        { lat: 52.39184, lng: 0.71217 },
        { lat: 52.39497, lng: 0.71738 },
        { lat: 52.39244, lng: 0.72843 },
        { lat: 52.39148, lng: 0.73167 },
        { lat: 52.39143, lng: 0.73182 },
        { lat: 52.39252, lng: 0.74447 },
        { lat: 52.39158, lng: 0.74997 },
        { lat: 52.39177, lng: 0.75129 },
        { lat: 52.39308, lng: 0.75224 },
        { lat: 52.39931, lng: 0.75793 },
        { lat: 52.40171, lng: 0.75585 },
        { lat: 52.40377, lng: 0.75452 },
        { lat: 52.40389, lng: 0.75142 },
        { lat: 52.40455, lng: 0.75144 },
        { lat: 52.40471, lng: 0.75031 },
        { lat: 52.40543, lng: 0.75042 },
        { lat: 52.40593, lng: 0.75 },
        { lat: 52.40606, lng: 0.75007 },
        { lat: 52.40666, lng: 0.74994 },
        { lat: 52.40809, lng: 0.75345 },
        { lat: 52.40875, lng: 0.75188 },
        { lat: 52.40997, lng: 0.75149 },
        { lat: 52.40999, lng: 0.75145 },
        { lat: 52.41017, lng: 0.75105 },
        { lat: 52.41065, lng: 0.74928 },
        { lat: 52.41066, lng: 0.74927 },
        { lat: 52.41077, lng: 0.74905 },
        { lat: 52.41082, lng: 0.74871 },
        { lat: 52.41205, lng: 0.74737 },
        { lat: 52.41218, lng: 0.74742 },
        { lat: 52.41254, lng: 0.74717 },
        { lat: 52.41278, lng: 0.7468 },
        { lat: 52.41343, lng: 0.7466 },
        { lat: 52.41351, lng: 0.74655 },
        { lat: 52.41354, lng: 0.74658 },
        { lat: 52.41374, lng: 0.74676 },
        { lat: 52.4143, lng: 0.74691 },
        { lat: 52.41463, lng: 0.7475 },
        { lat: 52.41465, lng: 0.74758 },
        { lat: 52.41466, lng: 0.74811 },
        { lat: 52.41476, lng: 0.74833 },
        { lat: 52.41534, lng: 0.74855 },
        { lat: 52.4159, lng: 0.74844 },
        { lat: 52.41592, lng: 0.74847 },
        { lat: 52.416, lng: 0.7495 },
        { lat: 52.41678, lng: 0.75074 },
        { lat: 52.41691, lng: 0.75141 },
        { lat: 52.41693, lng: 0.75141 },
        { lat: 52.41771, lng: 0.75207 },
        { lat: 52.41788, lng: 0.75198 },
        { lat: 52.41811, lng: 0.75138 },
        { lat: 52.41829, lng: 0.74983 },
        { lat: 52.4185, lng: 0.74962 },
        { lat: 52.41891, lng: 0.74957 },
        { lat: 52.41936, lng: 0.74977 },
        { lat: 52.41948, lng: 0.75037 },
        { lat: 52.41953, lng: 0.75057 },
        { lat: 52.41949, lng: 0.75106 },
        { lat: 52.41912, lng: 0.75215 },
        { lat: 52.41914, lng: 0.75307 },
        { lat: 52.41963, lng: 0.75452 },
        { lat: 52.42035, lng: 0.75443 },
        { lat: 52.42049, lng: 0.75452 },
        { lat: 52.42104, lng: 0.75567 },
        { lat: 52.42114, lng: 0.7568 },
        { lat: 52.42159, lng: 0.75747 },
        { lat: 52.42162, lng: 0.75818 },
        { lat: 52.42229, lng: 0.75909 },
        { lat: 52.42254, lng: 0.76016 },
        { lat: 52.42314, lng: 0.76014 },
        { lat: 52.42332, lng: 0.76036 },
        { lat: 52.42347, lng: 0.76134 },
        { lat: 52.4241, lng: 0.76195 },
        { lat: 52.42411, lng: 0.7621 },
        { lat: 52.42484, lng: 0.76273 },
        { lat: 52.42498, lng: 0.76329 },
        { lat: 52.42558, lng: 0.76365 },
        { lat: 52.42677, lng: 0.76384 },
        { lat: 52.4334, lng: 0.76759 },
        { lat: 52.4337, lng: 0.76735 },
        { lat: 52.43635, lng: 0.76723 },
        { lat: 52.43878, lng: 0.7708 },
        { lat: 52.44552, lng: 0.77965 },
        { lat: 52.45272, lng: 0.79023 },
        { lat: 52.45054, lng: 0.79486 },
      ],
      postcode: 'IP24 2',
    },
    {
      panelContentUrl: '/power-cut/map/power-back-on?incidentId=INCD-345832-Z',
      incidentReference: 'INCD-345832-Z',
      powerCutType: PowerCutType.RESTORED_INCIDENT,
      center: { lat: 52.85035, lng: 1.23139 },
      coordinates: [
        { lat: 52.83242, lng: 1.11187 },
        { lat: 52.83649, lng: 1.10867 },
        { lat: 52.83735, lng: 1.11004 },
        { lat: 52.84724, lng: 1.11242 },
        { lat: 52.8469, lng: 1.12401 },
        { lat: 52.84565, lng: 1.12485 },
        { lat: 52.84055, lng: 1.13372 },
        { lat: 52.83898, lng: 1.1405 },
        { lat: 52.83891, lng: 1.14323 },
        { lat: 52.84449, lng: 1.15264 },
        { lat: 52.84875, lng: 1.15188 },
        { lat: 52.85721, lng: 1.13906 },
        { lat: 52.86355, lng: 1.14879 },
        { lat: 52.86594, lng: 1.14814 },
        { lat: 52.87246, lng: 1.14042 },
        { lat: 52.87801, lng: 1.14851 },
        { lat: 52.87796, lng: 1.15331 },
        { lat: 52.88165, lng: 1.15815 },
        { lat: 52.88184, lng: 1.1603 },
        { lat: 52.87996, lng: 1.17045 },
        { lat: 52.87788, lng: 1.17338 },
        { lat: 52.87791, lng: 1.17416 },
        { lat: 52.88412, lng: 1.18498 },
        { lat: 52.88703, lng: 1.18267 },
        { lat: 52.89579, lng: 1.18507 },
        { lat: 52.89568, lng: 1.18587 },
        { lat: 52.89584, lng: 1.19224 },
        { lat: 52.89751, lng: 1.20091 },
        { lat: 52.89451, lng: 1.20729 },
        { lat: 52.8922, lng: 1.21018 },
        { lat: 52.892, lng: 1.21092 },
        { lat: 52.89247, lng: 1.21314 },
        { lat: 52.89337, lng: 1.22326 },
        { lat: 52.89336, lng: 1.2233 },
        { lat: 52.8923, lng: 1.22573 },
        { lat: 52.8895, lng: 1.22712 },
        { lat: 52.88888, lng: 1.22692 },
        { lat: 52.88288, lng: 1.22727 },
        { lat: 52.8808, lng: 1.22857 },
        { lat: 52.88065, lng: 1.22982 },
        { lat: 52.88252, lng: 1.24105 },
        { lat: 52.87969, lng: 1.24646 },
        { lat: 52.8783, lng: 1.24838 },
        { lat: 52.87847, lng: 1.25474 },
        { lat: 52.8792, lng: 1.25831 },
        { lat: 52.8801, lng: 1.26653 },
        { lat: 52.87788, lng: 1.27626 },
        { lat: 52.87674, lng: 1.277 },
        { lat: 52.87561, lng: 1.27752 },
        { lat: 52.87177, lng: 1.30225 },
        { lat: 52.86896, lng: 1.3036 },
        { lat: 52.86579, lng: 1.30312 },
        { lat: 52.86238, lng: 1.31211 },
        { lat: 52.86286, lng: 1.32167 },
        { lat: 52.85977, lng: 1.32447 },
        { lat: 52.85281, lng: 1.32341 },
        { lat: 52.85009, lng: 1.33169 },
        { lat: 52.83879, lng: 1.33087 },
        { lat: 52.83575, lng: 1.34031 },
        { lat: 52.83463, lng: 1.34123 },
        { lat: 52.82641, lng: 1.33595 },
        { lat: 52.82439, lng: 1.32783 },
        { lat: 52.82476, lng: 1.3248 },
        { lat: 52.82115, lng: 1.32182 },
        { lat: 52.81993, lng: 1.31207 },
        { lat: 52.82052, lng: 1.31085 },
        { lat: 52.81862, lng: 1.30603 },
        { lat: 52.81731, lng: 1.30497 },
        { lat: 52.81517, lng: 1.3134 },
        { lat: 52.81176, lng: 1.31261 },
        { lat: 52.81106, lng: 1.3105 },
        { lat: 52.80674, lng: 1.30732 },
        { lat: 52.80666, lng: 1.30524 },
        { lat: 52.80348, lng: 1.298 },
        { lat: 52.80589, lng: 1.28737 },
        { lat: 52.80638, lng: 1.28701 },
        { lat: 52.80724, lng: 1.28467 },
        { lat: 52.80729, lng: 1.28327 },
        { lat: 52.8143, lng: 1.27663 },
        { lat: 52.81309, lng: 1.26882 },
        { lat: 52.81216, lng: 1.26665 },
        { lat: 52.81318, lng: 1.26184 },
        { lat: 52.81527, lng: 1.26156 },
        { lat: 52.82, lng: 1.26224 },
        { lat: 52.82612, lng: 1.26725 },
        { lat: 52.82676, lng: 1.26988 },
        { lat: 52.82709, lng: 1.27291 },
        { lat: 52.8382, lng: 1.26686 },
        { lat: 52.83878, lng: 1.26444 },
        { lat: 52.83586, lng: 1.26 },
        { lat: 52.8348, lng: 1.25619 },
        { lat: 52.82904, lng: 1.25458 },
        { lat: 52.82988, lng: 1.24633 },
        { lat: 52.8295, lng: 1.24548 },
        { lat: 52.82883, lng: 1.23555 },
        { lat: 52.82685, lng: 1.23242 },
        { lat: 52.82963, lng: 1.22062 },
        { lat: 52.83072, lng: 1.21984 },
        { lat: 52.82791, lng: 1.20114 },
        { lat: 52.82597, lng: 1.2022 },
        { lat: 52.81927, lng: 1.19893 },
        { lat: 52.81955, lng: 1.19301 },
        { lat: 52.82013, lng: 1.18897 },
        { lat: 52.823, lng: 1.18622 },
        { lat: 52.82374, lng: 1.18277 },
        { lat: 52.82697, lng: 1.18116 },
        { lat: 52.83177, lng: 1.1747 },
        { lat: 52.83254, lng: 1.17315 },
        { lat: 52.83061, lng: 1.16641 },
        { lat: 52.82171, lng: 1.1737 },
        { lat: 52.81906, lng: 1.1712 },
        { lat: 52.81771, lng: 1.16081 },
        { lat: 52.8169, lng: 1.15848 },
        { lat: 52.81688, lng: 1.15831 },
        { lat: 52.8239, lng: 1.15365 },
        { lat: 52.82759, lng: 1.15005 },
        { lat: 52.82697, lng: 1.14885 },
        { lat: 52.82446, lng: 1.14583 },
        { lat: 52.82414, lng: 1.13763 },
        { lat: 52.82433, lng: 1.13766 },
        { lat: 52.82656, lng: 1.13904 },
        { lat: 52.82749, lng: 1.13747 },
        { lat: 52.82852, lng: 1.1381 },
        { lat: 52.82921, lng: 1.13739 },
        { lat: 52.83011, lng: 1.13561 },
        { lat: 52.83017, lng: 1.13527 },
        { lat: 52.83121, lng: 1.13374 },
        { lat: 52.83152, lng: 1.13341 },
        { lat: 52.83116, lng: 1.13106 },
        { lat: 52.8311, lng: 1.13042 },
        { lat: 52.83146, lng: 1.12954 },
        { lat: 52.83289, lng: 1.12531 },
        { lat: 52.83446, lng: 1.12527 },
        { lat: 52.83588, lng: 1.11997 },
        { lat: 52.83209, lng: 1.11279 },
        { lat: 52.83242, lng: 1.11187 },
      ],
      postcode: 'NR11 7',
    },
    {
      panelContentUrl: '/power-cut/map/power-back-on?incidentId=INCD-345832-Z',
      incidentReference: 'INCD-345832-Z',
      powerCutType: PowerCutType.RESTORED_INCIDENT,
      center: { lat: 52.6726, lng: 1.44925 },
      coordinates: [
        { lat: 52.68496, lng: 1.52657 },
        { lat: 52.68342, lng: 1.52767 },
        { lat: 52.6758, lng: 1.53715 },
        { lat: 52.67529, lng: 1.53993 },
        { lat: 52.66921, lng: 1.5522 },
        { lat: 52.66732, lng: 1.55851 },
        { lat: 52.66577, lng: 1.56508 },
        { lat: 52.66399, lng: 1.56793 },
        { lat: 52.66214, lng: 1.56813 },
        { lat: 52.65684, lng: 1.5631 },
        { lat: 52.6551, lng: 1.55994 },
        { lat: 52.64798, lng: 1.55666 },
        { lat: 52.6479, lng: 1.55643 },
        { lat: 52.64734, lng: 1.55407 },
        { lat: 52.64707, lng: 1.55153 },
        { lat: 52.64742, lng: 1.54866 },
        { lat: 52.64824, lng: 1.54454 },
        { lat: 52.64832, lng: 1.54425 },
        { lat: 52.65016, lng: 1.54174 },
        { lat: 52.64899, lng: 1.53635 },
        { lat: 52.64564, lng: 1.52817 },
        { lat: 52.64591, lng: 1.52691 },
        { lat: 52.64371, lng: 1.51866 },
        { lat: 52.64491, lng: 1.51484 },
        { lat: 52.65115, lng: 1.51134 },
        { lat: 52.65351, lng: 1.50477 },
        { lat: 52.65297, lng: 1.49963 },
        { lat: 52.65086, lng: 1.49529 },
        { lat: 52.65084, lng: 1.49499 },
        { lat: 52.65104, lng: 1.4904 },
        { lat: 52.65135, lng: 1.48638 },
        { lat: 52.6523, lng: 1.48491 },
        { lat: 52.65563, lng: 1.48283 },
        { lat: 52.6561, lng: 1.48235 },
        { lat: 52.65732, lng: 1.48094 },
        { lat: 52.65913, lng: 1.47351 },
        { lat: 52.65722, lng: 1.46552 },
        { lat: 52.6638, lng: 1.45954 },
        { lat: 52.66443, lng: 1.45694 },
        { lat: 52.66403, lng: 1.45014 },
        { lat: 52.66422, lng: 1.44838 },
        { lat: 52.66333, lng: 1.44658 },
        { lat: 52.66255, lng: 1.44394 },
        { lat: 52.66451, lng: 1.42872 },
        { lat: 52.66788, lng: 1.42628 },
        { lat: 52.66668, lng: 1.42219 },
        { lat: 52.66485, lng: 1.4147 },
        { lat: 52.66453, lng: 1.40991 },
        { lat: 52.6641, lng: 1.40906 },
        { lat: 52.6649, lng: 1.39915 },
        { lat: 52.66386, lng: 1.39646 },
        { lat: 52.66102, lng: 1.39389 },
        { lat: 52.66039, lng: 1.39366 },
        { lat: 52.66033, lng: 1.39314 },
        { lat: 52.65988, lng: 1.39127 },
        { lat: 52.65908, lng: 1.38522 },
        { lat: 52.65851, lng: 1.38313 },
        { lat: 52.65606, lng: 1.3778 },
        { lat: 52.65705, lng: 1.37411 },
        { lat: 52.65583, lng: 1.37227 },
        { lat: 52.65523, lng: 1.3673 },
        { lat: 52.65523, lng: 1.36666 },
        { lat: 52.65437, lng: 1.36517 },
        { lat: 52.6527, lng: 1.36045 },
        { lat: 52.65235, lng: 1.35865 },
        { lat: 52.65115, lng: 1.35848 },
        { lat: 52.648, lng: 1.35638 },
        { lat: 52.64785, lng: 1.35579 },
        { lat: 52.65003, lng: 1.35106 },
        { lat: 52.65328, lng: 1.34776 },
        { lat: 52.65399, lng: 1.3474 },
        { lat: 52.65494, lng: 1.34834 },
        { lat: 52.66007, lng: 1.34488 },
        { lat: 52.66427, lng: 1.35162 },
        { lat: 52.66445, lng: 1.35164 },
        { lat: 52.66736, lng: 1.33605 },
        { lat: 52.66958, lng: 1.33331 },
        { lat: 52.67083, lng: 1.33669 },
        { lat: 52.67227, lng: 1.33921 },
        { lat: 52.67295, lng: 1.34294 },
        { lat: 52.68217, lng: 1.35083 },
        { lat: 52.68395, lng: 1.3503 },
        { lat: 52.68486, lng: 1.3493 },
        { lat: 52.68888, lng: 1.35172 },
        { lat: 52.69246, lng: 1.36006 },
        { lat: 52.69444, lng: 1.36434 },
        { lat: 52.69265, lng: 1.37048 },
        { lat: 52.69256, lng: 1.3789 },
        { lat: 52.69413, lng: 1.3816 },
        { lat: 52.69466, lng: 1.38604 },
        { lat: 52.6914, lng: 1.39825 },
        { lat: 52.69164, lng: 1.40069 },
        { lat: 52.69196, lng: 1.40109 },
        { lat: 52.69544, lng: 1.40192 },
        { lat: 52.6958, lng: 1.40246 },
        { lat: 52.69629, lng: 1.40371 },
        { lat: 52.69849, lng: 1.42091 },
        { lat: 52.69821, lng: 1.42328 },
        { lat: 52.69714, lng: 1.42444 },
        { lat: 52.69321, lng: 1.43646 },
        { lat: 52.69536, lng: 1.44375 },
        { lat: 52.69523, lng: 1.44469 },
        { lat: 52.6971, lng: 1.45803 },
        { lat: 52.69672, lng: 1.45947 },
        { lat: 52.69129, lng: 1.46715 },
        { lat: 52.68817, lng: 1.47046 },
        { lat: 52.68731, lng: 1.47329 },
        { lat: 52.68794, lng: 1.47573 },
        { lat: 52.68766, lng: 1.48742 },
        { lat: 52.68799, lng: 1.49105 },
        { lat: 52.68777, lng: 1.49448 },
        { lat: 52.68564, lng: 1.49909 },
        { lat: 52.68374, lng: 1.50552 },
        { lat: 52.68496, lng: 1.52657 },
      ],
      postcode: 'NR13 6',
    },
    {
      panelContentUrl: '/power-cut/map/power-back-on?incidentId=INCD-345832-Z',
      incidentReference: 'INCD-345832-Z',
      powerCutType: PowerCutType.RESTORED_INCIDENT,
      center: { lat: 52.44907, lng: 0.95295 },
      coordinates: [
        { lat: 52.4862, lng: 1.06784 },
        { lat: 52.48301, lng: 1.07287 },
        { lat: 52.47829, lng: 1.08782 },
        { lat: 52.4774, lng: 1.08789 },
        { lat: 52.47072, lng: 1.09315 },
        { lat: 52.46501, lng: 1.08375 },
        { lat: 52.46154, lng: 1.08762 },
        { lat: 52.45758, lng: 1.08854 },
        { lat: 52.45552, lng: 1.08176 },
        { lat: 52.46072, lng: 1.0706 },
        { lat: 52.46041, lng: 1.0695 },
        { lat: 52.45203, lng: 1.07189 },
        { lat: 52.44814, lng: 1.06585 },
        { lat: 52.442, lng: 1.07243 },
        { lat: 52.43603, lng: 1.06362 },
        { lat: 52.43317, lng: 1.06568 },
        { lat: 52.4262, lng: 1.06409 },
        { lat: 52.42295, lng: 1.05706 },
        { lat: 52.42285, lng: 1.05483 },
        { lat: 52.42397, lng: 1.05051 },
        { lat: 52.4282, lng: 1.04118 },
        { lat: 52.42635, lng: 1.03843 },
        { lat: 52.41988, lng: 1.03409 },
        { lat: 52.41321, lng: 1.02489 },
        { lat: 52.41266, lng: 1.02289 },
        { lat: 52.41318, lng: 1.02147 },
        { lat: 52.41859, lng: 1.01496 },
        { lat: 52.41943, lng: 1.01142 },
        { lat: 52.41857, lng: 1.0014 },
        { lat: 52.41779, lng: 0.99945 },
        { lat: 52.41758, lng: 0.99914 },
        { lat: 52.41737, lng: 0.98988 },
        { lat: 52.41896, lng: 0.98423 },
        { lat: 52.42236, lng: 0.97989 },
        { lat: 52.41503, lng: 0.96873 },
        { lat: 52.415, lng: 0.96843 },
        { lat: 52.42493, lng: 0.95839 },
        { lat: 52.42261, lng: 0.95371 },
        { lat: 52.41354, lng: 0.94777 },
        { lat: 52.4147, lng: 0.94202 },
        { lat: 52.42377, lng: 0.9301 },
        { lat: 52.42378, lng: 0.92948 },
        { lat: 52.4119, lng: 0.90932 },
        { lat: 52.41243, lng: 0.90617 },
        { lat: 52.41429, lng: 0.90153 },
        { lat: 52.41783, lng: 0.88588 },
        { lat: 52.4178, lng: 0.88564 },
        { lat: 52.42369, lng: 0.87579 },
        { lat: 52.4264, lng: 0.84665 },
        { lat: 52.43442, lng: 0.83728 },
        { lat: 52.43491, lng: 0.831 },
        { lat: 52.43416, lng: 0.8234 },
        { lat: 52.4339, lng: 0.8198 },
        { lat: 52.43693, lng: 0.81139 },
        { lat: 52.45054, lng: 0.79486 },
        { lat: 52.45778, lng: 0.82423 },
        { lat: 52.45527, lng: 0.83631 },
        { lat: 52.46195, lng: 0.85074 },
        { lat: 52.46192, lng: 0.85147 },
        { lat: 52.45988, lng: 0.85719 },
        { lat: 52.46072, lng: 0.868 },
        { lat: 52.46031, lng: 0.86972 },
        { lat: 52.46042, lng: 0.8817 },
        { lat: 52.47466, lng: 0.89024 },
        { lat: 52.47784, lng: 0.8875 },
        { lat: 52.48308, lng: 0.90131 },
        { lat: 52.47732, lng: 0.91534 },
        { lat: 52.47912, lng: 0.91982 },
        { lat: 52.47986, lng: 0.92071 },
        { lat: 52.48014, lng: 0.92879 },
        { lat: 52.48589, lng: 0.93586 },
        { lat: 52.48745, lng: 0.93396 },
        { lat: 52.49227, lng: 0.93966 },
        { lat: 52.49409, lng: 0.94033 },
        { lat: 52.50042, lng: 0.94979 },
        { lat: 52.49976, lng: 0.95312 },
        { lat: 52.49228, lng: 0.95581 },
        { lat: 52.48502, lng: 0.95302 },
        { lat: 52.4803, lng: 0.961 },
        { lat: 52.48136, lng: 0.96473 },
        { lat: 52.48477, lng: 0.96969 },
        { lat: 52.48977, lng: 0.97088 },
        { lat: 52.4921, lng: 0.97747 },
        { lat: 52.48874, lng: 0.98838 },
        { lat: 52.48357, lng: 0.98606 },
        { lat: 52.47824, lng: 0.98617 },
        { lat: 52.4774, lng: 0.9866 },
        { lat: 52.47509, lng: 0.99902 },
        { lat: 52.47385, lng: 1.0008 },
        { lat: 52.47055, lng: 1.00389 },
        { lat: 52.47014, lng: 1.00412 },
        { lat: 52.46439, lng: 1.00241 },
        { lat: 52.4612, lng: 1.02206 },
        { lat: 52.46575, lng: 1.02556 },
        { lat: 52.46651, lng: 1.03129 },
        { lat: 52.46578, lng: 1.03931 },
        { lat: 52.46552, lng: 1.04018 },
        { lat: 52.46617, lng: 1.04265 },
        { lat: 52.46839, lng: 1.04499 },
        { lat: 52.46819, lng: 1.05636 },
        { lat: 52.4686, lng: 1.05734 },
        { lat: 52.4691, lng: 1.05734 },
        { lat: 52.47354, lng: 1.06195 },
        { lat: 52.47719, lng: 1.05972 },
        { lat: 52.47847, lng: 1.06063 },
        { lat: 52.4862, lng: 1.06784 },
      ],
      postcode: 'NR16 2',
    },
  ],
  fullPostcodeData: [
    'IP222SL',
    'IP242RY',
    'NR117QY',
    'NR136AS',
    'NR16',
    'NR162BN',
    'NR162FE',
    'NR162GA',
    'NR162GB',
    'NR162GD',
    'NR162GE',
    'NR162GF',
    'NR162GG',
    'NR162JB',
    'NR162JD',
    'NR162JE',
    'NR162JG',
    'NR162LH',
    'NR162LJ',
    'NR162LL',
    'NR162LN',
    'NR162LT',
    'NR162LU',
    'NR162LW',
    'NR162LX',
    'NR162LZ',
    'NR162ND',
    'NR162NE',
    'NR162NF',
    'NR162NG',
    'NR162NH',
    'NR162NJ',
    'NR162NL',
    'NR162NN',
    'NR162NP',
    'NR162NQ',
    'NR162NR',
    'NR162NT',
    'NR162PL',
    'NR162PN',
    'NR162PP',
    'NR162PR',
    'NR162PS',
    'NR162PT',
    'NR162PU',
    'NR162PX',
    'NR162PY',
    'NR162PZ',
    'NR162QA',
    'NR162QB',
    'NR162QD',
    'NR162QE',
    'NR162QF',
    'NR162QG',
    'NR162QH',
    'NR162RF',
    'NR162SE',
    'NR162SF',
    'NR162SG',
    'NR162SH',
    'NR162SJ',
    'NR162SL',
    'NR162SZ',
    'NR162TD',
    'NR162TE',
    'NR162TF',
    'NR162TG',
    'NR162TJ',
    'NR162TN',
    'NR162TP',
    'NR162TQ',
    'NR162TR',
    'NR162TS',
    'NR162TT',
    'UK',
    'NR162AD',
    'NR162LY',
    'NR162NA',
    'NR162NB',
    'NR162SQ',
  ],
  pinLatitude: null,
  pinLongitude: null,
  incidentCategoryCustomerFriendlyDescription:
    'Our engineers had to redirect power due to a fault on the electricity network.',
  incidentTypeTBCEstimatedFriendlyDescription: '08:30 - 09:30',
  serviceDown: false,
  serviceDownUrl: null,
  scope: null,
}

describe('MultiPinCard', () => {
  it('should render correct restored theme', () => {
    const { getByRole } = render(
      <MultiPinCard
        setIncidentState={mockSetIncidentState}
        incident={mockIncident}
      />
    )

    const pulsingElem = getByRole('status')

    expect(pulsingElem.getAttribute('data-theme')).toBe('Green')
  })

  it('should render correct unplanned theme', () => {
    const unplannedIncident: IncidentContentUnplanned = {
      ...mockIncident,
      powerCutType: PowerCutType.UNPLANNED_INCIDENT,
    }

    const { getByRole } = render(
      <MultiPinCard
        setIncidentState={mockSetIncidentState}
        incident={unplannedIncident}
      />
    )

    const pulsingElem = getByRole('status')

    expect(pulsingElem.getAttribute('data-theme')).toBe('Orange')
  })

  it('should render correct planned theme', () => {
    const plannedIncident: IncidentContentPlanned = {
      ...mockIncident,
      powerCutType: PowerCutType.PLANNED_INCIDENT,
    }

    const { getByRole } = render(
      <MultiPinCard
        setIncidentState={mockSetIncidentState}
        incident={plannedIncident}
      />
    )

    const pulsingElem = getByRole('status')

    expect(pulsingElem.getAttribute('data-theme')).toBe('Purple')
  })
})