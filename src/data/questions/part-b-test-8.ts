
import type { Question } from '@/lib/types';

export const questions: Question[] = [
  {
    id: 'pb8-1',
    text: 'Which of the following is the correct technique of patient transfer?',
    options: [
      'Lift the patient with one person',
      'Use mechanical lift equipment',
      'Slide the patient with draw sheet',
      'Use two-person assistance with gait belt',
    ],
    correctIndex: 1,
    explanation: 'Mechanical lifts reduce strain and injury risk for both patient and caregiver, especially for non-ambulatory patients.',
  },
  {
    id: 'pb8-2',
    text: 'What is the primary reason to avoid smoking near patients receiving oxygen therapy?',
    options: [
      'Fire hazard and explosion risk',
      'Interference with oxygen therapy',
      'Second-hand smoke exposure',
      'All of the above',
    ],
    correctIndex: 3,
    explanation: 'Oxygen supports combustion, making smoking a fire hazard. It also compromises therapy and exposes others to harmful smoke.',
  },
  {
    id: 'pb8-3',
    text: 'Which medications commonly cause weight gain in a 16-year-old?',
    options: [
      'Steroids and antidepressants',
      'Antibiotics and antihistamines',
      'Antipsychotics and mood stabilizers',
      'All of the above',
    ],
    correctIndex: 3,
    explanation: 'Steroids, antidepressants, antipsychotics, and mood stabilizers can all contribute to weight gain via appetite stimulation and metabolic effects.',
  },
  {
    id: 'pb8-4',
    text: 'What is the best way to prevent pressure ulcers in bed-ridden patients?',
    options: [
      'Use soft pillows',
      'Apply talcum powder',
      'Reposition every 2 hours',
      'Massage pressure points',
    ],
    correctIndex: 2,
    explanation: 'Repositioning relieves pressure on vulnerable areas, reducing the risk of skin breakdown and ulcer formation.',
  },
  {
    id: 'pb8-5',
    text: 'Which of the following is a sign of hypoglycemia?',
    options: [ 'Dry mouth', 'Sweating and shakiness', 'Slow heart rate', 'Flushed skin' ],
    correctIndex: 1,
    explanation: 'Sweating, shakiness, and confusion are classic signs of low blood sugar due to sympathetic nervous system activation.',
  },
  {
    id: 'pb8-6',
    text: 'What is the most appropriate action when a patient has a seizure?',
    options: [
      'Restrain the patient',
      'Insert a tongue depressor',
      'Protect the head and clear surroundings',
      'Give water immediately',
    ],
    correctIndex: 2,
    explanation: 'Protecting the patient from injury during a seizure is critical; restraining or inserting objects can cause harm.',
  },
  {
    id: 'pb8-7',
    text: 'Which of the following is a common side effect of opioid analgesics?',
    options: [ 'Diarrhea', 'Insomnia', 'Constipation', 'Hypertension' ],
    correctIndex: 2,
    explanation: 'Opioids slow gastrointestinal motility, often leading to constipation as a predictable side effect.',
  },
  {
    id: 'pb8-8',
    text: 'Which of the following is a sign of dehydration?',
    options: [
      'Increased urine output',
      'Moist mucous membranes',
      'Sunken eyes and dry skin',
      'Low heart rate',
    ],
    correctIndex: 2,
    explanation: 'Dehydration leads to reduced tissue turgor, dry mucosa, and sunken eyes due to fluid loss.',
  },
  {
    id: 'pb8-9',
    text: 'Which of the following is a symptom of urinary tract infection?',
    options: [
      'Frequent urination with burning',
      'Increased appetite',
      'Dry cough',
      'Joint pain',
    ],
    correctIndex: 0,
    explanation: 'UTIs typically present with dysuria, urgency, and frequency due to bladder irritation.',
  },
  {
    id: 'pb8-10',
    text: 'Which of the following is a sign of anemia?',
    options: [
      'Pale skin and fatigue',
      'Weight gain',
      'High blood pressure',
      'Increased appetite',
    ],
    correctIndex: 0,
    explanation: 'Anemia reduces oxygen delivery, causing pallor, fatigue, and sometimes shortness of breath.',
  },
  {
    id: 'pb8-11',
    text: 'Which of the following is the best method to check for fever?',
    options: [
      'Touching the forehead',
      'Using a thermometer',
      'Observing sweating',
      'Checking pulse rate',
    ],
    correctIndex: 1,
    explanation: 'Thermometers provide objective and accurate temperature readings, unlike subjective methods.',
  },
  {
    id: 'pb8-12',
    text: 'Which of the following is a symptom of asthma?',
    options: [
      'Chest tightness and wheezing',
      'Skin rash',
      'Frequent urination',
      'Blurred vision',
    ],
    correctIndex: 0,
    explanation: 'Asthma involves airway inflammation and bronchospasm, leading to wheezing and tightness.',
  },
  {
    id: 'pb8-13',
    text: 'Which of the following is a sign of infection?',
    options: [
      'Redness, swelling, and warmth',
      'Cold extremities',
      'Dry skin',
      'Low body temperature',
    ],
    correctIndex: 0,
    explanation: 'Local inflammation from infection causes redness, swelling, warmth, and sometimes pain.',
  },
  {
    id: 'pb8-14',
    text: 'Which of the following is a symptom of depression?',
    options: [
      'Persistent sadness and loss of interest',
      'High energy levels',
      'Increased appetite',
      'Frequent urination',
    ],
    correctIndex: 0,
    explanation: 'Depression is marked by low mood, anhedonia, and changes in sleep or appetite.',
  },
  {
    id: 'pb8-15',
    text: 'Which of the following is the best way to prevent falls in elderly patients?',
    options: [
      'Use slippery rugs',
      'Keep lights dim',
      'Install grab bars and ensure good lighting',
      'Encourage walking without support',
    ],
    correctIndex: 2,
    explanation: 'Environmental modifications like grab bars and lighting reduce fall risk significantly.',
  },
  {
    id: 'pb8-16',
    text: 'Which of the following is a symptom of heart failure?',
    options: [
      'Swelling in legs and shortness of breath',
      'Frequent urination',
      'Dry mouth',
      'Skin rash',
    ],
    correctIndex: 0,
    explanation: 'Heart failure leads to fluid retention and poor cardiac output, causing edema and dyspnea.',
  },
  {
    id: 'pb8-17',
    text: 'Which of the following is the best way to prevent infection?',
    options: [ 'Hand hygiene', 'Wearing jewelry', 'Sharing personal items', 'Avoiding bathing' ],
    correctIndex: 0,
    explanation: 'Hand hygiene is the cornerstone of infection prevention in all healthcare settings.',
  },
  {
    id: 'pb8-18',
    text: 'Which of the following is a symptom of diabetes?',
    options: [
      'Frequent urination and increased thirst',
      'Skin rash',
      'Weight gain',
      'Low blood pressure',
    ],
    correctIndex: 0,
    explanation: 'Hyperglycemia causes osmotic diuresis and dehydration, leading to polyuria and polydipsia.',
  },
  {
    id: 'pb8-19',
    text: 'Which of the following is a sign of stroke?',
    options: [
      'Sudden weakness on one side',
      'Gradual joint pain',
      'Skin rash',
      'Frequent urination',
    ],
    correctIndex: 0,
    explanation: 'Stroke typically presents with sudden onset of neurological deficits such as unilateral weakness, facial droop, or speech difficulty.',
  },
  {
    id: 'pb8-20',
    text: 'Which of the following is a symptom of pneumonia?',
    options: [
      'Cough with sputum and fever',
      'Skin rash',
      'Frequent urination',
      'Joint pain',
    ],
    correctIndex: 0,
    explanation: 'Pneumonia causes inflammation in the lungs, leading to productive cough, fever, and sometimes chest pain or shortness of breath.',
  },
  {
    id: 'pb8-21',
    text: 'Which of the following is the best way to prevent cross-contamination in hospitals?',
    options: [
      'Using same gloves for multiple patients',
      'Hand hygiene between patient contacts',
      'Sharing medical equipment',
      'Avoiding cleaning surfaces',
    ],
    correctIndex: 1,
    explanation: 'Hand hygiene is the most effective method to prevent transmission of pathogens between patients and surfaces.',
  },
  {
    id: 'pb8-22',
    text: 'Which of the following is a symptom of tuberculosis?',
    options: [
      'Persistent cough with blood',
      'Skin rash',
      'Frequent urination',
      'Joint pain',
    ],
    correctIndex: 0,
    explanation: 'Pulmonary tuberculosis often presents with chronic cough, hemoptysis, weight loss, and night sweats.',
  },
  {
    id: 'pb8-23',
    text: 'Which of the following is the best way to manage fever in children?',
    options: [
      'Give aspirin',
      'Use cold water bath',
      'Administer paracetamol and monitor',
      'Avoid fluids',
    ],
    correctIndex: 2,
    explanation: 'Paracetamol is safe and effective for fever management in children; aspirin is contraindicated due to risk of Reye’s syndrome.',
  },
  {
    id: 'pb8-24',
    text: 'Which of the following is a sign of respiratory distress?',
    options: [
      'Normal breathing rate',
      'Use of accessory muscles',
      'Pink skin tone',
      'Quiet chest sounds',
    ],
    correctIndex: 1,
    explanation: 'Use of accessory muscles indicates increased effort to breathe, a hallmark of respiratory distress.',
  },
  {
    id: 'pb8-25',
    text: 'Which of the following is the best way to prevent bed sores?',
    options: [
      'Keep patient in same position',
      'Use hard mattress',
      'Reposition regularly and use pressure-relieving devices',
      'Apply powder to skin',
    ],
    correctIndex: 2,
    explanation: 'Regular repositioning and pressure-relieving surfaces reduce prolonged pressure on skin, preventing ulcer formation.',
  },
  {
    id: 'pb8-26',
    text: 'Which of the following is a symptom of dengue fever?',
    options: [ 'High fever and joint pain', 'Frequent urination', 'Skin rash', 'Dry cough' ],
    correctIndex: 0,
    explanation: 'Dengue typically presents with high fever, severe muscle and joint pain, and sometimes a rash or bleeding tendency.',
  },
  {
    id: 'pb8-27',
    text: 'Which of the following is the best way to prevent spread of COVID-19?',
    options: [
      'Avoid bathing',
      'Wear mask and maintain distance',
      'Share personal items',
      'Touch face frequently',
    ],
    correctIndex: 1,
    explanation: 'Masking and physical distancing are proven methods to reduce transmission of respiratory viruses like COVID-19.',
  },
  {
    id: 'pb8-28',
    text: 'Which of the following is a sign of malnutrition?',
    options: [
      'Weight loss and fatigue',
      'High blood pressure',
      'Frequent urination',
      'Skin rash',
    ],
    correctIndex: 0,
    explanation: 'Malnutrition leads to muscle wasting, weight loss, fatigue, and poor wound healing due to nutrient deficiency.',
  },
  {
    id: 'pb8-29',
    text: 'Which of the following is the best way to manage diarrhea?',
    options: [
      'Avoid fluids',
      'Give antibiotics immediately',
      'Provide oral rehydration solution',
      'Restrict all food',
    ],
    correctIndex: 2,
    explanation: 'ORS prevents dehydration and electrolyte imbalance, which are the main risks in diarrhea, especially in children.',
  },
  {
    id: 'pb8-30',
    text: 'Which of the following is a symptom of measles?',
    options: [
      'Cough, fever, and rash',
      'Joint pain',
      'Frequent urination',
      'Skin dryness',
    ],
    correctIndex: 0,
    explanation: 'Measles presents with fever, cough, conjunctivitis, and a characteristic rash starting at the hairline and spreading downward.',
  },
  {
    id: 'pb8-31',
    text: 'Which of the following is the best way to prevent mosquito-borne diseases?',
    options: [
      'Keep water containers uncovered',
      'Use mosquito nets and repellents',
      'Wear dark clothes',
      'Avoid cleaning surroundings',
    ],
    correctIndex: 1,
    explanation: 'Mosquito nets and repellents reduce exposure to bites, preventing diseases like malaria and dengue.',
  },
  {
    id: 'pb8-32',
    text: 'Which of the following is a sign of jaundice?',
    options: [
      'Yellowing of skin and eyes',
      'Dry cough',
      'Frequent urination',
      'Skin rash',
    ],
    correctIndex: 0,
    explanation: 'Jaundice results from elevated bilirubin, causing yellow discoloration of skin and sclera.',
  },
  {
    id: 'pb8-33',
    text: 'Which of the following is the best way to manage vomiting?',
    options: [
      'Give spicy food',
      'Provide small sips of clear fluids',
      'Force feed immediately',
      'Avoid hydration',
    ],
    correctIndex: 1,
    explanation: 'Clear fluids in small amounts help prevent dehydration and are less likely to trigger further vomiting.',
  },
  {
    id: 'pb8-34',
    text: 'Which of the following is a symptom of chickenpox?',
    options: [ 'Itchy rash with blisters', 'Frequent urination', 'Joint pain', 'Dry cough' ],
    correctIndex: 0,
    explanation: 'Chickenpox causes a vesicular rash that progresses from red spots to fluid-filled blisters, often itchy.',
  },
  {
    id: 'pb8-35',
    text: 'Which of the following is the best way to prevent dehydration in summer?',
    options: [
      'Avoid drinking water',
      'Drink plenty of fluids',
      'Wear heavy clothes',
      'Stay in direct sunlight',
    ],
    correctIndex: 1,
    explanation: 'Adequate fluid intake replenishes losses from sweating and prevents heat-related illnesses.',
  },
  {
    id: 'pb8-36',
    text: 'Which of the following is a sign of ear infection?',
    options: [ 'Ear pain and discharge', 'Frequent urination', 'Skin rash', 'Joint pain' ],
    correctIndex: 0,
    explanation: 'Otitis media or externa often presents with localized pain, discharge, and sometimes fever or hearing loss.',
  },
  {
    id: 'pb8-37',
    text: 'Which of the following is the best way to manage minor cuts?',
    options: [
      'Leave it open',
      'Clean with water and apply antiseptic',
      'Cover with dirty cloth',
      'Apply powder',
    ],
    correctIndex: 1,
    explanation: 'Cleaning and antiseptic application prevent infection and promote healing in minor wounds.',
  },
  {
    id: 'pb8-38',
    text: 'Which of the following is a symptom of typhoid?',
    options: [
      'High fever and abdominal pain',
      'Skin rash',
      'Frequent urination',
      'Joint pain',
    ],
    correctIndex: 0,
    explanation: 'Typhoid fever presents with prolonged high fever, abdominal discomfort, and sometimes rose spots on the trunk.',
  },
  {
    id: 'pb8-39',
    text: 'Which of the following is the best way to prevent food poisoning?',
    options: [
      'Eat stale food',
      'Wash hands and cook food properly',
      'Avoid refrigeration',
      'Share utensils',
    ],
    correctIndex: 1,
    explanation: 'Proper hygiene and cooking kill pathogens and reduce the risk of foodborne illness.',
  },
  {
    id: 'pb8-40',
    text: 'Which of the following is a sign of eye infection?',
    options: [ 'Redness and discharge', 'Frequent urination', 'Skin rash', 'Joint pain' ],
    correctIndex: 0,
    explanation: 'Conjunctivitis and other eye infections cause redness, tearing, and purulent discharge.',
  },
  {
    id: 'pb8-41',
    text: 'Which of the following is the best way to prevent dental cavities?',
    options: [
      'Avoid brushing',
      'Brush twice daily and reduce sugar intake',
      'Eat sweets frequently',
      'Use dirty toothbrush',
    ],
    correctIndex: 1,
    explanation: 'Oral hygiene and limiting sugar reduce plaque formation and bacterial growth that cause cavities.',
  },
  {
    id: 'pb8-42',
    text: 'Which of the following is a symptom of malaria?',
    options: [
      'Fever with chills and sweating',
      'Skin rash',
      'Frequent urination',
      'Joint pain',
    ],
    correctIndex: 0,
    explanation: 'Malaria causes cyclical fever, chills, and sweating due to red blood cell destruction by parasites.',
  },
  {
    id: 'pb8-43',
    text: 'Which of the following is the best way to manage constipation?',
    options: [
      'Eat low-fiber food',
      'Increase fluid and fiber intake',
      'Avoid exercise',
      'Ignore the urge to defecate',
    ],
    correctIndex: 1,
    explanation: 'Fiber and hydration promote bowel movement regularity and prevent hard stools.',
  },
  {
    id: 'pb8-44',
    text: 'Which of the following is a sign of skin allergy?',
    options: [ 'Itchy red patches', 'Frequent urination', 'Joint pain', 'Dry cough' ],
    correctIndex: 0,
    explanation: 'Skin allergies typically present with pruritus (itching), redness, and sometimes swelling due to histamine release and immune response.',
  },
  {
    id: 'pb8-45',
    text: 'Which of the following is the best way to prevent heat stroke?',
    options: [
      'Stay hydrated and avoid direct sun',
      'Wear thick clothes',
      'Avoid drinking water',
      'Exercise in peak afternoon hours',
    ],
    correctIndex: 0,
    explanation: 'Hydration and avoiding sun exposure during peak heat hours are key to preventing heat stroke, which can be life-threatening.',
  },
  {
    id: 'pb8-46',
    text: 'Which of the following is a symptom of eye strain?',
    options: [
      'Blurred vision and headache',
      'Frequent urination',
      'Skin rash',
      'Joint pain',
    ],
    correctIndex: 0,
    explanation: 'Eye strain from prolonged screen use or poor lighting often causes blurred vision, headaches, and eye discomfort.',
  },
  {
    id: 'pb8-47',
    text: 'Which of the following is the best way to manage nosebleed?',
    options: [
      'Tilt head forward and pinch nose',
      'Tilt head backward',
      'Blow nose forcefully',
      'Apply heat to nose',
    ],
    correctIndex: 0,
    explanation: 'Tilting forward prevents blood from entering the throat, and pinching the nose helps compress bleeding vessels.',
  },
  {
    id: 'pb8-48',
    text: 'Which of the following is a sign of vitamin D deficiency?',
    options: [
      'Bone pain and muscle weakness',
      'Frequent urination',
      'Skin rash',
      'Dry cough',
    ],
    correctIndex: 0,
    explanation: 'Vitamin D deficiency impairs calcium absorption, leading to bone pain, muscle weakness, and increased fracture risk.',
  },
  {
    id: 'pb8-49',
    text: 'Which of the following is the best way to prevent cold and flu?',
    options: [
      'Hand hygiene and vaccination',
      'Avoid bathing',
      'Share personal items',
      'Touch face frequently',
    ],
    correctIndex: 0,
    explanation: 'Hand hygiene reduces transmission, and vaccines protect against specific viral strains responsible for flu.',
  },
  {
    id: 'pb8-50',
    text: 'Which of the following is a symptom of dehydration in infants?',
    options: [
      'Sunken fontanelle and dry mouth',
      'Frequent urination',
      'Skin rash',
      'Excessive drooling',
    ],
    correctIndex: 0,
    explanation: 'Infants show dehydration through signs like sunken fontanelle, dry mucous membranes, and reduced urine output.',
  },
  {
    id: 'pb8-51',
    text: 'Which of the following is a symptom of anemia in children?',
    options: [
      'Pale skin and fatigue',
      'Frequent urination',
      'Skin rash',
      'Dry cough',
    ],
    correctIndex: 0,
    explanation: 'Children with anemia often show pallor, fatigue, and reduced activity due to decreased oxygen-carrying capacity.',
  },
  {
    id: 'pb8-52',
    text: 'Which of the following is the best way to prevent worm infestation?',
    options: [
      'Eat raw vegetables',
      'Wash hands before eating',
      'Avoid bathing',
      'Drink untreated water',
    ],
    correctIndex: 1,
    explanation: 'Hand hygiene before meals prevents ingestion of worm eggs, especially in children.',
  },
  {
    id: 'pb8-53',
    text: 'Which of the following is a symptom of dehydration in adults?',
    options: [
      'Dry mouth and dizziness',
      'Frequent urination',
      'Skin rash',
      'Joint pain',
    ],
    correctIndex: 0,
    explanation: 'Dehydration causes reduced saliva production, dizziness due to low blood volume, and fatigue.',
  },
  {
    id: 'pb8-54',
    text: 'Which of the following is the best way to prevent respiratory infections?',
    options: [
      'Cover mouth while coughing',
      'Share towels',
      'Avoid cleaning surroundings',
      'Touch face frequently',
    ],
    correctIndex: 0,
    explanation: 'Covering the mouth during coughing prevents droplet spread, reducing transmission of respiratory pathogens.',
  },
  {
    id: 'pb8-55',
    text: 'Which of the following is a symptom of vitamin A deficiency?',
    options: [ 'Night blindness', 'Frequent urination', 'Skin rash', 'Joint pain' ],
    correctIndex: 0,
    explanation: 'Vitamin A is essential for vision; deficiency leads to impaired night vision and dry eyes.',
  },
  {
    id: 'pb8-56',
    text: 'Which of the following is the best way to manage fever?',
    options: [
      'Give paracetamol and monitor temperature',
      'Avoid fluids',
      'Apply ice directly to skin',
      'Force feed spicy food',
    ],
    correctIndex: 0,
    explanation: 'Paracetamol reduces fever safely, and monitoring ensures timely intervention if symptoms worsen.',
  },
  {
    id: 'pb8-57',
    text: 'Which of the following is a symptom of scabies?',
    options: [
      'Intense itching, especially at night',
      'Frequent urination',
      'Dry cough',
      'Joint pain',
    ],
    correctIndex: 0,
    explanation: 'Scabies causes severe itching due to mite infestation, often worse at night and in skin folds.',
  },
  {
    id: 'pb8-58',
    text: 'Which of the following is the best way to prevent skin infections?',
    options: [
      'Maintain personal hygiene',
      'Share towels',
      'Avoid bathing',
      'Wear tight clothes',
    ],
    correctIndex: 0,
    explanation: 'Clean skin and clothes reduce microbial growth and prevent skin infections like fungal or bacterial dermatitis.',
  },
  {
    id: 'pb8-59',
    text: 'Which of the following is a symptom of urinary tract infection in children?',
    options: [ 'Pain during urination', 'Skin rash', 'Joint pain', 'Dry cough' ],
    correctIndex: 0,
    explanation: 'UTIs in children often present with dysuria, urgency, and sometimes fever or abdominal pain.',
  },
  {
    id: 'pb8-60',
    text: 'Which of the following is the best way to prevent diarrhea?',
    options: [
      'Drink clean water and wash hands',
      'Eat street food frequently',
      'Avoid washing fruits',
      'Share utensils',
    ],
    correctIndex: 0,
    explanation: 'Safe water and hand hygiene prevent ingestion of pathogens that cause diarrhea.',
  },
  {
    id: 'pb8-61',
    text: 'Which of the following is a symptom of dehydration in children?',
    options: [
      'Sunken eyes and dry mouth',
      'Frequent urination',
      'Skin rash',
      'Joint pain',
    ],
    correctIndex: 0,
    explanation: 'Children show dehydration through sunken eyes, dry mucosa, and reduced urine output.',
  },
  {
    id: 'pb8-62',
    text: 'Which of the following is the best way to prevent eye infections?',
    options: [
      'Avoid touching eyes with dirty hands',
      'Share eye drops',
      'Rub eyes frequently',
      'Use expired medication',
    ],
    correctIndex: 0,
    explanation: 'Dirty hands carry bacteria and viruses that can cause conjunctivitis and other eye infections.',
  },
  {
    id: 'pb8-63',
    text: 'Which of the following is a symptom of ear infection in children?',
    options: [
      'Ear pain and irritability',
      'Frequent urination',
      'Skin rash',
      'Joint pain',
    ],
    correctIndex: 0,
    explanation: 'Children with ear infections may tug at ears, cry excessively, and show signs of pain or fever.',
  },
  {
    id: 'pb8-64',
    text: 'Which of the following is the best way to manage minor burns?',
    options: [
      'Cool with running water and cover with clean cloth',
      'Apply toothpaste',
      'Break blisters',
      'Rub with ice directly',
    ],
    correctIndex: 0,
    explanation: 'Cooling the burn and covering it reduces pain and prevents infection; toothpaste and ice can worsen tissue damage.',
  },
  {
    id: 'pb8-65',
    text: 'Which of the following is a symptom of vitamin C deficiency?',
    options: [
      'Bleeding gums and fatigue',
      'Frequent urination',
      'Skin rash',
      'Joint pain',
    ],
    correctIndex: 0,
    explanation: 'Vitamin C is vital for collagen synthesis; deficiency leads to scurvy symptoms like bleeding gums and fatigue.',
  },
  {
    id: 'pb8-66',
    text: 'Which of the following is the best way to prevent cold sores?',
    options: [
      'Avoid sharing utensils and maintain hygiene',
      'Touch sores frequently',
      'Share lip balm',
      'Ignore symptoms',
    ],
    correctIndex: 0,
    explanation: 'Cold sores are caused by HSV-1 and spread via contact; hygiene and avoiding shared items reduce transmission.',
  },
  {
    id: 'pb8-67',
    text: 'Which of the following is a symptom of food poisoning?',
    options: [
      'Vomiting and abdominal cramps',
      'Frequent urination',
      'Skin rash',
      'Joint pain',
    ],
    correctIndex: 0,
    explanation: 'Food poisoning causes GI symptoms like nausea, vomiting, cramps, and diarrhea due to contaminated food.',
  },
  {
    id: 'pb8-68',
    text: 'Which of the following is the best way to prevent lice infestation?',
    options: [
      'Avoid sharing combs and maintain hair hygiene',
      'Share pillows',
      'Avoid washing hair',
      'Use dirty towels',
    ],
    correctIndex: 0,
    explanation: 'Lice spread through shared items; personal hygiene and avoiding shared combs prevent infestation.',
  },
  {
    id: 'pb8-69',
    text: 'Which of the following is a symptom of mumps?',
    options: [ 'Swelling near jaw and fever', 'Frequent urination', 'Skin rash', 'Joint pain' ],
    correctIndex: 0,
    explanation: 'Mumps is a viral infection that typically causes painful swelling of the parotid glands near the jaw, along with fever and malaise.'
  },
  {
    id: 'pb8-70',
    text: 'Which of the following is the best way to prevent fungal infections?',
    options: [
      'Keep skin dry and clean',
      'Wear damp clothes',
      'Share towels',
      'Avoid bathing'
    ],
    correctIndex: 0,
    explanation: 'Fungi thrive in moist environments; keeping skin dry and maintaining hygiene helps prevent infections like ringworm and athlete’s foot.'
  },
  {
    id: 'pb8-71',
    text: 'Which of the following is a symptom of dehydration in elderly patients?',
    options: [
      'Dry mouth and confusion',
      'Frequent urination',
      'Skin rash',
      'Joint pain'
    ],
    correctIndex: 0,
    explanation: 'Older adults may show dehydration through dry mucosa, confusion, dizziness, and low urine output due to reduced fluid reserves.'
  },
  {
    id: 'pb8-72',
    text: 'Which of the following is the best way to manage sore throat?',
    options: [
      'Gargle with warm salt water',
      'Eat spicy food',
      'Avoid fluids',
      'Share utensils'
    ],
    correctIndex: 0,
    explanation: 'Salt water gargles soothe inflammation and help reduce microbial load in the throat, aiding recovery.'
  },
  {
    id: 'pb8-73',
    text: 'Which of the following is a symptom of vitamin B12 deficiency?',
    options: [
      'Fatigue and tingling in hands',
      'Frequent urination',
      'Skin rash',
      'Dry cough'
    ],
    correctIndex: 0,
    explanation: 'Vitamin B12 deficiency affects nerve function and red blood cell production, leading to fatigue, numbness, and neurological symptoms.'
  },
  {
    id: 'pb8-74',
    text: 'Which of the following is the best way to prevent spread of conjunctivitis?',
    options: [
      'Avoid touching eyes and wash hands',
      'Share eye drops',
      'Rub eyes frequently',
      'Use dirty towels'
    ],
    correctIndex: 0,
    explanation: 'Conjunctivitis spreads through contact; hand hygiene and avoiding eye-touching reduce transmission risk.'
  },
  {
    id: 'pb8-75',
    text: 'Which of the following is a symptom of iron deficiency?',
    options: [
      'Fatigue and pale skin',
      'Frequent urination',
      'Skin rash',
      'Joint pain'
    ],
    correctIndex: 0,
    explanation: 'Iron deficiency reduces hemoglobin levels, leading to fatigue, pallor, and sometimes shortness of breath.'
  },
  {
    id: 'pb8-76',
    text: 'Which of the following is a symptom of rubella?',
    options: [ 'Mild fever and pink rash', 'Frequent urination', 'Joint pain', 'Dry cough' ],
    correctIndex: 0,
    explanation: 'Rubella typically presents with low-grade fever, lymphadenopathy, and a pink maculopapular rash that starts on the face and spreads.'
  },
  {
    id: 'pb8-77',
    text: 'Which of the following is the best way to prevent spread of lice?',
    options: [
      'Avoid sharing combs and bedding',
      'Share towels',
      'Use dirty pillowcases',
      'Avoid washing hair'
    ],
    correctIndex: 0,
    explanation: 'Lice spread through direct contact and shared items; hygiene and avoiding shared combs or bedding are key to prevention.'
  },
  {
    id: 'pb8-78',
    text: 'Which of the following is a symptom of dehydration in infants?',
    options: [
      'Sunken fontanelle and dry lips',
      'Frequent urination',
      'Skin rash',
      'Excessive drooling'
    ],
    correctIndex: 0,
    explanation: 'Infants show dehydration through sunken soft spots (fontanelle), dry mucosa, and reduced urine output.'
  },
  {
    id: 'pb8-79',
    text: 'Which of the following is the best way to prevent scabies?',
    options: [
      'Maintain personal hygiene and avoid sharing clothes',
      'Share bedding',
      'Wear tight synthetic clothes',
      'Avoid bathing'
    ],
    correctIndex: 0,
    explanation: 'Scabies spreads through close contact and shared items; hygiene and avoiding shared clothing help prevent infestation.'
  },
  {
    id: 'pb8-80',
    text: 'Which of the following is a symptom of vitamin D deficiency in children?',
    options: [
      'Delayed growth and bowed legs',
      'Frequent urination',
      'Skin rash',
      'Dry cough'
    ],
    correctIndex: 0,
    explanation: 'Vitamin D deficiency impairs calcium absorption, leading to rickets in children — characterized by bone deformities and growth delays.'
  },
  {
    id: 'pb8-81',
    text: 'Which of the following is the best way to manage a sprain?',
    options: [
      'Rest, ice, compression, elevation (RICE)',
      'Massage vigorously',
      'Apply heat immediately',
      'Ignore the pain'
    ],
    correctIndex: 0,
    explanation: 'RICE protocol reduces swelling and pain, promoting healing in soft tissue injuries like sprains.'
  },
  {
    id: 'pb8-82',
    text: 'Which of the following is a symptom of dehydration during diarrhea?',
    options: [
      'Dry mouth and sunken eyes',
      'Frequent urination',
      'Skin rash',
      'Joint pain'
    ],
    correctIndex: 0,
    explanation: 'Diarrhea causes fluid loss; signs like dry mucosa and sunken eyes indicate dehydration.'
  },
  {
    id: 'pb8-83',
    text: 'Which of the following is the best way to prevent spread of ringworm?',
    options: [
      'Avoid sharing towels and maintain hygiene',
      'Wear damp clothes',
      'Share combs',
      'Avoid washing skin'
    ],
    correctIndex: 0,
    explanation: 'Ringworm is a fungal infection spread via contact; hygiene and avoiding shared items are essential for prevention.'
  },
  {
    id: 'pb8-84',
    text: 'Which of the following is a symptom of vitamin B1 deficiency?',
    options: [
      'Fatigue and nerve problems',
      'Frequent urination',
      'Skin rash',
      'Dry cough'
    ],
    correctIndex: 0,
    explanation: 'Vitamin B1 (thiamine) deficiency leads to beriberi, causing fatigue, neuropathy, and cardiac issues.'
  },
  {
    id: 'pb8-85',
    text: 'Which of the following is the best way to manage minor bleeding?',
    options: [
      'Apply pressure with clean cloth',
      'Rub wound vigorously',
      'Leave wound open',
      'Apply powder'
    ],
    correctIndex: 0,
    explanation: 'Direct pressure helps stop bleeding and reduces risk of infection when applied with a clean cloth.'
  },
  {
    id: 'pb8-86',
    text: 'Which of the following is a symptom of vitamin K deficiency?',
    options: [
      'Easy bruising and bleeding',
      'Frequent urination',
      'Skin rash',
      'Dry cough'
    ],
    correctIndex: 0,
    explanation: 'Vitamin K is essential for blood clotting; deficiency leads to prolonged bleeding and easy bruising.'
  },
  {
    id: 'pb8-87',
    text: 'Which of the following is the best way to prevent spread of hepatitis A?',
    options: [
      'Wash hands and avoid contaminated food/water',
      'Share utensils',
      'Avoid bathing',
      'Touch face frequently'
    ],
    correctIndex: 0,
    explanation: 'Hepatitis A spreads via fecal-oral route; hygiene and safe food practices are key to prevention.'
  },
  {
    id: 'pb8-88',
    text: 'Which of the following is a symptom of dehydration in hot weather?',
    options: [
      'Dry mouth and dizziness',
      'Frequent urination',
      'Skin rash',
      'Joint pain'
    ],
    correctIndex: 0,
    explanation: 'Heat-related dehydration causes symptoms like dry mouth, dizziness, and fatigue due to fluid loss.'
  },
  {
    id: 'pb8-89',
    text: 'Which of the following is the best way to prevent spread of cold?',
    options: [
      'Cover mouth while sneezing and wash hands',
      'Share towels',
      'Avoid bathing',
      'Touch nose frequently'
    ],
    correctIndex: 0,
    explanation: 'Respiratory viruses spread via droplets; covering mouth and hand hygiene reduce transmission.'
  },
  {
    id: 'pb8-90',
    text: 'Which of the following is a symptom of vitamin E deficiency?',
    options: [
      'Muscle weakness and vision problems',
      'Frequent urination',
      'Skin rash',
      'Dry cough'
    ],
    correctIndex: 0,
    explanation: 'Vitamin E deficiency affects nerve and muscle function, leading to weakness and visual disturbances.'
  },
  {
    id: 'pb8-91',
    text: 'Which of the following is the best way to manage insect bites?',
    options: [
      'Clean area and apply cold compress',
      'Scratch vigorously',
      'Apply toothpaste',
      'Ignore swelling'
    ],
    correctIndex: 0,
    explanation: 'Cleaning and cooling reduce inflammation and prevent infection; scratching worsens irritation.'
  },
  {
    id: 'pb8-92',
    text: 'Which of the following is a symptom of vitamin B6 deficiency?',
    options: [
      'Irritability and cracked lips',
      'Frequent urination',
      'Skin rash',
      'Dry cough'
    ],
    correctIndex: 0,
    explanation: 'Vitamin B6 deficiency affects mood and skin, causing irritability, glossitis, and cheilitis.'
  },
  {
    id: 'pb8-93',
    text: 'Which of the following is the best way to prevent spread of skin infections?',
    options: [
      'Avoid sharing personal items and maintain hygiene',
      'Share towels',
      'Wear damp clothes',
      'Avoid bathing'
    ],
    correctIndex: 0,
    explanation: 'Skin infections spread via contact; hygiene and avoiding shared items reduce risk.'
  },
  {
    id: 'pb8-94',
    text: 'Which of the following is a symptom of vitamin B3 (niacin) deficiency?',
    options: [
      'Diarrhea, dermatitis, and dementia',
      'Frequent urination',
      'Skin rash',
      'Dry cough'
    ],
    correctIndex: 0,
    explanation: 'Niacin deficiency leads to pellagra, characterized by the \'3 Ds\': diarrhea, dermatitis, and dementia.'
  },
  {
    id: 'pb8-95',
    text: 'Which of the following is the best way to prevent spread of foodborne illnesses?',
    options: [
      'Wash hands and cook food thoroughly',
      'Eat stale food',
      'Avoid refrigeration',
      'Share utensils'
    ],
    correctIndex: 0,
    explanation: 'Proper hygiene and cooking kill pathogens and prevent foodborne diseases like salmonella and E. coli.'
  },
  {
    id: 'pb8-96',
    text: 'Which of the following is a symptom of dehydration in athletes?',
    options: [
      'Muscle cramps and fatigue',
      'Frequent urination',
      'Skin rash',
      'Joint pain'
    ],
    correctIndex: 0,
    explanation: 'Athletes lose fluids through sweat; dehydration leads to cramps, fatigue, and decreased performance.'
  },
  {
    id: 'pb8-97',
    text: 'Which of the following is the best way to manage a bee sting?',
    options: [
      'Remove stinger and apply cold compress',
      'Rub area vigorously',
      'Apply toothpaste',
      'Ignore swelling'
    ],
    correctIndex: 0,
    explanation: 'Removing the stinger and applying cold reduces inflammation and pain; rubbing may worsen the reaction.'
  },
  {
    id: 'pb8-98',
    text: 'Which of the following is a symptom of vitamin B2 (riboflavin) deficiency?',
    options: [
      'Cracked lips and sore throat',
      'Frequent urination',
      'Skin rash',
      'Dry cough'
    ],
    correctIndex: 0,
    explanation: 'Riboflavin deficiency causes cheilitis, glossitis, and sore throat due to impaired mucosal integrity.'
  },
  {
    id: 'pb8-99',
    text: 'Which of the following is the best way to prevent spread of typhoid?',
    options: [
      'Drink clean water and maintain hygiene',
      'Share food and utensils',
      'Avoid bathing',
      'Eat uncovered street food'
    ],
    correctIndex: 0,
    explanation: 'Typhoid spreads via contaminated food and water; hygiene and safe water are essential for prevention.'
  },
  {
    id: 'pb8-100',
    text: 'Which of the following is a symptom of vitamin B5 (pantothenic acid) deficiency?',
    options: [
      'Fatigue and numbness',
      'Frequent urination',
      'Skin rash',
      'Dry cough'
    ],
    correctIndex: 0,
    explanation: 'Pantothenic acid deficiency may cause fatigue, numbness, and burning sensations due to its role in energy metabolism.'
  },
  {
    id: 'pb8-101',
    text: 'Which of the following is the best way to prevent spread of cholera?',
    options: [
      'Use clean drinking water and proper sanitation',
      'Share food',
      'Avoid bathing',
      'Eat raw seafood'
    ],
    correctIndex: 0,
    explanation: 'Cholera spreads via contaminated water; clean water and sanitation are critical to prevent outbreaks.'
  },
  {
    id: 'pb8-102',
    text: 'Which of the following is a symptom of vitamin B7 (biotin) deficiency?',
    options: [
      'Hair loss and skin inflammation',
      'Frequent urination',
      'Skin rash',
      'Dry cough'
    ],
    correctIndex: 0,
    explanation: 'Biotin deficiency affects skin and hair health, leading to alopecia, dermatitis, and neurological symptoms.'
  },
  {
    id: 'pb8-103',
    text: 'Which of the following is the best way to manage heat exhaustion?',
    options: [
      'Move to shade and hydrate',
      'Continue physical activity',
      'Avoid drinking water',
      'Wear heavy clothes'
    ],
    correctIndex: 0,
    explanation: 'Heat exhaustion requires cooling and rehydration to prevent progression to heat stroke.'
  },
  {
    id: 'pb8-104',
    text: 'Which of the following is a symptom of vitamin B9 (folic acid) deficiency?',
    options: [
      'Fatigue and poor concentration',
      'Frequent urination',
      'Skin rash',
      'Dry cough'
    ],
    correctIndex: 0,
    explanation: 'Folic acid deficiency impairs DNA synthesis, leading to anemia, fatigue, and cognitive issues.'
  },
  {
    id: 'pb8-105',
    text: 'Which of the following is the best way to prevent spread of influenza?',
    options: [
      'Vaccination and hand hygiene',
      'Share towels',
      'Avoid bathing',
      'Touch face frequently'
    ],
    correctIndex: 0,
    explanation: 'Influenza spreads via droplets; vaccination and hygiene reduce transmission and severity.'
  },
  {
    id: 'pb8-106',
    text: 'Which of the following is a symptom of vitamin B12 deficiency in elderly?',
    options: [
      'Memory loss and numbness',
      'Frequent urination',
      'Skin rash',
      'Dry cough'
    ],
    correctIndex: 0,
    explanation: 'Vitamin B12 deficiency in elderly can cause neurological symptoms like memory loss, paresthesia, and gait disturbances.'
  },
  {
    id: 'pb8-107',
    text: 'Which of the following is the best way to prevent spread of tuberculosis?',
    options: [
      'Cover mouth while coughing and early diagnosis',
      'Share bedding',
      'Avoid bathing',
      'Touch face frequently'
    ],
    correctIndex: 0,
    explanation: 'TB spreads via airborne droplets; covering mouth and early treatment reduce transmission risk.'
  },
  {
    id: 'pb8-108',
    text: 'Which of the following is a symptom of vitamin B6 deficiency in children?',
    options: [
      'Irritability and seizures',
      'Frequent urination',
      'Skin rash',
      'Dry cough'
    ],
    correctIndex: 0,
    explanation: 'Vitamin B6 deficiency affects neurotransmitter synthesis, leading to irritability, convulsions, and developmental delays in children.'
  }
];

    