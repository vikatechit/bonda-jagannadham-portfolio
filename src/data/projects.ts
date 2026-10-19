export type ProjectCategory =
  | "roads"
  | "drainage"
  | "parks"
  | "water"
  | "facilities"
  | "footpaths"
  | "sanitation"
  | "other";

export type ProjectStatus =
  | "proposed"
  | "approved"
  | "in-progress"
  | "completed"
  | "unverified";

export type Project = {
  id: string;
  titleTe: string;
  titleEn: string;
  descriptionTe: string;
  descriptionEn: string;
  category: ProjectCategory;
  locationTe: string;
  locationEn: string;
  publishedCostINR: number | null;
  date: string | null;
  status: ProjectStatus;
  images: string[];
  source: string;
  verified: boolean;
  reviewNoteTe: string;
  reviewNoteEn: string;
};

export const projects: Project[] = [
  {
    id: "officers-road-building",
    titleTe: "ఆఫీసర్ల రోడ్డు బహుళ అంతస్తు భవనం",
    titleEn: "Multi-storey building at Officers’ Road",
    descriptionTe:
      "పామ్‌ప్లేట్ ముఖచిత్రంలో ఈ ఫోటోపై “20 కోట్లతో ఆఫీసర్ల రోడ్డు నిర్మిస్తున్న బహుళ అంతస్తు భవనం” అని ముద్రించబడింది. ఫోటోలో కాంక్రీట్ ఫ్రేమ్ కనిపిస్తోంది. పని ఇప్పుడు ఏ దశలో ఉందో ప్రత్యేకంగా ధృవీకరించలేదు.",
    descriptionEn:
      "The pamphlet cover prints this photograph with the line that a multi-storey building at Officers’ Road is under construction at ₹20 crore. The photograph shows a concrete frame. The present stage of the work has not been separately verified.",
    category: "facilities",
    locationTe: "ఆఫీసర్ల రోడ్డు, విశాఖపట్నం",
    locationEn: "Officers’ Road, Visakhapatnam",
    publishedCostINR: 200000000,
    date: null,
    status: "in-progress",
    images: ["/images/development/building.jpg"],
    source: "Client pamphlet cover",
    verified: false,
    reviewNoteTe: "మొత్తం ముఖచిత్రంపై స్పష్టంగా ఉంది. పూర్తి అయినట్లు చెప్పలేం.",
    reviewNoteEn: "The amount is clearly printed on the cover. Completion is not claimed.",
  },
  {
    id: "soft-complex",
    titleTe: "సాఫ్ట్ కాంప్లెక్స్ నిర్మాణం",
    titleEn: "Soft complex construction",
    descriptionTe:
      "ఆఫీసర్ల రోడ్డు భవన ఫోటో క్రింద “2 కోట్లతో సాఫ్ట్ కాంప్లెక్స్ నిర్మాణం” అని ముద్రించబడింది. ఈ పేరు అక్షరాలను ఒకసారి కళ్లారా చూడాలి. వేరే ఫోటోను విడదీయలేదు. పూర్తయినట్లు భావించలేదు.",
    descriptionEn:
      "Directly under the Officers’ Road building photograph, the cover prints “soft complex construction at ₹2 crore”. That wording should be proofread. A separate photograph was not isolated. Completion is not assumed.",
    category: "facilities",
    locationTe: "పామ్‌ప్లేట్‌లో ప్రాంతం విడిగా లేదు",
    locationEn: "Area not printed separately on the pamphlet",
    publishedCostINR: 20000000,
    date: null,
    status: "unverified",
    images: ["/images/brochure/cover.jpg"],
    source: "Client pamphlet cover",
    verified: false,
    reviewNoteTe: "పేరు “సాఫ్ట్ కాంప్లెక్స్”గా కనిపిస్తోంది. అక్షర దిద్దుబాటు అవసరం.",
    reviewNoteEn: "The printed name appears to read “soft complex” and needs a spelling check.",
  },
  {
    id: "ground-drain-boundary",
    titleTe: "మైదానం, డ్రైన్, బౌండరీ పనులు",
    titleEn: "Ground, drain, and boundary works",
    descriptionTe:
      "పామ్‌ప్లేట్ ఫోటోపై 1.5 కోట్ల మొత్తం ముద్రించబడింది. ఖాళీ మైదానం కనిపిస్తోంది. డ్రైన్, క్రికెట్, బౌండరీ, ఆఫీస్ రూమ్ వంటి పదాలు అదే క్యాప్షన్‌లో ఉన్నట్లు కనిపిస్తాయి. పూర్తి పాఠం సవరణ కోసం ఉంచారు.",
    descriptionEn:
      "The pamphlet photograph is printed with a ₹1.5 crore figure. The picture shows an open ground. Words for a drain, cricket, boundary, and an office room appear to sit in the same caption. The full line is left for proofreading.",
    category: "parks",
    locationTe: "పామ్‌ప్లేట్ ప్రాంతం — సవరణ అవసరం",
    locationEn: "Pamphlet area — needs proofreading",
    publishedCostINR: 15000000,
    date: null,
    status: "unverified",
    images: ["/images/development/ground.jpg"],
    source: "Client pamphlet cover",
    verified: false,
    reviewNoteTe: "1.5 కోట్ల సంఖ్య స్పష్టం. మిగతా పదాలు సవరణ కోసం.",
    reviewNoteEn: "The ₹1.5 crore figure is clear. The remaining words need proofreading.",
  },
  {
    id: "sports-ground-park",
    titleTe: "క్రీడా ప్రాంగణం మరియు పార్క్",
    titleEn: "Sports ground and park",
    descriptionTe:
      "పామ్‌ప్లేట్‌లో ఈ ఫోటోపై 3.5 కోట్ల మొత్తం ఉంది. చిత్రంలో నడక దారులతో అభివృద్ధి చేసిన పచ్చని ప్రాంగణం కనిపిస్తోంది. ప్రాంతం పేరు ఎల్.బి. నగర్ లాగా కనిపిస్తోంది. అది ధృవీకరణ లేకుండా తుది పేరుగా తీసుకోలేదు.",
    descriptionEn:
      "This pamphlet photograph carries a ₹3.5 crore figure. The picture shows a green ground with walking paths. The place name looks like L.B. Nagar and is not treated as final without a check.",
    category: "parks",
    locationTe: "పామ్‌ప్లేట్ ప్రాంతం — పేరు సవరణ అవసరం",
    locationEn: "Pamphlet area — name needs a check",
    publishedCostINR: 35000000,
    date: null,
    status: "unverified",
    images: ["/images/development/park.jpg"],
    source: "Client pamphlet cover",
    verified: false,
    reviewNoteTe: "ఫోటో పార్కు లేదా క్రీడా మైదానాన్ని చూపుతోంది. పూర్తయిన తేదీ లేదు.",
    reviewNoteEn: "The photo shows a park or sports ground. No completion date is printed.",
  },
  {
    id: "cc-roads-drains-footpaths",
    titleTe: "సీసీ రోడ్లు, సైడ్ డ్రైన్లు, ఫుట్‌పాత్‌లు",
    titleEn: "CC roads, side drains, and footpaths",
    descriptionTe:
      "పామ్‌ప్లేట్ ఫోటోలో కూలీలు రంగు టైల్స్ వేస్తున్నారు. వాహనంపై GVMC అక్షరాలు కనిపిస్తాయి. ముద్రిత మొత్తం 7 కోట్లు. క్యాప్షన్ సీసీ రోడ్లు, సైడ్ డ్రైన్లు, ఫుట్‌పాత్‌ల గురించి. వడ్డాపూడి ప్రస్తావన కూడా కనిపిస్తోంది.",
    descriptionEn:
      "The pamphlet photograph shows workers laying coloured tiles. GVMC lettering is visible on a vehicle. The printed figure is ₹7 crore. The caption concerns CC roads, side drains, and footpaths, and Vadlapudi is also mentioned.",
    category: "roads",
    locationTe: "వడ్డాపూడి (పామ్‌ప్లేట్ పంక్తి)",
    locationEn: "Vadlapudi (pamphlet line)",
    publishedCostINR: 70000000,
    date: null,
    status: "unverified",
    images: ["/images/development/road.jpg"],
    source: "Client pamphlet cover",
    verified: false,
    reviewNoteTe: "ఫోటో పని జరుగుతున్న దృశ్యం. అందుకే పూర్తయిన పనిగా పెట్టలేదు.",
    reviewNoteEn: "The photograph shows work underway, so it is not listed as completed.",
  },
  {
    id: "sindhuranagar-drain",
    titleTe: "సింధూరనగర్ నుంచి నేషనల్ హైవే వరకు ప్రధాన కాలువ",
    titleEn: "Main drain from Sindhura Nagar to the National Highway",
    descriptionTe:
      "పామ్‌ప్లేట్ ఫోటోలో పొడవైన కాంక్రీట్ కాలువ కనిపిస్తోంది. ముద్రిత మొత్తం 15.5 కోట్లు. పంక్తి సింధూరనగర్ నుంచి నేషనల్ హైవే వరకు ప్రధాన గట్టు లేదా కాలువ నిర్మాణం గురించి కనిపిస్తోంది.",
    descriptionEn:
      "The pamphlet photograph shows a long concrete drain. The printed figure is ₹15.5 crore. The line appears to describe a main bund or drain from Sindhura Nagar to the National Highway.",
    category: "drainage",
    locationTe: "సింధూరనగర్ – నేషనల్ హైవే",
    locationEn: "Sindhura Nagar – National Highway",
    publishedCostINR: 155000000,
    date: null,
    status: "unverified",
    images: ["/images/development/drain.jpg"],
    source: "Client pamphlet cover",
    verified: false,
    reviewNoteTe: "“గట్టు” మరియు “కాలువ”లో ఏ పదం తుది అనేది సవరణలో నిర్ధారించాలి.",
    reviewNoteEn: "Proofreading should confirm whether the final word is bund or drain.",
  },
];

export const pamphletPages = [
  {
    src: "/images/brochure/works-c.jpg",
    altTe: "GVMC 87 వార్డు అభివృద్ధి పనుల పామ్‌ప్లేట్ పేజీ",
    altEn: "Pamphlet page of GVMC Ward 87 development works",
  },
  {
    src: "/images/brochure/works-a.jpg",
    altTe: "అభివృద్ధి పనులు మరియు మొత్తాలు ఉన్న పామ్‌ప్లేట్ పేజీ",
    altEn: "Pamphlet page listing development works and amounts",
  },
  {
    src: "/images/brochure/works-b.jpg",
    altTe: "మరిన్ని పనుల మొత్తాలు ఉన్న పామ్‌ప్లేట్ పేజీ",
    altEn: "Pamphlet page with further work amounts",
  },
  {
    src: "/images/brochure/scroll.jpg",
    altTe: "పనుల జాబితా మరియు సందేశపు చుట్టు ఉన్న పామ్‌ప్లేట్ పేజీ",
    altEn: "Pamphlet page with the works list and the message scroll",
  },
];
