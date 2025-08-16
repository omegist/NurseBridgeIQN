
import type { Question } from '@/lib/types';

export const questions: Question[] = [
  {
    id: 'pa4-1',
    text: '0.01 gm =---------- mg',
    options: [ '10 mg', '0.1 mg', '100 mg', '1.0 mg' ],
    correctIndex: 0,
    explanation: 'To convert grams (gm) to milligrams (mg), you multiply by 1000. In this case, 0.01 gm × 1000 = 10 mg.'
  },
  {
    id: 'pa4-2',
    text: 'A patient has been prescribed Digoxin 125 mcg. What is the dosage in mg?',
    options: [ '1.25 mg', '0.125 mg', '125 mg', '1250 mg' ],
    correctIndex: 1,
    explanation: 'To convert micrograms (mcg) to milligrams (mg), you divide by 1000. In this case, 125 mcg ÷ 1000 = 0.125 mg.'
  },
  {
    id: 'pa4-3',
    text: 'The patient is charted 15 mg/kg/day. The patient weighs 75 kg. How much will the patient receive every 8 hours?',
    options: [ '35 mg', '375 mg', '300 mg', '1125 mg' ],
    correctIndex: 1,
    explanation: 'First, calculate the total daily dose: 15 mg/kg × 75 kg = 1125 mg/day. Since there are 24 hours in a day, an 8-hourly dose means 3 doses per day (24 ÷ 8 = 3). Divide the total daily dose by 3: 1125 mg ÷ 3 = 375 mg per dose.'
  },
  {
    id: 'pa4-4',
    text: 'A patient has been prescribed 1.2 mg of pantoprazole. What is the dosage in mcg?',
    options: [ '120 mcg', '12.0 mcg', '12 mcg', '1200 mcg' ],
    correctIndex: 3,
    explanation: 'To convert milligrams (mg) to micrograms (mcg), you multiply by 1000. In this case, 1.2 mg × 1000 = 1200 mcg.'
  },
  {
    id: 'pa4-5',
    text: '1 L NS is to be infused over 6 hours. Calculate how many mL per hour the patient will receive the fluid.',
    options: [ '167 mL per hour', '166.6 mL per hour', '166.7 mL per hour', '167.6 mL per hour' ],
    correctIndex: 1,
    explanation: 'First, convert Liters (L) to milliliters (mL): 1 L = 1000 mL. Then, use the flow rate formula: Total Volume ÷ Time (hr) = 1000 mL ÷ 6 hours = 166.66... mL/hour. The most precise answer is 166.6 mL per hour.'
  },
  {
    id: 'pa4-6',
    text: 'How many ml/hour would a patient receive if they were to have 500 mL of fluid infused over 6 hours?',
    options: [ '83.33 mL per hour', '83.34 mL per hour', '84.33 mL per hour', '83.44 mL per hour' ],
    correctIndex: 0,
    explanation: 'To calculate the flow rate, use the formula: Total Volume ÷ Time (hr) = 500 mL ÷ 6 hours = 83.33... mL/hour. The most precise answer is 83.33 mL per hour.'
  },
  {
    id: 'pa4-7',
    text: 'A patient is prescribed Sodium Chloride 1000 mL to be infused over an 8-hour period. A standard giving set is being used. Write your answer as whole number.',
    options: [ '41.66 drops per minute', '41.6 drops per minute', '42 drops per minute', '41 drops per minute' ],
    correctIndex: 2,
    explanation: 'A standard giving set has a drop factor of 20 drops/mL. First, convert time to minutes: 8 hours × 60 min/hr = 480 minutes. Then, use the drop rate formula: (1000 mL × 20 drops/mL) ÷ 480 min = 41.66... dpm. Rounded to the nearest whole number, the answer is 42 drops per minute.'
  },
  {
    id: 'pa4-8',
    text: 'Your patient is prescribed a 1000 mL infusion of Sodium Chloride 0.9% with 40 mmols of Potassium to be given over 8 hours. Using a buretrol giving set, calculate the drops per minute he will receive.',
    options: [ '125 drops per minute', '120 drops per minute', '121 drops per minute', '12 drops per minute' ],
    correctIndex: 0,
    explanation: 'A buretrol (microdrip) giving set has a drop factor of 60 drops/mL. First, convert time to minutes: 8 hours × 60 min/hr = 480 minutes. Then, use the drop rate formula: (1000 mL × 60 drops/mL) ÷ 480 min = 125 drops per minute.'
  },
  {
    id: 'pa4-9',
    text: 'Your patient is prescribed a 1200 mL infusion of Sodium Chloride 0.9% with 40 mmols of Potassium to be given over 6 hours. Using a buretrol giving set, calculate the drops per minute he will receive.',
    options: [ '200 drops per minute', '166 drops per minute', '167 drops per minute', '199 drops per minute' ],
    correctIndex: 0,
    explanation: 'A buretrol (microdrip) giving set has a drop factor of 60 drops/mL. First, convert time to minutes: 6 hours × 60 min/hr = 360 minutes. Then, use the drop rate formula: (1200 mL × 60 drops/mL) ÷ 360 min = 200 drops per minute.'
  },
  {
    id: 'pa4-10',
    text: "Prescribed dose - 50 mg/kg. Patient's weight - 79 kg. What is the dose required?",
    options: [ '3950 mg', '39.50 mg', '3.950 mg', '395 mg' ],
    correctIndex: 0,
    explanation: 'To find the total dose, use the formula: Dose = Weight (kg) × Dose per kg. In this case, 79 kg × 50 mg/kg = 3950 mg.'
  },
  {
    id: 'pa4-11',
    text: 'Convert 4.3 L to mL',
    options: [ '4,300 mL', '4.3 mL', '430 mL', '400 mL' ],
    correctIndex: 0,
    explanation: 'To convert liters (L) to milliliters (mL), you multiply by 1000. In this case, 4.3 L × 1000 = 4300 mL.'
  },
  {
    id: 'pa4-12',
    text: 'Frusemide 70 mg IVI is charted. Stock dose is 20 mg/mL. How many mL would you give?',
    options: [ '35 mL', '3.5 mL', '0.35 mL', '30 mL' ],
    correctIndex: 1,
    explanation: 'To calculate the volume, use the formula: Volume = Required Dose ÷ Concentration (mg/mL). In this case, 70 mg ÷ 20 mg/mL = 3.5 mL.'
  }
];
