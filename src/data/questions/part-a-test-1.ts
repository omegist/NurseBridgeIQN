
import type { Question } from '@/lib/types';

export const questions: Question[] = [
  {
    id: 'pa1-1',
    text: 'A patient requires 1,000 mL of IV fluid to be administered over 8 hours. What is the correct flow rate in mL/hour?',
    options: [
      '100 ml/hour',
      '120 mL/hour',
      '125 mL/hour',
      '200 ml/hour'
    ],
    correctIndex: 2,
    explanation: 'To calculate the flow rate, use the formula: Flow Rate (mL/hr) = Total Volume ÷ Time (hr). In this case, 1000 mL ÷ 8 hours = 125 mL/hour.'
  },
  {
    id: 'pa1-2',
    text: 'A medication is prescribed as 10 mg/kg. If a patient weighs 50 kg, what is the required dose?',
    options: [
      '700 mg',
      '800 mg',
      '500 mg',
      '450 mg'
    ],
    correctIndex: 2,
    explanation: 'To find the total dose, use the formula: Dose = Weight (kg) × Dose per kg. In this case, 50 kg × 10 mg/kg = 500 mg.'
  },
  {
    id: 'pa1-3',
    text: 'A medication comes in a 200 mg/mL solution. If you need to administer 400 mg, how many mL should you give?',
    options: [
      '5 mL',
      '2 mL',
      '4 mL',
      '3.5 mL'
    ],
    correctIndex: 1,
    explanation: 'To calculate the volume, use the formula: Volume = Required Dose ÷ Concentration (mg/mL). In this case, 400 mg ÷ 200 mg/mL = 2 mL.'
  },
  {
    id: 'pa1-4',
    text: 'You are instructed to dilute a medication with sterile water to create a 50 mL solution containing 20 mg/mL. How many milligrams of the medication are needed?',
    options: [
      '1000 mg',
      '1500 mg',
      '1200 mg',
      '750 mg'
    ],
    correctIndex: 0,
    explanation: 'To find the total milligrams, multiply the total volume by the concentration: 50 mL × 20 mg/mL = 1000 mg.'
  },
  {
    id: 'pa1-5',
    text: 'A medication is prescribed at a dose of 15 mg/kg/day, given in three divided doses. If a child weighs 20 kg, what is the dose per administration?',
    options: [
      '100 mg',
      '150 mg',
      '300 mg',
      '250 mg'
    ],
    correctIndex: 0,
    explanation: 'First, calculate the total daily dose: 20 kg × 15 mg/kg/day = 300 mg/day. Then, divide the total daily dose by the number of administrations: 300 mg ÷ 3 doses = 100 mg per dose.'
  },
  {
    id: 'pa1-6',
    text: 'A patient has been prescribed morphine 8 mg 2-3 hourly PRN for pain. Unit stock of morphine is 10 mg/mL. How much morphine should be drawn up for the patient?',
    options: [
      '0.08 mL',
      '0.25 mL',
      '0.75 mL',
      '0.8 mL'
    ],
    correctIndex: 3,
    explanation: 'To calculate the volume, use the formula: Volume = Required Dose ÷ Concentration (mg/mL). In this case, 8 mg ÷ 10 mg/mL = 0.8 mL.'
  },
  {
    id: 'pa1-7',
    text: 'Ondansetron 2 mg has been prescribed for a child who weighs 13.6 kg. The safe dosage of this drug is 0.15 mg/kg. Is 2 mg a safe dose?',
    options: [
      'No, a safe dose would be 0.3 mg.',
      'No, a safe dose would be 0.6 mg',
      'No, a safe dose would be 1.02 mg',
      'Yes, 2 mg is a safe dose.'
    ],
    correctIndex: 3,
    explanation: 'First, calculate the maximum safe dose: 13.6 kg × 0.15 mg/kg = 2.04 mg. Since the prescribed dose of 2 mg is less than or equal to the calculated safe dose of 2.04 mg, it is a safe dose. The correct answer is "Yes, 2 mg is a safe dose."'
  },
  {
    id: 'pa1-8',
    text: 'A patient is prescribed 250 mg of antibiotics in 200 mL of intravenous fluid over 30 minutes. The correct rate in mL per hour to set the infusion device is',
    options: [
      '100 ml per hour',
      '200 ml per hour',
      '400 mL per hour',
      '500 mL per hour'
    ],
    correctIndex: 2,
    explanation: 'To calculate the flow rate in mL/hour, you can set up a proportion. If 200 mL is given in 30 minutes (0.5 hours), then the rate per hour is: 200 mL / 0.5 hr = 400 mL/hr.'
  },
  {
    id: 'pa1-9',
    text: "A patient's intravenous normal saline infusion of 1000 mL is to be completed in 8 hours time. How many ml/hour is required to finish the infusion on time?",
    options: [
      '125 mL/hr',
      '18.5 mL/hr',
      '95 mL/hr',
      '100 mL/hr'
    ],
    correctIndex: 0,
    explanation: 'To calculate the flow rate, use the formula: Flow Rate (mL/hr) = Total Volume ÷ Time (hr). In this case, 1000 mL ÷ 8 hours = 125 mL/hr.'
  },
  {
    id: 'pa1-10',
    text: 'A patient is prescribed 75 mcg of vitamin D. What is the dosage in mg?',
    options: [
      '0.75 mg',
      '750 mg',
      '7.5 mg',
      '0.075 mg'
    ],
    correctIndex: 3,
    explanation: 'To convert micrograms (mcg) to milligrams (mg), you divide by 1000. In this case, 75 mcg ÷ 1000 = 0.075 mg.'
  },
  {
    id: 'pa1-11',
    text: 'A patient is received 500 mg of amoxicillin. What is the dosage in g?',
    options: [
      '0.5 g',
      '5 g',
      '50 g',
      '0.005 g'
    ],
    correctIndex: 0,
    explanation: 'To convert milligrams (mg) to grams (g), you divide by 1000. In this case, 500 mg ÷ 1000 = 0.5 g.'
  },
  {
    id: 'pa1-12',
    text: "A patient's intravenous normal saline infusion of 1000 mL is to be completed in eight hours' time. The drop factor of the giving set is 15 drops per mL. How many drops per minute (dpm) are required to finish the infusion on time?",
    options: [
      '11 dpm',
      '15 dpm',
      '31 dpm',
      '35 dpm'
    ],
    correctIndex: 2,
    explanation: 'To calculate the drop rate, use the formula: Drops/min = (Total Volume × Drop Factor) ÷ (Time in minutes). First, convert 8 hours to minutes: 8 × 60 = 480 minutes. Then, calculate: (1000 mL × 15 drops/mL) ÷ 480 min = 15000 ÷ 480 = 31.25. Rounding to the nearest whole number gives 31 dpm.'
  }
];
