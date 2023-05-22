import { faFolder, faCopy } from "@fortawesome/free-regular-svg-icons";
import { faPencil, faChalkboardUser } from "@fortawesome/free-solid-svg-icons";

export const ACTIVITY_CATEGORIE = [
  {
    id: 1,
    icon: faCopy,
    title: "전체",
    value: "ALL",
  },
  {
    id: 2,
    icon: faFolder,
    title: "프로젝트",
    value: "PROJECT",
  },
  {
    id: 3,
    icon: faPencil,
    title: "스터디",
    value: "STUDY",
  },
  {
    id: 4,
    icon: faChalkboardUser,
    title: "멘토링",
    value: "MENTORING",
  },
];

export const SELECT_OPTION = [
  {
    id: 0,
    title: "카테고리를 선택해주세요.",
  },
  {
    id: 1,
    title: "PROJECT",
  },
  {
    id: 2,
    title: "STUDY",
  },
  {
    id: 3,
    title: "MENTORING",
  },
];

export const BOOK_RADIO_OPTION = [
  {
    id: 1,
    option: "Yes",
    value: "USE",
  },
  {
    id: 2,
    option: "No",
    value: "NOT_USE",
  },
];

export const ONLINE_RADIO_OPTION = [
  {
    id: 1,
    option: "온라인",
    value: "ONLINE",
  },
  {
    id: 2,
    option: "오프라인",
    value: "OFFLINE",
  },
  {
    id: 3,
    option: "혼합",
    value: "BOTH",
  },
];
