import React from 'react';
import ReactDOM from 'react-dom';
import { useState,useEffect } from 'react';
import './index.css';
import useStorage from '../src/hooks/useStorage';
import useFirestore from './hooks/useFirestore';

function ProgressBar({ file, setfile }) {
    const { url, progress } = useStorage(file);

    useEffect(() => {
        if (url) {
            setfile(null);
        }
    }, [url, setfile]);
    
    return <div className='progress-bar' style={{ width: progress + '%' }}>
    </div>
}

function Header() {
    return <div className="head">
        <h4>Photo Gallery</h4>
    </div>
}

function Title() {
    return <div className="title">
        <h1>Your pictures</h1>
        <p>upload all your favorite pictures here</p>
    </div>
}

function Upload() {
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);
    
    const types = ['image/png', 'image/jpeg'];
    
    const changeHandeler = (e) => {
        console.log("hh");
        let selected = e.target.files[0];
        if (selected && types.includes(selected.type)) {
            setFile(selected);
            setError('');
        } else {
            setFile(null);
            setError('please select an image file {.png or .jpeg} ');
        }
    }
    
    return( 
        <div className="upload">
            <form>
                <label>
                    <input type="file" onChange={changeHandeler}></input>
                    <span>+</span>
                </label>
                <div className="output">
                    {error && <div className="error">{error}</div>}
                    {file && <div className='name' >{file.name}</div>}
                    {file && <ProgressBar file={file} setfile={setFile}/> }
                </div>
            </form>
        </div>
    );
}

function ImageGrid() {
    const { docs } = useFirestore('images');
    
    return <div className='image-grid'>
        {docs && docs.map(docs => (
            <div className='image-wrap' key={docs.id} layout>
                <img src={docs.url} alt="uploaded pic"></img>
            </div>
        ))}
    </div>
}

ReactDOM.render(
    <div>
        <Header />
        <Title />
        <Upload/>
        <ImageGrid/>
    </div>,
  document.getElementById('root')
);