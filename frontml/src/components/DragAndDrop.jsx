import React, { useEffect, useRef, useState } from "react";
//import styles from "./styles.less";
import {DropzoneArea} from 'react-mui-dropzone';
import Button from '@mui/material/Button';
import { Container } from "@mui/material";

function DragAndDrop(){
    const [files, setFiles] = useState([])

    const handleChange = (file) => {
        setFiles([file])
    };
    const handleOpen= () => {
        console.log("dole");
    }

    return(
        <React.Fragment>
            <Container maxWidth="sm">
            <DropzoneArea onChange={() => handleChange()} acceptedFiles={[".pdf"]}/>`
            <Button onClick={handleOpen()} variant="contained">
                    Add slides
            </Button>
            </Container>
            
        
        </React.Fragment>

    );

}


/**
 * 
 * @param {String} name
 * @param {String} type
 * @param {Function} onLoad 
 * @returns 
 */
function DragAndDrop2({props}) {
    const ref = useRef();
    useEffect(() => {
        const nv = ref.current;
        nv.addEventListener("dragover", (event) => {
            event.stopPropagation();
            event.preventDefault();
            // Style the drag-and-drop as a "copy file" operation.
            event.dataTransfer.dropEffect = "copy";
          });
      
          nv.addEventListener("drop", (event) => {
            event.stopPropagation();
            event.preventDefault();
            if (event.dataTransfer.files[0].name.endsWith(props.type)) {
              nv.textContent = event.dataTransfer.files[0].name;
              event.dataTransfer.files[0].text().then((result) => {
                props.onLoad(props.name, result);
              });
            } else {
              console.log("wrong file type");
              alert("Wrong file type");
            }
          });
    })
    

    return (
        <div ref={ref} style={{display: 'inline-block'}}>
        {props.name}
        </div>
    );

}

export default DragAndDrop;