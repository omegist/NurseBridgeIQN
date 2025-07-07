
import type { Question } from '@/lib/types';

export const questions: Question[] = [
  {
    id: '701',
    text: 'A patient with atrial fibrillation is at highest risk for which complication?',
    options: ['Myocardial infarction', 'Ischemic stroke', 'Pulmonary embolism', 'Heart failure'],
    correctIndex: 1,
    explanation: 'Atrial fibrillation causes turbulent blood flow, increasing the risk of clot formation that can travel to the brain, causing a stroke.'
  },
  {
    id: '702',
    text: 'Which of the following ECG changes is most indicative of an acute myocardial infarction (MI)?',
    options: ['Flattened T-waves', 'Prolonged PR interval', 'ST-segment elevation', 'U-waves'],
    correctIndex: 2,
    explanation: 'ST-segment elevation (STEMI) is a hallmark sign of acute myocardial injury and infarction.'
  },
  {
    id: '703',
    text: 'A nurse is administering a beta-blocker. Which assessment finding would require holding the medication?',
    options: ['Blood pressure 140/90 mmHg', 'Heart rate 52 bpm', 'Respiratory rate 20/min', 'Temperature 37.1°C'],
    correctIndex: 1,
    explanation: 'Beta-blockers lower heart rate. A heart rate below 60 bpm (bradycardia) is a common contraindication.'
  },
  {
    id: '704',
    text: 'A patient with heart failure reports waking up at night feeling short of breath. This symptom is known as:',
    options: ['Orthopnea', 'Dyspnea on exertion', 'Paroxysmal nocturnal dyspnea (PND)', 'Apnea'],
    correctIndex: 2,
    explanation: 'PND is sudden shortness of breath that awakens the patient after a period of sleep, often relieved by sitting up.'
  },
  {
    id: '705',
    text: 'Which laboratory test is the most specific indicator of myocardial damage?',
    options: ['Creatine Kinase (CK-MB)', 'Myoglobin', 'Troponin I or T', 'Lactate Dehydrogenase (LDH)'],
    correctIndex: 2,
    explanation: 'Troponins are proteins released into the bloodstream during a heart attack and are the most sensitive and specific markers of myocardial injury.'
  },
  {
    id: '706',
    text: 'What is the primary action of nitroglycerin in treating angina pectoris?',
    options: ['Increases heart rate', 'Causes coronary vasoconstriction', 'Reduces myocardial oxygen demand by causing vasodilation', 'Acts as a potent anti-inflammatory'],
    correctIndex: 2,
    explanation: 'Nitroglycerin dilates blood vessels, which reduces preload and afterload, thereby decreasing the workload and oxygen demand of the heart.'
  },
  {
    id: '707',
    text: 'A patient is diagnosed with deep vein thrombosis (DVT). What is the priority nursing concern?',
    options: ['Pain management', 'Risk for pulmonary embolism', 'Impaired skin integrity', 'Fluid volume deficit'],
    correctIndex: 1,
    explanation: 'A piece of the thrombus (clot) can break off and travel to the lungs, causing a life-threatening pulmonary embolism.'
  },
  {
    id: '708',
    text: 'Which of the following is a classic sign of right-sided heart failure?',
    options: ['Pulmonary crackles', 'Peripheral edema', 'Cyanosis', 'Orthopnea'],
    correctIndex: 1,
    explanation: 'Right-sided heart failure leads to a backup of blood in the systemic circulation, causing fluid to accumulate in the extremities (peripheral edema).'
  },
  {
    id: '709',
    text: 'What is the target blood pressure for most adults with hypertension, according to JNC 8 guidelines?',
    options: ['<120/80 mmHg', '<130/80 mmHg', '<140/90 mmHg', '<150/90 mmHg for those >60 years'],
    correctIndex: 2,
    explanation: 'For most patients, the general target is <140/90 mmHg. For those over 60 without diabetes or CKD, the target is <150/90 mmHg.'
  },
  {
    id: '710',
    text: 'Which electrolyte imbalance is most likely to cause ventricular fibrillation?',
    options: ['Hypocalcemia', 'Hypernatremia', 'Hypokalemia', 'Hypermagnesemia'],
    correctIndex: 2,
    explanation: 'Low potassium levels (hypokalemia) increase myocardial irritability and the risk of life-threatening arrhythmias like VF.'
  },
  {
    id: '711',
    text: 'A nurse is teaching a patient about warfarin (Coumadin) therapy. Which statement indicates the need for further education?',
    options: ['"I will use a soft-bristle toothbrush."', '"I should report any unusual bleeding."', '"I will eat more green leafy vegetables to increase my Vitamin K."', '"I will get my INR checked regularly."'],
    correctIndex: 2,
    explanation: 'Patients on warfarin should maintain a consistent intake of Vitamin K, as sudden increases can counteract the anticoagulant effect of the drug.'
  },
  {
    id: '712',
    text: 'Which heart sound is a hallmark of mitral valve prolapse?',
    options: ['S3 gallop', 'Pericardial friction rub', 'Mid-systolic click', 'Opening snap'],
    correctIndex: 2,
    explanation: 'A mid-systolic click, often followed by a late systolic murmur, is the characteristic auscultatory finding for mitral valve prolapse.'
  },
  {
    id: '713',
    text: 'What is the primary goal of treatment for cardiogenic shock?',
    options: ['Rapid fluid administration', 'Increase peripheral vascular resistance', 'Improve myocardial contractility and cardiac output', 'Decrease heart rate significantly'],
    correctIndex: 2,
    explanation: 'Cardiogenic shock is a "pump problem." The priority is to improve the heart\'s ability to pump effectively using inotropes and other supportive measures.'
  },
  {
    id: '714',
    text: 'A patient presents with a tearing chest pain radiating to the back. Which condition is most likely?',
    options: ['Myocardial infarction', 'Aortic dissection', 'Pulmonary embolism', 'Pericarditis'],
    correctIndex: 1,
    explanation: 'A sudden, severe, tearing or ripping pain in the chest or back is the classic symptom of an aortic dissection, a medical emergency.'
  },
  {
    id: '715',
    text: 'Which medication class is considered first-line for treating hypertension in a patient with diabetes?',
    options: ['Beta-blockers', 'ACE inhibitors or ARBs', 'Calcium channel blockers', 'Thiazide diuretics'],
    correctIndex: 1,
    explanation: 'ACE inhibitors and ARBs are preferred because they have protective effects on the kidneys, which are at risk in patients with diabetes.'
  },
  {
    id: '716',
    text: 'What is the correct procedure for measuring orthostatic vital signs?',
    options: ['Measure BP and pulse after the patient has been standing for 10 minutes', 'Measure BP and pulse in supine, sitting, and standing positions with 1-3 minutes between each', 'Measure BP only in the sitting position at two different times', 'Measure pulse only after vigorous exercise'],
    correctIndex: 1,
    explanation: 'To assess for orthostatic hypotension, BP and pulse should be measured sequentially in supine, sitting, and standing positions, looking for a significant drop in BP or rise in pulse.'
  },
  {
    id: '717',
    text: 'A patient with a pacemaker should be taught to avoid which of the following?',
    options: ['Using a microwave oven', 'Standing near strong magnetic fields (e.g., MRI)', 'Using a mobile phone on the opposite side of the pacemaker', 'Flying on commercial airplanes'],
    correctIndex: 1,
    explanation: 'Strong magnetic fields, such as those from an MRI machine, can interfere with the function of a pacemaker.'
  },
  {
    id: '718',
    text: 'The "lub" sound (S1) of the heartbeat is caused by the closure of which valves?',
    options: ['Aortic and pulmonic valves', 'Mitral and tricuspid valves', 'Mitral and aortic valves', 'Tricuspid and pulmonic valves'],
    correctIndex: 1,
    explanation: 'The S1 sound is produced by the closure of the atrioventricular (AV) valves (mitral and tricuspid) at the beginning of systole.'
  },
  {
    id: '719',
    text: 'A patient with pericarditis may report pain that is relieved by:',
    options: ['Lying flat', 'Deep breathing', 'Sitting up and leaning forward', 'Turning to the left side'],
    correctIndex: 2,
    explanation: 'This position helps to reduce the pressure on the pericardium, thereby alleviating the chest pain associated with pericarditis.'
  },
  {
    id: '720',
    text: 'Which of these is a non-modifiable risk factor for coronary artery disease?',
    options: ['Smoking', 'High-fat diet', 'Family history', 'Sedentary lifestyle'],
    correctIndex: 2,
    explanation: 'Non-modifiable risk factors are those that cannot be changed, such as age, gender, and family history/genetics.'
  },
  {
    id: '721',
    text: 'What is the primary cause of angina pectoris?',
    options: ['A blood clot completely blocking a coronary artery', 'Inflammation of the heart muscle', 'An imbalance between myocardial oxygen supply and demand', 'A tear in the aortic wall'],
    correctIndex: 2,
    explanation: 'Angina is chest pain caused by ischemia (lack of oxygen) when the heart\'s oxygen demand exceeds the supply from coronary arteries.'
  },
  {
    id: '722',
    text: 'A patient is diagnosed with infective endocarditis. The nurse anticipates the administration of which type of medication?',
    options: ['Long-term anticoagulant therapy', 'High-dose diuretic therapy', 'Long-term intravenous (IV) antibiotic therapy', 'Immediate corticosteroid therapy'],
    correctIndex: 2,
    explanation: 'Infective endocarditis is a bacterial infection of the heart\'s inner lining or valves, requiring prolonged IV antibiotic treatment to eradicate the infection.'
  },
  {
    id: '723',
    text: 'Which assessment finding is a classic sign of arterial insufficiency in the lower extremities?',
    options: ['Brownish discoloration of the skin', 'Warm, red skin', 'Pitting edema', 'Intermittent claudication'],
    correctIndex: 3,
    explanation: 'Intermittent claudication is cramping pain in the legs brought on by exertion and relieved by rest, caused by poor arterial blood flow.'
  },
  {
    id: '724',
    text: 'What is the electrical "pacemaker" of the heart?',
    options: ['Atrioventricular (AV) node', 'Sinoatrial (SA) node', 'Bundle of His', 'Purkinje fibers'],
    correctIndex: 1,
    explanation: 'The SA node, located in the right atrium, normally initiates the electrical impulse that starts each heartbeat.'
  },
  {
    id: '725',
    text: 'A common side effect of ACE inhibitors like lisinopril is:',
    options: ['Tachycardia', 'A persistent, dry cough', 'Weight gain', 'Hypokalemia'],
    correctIndex: 1,
    explanation: 'A dry, non-productive cough is a well-known side effect of ACE inhibitors, caused by an accumulation of bradykinin.'
  },
  {
    id: '726',
    text: 'Which of the following is a key component of patient teaching for heart failure management?',
    options: ['Avoiding all physical activity', 'Monitoring daily weight', 'Eating a high-sodium diet', 'Skipping medication doses if feeling well'],
    correctIndex: 1,
    explanation: 'Monitoring daily weight is crucial for detecting fluid retention, an early sign of worsening heart failure.'
  },
  {
    id: '727',
    text: 'In a patient with peripheral venous disease, which intervention is most appropriate?',
    options: ['Elevating the legs above the heart', 'Keeping the legs in a dependent position', 'Applying heating pads to the feet', 'Restricting fluid intake'],
    correctIndex: 0,
    explanation: 'Elevating the legs helps promote venous return and reduce edema in patients with venous insufficiency.'
  },
  {
    id: '728',
    text: 'What does the P wave on an ECG represent?',
    options: ['Ventricular depolarization', 'Ventricular repolarization', 'Atrial depolarization', 'Atrial repolarization'],
    correctIndex: 2,
    explanation: 'The P wave represents the wave of depolarization that spreads from the SA node throughout the atria.'
  },
  {
    id: '729',
    text: 'A patient is scheduled for a cardiac catheterization. What is a crucial pre-procedure assessment?',
    options: ['Assessing for allergies to iodine and shellfish', 'Checking for a history of asthma', 'Measuring abdominal girth', 'Testing hearing acuity'],
    correctIndex: 0,
    explanation: 'The contrast dye used in cardiac catheterization contains iodine, so an allergy can cause a severe reaction.'
  },
  {
    id: '730',
    text: 'Which finding is expected in a patient with severe aortic stenosis?',
    options: ['A wide pulse pressure', 'A bounding pulse', 'A systolic ejection murmur', 'A diastolic rumble'],
    correctIndex: 2,
    explanation: 'Aortic stenosis causes obstruction to outflow from the left ventricle, creating a harsh systolic ejection murmur.'
  },
  {
    id: '731',
    text: 'What is the primary action of diuretics in the treatment of heart failure?',
    options: ['To increase heart rate', 'To strengthen myocardial contraction', 'To reduce fluid volume (preload)', 'To dilate coronary arteries'],
    correctIndex: 2,
    explanation: 'Diuretics promote the excretion of sodium and water, reducing the overall blood volume and thus decreasing the workload on the heart.'
  },
  {
    id: '732',
    text: 'The QRS complex on an ECG represents:',
    options: ['Atrial depolarization', 'Ventricular depolarization', 'Atrial repolarization', 'Ventricular repolarization'],
    correctIndex: 1,
    explanation: 'The QRS complex indicates the rapid depolarization of the right and left ventricles.'
  },
  {
    id: '733',
    text: 'Which of the following describes pulsus paradoxus?',
    options: ['An increase in heart rate during inspiration', 'A decrease in systolic blood pressure of >10 mmHg during inspiration', 'An alternating strong and weak pulse', 'A pulse that is difficult to palpate'],
    correctIndex: 1,
    explanation: 'Pulsus paradoxus is an exaggerated fall in systolic blood pressure during inspiration and is a sign of cardiac tamponade.'
  },
  {
    id: '734',
    text: 'A patient is taking spironolactone, a potassium-sparing diuretic. Which food should they be advised to consume in moderation?',
    options: ['Apples', 'White rice', 'Bananas', 'Cucumbers'],
    correctIndex: 2,
    explanation: 'Bananas are high in potassium. Combining high-potassium foods with a potassium-sparing diuretic can lead to hyperkalemia.'
  },
  {
    id: '735',
    text: 'What is the main therapeutic effect of statin medications (e.g., atorvastatin)?',
    options: ['Lowering blood pressure', 'Lowering LDL cholesterol', 'Preventing blood clots', 'Reducing heart rate'],
    correctIndex: 1,
    explanation: 'Statins work by inhibiting an enzyme in the liver that is crucial for cholesterol production, thereby lowering LDL ("bad") cholesterol.'
  },
  {
    id: '736',
    text: 'Which rhythm requires immediate defibrillation?',
    options: ['Atrial fibrillation', 'Sinus bradycardia', 'Ventricular fibrillation', 'Asystole'],
    correctIndex: 2,
    explanation: 'Ventricular fibrillation is a chaotic, life-threatening rhythm with no cardiac output. Defibrillation is the only effective treatment.'
  },
  {
    id: '737',
    text: 'Jugular Vein Distention (JVD) at 45 degrees is a sign of:',
    options: ['Dehydration', 'Left-sided heart failure', 'Increased central venous pressure / fluid overload', 'Anemia'],
    correctIndex: 2,
    explanation: 'JVD reflects increased pressure in the superior vena cava and is a classic sign of fluid overload, often seen in right-sided heart failure.'
  },
  {
    id: '738',
    text: 'What is a priority nursing intervention after a coronary artery bypass graft (CABG) surgery?',
    options: ['Encouraging coughing and deep breathing', 'Maintaining strict bed rest for 48 hours', 'Restricting all visitors', 'Removing the chest tube immediately'],
    correctIndex: 0,
    explanation: 'Pulmonary hygiene, including coughing and deep breathing, is crucial to prevent postoperative complications like atelectasis and pneumonia.'
  },
  {
    id: '739',
    text: 'What does a bruit heard over the carotid artery signify?',
    options: ['Normal blood flow', 'Complete artery blockage', 'Turbulent blood flow due to stenosis', 'A heart murmur'],
    correctIndex: 2,
    explanation: 'A bruit is a "whooshing" sound caused by turbulent blood flow through a narrowed (stenotic) artery.'
  },
  {
    id: '740',
    text: 'Which of the following is the most dangerous complication of an abdominal aortic aneurysm (AAA)?',
    options: ['Hypertension', 'Rupture and hemorrhage', 'Formation of blood clots', 'Kidney failure'],
    correctIndex: 1,
    explanation: 'Rupture of an AAA is a catastrophic event leading to massive internal bleeding and is often fatal.'
  },
  {
    id: '741',
    text: 'A patient with chronic atrial fibrillation is most likely to be prescribed which type of medication for stroke prevention?',
    options: ['An antiplatelet like aspirin', 'An anticoagulant like apixaban', 'A thrombolytic like alteplase', 'A beta-blocker like metoprolol'],
    correctIndex: 1,
    explanation: 'Anticoagulants are necessary to prevent the formation of thromboemboli (blood clots) in patients with atrial fibrillation.'
  },
  {
    id: '742',
    text: 'What is the correct placement for the V1 precordial ECG lead?',
    options: ['Fourth intercostal space, left sternal border', 'Fourth intercostal space, right sternal border', 'Fifth intercostal space, midclavicular line', 'Second intercostal space, right sternal border'],
    correctIndex: 1,
    explanation: 'Correct placement for V1 is in the fourth intercostal space at the right margin of the sternum.'
  },
  {
    id: '743',
    text: 'Which condition is associated with clubbing of the fingers?',
    options: ['Acute asthma attack', 'Chronic tissue hypoxia', 'Raynaud\'s disease', 'Iron deficiency anemia'],
    correctIndex: 1,
    explanation: 'Clubbing is a physical sign characterized by the bulbous enlargement of the ends of the fingers and toes, often due to chronic hypoxic conditions like severe congenital heart disease or lung disease.'
  },
  {
    id: '744',
    text: 'A patient develops chest pain, dyspnea, and a pericardial friction rub. These are signs of:',
    options: ['Myocarditis', 'Pericarditis', 'Endocarditis', 'Aortic stenosis'],
    correctIndex: 1,
    explanation: 'A pericardial friction rub, a scratching or grating sound, is the hallmark physical finding of pericarditis (inflammation of the pericardium).'
  },
  {
    id: '745',
    text: 'What is the primary action of Calcium Channel Blockers (e.g., amlodipine) in treating hypertension?',
    options: ['Promote sodium excretion', 'Block the effects of adrenaline', 'Cause vasodilation by relaxing smooth muscle in blood vessels', 'Increase the force of heart contractions'],
    correctIndex: 2,
    explanation: 'Calcium channel blockers lower blood pressure by preventing calcium from entering the cells of the heart and arteries, causing them to relax and widen.'
  },
  {
    id: '746',
    text: 'Which of the following is a sign of left-sided heart failure?',
    options: ['Jugular vein distention', 'Ascites', 'Crackles in the lungs', 'Hepatosplenomegaly'],
    correctIndex: 2,
    explanation: 'Left-sided heart failure causes a backup of blood into the pulmonary circulation, leading to fluid in the lungs (pulmonary edema) and audible crackles.'
  },
  {
    id: '747',
    text: 'What is Allen\'s test used to assess?',
    options: ['Deep vein thrombosis', 'The patency of the ulnar artery before radial artery cannulation', 'Carotid artery stenosis', 'Peripheral neuropathy'],
    correctIndex: 1,
    explanation: 'Allen\'s test confirms collateral circulation to the hand from the ulnar artery, which is essential before puncturing the radial artery for an arterial blood gas (ABG) or cannulation.'
  },
  {
    id: '748',
    text: 'What does the T wave on an ECG represent?',
    options: ['Atrial depolarization', 'Ventricular depolarization', 'Ventricular repolarization', 'The resting phase'],
    correctIndex: 2,
    explanation: 'The T wave represents the repolarization (recovery) of the ventricles after they have contracted.'
  },
  {
    id: '749',
    text: 'What is the most common cause of coronary artery disease (CAD)?',
    options: ['Atherosclerosis', 'Valvular dysfunction', 'Congenital defects', 'Infection'],
    correctIndex: 0,
    explanation: 'Atherosclerosis, the buildup of cholesterol plaques in the arteries, is the underlying cause of most cases of CAD.'
  },
  {
    id: '750',
    text: 'A patient has a blood pressure of 210/120 mmHg with signs of end-organ damage. This is considered:',
    options: ['Stage 1 Hypertension', 'Stage 2 Hypertension', 'A hypertensive crisis', 'Normal for their age'],
    correctIndex: 2,
    explanation: 'A hypertensive crisis (or emergency) is a severely elevated blood pressure that is causing target end-organ damage (e.g., brain, heart, kidneys), requiring immediate treatment.'
  },
  {
    id: '751',
    text: 'Which of the following is NOT a component of Virchow\'s triad for DVT risk?',
    options: ['Venous stasis', 'Endothelial injury', 'Hypercoagulability', 'Arterial hypertension'],
    correctIndex: 3,
    explanation: 'Virchow\'s triad consists of venous stasis, endothelial injury, and a hypercoagulable state. Hypertension is an arterial, not venous, issue.'
  },
  {
    id: '752',
    text: 'The "point of maximal impulse" (PMI) is normally palpated at the:',
    options: ['Second intercostal space, right sternal border', 'Fifth intercostal space, midclavicular line', 'Subxiphoid area', 'Second intercostal space, left sternal border'],
    correctIndex: 1,
    explanation: 'The PMI, or apical pulse, is typically located at the apex of the heart, which is found in the fifth intercostal space at the midclavicular line.'
  },
  {
    id: '753',
    text: 'A patient is being treated for heart failure with furosemide. Which lab value is most important for the nurse to monitor?',
    options: ['Hemoglobin', 'Serum potassium', 'White blood cell count', 'Serum creatinine'],
    correctIndex: 1,
    explanation: 'Furosemide is a loop diuretic that causes significant potassium loss. Monitoring for hypokalemia is critical to prevent arrhythmias.'
  },
  {
    id: '754',
    text: 'Which of the following best describes the pathophysiology of stable angina?',
    options: ['A fixed coronary artery obstruction', 'A ruptured atherosclerotic plaque with thrombus formation', 'Coronary artery vasospasm', 'Inflammation of the pericardial sac'],
    correctIndex: 0,
    explanation: 'Stable angina is caused by a fixed, stable atherosclerotic plaque that limits blood flow during times of increased myocardial demand.'
  },
  {
    id: '755',
    text: 'The difference between systolic and diastolic blood pressure is called:',
    options: ['Mean arterial pressure (MAP)', 'Pulse pressure', 'Cardiac output', 'Stroke volume'],
    correctIndex: 1,
    explanation: 'Pulse pressure is the numerical difference between systolic and diastolic blood pressure. A narrow or wide pulse pressure can indicate certain cardiac conditions.'
  },
  {
    id: '756',
    text: 'Which of these arrhythmias is characterized by a "saw-tooth" pattern on an ECG?',
    options: ['Atrial fibrillation', 'Ventricular tachycardia', 'Atrial flutter', 'Sinus tachycardia'],
    correctIndex: 2,
    explanation: 'Atrial flutter produces characteristic flutter waves, often in a "saw-tooth" appearance, due to a rapid, regular atrial rhythm.'
  },
  {
    id: '757',
    text: 'What is a common symptom of digoxin toxicity?',
    options: ['Tachycardia', 'Visual disturbances (e.g., yellow-green halos)', 'Hypertension', 'Increased appetite'],
    correctIndex: 1,
    explanation: 'Visual changes, along with nausea, vomiting, and arrhythmias (especially bradycardia), are classic signs of digoxin toxicity.'
  },
  {
    id: '758',
    text: 'Which is a priority nursing diagnosis for a patient with acute decompensated heart failure and pulmonary edema?',
    options: ['Activity intolerance', 'Impaired gas exchange', 'Risk for infection', 'Knowledge deficit'],
    correctIndex: 1,
    explanation: 'Pulmonary edema impairs the transfer of oxygen in the alveoli, making impaired gas exchange the most life-threatening and highest priority problem.'
  },
  {
    id: '759',
    text: 'What is the primary purpose of a Holter monitor?',
    options: ['To measure blood pressure over 24 hours', 'To continuously record the heart\'s electrical activity over 24-48 hours', 'To visualize the heart valves using ultrasound', 'To measure cardiac enzymes'],
    correctIndex: 1,
    explanation: 'A Holter monitor is a portable ECG device used to detect arrhythmias that may not be present during a standard, brief ECG in a clinical setting.'
  },
  {
    id: '760',
    text: 'A patient has an ankle-brachial index (ABI) of 0.6. This finding is indicative of:',
    options: ['Severe peripheral artery disease', 'Normal arterial circulation', 'Venous insufficiency', 'Moderate peripheral artery disease'],
    correctIndex: 3,
    explanation: 'An ABI between 0.41 and 0.90 indicates mild to moderate peripheral artery disease (PAD).'
  },
  {
    id: '761',
    text: 'Which of the following is a key sign of cardiac tamponade (Beck\'s Triad)?',
    options: ['Hypertension, bradycardia, and wide pulse pressure', 'Hypotension, jugular vein distention, and muffled heart sounds', 'Chest pain, fever, and pericardial friction rub', 'Tachycardia, hypertension, and crackles'],
    correctIndex: 1,
    explanation: 'Beck\'s Triad (hypotension, JVD, and muffled heart sounds) is the classic set of signs for cardiac tamponade, a life-threatening condition.'
  },
  {
    id: '762',
    text: 'Which lifestyle modification is most effective for lowering blood pressure?',
    options: ['Reducing sodium intake', 'Increasing caffeine intake', 'Adopting the DASH diet', 'Taking a daily multivitamin'],
    correctIndex: 2,
    explanation: 'The DASH (Dietary Approaches to Stop Hypertension) diet, which is rich in fruits, vegetables, and low-fat dairy, has been shown to be highly effective in reducing blood pressure.'
  },
  {
    id: '763',
    text: 'What does the PR interval on an ECG represent?',
    options: ['The time it takes for the ventricles to repolarize', 'The time for the electrical impulse to travel from the atria to the ventricles', 'The duration of ventricular contraction', 'The depolarization of the atria'],
    correctIndex: 1,
    explanation: 'The PR interval measures the time from the beginning of the P wave (atrial depolarization) to the beginning of the QRS complex (ventricular depolarization).'
  },
  {
    id: '764',
    text: 'A patient is prescribed sublingual nitroglycerin for angina. How should the nurse instruct the patient to take it?',
    options: ['"Swallow the tablet with a full glass of water."', '"Chew the tablet thoroughly before swallowing."', '"Place the tablet under your tongue and let it dissolve."', '"Take it only after the chest pain has gone away."'],
    correctIndex: 2,
    explanation: 'Sublingual administration allows for rapid absorption of the medication directly into the bloodstream for fast relief of angina.'
  },
  {
    id: '765',
    text: 'Which is the most common symptom of a myocardial infarction in women?',
    options: ['Crushing chest pain radiating to the left arm', 'Sudden cardiac arrest', 'Unusual fatigue, shortness of breath, and indigestion', 'A sharp, stabbing pain on inspiration'],
    correctIndex: 2,
    explanation: 'Women often present with atypical MI symptoms, such as profound fatigue, dyspnea, or epigastric discomfort, rather than classic chest pain.'
  },
  {
    id: '766',
    text: 'What is the purpose of cardiac rehabilitation after an MI?',
    options: ['To ensure the patient remains on strict bed rest', 'To provide a medically supervised program to improve cardiovascular health', 'To administer daily anticoagulant injections', 'To focus solely on dietary restrictions'],
    correctIndex: 1,
    explanation: 'Cardiac rehab is a comprehensive program involving exercise, education, and counseling to help patients recover from a cardiac event and reduce future risk.'
  },
  {
    id: '767',
    text: 'Raynaud\'s disease is a condition characterized by:',
    options: ['Chronic inflammation of large arteries', 'Vasospasm of the arteries in the fingers and toes in response to cold or stress', 'Formation of varicose veins in the legs', 'Aneurysmal dilation of the aorta'],
    correctIndex: 1,
    explanation: 'Raynaud\'s involves episodic vasospasm, leading to characteristic color changes (white, blue, red) in the digits.'
  },
  {
    id: '768',
    text: 'What is the primary danger of untreated hypertension?',
    options: ['Risk of hypotension', 'Damage to target organs like the heart, brain, and kidneys', 'Development of diabetes', 'Chronic fatigue syndrome'],
    correctIndex: 1,
    explanation: 'Chronically elevated blood pressure damages blood vessels and can lead to stroke, heart attack, heart failure, and kidney failure.'
  },
  {
    id: '769',
    text: 'Which of the following is a compensatory mechanism in early heart failure?',
    options: ['Decreased heart rate', 'Activation of the renin-angiotensin-aldosterone system (RAAS)', 'Vasodilation of peripheral arteries', 'Decreased production of adrenaline'],
    correctIndex: 1,
    explanation: 'The RAAS is activated to increase blood pressure and volume in response to decreased cardiac output, but this becomes detrimental long-term.'
  },
  {
    id: '770',
    text: 'A nurse is caring for a patient after a percutaneous coronary intervention (PCI) with stent placement. What is a priority assessment?',
    options: ['Checking for signs of bleeding at the catheter insertion site', 'Monitoring for an increase in appetite', 'Assessing for hearing loss', 'Encouraging immediate, vigorous ambulation'],
    correctIndex: 0,
    explanation: 'The insertion site (usually femoral or radial artery) is at high risk for bleeding or hematoma formation post-procedure.'
  },
  {
    id: '771',
    text: 'Which statement about blood pressure is true?',
    options: ['Diastolic pressure is the peak pressure during ventricular contraction.', 'Systolic pressure reflects the pressure when the heart is at rest.', 'Blood pressure is calculated as Stroke Volume divided by Heart Rate.', 'Systolic pressure is the maximum pressure exerted on arteries when the ventricles contract.'],
    correctIndex: 3,
    explanation: 'Systolic blood pressure represents the peak pressure in the arteries during ventricular systole (contraction).'
  },
  {
    id: '772',
    text: 'A patient with a new diagnosis of hypertension asks how an ACE inhibitor works. The best response is:',
    options: ['"It helps your body get rid of excess fluid by making you urinate more."', '"It slows down your heart rate to reduce its workload."', '"It stops a hormone from being produced that tightens your blood vessels."', '"It directly dissolves cholesterol plaques in your arteries."'],
    correctIndex: 2,
    explanation: 'ACE inhibitors block the conversion of angiotensin I to angiotensin II, a potent vasoconstrictor, thus leading to vasodilation and lower blood pressure.'
  },
  {
    id: '773',
    text: 'What is a common complication of long-standing, uncontrolled atrial fibrillation?',
    options: ['Aortic regurgitation', 'Cardiomyopathy and heart failure', 'Complete heart block', 'Coronary artery vasospasm'],
    correctIndex: 1,
    explanation: 'A persistently rapid heart rate can weaken the heart muscle over time, leading to tachycardia-induced cardiomyopathy and heart failure.'
  },
  {
    id: '774',
    text: 'When auscultating the heart, an S3 heart sound ("ventricular gallop") in an older adult is an early sign of:',
    options: ['A well-conditioned athlete\'s heart', 'Aortic stenosis', 'Heart failure', 'Normal aging'],
    correctIndex: 2,
    explanation: 'In adults over 40, an S3 is a pathologic sign of increased ventricular filling pressure and decreased ventricular compliance, often an early sign of heart failure.'
  },
  {
    id: '775',
    text: 'The primary purpose of administering morphine to a patient with an acute MI is to:',
    options: ['Prevent nausea and vomiting', 'Reduce pain and anxiety, which decreases cardiac workload', 'Dissolve the coronary artery thrombus', 'Increase the patient\'s heart rate'],
    correctIndex: 1,
    explanation: 'Morphine is a potent analgesic and anxiolytic. It also causes some vasodilation, which reduces preload and afterload, decreasing myocardial oxygen demand.'
  },
  {
    id: '776',
    text: 'A patient has a potassium level of 6.2 mEq/L. Which ECG change would the nurse expect to see?',
    options: ['Prominent U wave', 'Tall, peaked T waves', 'ST segment depression', 'Shortened QT interval'],
    correctIndex: 1,
    explanation: 'Hyperkalemia is classically associated with tall, peaked T waves on an ECG, as well as other changes like a widened QRS complex.'
  },
  {
    id: '777',
    text: 'Which of the following is the most important modifiable risk factor for stroke?',
    options: ['Age', 'Gender', 'Hypertension', 'Ethnicity'],
    correctIndex: 2,
    explanation: 'Hypertension is the single most significant modifiable risk factor for both ischemic and hemorrhagic strokes.'
  },
  {
    id: '778',
    text: 'What is the definition of cardiac output?',
    options: ['The amount of blood ejected by a ventricle in one contraction.', 'The pressure the heart must work against to eject blood.', 'The volume of blood pumped by the heart in one minute.', 'The percentage of blood ejected from the left ventricle with each beat.'],
    correctIndex: 2,
    explanation: 'Cardiac output is the total volume of blood pumped by the ventricle per minute, calculated as Stroke Volume × Heart Rate.'
  },
  {
    id: '779',
    text: 'A patient is in asystole. Which action is the priority?',
    options: ['Deliver a shock immediately (defibrillation)', 'Administer amiodarone', 'Start high-quality CPR and administer epinephrine', 'Check for a pulse every 30 seconds'],
    correctIndex: 2,
    explanation: 'Asystole ("flatline") is a non-shockable rhythm. The priority is immediate high-quality CPR and administration of epinephrine according to ACLS guidelines.'
  },
  {
    id: '780',
    text: 'Which of the following is a classic symptom of peripheral artery disease (PAD)?',
    options: ['Warm skin with a ruddy color', 'Leg pain that is worse with dependency (dangling)', 'Leg pain during exercise that is relieved by rest (intermittent claudication)', 'Significant pitting edema in both legs'],
    correctIndex: 2,
    explanation: 'Intermittent claudication is the hallmark symptom of PAD, caused by muscle ischemia during activity.'
  }
];
