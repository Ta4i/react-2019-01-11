import React from 'react';
import Enzyme, {render, shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CommentList from './comment-list';
import mockedArticles from '../../fixtures';

Enzyme.configure({ adapter: new Adapter() });

describe('Comment List', function () {
  it('should show comments text after click on button', () => {
    const comments = mockedArticles[0]
    const wrapper = mount(
      <CommentList comments={comments}/>,
    )
    // console.log('[ASD]', mockedArticles[0])
    wrapper.find('.test--comment__btn').at(0).simulate('click');
    expect(wrapper.find('.test--art-comments__container').length)
      .toEqual(1)
  });
});