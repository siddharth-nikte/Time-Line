import React, { useState } from 'react'

export default function Timeline() {
    /*  Taking input */
    const [Text, setText] = useState('');
    const handleInputChange = (e) => {
        setText(e.target.value);
    };
    const Blank = () => {
        setText('');
    };
    /* Make new node */
    const [node, setNode] = useState([]);
    const handleAddNode = () => {
        const newNode = { id: Date.now() }; // Generate a unique ID for each card, idea taken from ChatGPT as this is my first project
        setNode([...node, newNode]);
    };
    /* Delete node */
    const handleDeleteNode = () => {
        const remove = [...node];
        remove.pop();
        setNode(remove);
    }
    /* Set title value */
    const [titleOutput, setTitleOutput] = useState('Title');
    const handleTitleClick = () => {
        setTitleOutput(Text);
    };
    /*Set left color*/
    const [leftColor, setLeftColor] = useState('#000000');
    const handleColorChange = (e) => {
        setLeftColor(e.target.value);
    };
    const [ltextColor, setLtextColor] = useState('#FFFFFF');
    const handleTColorChange = (e) => {
        setLtextColor(e.target.value);
    };
    /*Set right color*/
    const [rightColor, setRightColor] = useState('#000000');
    const handleRColorChange = (e) => {
        setRightColor(e.target.value);
    };
    const [rtextColor, setRtextColor] = useState('#FFFFFF');
    const handleRtColorChange = (e) => {
        setRtextColor(e.target.value);
    };
    /*Set bg color*/
    const [bColor, setBColor] = useState('#2c3440');
    const handleBColorChange = (e) => {
        setBColor(e.target.value);
    };
    return (
        <div id="size" style={{backgroundColor: bColor}}>
            {/* Display title */}
            <div className='container text-center' id="title">
                <h3>{titleOutput}</h3>
            </div>
            {/*  Components */}
            {node.map((node) => ( //Loops over the node array
                <div className="container" id="timeline">
                    <div className="component" id="left">
                        <textarea className="form-control border-0" style={{ backgroundColor: leftColor , color: ltextColor}}></textarea>
                    </div>
                    <div className="component" id="middle">
                        <div className="vertical-line">
                            <div className="dot1"></div>
                            <div className="dot2"></div>
                        </div>
                    </div>
                    <div className="component" id="right">
                        <textarea className="form-control border-0" style={{ backgroundColor: rightColor , color: rtextColor}}></textarea>
                    </div>
                </div>
            ))}
            {/* Input Modal */}
            <div className='modal fade' id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby='staticBackdropLabel' aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className='modal-content bg-dark text-light'>
                        <div className='modal-header'>
                            <h3 className='modal-title' id="staticBackdropLabel">Enter text here</h3>
                        </div>
                        <div className='modal-body'>
                            <textarea className="form-control bg-dark text-light" id="exampleFormControlTextarea1" value={Text} onChange={handleInputChange}></textarea>
                        </div>
                        <div className='modal-footer'>
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={Blank}>Close</button>
                            <button type="button" className="btn btn-primary" onClick={handleTitleClick}>Save Changes</button>
                        </div>
                    </div>
                </div>
            </div>
            <center>
                {/* Button to open modal */}
                <button type='button' className='btn btn-success btn-sm m-2' data-bs-toggle="modal" data-bs-target="#staticBackdrop">Enter Title</button>
                {/* Button to make new node */}
                <button type='button' className='btn btn-success btn-sm' onClick={handleAddNode}>New Node</button>
                <button type='button' className='btn btn-success btn-sm m-2' onClick={handleDeleteNode}>Remove Node</button>
                <input type="color" className="form-control form-control-color bg-dark border-2 m-2" value={bColor} onChange={handleBColorChange} />
                <button type='button' className='btn btn-success btn-sm' >Set background color</button>
            <div className='container'> 
                <input type="color" className="form-control form-control-color bg-dark d-inline-block border-0 m-2" value={ltextColor} onChange={handleTColorChange} />
                <input type="color" className="form-control form-control-color bg-dark d-inline-block border-0" value={leftColor} onChange={handleColorChange} /> 
            </div>
            <button type='button' className='btn btn-success btn-sm' >Set color for left text and box</button>
            <div className='container'> 
                <input type="color" className="form-control form-control-color bg-dark d-inline-block border-0 m-2" value={rtextColor} onChange={handleRtColorChange} />
                <input type="color" className="form-control form-control-color bg-dark d-inline-block border-0" value={rightColor} onChange={handleRColorChange} /> 
            </div>
            <button type='button' className='btn btn-success btn-sm' >Set color for right text and box</button>
            </center>
        </div>
    )
}
