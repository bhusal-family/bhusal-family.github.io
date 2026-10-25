// Full-page provisional family register, revision 2.
window.FAMILY_METADATA = {
  "version": 2,
  "title": "भुसाल वंशावली",
  "rootId": "musu",
  "sourceFile": "Bashawoli.jpg",
  "transcribedOn": "2026-10-25",
  "scope": "All visible family branches on the supplied page, including unnamed or unclear placeholders. Names in father/contact notes are preserved as notes unless a direct family row is shown.",
  "generationNote": "Generation 1 starts at Musu. Source columns च, ङ, घ, ग, ख, क, A, B, C, D are kept separately. Generation numbers and inferred links require family review beyond the user-confirmed Musu → Hari Prasad connection.",
  "statusNote": "Only an explicit source death statement is prefilled as Deceased. Missing persons remain Unknown. Unknown does not mean Living."
};
window.FAMILY_DATA = [
  {
    "id": "musu",
    "name": "मुसु",
    "english": "Musu",
    "gender": "Male",
    "generation": 1,
    "column": "च",
    "marker": "१",
    "fatherId": "",
    "motherId": "",
    "spouseIds": [],
    "lifeStatus": "Unknown",
    "branch": "मूल वंश",
    "place": "",
    "fatherNote": "",
    "photo": "",
    "birthAD": "",
    "deathAD": "",
    "birthBS": "",
    "deathBS": "",
    "review": "Confirmed",
    "notes": "Starting ancestor confirmed by the user. No life status supplied.",
    "lineage": true,
    "sourceRefs": [
      "S001"
    ],
    "parentIds": [],
    "treeParentId": "",
    "uncertain": false,
    "sourceNote": "Starting ancestor confirmed by the user. No life status supplied."
  },
  {
    "id": "hari-prasad",
    "name": "हरि प्रसाद",
    "english": "Hari Prasad",
    "gender": "Male",
    "generation": 2,
    "column": "ङ",
    "marker": "१",
    "fatherId": "musu",
    "motherId": "",
    "spouseIds": [],
    "lifeStatus": "Unknown",
    "branch": "मूल वंश",
    "place": "",
    "fatherNote": "",
    "photo": "",
    "birthAD": "",
    "deathAD": "",
    "birthBS": "",
    "deathBS": "",
    "review": "Confirmed",
    "notes": "मुसुका सन्तान; जेठी पट्टी. The user confirmed this connection.",
    "lineage": true,
    "sourceRefs": [
      "S002"
    ],
    "parentIds": [
      "musu"
    ],
    "treeParentId": "musu",
    "uncertain": false,
    "sourceNote": "मुसुका सन्तान; जेठी पट्टी. The user confirmed this connection."
  },
  {
    "id": "chakrapani",
    "name": "चक्रपाणी",
    "english": "Chakrapani",
    "gender": "Male",
    "generation": 3,
    "column": "घ",
    "marker": "१",
    "fatherId": "hari-prasad",
    "motherId": "",
    "spouseIds": [],
    "lifeStatus": "Unknown",
    "branch": "मूल वंश",
    "place": "",
    "fatherNote": "",
    "photo": "",
    "birthAD": "",
    "deathAD": "",
    "birthBS": "",
    "deathBS": "",
    "review": "Draft",
    "notes": "",
    "lineage": true,
    "sourceRefs": [
      "S003"
    ],
    "parentIds": [
      "hari-prasad"
    ],
    "treeParentId": "hari-prasad",
    "uncertain": false,
    "sourceNote": ""
  },
  {
    "id": "rameshwar",
    "name": "रामेश्वर",
    "english": "Rameshwar",
    "gender": "Male",
    "generation": 4,
    "column": "ग",
    "marker": "१",
    "fatherId": "chakrapani",
    "motherId": "",
    "spouseIds": [
      "rameshwar-spouse"
    ],
    "lifeStatus": "Unknown",
    "branch": "मूल वंश",
    "place": "",
    "fatherNote": "",
    "photo": "",
    "birthAD": "",
    "deathAD": "",
    "birthBS": "",
    "deathBS": "",
    "review": "Draft",
    "notes": "",
    "lineage": true,
    "sourceRefs": [
      "S004"
    ],
    "parentIds": [
      "chakrapani"
    ],
    "treeParentId": "chakrapani",
    "uncertain": false,
    "sourceNote": ""
  },
  {
    "id": "rameshwar-spouse",
    "name": "नाम नखुलेको (रामेश्वरको जीवनसाथी)",
    "english": "Unnamed spouse of Rameshwar",
    "gender": "Unknown",
    "generation": 4,
    "column": "ग",
    "marker": "",
    "fatherId": "",
    "motherId": "",
    "spouseIds": [
      "rameshwar"
    ],
    "lifeStatus": "Unknown",
    "branch": "मूल वंश",
    "place": "",
    "fatherNote": "",
    "photo": "",
    "birthAD": "",
    "deathAD": "",
    "birthBS": "",
    "deathBS": "",
    "review": "Needs clarification",
    "notes": "Paper says नाम थाहा नभएको. Gender and name need confirmation.",
    "lineage": false,
    "sourceRefs": [
      "S004"
    ],
    "parentIds": [],
    "uncertain": true,
    "sourceNote": "Paper says नाम थाहा नभएको. Gender and name need confirmation."
  },
  {
    "id": "unclear-kha-1",
    "name": "नाम अस्पष्ट (ख–१)",
    "english": "Unclear name, Kha 1",
    "gender": "Male",
    "generation": 5,
    "column": "ख",
    "marker": "१",
    "fatherId": "rameshwar",
    "motherId": "",
    "spouseIds": [],
    "lifeStatus": "Unknown",
    "branch": "मूल वंश",
    "place": "",
    "fatherNote": "",
    "photo": "",
    "birthAD": "",
    "deathAD": "",
    "birthBS": "",
    "deathBS": "",
    "review": "Needs clarification",
    "notes": "Tiny top-row entry. Name unreadable; parent placement inferred from the column.",
    "lineage": true,
    "sourceRefs": [
      "S005"
    ],
    "parentIds": [
      "rameshwar"
    ],
    "treeParentId": "rameshwar",
    "uncertain": true,
    "sourceNote": "Tiny top-row entry. Name unreadable; parent placement inferred from the column."
  },
  {
    "id": "unclear-ka-1",
    "name": "नाम अस्पष्ट (क–१)",
    "english": "Unclear name, Ka 1",
    "gender": "Male",
    "generation": 6,
    "column": "क",
    "marker": "१",
    "fatherId": "unclear-kha-1",
    "motherId": "",
    "spouseIds": [],
    "lifeStatus": "Unknown",
    "branch": "मूल वंश",
    "place": "",
    "fatherNote": "",
    "photo": "",
    "birthAD": "",
    "deathAD": "",
    "birthBS": "",
    "deathBS": "",
    "review": "Needs clarification",
    "notes": "Top-row name and parent link need confirmation. No guessed personal name entered.",
    "lineage": true,
    "sourceRefs": [
      "S006"
    ],
    "parentIds": [
      "unclear-kha-1"
    ],
    "treeParentId": "unclear-kha-1",
    "uncertain": true,
    "sourceNote": "Top-row name and parent link need confirmation. No guessed personal name entered."
  },
  {
    "id": "unnamed-top-a-1",
    "name": "नाम नखुलेको (माथिल्लो A–१)",
    "english": "Unnamed top A entry",
    "gender": "Male",
    "generation": 7,
    "column": "A",
    "marker": "१",
    "fatherId": "unclear-ka-1",
    "motherId": "",
    "spouseIds": [],
    "lifeStatus": "Unknown",
    "branch": "मूल वंश",
    "place": "",
    "fatherNote": "",
    "photo": "",
    "birthAD": "",
    "deathAD": "",
    "birthBS": "",
    "deathBS": "",
    "review": "Needs clarification",
    "notes": "Numbered top-row placeholder. Confirm that this is a person and confirm the parent.",
    "lineage": true,
    "sourceRefs": [
      "S007"
    ],
    "parentIds": [
      "unclear-ka-1"
    ],
    "treeParentId": "unclear-ka-1",
    "uncertain": true,
    "sourceNote": "Numbered top-row placeholder. Confirm that this is a person and confirm the parent."
  },
  {
    "id": "vasudev-rameshwar",
    "name": "वासुदेव",
    "english": "Vasudev, Rameshwar branch",
    "gender": "Male",
    "generation": 5,
    "column": "ख",
    "marker": "२",
    "fatherId": "rameshwar",
    "motherId": "",
    "spouseIds": [],
    "lifeStatus": "Unknown",
    "branch": "मूल वंश",
    "place": "",
    "fatherNote": "",
    "photo": "",
    "birthAD": "",
    "deathAD": "",
    "birthBS": "",
    "deathBS": "",
    "review": "Draft",
    "notes": "Paper: हराएका (missing). Life status left Unknown.",
    "lineage": true,
    "sourceRefs": [
      "S008"
    ],
    "parentIds": [
      "rameshwar"
    ],
    "treeParentId": "rameshwar",
    "uncertain": false,
    "sourceNote": "Paper: हराएका (missing). Life status left Unknown."
  },
  {
    "id": "prajapati",
    "name": "प्रजापति",
    "english": "Prajapati",
    "gender": "Male",
    "generation": 5,
    "column": "ख",
    "marker": "३",
    "fatherId": "rameshwar",
    "motherId": "",
    "spouseIds": [
      "prajapati-spouse"
    ],
    "lifeStatus": "Unknown",
    "branch": "मूल वंश",
    "place": "",
    "fatherNote": "",
    "photo": "",
    "birthAD": "",
    "deathAD": "",
    "birthBS": "",
    "deathBS": "",
    "review": "Draft",
    "notes": "",
    "lineage": true,
    "sourceRefs": [
      "S009"
    ],
    "parentIds": [
      "rameshwar"
    ],
    "treeParentId": "rameshwar",
    "uncertain": false,
    "sourceNote": ""
  },
  {
    "id": "prajapati-spouse",
    "name": "नाम नखुलेको (प्रजापतिकी पत्नी)",
    "english": "Unnamed wife of Prajapati",
    "gender": "Female",
    "generation": 5,
    "column": "ख",
    "marker": "",
    "fatherId": "",
    "motherId": "",
    "spouseIds": [
      "prajapati"
    ],
    "lifeStatus": "Unknown",
    "branch": "मूल वंश",
    "place": "",
    "fatherNote": "नाम नखुलेको भुर्तेल",
    "photo": "",
    "birthAD": "",
    "deathAD": "",
    "birthBS": "",
    "deathBS": "",
    "review": "Needs clarification",
    "notes": "Paper describes her as भुर्तेलको छोरी. Place partly unreadable.",
    "lineage": false,
    "sourceRefs": [
      "S009"
    ],
    "parentIds": [],
    "uncertain": true,
    "sourceNote": "Paper describes her as भुर्तेलको छोरी. Place partly unreadable."
  },
  {
    "id": "kamalapati",
    "name": "कमलापति",
    "english": "Kamalapati",
    "gender": "Male",
    "generation": 6,
    "column": "क",
    "marker": "१",
    "fatherId": "prajapati",
    "motherId": "",
    "spouseIds": [
      "musuri",
      "kamalapati-tiwari-spouse"
    ],
    "lifeStatus": "Unknown",
    "branch": "कमलापति",
    "place": "",
    "fatherNote": "",
    "photo": "",
    "birthAD": "",
    "deathAD": "",
    "birthBS": "",
    "deathBS": "",
    "review": "Draft",
    "notes": "Two spouse entries appear in separate blocks.",
    "lineage": true,
    "sourceRefs": [
      "S010",
      "S011"
    ],
    "parentIds": [
      "prajapati"
    ],
    "treeParentId": "prajapati",
    "uncertain": false,
    "sourceNote": "Two spouse entries appear in separate blocks."
  },
  {
    "id": "musuri",
    "name": "मुसुरी",
    "english": "Musuri",
    "gender": "Female",
    "generation": 6,
    "column": "क",
    "marker": "",
    "fatherId": "",
    "motherId": "",
    "spouseIds": [
      "kamalapati"
    ],
    "lifeStatus": "Unknown",
    "branch": "कमलापति",
    "place": "भोक्सिङ्ग",
    "fatherNote": "प्रतिमान लामिछाने",
    "photo": "",
    "birthAD": "",
    "deathAD": "",
    "birthBS": "",
    "deathBS": "",
    "review": "Needs clarification",
    "notes": "",
    "lineage": false,
    "sourceRefs": [
      "S010"
    ],
    "parentIds": [],
    "uncertain": true,
    "sourceNote": ""
  },
  {
    "id": "kamalapati-tiwari-spouse",
    "name": "नाम नखुलेको (तिवारी परिवार)",
    "english": "Unnamed spouse, Tiwari family",
    "gender": "Female",
    "generation": 6,
    "column": "क",
    "marker": "",
    "fatherId": "",
    "motherId": "",
    "spouseIds": [
      "kamalapati"
    ],
    "lifeStatus": "Unknown",
    "branch": "कमलापति",
    "place": "सरौँखोला, पैँयु ६",
    "fatherNote": "नाम नखुलेको तिवारी",
    "photo": "",
    "birthAD": "",
    "deathAD": "",
    "birthBS": "",
    "deathBS": "",
    "review": "Needs clarification",
    "notes": "",
    "lineage": false,
    "sourceRefs": [
      "S011"
    ],
    "parentIds": [],
    "uncertain": true,
    "sourceNote": ""
  },
  {
    "id": "buche-vasudev",
    "name": "बुचे वा वासुदेव",
    "english": "Buche or Vasudev",
    "gender": "Male",
    "generation": 6,
    "column": "क",
    "marker": "२",
    "fatherId": "prajapati",
    "motherId": "",
    "spouseIds": [],
    "lifeStatus": "Unknown",
    "branch": "मूल वंश",
    "place": "",
    "fatherNote": "",
    "photo": "",
    "birthAD": "",
    "deathAD": "",
    "birthBS": "",
    "deathBS": "",
    "review": "Draft",
    "notes": "Paper: वेपत्ता (missing). Name is recorded as an alternative; life status remains Unknown.",
    "lineage": true,
    "sourceRefs": [
      "S012"
    ],
    "parentIds": [
      "prajapati"
    ],
    "treeParentId": "prajapati",
    "uncertain": false,
    "sourceNote": "Paper: वेपत्ता (missing). Name is recorded as an alternative; life status remains Unknown."
  },
  {
    "id": "maheshwar",
    "name": "महेश्वर",
    "english": "Maheshwar",
    "gender": "Male",
    "generation": 6,
    "column": "क",
    "marker": "३",
    "fatherId": "prajapati",
    "motherId": "",
    "spouseIds": [
      "maheshwar-spouse"
    ],
    "lifeStatus": "Unknown",
    "branch": "महेश्वर",
    "place": "",
    "fatherNote": "",
    "photo": "",
    "birthAD": "",
    "deathAD": "",
    "birthBS": "",
    "deathBS": "",
    "review": "Draft",
    "notes": "",
    "lineage": true,
    "sourceRefs": [
      "S013"
    ],
    "parentIds": [
      "prajapati"
    ],
    "treeParentId": "prajapati",
    "uncertain": false,
    "sourceNote": ""
  },
  {
    "id": "maheshwar-spouse",
    "name": "नाम नखुलेको (महेश्वरकी पत्नी)",
    "english": "Unnamed wife of Maheshwar",
    "gender": "Female",
    "generation": 6,
    "column": "क",
    "marker": "",
    "fatherId": "",
    "motherId": "",
    "spouseIds": [
      "maheshwar"
    ],
    "lifeStatus": "Unknown",
    "branch": "महेश्वर",
    "place": "गैप्टाङ [?]",
    "fatherNote": "नाम नखुलेको नेपाने",
    "photo": "",
    "birthAD": "",
    "deathAD": "",
    "birthBS": "",
    "deathBS": "",
    "review": "Needs clarification",
    "notes": "",
    "lineage": false,
    "sourceRefs": [
      "S013"
    ],
    "parentIds": [],
    "uncertain": true,
    "sourceNote": ""
  },
  {
    "id": "prajapati-daughter",
    "name": "नाम नखुलेको (प्रजापतिकी छोरी)",
    "english": "Unnamed daughter of Prajapati",
    "gender": "Female",
    "generation": 6,
    "column": "क",
    "marker": "i",
    "fatherId": "prajapati",
    "motherId": "",
    "spouseIds": [
      "sapkota-unnamed"
    ],
    "lifeStatus": "Unknown",
    "branch": "मूल वंश",
    "place": "बिहादी ५, सुनडाडा",
    "fatherNote": "",
    "photo": "",
    "birthAD": "",
    "deathAD": "",
    "birthBS": "",
    "deathBS": "",
    "review": "Needs clarification",
    "notes": "Parent placement inferred from the row in column क. Contact mentioned: मणी प्रसाद सापकोटा; relationship unspecified.",
    "lineage": true,
    "sourceRefs": [
      "S014"
    ],
    "parentIds": [
      "prajapati"
    ],
    "treeParentId": "prajapati",
    "uncertain": true,
    "sourceNote": "Parent placement inferred from the row in column क. Contact mentioned: मणी प्रसाद सापकोटा; relationship unspecified."
  },
  {
    "id": "sapkota-unnamed",
    "name": "नाम नखुलेको सापकोटा",
    "english": "Unnamed Sapkota",
    "gender": "Male",
    "generation": 6,
    "column": "क",
    "marker": "",
    "fatherId": "",
    "motherId": "",
    "spouseIds": [
      "prajapati-daughter"
    ],
    "lifeStatus": "Unknown",
    "branch": "मूल वंश",
    "place": "",
    "fatherNote": "",
    "photo": "",
    "birthAD": "",
    "deathAD": "",
    "birthBS": "",
    "deathBS": "",
    "review": "Needs clarification",
    "notes": "",
    "lineage": false,
    "sourceRefs": [
      "S014"
    ],
    "parentIds": [],
    "uncertain": true,
    "sourceNote": ""
  },
  {
    "id": "balakrishna-prajapati",
    "name": "बालकृष्ण",
    "english": "Balakrishna, Prajapati branch",
    "gender": "Male",
    "generation": 6,
    "column": "क",
    "marker": "४",
    "fatherId": "prajapati",
    "motherId": "",
    "spouseIds": [],
    "lifeStatus": "Deceased",
    "branch": "मूल वंश",
    "place": "भारत (निधन भएको स्थान)",
    "fatherNote": "",
    "photo": "",
    "birthAD": "",
    "deathAD": "",
    "birthBS": "",
    "deathBS": "",
    "review": "Draft",
    "notes": "Paper explicitly says भारतमा निधन and निःसन्तान. Death date is not given.",
    "lineage": true,
    "sourceRefs": [
      "S015"
    ],
    "noChildrenRecordedExplicitly": true,
    "parentIds": [
      "prajapati"
    ],
    "treeParentId": "prajapati",
    "uncertain": false,
    "sourceNote": "Paper explicitly says भारतमा निधन and निःसन्तान. Death date is not given."
  },
  {
    "id": "rameshwar-daughter",
    "name": "नाम नखुलेको (रामेश्वरकी छोरी)",
    "english": "Unnamed daughter of Rameshwar",
    "gender": "Female",
    "generation": 5,
    "column": "ख",
    "marker": "i",
    "fatherId": "rameshwar",
    "motherId": "",
    "spouseIds": [
      "neupane-unnamed"
    ],
    "lifeStatus": "Unknown",
    "branch": "मूल वंश",
    "place": "पैँयु ५, पाखीमास [?]",
    "fatherNote": "",
    "photo": "",
    "birthAD": "",
    "deathAD": "",
    "birthBS": "",
    "deathBS": "",
    "review": "Needs clarification",
    "notes": "Parent placement needs confirmation. Contact गुरुदेव तिवारी is not assigned a family relationship.",
    "lineage": true,
    "sourceRefs": [
      "S016"
    ],
    "parentIds": [
      "rameshwar"
    ],
    "treeParentId": "rameshwar",
    "uncertain": true,
    "sourceNote": "Parent placement needs confirmation. Contact गुरुदेव तिवारी is not assigned a family relationship."
  },
  {
    "id": "neupane-unnamed",
    "name": "नाम अस्पष्ट नेउपाने",
    "english": "Unclear given name, Neupane",
    "gender": "Male",
    "generation": 5,
    "column": "ख",
    "marker": "",
    "fatherId": "",
    "motherId": "",
    "spouseIds": [
      "rameshwar-daughter"
    ],
    "lifeStatus": "Unknown",
    "branch": "मूल वंश",
    "place": "",
    "fatherNote": "",
    "photo": "",
    "birthAD": "",
    "deathAD": "",
    "birthBS": "",
    "deathBS": "",
    "review": "Needs clarification",
    "notes": "",
    "lineage": false,
    "sourceRefs": [
      "S016"
    ],
    "parentIds": [],
    "uncertain": true,
    "sourceNote": ""
  },
  {
    "id": "motilal",
    "name": "मोतिलाल",
    "english": "Motilal",
    "gender": "Male",
    "generation": 7,
    "column": "A",
    "marker": "१",
    "fatherId": "kamalapati",
    "motherId": "musuri",
    "spouseIds": [
      "narbadi"
    ],
    "lifeStatus": "Unknown",
    "branch": "मोतिलाल",
    "place": "",
    "fatherNote": "",
    "photo": "",
    "birthAD": "",
    "deathAD": "",
    "birthBS": "",
    "deathBS": "",
    "review": "Draft",
    "notes": "",
    "lineage": true,
    "sourceRefs": [
      "S017"
    ],
    "parentIds": [
      "kamalapati",
      "musuri"
    ],
    "treeParentId": "kamalapati",
    "uncertain": false,
    "sourceNote": ""
  },
  {
    "id": "narbadi",
    "name": "नर्वदी",
    "english": "Narbadi",
    "gender": "Female",
    "generation": 7,
    "column": "A",
    "marker": "",
    "fatherId": "",
    "motherId": "",
    "spouseIds": [
      "motilal"
    ],
    "lifeStatus": "Unknown",
    "branch": "मोतिलाल",
    "place": "महाशिला १, सुम्दीखर्क",
    "fatherNote": "शिवशंकर अधिकारी",
    "photo": "",
    "birthAD": "",
    "deathAD": "",
    "birthBS": "",
    "deathBS": "",
    "review": "Needs clarification",
    "notes": "",
    "lineage": false,
    "sourceRefs": [
      "S017"
    ],
    "parentIds": [],
    "uncertain": true,
    "sourceNote": ""
  },
  {
    "id": "tikaram",
    "name": "टीकाराम",
    "english": "Tikaram",
    "gender": "Male",
    "generation": 8,
    "column": "B",
    "marker": "१",
    "fatherId": "motilal",
    "motherId": "narbadi",
    "spouseIds": [
      "parvati"
    ],
    "lifeStatus": "Unknown",
    "branch": "मोतिलाल",
    "place": "",
    "fatherNote": "",
    "photo": "",
    "birthAD": "",
    "deathAD": "",
    "birthBS": "",
    "deathBS": "",
    "review": "Draft",
    "notes": "",
    "lineage": true,
    "sourceRefs": [
      "S018"
    ],
    "parentIds": [
      "motilal",
      "narbadi"
    ],
    "treeParentId": "motilal",
    "uncertain": false,
    "sourceNote": ""
  },
  {
    "id": "parvati",
    "name": "पार्वती",
    "english": "Parvati",
    "gender": "Female",
    "generation": 8,
    "column": "B",
    "marker": "",
    "fatherId": "",
    "motherId": "",
    "spouseIds": [
      "tikaram"
    ],
    "lifeStatus": "Unknown",
    "branch": "मोतिलाल",
    "place": "मध्यविन्दु, नवलपुर",
    "fatherNote": "गंगा प्रसाद पौडेल",
    "photo": "",
    "birthAD": "",
    "deathAD": "",
    "birthBS": "",
    "deathBS": "",
    "review": "Draft",
    "notes": "",
    "lineage": false,
    "sourceRefs": [
      "S018"
    ],
    "parentIds": [],
    "uncertain": false,
    "sourceNote": ""
  },
  {
    "id": "pushpa",
    "name": "पुष्प",
    "english": "Pushpa",
    "gender": "Male",
    "generation": 9,
    "column": "C",
    "marker": "१",
    "fatherId": "tikaram",
    "motherId": "parvati",
    "spouseIds": [
      "kamala"
    ],
    "lifeStatus": "Unknown",
    "branch": "मोतिलाल",
    "place": "",
    "fatherNote": "",
    "photo": "",
    "birthAD": "",
    "deathAD": "",
    "birthBS": "",
    "deathBS": "",
    "review": "Draft",
    "notes": "",
    "lineage": true,
    "sourceRefs": [
      "S019"
    ],
    "parentIds": [
      "tikaram",
      "parvati"
    ],
    "treeParentId": "tikaram",
    "uncertain": false,
    "sourceNote": ""
  },
  {
    "id": "kamala",
    "name": "कमला",
    "english": "Kamala",
    "gender": "Female",
    "generation": 9,
    "column": "C",
    "marker": "",
    "fatherId": "",
    "motherId": "",
    "spouseIds": [
      "pushpa"
    ],
    "lifeStatus": "Unknown",
    "branch": "मोतिलाल",
    "place": "महाशिला ४",
    "fatherNote": "हर्के अधिकारी",
    "photo": "",
    "birthAD": "",
    "deathAD": "",
    "birthBS": "",
    "deathBS": "",
    "review": "Draft",
    "notes": "",
    "lineage": false,
    "sourceRefs": [
      "S019"
    ],
    "parentIds": [],
    "uncertain": false,
    "sourceNote": ""
  },
  {
    "id": "ashish",
    "name": "आशिष",
    "english": "Ashish",
    "gender": "Male",
    "generation": 10,
    "column": "D",
    "marker": "१",
    "fatherId": "pushpa",
    "motherId": "kamala",
    "spouseIds": [],
    "lifeStatus": "Unknown",
    "branch": "मोतिलाल",
    "place": "",
    "fatherNote": "",
    "photo": "",
    "birthAD": "",
    "deathAD": "",
    "birthBS": "",
    "deathBS": "",
    "review": "Draft",
    "notes": "",
    "lineage": true,
    "sourceRefs": [
      "S020"
    ],
    "parentIds": [
      "pushpa",
      "kamala"
    ],
    "treeParentId": "pushpa",
    "uncertain": false,
    "sourceNote": ""
  },
  {
    "id": "archana",
    "name": "अर्चना",
    "english": "Archana",
    "gender": "Female",
    "generation": 10,
    "column": "D",
    "marker": "i",
    "fatherId": "pushpa",
    "motherId": "kamala",
    "spouseIds": [
      "sulabh-dahal"
    ],
    "lifeStatus": "Unknown",
    "branch": "मोतिलाल",
    "place": "",
    "fatherNote": "",
    "photo": "",
    "birthAD": "",
    "deathAD": "",
    "birthBS": "",
    "deathBS": "",
    "review": "Draft",
    "notes": "",
    "lineage": true,
    "sourceRefs": [
      "S021"
    ],
    "parentIds": [
      "pushpa",
      "kamala"
    ],
    "treeParentId": "pushpa",
    "uncertain": false,
    "sourceNote": ""
  },
  {
    "id": "sulabh-dahal",
    "name": "सुलभ दहाल",
    "english": "Sulabh Dahal",
    "gender": "Male",
    "generation": 10,
    "column": "D",
    "marker": "",
    "fatherId": "",
    "motherId": "",
    "spouseIds": [
      "archana"
    ],
    "lifeStatus": "Unknown",
    "branch": "मोतिलाल",
    "place": "कावासोती २",
    "fatherNote": "",
    "photo": "",
    "birthAD": "",
    "deathAD": "",
    "birthBS": "",
    "deathBS": "",
    "review": "Needs clarification",
    "notes": "",
    "lineage": false,
    "sourceRefs": [
      "S021"
    ],
    "parentIds": [],
    "uncertain": true,
    "sourceNote": ""
  },
  {
    "id": "kamal",
    "name": "कमल",
    "english": "Kamal",
    "gender": "Male",
    "generation": 9,
    "column": "C",
    "marker": "२",
    "fatherId": "tikaram",
    "motherId": "parvati",
    "spouseIds": [
      "rina"
    ],
    "lifeStatus": "Unknown",
    "branch": "मोतिलाल",
    "place": "रजहर",
    "fatherNote": "",
    "photo": "",
    "birthAD": "",
    "deathAD": "",
    "birthBS": "",
    "deathBS": "",
    "review": "Draft",
    "notes": "",
    "lineage": true,
    "sourceRefs": [
      "S022"
    ],
    "parentIds": [
      "tikaram",
      "parvati"
    ],
    "treeParentId": "tikaram",
    "uncertain": false,
    "sourceNote": ""
  },
  {
    "id": "rina",
    "name": "रीना",
    "english": "Rina",
    "gender": "Female",
    "generation": 9,
    "column": "C",
    "marker": "",
    "fatherId": "",
    "motherId": "",
    "spouseIds": [
      "kamal"
    ],
    "lifeStatus": "Unknown",
    "branch": "मोतिलाल",
    "place": "सिन्धे [?]; हाल रजहर",
    "fatherNote": "ओम प्रसाद पौडेल",
    "photo": "",
    "birthAD": "",
    "deathAD": "",
    "birthBS": "",
    "deathBS": "",
    "review": "Draft",
    "notes": "",
    "lineage": false,
    "sourceRefs": [
      "S022"
    ],
    "parentIds": [],
    "uncertain": false,
    "sourceNote": ""
  },
  {
    "id": "sylvia",
    "name": "सिल्भिया",
    "english": "Sylvia",
    "gender": "Female",
    "generation": 10,
    "column": "D",
    "marker": "i",
    "fatherId": "kamal",
    "motherId": "rina",
    "spouseIds": [],
    "lifeStatus": "Unknown",
    "branch": "मोतिलाल",
    "place": "",
    "fatherNote": "",
    "photo": "",
    "birthAD": "",
    "deathAD": "",
    "birthBS": "",
    "deathBS": "",
    "review": "Needs clarification",
    "notes": "",
    "lineage": true,
    "sourceRefs": [
      "S023"
    ],
    "parentIds": [
      "kamal",
      "rina"
    ],
    "treeParentId": "kamal",
    "uncertain": true,
    "sourceNote": ""
  },
  {
    "id": "anjana",
    "name": "अन्जना",
    "english": "Anjana",
    "gender": "Female",
    "generation": 9,
    "column": "C",
    "marker": "i",
    "fatherId": "tikaram",
    "motherId": "parvati",
    "spouseIds": [
      "pradip"
    ],
    "lifeStatus": "Unknown",
    "branch": "मोतिलाल",
    "place": "रत्ननगर टाँडी, चितवन",
    "fatherNote": "",
    "photo": "",
    "birthAD": "",
    "deathAD": "",
    "birthBS": "",
    "deathBS": "",
    "review": "Draft",
    "notes": "",
    "lineage": true,
    "sourceRefs": [
      "S024"
    ],
    "parentIds": [
      "tikaram",
      "parvati"
    ],
    "treeParentId": "tikaram",
    "uncertain": false,
    "sourceNote": ""
  },
  {
    "id": "pradip",
    "name": "प्रदिप पौडेल",
    "english": "Pradip Paudel",
    "gender": "Male",
    "generation": 9,
    "column": "C",
    "marker": "",
    "fatherId": "",
    "motherId": "",
    "spouseIds": [
      "anjana"
    ],
    "lifeStatus": "Unknown",
    "branch": "मोतिलाल",
    "place": "",
    "fatherNote": "",
    "photo": "",
    "birthAD": "",
    "deathAD": "",
    "birthBS": "",
    "deathBS": "",
    "review": "Draft",
    "notes": "",
    "lineage": false,
    "sourceRefs": [
      "S024"
    ],
    "parentIds": [],
    "uncertain": false,
    "sourceNote": ""
  },
  {
    "id": "topali",
    "name": "टोपली",
    "english": "Topali",
    "gender": "Female",
    "generation": 8,
    "column": "B",
    "marker": "i",
    "fatherId": "motilal",
    "motherId": "narbadi",
    "spouseIds": [
      "bam-prasad"
    ],
    "lifeStatus": "Unknown",
    "branch": "मोतिलाल",
    "place": "फलेवास १, भंगरा सिरवारी",
    "fatherNote": "",
    "photo": "",
    "birthAD": "",
    "deathAD": "",
    "birthBS": "",
    "deathBS": "",
    "review": "Draft",
    "notes": "",
    "lineage": true,
    "sourceRefs": [
      "S025"
    ],
    "parentIds": [
      "motilal",
      "narbadi"
    ],
    "treeParentId": "motilal",
    "uncertain": false,
    "sourceNote": ""
  },
  {
    "id": "bam-prasad",
    "name": "बम प्रसाद भुसाल",
    "english": "Bam Prasad Bhusal",
    "gender": "Male",
    "generation": 8,
    "column": "B",
    "marker": "",
    "fatherId": "",
    "motherId": "",
    "spouseIds": [
      "topali"
    ],
    "lifeStatus": "Unknown",
    "branch": "मोतिलाल",
    "place": "",
    "fatherNote": "",
    "photo": "",
    "birthAD": "",
    "deathAD": "",
    "birthBS": "",
    "deathBS": "",
    "review": "Draft",
    "notes": "",
    "lineage": false,
    "sourceRefs": [
      "S025"
    ],
    "parentIds": [],
    "uncertain": false,
    "sourceNote": ""
  },
  {
    "id": "lila",
    "name": "लिला",
    "english": "Lila, Motilal branch",
    "gender": "Female",
    "generation": 8,
    "column": "B",
    "marker": "ii",
    "fatherId": "motilal",
    "motherId": "narbadi",
    "spouseIds": [
      "chhabilal"
    ],
    "lifeStatus": "Unknown",
    "branch": "मोतिलाल",
    "place": "बिहादी ५, भतेरपाटा [?]",
    "fatherNote": "",
    "photo": "",
    "birthAD": "",
    "deathAD": "",
    "birthBS": "",
    "deathBS": "",
    "review": "Draft",
    "notes": "",
    "lineage": true,
    "sourceRefs": [
      "S026"
    ],
    "parentIds": [
      "motilal",
      "narbadi"
    ],
    "treeParentId": "motilal",
    "uncertain": false,
    "sourceNote": ""
  },
  {
    "id": "chhabilal",
    "name": "छविलाल पराजुली",
    "english": "Chhabilal Parajuli",
    "gender": "Male",
    "generation": 8,
    "column": "B",
    "marker": "",
    "fatherId": "",
    "motherId": "",
    "spouseIds": [
      "lila"
    ],
    "lifeStatus": "Unknown",
    "branch": "मोतिलाल",
    "place": "",
    "fatherNote": "",
    "photo": "",
    "birthAD": "",
    "deathAD": "",
    "birthBS": "",
    "deathBS": "",
    "review": "Draft",
    "notes": "",
    "lineage": false,
    "sourceRefs": [
      "S026"
    ],
    "parentIds": [],
    "uncertain": false,
    "sourceNote": ""
  },
  {
    "id": "ishwari",
    "name": "इश्वरी प्रसाद",
    "english": "Ishwari Prasad",
    "gender": "Male",
    "generation": 8,
    "column": "B",
    "marker": "२",
    "fatherId": "motilal",
    "motherId": "narbadi",
    "spouseIds": [
      "savitra"
    ],
    "lifeStatus": "Unknown",
    "branch": "मोतिलाल",
    "place": "",
    "fatherNote": "",
    "photo": "",
    "birthAD": "",
    "deathAD": "",
    "birthBS": "",
    "deathBS": "",
    "review": "Draft",
    "notes": "",
    "lineage": true,
    "sourceRefs": [
      "S027"
    ],
    "parentIds": [
      "motilal",
      "narbadi"
    ],
    "treeParentId": "motilal",
    "uncertain": false,
    "sourceNote": ""
  },
  {
    "id": "savitra",
    "name": "सावित्रा",
    "english": "Savitra",
    "gender": "Female",
    "generation": 8,
    "column": "B",
    "marker": "",
    "fatherId": "",
    "motherId": "",
    "spouseIds": [
      "ishwari"
    ],
    "lifeStatus": "Unknown",
    "branch": "मोतिलाल",
    "place": "",
    "fatherNote": "भुवानन्द नेउपाने",
    "photo": "",
    "birthAD": "",
    "deathAD": "",
    "birthBS": "",
    "deathBS": "",
    "review": "Draft",
    "notes": "Source has qualifier कामेका before father’s name; confirm interpretation.",
    "lineage": false,
    "sourceRefs": [
      "S027"
    ],
    "parentIds": [],
    "uncertain": false,
    "sourceNote": "Source has qualifier कामेका before father’s name; confirm interpretation."
  },
  {
    "id": "puna",
    "name": "पुना",
    "english": "Puna",
    "gender": "Female",
    "generation": 9,
    "column": "C",
    "marker": "i",
    "fatherId": "ishwari",
    "motherId": "savitra",
    "spouseIds": [
      "thaneshwar"
    ],
    "lifeStatus": "Unknown",
    "branch": "मोतिलाल",
    "place": "बिहादी ५, उराम",
    "fatherNote": "",
    "photo": "",
    "birthAD": "",
    "deathAD": "",
    "birthBS": "",
    "deathBS": "",
    "review": "Needs clarification",
    "notes": "",
    "lineage": true,
    "sourceRefs": [
      "S028"
    ],
    "parentIds": [
      "ishwari",
      "savitra"
    ],
    "treeParentId": "ishwari",
    "uncertain": true,
    "sourceNote": ""
  },
  {
    "id": "thaneshwar",
    "name": "थानेश्वर तिमिल्सिना",
    "english": "Thaneshwar Timilsina",
    "gender": "Male",
    "generation": 9,
    "column": "C",
    "marker": "",
    "fatherId": "",
    "motherId": "",
    "spouseIds": [
      "puna"
    ],
    "lifeStatus": "Unknown",
    "branch": "मोतिलाल",
    "place": "",
    "fatherNote": "",
    "photo": "",
    "birthAD": "",
    "deathAD": "",
    "birthBS": "",
    "deathBS": "",
    "review": "Draft",
    "notes": "",
    "lineage": false,
    "sourceRefs": [
      "S028"
    ],
    "parentIds": [],
    "uncertain": false,
    "sourceNote": ""
  },
  {
    "id": "namita",
    "name": "नमिता",
    "english": "Namita",
    "gender": "Female",
    "generation": 9,
    "column": "C",
    "marker": "ii",
    "fatherId": "ishwari",
    "motherId": "savitra",
    "spouseIds": [
      "santosh"
    ],
    "lifeStatus": "Unknown",
    "branch": "मोतिलाल",
    "place": "कावासोती ८",
    "fatherNote": "",
    "photo": "",
    "birthAD": "",
    "deathAD": "",
    "birthBS": "",
    "deathBS": "",
    "review": "Draft",
    "notes": "",
    "lineage": true,
    "sourceRefs": [
      "S029"
    ],
    "parentIds": [
      "ishwari",
      "savitra"
    ],
    "treeParentId": "ishwari",
    "uncertain": false,
    "sourceNote": ""
  },
  {
    "id": "santosh",
    "name": "सन्तोष सापकोटा",
    "english": "Santosh Sapkota",
    "gender": "Male",
    "generation": 9,
    "column": "C",
    "marker": "",
    "fatherId": "",
    "motherId": "",
    "spouseIds": [
      "namita"
    ],
    "lifeStatus": "Unknown",
    "branch": "मोतिलाल",
    "place": "",
    "fatherNote": "",
    "photo": "",
    "birthAD": "",
    "deathAD": "",
    "birthBS": "",
    "deathBS": "",
    "review": "Draft",
    "notes": "",
    "lineage": false,
    "sourceRefs": [
      "S029"
    ],
    "parentIds": [],
    "uncertain": false,
    "sourceNote": ""
  },
  {
    "id": "narendra",
    "name": "नरेन्द्र",
    "english": "Narendra",
    "gender": "Male",
    "generation": 9,
    "column": "C",
    "marker": "१",
    "fatherId": "ishwari",
    "motherId": "savitra",
    "spouseIds": [
      "anita"
    ],
    "lifeStatus": "Unknown",
    "branch": "मोतिलाल",
    "place": "",
    "fatherNote": "",
    "photo": "",
    "birthAD": "",
    "deathAD": "",
    "birthBS": "",
    "deathBS": "",
    "review": "Draft",
    "notes": "",
    "lineage": true,
    "sourceRefs": [
      "S030"
    ],
    "parentIds": [
      "ishwari",
      "savitra"
    ],
    "treeParentId": "ishwari",
    "uncertain": false,
    "sourceNote": ""
  },
  {
    "id": "anita",
    "name": "अनिता",
    "english": "Anita",
    "gender": "Female",
    "generation": 9,
    "column": "C",
    "marker": "",
    "fatherId": "",
    "motherId": "",
    "spouseIds": [
      "narendra"
    ],
    "lifeStatus": "Unknown",
    "branch": "मोतिलाल",
    "place": "धनमुढा, स्याङ्जा; हाल झुम्दी [?]",
    "fatherNote": "कमल गैरे",
    "photo": "",
    "birthAD": "",
    "deathAD": "",
    "birthBS": "",
    "deathBS": "",
    "review": "Draft",
    "notes": "",
    "lineage": false,
    "sourceRefs": [
      "S030"
    ],
    "parentIds": [],
    "uncertain": false,
    "sourceNote": ""
  },
  {
    "id": "ayan",
    "name": "आयन",
    "english": "Ayan",
    "gender": "Male",
    "generation": 10,
    "column": "D",
    "marker": "१",
    "fatherId": "narendra",
    "motherId": "anita",
    "spouseIds": [],
    "lifeStatus": "Unknown",
    "branch": "मोतिलाल",
    "place": "",
    "fatherNote": "",
    "photo": "",
    "birthAD": "",
    "deathAD": "",
    "birthBS": "",
    "deathBS": "",
    "review": "Needs clarification",
    "notes": "",
    "lineage": true,
    "sourceRefs": [
      "S031"
    ],
    "parentIds": [
      "narendra",
      "anita"
    ],
    "treeParentId": "narendra",
    "uncertain": true,
    "sourceNote": ""
  },
  {
    "id": "ayanka",
    "name": "आयंका",
    "english": "Ayanka",
    "gender": "Female",
    "generation": 10,
    "column": "D",
    "marker": "i",
    "fatherId": "narendra",
    "motherId": "anita",
    "spouseIds": [],
    "lifeStatus": "Unknown",
    "branch": "मोतिलाल",
    "place": "",
    "fatherNote": "",
    "photo": "",
    "birthAD": "",
    "deathAD": "",
    "birthBS": "",
    "deathBS": "",
    "review": "Needs clarification",
    "notes": "",
    "lineage": true,
    "sourceRefs": [
      "S032"
    ],
    "parentIds": [
      "narendra",
      "anita"
    ],
    "treeParentId": "narendra",
    "uncertain": true,
    "sourceNote": ""
  },
  {
    "id": "bandana",
    "name": "वन्दना",
    "english": "Bandana",
    "gender": "Female",
    "generation": 9,
    "column": "C",
    "marker": "iii",
    "fatherId": "ishwari",
    "motherId": "savitra",
    "spouseIds": [
      "hari"
    ],
    "lifeStatus": "Unknown",
    "branch": "मोतिलाल",
    "place": "अर्जुन चौपारी",
    "fatherNote": "",
    "photo": "",
    "birthAD": "",
    "deathAD": "",
    "birthBS": "",
    "deathBS": "",
    "review": "Draft",
    "notes": "",
    "lineage": true,
    "sourceRefs": [
      "S033"
    ],
    "parentIds": [
      "ishwari",
      "savitra"
    ],
    "treeParentId": "ishwari",
    "uncertain": false,
    "sourceNote": ""
  },
  {
    "id": "hari",
    "name": "हरि चापागाइ",
    "english": "Hari Chapagai",
    "gender": "Male",
    "generation": 9,
    "column": "C",
    "marker": "",
    "fatherId": "",
    "motherId": "",
    "spouseIds": [
      "bandana"
    ],
    "lifeStatus": "Unknown",
    "branch": "मोतिलाल",
    "place": "",
    "fatherNote": "",
    "photo": "",
    "birthAD": "",
    "deathAD": "",
    "birthBS": "",
    "deathBS": "",
    "review": "Draft",
    "notes": "",
    "lineage": false,
    "sourceRefs": [
      "S033"
    ],
    "parentIds": [],
    "uncertain": false,
    "sourceNote": ""
  },
  {
    "id": "keshav",
    "name": "केशव",
    "english": "Keshav",
    "gender": "Male",
    "generation": 9,
    "column": "C",
    "marker": "२",
    "fatherId": "ishwari",
    "motherId": "savitra",
    "spouseIds": [
      "akriti"
    ],
    "lifeStatus": "Unknown",
    "branch": "मोतिलाल",
    "place": "",
    "fatherNote": "",
    "photo": "",
    "birthAD": "",
    "deathAD": "",
    "birthBS": "",
    "deathBS": "",
    "review": "Draft",
    "notes": "",
    "lineage": true,
    "sourceRefs": [
      "S034"
    ],
    "parentIds": [
      "ishwari",
      "savitra"
    ],
    "treeParentId": "ishwari",
    "uncertain": false,
    "sourceNote": ""
  },
  {
    "id": "akriti",
    "name": "आकृति",
    "english": "Akriti",
    "gender": "Female",
    "generation": 9,
    "column": "C",
    "marker": "",
    "fatherId": "",
    "motherId": "",
    "spouseIds": [
      "keshav"
    ],
    "lifeStatus": "Unknown",
    "branch": "मोतिलाल",
    "place": "कावासोती ८",
    "fatherNote": "तिर्थ कँडेल",
    "photo": "",
    "birthAD": "",
    "deathAD": "",
    "birthBS": "",
    "deathBS": "",
    "review": "Draft",
    "notes": "",
    "lineage": false,
    "sourceRefs": [
      "S034"
    ],
    "parentIds": [],
    "uncertain": false,
    "sourceNote": ""
  },
  {
    "id": "kaushila",
    "name": "कौशिला",
    "english": "Kaushila",
    "gender": "Female",
    "generation": 7,
    "column": "A",
    "marker": "i",
    "fatherId": "kamalapati",
    "motherId": "kamalapati-tiwari-spouse",
    "spouseIds": [
      "dayaram-tiwari"
    ],
    "lifeStatus": "Unknown",
    "branch": "कमलापति",
    "place": "",
    "fatherNote": "",
    "photo": "",
    "birthAD": "",
    "deathAD": "",
    "birthBS": "",
    "deathBS": "",
    "review": "Draft",
    "notes": "",
    "lineage": true,
    "sourceRefs": [
      "S035"
    ],
    "parentIds": [
      "kamalapati",
      "kamalapati-tiwari-spouse"
    ],
    "treeParentId": "kamalapati",
    "uncertain": false,
    "sourceNote": ""
  },
  {
    "id": "dayaram-tiwari",
    "name": "दयाराम तिवारी",
    "english": "Dayaram Tiwari",
    "gender": "Male",
    "generation": 7,
    "column": "A",
    "marker": "",
    "fatherId": "",
    "motherId": "",
    "spouseIds": [
      "kaushila"
    ],
    "lifeStatus": "Unknown",
    "branch": "कमलापति",
    "place": "पैँयु ५",
    "fatherNote": "",
    "photo": "",
    "birthAD": "",
    "deathAD": "",
    "birthBS": "",
    "deathBS": "",
    "review": "Draft",
    "notes": "",
    "lineage": false,
    "sourceRefs": [
      "S035"
    ],
    "parentIds": [],
    "uncertain": false,
    "sourceNote": ""
  },
  {
    "id": "reshamlal-tiwari",
    "name": "रेशमलाल तिवारी",
    "english": "Reshamlal Tiwari",
    "gender": "Male",
    "generation": 8,
    "column": "B (note)",
    "marker": "",
    "fatherId": "dayaram-tiwari",
    "motherId": "kaushila",
    "spouseIds": [],
    "lifeStatus": "Unknown",
    "branch": "कमलापति",
    "place": "सिमरी, रुपन्देही",
    "fatherNote": "",
    "photo": "",
    "birthAD": "",
    "deathAD": "",
    "birthBS": "",
    "deathBS": "",
    "review": "Draft",
    "notes": "Explicitly mentioned as छोरा in the marriage note.",
    "lineage": true,
    "sourceRefs": [
      "S035"
    ],
    "treeParentId": "kaushila",
    "parentIds": [
      "dayaram-tiwari",
      "kaushila"
    ],
    "uncertain": false,
    "sourceNote": "Explicitly mentioned as छोरा in the marriage note."
  },
  {
    "id": "basandhara",
    "name": "बसन्धरा",
    "english": "Basandhara",
    "gender": "Female",
    "generation": 7,
    "column": "A",
    "marker": "ii",
    "fatherId": "kamalapati",
    "motherId": "kamalapati-tiwari-spouse",
    "spouseIds": [
      "shobhakhar-neupane"
    ],
    "lifeStatus": "Unknown",
    "branch": "कमलापति",
    "place": "",
    "fatherNote": "",
    "photo": "",
    "birthAD": "",
    "deathAD": "",
    "birthBS": "",
    "deathBS": "",
    "review": "Needs clarification",
    "notes": "",
    "lineage": true,
    "sourceRefs": [
      "S036"
    ],
    "parentIds": [
      "kamalapati",
      "kamalapati-tiwari-spouse"
    ],
    "treeParentId": "kamalapati",
    "uncertain": true,
    "sourceNote": ""
  },
  {
    "id": "shobhakhar-neupane",
    "name": "शोभाखर नेउपाने",
    "english": "Shobhakhar Neupane",
    "gender": "Male",
    "generation": 7,
    "column": "A",
    "marker": "",
    "fatherId": "",
    "motherId": "",
    "spouseIds": [
      "basandhara"
    ],
    "lifeStatus": "Unknown",
    "branch": "कमलापति",
    "place": "कालीगण्डकी २, अरिदेनी [?], गुल्मी",
    "fatherNote": "",
    "photo": "",
    "birthAD": "",
    "deathAD": "",
    "birthBS": "",
    "deathBS": "",
    "review": "Draft",
    "notes": "",
    "lineage": false,
    "sourceRefs": [
      "S036"
    ],
    "parentIds": [],
    "uncertain": false,
    "sourceNote": ""
  },
  {
    "id": "bhim-neupane",
    "name": "भिम नेउपाने",
    "english": "Bhim Neupane",
    "gender": "Male",
    "generation": 8,
    "column": "B (note)",
    "marker": "",
    "fatherId": "shobhakhar-neupane",
    "motherId": "basandhara",
    "spouseIds": [],
    "lifeStatus": "Unknown",
    "branch": "कमलापति",
    "place": "",
    "fatherNote": "",
    "photo": "",
    "birthAD": "",
    "deathAD": "",
    "birthBS": "",
    "deathBS": "",
    "review": "Draft",
    "notes": "Explicitly mentioned as छोरा in the marriage note.",
    "lineage": true,
    "sourceRefs": [
      "S036"
    ],
    "treeParentId": "basandhara",
    "parentIds": [
      "shobhakhar-neupane",
      "basandhara"
    ],
    "uncertain": false,
    "sourceNote": "Explicitly mentioned as छोरा in the marriage note."
  },
  {
    "id": "ratnakhar",
    "name": "रत्नाखर",
    "english": "Ratnakhar",
    "gender": "Male",
    "generation": 7,
    "column": "A",
    "marker": "२",
    "fatherId": "kamalapati",
    "motherId": "kamalapati-tiwari-spouse",
    "spouseIds": [
      "harikala-ratnakhar"
    ],
    "lifeStatus": "Unknown",
    "branch": "रत्नाखर",
    "place": "",
    "fatherNote": "",
    "photo": "",
    "birthAD": "",
    "deathAD": "",
    "birthBS": "",
    "deathBS": "",
    "review": "Needs clarification",
    "notes": "",
    "lineage": true,
    "sourceRefs": [
      "S037"
    ],
    "parentIds": [
      "kamalapati",
      "kamalapati-tiwari-spouse"
    ],
    "treeParentId": "kamalapati",
    "uncertain": true,
    "sourceNote": ""
  },
  {
    "id": "harikala-ratnakhar",
    "name": "हरिकला",
    "english": "Harikala, spouse of Ratnakhar",
    "gender": "Female",
    "generation": 7,
    "column": "A",
    "marker": "",
    "fatherId": "",
    "motherId": "",
    "spouseIds": [
      "ratnakhar"
    ],
    "lifeStatus": "Unknown",
    "branch": "रत्नाखर",
    "place": "बिहादी ६, चकाँड [?]",
    "fatherNote": "जयवल्लभ नेउपाने",
    "photo": "",
    "birthAD": "",
    "deathAD": "",
    "birthBS": "",
    "deathBS": "",
    "review": "Draft",
    "notes": "",
    "lineage": false,
    "sourceRefs": [
      "S037"
    ],
    "parentIds": [],
    "uncertain": false,
    "sourceNote": ""
  },
  {
    "id": "churikala",
    "name": "चुरीकला",
    "english": "Churikala",
    "gender": "Female",
    "generation": 8,
    "column": "B",
    "marker": "i",
    "fatherId": "ratnakhar",
    "motherId": "harikala-ratnakhar",
    "spouseIds": [
      "churamani-neupane"
    ],
    "lifeStatus": "Unknown",
    "branch": "रत्नाखर",
    "place": "",
    "fatherNote": "",
    "photo": "",
    "birthAD": "",
    "deathAD": "",
    "birthBS": "",
    "deathBS": "",
    "review": "Needs clarification",
    "notes": "",
    "lineage": true,
    "sourceRefs": [
      "S038"
    ],
    "parentIds": [
      "ratnakhar",
      "harikala-ratnakhar"
    ],
    "treeParentId": "ratnakhar",
    "uncertain": true,
    "sourceNote": ""
  },
  {
    "id": "churamani-neupane",
    "name": "चुरामणी न्यौपाने",
    "english": "Churamani Neupane",
    "gender": "Male",
    "generation": 8,
    "column": "B",
    "marker": "",
    "fatherId": "",
    "motherId": "",
    "spouseIds": [
      "churikala"
    ],
    "lifeStatus": "Unknown",
    "branch": "रत्नाखर",
    "place": "बिहादी ४, बानीपोखरा [?]",
    "fatherNote": "",
    "photo": "",
    "birthAD": "",
    "deathAD": "",
    "birthBS": "",
    "deathBS": "",
    "review": "Draft",
    "notes": "",
    "lineage": false,
    "sourceRefs": [
      "S038"
    ],
    "parentIds": [],
    "uncertain": false,
    "sourceNote": ""
  },
  {
    "id": "harikala-daughter",
    "name": "हरिकला",
    "english": "Harikala, daughter of Ratnakhar",
    "gender": "Female",
    "generation": 8,
    "column": "B",
    "marker": "ii",
    "fatherId": "ratnakhar",
    "motherId": "harikala-ratnakhar",
    "spouseIds": [
      "bhimlal-neupane"
    ],
    "lifeStatus": "Unknown",
    "branch": "रत्नाखर",
    "place": "",
    "fatherNote": "",
    "photo": "",
    "birthAD": "",
    "deathAD": "",
    "birthBS": "",
    "deathBS": "",
    "review": "Draft",
    "notes": "",
    "lineage": true,
    "sourceRefs": [
      "S039"
    ],
    "parentIds": [
      "ratnakhar",
      "harikala-ratnakhar"
    ],
    "treeParentId": "ratnakhar",
    "uncertain": false,
    "sourceNote": ""
  },
  {
    "id": "bhimlal-neupane",
    "name": "भिमलाल न्यौपाने",
    "english": "Bhimlal Neupane",
    "gender": "Male",
    "generation": 8,
    "column": "B",
    "marker": "",
    "fatherId": "",
    "motherId": "",
    "spouseIds": [
      "harikala-daughter"
    ],
    "lifeStatus": "Unknown",
    "branch": "रत्नाखर",
    "place": "कालीगण्डकी २, अरिदेनी [?], गुल्मी",
    "fatherNote": "",
    "photo": "",
    "birthAD": "",
    "deathAD": "",
    "birthBS": "",
    "deathBS": "",
    "review": "Draft",
    "notes": "",
    "lineage": false,
    "sourceRefs": [
      "S039"
    ],
    "parentIds": [],
    "uncertain": false,
    "sourceNote": ""
  },
  {
    "id": "durga",
    "name": "दुर्गा",
    "english": "Durga",
    "gender": "Female",
    "generation": 8,
    "column": "B",
    "marker": "iii",
    "fatherId": "ratnakhar",
    "motherId": "harikala-ratnakhar",
    "spouseIds": [
      "pashupati-bhurtel"
    ],
    "lifeStatus": "Unknown",
    "branch": "रत्नाखर",
    "place": "",
    "fatherNote": "",
    "photo": "",
    "birthAD": "",
    "deathAD": "",
    "birthBS": "",
    "deathBS": "",
    "review": "Draft",
    "notes": "",
    "lineage": true,
    "sourceRefs": [
      "S040"
    ],
    "parentIds": [
      "ratnakhar",
      "harikala-ratnakhar"
    ],
    "treeParentId": "ratnakhar",
    "uncertain": false,
    "sourceNote": ""
  },
  {
    "id": "pashupati-bhurtel",
    "name": "पशुपति भुर्तेल",
    "english": "Pashupati Bhurtel",
    "gender": "Male",
    "generation": 8,
    "column": "B",
    "marker": "",
    "fatherId": "",
    "motherId": "",
    "spouseIds": [
      "durga"
    ],
    "lifeStatus": "Unknown",
    "branch": "रत्नाखर",
    "place": "पैँयु ५, भुर्तेलथोक",
    "fatherNote": "",
    "photo": "",
    "birthAD": "",
    "deathAD": "",
    "birthBS": "",
    "deathBS": "",
    "review": "Draft",
    "notes": "",
    "lineage": false,
    "sourceRefs": [
      "S040"
    ],
    "parentIds": [],
    "uncertain": false,
    "sourceNote": ""
  },
  {
    "id": "prem-prasad",
    "name": "प्रेम प्रसाद",
    "english": "Prem Prasad",
    "gender": "Male",
    "generation": 8,
    "column": "B",
    "marker": "१",
    "fatherId": "ratnakhar",
    "motherId": "harikala-ratnakhar",
    "spouseIds": [
      "chitrakala"
    ],
    "lifeStatus": "Unknown",
    "branch": "रत्नाखर",
    "place": "",
    "fatherNote": "",
    "photo": "",
    "birthAD": "",
    "deathAD": "",
    "birthBS": "",
    "deathBS": "",
    "review": "Draft",
    "notes": "",
    "lineage": true,
    "sourceRefs": [
      "S041"
    ],
    "parentIds": [
      "ratnakhar",
      "harikala-ratnakhar"
    ],
    "treeParentId": "ratnakhar",
    "uncertain": false,
    "sourceNote": ""
  },
  {
    "id": "chitrakala",
    "name": "चित्र कला",
    "english": "Chitra Kala",
    "gender": "Female",
    "generation": 8,
    "column": "B",
    "marker": "",
    "fatherId": "",
    "motherId": "",
    "spouseIds": [
      "prem-prasad"
    ],
    "lifeStatus": "Unknown",
    "branch": "रत्नाखर",
    "place": "गल्याङ ६, पिडिखोला [?]",
    "fatherNote": "महादेव चापागाइ [अघिल्लो शब्द अस्पष्ट]",
    "photo": "",
    "birthAD": "",
    "deathAD": "",
    "birthBS": "",
    "deathBS": "",
    "review": "Draft",
    "notes": "",
    "lineage": false,
    "sourceRefs": [
      "S041"
    ],
    "parentIds": [],
    "uncertain": false,
    "sourceNote": ""
  },
  {
    "id": "dipson",
    "name": "दिप्सन",
    "english": "Dipson",
    "gender": "Male",
    "generation": 9,
    "column": "C",
    "marker": "१",
    "fatherId": "prem-prasad",
    "motherId": "chitrakala",
    "spouseIds": [],
    "lifeStatus": "Unknown",
    "branch": "रत्नाखर",
    "place": "",
    "fatherNote": "",
    "photo": "",
    "birthAD": "",
    "deathAD": "",
    "birthBS": "",
    "deathBS": "",
    "review": "Needs clarification",
    "notes": "",
    "lineage": true,
    "sourceRefs": [
      "S042"
    ],
    "parentIds": [
      "prem-prasad",
      "chitrakala"
    ],
    "treeParentId": "prem-prasad",
    "uncertain": true,
    "sourceNote": ""
  },
  {
    "id": "dipsikha",
    "name": "दिपसिखा",
    "english": "Dipsikha",
    "gender": "Female",
    "generation": 9,
    "column": "C",
    "marker": "i",
    "fatherId": "prem-prasad",
    "motherId": "chitrakala",
    "spouseIds": [],
    "lifeStatus": "Unknown",
    "branch": "रत्नाखर",
    "place": "",
    "fatherNote": "",
    "photo": "",
    "birthAD": "",
    "deathAD": "",
    "birthBS": "",
    "deathBS": "",
    "review": "Needs clarification",
    "notes": "",
    "lineage": true,
    "sourceRefs": [
      "S043"
    ],
    "parentIds": [
      "prem-prasad",
      "chitrakala"
    ],
    "treeParentId": "prem-prasad",
    "uncertain": true,
    "sourceNote": ""
  },
  {
    "id": "daniel",
    "name": "डेनियल [?]",
    "english": "Daniel [?]",
    "gender": "Male",
    "generation": 9,
    "column": "C",
    "marker": "२",
    "fatherId": "prem-prasad",
    "motherId": "chitrakala",
    "spouseIds": [],
    "lifeStatus": "Unknown",
    "branch": "रत्नाखर",
    "place": "",
    "fatherNote": "",
    "photo": "",
    "birthAD": "",
    "deathAD": "",
    "birthBS": "",
    "deathBS": "",
    "review": "Needs clarification",
    "notes": "",
    "lineage": true,
    "sourceRefs": [
      "S044"
    ],
    "parentIds": [
      "prem-prasad",
      "chitrakala"
    ],
    "treeParentId": "prem-prasad",
    "uncertain": true,
    "sourceNote": ""
  },
  {
    "id": "dhanapati",
    "name": "धनपति",
    "english": "Dhanapati",
    "gender": "Male",
    "generation": 7,
    "column": "A",
    "marker": "१",
    "fatherId": "maheshwar",
    "motherId": "maheshwar-spouse",
    "spouseIds": [
      "dhanapati-spouse"
    ],
    "lifeStatus": "Unknown",
    "branch": "धनपति",
    "place": "",
    "fatherNote": "",
    "photo": "",
    "birthAD": "",
    "deathAD": "",
    "birthBS": "",
    "deathBS": "",
    "review": "Draft",
    "notes": "Repeated A-column blocks treated as the same Dhanapati; family confirmation needed.",
    "lineage": true,
    "sourceRefs": [
      "S045"
    ],
    "parentIds": [
      "maheshwar",
      "maheshwar-spouse"
    ],
    "treeParentId": "maheshwar",
    "uncertain": false,
    "sourceNote": "Repeated A-column blocks treated as the same Dhanapati; family confirmation needed."
  },
  {
    "id": "dhanapati-spouse",
    "name": "नाम नखुलेको (बस्याल परिवार)",
    "english": "Unnamed spouse, Basyal family",
    "gender": "Female",
    "generation": 7,
    "column": "A",
    "marker": "",
    "fatherId": "",
    "motherId": "",
    "spouseIds": [
      "dhanapati"
    ],
    "lifeStatus": "Unknown",
    "branch": "धनपति",
    "place": "बिहादी ५, टारी",
    "fatherNote": "नाम नखुलेको बस्याल",
    "photo": "",
    "birthAD": "",
    "deathAD": "",
    "birthBS": "",
    "deathBS": "",
    "review": "Needs clarification",
    "notes": "",
    "lineage": false,
    "sourceRefs": [
      "S045"
    ],
    "parentIds": [],
    "uncertain": true,
    "sourceNote": ""
  },
  {
    "id": "aniruddha",
    "name": "अनिरुद्ध",
    "english": "Aniruddha",
    "gender": "Male",
    "generation": 8,
    "column": "B",
    "marker": "१",
    "fatherId": "dhanapati",
    "motherId": "dhanapati-spouse",
    "spouseIds": [
      "lalita"
    ],
    "lifeStatus": "Unknown",
    "branch": "धनपति",
    "place": "",
    "fatherNote": "",
    "photo": "",
    "birthAD": "",
    "deathAD": "",
    "birthBS": "",
    "deathBS": "",
    "review": "Draft",
    "notes": "",
    "lineage": true,
    "sourceRefs": [
      "S046"
    ],
    "parentIds": [
      "dhanapati",
      "dhanapati-spouse"
    ],
    "treeParentId": "dhanapati",
    "uncertain": false,
    "sourceNote": ""
  },
  {
    "id": "lalita",
    "name": "ललिता",
    "english": "Lalita",
    "gender": "Female",
    "generation": 8,
    "column": "B",
    "marker": "",
    "fatherId": "",
    "motherId": "",
    "spouseIds": [
      "aniruddha"
    ],
    "lifeStatus": "Unknown",
    "branch": "धनपति",
    "place": "ओखलढुंगा",
    "fatherNote": "लिलापर दहाल [?]",
    "photo": "",
    "birthAD": "",
    "deathAD": "",
    "birthBS": "",
    "deathBS": "",
    "review": "Needs clarification",
    "notes": "",
    "lineage": false,
    "sourceRefs": [
      "S046"
    ],
    "parentIds": [],
    "uncertain": true,
    "sourceNote": ""
  },
  {
    "id": "tika",
    "name": "टीका",
    "english": "Tika",
    "gender": "Female",
    "generation": 9,
    "column": "C",
    "marker": "i",
    "fatherId": "aniruddha",
    "motherId": "lalita",
    "spouseIds": [
      "churamani-kafle"
    ],
    "lifeStatus": "Unknown",
    "branch": "धनपति",
    "place": "",
    "fatherNote": "",
    "photo": "",
    "birthAD": "",
    "deathAD": "",
    "birthBS": "",
    "deathBS": "",
    "review": "Draft",
    "notes": "",
    "lineage": true,
    "sourceRefs": [
      "S047"
    ],
    "parentIds": [
      "aniruddha",
      "lalita"
    ],
    "treeParentId": "aniruddha",
    "uncertain": false,
    "sourceNote": ""
  },
  {
    "id": "churamani-kafle",
    "name": "चुरामणी काफ्ले",
    "english": "Churamani Kafle",
    "gender": "Male",
    "generation": 9,
    "column": "C",
    "marker": "",
    "fatherId": "",
    "motherId": "",
    "spouseIds": [
      "tika"
    ],
    "lifeStatus": "Unknown",
    "branch": "धनपति",
    "place": "कावासोती, शंखदेउ [?]",
    "fatherNote": "",
    "photo": "",
    "birthAD": "",
    "deathAD": "",
    "birthBS": "",
    "deathBS": "",
    "review": "Draft",
    "notes": "",
    "lineage": false,
    "sourceRefs": [
      "S047"
    ],
    "parentIds": [],
    "uncertain": false,
    "sourceNote": ""
  },
  {
    "id": "nita-ballabh",
    "name": "निता बल्लभ",
    "english": "Nita Ballabh",
    "gender": "Male",
    "generation": 9,
    "column": "C",
    "marker": "१",
    "fatherId": "aniruddha",
    "motherId": "lalita",
    "spouseIds": [
      "prakriti"
    ],
    "lifeStatus": "Unknown",
    "branch": "धनपति",
    "place": "",
    "fatherNote": "",
    "photo": "",
    "birthAD": "",
    "deathAD": "",
    "birthBS": "",
    "deathBS": "",
    "review": "Needs clarification",
    "notes": "",
    "lineage": true,
    "sourceRefs": [
      "S048"
    ],
    "parentIds": [
      "aniruddha",
      "lalita"
    ],
    "treeParentId": "aniruddha",
    "uncertain": true,
    "sourceNote": ""
  },
  {
    "id": "prakriti",
    "name": "प्रकृति",
    "english": "Prakriti",
    "gender": "Female",
    "generation": 9,
    "column": "C",
    "marker": "",
    "fatherId": "",
    "motherId": "",
    "spouseIds": [
      "nita-ballabh"
    ],
    "lifeStatus": "Unknown",
    "branch": "धनपति",
    "place": "",
    "fatherNote": "",
    "photo": "",
    "birthAD": "",
    "deathAD": "",
    "birthBS": "",
    "deathBS": "",
    "review": "Draft",
    "notes": "",
    "lineage": false,
    "sourceRefs": [
      "S048"
    ],
    "parentIds": [],
    "uncertain": false,
    "sourceNote": ""
  },
  {
    "id": "naomi",
    "name": "नाओमी",
    "english": "Naomi",
    "gender": "Female",
    "generation": 10,
    "column": "D",
    "marker": "i",
    "fatherId": "nita-ballabh",
    "motherId": "prakriti",
    "spouseIds": [],
    "lifeStatus": "Unknown",
    "branch": "धनपति",
    "place": "",
    "fatherNote": "",
    "photo": "",
    "birthAD": "",
    "deathAD": "",
    "birthBS": "",
    "deathBS": "",
    "review": "Draft",
    "notes": "",
    "lineage": true,
    "sourceRefs": [
      "S049"
    ],
    "parentIds": [
      "nita-ballabh",
      "prakriti"
    ],
    "treeParentId": "nita-ballabh",
    "uncertain": false,
    "sourceNote": ""
  },
  {
    "id": "dina",
    "name": "डिना",
    "english": "Dina",
    "gender": "Female",
    "generation": 9,
    "column": "C",
    "marker": "ii",
    "fatherId": "aniruddha",
    "motherId": "lalita",
    "spouseIds": [
      "dhruva-pokharel"
    ],
    "lifeStatus": "Unknown",
    "branch": "धनपति",
    "place": "",
    "fatherNote": "",
    "photo": "",
    "birthAD": "",
    "deathAD": "",
    "birthBS": "",
    "deathBS": "",
    "review": "Needs clarification",
    "notes": "",
    "lineage": true,
    "sourceRefs": [
      "S050"
    ],
    "parentIds": [
      "aniruddha",
      "lalita"
    ],
    "treeParentId": "aniruddha",
    "uncertain": true,
    "sourceNote": ""
  },
  {
    "id": "dhruva-pokharel",
    "name": "ध्रुव पोखरेल",
    "english": "Dhruva Pokharel",
    "gender": "Male",
    "generation": 9,
    "column": "C",
    "marker": "",
    "fatherId": "",
    "motherId": "",
    "spouseIds": [
      "dina"
    ],
    "lifeStatus": "Unknown",
    "branch": "धनपति",
    "place": "कावासोती १०",
    "fatherNote": "",
    "photo": "",
    "birthAD": "",
    "deathAD": "",
    "birthBS": "",
    "deathBS": "",
    "review": "Draft",
    "notes": "",
    "lineage": false,
    "sourceRefs": [
      "S050"
    ],
    "parentIds": [],
    "uncertain": false,
    "sourceNote": ""
  },
  {
    "id": "khesara",
    "name": "खेसरा",
    "english": "Khesara",
    "gender": "Female",
    "generation": 8,
    "column": "B",
    "marker": "i",
    "fatherId": "dhanapati",
    "motherId": "dhanapati-spouse",
    "spouseIds": [
      "kashiram-regmi"
    ],
    "lifeStatus": "Unknown",
    "branch": "धनपति",
    "place": "दलदले, देवचुली",
    "fatherNote": "",
    "photo": "",
    "birthAD": "",
    "deathAD": "",
    "birthBS": "",
    "deathBS": "",
    "review": "Needs clarification",
    "notes": "",
    "lineage": true,
    "sourceRefs": [
      "S051"
    ],
    "parentIds": [
      "dhanapati",
      "dhanapati-spouse"
    ],
    "treeParentId": "dhanapati",
    "uncertain": true,
    "sourceNote": ""
  },
  {
    "id": "kashiram-regmi",
    "name": "काशीराम रेग्मी",
    "english": "Kashiram Regmi",
    "gender": "Male",
    "generation": 8,
    "column": "B",
    "marker": "",
    "fatherId": "",
    "motherId": "",
    "spouseIds": [
      "khesara"
    ],
    "lifeStatus": "Unknown",
    "branch": "धनपति",
    "place": "महाशिला ४, पूर्णगाउँ; हाल दलदले देवचुली",
    "fatherNote": "",
    "photo": "",
    "birthAD": "",
    "deathAD": "",
    "birthBS": "",
    "deathBS": "",
    "review": "Draft",
    "notes": "",
    "lineage": false,
    "sourceRefs": [
      "S051"
    ],
    "parentIds": [],
    "uncertain": false,
    "sourceNote": ""
  },
  {
    "id": "umapati-dhanapati",
    "name": "उमापति",
    "english": "Umapati, Dhanapati branch",
    "gender": "Male",
    "generation": 8,
    "column": "B",
    "marker": "२",
    "fatherId": "dhanapati",
    "motherId": "dhanapati-spouse",
    "spouseIds": [
      "mandu",
      "phumkala"
    ],
    "lifeStatus": "Unknown",
    "branch": "धनपति",
    "place": "",
    "fatherNote": "",
    "photo": "",
    "birthAD": "",
    "deathAD": "",
    "birthBS": "",
    "deathBS": "",
    "review": "Draft",
    "notes": "Two spouses recorded. Children’s mother IDs intentionally left blank until confirmed.",
    "lineage": true,
    "sourceRefs": [
      "S052",
      "S053"
    ],
    "parentIds": [
      "dhanapati",
      "dhanapati-spouse"
    ],
    "treeParentId": "dhanapati",
    "uncertain": false,
    "sourceNote": "Two spouses recorded. Children’s mother IDs intentionally left blank until confirmed."
  },
  {
    "id": "mandu",
    "name": "मन्दु",
    "english": "Mandu",
    "gender": "Female",
    "generation": 8,
    "column": "B",
    "marker": "",
    "fatherId": "",
    "motherId": "",
    "spouseIds": [
      "umapati-dhanapati"
    ],
    "lifeStatus": "Unknown",
    "branch": "धनपति",
    "place": "जिताकोटे, महाशिला १; हाल कावासोती ८",
    "fatherNote": "आनन्द पौडेल",
    "photo": "",
    "birthAD": "",
    "deathAD": "",
    "birthBS": "",
    "deathBS": "",
    "review": "Needs clarification",
    "notes": "",
    "lineage": false,
    "sourceRefs": [
      "S052"
    ],
    "parentIds": [],
    "uncertain": true,
    "sourceNote": ""
  },
  {
    "id": "phumkala",
    "name": "फुमकला",
    "english": "Phumkala",
    "gender": "Female",
    "generation": 8,
    "column": "B",
    "marker": "",
    "fatherId": "",
    "motherId": "",
    "spouseIds": [
      "umapati-dhanapati"
    ],
    "lifeStatus": "Unknown",
    "branch": "धनपति",
    "place": "जम्पुर [?]; हाल देवचुली",
    "fatherNote": "वलभद्र पौडेल",
    "photo": "",
    "birthAD": "",
    "deathAD": "",
    "birthBS": "",
    "deathBS": "",
    "review": "Needs clarification",
    "notes": "",
    "lineage": false,
    "sourceRefs": [
      "S053"
    ],
    "parentIds": [],
    "uncertain": true,
    "sourceNote": ""
  },
  {
    "id": "amrit-umapati",
    "name": "अमृत",
    "english": "Amrit, Umapati branch",
    "gender": "Male",
    "generation": 9,
    "column": "C",
    "marker": "१",
    "fatherId": "umapati-dhanapati",
    "motherId": "",
    "spouseIds": [
      "shobha-amrit"
    ],
    "lifeStatus": "Unknown",
    "branch": "धनपति",
    "place": "",
    "fatherNote": "",
    "photo": "",
    "birthAD": "",
    "deathAD": "",
    "birthBS": "",
    "deathBS": "",
    "review": "Needs clarification",
    "notes": "Mother not assigned: confirm between the two recorded spouses of Umapati.",
    "lineage": true,
    "sourceRefs": [
      "S054"
    ],
    "parentIds": [
      "umapati-dhanapati"
    ],
    "treeParentId": "umapati-dhanapati",
    "uncertain": true,
    "sourceNote": "Mother not assigned: confirm between the two recorded spouses of Umapati."
  },
  {
    "id": "shobha-amrit",
    "name": "शोभा",
    "english": "Shobha, spouse of Amrit",
    "gender": "Female",
    "generation": 9,
    "column": "C",
    "marker": "",
    "fatherId": "",
    "motherId": "",
    "spouseIds": [
      "amrit-umapati"
    ],
    "lifeStatus": "Unknown",
    "branch": "धनपति",
    "place": "कावासोती ८",
    "fatherNote": "कुसमाखर काफ्ले [?]",
    "photo": "",
    "birthAD": "",
    "deathAD": "",
    "birthBS": "",
    "deathBS": "",
    "review": "Needs clarification",
    "notes": "",
    "lineage": false,
    "sourceRefs": [
      "S054"
    ],
    "parentIds": [],
    "uncertain": true,
    "sourceNote": ""
  },
  {
    "id": "anushka",
    "name": "अनुष्का",
    "english": "Anushka",
    "gender": "Female",
    "generation": 10,
    "column": "D",
    "marker": "i",
    "fatherId": "amrit-umapati",
    "motherId": "shobha-amrit",
    "spouseIds": [],
    "lifeStatus": "Unknown",
    "branch": "धनपति",
    "place": "",
    "fatherNote": "",
    "photo": "",
    "birthAD": "",
    "deathAD": "",
    "birthBS": "",
    "deathBS": "",
    "review": "Draft",
    "notes": "",
    "lineage": true,
    "sourceRefs": [
      "S055"
    ],
    "parentIds": [
      "amrit-umapati",
      "shobha-amrit"
    ],
    "treeParentId": "amrit-umapati",
    "uncertain": false,
    "sourceNote": ""
  },
  {
    "id": "awas",
    "name": "आवास",
    "english": "Awas",
    "gender": "Male",
    "generation": 10,
    "column": "D",
    "marker": "१",
    "fatherId": "amrit-umapati",
    "motherId": "shobha-amrit",
    "spouseIds": [],
    "lifeStatus": "Unknown",
    "branch": "धनपति",
    "place": "",
    "fatherNote": "",
    "photo": "",
    "birthAD": "",
    "deathAD": "",
    "birthBS": "",
    "deathBS": "",
    "review": "Draft",
    "notes": "",
    "lineage": true,
    "sourceRefs": [
      "S056"
    ],
    "parentIds": [
      "amrit-umapati",
      "shobha-amrit"
    ],
    "treeParentId": "amrit-umapati",
    "uncertain": false,
    "sourceNote": ""
  },
  {
    "id": "mani",
    "name": "मणी",
    "english": "Mani",
    "gender": "Male",
    "generation": 9,
    "column": "C",
    "marker": "२",
    "fatherId": "umapati-dhanapati",
    "motherId": "",
    "spouseIds": [
      "amrita"
    ],
    "lifeStatus": "Unknown",
    "branch": "धनपति",
    "place": "",
    "fatherNote": "",
    "photo": "",
    "birthAD": "",
    "deathAD": "",
    "birthBS": "",
    "deathBS": "",
    "review": "Needs clarification",
    "notes": "Mother not assigned: confirm Umapati’s spouse associated with this child.",
    "lineage": true,
    "sourceRefs": [
      "S057"
    ],
    "parentIds": [
      "umapati-dhanapati"
    ],
    "treeParentId": "umapati-dhanapati",
    "uncertain": true,
    "sourceNote": "Mother not assigned: confirm Umapati’s spouse associated with this child."
  },
  {
    "id": "amrita",
    "name": "अमृता",
    "english": "Amrita",
    "gender": "Female",
    "generation": 9,
    "column": "C",
    "marker": "",
    "fatherId": "",
    "motherId": "",
    "spouseIds": [
      "mani"
    ],
    "lifeStatus": "Unknown",
    "branch": "धनपति",
    "place": "देवचुली १२, गौँडी [?]",
    "fatherNote": "पोषकान्त कँडेल",
    "photo": "",
    "birthAD": "",
    "deathAD": "",
    "birthBS": "",
    "deathBS": "",
    "review": "Draft",
    "notes": "",
    "lineage": false,
    "sourceRefs": [
      "S057"
    ],
    "parentIds": [],
    "uncertain": false,
    "sourceNote": ""
  },
  {
    "id": "achal",
    "name": "आचल",
    "english": "Achal",
    "gender": "Female",
    "generation": 10,
    "column": "D",
    "marker": "i",
    "fatherId": "mani",
    "motherId": "amrita",
    "spouseIds": [],
    "lifeStatus": "Unknown",
    "branch": "धनपति",
    "place": "",
    "fatherNote": "",
    "photo": "",
    "birthAD": "",
    "deathAD": "",
    "birthBS": "",
    "deathBS": "",
    "review": "Needs clarification",
    "notes": "",
    "lineage": true,
    "sourceRefs": [
      "S058"
    ],
    "parentIds": [
      "mani",
      "amrita"
    ],
    "treeParentId": "mani",
    "uncertain": true,
    "sourceNote": ""
  },
  {
    "id": "parvati-umapati",
    "name": "पार्वती",
    "english": "Parvati, Umapati branch",
    "gender": "Female",
    "generation": 9,
    "column": "C",
    "marker": "i",
    "fatherId": "umapati-dhanapati",
    "motherId": "",
    "spouseIds": [
      "homnath-gautam"
    ],
    "lifeStatus": "Unknown",
    "branch": "धनपति",
    "place": "चितवन",
    "fatherNote": "",
    "photo": "",
    "birthAD": "",
    "deathAD": "",
    "birthBS": "",
    "deathBS": "",
    "review": "Needs clarification",
    "notes": "Mother not assigned because two spouses are recorded for Umapati.",
    "lineage": true,
    "sourceRefs": [
      "S059"
    ],
    "parentIds": [
      "umapati-dhanapati"
    ],
    "treeParentId": "umapati-dhanapati",
    "uncertain": true,
    "sourceNote": "Mother not assigned because two spouses are recorded for Umapati."
  },
  {
    "id": "homnath-gautam",
    "name": "होमनाथ गौतम",
    "english": "Homnath Gautam",
    "gender": "Male",
    "generation": 9,
    "column": "C",
    "marker": "",
    "fatherId": "",
    "motherId": "",
    "spouseIds": [
      "parvati-umapati"
    ],
    "lifeStatus": "Unknown",
    "branch": "धनपति",
    "place": "पैँयु ४; हाल चितवन",
    "fatherNote": "",
    "photo": "",
    "birthAD": "",
    "deathAD": "",
    "birthBS": "",
    "deathBS": "",
    "review": "Draft",
    "notes": "",
    "lineage": false,
    "sourceRefs": [
      "S059"
    ],
    "parentIds": [],
    "uncertain": false,
    "sourceNote": ""
  },
  {
    "id": "shankar",
    "name": "शंकर",
    "english": "Shankar",
    "gender": "Male",
    "generation": 9,
    "column": "C",
    "marker": "३",
    "fatherId": "umapati-dhanapati",
    "motherId": "",
    "spouseIds": [],
    "lifeStatus": "Unknown",
    "branch": "धनपति",
    "place": "",
    "fatherNote": "",
    "photo": "",
    "birthAD": "",
    "deathAD": "",
    "birthBS": "",
    "deathBS": "",
    "review": "Needs clarification",
    "notes": "Mother not assigned because two spouses are recorded for Umapati.",
    "lineage": true,
    "sourceRefs": [
      "S060"
    ],
    "parentIds": [
      "umapati-dhanapati"
    ],
    "treeParentId": "umapati-dhanapati",
    "uncertain": true,
    "sourceNote": "Mother not assigned because two spouses are recorded for Umapati."
  },
  {
    "id": "savitra-dhanapati",
    "name": "सावित्रा",
    "english": "Savitra, Dhanapati branch",
    "gender": "Female",
    "generation": 8,
    "column": "B",
    "marker": "ii",
    "fatherId": "dhanapati",
    "motherId": "dhanapati-spouse",
    "spouseIds": [
      "khem-prasad-adhikari"
    ],
    "lifeStatus": "Unknown",
    "branch": "धनपति",
    "place": "",
    "fatherNote": "",
    "photo": "",
    "birthAD": "",
    "deathAD": "",
    "birthBS": "",
    "deathBS": "",
    "review": "Draft",
    "notes": "",
    "lineage": true,
    "sourceRefs": [
      "S061"
    ],
    "parentIds": [
      "dhanapati",
      "dhanapati-spouse"
    ],
    "treeParentId": "dhanapati",
    "uncertain": false,
    "sourceNote": ""
  },
  {
    "id": "khem-prasad-adhikari",
    "name": "खेम प्रसाद अधिकारी",
    "english": "Khem Prasad Adhikari",
    "gender": "Male",
    "generation": 8,
    "column": "B",
    "marker": "",
    "fatherId": "",
    "motherId": "",
    "spouseIds": [
      "savitra-dhanapati"
    ],
    "lifeStatus": "Unknown",
    "branch": "धनपति",
    "place": "कावासोती १",
    "fatherNote": "",
    "photo": "",
    "birthAD": "",
    "deathAD": "",
    "birthBS": "",
    "deathBS": "",
    "review": "Draft",
    "notes": "",
    "lineage": false,
    "sourceRefs": [
      "S061"
    ],
    "parentIds": [],
    "uncertain": false,
    "sourceNote": ""
  },
  {
    "id": "dandapani",
    "name": "डण्डपाणी",
    "english": "Dandapani",
    "gender": "Male",
    "generation": 7,
    "column": "A",
    "marker": "२",
    "fatherId": "maheshwar",
    "motherId": "maheshwar-spouse",
    "spouseIds": [
      "dandapani-spouse"
    ],
    "lifeStatus": "Unknown",
    "branch": "डण्डपाणी",
    "place": "",
    "fatherNote": "",
    "photo": "",
    "birthAD": "",
    "deathAD": "",
    "birthBS": "",
    "deathBS": "",
    "review": "Draft",
    "notes": "",
    "lineage": true,
    "sourceRefs": [
      "S062"
    ],
    "parentIds": [
      "maheshwar",
      "maheshwar-spouse"
    ],
    "treeParentId": "maheshwar",
    "uncertain": false,
    "sourceNote": ""
  },
  {
    "id": "dandapani-spouse",
    "name": "नाम नखुलेको (काफ्ले परिवार)",
    "english": "Unnamed spouse, Kafle family",
    "gender": "Female",
    "generation": 7,
    "column": "A",
    "marker": "",
    "fatherId": "",
    "motherId": "",
    "spouseIds": [
      "dandapani"
    ],
    "lifeStatus": "Unknown",
    "branch": "डण्डपाणी",
    "place": "बिहादी ५",
    "fatherNote": "खडानन्द काफ्ले [?]",
    "photo": "",
    "birthAD": "",
    "deathAD": "",
    "birthBS": "",
    "deathBS": "",
    "review": "Needs clarification",
    "notes": "",
    "lineage": false,
    "sourceRefs": [
      "S062"
    ],
    "parentIds": [],
    "uncertain": true,
    "sourceNote": ""
  },
  {
    "id": "tulsi-prasad",
    "name": "तुलसी प्रसाद",
    "english": "Tulsi Prasad",
    "gender": "Male",
    "generation": 8,
    "column": "B",
    "marker": "१",
    "fatherId": "dandapani",
    "motherId": "dandapani-spouse",
    "spouseIds": [],
    "lifeStatus": "Unknown",
    "branch": "डण्डपाणी",
    "place": "देहरादून",
    "fatherNote": "",
    "photo": "",
    "birthAD": "",
    "deathAD": "",
    "birthBS": "",
    "deathBS": "",
    "review": "Draft",
    "notes": "",
    "lineage": true,
    "sourceRefs": [
      "S063"
    ],
    "parentIds": [
      "dandapani",
      "dandapani-spouse"
    ],
    "treeParentId": "dandapani",
    "uncertain": false,
    "sourceNote": ""
  },
  {
    "id": "umapati-dandapani",
    "name": "उमापति",
    "english": "Umapati, Dandapani branch",
    "gender": "Male",
    "generation": 8,
    "column": "B",
    "marker": "२",
    "fatherId": "dandapani",
    "motherId": "dandapani-spouse",
    "spouseIds": [],
    "lifeStatus": "Unknown",
    "branch": "डण्डपाणी",
    "place": "देहरादून",
    "fatherNote": "",
    "photo": "",
    "birthAD": "",
    "deathAD": "",
    "birthBS": "",
    "deathBS": "",
    "review": "Draft",
    "notes": "",
    "lineage": true,
    "sourceRefs": [
      "S064"
    ],
    "parentIds": [
      "dandapani",
      "dandapani-spouse"
    ],
    "treeParentId": "dandapani",
    "uncertain": false,
    "sourceNote": ""
  },
  {
    "id": "khim-prasad",
    "name": "खिम प्रसाद",
    "english": "Khim Prasad",
    "gender": "Male",
    "generation": 7,
    "column": "A",
    "marker": "३",
    "fatherId": "maheshwar",
    "motherId": "maheshwar-spouse",
    "spouseIds": [
      "nanda-kumari"
    ],
    "lifeStatus": "Unknown",
    "branch": "खिम प्रसाद",
    "place": "",
    "fatherNote": "",
    "photo": "",
    "birthAD": "",
    "deathAD": "",
    "birthBS": "",
    "deathBS": "",
    "review": "Needs clarification",
    "notes": "",
    "lineage": true,
    "sourceRefs": [
      "S065"
    ],
    "parentIds": [
      "maheshwar",
      "maheshwar-spouse"
    ],
    "treeParentId": "maheshwar",
    "uncertain": true,
    "sourceNote": ""
  },
  {
    "id": "nanda-kumari",
    "name": "नन्द कुमारी",
    "english": "Nanda Kumari",
    "gender": "Female",
    "generation": 7,
    "column": "A",
    "marker": "",
    "fatherId": "",
    "motherId": "",
    "spouseIds": [
      "khim-prasad"
    ],
    "lifeStatus": "Unknown",
    "branch": "खिम प्रसाद",
    "place": "पैँयु; वालिङ",
    "fatherNote": "धर्मागत पौडेल [?]",
    "photo": "",
    "birthAD": "",
    "deathAD": "",
    "birthBS": "",
    "deathBS": "",
    "review": "Needs clarification",
    "notes": "",
    "lineage": false,
    "sourceRefs": [
      "S065"
    ],
    "parentIds": [],
    "uncertain": true,
    "sourceNote": ""
  },
  {
    "id": "batuli",
    "name": "बाटुली",
    "english": "Batuli",
    "gender": "Female",
    "generation": 8,
    "column": "B",
    "marker": "i",
    "fatherId": "khim-prasad",
    "motherId": "nanda-kumari",
    "spouseIds": [
      "nandalal-pangeni"
    ],
    "lifeStatus": "Unknown",
    "branch": "खिम प्रसाद",
    "place": "",
    "fatherNote": "",
    "photo": "",
    "birthAD": "",
    "deathAD": "",
    "birthBS": "",
    "deathBS": "",
    "review": "Needs clarification",
    "notes": "",
    "lineage": true,
    "sourceRefs": [
      "S066"
    ],
    "parentIds": [
      "khim-prasad",
      "nanda-kumari"
    ],
    "treeParentId": "khim-prasad",
    "uncertain": true,
    "sourceNote": ""
  },
  {
    "id": "nandalal-pangeni",
    "name": "नन्दलाल पंगेनी",
    "english": "Nandalal Pangeni",
    "gender": "Male",
    "generation": 8,
    "column": "B",
    "marker": "",
    "fatherId": "",
    "motherId": "",
    "spouseIds": [
      "batuli"
    ],
    "lifeStatus": "Unknown",
    "branch": "खिम प्रसाद",
    "place": "भिर्कोट, स्वरेक [?]",
    "fatherNote": "",
    "photo": "",
    "birthAD": "",
    "deathAD": "",
    "birthBS": "",
    "deathBS": "",
    "review": "Draft",
    "notes": "",
    "lineage": false,
    "sourceRefs": [
      "S066"
    ],
    "parentIds": [],
    "uncertain": false,
    "sourceNote": ""
  },
  {
    "id": "krishna-prasad",
    "name": "कृष्ण प्रसाद",
    "english": "Krishna Prasad",
    "gender": "Male",
    "generation": 8,
    "column": "B",
    "marker": "१",
    "fatherId": "khim-prasad",
    "motherId": "nanda-kumari",
    "spouseIds": [
      "tulasi"
    ],
    "lifeStatus": "Unknown",
    "branch": "खिम प्रसाद",
    "place": "तिलोत्तमा",
    "fatherNote": "",
    "photo": "",
    "birthAD": "",
    "deathAD": "",
    "birthBS": "",
    "deathBS": "",
    "review": "Draft",
    "notes": "",
    "lineage": true,
    "sourceRefs": [
      "S067"
    ],
    "parentIds": [
      "khim-prasad",
      "nanda-kumari"
    ],
    "treeParentId": "khim-prasad",
    "uncertain": false,
    "sourceNote": ""
  },
  {
    "id": "tulasi",
    "name": "तुलसी",
    "english": "Tulasi",
    "gender": "Female",
    "generation": 8,
    "column": "B",
    "marker": "",
    "fatherId": "",
    "motherId": "",
    "spouseIds": [
      "krishna-prasad"
    ],
    "lifeStatus": "Unknown",
    "branch": "खिम प्रसाद",
    "place": "अर्गली, पाल्पा; हाल तिलोत्तमा",
    "fatherNote": "शालीग्राम पराजुली",
    "photo": "",
    "birthAD": "",
    "deathAD": "",
    "birthBS": "",
    "deathBS": "",
    "review": "Draft",
    "notes": "",
    "lineage": false,
    "sourceRefs": [
      "S067"
    ],
    "parentIds": [],
    "uncertain": false,
    "sourceNote": ""
  },
  {
    "id": "binod",
    "name": "विनोद",
    "english": "Binod",
    "gender": "Male",
    "generation": 9,
    "column": "C",
    "marker": "१",
    "fatherId": "krishna-prasad",
    "motherId": "tulasi",
    "spouseIds": [
      "chitra"
    ],
    "lifeStatus": "Unknown",
    "branch": "खिम प्रसाद",
    "place": "",
    "fatherNote": "",
    "photo": "",
    "birthAD": "",
    "deathAD": "",
    "birthBS": "",
    "deathBS": "",
    "review": "Draft",
    "notes": "",
    "lineage": true,
    "sourceRefs": [
      "S068"
    ],
    "parentIds": [
      "krishna-prasad",
      "tulasi"
    ],
    "treeParentId": "krishna-prasad",
    "uncertain": false,
    "sourceNote": ""
  },
  {
    "id": "chitra",
    "name": "चित्रा",
    "english": "Chitra",
    "gender": "Female",
    "generation": 9,
    "column": "C",
    "marker": "",
    "fatherId": "",
    "motherId": "",
    "spouseIds": [
      "binod"
    ],
    "lifeStatus": "Unknown",
    "branch": "खिम प्रसाद",
    "place": "पाल्पा, बराङ्दी [?]",
    "fatherNote": "केशव तिमिल्सिना",
    "photo": "",
    "birthAD": "",
    "deathAD": "",
    "birthBS": "",
    "deathBS": "",
    "review": "Draft",
    "notes": "",
    "lineage": false,
    "sourceRefs": [
      "S068"
    ],
    "parentIds": [],
    "uncertain": false,
    "sourceNote": ""
  },
  {
    "id": "anuj",
    "name": "अनुज",
    "english": "Anuj",
    "gender": "Male",
    "generation": 10,
    "column": "D",
    "marker": "१",
    "fatherId": "binod",
    "motherId": "chitra",
    "spouseIds": [],
    "lifeStatus": "Unknown",
    "branch": "खिम प्रसाद",
    "place": "",
    "fatherNote": "",
    "photo": "",
    "birthAD": "",
    "deathAD": "",
    "birthBS": "",
    "deathBS": "",
    "review": "Draft",
    "notes": "",
    "lineage": true,
    "sourceRefs": [
      "S069"
    ],
    "parentIds": [
      "binod",
      "chitra"
    ],
    "treeParentId": "binod",
    "uncertain": false,
    "sourceNote": ""
  },
  {
    "id": "prakash",
    "name": "प्रकाश",
    "english": "Prakash",
    "gender": "Male",
    "generation": 9,
    "column": "C",
    "marker": "२",
    "fatherId": "krishna-prasad",
    "motherId": "tulasi",
    "spouseIds": [
      "sunita"
    ],
    "lifeStatus": "Unknown",
    "branch": "खिम प्रसाद",
    "place": "अमेरिका",
    "fatherNote": "",
    "photo": "",
    "birthAD": "",
    "deathAD": "",
    "birthBS": "",
    "deathBS": "",
    "review": "Draft",
    "notes": "",
    "lineage": true,
    "sourceRefs": [
      "S070"
    ],
    "parentIds": [
      "krishna-prasad",
      "tulasi"
    ],
    "treeParentId": "krishna-prasad",
    "uncertain": false,
    "sourceNote": ""
  },
  {
    "id": "sunita",
    "name": "सुनिता",
    "english": "Sunita",
    "gender": "Female",
    "generation": 9,
    "column": "C",
    "marker": "",
    "fatherId": "",
    "motherId": "",
    "spouseIds": [
      "prakash"
    ],
    "lifeStatus": "Unknown",
    "branch": "खिम प्रसाद",
    "place": "अर्घाखाँची; हाल अमेरिका",
    "fatherNote": "नेत्रलाल पाण्डे",
    "photo": "",
    "birthAD": "",
    "deathAD": "",
    "birthBS": "",
    "deathBS": "",
    "review": "Draft",
    "notes": "",
    "lineage": false,
    "sourceRefs": [
      "S070"
    ],
    "parentIds": [],
    "uncertain": false,
    "sourceNote": ""
  },
  {
    "id": "prinson",
    "name": "प्रिन्सन",
    "english": "Prinson",
    "gender": "Male",
    "generation": 10,
    "column": "D",
    "marker": "१",
    "fatherId": "prakash",
    "motherId": "sunita",
    "spouseIds": [],
    "lifeStatus": "Unknown",
    "branch": "खिम प्रसाद",
    "place": "",
    "fatherNote": "",
    "photo": "",
    "birthAD": "",
    "deathAD": "",
    "birthBS": "",
    "deathBS": "",
    "review": "Needs clarification",
    "notes": "",
    "lineage": true,
    "sourceRefs": [
      "S071"
    ],
    "parentIds": [
      "prakash",
      "sunita"
    ],
    "treeParentId": "prakash",
    "uncertain": true,
    "sourceNote": ""
  },
  {
    "id": "prisa",
    "name": "प्रिसा",
    "english": "Prisa",
    "gender": "Female",
    "generation": 10,
    "column": "D",
    "marker": "i",
    "fatherId": "prakash",
    "motherId": "sunita",
    "spouseIds": [],
    "lifeStatus": "Unknown",
    "branch": "खिम प्रसाद",
    "place": "",
    "fatherNote": "",
    "photo": "",
    "birthAD": "",
    "deathAD": "",
    "birthBS": "",
    "deathBS": "",
    "review": "Needs clarification",
    "notes": "",
    "lineage": true,
    "sourceRefs": [
      "S072"
    ],
    "parentIds": [
      "prakash",
      "sunita"
    ],
    "treeParentId": "prakash",
    "uncertain": true,
    "sourceNote": ""
  },
  {
    "id": "laxman",
    "name": "लक्ष्मण",
    "english": "Laxman",
    "gender": "Male",
    "generation": 9,
    "column": "C",
    "marker": "३",
    "fatherId": "krishna-prasad",
    "motherId": "tulasi",
    "spouseIds": [
      "gita"
    ],
    "lifeStatus": "Unknown",
    "branch": "खिम प्रसाद",
    "place": "सैनामैना",
    "fatherNote": "",
    "photo": "",
    "birthAD": "",
    "deathAD": "",
    "birthBS": "",
    "deathBS": "",
    "review": "Draft",
    "notes": "",
    "lineage": true,
    "sourceRefs": [
      "S073"
    ],
    "parentIds": [
      "krishna-prasad",
      "tulasi"
    ],
    "treeParentId": "krishna-prasad",
    "uncertain": false,
    "sourceNote": ""
  },
  {
    "id": "gita",
    "name": "गिता",
    "english": "Gita",
    "gender": "Female",
    "generation": 9,
    "column": "C",
    "marker": "",
    "fatherId": "",
    "motherId": "",
    "spouseIds": [
      "laxman"
    ],
    "lifeStatus": "Unknown",
    "branch": "खिम प्रसाद",
    "place": "सरौँखोला; हाल सैनामैना",
    "fatherNote": "नाम नखुलेको तिवारी",
    "photo": "",
    "birthAD": "",
    "deathAD": "",
    "birthBS": "",
    "deathBS": "",
    "review": "Draft",
    "notes": "",
    "lineage": false,
    "sourceRefs": [
      "S073"
    ],
    "parentIds": [],
    "uncertain": false,
    "sourceNote": ""
  },
  {
    "id": "avishkar",
    "name": "आविष्कार",
    "english": "Avishkar",
    "gender": "Male",
    "generation": 10,
    "column": "D",
    "marker": "१",
    "fatherId": "laxman",
    "motherId": "gita",
    "spouseIds": [],
    "lifeStatus": "Unknown",
    "branch": "खिम प्रसाद",
    "place": "",
    "fatherNote": "",
    "photo": "",
    "birthAD": "",
    "deathAD": "",
    "birthBS": "",
    "deathBS": "",
    "review": "Draft",
    "notes": "",
    "lineage": true,
    "sourceRefs": [
      "S074"
    ],
    "parentIds": [
      "laxman",
      "gita"
    ],
    "treeParentId": "laxman",
    "uncertain": false,
    "sourceNote": ""
  },
  {
    "id": "laxmi",
    "name": "लक्ष्मी",
    "english": "Laxmi",
    "gender": "Female",
    "generation": 9,
    "column": "C",
    "marker": "i",
    "fatherId": "krishna-prasad",
    "motherId": "tulasi",
    "spouseIds": [
      "krishna-bhandari"
    ],
    "lifeStatus": "Unknown",
    "branch": "खिम प्रसाद",
    "place": "गैडाकोट वडा २",
    "fatherNote": "",
    "photo": "",
    "birthAD": "",
    "deathAD": "",
    "birthBS": "",
    "deathBS": "",
    "review": "Draft",
    "notes": "",
    "lineage": true,
    "sourceRefs": [
      "S075"
    ],
    "parentIds": [
      "krishna-prasad",
      "tulasi"
    ],
    "treeParentId": "krishna-prasad",
    "uncertain": false,
    "sourceNote": ""
  },
  {
    "id": "krishna-bhandari",
    "name": "कृष्ण भण्डारी",
    "english": "Krishna Bhandari",
    "gender": "Male",
    "generation": 9,
    "column": "C",
    "marker": "",
    "fatherId": "",
    "motherId": "",
    "spouseIds": [
      "laxmi"
    ],
    "lifeStatus": "Unknown",
    "branch": "खिम प्रसाद",
    "place": "धुर्कोट ५, वस्तु, गुल्मी; हाल गैडाकोट २",
    "fatherNote": "",
    "photo": "",
    "birthAD": "",
    "deathAD": "",
    "birthBS": "",
    "deathBS": "",
    "review": "Draft",
    "notes": "",
    "lineage": false,
    "sourceRefs": [
      "S075"
    ],
    "parentIds": [],
    "uncertain": false,
    "sourceNote": ""
  },
  {
    "id": "balakrishna-khim",
    "name": "बालकृष्ण",
    "english": "Balakrishna, Khim Prasad branch",
    "gender": "Male",
    "generation": 8,
    "column": "B",
    "marker": "२",
    "fatherId": "khim-prasad",
    "motherId": "nanda-kumari",
    "spouseIds": [
      "shobha-balakrishna"
    ],
    "lifeStatus": "Unknown",
    "branch": "खिम प्रसाद",
    "place": "",
    "fatherNote": "",
    "photo": "",
    "birthAD": "",
    "deathAD": "",
    "birthBS": "",
    "deathBS": "",
    "review": "Draft",
    "notes": "",
    "lineage": true,
    "sourceRefs": [
      "S076"
    ],
    "parentIds": [
      "khim-prasad",
      "nanda-kumari"
    ],
    "treeParentId": "khim-prasad",
    "uncertain": false,
    "sourceNote": ""
  },
  {
    "id": "shobha-balakrishna",
    "name": "शोभा",
    "english": "Shobha, spouse of Balakrishna",
    "gender": "Female",
    "generation": 8,
    "column": "B",
    "marker": "",
    "fatherId": "",
    "motherId": "",
    "spouseIds": [
      "balakrishna-khim"
    ],
    "lifeStatus": "Unknown",
    "branch": "खिम प्रसाद",
    "place": "बिहादी ५, टारी",
    "fatherNote": "देवी प्रसाद बस्याल",
    "photo": "",
    "birthAD": "",
    "deathAD": "",
    "birthBS": "",
    "deathBS": "",
    "review": "Draft",
    "notes": "",
    "lineage": false,
    "sourceRefs": [
      "S076"
    ],
    "parentIds": [],
    "uncertain": false,
    "sourceNote": ""
  },
  {
    "id": "amrit-balakrishna",
    "name": "अमृत",
    "english": "Amrit, Balakrishna branch",
    "gender": "Male",
    "generation": 9,
    "column": "C",
    "marker": "१",
    "fatherId": "balakrishna-khim",
    "motherId": "shobha-balakrishna",
    "spouseIds": [],
    "lifeStatus": "Unknown",
    "branch": "खिम प्रसाद",
    "place": "",
    "fatherNote": "",
    "photo": "",
    "birthAD": "",
    "deathAD": "",
    "birthBS": "",
    "deathBS": "",
    "review": "Draft",
    "notes": "",
    "lineage": true,
    "sourceRefs": [
      "S077"
    ],
    "parentIds": [
      "balakrishna-khim",
      "shobha-balakrishna"
    ],
    "treeParentId": "balakrishna-khim",
    "uncertain": false,
    "sourceNote": ""
  },
  {
    "id": "asmita",
    "name": "अस्मिता",
    "english": "Asmita",
    "gender": "Female",
    "generation": 9,
    "column": "C",
    "marker": "i",
    "fatherId": "balakrishna-khim",
    "motherId": "shobha-balakrishna",
    "spouseIds": [
      "ghanshyam-pandey"
    ],
    "lifeStatus": "Unknown",
    "branch": "खिम प्रसाद",
    "place": "",
    "fatherNote": "",
    "photo": "",
    "birthAD": "",
    "deathAD": "",
    "birthBS": "",
    "deathBS": "",
    "review": "Draft",
    "notes": "",
    "lineage": true,
    "sourceRefs": [
      "S078"
    ],
    "parentIds": [
      "balakrishna-khim",
      "shobha-balakrishna"
    ],
    "treeParentId": "balakrishna-khim",
    "uncertain": false,
    "sourceNote": ""
  },
  {
    "id": "ghanshyam-pandey",
    "name": "घनश्याम पाण्डे",
    "english": "Ghanshyam Pandey",
    "gender": "Male",
    "generation": 9,
    "column": "C",
    "marker": "",
    "fatherId": "",
    "motherId": "",
    "spouseIds": [
      "asmita"
    ],
    "lifeStatus": "Unknown",
    "branch": "खिम प्रसाद",
    "place": "कोटाकोट [?], स्याङ्जा",
    "fatherNote": "",
    "photo": "",
    "birthAD": "",
    "deathAD": "",
    "birthBS": "",
    "deathBS": "",
    "review": "Draft",
    "notes": "",
    "lineage": false,
    "sourceRefs": [
      "S078"
    ],
    "parentIds": [],
    "uncertain": false,
    "sourceNote": ""
  },
  {
    "id": "lila-khim",
    "name": "लिला",
    "english": "Lila, Khim Prasad branch",
    "gender": "Female",
    "generation": 8,
    "column": "B",
    "marker": "ii",
    "fatherId": "khim-prasad",
    "motherId": "nanda-kumari",
    "spouseIds": [
      "shyamlal-paudel"
    ],
    "lifeStatus": "Unknown",
    "branch": "खिम प्रसाद",
    "place": "देदहनी [?], बर्दघाट, नवलपरासी",
    "fatherNote": "",
    "photo": "",
    "birthAD": "",
    "deathAD": "",
    "birthBS": "",
    "deathBS": "",
    "review": "Draft",
    "notes": "",
    "lineage": true,
    "sourceRefs": [
      "S079"
    ],
    "parentIds": [
      "khim-prasad",
      "nanda-kumari"
    ],
    "treeParentId": "khim-prasad",
    "uncertain": false,
    "sourceNote": ""
  },
  {
    "id": "shyamlal-paudel",
    "name": "श्यामलाल पौडेल",
    "english": "Shyamlal Paudel",
    "gender": "Male",
    "generation": 8,
    "column": "B",
    "marker": "",
    "fatherId": "",
    "motherId": "",
    "spouseIds": [
      "lila-khim"
    ],
    "lifeStatus": "Unknown",
    "branch": "खिम प्रसाद",
    "place": "पैँयु ६, हौँडीखर्क [?], पर्वत; हाल बर्दघाट",
    "fatherNote": "",
    "photo": "",
    "birthAD": "",
    "deathAD": "",
    "birthBS": "",
    "deathBS": "",
    "review": "Draft",
    "notes": "",
    "lineage": false,
    "sourceRefs": [
      "S079"
    ],
    "parentIds": [],
    "uncertain": false,
    "sourceNote": ""
  }
];
window.FAMILY_SOURCES = [
  {
    "id": "S001",
    "location": "Leftmost root column च",
    "text": "मुसु",
    "issue": "User explicitly confirmed the starting ancestor as Musu.",
    "personIds": [
      "musu"
    ]
  },
  {
    "id": "S002",
    "location": "Left column ङ",
    "text": "हरि प्रसाद (जेठी पट्टी)",
    "issue": "The user confirmed Musu → Hari Prasad. Keep the branch note जेठी पट्टी.",
    "personIds": [
      "hari-prasad"
    ]
  },
  {
    "id": "S003",
    "location": "Left column घ",
    "text": "चक्रपाणी",
    "issue": "Spelling and the generation link need family review.",
    "personIds": [
      "chakrapani"
    ]
  },
  {
    "id": "S004",
    "location": "Left column ग, repeated near bottom",
    "text": "रामेश्वर + नाम थाहा नभएको",
    "issue": "The same ancestor label appears again lower on the page; recorded once.",
    "personIds": [
      "rameshwar",
      "rameshwar-spouse"
    ]
  },
  {
    "id": "S005",
    "location": "Top narrow row, ख–१",
    "text": "१ [नाम अस्पष्ट; मुद्रित अक्षर पढ्न सकिएन]",
    "issue": "Do not interpret the fragment as a verified name. Placement under Rameshwar is provisional.",
    "personIds": [
      "unclear-kha-1"
    ]
  },
  {
    "id": "S006",
    "location": "Top narrow row, क–१",
    "text": "१ [नाम अस्पष्ट; अन्त्यमा “प्रसा…” जस्तो देखिन्छ]",
    "issue": "The narrow printed name is not reliably readable.",
    "personIds": [
      "unclear-ka-1"
    ]
  },
  {
    "id": "S007",
    "location": "Top narrow row, A–१",
    "text": "१ [नामको कोष्ठक रिक्त/अस्पष्ट]",
    "issue": "A numbered entry is visible, but its name is not readable. This is a placeholder, not a new invented name.",
    "personIds": [
      "unnamed-top-a-1"
    ]
  },
  {
    "id": "S008",
    "location": "Top horizontal row, ख–२",
    "text": "वासुदेव (हराएका)",
    "issue": "Separate from बुचे वा वासुदेव in column क. Missing does not mean deceased.",
    "personIds": [
      "vasudev-rameshwar"
    ]
  },
  {
    "id": "S009",
    "location": "Left column ख, main block and repeated lower block",
    "text": "प्रजापति + [नाम नखुलेको] (पैँयु २, [स्थान अस्पष्ट] … भुर्तेलको छोरी)",
    "issue": "Spouse name and part of the place are unclear. The repeated block is one person.",
    "personIds": [
      "prajapati",
      "prajapati-spouse"
    ]
  },
  {
    "id": "S010",
    "location": "Column क, first Kamalapati marriage block",
    "text": "कमलापति + मुसुरी (पिता: प्रतिमान लामिछाने, भोक्सिङ्ग)",
    "issue": "Check the spouse name and locality spelling.",
    "personIds": [
      "kamalapati",
      "musuri"
    ]
  },
  {
    "id": "S011",
    "location": "Column क, second Kamalapati marriage block",
    "text": "कमलापति + … (पिता: तिवारी, सरौँखोला, पैँयु ६)",
    "issue": "Spouse name is absent. Do not merge with Musuri.",
    "personIds": [
      "kamalapati",
      "kamalapati-tiwari-spouse"
    ]
  },
  {
    "id": "S012",
    "location": "Column क–२, between Kamalapati and Maheshwar",
    "text": "बुचे वा वासुदेव (वेपत्ता)",
    "issue": "Alternative name is printed; this is distinct from the earlier Vasudev.",
    "personIds": [
      "buche-vasudev"
    ]
  },
  {
    "id": "S013",
    "location": "Column क–३, Maheshwar block repeated lower on page",
    "text": "महेश्वर + नाम थाहा नभएको (पिता: … नेपाने, गैप्टाङ)",
    "issue": "Spouse name and place spelling need review. Repeated Maheshwar blocks are one person.",
    "personIds": [
      "maheshwar",
      "maheshwar-spouse"
    ]
  },
  {
    "id": "S014",
    "location": "Bottom row, क–i",
    "text": "[नाम नखुलेको], विवाह: … सापकोटा, बिहादी ५ सुनडाडा; हालको सम्पर्क मणी प्रसाद सापकोटा",
    "issue": "Personal name of both partners is absent. Mani Prasad is a contact, not established as a spouse or child.",
    "personIds": [
      "prajapati-daughter",
      "sapkota-unnamed"
    ]
  },
  {
    "id": "S015",
    "location": "Bottom row, क–४",
    "text": "बालकृष्ण निःसन्तान (भारतमा निधन)",
    "issue": "This is the only clearly explicit death statement identified. Different person from Balakrishna in the Khim Prasad branch.",
    "personIds": [
      "balakrishna-prajapati"
    ]
  },
  {
    "id": "S016",
    "location": "Very bottom row, ख–i",
    "text": "नाम थाहा नभएको (विवाह: पैँयु ५ पाखीमासका [नाम अस्पष्ट] नेउपानेसँग); हालको सम्पर्क गुरुदेव तिवारी, सिमरी रुपन्देही; मो. [फोटोमा नम्बर छ]",
    "issue": "Parent inferred as Rameshwar from the source column. Husband name unreadable. Contact number not transcribed because the digits are not reliable.",
    "personIds": [
      "rameshwar-daughter",
      "neupane-unnamed"
    ]
  },
  {
    "id": "S017",
    "location": "A–१, Motilal block",
    "text": "मोतिलाल + नर्वदी (पिता: शिवशंकर अधिकारी, महाशिला १, सुम्दीखर्क)",
    "issue": "Mother linked to Musuri by the separate Kamalapati marriage block; confirm. Spouse name needs review.",
    "personIds": [
      "motilal",
      "narbadi"
    ]
  },
  {
    "id": "S018",
    "location": "B–१, Tikaram household",
    "text": "टीकाराम + पार्वती (पिता: गंगा प्रसाद पौडेल, मध्यविन्दु [अस्पष्ट], नवलपुर)",
    "issue": "Locality detail is partly unclear.",
    "personIds": [
      "tikaram",
      "parvati"
    ]
  },
  {
    "id": "S019",
    "location": "C–१, Pushpa household",
    "text": "पुष्प + कमला (पिता: हर्के अधिकारी, महाशिला ४)",
    "issue": "",
    "personIds": [
      "pushpa",
      "kamala"
    ]
  },
  {
    "id": "S020",
    "location": "D–१, Pushpa child",
    "text": "आशिष",
    "issue": "",
    "personIds": [
      "ashish"
    ]
  },
  {
    "id": "S021",
    "location": "D–i, Pushpa child",
    "text": "अर्चना (विवाह: सुलभ दहाल, कावासोती २)",
    "issue": "Husband name and place need checking in the small print.",
    "personIds": [
      "archana",
      "sulabh-dahal"
    ]
  },
  {
    "id": "S022",
    "location": "C–२, Kamal household",
    "text": "कमल + रीना (पिता: ओम प्रसाद पौडेल, सिन्धे; हाल रजहर)",
    "issue": "Original place before हाल रजहर is not fully clear.",
    "personIds": [
      "kamal",
      "rina"
    ]
  },
  {
    "id": "S023",
    "location": "D–i, Kamal child",
    "text": "सिल्भिया",
    "issue": "Check the name against the original family records.",
    "personIds": [
      "sylvia"
    ]
  },
  {
    "id": "S024",
    "location": "C–i, Tikaram daughter",
    "text": "अन्जना (विवाह: प्रदिप पौडेल, रत्ननगर टाँडी चितवन)",
    "issue": "",
    "personIds": [
      "anjana",
      "pradip"
    ]
  },
  {
    "id": "S025",
    "location": "B–i, Motilal daughter",
    "text": "टोपली, विवाह: बम प्रसाद भुसाल, फलेवास १ भंगरा सिरवारी",
    "issue": "",
    "personIds": [
      "topali",
      "bam-prasad"
    ]
  },
  {
    "id": "S026",
    "location": "B–ii, Motilal daughter",
    "text": "लिला, विवाह: छविलाल पराजुली, बिहादी ५ भतेरपाटा",
    "issue": "Place spelling needs review.",
    "personIds": [
      "lila",
      "chhabilal"
    ]
  },
  {
    "id": "S027",
    "location": "B–२, Ishwari household",
    "text": "इश्वरी प्रसाद + सावित्रा (पिता: कामेका भुवानन्द नेउपाने)",
    "issue": "The word before भुवानन्द may be a place qualifier.",
    "personIds": [
      "ishwari",
      "savitra"
    ]
  },
  {
    "id": "S028",
    "location": "C–i, Ishwari daughter",
    "text": "पुना (विवाह: थानेश्वर तिमिल्सिना, बिहादी ५ उराम)",
    "issue": "Given name पुना and place require checking.",
    "personIds": [
      "puna",
      "thaneshwar"
    ]
  },
  {
    "id": "S029",
    "location": "C–ii, Ishwari daughter",
    "text": "नमिता (विवाह: सन्तोष सापकोटा, कावासोती ८)",
    "issue": "",
    "personIds": [
      "namita",
      "santosh"
    ]
  },
  {
    "id": "S030",
    "location": "C–१, Narendra household",
    "text": "नरेन्द्र + अनिता (पिता: कमल गैरे, धनमुढा स्याङ्जा; हाल झुम्दी)",
    "issue": "Locality spelling is uncertain.",
    "personIds": [
      "narendra",
      "anita"
    ]
  },
  {
    "id": "S031",
    "location": "D–१, Narendra son",
    "text": "आयन",
    "issue": "Name reading needs confirmation.",
    "personIds": [
      "ayan"
    ]
  },
  {
    "id": "S032",
    "location": "D–i, Narendra daughter",
    "text": "आयंका",
    "issue": "Name reading needs confirmation.",
    "personIds": [
      "ayanka"
    ]
  },
  {
    "id": "S033",
    "location": "C–iii, Ishwari daughter",
    "text": "वन्दना (विवाह: हरि चापागाइ, अर्जुन चौपारी)",
    "issue": "",
    "personIds": [
      "bandana",
      "hari"
    ]
  },
  {
    "id": "S034",
    "location": "C–२, Keshav household",
    "text": "केशव + आकृति (पिता: तिर्थ कँडेल, कावासोती ८)",
    "issue": "",
    "personIds": [
      "keshav",
      "akriti"
    ]
  },
  {
    "id": "S035",
    "location": "A–i, Kaushila and marriage note in B",
    "text": "कौशिला; विवाह: दयाराम तिवारी, पैँयु ५ (छोरा रेशमलाल तिवारी, सिमरी रुपन्देही)",
    "issue": "The son is recorded in the marriage note. Maternal link to Kamalapati’s second wife follows the source block.",
    "personIds": [
      "kaushila",
      "dayaram-tiwari",
      "reshamlal-tiwari"
    ]
  },
  {
    "id": "S036",
    "location": "A–ii, Basandhara and marriage note in B",
    "text": "बसन्धरा; विवाह: शोभाखर नेउपाने, कालीगण्डकी २ अरिदेनी (छोरा भिम नेउपाने), गुल्मी",
    "issue": "Woman’s name and locality spelling are unclear.",
    "personIds": [
      "basandhara",
      "shobhakhar-neupane",
      "bhim-neupane"
    ]
  },
  {
    "id": "S037",
    "location": "A–२, Ratnakhar household",
    "text": "रत्नाखर + हरिकला (पिता: जयवल्लभ नेउपाने, बिहादी ६ चकाँड)",
    "issue": "Check given-name spelling and locality.",
    "personIds": [
      "ratnakhar",
      "harikala-ratnakhar"
    ]
  },
  {
    "id": "S038",
    "location": "B–i, Ratnakhar daughter",
    "text": "चुरीकला (विवाह: चुरामणी न्यौपाने, बिहादी ४ बानीपोखरा)",
    "issue": "Given names and locality require review.",
    "personIds": [
      "churikala",
      "churamani-neupane"
    ]
  },
  {
    "id": "S039",
    "location": "B–ii, Ratnakhar daughter",
    "text": "हरिकला (विवाह: भिमलाल न्यौपाने, कालीगण्डकी २ अरिदेनी, गुल्मी)",
    "issue": "This Harikala is distinct from Ratnakhar’s spouse.",
    "personIds": [
      "harikala-daughter",
      "bhimlal-neupane"
    ]
  },
  {
    "id": "S040",
    "location": "B–iii, Ratnakhar daughter",
    "text": "दुर्गा (विवाह: पशुपति भुर्तेल, पैँयु ५ भुर्तेलथोक)",
    "issue": "",
    "personIds": [
      "durga",
      "pashupati-bhurtel"
    ]
  },
  {
    "id": "S041",
    "location": "B–१, Prem household",
    "text": "प्रेम प्रसाद + चित्र कला (पिता: बिनि महादेव चापागाइ, गल्याङ ६ पिडिखोला)",
    "issue": "Qualifier before Mahadev and locality spelling need review.",
    "personIds": [
      "prem-prasad",
      "chitrakala"
    ]
  },
  {
    "id": "S042",
    "location": "C–१, Prem son",
    "text": "दिप्सन",
    "issue": "Check spelling.",
    "personIds": [
      "dipson"
    ]
  },
  {
    "id": "S043",
    "location": "C–i, Prem daughter",
    "text": "दिपसिखा",
    "issue": "Check spelling; the photograph may show दिपशिखा.",
    "personIds": [
      "dipsikha"
    ]
  },
  {
    "id": "S044",
    "location": "C–२, Prem son",
    "text": "डेनियल [?]",
    "issue": "This name is particularly unclear. Do not treat this tentative reading as verified.",
    "personIds": [
      "daniel"
    ]
  },
  {
    "id": "S045",
    "location": "A–१, Dhanapati block printed twice",
    "text": "धनपति + … (पिता: … बस्याल, बिहादी ५ टारी)",
    "issue": "The name is repeated for consecutive child blocks. Recorded once; spouse’s name absent.",
    "personIds": [
      "dhanapati",
      "dhanapati-spouse"
    ]
  },
  {
    "id": "S046",
    "location": "B–१, Aniruddha household",
    "text": "अनिरुद्ध + ललिता (पिता: लिलापर दहाल, ओखलढुंगा)",
    "issue": "Lalita’s father’s given name needs review.",
    "personIds": [
      "aniruddha",
      "lalita"
    ]
  },
  {
    "id": "S047",
    "location": "C–i, Aniruddha daughter",
    "text": "टीका (विवाह: चुरामणी काफ्ले, कावासोती शंखदेउ)",
    "issue": "Locality spelling uncertain.",
    "personIds": [
      "tika",
      "churamani-kafle"
    ]
  },
  {
    "id": "S048",
    "location": "C–१, Aniruddha son",
    "text": "निता बल्लभ + प्रकृति (पिता: …)",
    "issue": "Male given name needs verification. Prakriti’s father is not named.",
    "personIds": [
      "nita-ballabh",
      "prakriti"
    ]
  },
  {
    "id": "S049",
    "location": "D–i, Nita Ballabh daughter",
    "text": "नाओमी",
    "issue": "",
    "personIds": [
      "naomi"
    ]
  },
  {
    "id": "S050",
    "location": "C–ii, Aniruddha daughter",
    "text": "डिना (विवाह: ध्रुव पोखरेल, कावासोती १०)",
    "issue": "Check daughter’s name reading.",
    "personIds": [
      "dina",
      "dhruva-pokharel"
    ]
  },
  {
    "id": "S051",
    "location": "B–i, Dhanapati daughter",
    "text": "खेसरा (विवाह: काशीराम रेग्मी, महाशिला ४ पूर्णगाउँ; हाल दलदले देवचुली)",
    "issue": "Woman’s given name needs verification.",
    "personIds": [
      "khesara",
      "kashiram-regmi"
    ]
  },
  {
    "id": "S052",
    "location": "B–२, Umapati’s first spouse entry",
    "text": "उमापति + मन्दु (पिता: आनन्द पौडेल, जिताकोटे, महाशिला १; हाल कावासोती ८)",
    "issue": "Two spouses are printed together. The photo does not securely establish each child’s mother.",
    "personIds": [
      "umapati-dhanapati",
      "mandu"
    ]
  },
  {
    "id": "S053",
    "location": "B–२, Umapati’s second spouse entry",
    "text": "उमापति + फुमकला (पिता: वलभद्र पौडेल, जम्पुर; हाल देवचुली …)",
    "issue": "Spouse name and original locality need review. No marriage chronology inferred.",
    "personIds": [
      "umapati-dhanapati",
      "phumkala"
    ]
  },
  {
    "id": "S054",
    "location": "C–१, Amrit household",
    "text": "अमृत + शोभा (पिता: कुसमाखर [दोहोरिएको/अस्पष्ट] काफ्ले, कावासोती ८)",
    "issue": "Father’s given name is unclear; Umapati’s two spouses make the mother link uncertain.",
    "personIds": [
      "amrit-umapati",
      "shobha-amrit"
    ]
  },
  {
    "id": "S055",
    "location": "D–i, Amrit daughter",
    "text": "अनुष्का",
    "issue": "Check spelling.",
    "personIds": [
      "anushka"
    ]
  },
  {
    "id": "S056",
    "location": "D–१, Amrit son",
    "text": "आवास",
    "issue": "",
    "personIds": [
      "awas"
    ]
  },
  {
    "id": "S057",
    "location": "C–२, Mani household",
    "text": "मणी + अमृता (पिता: पोषकान्त कँडेल, देवचुली १२ गौँडी …)",
    "issue": "End of location is cropped/unclear. Mother of Mani unresolved.",
    "personIds": [
      "mani",
      "amrita"
    ]
  },
  {
    "id": "S058",
    "location": "D–i, Mani daughter",
    "text": "आचल",
    "issue": "Check whether the intended spelling is आचल or आँचल.",
    "personIds": [
      "achal"
    ]
  },
  {
    "id": "S059",
    "location": "C–i, Umapati daughter",
    "text": "पार्वती (विवाह: होमनाथ गौतम, पैँयु ४; हाल … चितवन)",
    "issue": "Mother unresolved; current locality partly absent.",
    "personIds": [
      "parvati-umapati",
      "homnath-gautam"
    ]
  },
  {
    "id": "S060",
    "location": "C–३, Umapati son",
    "text": "शंकर",
    "issue": "Mother unresolved.",
    "personIds": [
      "shankar"
    ]
  },
  {
    "id": "S061",
    "location": "B–ii, Dhanapati daughter",
    "text": "सावित्रा (विवाह: खेम प्रसाद अधिकारी, कावासोती १)",
    "issue": "Different Savitra from Ishwari Prasad’s spouse.",
    "personIds": [
      "savitra-dhanapati",
      "khem-prasad-adhikari"
    ]
  },
  {
    "id": "S062",
    "location": "A–२, Dandapani household",
    "text": "डण्डपाणी + … (खडानन्द काफ्ले, वाटामुनीका काफ्ले, बिहादी ५)",
    "issue": "Spouse name absent; the parent relationship in parentheses needs review.",
    "personIds": [
      "dandapani",
      "dandapani-spouse"
    ]
  },
  {
    "id": "S063",
    "location": "B–१ and C location, Dandapani son",
    "text": "तुलसी प्रसाद; देहरादून",
    "issue": "",
    "personIds": [
      "tulsi-prasad"
    ]
  },
  {
    "id": "S064",
    "location": "B–२ and C location, Dandapani son",
    "text": "उमापति; देहरादून",
    "issue": "Separate from Umapati, son of Dhanapati.",
    "personIds": [
      "umapati-dandapani"
    ]
  },
  {
    "id": "S065",
    "location": "A–३, Khim Prasad household",
    "text": "खिम प्रसाद + नन्द कुमारी (पिता: धर्मागत पौडेल, पैँयु; वालिङ)",
    "issue": "Confirm whether the first name is खिम or खिल and the father’s spelling.",
    "personIds": [
      "khim-prasad",
      "nanda-kumari"
    ]
  },
  {
    "id": "S066",
    "location": "B–i, Khim Prasad daughter",
    "text": "बाटुली (विवाह: भिर्कोट … स्वरेकका नन्दलाल पंगेनी)",
    "issue": "Name and place need review. स्वरेक is a locality here, not a death prefix.",
    "personIds": [
      "batuli",
      "nandalal-pangeni"
    ]
  },
  {
    "id": "S067",
    "location": "B–१, Krishna Prasad household",
    "text": "कृष्ण प्रसाद + तुलसी (पिता: शालीग्राम पराजुली, अर्गली पाल्पा; हाल तिलोत्तमा)",
    "issue": "",
    "personIds": [
      "krishna-prasad",
      "tulasi"
    ]
  },
  {
    "id": "S068",
    "location": "C–१, Binod household",
    "text": "विनोद + चित्रा (पिता: केशव तिमिल्सिना, पाल्पा बराङ्दी; हाल …)",
    "issue": "End of current-place note is absent.",
    "personIds": [
      "binod",
      "chitra"
    ]
  },
  {
    "id": "S069",
    "location": "D–१, Binod son",
    "text": "अनुज",
    "issue": "",
    "personIds": [
      "anuj"
    ]
  },
  {
    "id": "S070",
    "location": "C–२, Prakash household",
    "text": "प्रकाश + सुनिता (पिता: नेत्रलाल पाण्डे, अर्घाखाँची; हाल अमेरिका)",
    "issue": "",
    "personIds": [
      "prakash",
      "sunita"
    ]
  },
  {
    "id": "S071",
    "location": "D–१, Prakash son",
    "text": "प्रिन्सन",
    "issue": "Name reading needs review.",
    "personIds": [
      "prinson"
    ]
  },
  {
    "id": "S072",
    "location": "D–i, Prakash daughter",
    "text": "प्रिसा",
    "issue": "Check whether the spelling is प्रिसा or प्रिशा.",
    "personIds": [
      "prisa"
    ]
  },
  {
    "id": "S073",
    "location": "C–३, Laxman household",
    "text": "लक्ष्मण + गिता (पिता: … तिवारी, सरौँखोला; हाल सैनामैना)",
    "issue": "",
    "personIds": [
      "laxman",
      "gita"
    ]
  },
  {
    "id": "S074",
    "location": "D–१, Laxman son",
    "text": "आविष्कार",
    "issue": "Check printed spelling.",
    "personIds": [
      "avishkar"
    ]
  },
  {
    "id": "S075",
    "location": "C–i, Krishna Prasad daughter",
    "text": "लक्ष्मी (विवाह: कृष्ण भण्डारी, धुर्कोट ५ वस्तु, गुल्मी; हाल गैडाकोट वडा नं. २)",
    "issue": "Check municipality/place spelling.",
    "personIds": [
      "laxmi",
      "krishna-bhandari"
    ]
  },
  {
    "id": "S076",
    "location": "B–२, Balakrishna household",
    "text": "बालकृष्ण + शोभा (पिता: देवी प्रसाद बस्याल, बिहादी ५ टारी)",
    "issue": "Different Balakrishna from the person marked deceased in column क.",
    "personIds": [
      "balakrishna-khim",
      "shobha-balakrishna"
    ]
  },
  {
    "id": "S077",
    "location": "C–१, Balakrishna son",
    "text": "अमृत",
    "issue": "Different Amrit from the Umapati branch.",
    "personIds": [
      "amrit-balakrishna"
    ]
  },
  {
    "id": "S078",
    "location": "C–i, Balakrishna daughter",
    "text": "अस्मिता (विवाह: घनश्याम पाण्डे, कोटाकोट, स्याङ्जा)",
    "issue": "Locality needs checking.",
    "personIds": [
      "asmita",
      "ghanshyam-pandey"
    ]
  },
  {
    "id": "S079",
    "location": "B–ii, Khim Prasad daughter",
    "text": "लिला (विवाह: श्यामलाल पौडेल, पैँयु ६ हौँडीखर्क, पर्वत); हाल देदहनी बर्दघाट नवलपरासी",
    "issue": "Different Lila from the Motilal branch. Locality spelling needs review.",
    "personIds": [
      "lila-khim",
      "shyamlal-paudel"
    ]
  }
];
