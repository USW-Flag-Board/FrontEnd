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

const TITLE_ITEMS = ["제목", "작성자", "작성일", "조회수", "좋아요수", "댓글수"];

const SEARCH_SELECT_ITEMS = ["전체기간", "게시물 + 작성자"];

const boardData = {
    BOARD_NAMES,
    TITLE_ITEMS,
    SEARCH_SELECT_ITEMS,
}

export default boardData;
