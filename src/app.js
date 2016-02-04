/**
 * Created by 1001196 on 16. 1. 18..
 */
import React from 'react';
import ReactDom from 'react-dom';
import Calendar from './components/calendar';
import './css/style.less';

ReactDom.render(<Calendar inputbox="_calendar-input" />, document.getElementById('test'));