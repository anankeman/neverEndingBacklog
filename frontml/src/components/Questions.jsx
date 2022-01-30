import React, { Component } from 'react';

function Questions() {
    const mock_data = {question1:{question:"What is my favorite color?", answer:"green", options:["red","green","blue","pink"]},
              question2:{question:"Why should I care?", answer: "because marks", options:["for money","because marks","for reputation","boring"]}}

    return ( 
            <div>Data:{mock_data.question1}</div>
        );
}

export default Questions;


