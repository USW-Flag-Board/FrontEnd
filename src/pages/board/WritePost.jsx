import { useEffect } from 'react';
import axios from "axios";
import PostInput from '../../components/PostInput';


const WritePost = ({setHeader}) => {
  useEffect(() => {
    setHeader(true);
  },[setHeader]);
  
  return (
    <PostInput
      handleButton={"등록하기"}
      pageTitle={"글쓰기"}/>
  );
};

export default WritePost;
