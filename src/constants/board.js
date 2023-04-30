import { faImage, faFile } from "@fortawesome/free-regular-svg-icons";

const BOARD_NAMES = [
    {
        id: 1,
        krName: "자유게시판",
        engName: "free_board",
    },
    {
        id: 2,
        krName: "정보게시판",
        engName: "information_board",
    },
    {
        id: 3,
        krName: "사진게시판",
        engName: "photo_board",
    },
    {
        id: 4,
        krName: "동아리 이모저모",
        engName: "etc_board",
    },
];

const SEARCH_SELECT_ITEMS = ["전체기간", "게시물 + 작성자"];

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
    SEARCH_SELECT_ITEMS,
    FILE_IMAGE_BUTTON,
}

export default boardData;
