import Enzyme, {render, shallow, mount} from 'enzyme';
import React from 'react'
import Adapter from 'enzyme-adapter-react-16';
import CommentList from './index';
import mockedComments from '../../fixtures';

Enzyme.configure({ adapter: new Adapter() });

describe('Comment list', function () {
   it('should render', () =>  {
      const wrapper = render(
         <CommentList comments={mockedComments[0].comments}/>
      )
   });

   it('should render without open comments', () =>  {
      const wrapper = render(
         <CommentList comments={mockedComments[0].comments}/>
      )
      expect(wrapper.find('.test--comment__item').length)
         .toEqual(0)
   });

   it('should show comments list after click btn', () =>  {
      const wrapper = mount(
         <CommentList comments={mockedComments[0].comments}/>
      )
      wrapper.find('.test--comments__button').simulate('click');
      expect(wrapper.find('.test--comment__item').length)
         .toEqual(5)
   });


});
