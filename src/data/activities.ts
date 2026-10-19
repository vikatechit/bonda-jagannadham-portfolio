export type Activity = {
  id: string;
  titleTe: string;
  titleEn: string;
  captionTe: string;
  captionEn: string;
  image: string;
  kind: "meeting" | "inspection" | "community" | "works";
};

export const activities: Activity[] = [
  {
    id: "roadside-address",
    titleTe: "వీధిలో ప్రజలను ఉద్దేశించి మాట",
    titleEn: "Roadside address",
    captionTe:
      "పసుపు దుస్తులతో వాహనంపై నుంచి మైక్‌తో మాట్లాడుతున్న బొండా జగన్నాధం గారి ఫోటో. తేదీ, హాజరు సంఖ్య, ప్రదేశం ఈ ఫోటోపై లేవు.",
    captionEn:
      "Photograph of Bonda Jagannadham speaking into a microphone from a vehicle, dressed in yellow. The date, attendance, and place are not printed on this photograph.",
    image: "/images/meetings/bonda-campaign.jpg",
    kind: "meeting",
  },
  {
    id: "palla-meeting",
    titleTe: "సమావేశ దృశ్యం",
    titleEn: "Meeting photograph",
    captionTe:
      "మైక్ వద్ద కూర్చుని మాట్లాడుతున్న పల్లా శ్రీనివాసరావు గారి ఫోటో. పామ్‌ప్లేట్ ముఖచిత్రంలో ఆయన పెద్ద చిత్రం ఉంది.",
    captionEn:
      "Photograph of Palla Srinivasa Rao speaking at a microphone. His large portrait is on the pamphlet cover.",
    image: "/images/meetings/palla-speech.jpg",
    kind: "meeting",
  },
  {
    id: "tile-work",
    titleTe: "రోడ్డు పని దృశ్యం",
    titleEn: "Road work photograph",
    captionTe:
      "కూలీలు రంగు టైల్స్ వేస్తున్నారు. పక్కన GVMC వాహనం కనిపిస్తోంది. ఇదే ఫోటోపై 7 కోట్ల ముద్రణ ఉంది. ఎంతమంది పని చేశారో లెక్క లేదు.",
    captionEn:
      "Workers are laying coloured tiles, with a GVMC vehicle beside them. The same photograph is printed with a ₹7 crore figure. No headcount is given.",
    image: "/images/development/road.jpg",
    kind: "works",
  },
  {
    id: "drain-photo",
    titleTe: "కాలువ ఫోటో",
    titleEn: "Drain photograph",
    captionTe:
      "పొడవైన కాంక్రీట్ కాలువ ఫోటో. పామ్‌ప్లేట్‌లో 15.5 కోట్ల ముద్రణ, సింధూరనగర్ నుంచి నేషనల్ హైవే వరకు అని ఉంది.",
    captionEn:
      "Photograph of a long concrete drain. The pamphlet prints ₹15.5 crore and the stretch from Sindhura Nagar to the National Highway.",
    image: "/images/development/drain.jpg",
    kind: "inspection",
  },
  {
    id: "park-photo",
    titleTe: "ప్రాంగణం ఫోటో",
    titleEn: "Ground photograph",
    captionTe:
      "నడక దారులతో పచ్చని ప్రాంగణం. పామ్‌ప్లేట్‌లో 3.5 కోట్ల ముద్రణ ఉంది. ప్రారంభ తేదీ లేదు.",
    captionEn:
      "A green ground with walking paths. The pamphlet prints ₹3.5 crore. No opening date is given.",
    image: "/images/development/park.jpg",
    kind: "community",
  },
  {
    id: "building-photo",
    titleTe: "నిర్మాణంలో ఉన్న భవనం",
    titleEn: "Building under construction",
    captionTe:
      "అంతస్తుల ఫ్రేమ్ కనిపిస్తోంది. పామ్‌ప్లేట్ దీన్ని నిర్మిస్తున్న భవనంగా చూపుతోంది. పూర్తయిన భవనంగా చూపించలేదు.",
    captionEn:
      "A storeyed frame is visible. The pamphlet presents it as a building under construction, not as a finished building.",
    image: "/images/development/building.jpg",
    kind: "works",
  },
];
