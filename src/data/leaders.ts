export type Leader = {
  id: string;
  nameTe: string;
  nameEn: string;
  roleTe: string;
  roleEn: string;
  image: string;
  imagePosition?: string;
  named: boolean;
};

export const leaders: Leader[] = [
  {
    id: "ntr",
    nameTe: "నందమూరి తారక రామారావు",
    nameEn: "N. T. Rama Rao",
    roleTe: "తెలుగుదేశం వ్యవస్థాపకులు",
    roleEn: "Founder of the Telugu Desam Party",
    image: "/images/portraits/ntr.png",
    named: true,
  },
  {
    id: "cbn",
    nameTe: "నారా చంద్రబాబు నాయుడు",
    nameEn: "Nara Chandrababu Naidu",
    roleTe: "ఆంధ్రప్రదేశ్ ముఖ్యమంత్రి, తెలుగుదేశం జాతీయ అధ్యక్షులు",
    roleEn: "Chief Minister of Andhra Pradesh and National President of the Telugu Desam Party",
    image: "/images/portraits/chandrababu.png",
    named: true,
  },
  {
    id: "modi",
    nameTe: "నరేంద్ర మోదీ",
    nameEn: "Narendra Modi",
    roleTe: "భారత ప్రధానమంత్రి",
    roleEn: "Prime Minister of India",
    image: "/images/portraits/modi.png",
    named: true,
  },
  {
    id: "pawan",
    nameTe: "కొణిదెల పవన్ కళ్యాణ్",
    nameEn: "Konidela Pawan Kalyan",
    roleTe: "జనసేన పార్టీ అధ్యక్షులు, ఆంధ్రప్రదేశ్ ఉప ముఖ్యమంత్రి",
    roleEn: "President of the Janasena Party and Deputy Chief Minister of Andhra Pradesh",
    image: "/images/portraits/pawan.png",
    named: true,
  },
];

export const localLeaders: Leader[] = [
  {
    id: "palla",
    nameTe: "పల్లా శ్రీనివాసరావు",
    nameEn: "Palla Srinivasa Rao",
    roleTe: "గాజువాక శాసనసభ్యులు, ఆంధ్రప్రదేశ్ తెలుగుదేశం అధ్యక్షులు",
    roleEn: "MLA, Gajuwaka, and President of the Telugu Desam Party in Andhra Pradesh",
    image: "/images/portraits/palla-srinivas.jpg",
    imagePosition: "object-[center_20%]",
    named: true,
  },
  {
    id: "bonda",
    nameTe: "బొండా జగన్నాధం (జగన్)",
    nameEn: "Bonda Jagannadham (Jagan)",
    roleTe: "GVMC వార్డు 87, 2021లో ఎన్నికైన తెలుగుదేశం వార్డు సభ్యులు",
    roleEn: "TDP ward member elected in 2021 for GVMC Ward 87",
    image: "/images/portraits/bonda-jagan.jpg",
    imagePosition: "object-top",
    named: true,
  },
];

export const associates: Leader[] = [
  {
    id: "associate-yellow",
    nameTe: "పామ్‌ప్లేట్ చిత్రం",
    nameEn: "Pamphlet photograph",
    roleTe: "పేరు ధృవీకరణ అవసరం",
    roleEn: "Name needs confirmation",
    image: "/images/portraits/associate-yellow.png",
    imagePosition: "object-top",
    named: false,
  },
  {
    id: "associate-glasses",
    nameTe: "పామ్‌ప్లేట్ చిత్రం",
    nameEn: "Pamphlet photograph",
    roleTe: "పేరు ధృవీకరణ అవసరం",
    roleEn: "Name needs confirmation",
    image: "/images/portraits/associate-glasses.png",
    imagePosition: "object-top",
    named: false,
  },
  {
    id: "associate-woman",
    nameTe: "పామ్‌ప్లేట్ చిత్రం",
    nameEn: "Pamphlet photograph",
    roleTe: "మహిళా నాయకురాలి చిత్రం — పేరు ధృవీకరణ అవసరం",
    roleEn: "Photograph of a woman leader — name needs confirmation",
    image: "/images/portraits/associate-woman.jpg",
    imagePosition: "object-top",
    named: false,
  },
];
