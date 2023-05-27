import { Editor } from "@toast-ui/react-editor";
import "@toast-ui/editor-plugin-color-syntax";
import "@toast-ui/editor/dist/toastui-editor.css";

const WritePostEditor = ({ ref, onChange }) => {
  return (
    <div>
      <Editor
        ref={ref}
        height="35rem"
        placeholder="내용을 입력해 주세요"
        previewStyle="vertical"
        initialEditType="markdown"
        language="ko-KR"
        onChange={onChange}
      />
    </div>
  );
};

export default WritePostEditor;
