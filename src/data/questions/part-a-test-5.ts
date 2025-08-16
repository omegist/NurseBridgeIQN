
import type { Question } from '@/lib/types';

export const questions: Question[] = [
  {
    id: 'pa5-1',
    text: 'Haloperidol 3 mg IVI is charted. Haloperidol is available as 5mg/ml. How many mL is required?',
    options: [ '0.6 mL', '0.06 mL', '0.60 mL', '0.600 mL' ],
    correctIndex: 0,
    explanation: 'To calculate the volume, use the formula: Volume = Required Dose ÷ Concentration (mg/mL). In this case, 3 mg ÷ 5 mg/mL = 0.6 mL.'
  },
  {
    id: 'pa5-2',
    text: 'Atropine 0.6 mg =',
    options: [ '60 mcg', '600 mcg', '6000 mcg', '6.0 mcg' ],
    correctIndex: 1,
    explanation: 'To convert milligrams (mg) to micrograms (mcg), you multiply by 1000. In this case, 0.6 mg × 1000 = 600 mcg.'
  },
  {
    id: 'pa5-3',
    text: 'A patient is prescribed 0.25 mg of digoxin orally once daily. How many tablets should you give? Stock information: digoxin 250 microgram tablets',
    options: [ '1 tablet', '2 tablet', '3 tablet', '4 tablet' ],
    correctIndex: 0,
    explanation: 'First, convert the prescribed dose to micrograms: 0.25 mg × 1000 = 250 mcg. The stock strength is 250 mcg per tablet. Therefore, you need: 250 mcg ÷ 250 mcg/tablet = 1 tablet.'
  },
  {
    id: 'pa5-4',
    text: 'A patient is prescribed insulin 22 units subcutaneously. How many mL should you give? Write your answer to 1 decimal value. Stock information: 10 mL vial of 100 units in 1 mL',
    options: [ '0.2 mL', '0.22 mL', '2 mL', '22 mL' ],
    correctIndex: 0,
    explanation: 'To calculate the volume, use the formula: Volume = Required Dose ÷ Concentration (units/mL). In this case, 22 units ÷ 100 units/mL = 0.22 mL. Rounded to one decimal place, this is 0.2 mL.'
  },
  {
    id: 'pa5-5',
    text: 'You have a stock vial of diclofenac (75 mg in 3 mL) and need to draw up a dose of 50 mg for your patient. How many mLs should you draw up to give this dose?',
    options: [ '0.2 mL', '2 mL', '22 mL', '2.2 mL' ],
    correctIndex: 1,
    explanation: 'First, find the concentration: 75 mg ÷ 3 mL = 25 mg/mL. Then, calculate the required volume: 50 mg ÷ 25 mg/mL = 2 mL.'
  },
  {
    id: 'pa5-6',
    text: 'A patient weighing 60 kg is prescribed hydrocortisone 2 mg/kg (Stock = hydrocortisone 100 mg in 2 mL) How many mL. should you draw up to give this dose?',
    options: [ '2 mL', '3 mL', '2.4 mL', '1.4 mL' ],
    correctIndex: 2,
    explanation: 'First, calculate the total required dose: 2 mg/kg × 60 kg = 120 mg. The stock concentration is 100 mg / 2 mL = 50 mg/mL. Finally, calculate the volume: 120 mg ÷ 50 mg/mL = 2.4 mL.'
  },
  {
    id: 'pa5-7',
    text: 'To administer 400 micrograms of folic acid syrup orally, how many mL should you give? Stock information: folic acid 2.5 mg in 5 mL',
    options: [ '8 mL', '0.8 mL', '0.08 mL', '0.008 mL' ],
    correctIndex: 1,
    explanation: 'First, convert the stock to mcg: 2.5 mg = 2500 mcg. The concentration is 2500 mcg / 5 mL = 500 mcg/mL. Then, calculate the volume: 400 mcg ÷ 500 mcg/mL = 0.8 mL.'
  },
  {
    id: 'pa5-8',
    text: 'To prepare 62.5 micrograms of digoxin for intravenous administration, how many mLs should you give? Stock information: digoxin 500 micrograms in 2 mL',
    options: [ '0.25 mL', '0.5 mL', '0.2 mL', '25 mL' ],
    correctIndex: 0,
    explanation: 'First, find the concentration: 500 mcg ÷ 2 mL = 250 mcg/mL. Then, calculate the volume: 62.5 mcg ÷ 250 mcg/mL = 0.25 mL.'
  },
  {
    id: 'pa5-9',
    text: 'You are required to administer 150 mg hydrocortisone intravenously, how many mL should you give? Stock information: hydrocortisone 100 mg in 2 mL',
    options: [ '3 mL', '2 mL', '3.5 mL', '2.5 mL' ],
    correctIndex: 0,
    explanation: 'The stock concentration is 100 mg / 2 mL = 50 mg/mL. To find the volume, divide the required dose by the concentration: 150 mg ÷ 50 mg/mL = 3 mL.'
  },
  {
    id: 'pa5-10',
    text: 'To administer heparin 3500 units, how many mL is required? Stock information: heparin 5000 units in 1 mL',
    options: [ '7 mL', '0.7 mL', '7.2 mL', '0.17 mL' ],
    correctIndex: 1,
    explanation: 'To calculate the volume, use the formula: Volume = Required Dose ÷ Concentration (units/mL). In this case, 3500 units ÷ 5000 units/mL = 0.7 mL.'
  },
  {
    id: 'pa5-11',
    text: 'A patient weighing 65 kg is prescribed intravenous aminophylline 500 micrograms/kg/hour. Calculate the infusion rate in mL/hour. Stock information: aminophylline 500 mg in 500 mL sodium chloride 0.9%',
    options: [ '32 mL/hour', '32.5 mL/hour', '2.5 mL/hour', '3.5 mL/hour' ],
    correctIndex: 1,
    explanation: 'First, calculate the total hourly dose in mcg: 500 mcg/kg/hr × 65 kg = 32500 mcg/hr. Convert this to mg: 32500 mcg ÷ 1000 = 32.5 mg/hr. The stock concentration is 500 mg / 500 mL = 1 mg/mL. Therefore, the rate is 32.5 mg/hr ÷ 1 mg/mL = 32.5 mL/hour.'
  },
  {
    id: 'pa5-12',
    text: 'A patient is prescribed prednisolone 40 mg once daily in the morning for 5 days. Available stock is 40 mg/tablet. How many tablets should you give the patient every morning?',
    options: [ '4 tablets', '7 tablets', '1 tablet', '8 tablets' ],
    correctIndex: 2,
    explanation: 'To calculate the number of tablets, divide the required dose by the stock strength: 40 mg ÷ 40 mg/tablet = 1 tablet.'
  }
];
