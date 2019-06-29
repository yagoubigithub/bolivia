import React, { Component } from "react";
import ReactQuill from "react-quill"; // ES6
import "react-quill/dist/quill.snow.css"; // ES6
import Select from "react-select";
import {TextField,Card, Button} from '@material-ui/core';
const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" }
];
export default class createArticle extends Component {
  state = {
    text: "",
    delta: [],
    selectedOption: null
  };
  componentDidMount  (){
    this.reactQuill.editor.format('direction', 'rtl');
    this.reactQuill.editor.format('align', 'right');
    
  
  }
  handleChange = (content, delta, source, editor) => {
    this.setState({ text: content, delta: editor.getContents() });
  };
  handleSelectChange = selectedOption => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
  };
  render() {
    const modules = {
      toolbar: [
        ["bold", "italic", "underline", "strike"], // toggled buttons
        ["blockquote", "code-block"],
        [{ header: 1 }, { header: 2 }], // custom button values
        [{ list: "ordered" }, { list: "bullet" }],
        [{ script: "sub" }, { script: "super" }], // superscript/subscript
        [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
        // text direction

        [{ size: ["small", false, "large", "huge"] }], // custom dropdown
        [{ header: [1, 2, 3, 4, 5, 6, false] }],

        [{ color: [] }, { background: [] }], // dropdown with defaults from theme
        [{ font: [] }],
        [{ align: [] }],

        ["clean"],
        ["image", "video", "link"],
        [{ direction: "rtl" }]
      ]
    };
    const formats = [
      "bold",
      "italic",
      "underline",
      "strike",
      "blockquote",
      "code-block",
      "header",
      "list",
      "script",
      "indent",
      "size",
      "size",
      "header",
      "color",
      "background",
      "font",
      "align",
      "clean",
      "direction",
      "link",
      "image",
      "video"
    ];
    const { selectedOption } = this.state;
    return (
      <Card style={{margin : 5,padding : 5}}>
       <br />
        <div dir="rtl">
          <label className="create-article-label">عنوان المقالة</label>
         
          <TextField variant="outlined" placeholder="عنوان المقالة" fullWidth />
          <label className="create-article-label">مجال المقالة</label>
         
          <div>
          <Select
            value={selectedOption}
            onChange={this.handleSelectChange}
            options={options}
            placeholder="مجال المقالة"
          />
           <br /> <br />
          </div>
         
        </div>

        <ReactQuill
        
          value={this.state.text}
          style={{ backgroundColor: "white", height: 300 }}
          theme="snow"
          placeholder="مقالة"
          onChange={this.handleChange}
          modules={modules}
          formats={formats}
          bounds={".app"}
          ref={input => this.reactQuill = input}
        />
        <Button color="primary" variant="contained" fullWidth >حفظ المقالة</Button>
        
      </Card>
    );
  }
}
