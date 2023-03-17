import { useEffect } from 'react';
import PostInput from "../../components/PostInput";

const EditPost = ({setHeader}) => {

    useEffect(() => {
        setHeader(true);
    },[setHeader]);

    return(
        <PostInput 
            handleButton={"수정하기"}
            pageTitle={"글 수정"}
        />
    )
};

export default EditPost;