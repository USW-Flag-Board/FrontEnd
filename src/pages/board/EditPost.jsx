import { useEffect } from 'react';
import PostInput from "../../components/PostInput";
import axios from "axios";

const EditPost = ({setHeader}) => {
    useEffect(() => {
        setHeader(true);
    },[setHeader]);

    const handleEditSubmit = () => {
        
    }

    return(
        <PostInput 
            handleEditSubmit={handleEditSubmit}
            handleButton={"수정하기"}
            pageTitle={"글 수정"}/>
    )
};

export default EditPost;