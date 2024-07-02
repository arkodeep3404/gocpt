let one_word_prompt = `Classify into "MINIMAL", "LOW", "MODERATE", "HIGH". You should ALWAYS give only ONE option and NOTHING ELSE.
ONLY return ONE option. ALWAYS answer in ONLY one word. DO NOT give full sentences.
ALWAYS give the answer in ALL UPPER CASE. DO NOT EVER give answer in any other case.`;

let instruction1 = `You are an expert at calculating the Risk of Complications and/or Morbidity or Mortality of the Patient Management Decisions Made at Visit (choose highest) You are provided with a detailed medical report. Classify it into "MINIMAL", "LOW", "MODERATE", and "HIGH" on the basis of the Given rules.

MINIMAL
Minimal risk of morbidity from additional diagnostic testing or treatment
Examples only
• Rest
• Gargles
• Elastic bandages
Superficial dressings

LOW
Low risk of morbidity from additional diagnostic testing or treatment
Examples only
OTC drugs
• Minor surgery w/no identified risk factors
• Physical/Occtherapy

MODERATE
MODERATE risk of morbidity from additional diagnostic testing or treatment
Examples only
Prescription drug management
Decision regarding minor surgery with identified patient or procedure risk factors
Decision regarding elective major surgery without identified patient or procedure risk factors
Diagnosis or treatment significantly limited by social determinants of health

HIGH
HIGH risk of morbidity from additional diagnostic testing or treatment
Examples only
Parenteral controlled substances (DEA controlled substance given by route other than digestive tract)
Drug therapy requiring intensive monitoring for toxicity
Decision regarding elective major surgery with identified patient or procedure risk factors
Decision regarding emergency major surgery
Decision regarding hospitalization or escalation of hospital level care (i.e. transfer to ICU)
Decision not to resuscitate or to deescalate care because of poor prognosis


Here is the Report `;

let instruction3 = `Calculate Amount and/or Complexity of Data to be Reviewed & Analyzed (choose highest criteria met). You are provided with a detailed medical report. Classify it into "MINIMAL", "LOW", "MODERATE", and "HIGH" on the basis of the Given rules.


CATEGORY 1
1. Review of prior external note(s) from each unique source (each unique source counted once, regardless of # of notes reviewed)
2. Review of the result(s) of each unique test
3. Ordering of each unique test (includes review of result, do not count in #2)
4. Assessment requiring an Independent historian

CATEGORY 2
Independent interpretation of tests performed by another physician/other qualified healthcare professional (not separately reported)
Do not count independent interpretation for a test billed or ordered by a colleague in the same specialty

CATEGORY 3
Discussion of management or test interpretation- with external physician/other qualified health care professional/ appropriate source (not separately reported)
Requires direct interactive exchange (not via intermediaries or notes)



MINIMAL
If Minimal or No Data Reviewed


LOW
if it meets any combination of 2 from items 1-3 Or Meet item 4 (independent historian)
1. Review of prior external note(s) from each unique source (each unique source counted once, regardless of # of notes reviewed)
2. Review of the result(s) of each unique test
3. Ordering of each unique test (includes review of result, do not count in #2)
4. Assessment requiring an Independent historian


MODERATE
Meet 1 of 3 categories below
Category 1: Meet any combination of 3 from items 1-4
Category 2: Independent interpretation of test
Category 3: Discussion management, or test interpretation (external)


HIGH
Meet 2 of 3 categories below
Category 1: Meet any combination of 3 from items 1-4
Category 2: Independent interpretation of test
Category 3: Discussion management, or test interpretation (external)


Here is the Report `;

let instruction5 = `You are an expert at calculating the complexity of medical problems based on Medical reports. You are provided with a detailed medical report. Classify it into "MINIMAL", "LOW", "MODERATE", and "HIGH" on the basis of the Given rules.

MINIMAL
1 self- limited or minor problem
(runs a definite or prescribed course, is transient in nature, and is not likely to permanently alter health status)

LOW
2 or more self-limited or minor problems; or
1 stable chronic illness (chronic illness which is at treatment goal for the specific patient); or
1 acute, uncomplicated illness or injury (full recovery w/out functional impairment is expected); or
Stable, acute illness (treatment newly or recently initiated, resolution may not be complete, but condition stable); or
Acute, uncomplicated illness or injury requiring hospital inpatient or observation level care (little to no risk of mortality with treatment, but treatment required is delivered in inpt or obs setting)

MODERATE
1 or more chronic illnesses with ex- acerbation, progression, or side effects of treatment (requires supportive care or attention to treatment for side effects); or
2 or more stable chronic illnesses; or
1 undiagnosed new problem with uncertain prognosis (likely to result in high risk of morbidity w/out tx); or
1 acute illness with systemic symptoms (illness that causes systemic symptoms and has high risk of morbidity without treatment); or
1 acute complicated injury (eval of body systems not part of injured organ, extensive injury, or multiple tx options are multiple and/ or associated with risk of morbidity


HIGH
• 1 or more chronic illness- es with severe exacerbation, progression, or side effects of treatment (significant risk of morbidity: may require escalation in level of care); or
1 acute or chronic illness or injury that poses a threat to life or bodily
function (in the near term without treatment e.g. AMI, pulmonary embolus, severe respiratory distress psychiatric illness with potential threat to self or others, peritonitis, acute renal failure)

Here is the Report `;

module.exports = {
  one_word_prompt,
  instruction1,
  instruction3,
  instruction5,
};
