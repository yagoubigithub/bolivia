import React, { Component } from 'react'
import ReactQuill from 'react-quill'; // ES6
import 'react-quill/dist/quill.snow.css'; // ES6

export default class createArticle extends Component {
    
    state = {
        text :  '',
        delta  :[]
    }
    handleChange = (content, delta, source, editor) => {
        this.setState({ text: content, delta : editor.getContents() })
        console.log(delta);
      }
    render() {
       const  modules = {
            toolbar: [
                ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
                ['blockquote', 'code-block'],
                [{ 'header': 1 }, { 'header': 2 }],               // custom button values
                [{ 'list': 'ordered'}, { 'list': 'bullet' }],
                [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
                [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
                                       // text direction
      
                                      
                [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
                [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
      
                [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
                [{ 'font': [] }],
                [{ 'align': [] }],
      
                ['clean']    , 
                ['image', 'video', 'link'] ,
                [{ 'direction': 'rtl' }],  
            ]
          }
          const formats =  [
            'bold','italic', 'underline','strike',
            'blockquote', 'code-block',
            'header', 'list',
            'script','indent',
            'size',
             'size',
             'header',
             'color','background',
             'font',
             'align',
             'clean',
             'direction',
            'link', 'image', 'video'
          ];
        return (
            <div>
                  <ReactQuill value={this.state.text}
                  style={{backgroundColor : 'white',margin : 15,height : 300}}
                  theme="snow"
                  placeholder="مقالة"
                  onChange={this.handleChange}
                  modules={modules}
                  formats={formats}
                  bounds={'.app'} />
            </div>
        )
    }

    
}
