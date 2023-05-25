import { faImage, faFile } from "@fortawesome/free-regular-svg-icons";

const BOARD_NAMES = [
  {
    id: 1,
    krName: "자유게시판",
  },
  {
    id: 2,
    krName: "정보게시판",
  },
  {
    id: 3,
    krName: "사진게시판",
  },
  {
    id: 4,
    krName: "동아리 이모저모",
  },
];

export const SEARCH_SELECT_ITEMS_PERIOD = [
  {
    id: 0,
    option: "전체기간",
    value: "ALL",
  },
  {
    id: 1,
    option: "1일",
    value: "DAY",
  },
  {
    id: 2,
    option: "1주",
    value: "WEEK",
  },
  {
    id: 3,
    option: "1개월",
    value: "MONTH",
  },
  {
    id: 4,
    option: "6개월",
    value: "HALF_YEAR",
  },
  {
    id: 5,
    option: "1년",
    value: "YEAR",
  },
];

export const SEARCH_SELECT_ITEMS_OPTION = [
  {
    id: 0,
    option: "제목",
    value: "TITLE",
  },
  {
    id: 1,
    option: "게시글 내용 + 댓글",
    value: "CONTENT_AND_REPLY",
  },
  {
    id: 2,
    option: "글작성자",
    value: "AUTHOR",
  },
  {
    id: 3,
    option: "댓글내용",
    value: "REPLY",
  },
  {
    id: 4,
    option: "게시글 내용",
    value: "CONTENT",
  },
];

const FILE_IMAGE_BUTTON = [
  {
    id: 1,
    faIcon: faImage,
    text: "사진",
  },
  {
    id: 2,
    faIcon: faFile,
    text: "파일",
  },
];

const boardData = {
  BOARD_NAMES,
  FILE_IMAGE_BUTTON,
};

export default boardData;
