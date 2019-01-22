import React from 'react';
import Enzyme, {render, shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CommentList from './comment-list';
import mockedArticles from '../../fixtures';

Enzyme.configure({ adapter: new Adapter() });

describe('Comment List', function () {
  it('should render', () => {
    const { comments } = mockedArticles[0];
    const wrapper = mount(
      <CommentList comments={comments} />
    )

    expect(wrapper.find('.comment-list').length)
      .toEqual(1);
  });

  it('should render with 5 item comment', () => {
    const { comments } = mockedArticles[0];
    const wrapper = mount(
      <CommentList comments={comments} />
    )

    expect(wrapper.find('.comment-list .item').length)
      .toEqual(5);
  })

  it('should render without comment list', () => {
    const wrapper = mount(
      <CommentList comments={[]} />
    )

    expect(wrapper.find('.comment-list').length)
      .toEqual(0);
  });

  it('when component render, button text contain "show comments"', () => {
    const wrapper = mount(
      <CommentList comments={[]} />
    );

    expect(wrapper.find('button').text())
      .toEqual('show comments');
  })

  it('when click button show comments, text btn should be change', () => {
    const wrapper = mount(
      <CommentList comments={[]} />
    );

    const oldText = wrapper.find('button').text();
    wrapper.find('button').simulate('click');
    expect(oldText).not.toEqual(
      wrapper.find('button').text()
    );
  })

});
