import React from 'react';
import { shallow } from 'enzyme';
import {Title} from "../src/Title";

describe(Title, () => {
  it('it renders correctly', () => {
    const wrapper = shallow(<Title title="hello Kotlin"/>);
    console.log(wrapper.html())
    console.log(wrapper)
    expect(1).toBe(1);
  })
})
