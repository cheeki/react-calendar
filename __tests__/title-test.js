// __tests__/title-test.js
jest.dontMock('../src/components/calendar');
jest.dontMock('../src/components/title');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

const Calendar = require('../src/components/calendar').default;
const CalendarTitle = require('../src/components/title').default;

describe('CalendarTest', () => {

    it('shows today\'s month and year on top', () => {
        // Render a checkbox with label in the document
        var calendar = TestUtils.renderIntoDocument(<Calendar/>);

        var title = TestUtils.scryRenderedComponentsWithType(calendar, CalendarTitle);
        var titleMonthNode = TestUtils.findRenderedDOMComponentWithClass(calendar, "fugui-calendar-month");
        var titleYearNode = TestUtils.findRenderedDOMComponentWithClass(calendar, "fugui-calendar-year");

        var today = new Date();
        expect(titleMonthNode.textContent).toEqual(today.getMonth() + 1 + "");
        expect(titleYearNode.textContent).toEqual(today.getFullYear() + "");
    });

});