import "bootstrap-icons/font/bootstrap-icons.css"
import React from 'react';
import styled from 'styled-components';

const Menu = styled.div`
    width: fit-content;
    margin: auto;
    
    button {
        cursor: pointer;
        border-radius: 5px;
        border: 2px solid transparent;
        background-color: transparent;

        &:hover {
            background: linear-gradient( #574AE8, #3EA1DB);
            color: #FFF;
        }
        

        margin: 5px;
        padding: 3px;

        i {
            font-size: 1.3rem;
        }


    }

    .is-active {
        background: linear-gradient( #574AE8, #3EA1DB);
        color: #FFF;
    }
`

const Editor = styled.div`
    padding: 20px;

    .ProseMirror {
        outline: none;
        border: 1px solid #EDEDED;

        max-width: 60rem;
        height: 39rem;
        margin: auto;
        padding: 10px;

        overflow: hidden scroll;

        &:focus {
            border: 1px solid #c8c8c8;
        }

        p {
            font-weight: 300;
        }

        pre {
            display: block;
            background-color: #EDEDED;
            padding: 20px;
            border-radius: 5px;

        }

        code {
            font-size: 0.9rem;
            font-family: 'Fira Code', monospace;
            font-weight: 500;
        }

        ul, ol {
            font-weight: 300;
            padding-left: 3rem
        }

        ul li::marker {
            color: #574AE8;
            font-size: 0.8rem;
        }

        blockquote {
            padding: 20px;
            background-color: #EDEDED;
            border-left: 5px solid #3EA1DB;
            border-radius: 5px;
        }

        hr {
            border: 1px solid #574AE8;
        }
    }
`

const SendTextButton = styled.button`
    cursor: pointer;
    font-size: 1rem;
    display: block;

    border: 0;
    border-radius: 5px;
    padding: 10px;
    margin: 10px auto;

    background-color: #574AE8;
    color: #EDEDED;

    &:hover {
        background-color: #3EA1DB;
    }
`

const MenuBar = ({ editor }) => {
    if (!editor) {
        return null
    }

    return (
        <Menu>
            <button
                onClick={() => editor.chain().focus().toggleBold().run()}
                disabled={
                    !editor.can()
                    .chain()
                    .focus()
                    .toggleBold()
                    .run()
                }
                className={editor.isActive('bold') ? 'is-active' : ''}
                title='Negrito'
            >
                <i className="bi bi-type-bold"></i>
            </button>

            <button
                onClick={() => editor.chain().focus().toggleItalic().run()}
                disabled={
                    !editor.can()
                    .chain()
                    .focus()
                    .toggleItalic()
                    .run()
                }
                className={editor.isActive('italic') ? 'is-active' : ''}
                title='Itálico'
            >
                <i className="bi bi-type-italic"></i>
            </button>

            <button
                onClick={() => editor.chain().focus().toggleStrike().run()}
                disabled={
                    !editor.can()
                    .chain()
                    .focus()
                    .toggleStrike()
                    .run()
                }
                className={editor.isActive('strike') ? 'is-active' : ''}
                title='Linha através'
            >
                <i className="bi bi-type-strikethrough"></i>
            </button>

            <button
                onClick={() => editor.chain().focus().toggleCode().run()}
                disabled={
                    !editor.can()
                    .chain()
                    .focus()
                    .toggleCode()
                    .run()
                }
                className={editor.isActive('code') ? 'is-active' : ''}
                title='Código'
            >
                <i className="bi bi-code-slash"></i>
            </button>

            {/* <button onClick={() => editor.chain().focus().unsetAllMarks().run()}>
                clear marks
            </button>

            <button onClick={() => editor.chain().focus().clearNodes().run()}>
                clear nodes
            </button> */}

            <button
                onClick={() => editor.chain().focus().setParagraph().run()}
                className={editor.isActive('paragraph') ? 'is-active' : ''}
                title='Parágrafo'
            >
                <i className="bi bi-paragraph"></i>
            </button>

            <button
                onClick={() => editor.chain().focus().toggleHeading({level: 1}).run()}
                className={editor.isActive('heading', {level: 1}) ? 'is-active' : ''}
                title='Título H1'
            >
                <i className="bi bi-type-h1"></i>
            </button>

            <button
                onClick={() => editor.chain().focus().toggleHeading({level: 2}).run()}
                className={editor.isActive('heading', {level: 2}) ? 'is-active' : ''}
                title='Título H2'
            >
                <i className="bi bi-type-h2"></i>
            </button>

            <button
                onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
                className={editor.isActive('heading', { level: 3 }) ? 'is-active' : ''}
                title='Título H3'
            >
                <i className="bi bi-type-h3"></i>
            </button>
            
            <button
                onClick={() => editor.chain().focus().toggleBulletList().run()}
                className={editor.isActive('bulletList') ? 'is-active' : ''} 
                title='Lista não ordenada'   
            >
                <i className="bi bi-list-ul"></i>
            </button>

            <button
                onClick={() => editor.chain().focus().toggleOrderedList().run()}
                className={editor.isActive('orderedList') ? 'is-active' : ''}
                title='Lista ordenada'
            >
                <i className="bi bi-list-ol"></i>
            </button>
        
            <button
                onClick={() => editor.chain().focus().toggleCodeBlock().run()}
                className={editor.isActive('codeBlock') ? 'is-active' : ''}
                title='Bloco de código'
            >
                <i className="bi bi-code-square"></i>
            </button>

            <button
                onClick={() => editor.chain().focus().toggleBlockquote().run()}
                className={editor.isActive('blockquote') ? 'is-active' : ''}
                title='Citação'
            >
                <i className="bi bi-blockquote-left"></i>
            </button>

            <button onClick={() => editor.chain().focus().setHorizontalRule().run()}
                title='Linha horizontal'
            > 
                <i className="bi bi-hr"></i>
            </button>

            <button onClick={() => editor.chain().focus().setHardBreak().run()}
                title='Quebra de linha'
            >
                <i className="bi bi-file-break"></i>
            </button>

            <button
                onClick={() => editor.chain().focus().undo().run()}
                disabled={
                !editor.can()
                    .chain()
                    .focus()
                    .undo()
                    .run()
                }
                title='Desfazer'
            >
                <i className="bi bi-arrow-counterclockwise"></i>
            </button>

            <button
                onClick={() => editor.chain().focus().redo().run()}
                disabled={
                !editor.can()
                    .chain()
                    .focus()
                    .redo()
                    .run()
                }
                title='Refazer'
            >
                <i className="bi bi-arrow-clockwise"></i>
            </button>
        </Menu>
    )
}

function TextEditor({ editor, editorContent , SendPost }) {

    return (
        <Editor>
            <MenuBar editor={editor} />
            {editorContent}
            <SendTextButton onClick={() => SendPost(editor.getHTML())}>Terminar</SendTextButton>
        </Editor>
    );
}

export default TextEditor;