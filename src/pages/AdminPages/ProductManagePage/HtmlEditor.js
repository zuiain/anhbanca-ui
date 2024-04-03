import { Editor } from '@tinymce/tinymce-react';
import { Controller } from 'react-hook-form';

function HtmlEditor({ control, controllerName, height }) {
    return (
        <Controller
            name={controllerName}
            control={control}
            render={({ field: { onChange, value } }) => (
                <Editor
                    name="editor"
                    apiKey={process.env.REACT_APP_TINY_API_KWY}
                    initialValue={value ? value : 'Nhập miêu tả về sản phẩm ... '}
                    init={{
                        height: height,
                        menubar: false,
                        plugins: [
                            'advlist',
                            'autolink',
                            'lists',
                            'link',
                            'image',
                            'charmap',
                            'preview',
                            'anchor',
                            'searchreplace',
                            'visualblocks',
                            'code',
                            'fullscreen',
                            'insertdatetime',
                            'media',
                            'table',
                            'code',
                            'help',
                            'wordcount',
                        ],
                        toolbar:
                            'undo redo | blocks | ' +
                            'bold italic forecolor | alignleft aligncenter ' +
                            'alignright alignjustify | bullist numlist outdent indent | ' +
                            'removeformat | help',
                        content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:16px }',
                    }}
                    onEditorChange={onChange}
                />
            )}
        />
    );
}

export default HtmlEditor;
