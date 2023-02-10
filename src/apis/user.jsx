import {baseInstance} from "./instance";

export const PatchChangePw = (currentPassword, newPassword) => {
  return baseInstance.patch("/api/member/password", {
    currentPassword,
    newPassword,
  });
};

export const PutAvatarInfo = (bio, nickName, profileImg) => {
  return baseInstance.put("/api/members/avatar", {
    bio,
    nickName,
    profileImg,
  });
};

export const GetUserInfo = () => {
  return baseInstance.get("/api/members");
};

export const DeleteUser = (password) => {
  return baseInstance.delete("/api/members", {
    password,
  });
};

export const PostFindIdEmail = (email, name) => {
  return baseInstance.post("/api/members/find/id", {
    email,
    name,
  });
};

export const PostFindPwEmail = (email, loginId) => {
  return (
    baseInstance.post("/api/members/find/password"),
    {
      email,
      loginId,
    }
  );
};

export const PostCertificationCheck = (certification, email) => {
  return baseInstance.post("/api/members/certification", {
    certification,
    email,
  });
};

export const PutChangePw = (email, newPassword) => {
  return baseInstance.put("/api/members/find/password", {
    email,
    newPassword,
  });
};
