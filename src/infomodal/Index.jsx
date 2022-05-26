import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Modal, Button} from 'react-bootstrap';
import { center } from './CenterItem';
import DatePicker from 'sassy-datepicker';

import  'react-dater/dist/index.css'

function InfoModal(props) {
    
    const [showBtn, setShowBtn] = useState(true);

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const workoutDate = (date) => {

        const currentDate = new Date();
    
        var currentMonth = currentDate.getMonth() + 1;
    
        if(currentMonth <= 9)
        currentMonth = '0' + currentMonth;  
    
        const currentDateFormatted = `${currentMonth}/${currentDate.getDate()}/${currentDate.getFullYear()}`;
    
        var month = date.getMonth() + 1;
        if(month <= 9)
        month = '0' + month;  
    
        const pickedDate = `${month}/${date.getDate()}/${date.getFullYear()}`;
        
        if(pickedDate < currentDateFormatted) {
            alert("Can't Pick a Date Before Today.")
        }
        else {
            var storedDate = pickedDate;
        }
    
        return storedDate;
    
    }

  return (
    <>
    {} {showBtn ? (
      <Button onClick={() => {setShowBtn(!showBtn); handleShow();}} style={center} className="nextButton">
         Add Workout.
      </Button>
    ) : null }
        <>
        <Modal style={{fixed: 'absolute', width: '250px', left: 'calc(50% - 125px)', top: '25%'}} show={show} onHide={handleClose}>
            <Modal.Header style={{ marginLeft: 'auto', marginRight: 'auto'}}>
                <Modal.Title style={{marginTop: '10px', fontSize: '12px'}}>Which day are you working out?</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <DatePicker style={{zoom: '.65', marginLeft: 'auto', marginRight: 'auto'}} onChange={workoutDate}/>
            </Modal.Body>
            <Modal.Footer>
            <Button onClick={() => {setShowBtn(!showBtn); handleClose();}} variant="secondary">
                Cancel
            </Button>
            <Button variant="primary" onClick={handleClose}>
                Next
            </Button>
            </Modal.Footer>
        </Modal>
        
        </>
    </>
  );
}

export default InfoModal;
