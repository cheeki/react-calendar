// __tests__/title-test.js
jest.dontMock('../src/components/calendar');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

const Calendar = require('../src/components/calendar');
// const Title = require('../src/components/title');

// describe('Calendar', () => {

//   it('shows today\'s month and year on top' , () => {

//     // Render a checkbox with label in the document
//     var calendar = TestUtils.renderIntoDocument(
//       <Calendar />
//     );

//     var calendarNode = ReactDOM.findDOMNode(calendar);

//     // Simulate a click and verify that it is now On
//     var title = TestUtils.findRenderedComponentWithType(calendarNode, title);
//     var titleMonthNode = TestUtils.findRenderedDOMComponentWithClass(title, "fugui-calendar-month");
//     expect(titleMonthNode.textContent).toEqual(new Date().getMonth() + 1);
//   });

// });