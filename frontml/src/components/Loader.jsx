import React, { Component } from 'react';
import DragAndDrop from './DragAndDrop';


function Loader() {

    const handleLoad = (data, result) => {
        console.log('loadead');
    }

    return (
    <React.Fragment>
        <div>
            <h1>
                Upload your slides in a PDF file!
            </h1>
            {/*<DragAndDrop name="Upload pdf" type="pdf" onLoad={handleLoad}/>*/}
            <DragAndDrop />

        </div>
    </React.Fragment> 
    );
}

export default Loader;