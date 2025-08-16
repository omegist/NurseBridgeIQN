
import type { Question } from '@/lib/types';

export const questions: Question[] = [
  {
    id: 'pa6-1',
    text: 'A patient is receiving a potassium infusion of 40 mEq in 100 mL of fluid over 8 hours. However, the infusion is stopped after 2.5 hours. How many milliequivalents (mEq) of potassium did the patient receive?',
    options: [ '10 mEq', '12.5 mEq', '20 mEq', '25 mEq' ],
    correctIndex: 1,
    explanation: 'First, find the rate of potassium infusion: 40 mEq ÷ 8 hours = 5 mEq/hour. Then, multiply the rate by the time the infusion ran: 5 mEq/hour × 2.5 hours = 12.5 mEq.'
  },
  {
    id: 'pa6-2',
    text: 'A patient is prescribed to receive 1000 mL of fluid over 6 hours. What is the total amount of fluid the patient should receive in 24 hours?',
    options: [ '2000 mL', '4000 mL', '2400 mL', '6000 mL' ],
    correctIndex: 1,
    explanation: 'First, find the number of 6-hour periods in 24 hours: 24 hours ÷ 6 hours = 4. Then, multiply the fluid amount by the number of periods: 1000 mL × 4 = 4000 mL.'
  },
  {
    id: 'pa6-3',
    text: 'A patient receiving IV medication suddenly develops an allergic reaction. What is your immediate action?',
    options: [
      'Stop the infusion, call for emergency assistance, and administer oxygen.',
      'Continue the infusion, monitor the patient\'s vital signs, and notify the doctor.',
      'Slow down the infusion rate and administer an antihistamine.',
      'Flush the IV line with saline to ensure the medication is fully administered.'
    ],
    correctIndex: 0,
    explanation: 'Patient safety is the priority. The first step in an allergic reaction is to stop the causative agent (the infusion). Then, call for help and support the patient\'s airway and breathing.'
  },
  {
    id: 'pa6-4',
    text: 'A doctor orders 50 mg of morphine for a patient, but the nurse suspects this dose may be incorrect. What is the most appropriate action for the nurse to take?',
    options: [
      'Administer the medication as ordered to avoid delaying treatment.',
      'Call the doctor to clarify the order and express concerns about the dose.',
      'Consult with a colleague to verify the dose before contacting the doctor.',
      'Refuse to administer the medication without consulting the doctor.'
    ],
    correctIndex: 1,
    explanation: 'A 50 mg dose of morphine is unusually high and potentially dangerous. The nurse has a professional responsibility to question and clarify any order that seems unsafe before administration.'
  },
  {
    id: 'pa6-5',
    text: 'A medication order reads: "Administer 0.5 grams of acetaminophen orally every 4 hours as needed." If the available acetaminophen tablets are 500 mg each, how many tablets should be administered per dose?',
    options: [ '0.5 tablets', '1 tablet', '2 tablets', '2.5 tablets' ],
    correctIndex: 1,
    explanation: 'First, convert grams to milligrams: 0.5 g × 1000 = 500 mg. The required dose is 500 mg, and each tablet is 500 mg. Therefore, you administer 1 tablet.'
  },
  {
    id: 'pa6-6',
    text: 'A medication is prescribed to be administered 500mg in 100mL over 30 minutes. What is the hourly rate in mL?',
    options: [ '50 mL/hour', '100 mL/hour', '200 mL/hour', '400 mL/hour' ],
    correctIndex: 2,
    explanation: 'If 100 mL is given over 30 minutes (0.5 hours), the hourly rate is calculated by: 100 mL ÷ 0.5 hours = 200 mL/hour.'
  },
  {
    id: 'pa6-7',
    text: 'A vial contains 40 units of insulin per 1 mL. If a patient is prescribed 21 units, how much insulin will you withdraw? Write the answer in one decimal value.',
    options: [ '0.5 mL', '0.525 mL', '0.75 mL', '1 mL' ],
    correctIndex: 0,
    explanation: 'To calculate the volume, use the formula: Volume = Required Dose ÷ Concentration. In this case, 21 units ÷ 40 units/mL = 0.525 mL. Rounded to one decimal place, this is 0.5 mL.'
  },
  {
    id: 'pa6-8',
    text: 'What is 30 grams of sodium chloride in micrograms?',
    options: [ '30,000 mcg', '300,000 mcg', '3,000,000 mcg', '30,000,000 mcg' ],
    correctIndex: 3,
    explanation: 'To convert grams to micrograms, you multiply by 1,000,000 (since 1 g = 1000 mg and 1 mg = 1000 mcg). So, 30 g × 1,000,000 = 30,000,000 mcg.'
  },
  {
    id: 'pa6-9',
    text: 'A medication is prescribed as 750,000 mcg. How many grams is this?',
    options: [ '0.075 g', '0.75 g', '7.5 g', '75 g' ],
    correctIndex: 1,
    explanation: 'To convert micrograms to grams, you divide by 1,000,000. So, 750,000 mcg ÷ 1,000,000 = 0.75 g.'
  },
  {
    id: 'pa6-10',
    text: 'A prescription reads: Amoxicillin 250 mg orally every 8 hours. The medication available is Amoxicillin syrup 125 mg/5 mL. How many millilitres will the nurse administer per dose?',
    options: [ '5 mL', '7.5 mL', '10 mL', '15 mL' ],
    correctIndex: 2,
    explanation: 'Use the formula: (Required Dose / Stock Strength) × Stock Volume. In this case, (250 mg / 125 mg) × 5 mL = 2 × 5 mL = 10 mL.'
  },
  {
    id: 'pa6-11',
    text: 'A patient is prescribed: 1,000 mL of 0.9% Sodium Chloride to be infused over 8 hours. The IV administration set delivers 20 drops/mL. What is the drip rate in drops per minute (gtt/min)?',
    options: [ '32 gtt/min', '40 gtt/min', '42 gtt/min', '50 gtt/min' ],
    correctIndex: 2,
    explanation: 'First, convert hours to minutes: 8 hours × 60 min/hr = 480 minutes. Then, use the drop rate formula: (1000 mL × 20 drops/mL) ÷ 480 min = 41.66... gtt/min. Rounded to the nearest whole number, this is 42 gtt/min.'
  },
  {
    id: 'pa6-12',
    text: 'A patient is ordered to receive 1g of a medication. The stock available is 50mg/mL. How many millilitres should the nurse administer to deliver the full prescribed dose?',
    options: [
      '10 mL',
      '15 mL',
      '20 mL',
      '25 mL'
    ],
    correctIndex: 2,
    explanation: 'First, convert the prescribed dose to mg: 1 g = 1000 mg. Then, calculate the required volume: Required Dose ÷ Concentration = 1000 mg ÷ 50 mg/mL = 20 mL.'
  }
];
