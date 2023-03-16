import {baseInstance} from "./instance";

export const PatchChangePw = (currentPassword, newPassword) => {
  return baseInstance.patch("/member/password", {
    currentPassword,
    newPassword,
  });
};

export const PutAvatarInfo = (bio, nickName, profileImg) => {
  return baseInstance.put("/members/avatar", {
    bio,
    nickName,
    profileImg,
  });
};

export const GetUserInfo = () => {
  return baseInstance.get("/members");
};

export const DeleteUser = (password) => {
  return baseInstance.delete("/members", {
    currentPassword: password,
  });
};

export const PostFindIdEmail = (email, name) => {
  return baseInstance.post("/members/find/id", {
    email,
    name,
  });
};

export const PostFindPwEmail = (email, loginId) => {
  return (
    baseInstance.post("/members/find/password"),
    {
      email,
      loginId,
    }
  );
};

export const PostCertificationCheck = (certification, email) => {
  return baseInstance.post("/members/certification", {
    certification,
    email,
  });
};

export const PutChangePw = (email, newPassword) => {
  return baseInstance.put("/members/find/password", {
    email,
    newPassword,
  });
};

export const GetProfileData = (loginId) => {
  return baseInstance.get(`/members/${loginId}`);
};
