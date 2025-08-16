
import type { Question } from '@/lib/types';

export const questions: Question[] = [
  {
    id: 'pa2-1',
    text: 'A patient produced 1500 mL of urine in 24 hours. What is the volume in L?',
    options: [ '15 L', '1.5 L', '1.75 L', '150 L' ],
    correctIndex: 1,
    explanation: 'To convert milliliters (mL) to liters (L), you divide by 1000. In this case, 1500 mL ÷ 1000 = 1.5 L.'
  },
  {
    id: 'pa2-2',
    text: 'A patient has been prescribed 500 micrograms of benperidol. Available medication stock is benperidol 250 microgram. How many tablets should be administered?',
    options: [ '1.5 tablets', '2 tablets', '3 tablets', '2.5 tablets' ],
    correctIndex: 1,
    explanation: 'To calculate the number of tablets, divide the required dose by the stock strength: 500 mcg ÷ 250 mcg/tablet = 2 tablets.'
  },
  {
    id: 'pa2-3',
    text: 'A patient has been prescribed 100 mg of cyclizine lactate. Available stock medication is cyclizine lactate 50 mg in 1 mL. What volume should be drawn up for the injection?',
    options: [ '1.5 mL', '2 mL', '1 mL', '2.5 mL' ],
    correctIndex: 1,
    explanation: 'To find the volume, divide the required dose by the concentration: 100 mg ÷ 50 mg/mL = 2 mL.'
  },
  {
    id: 'pa2-4',
    text: 'A patient has been prescribed tobramycin at a dose of 3 mg/kg. The patient weighs 95 kg. Available stock is tobramycin 100 mg in 1 mL. What volume should be drawn up for the injection? Please write your answer to two decimal places.',
    options: [ '2.85 mL', '2.5 mL', '2.6 mL', '2.7 mL' ],
    correctIndex: 0,
    explanation: 'First, calculate the total required dose: 3 mg/kg × 95 kg = 285 mg. Then, calculate the volume to administer: 285 mg ÷ 100 mg/mL = 2.85 mL.'
  },
  {
    id: 'pa2-5',
    text: 'A patient\'s intravenous normal saline infusion of 300 mL is to be completed in 3 hours time. The drop factor of the giving set is 15 drops per mL. How many drops per minute (dpm) are required to finish the infusion on time?',
    options: [ '25 dpm', '22 dpm', '20 dpm', '30 dpm' ],
    correctIndex: 0,
    explanation: 'First, convert the time to minutes: 3 hours × 60 min/hour = 180 minutes. Then, use the drop rate formula: (300 mL × 15 drops/mL) ÷ 180 min = 4500 ÷ 180 = 25 dpm.'
  },
  {
    id: 'pa2-6',
    text: 'A patient\'s intravenous normal saline infusion of 600 mL is to be completed in 5 hours time. At what rate would you set the infusion pump to run?',
    options: [ '120 ml per hour', '110 ml per hour', '150 ml per hour', '100 ml per hour' ],
    correctIndex: 0,
    explanation: 'To calculate the flow rate, divide the total volume by the time: 600 mL ÷ 5 hours = 120 mL/hour.'
  },
  {
    id: 'pa2-7',
    text: 'The total volume to be given is 500 ml. The time over which this is to be given is 8 hours. The drop factor is 20. How many drops per minute will be delivered? Write your answer as whole number.',
    options: [ '20.83 dpm', '21 dpm', '22 dpm', '25 dpm' ],
    correctIndex: 1,
    explanation: 'First, convert time to minutes: 8 hours × 60 min/hour = 480 minutes. Then, calculate the drop rate: (500 mL × 20 drops/mL) ÷ 480 min = 10000 ÷ 480 = 20.83 dpm. Rounded to the nearest whole number, this is 21 dpm.'
  },
  {
    id: 'pa2-8',
    text: 'A patient has been prescribed 0.25 g of paracetamol. What is the dose in mg?',
    options: [ '250 mg', '200 mg', '2500 mg', '205 mg' ],
    correctIndex: 0,
    explanation: 'To convert grams (g) to milligrams (mg), you multiply by 1000. In this case, 0.25 g × 1000 = 250 mg.'
  },
  {
    id: 'pa2-9',
    text: 'A patient has been prescribed 400 mg of cefalexin suspension. Available medication stock is Cefalexin 250 mg/5 mL. What volume should be administered?',
    options: [ '7 mL', '8 mL', '7.5 mL', '9 mL' ],
    correctIndex: 1,
    explanation: 'Use the formula: (Required Dose / Stock Strength) × Stock Volume. In this case, (400 mg / 250 mg) × 5 mL = 1.6 × 5 mL = 8 mL.'
  },
  {
    id: 'pa2-10',
    text: 'An infant has been prescribed omeprazole suspension at a dose of 700 micrograms/kg. The baby weighs 4.8 kg. Stock medicine of omeprazole suspension is 10 mg/5 ml. What volume should be administered? Write your answer to two decimal places.',
    options: [ '1.68 mL', '1.86 mL', '1.78 mL', '1.7 mL' ],
    correctIndex: 0,
    explanation: 'First, calculate the total dose in mcg: 700 mcg/kg × 4.8 kg = 3360 mcg. Convert this dose to mg: 3360 mcg ÷ 1000 = 3.36 mg. Finally, calculate the volume: (3.36 mg / 10 mg) × 5 mL = 1.68 mL.'
  },
  {
    id: 'pa2-11',
    text: 'A child has been prescribed ceftazidime at a dose of 25 mg/kg. The baby weighs 8.4 kg. Available medication is Ceftazidime 100 mg/1 mL. What volume should be drawn up for the injection? Write your answer to one decimal place.',
    options: [ '2.0 mL', '2.01 mL', '2.1 mL', '2.2 mL' ],
    correctIndex: 2,
    explanation: 'First, calculate the total required dose: 25 mg/kg × 8.4 kg = 210 mg. Then, calculate the volume to administer: 210 mg ÷ 100 mg/mL = 2.1 mL.'
  },
  {
    id: 'pa2-12',
    text: 'Ramipril 50 mg PO is ordered. Ramipril is available as 20 mg per tablet. How many tablets would the nurse administer?',
    options: [ '2.5 tablets', '1 tablet', '3 tablets', '1.5 tablets' ],
    correctIndex: 0,
    explanation: 'To calculate the number of tablets, divide the required dose by the strength of each tablet: 50 mg ÷ 20 mg/tablet = 2.5 tablets.'
  }
];
