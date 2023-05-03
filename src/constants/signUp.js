export const SORTBOX_DATA = [
    {
      id: 1,
      qualification: "일반회원",
      introduce: "FLAGROUND의 일반 회원입니다. \n 동아리 활동을 제외하고 모든 활동이 가능합니다.",
      value: "NORMAL",
    },
    {
      id: 2,
      qualification: "FLAG 동아리원",
      introduce: "FLAGROUND의 동아리 회원입니다. \n프로젝트, 스터디, 멘토링 참여 및 등록 등 모든 활동이 가능합니다.\n+ FLAG 동아리원은 관리자의 승인절차 이후 가입이 완료됩니다.",
      value: "CREW",
    },
  ];


  // eslint-disable-next-line
export const regExp = /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/g;
export const korExp = /[ㄱ-ㅎㅏ-ㅣ가-힣]/g;
export const numExp = /[0-9]/g;
export const spaceExp = /\s/;
export const engExp = /[a-zA-Z]/g;
export const loginRegex = {
    id: /^[a-zA-Z0-9]{4,16}$/,
    password: /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,20})/
  };
export const nameRegex = /^[a-zA-Z가-힣\s-' ]{2,20}$/;
export const phoneRegex = /^\d{10,11}$/;
export const studentIdRegex = /^\d{8}$/;
export const emailRegex = /^[a-zA-Z0-9._%+-]+@suwon\.ac\.kr$/;
export const SPECIALIZED = [
  {
    label: "국어국문",
    value: "국어국문",
  },
  {
    label: "컴퓨터SW",
    value: "컴퓨터SW",
  },
];