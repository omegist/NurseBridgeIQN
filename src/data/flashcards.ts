
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
      { term: 'Pressure Ulcer Staging: Stage 1', definition: 'Intact skin with non-blanchable redness over a bony prominence.' },
      { term: 'Glasgow Coma Scale (GCS)', definition: 'Assesses level of consciousness based on eye opening, verbal response, and motor response. A lower score indicates deeper coma.' },
      { term: 'Pain Assessment in Non-Verbal Patients', definition: 'Use a specialized tool like the PAINAD (Pain Assessment in Advanced Dementia) scale, which observes breathing, vocalization, facial expression, body language, and consolability.' },
      { term: 'Aseptic Technique Principle', definition: 'Sterile items must only be touched by other sterile items. Keep sterile fields above waist level and do not turn your back on them.' },
      { term: 'Prioritizing Care: ABCs', definition: 'Airway, Breathing, and Circulation are the top priorities in any emergency situation.' },
    ],
  },
  {
    id: 'pharmacology',
    cards: [
      { term: 'Digoxin Administration: Key Check', definition: 'Always check the apical pulse for one full minute before administering. Hold if heart rate is <60 bpm.' },
      { term: 'Digoxin Toxicity Signs', definition: 'Nausea/vomiting, visual disturbances (yellow-green halos), and bradycardia. Hypokalemia increases risk.' },
      { term: 'Furosemide (Lasix): Key Monitoring', definition: 'Monitor serum potassium levels. Loop diuretics cause significant potassium loss (hypokalemia), risking arrhythmias.' },
      { term: 'Warfarin (Coumadin): Patient Teaching', definition: 'Maintain a consistent intake of Vitamin K (leafy greens). Monitor INR regularly. Use a soft toothbrush to prevent bleeding.' },
      { term: 'ACE Inhibitors (e.g., lisinopril): Side Effect', definition: 'A persistent, dry, non-productive cough is a well-known side effect caused by bradykinin accumulation.' },
      { term: 'Medication Abbreviations: "Do Not Use"', definition: '"U" (for unit) and "q.d." (once daily) are on the "Do Not Use" list to prevent major dosing errors. Write out "unit" and "daily".' },
      { term: 'Medication Rights (5 Rights)', definition: 'Right Patient, Right Drug, Right Dose, Right Route, Right Time. Essential for safe medication administration.' },
      { term: 'Medication Calculation: IV Drip Rate', definition: '(Total Volume in mL × Drip Factor in gtt/mL) ÷ (Time in minutes) = Drops per minute.' },
      { term: 'Medication Calculation: Dosage', definition: '(Dose Ordered / Dose on Hand) × Quantity on Hand = Amount to Administer.' },
      { term: 'Allergic Reaction to Antibiotic', definition: 'If a patient develops a rash after starting an antibiotic, stop the infusion immediately and notify the prescriber. This could be an allergic reaction.' },
      { term: 'Hypokalemia & Digoxin', definition: 'Low potassium (hypokalemia) significantly increases the risk of digoxin toxicity. Monitor potassium levels closely in patients on both diuretics and digoxin.' },
    ],
  },
  {
    id: 'medical-surgical',
    cards: [
      { term: 'COPD: Preferred Oxygen Delivery', definition: 'A Venturi mask is preferred as it delivers a precise, controlled concentration of oxygen, reducing the risk of CO2 retention.' },
      { term: 'Diabetic Ketoacidosis (DKA): Classic Signs', definition: 'Kussmaul respirations (deep, rapid breathing) and a fruity odor on the breath due to ketones.' },
      { term: 'Hypovolemic Shock: Key Sign', definition: 'A weak, rapid pulse (tachycardia) is a classic compensatory sign for low blood volume.' },
      { term: 'Increased Intracranial Pressure (ICP): Early Sign', definition: 'A change or decrease in the level of consciousness (LOC) is the earliest and most sensitive indicator.' },
      { term: 'Post-Total Hip Replacement: Positioning', definition: 'Keep the leg slightly abducted (away from the midline) using an abduction pillow. Avoid flexion beyond 90 degrees and adduction to prevent dislocation.' },
      { term: 'Transfusion Reaction: First Action', definition: 'Stop the transfusion immediately, then maintain IV line with normal saline and notify the provider.' },
      { term: 'Sepsis: Priority Action', definition: 'Obtain blood cultures BEFORE administering broad-spectrum antibiotics to identify the pathogen and guide treatment.' },
      { term: 'Butterfly Rash', definition: 'A characteristic red rash across the nose and cheeks ("butterfly rash") is a classic sign of Systemic Lupus Erythematosus (SLE).' },
      { term: 'Hypoglycemia: Signs & Symptoms', definition: 'Shakiness, diaphoresis (sweating), confusion, pallor, and dizziness. Requires immediate glucose administration.' },
      { term: 'Peritonitis: Key Sign', definition: 'A rigid, board-like abdomen is a hallmark sign of peritonitis, which is inflammation of the abdominal lining and a medical emergency.' },
      { term: 'Preventing VAP', definition: 'To prevent Ventilator-Associated Pneumonia (VAP), elevate the head of the bed to 30-45 degrees, perform regular oral care, and use sedation vacations.' },
      { term: 'Post-op Complication: Pulmonary Embolism', definition: 'Sudden onset of shortness of breath and chest pain in a post-operative patient is highly suspicious for a pulmonary embolism.' },
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
      { term: 'MMSE (Mini-Mental State Examination)', definition: 'A tool used to screen for and assess the severity of cognitive impairment.' },
      { term: 'Cognitive Behavioral Therapy (CBT)', definition: 'A therapeutic approach that focuses on identifying and changing negative thought patterns and behaviors.' },
      { term: 'Suicidal Patient: Priority Concern', definition: 'The highest priority is ensuring patient safety and preventing self-harm through constant observation and creating a safe environment.' },
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
      { term: 'Preferred IM Injection Site (Child <7)', definition: 'The vastus lateralis (thigh muscle) is the safest and preferred site for intramuscular injections in young children.' },
      { term: 'Normal Newborn Heart Rate', definition: 'A normal heart rate for a newborn is typically between 100 and 160 beats per minute (bpm).' },
      { term: 'Apgar Score: Low Score Action', definition: 'A low Apgar score (e.g., 4 at 1 minute) indicates that the newborn is in distress and requires immediate resuscitation.' },
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
      { term: 'HPCA Act (Health Practitioners Competence Assurance Act)', definition: 'Ensures that health practitioners are competent and fit to practice their professions to protect public safety.' },
      { term: 'Informed Consent: Core Elements', definition: 'Must be voluntary, given by a competent person, and based on full disclosure of benefits, risks, and alternatives.' },
      { term: 'Tino Rangatiratanga', definition: 'Refers to Māori self-determination and sovereignty, including their right to make decisions about their own health and well-being.' },
      { term: 'Whakapapa', definition: 'Refers to genealogy and ancestry, which is a core concept of Māori identity and connection.' },
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
      { term: 'ACE Inhibitors: Common Side Effect', definition: 'A persistent, dry, non-productive cough is a well-known side effect caused by bradykinin accumulation.' },
      { term: 'Heart\'s Natural Pacemaker', definition: 'The sinoatrial (SA) node, located in the right atrium, initiates the electrical impulse for each heartbeat.' },
      { term: 'Allen\'s Test Purpose', definition: 'To confirm patency of the ulnar artery before radial artery cannulation (e.g., for an ABG), ensuring collateral circulation to the hand.' },
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
      { term: 'Peritonitis: Hallmark Sign', definition: 'A rigid, board-like abdomen with rebound tenderness is a classic sign of peritonitis and requires immediate attention.' },
      { term: 'Celiac Disease: Dietary Restriction', definition: 'Requires a strict, lifelong gluten-free diet. Gluten is found in wheat, barley, and rye.' },
    ],
  },
  {
    id: 'maternity-child-quest',
    cards: [
        { term: 'True Labour: Definitive Sign', definition: 'Progressive cervical dilation and effacement are the only definitive signs of true labour.' },
        { term: 'Meconium-Stained Fluid: Implication', definition: 'Indicates potential fetal distress, requiring close monitoring of the fetal heart rate.' },
        { term: 'Preventing Neonatal Hypothermia', definition: 'Skin-to-skin contact with the mother is the most effective method to maintain a newborn\'s temperature.' },
        { term: 'Postpartum Hemorrhage: Risk Factor', definition: 'Multiparity (having had multiple previous births) increases the risk of uterine atony and postpartum hemorrhage.' },
        { term: 'Sunken Fontanelle: Indication', definition: 'A sunken fontanelle in an infant is a clinical sign of dehydration.' },
        { term: 'Shoulder Dystocia: Primary Concern', definition: 'The primary risk associated with shoulder dystocia during delivery is brachial plexus injury to the infant.' },
        { term: 'Sudden Unexpected Death in Infancy (SUDI): Risk Factor', definition: 'Co-sleeping on an unsafe surface, such as a sofa, significantly increases the risk of SUDI.' },
    ],
  },
  {
    id: 'most-repeated-questions',
    cards: [
        { term: 'Hypoglycemia: Immediate Action', definition: 'For a conscious patient who is pale and shaky, the immediate action is to check their blood glucose level before administering treatment.' },
        { term: 'Cardiogenic Shock: Medication', definition: 'Dobutamine, a positive inotrope, is commonly used to increase the contractility (pumping strength) of the heart.' },
        { term: 'Septic Shock: Highest Risk Patient', definition: 'An elderly, post-operative patient with an indwelling urinary catheter is at very high risk due to age, surgical stress, and a potential source of infection.' },
        { term: 'Anaphylactic Shock: First-Line Drug', definition: 'Adrenaline (epinephrine) is the priority medication as it counteracts vasodilation and bronchoconstriction.' },
        { term: 'Shock: Late Sign', definition: 'Hypotension (low blood pressure) is a late sign of shock, appearing after the body\'s compensatory mechanisms have failed.' },
        { term: 'Neurogenic Shock: Classic Signs', definition: 'Characterized by warm skin (due to vasodilation) and bradycardia (slow heart rate) because of the loss of sympathetic nervous system tone.' },
    ],
  },
  {
    id: 'most-repeated-questions-b',
    cards: [
        { term: 'Hyperosmolar Hyperglycaemic State (HHS): Priority Intervention', definition: 'For a severely dehydrated patient with very high blood glucose, the first priority is to establish IV access and begin fluid resuscitation with isotonic fluids.' },
        { term: 'Digoxin Toxicity: Signs & Action', definition: 'Signs include nausea, visual halos, and bradycardia. The nurse must hold the dose and notify the prescriber immediately.' },
        { term: 'Chemotherapy-Induced Mucositis: Care', definition: 'Advise the patient to rinse their mouth with salt water and avoid spicy or irritating foods. Gentle oral hygiene is key.' },
        { term: 'Anhedonia: Definition', definition: 'A core symptom of depression characterized by the inability to experience pleasure from activities usually found enjoyable.' },
        { term: 'Akathisia: Definition', definition: 'A side effect of some antipsychotic medications characterized by a feeling of inner restlessness and a compelling need to be in constant motion.' },
        { term: 'Post-Tonsillectomy: Rationale for Pulse Checks', definition: 'Tachycardia (a rapid pulse) is an early sign of postoperative hemorrhage, which can occur before visible bleeding is noted.' },
    ],
  },
  {
    id: 'mental-health-iqn',
    cards: [
        { term: 'Delirium Tremens: Sign & Action', definition: 'Restlessness and agitation in a patient withdrawing from alcohol can indicate delirium tremens, a medical emergency. Inform the doctor immediately.' },
        { term: 'Psychiatric Ward Safety', definition: 'A key safety measure is to remove potentially harmful personal belongings and assess the environment for risks of self-harm or aggression.' },
        { term: 'Professional Boundaries: Social Media', definition: 'Decline friend requests from former patients and explain that nurse-patient relationships must remain professional to maintain boundaries.' },
        { term: 'Neurovascular Assessment: Rationale', definition: 'To monitor blood flow (circulation), sensation (nerve function), and movement to detect complications like compartment syndrome after a fracture.' },
        { term: 'ISBAR Communication Tool', definition: 'A structured method for communication (Introduction, Situation, Background, Assessment, Recommendation) to ensure safe and effective handover of information.' },
        { term: 'First-Line Treatment for Panic Disorder', definition: 'Cognitive Behavioral Therapy (CBT) is the first-line treatment, helping individuals change thought patterns and behaviors that contribute to panic.' },
        { term: 'Mania: Key Characteristics', definition: 'A period of intense euphoria, elevated mood, hyperactivity, impulsivity, and a decreased need for sleep.' },
        { term: 'Alcohol Use Disorder: Medication to Discourage Drinking', definition: 'Acamprosate is used to help maintain abstinence from alcohol by reducing cravings and the desire to drink.' },
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
