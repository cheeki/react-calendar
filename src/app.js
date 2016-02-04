/**
 * Created by 1001196 on 16. 1. 18..
 */
import React from 'react';
import ReactDom from 'react-dom';
import Calendar from './components/calendar';
import './css/style.less';

var dateInput = document.getElementsByClassName('_calendar-input')[0];

var onDateSelected = function (date) {
    dateInput.value = date;
};

ReactDom.render(<Calendar onDateSelected={onDateSelected} />, document.getElementById('test'));