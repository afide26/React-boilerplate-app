import React from 'react';
import DashboardPage from './../../components/DashboardPage';
import { shallow } from 'enzyme';


test("should render the ExpenseListDashboard with children", ()=>{
  const wrapper = shallow(<DashboardPage/>);
  expect(wrapper).toMatchSnapshot();
})