// __tests__/title-test.js
jest.dontMock('../src/components/calendar');
jest.dontMock('../src/components/calendarTitle');
jest.dontMock('../src/components/calendarCell');
jest.dontMock('../src/components/calendarBody');
jest.dontMock('../src/components/calendarMonthSelect');
jest.dontMock('../src/components/calendarLabel');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

const Calendar = require('../src/components/calendar').default;

describe('CalendarMoveTest', () => {

    var calendar = TestUtils.renderIntoDocument(<Calendar/>);
    var today = new Date();

    var titleMonthNode = TestUtils.findRenderedDOMComponentWithClass(calendar, 'fugui-calendar-month');
    var titleYearNode = TestUtils.findRenderedDOMComponentWithClass(calendar, 'fugui-calendar-year');
    var prevButton = TestUtils.findRenderedDOMComponentWithClass(calendar, 'prev');
    var nextButton = TestUtils.findRenderedDOMComponentWithClass(calendar, 'next');

    it('shows today\'s month and year on top', () => {
        expect(titleMonthNode.textContent).toEqual(today.getMonth() + 1 + "");
        expect(titleYearNode.textContent).toEqual(today.getFullYear() + "");
    });

    it('goes to prev month on prev button click', () => {
        var prevMonth = today.getMonth() + "";

        TestUtils.Simulate.click(prevButton);
        expect(titleMonthNode.textContent).toEqual(prevMonth);
    });

    it('goes to next month on next button click', () => {
        var nextMonth = today.getMonth() + 1 + "";

        TestUtils.Simulate.click(nextButton);
        expect(titleMonthNode.textContent).toEqual(nextMonth);
    });

    it('shows prev year when moved 12 months before', () => {
        for(var i = 0; i < 12; i++) {
            TestUtils.Simulate.click(prevButton);
        }
        expect(titleYearNode.textContent).toEqual(today.getFullYear() - 1 + "");
    });

    it('shows next year when moved 12 months forward', () => {
        for(var i = 0; i < 12; i++) {
            TestUtils.Simulate.click(nextButton);
        }
        expect(titleYearNode.textContent).toEqual(today.getFullYear() + "");
    });
});

describe('CalendarSelectTest', () => {
    var calendar = TestUtils.renderIntoDocument(<Calendar/>);
    var today = new Date();

    it('shows today\'s date as selected date on initial load', () => {
        var selectedDate = TestUtils.findRenderedDOMComponentWithClass(calendar, 'selected');

        expect(selectedDate.textContent).toEqual(today.getDate() + '');
    });
});