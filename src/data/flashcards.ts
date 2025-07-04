
import type { FlashcardTopic } from '@/lib/types';
import { topics } from './topics';

const flashcardData: Omit<FlashcardTopic, 'name' | 'description' | 'icon'>[] = [
  {
    id: 'fundamentals',
    cards: [
      { term: 'Pressure Injury: First Intervention', definition: 'Reposition the patient off the affected area. Relieving pressure is the key first step to prevent progression.' },
      { term: 'Airborne Precautions: Key PPE', definition: 'An N95 respirator is required for diseases like pulmonary tuberculosis to filter airborne particles.' },
      { term: 'Sterile Urine Sample (Catheter)', definition: 'Aspirate urine from the sampling port using sterile technique. Never collect from the drainage bag.' },
      { term: 'Contact Precautions: C. diff', definition: 'Requires gloves and gown. Spores are resistant to alcohol, so handwashing with soap and water is crucial.' },
      { term: 'Secondary Prevention Goal', definition: 'Focuses on early detection and prompt treatment of disease to halt its progression (e.g., health screenings).' },
      { term: 'Signs of Hypoxia (Early vs. Late)', definition: 'Early Sign: Restlessness and agitation. Late Sign: Cyanosis (bluish skin discoloration).' },
      { term: 'Most Reliable Fluid Status Indicator', definition: 'Daily weight. It is more accurate than intake/output records, BP, or urine color for tracking fluid balance.' },
    ],
  },
  {
    id: 'pharmacology',
    cards: [
      { term: 'Digoxin Administration: Key Check', definition: 'Always check the apical pulse for one full minute before administering. Hold if heart rate is <60 bpm.' },
      { term: 'Digoxin Toxicity Signs', definition: 'Nausea/vomiting, visual disturbances (yellow-green halos), and bradycardia. Hypokalemia increases risk.' },
      { term: 'Furosemide (Lasix): Key Monitoring', definition: 'Monitor serum potassium levels. Loop diuretics cause significant potassium loss (hypokalemia), risking arrhythmias.' },
      { term: 'Warfarin (Coumadin): Patient Teaching', definition: 'Maintain a consistent intake of Vitamin K (leafy greens). Monitor INR regularly. Use soft toothbrush to prevent bleeding.' },
      { term: 'ACE Inhibitors (e.g., lisinopril): Side Effect', definition: 'A persistent, dry, non-productive cough is a well-known side effect caused by bradykinin accumulation.' },
      { term: 'Medication Abbreviations: "Do Not Use"', definition: '"U" (for unit) and "q.d." (once daily) are on the "Do Not Use" list to prevent major dosing errors. Write out "unit" and "daily".' },
    ],
  },
  {
    id: 'medical-surgical',
    cards: [
      { term: 'COPD: Preferred Oxygen Delivery', definition: 'A Venturi mask is preferred as it delivers a precise, controlled concentration of oxygen, reducing the risk of CO2 retention.' },
      { term: 'Diabetic Ketoacidosis (DKA): Classic Signs', definition: 'Kussmaul respirations (deep, rapid breathing) and a fruity odor on the breath due to ketones.' },
      { term: 'Hypovolemic Shock: Key Sign', definition: 'A weak, rapid pulse (tachycardia) is a classic compensatory sign for low blood volume.' },
      { term: 'Increased Intracranial Pressure (ICP): Early Sign', definition: 'A change or decrease in the level of consciousness (LOC) is the earliest and most sensitive indicator.' },
      { term: 'Post-Total Hip Replacement: Positioning', definition: 'Keep the leg slightly abducted (away from the midline) using an abduction pillow. Avoid flexion beyond 90 degrees and adduction.' },
      { term:p: 'Transfusion Reaction: First Action', definition: 'Stop the transfusion immediately, then maintain IV line with normal saline and notify the provider.' },
      { term: 'Sepsis: Priority Action', definition: 'Obtain blood cultures BEFORE administering broad-spectrum antibiotics to identify the pathogen and guide treatment.' },
    ],
  },
  {
    id: 'mental-health',
    cards: [
      { term: 'Therapeutic Communication: Key Technique', definition: 'Use open-ended questions (e.g., "How are you feeling today?") to encourage patients to share more.' },
      { term: 'De-escalation Priority Action', definition: 'Maintain personal space, use a calm tone, and avoid confrontation. Ensure safety for yourself and the patient.' },
      { term: 'Responding to Hallucinations', definition: 'Acknowledge the patient\'s experience without confirming the reality of the hallucination (e.g., "I don\'t hear the voices, but that sounds frightening for you.").' },
      { term: 'Delirium vs. Dementia', definition: 'Delirium is an acute, fluctuating state of confusion, often with a reversible cause (like infection or dehydration). Dementia is a chronic, progressive cognitive decline.' },
      { term: 'Lithium Toxicity: Early Signs', definition: 'Fine hand tremors, polyuria (increased urination), thirst, and nausea. Requires immediate medical attention.' },
      { term: 'Bipolar Disorder: Manic Phase', definition: 'Characterized by elevated mood, hyperactivity, decreased need for sleep, racing thoughts (flight of ideas), and impulsivity.' },
    ],
  },
  {
    id: 'maternity-paediatric',
    cards: [
      { term: 'Postpartum Hemorrhage: Priority Intervention', definition: 'Firmly massage the uterine fundus to stimulate contraction and control bleeding.' },
      { term: 'Respiratory Distress in Infants: Signs', definition: 'Nasal flaring, grunting, and intercostal retractions (chest sinking in with breaths).' },
      { term: 'Rupture of Membranes: Priority Assessment', definition: 'Immediately assess the fetal heart rate (FHR) to check for a prolapsed cord or fetal distress.' },
      { term: 'Neonatal Hypothermia: Prevention', definition: 'Skin-to-skin contact with the mother is the most effective way to maintain a newborn\'s temperature.' },
      { term: 'Pre-eclampsia: Cardinal Signs', definition: 'Hypertension (high blood pressure) and proteinuria (protein in the urine) after 20 weeks of gestation.' },
      { term: 'Preventing Neural Tube Defects', definition: 'Folic acid supplementation before and during early pregnancy is crucial for preventing defects like spina bifida.' },
    ],
  },
  {
    id: 'nz-nursing-context',
    cards: [
      { term: 'Treaty of Waitangi: The 3 Ps', definition: 'Partnership (working with Māori), Protection (safeguarding Māori health, culture, and rights), and Participation (involving Māori in health decisions).' },
      { term: 'Cultural Safety: Definition', definition: 'The patient determines if care is culturally safe. It requires the nurse to reflect on their own biases and power dynamics.' },
      { term: 'Health & Disability Commissioner (HDC) Code of Rights', definition: 'Guarantees 10 fundamental rights for all health consumers, including the right to be treated with respect, give informed consent, and refuse treatment.' },
      { term: 'Professional Boundaries', definition: 'Maintaining a therapeutic, not personal, relationship with patients. Avoid sharing personal problems, accepting large gifts, or dual relationships.' },
      { term: 'Delegation: The 5 Rights', definition: 'Right Task, Right Circumstance, Right Person, Right Direction/Communication, and Right Supervision. The RN remains accountable.' },
      { term: 'Te Whare Tapa Whā', definition: 'A Māori health model describing health as a four-sided house: Taha Tinana (physical), Taha Hinengaro (mental/emotional), Taha Wairua (spiritual), and Taha Whānau (family/social).' },
    ],
  },
    {
    id: 'cardiology-quest-iqn',
    cards: [
      { term: 'Atrial Fibrillation (AFib): Highest Risk', definition: 'Ischemic stroke due to clot formation from turbulent blood flow. Anticoagulants are key.' },
      { term: 'Acute Myocardial Infarction (MI): ECG Hallmark', definition: 'ST-segment elevation (STEMI) is the classic sign of acute myocardial injury.' },
      { term: 'Beta-Blocker Administration', definition: 'Hold medication and notify provider if heart rate is below 60 bpm (bradycardia).' },
      { term: 'Specific Lab for MI', definition: 'Troponin (I or T) is the most sensitive and specific biomarker for myocardial damage.' },
      { term: 'Nitroglycerin Action', definition: 'Causes vasodilation, which reduces myocardial oxygen demand by decreasing preload and afterload.' },
      { term: 'Right-Sided vs. Left-Sided Heart Failure', definition: 'Right-Sided: Systemic symptoms like peripheral edema, JVD. Left-Sided: Pulmonary symptoms like crackles, dyspnea, orthopnea.' },
      { term: 'Aortic Dissection: Classic Symptom', definition: 'Sudden, severe "tearing" or "ripping" chest pain that often radiates to the back.' },
      { term: 'Pericarditis: Positional Pain Relief', definition: 'Pain is often relieved by sitting up and leaning forward, which reduces pressure on the pericardium.' },
      { term: 'Cardiac Tamponade: Beck\'s Triad', definition: 'The three classic signs are: Hypotension (low BP), Jugular Vein Distention (JVD), and Muffled Heart Sounds.' },
    ],
  },
  {
    id: 'gastro-quest-iqn',
    cards: [
      { term: 'Peptic Ulcer Disease (PUD): Main Cause', definition: 'Infection with the bacterium Helicobacter pylori (H. pylori) is the most common cause.' },
      { term: 'Liver Dysfunction: Key Lab Indicators', definition: 'Elevated liver enzymes, specifically ALT (Alanine Aminotransferase) and AST (Aspartate Aminotransferase).' },
      { term: 'Appendicitis: Classic Pain Pattern', definition: 'Pain typically starts in the periumbilical (around the navel) area and migrates to the right lower quadrant (McBurney\'s point).' },
      { term: 'Hepatic Encephalopathy: Key Sign & Cause', definition: 'Sign: Asterixis ("liver flap"). Cause: High ammonia levels in the blood that are toxic to the brain. Lactulose is used to reduce ammonia.' },
      { term: 'Upper GI Bleed vs. Lower GI Bleed Stool', definition: 'Upper GI Bleed: Black, tarry stools (melena). Lower GI Bleed: Bright red blood in stool (hematochezia).' },
      { term: 'Stoma Assessment: Urgent Finding', definition: 'A dark, dusky, purple, or black stoma indicates ischemia (lack of blood flow) and is a medical emergency.' },
      { term: 'Pancreatitis: Diagnostic Labs & Priority', definition: 'Labs: Elevated serum amylase and lipase. Priority: Resting the pancreas (NPO status) and managing severe pain.' },
      { term: 'Crohn\'s Disease vs. Ulcerative Colitis', definition: 'Crohn\'s: "Skip lesions" (patchy), transmural (full thickness) inflammation. UC: Continuous inflammation, limited to the colon\'s mucosal layer.' },
    ],
  },
];

// Combine topic metadata with flashcard data
export const flashcardTopics: FlashcardTopic[] = flashcardData.map(fd => {
  const topicInfo = topics.find(t => t.id === fd.id);
  if (!topicInfo) {
    throw new Error(`Topic info not found for flashcard set with id: ${fd.id}`);
  }
  return {
    ...topicInfo,
    cards: fd.cards,
  };
});
