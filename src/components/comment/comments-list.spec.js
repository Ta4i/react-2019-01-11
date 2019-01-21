import React from 'react';
import Enzyme, {render, shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CommentList from './comment-list';
import mockedArticles from '../../fixtures';
import ArticleList from '../article/article-list.spec'

Enzyme.configure({ adapter: new Adapter() });

describe('Comment List', function () {
  it('should show comments text after click on button', () => {
    const comments = mockedArticles[0].comments
    const wrapper = mount(
      <CommentList comments={comments}/>,
    )
    console.log('[ASD]', mockedArticles[0])
    wrapper.find('.test--comment__btn').at(0).simulate('click');
    expect(wrapper.find('.test--art-comments__container').length)
      .toEqual(1)
  });
  it('should render without open comments', () => {
    const comments = mockedArticles[0].comments
    const wrapper = render(
      <CommentList comments={comments} />
    )

    expect(wrapper.find('.test--article_body').length)
      .toEqual(0)
  });
  it('should call fetch data on init', (done) => {
    const comments = mockedArticles[0].comments
    const wrapper = mount(
      <CommentList
        comments={comments}
        fetchData={() => done()}
      />
    )
  });
});