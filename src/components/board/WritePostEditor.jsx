import { useMemo } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const WritePostEditor = ({ value, onChange }) => {
  console.log(value);
  const toolbarOptions = [
    [{ size: ["small", false, "large", "huge"] }],
    [{ font: [] }],
    ["blockquote", "code-block"],

    [{ list: "ordered" }, { list: "bullet" }],
    [{ indent: "-1" }, { indent: "+1" }],
    [{ direction: "rtl" }],

    [{ color: [] }, { background: [] }],
    [{ align: [] }],
    ["link", "image"],
  ];

  const formats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "code-block",
    "list",
    "bullet",
    "indent",
    "direction",
    "color",
    "background",
    "align",
    "link",
    "image",
  ];

  const modules = useMemo(() => {
    return {
      toolbar: {
        container: toolbarOptions,
      },
    };
  }, []);

  return (
    <div>
      <ReactQuill
        style={{ height: "20rem" }}
        modules={modules}
        formats={formats}
        value={value}
        onChange={onChange}
        placeholder="내용을 입력해주세요"
      />
    </div>
  );
};

export default WritePostEditor;
