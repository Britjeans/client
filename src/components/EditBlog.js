import React, {Component} from "react";
import {connect} from "react-redux";
import ReactQuill, {Quill} from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { updateBlog, getBlogDetail } from "../store/actions/blogs";
import ImageResize from 'quill-image-resize-module';

Quill.register('modules/ImageResize', ImageResize);
/* 
 * Simple editor component that takes placeholder text as a prop 
 */
class EditBlog extends Component {
    constructor (props) {
        super(props);
        this.state = { blog_id: this.props.blog_id, editorHtml: this.props.content, theme: 'snow', title: this.props.title}
        this.handleChange = this.handleChange.bind(this)
    }
    
    handleChange (html) {
        this.setState({ editorHtml: html });
    }

    handleUpdateBlog = event => {
        event.preventDefault();
        this.props.updateBlog({
            blog_id: this.state.blog_id,
            title: this.state.title,
            content: this.state.editorHtml,  
        });
        this.setState({ message:"" });
        this.props.history.push("/discover");

    };

    
    render () {
      return (
        <div className="blog-editor">
            <form onSubmit={this.handleUpdateBlog} >
                {this.props.errors.message && (
                    <div className="alert alert-danger">
                        {this.props.errors.message}
                    </div>
                )}
                <input type="text" className="form-control" placeholder="Blog Title"
                    value={this.state.title} onChange={e => this.setState({title: e.target.value})} />

                <div className="text-editor">

                <ReactQuill 
                theme={this.state.theme}
                onChange={this.handleChange}
                value={this.state.editorHtml}
                modules={EditBlog.modules}
                formats={EditBlog.formats}
                bounds={'.app'}
                placeholder={this.props.placeholder}
                />
                </div>
                <button type="submit" className="btn btn-primary">
                    Update Blog
                </button>
            </form>  

        </div>

       )
    }
}
  
  /* 
   * Quill modules to attach to editor
   * See https://quilljs.com/docs/modules/ for complete options
   */
  EditBlog.modules = {
    toolbar: [
      [{ 'header': '1'}, {'header': '2'}, {font:[]}],
      [{size: []}],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{'list': 'ordered'}, {'list': 'bullet'}, 
       {'indent': '-1'}, {'indent': '+1'}],
      ['link', 'image', 'video'],
      ['clean']
    ],
    ImageResize: {
     //   modules: ['Resize', 'DisplaySize', 'Toolbar']
    },
    clipboard: {
      // toggle to add extra line breaks when pasting HTML:
      matchVisual: false,
    }
  }
  /* 
   * Quill editor formats
   * See https://quilljs.com/docs/formats/
   */
  EditBlog.formats = [
    'header', 'font', 'size',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image', 'video'
  ]
  
function mapStateToProps(state) {
    return {
        errors: state.errors
    }
}


export default connect(mapStateToProps, {updateBlog, getBlogDetail})(EditBlog);