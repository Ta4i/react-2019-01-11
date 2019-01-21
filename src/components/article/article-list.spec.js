import React from 'react';
import Enzyme, {render, shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ArticleList from './article-list';
import mockedArticles from '../../fixtures';

Enzyme.configure({ adapter: new Adapter() });

describe('Article List', function () {
    it('should render', () => {
        const wrapper = mount(
            <ArticleList articles = {mockedArticles} />,
        )
        expect(wrapper.find('.test--art__container').length)
            .toEqual(7)
    });

    it('should render without open articles', () => {
        const wrapper = render(
            <ArticleList articles = {mockedArticles} />
        )

        expect(wrapper.find('.test--article_body').length)
            .toEqual(0)
    });

    it('should show article text after click on button', () => {
        const wrapper = mount(
            <ArticleList articles = {mockedArticles} />
        )

        wrapper.find('.test--article__btn').at(0).simulate('click');

        expect(wrapper.find('.test--article_body').length)
            .toEqual(1)
    });

    it('should call fetch data on init', (done) => {
        const wrapper = mount(
            <ArticleList
                articles = {mockedArticles}
                fetchData={() => done()}
            />
        )
    });
  it('should call close article after click button', () => {
    const wrapper = mount(
      <ArticleList
        {...this.props}
        articles = {mockedArticles}
      />
    )
    expect(wrapper.find('.test__article--body').length).toEqual(0)

    wrapper.find('.test__article--btn').at(0).simulate('click')
    expect(wrapper.find('.test__article--body').length).toEqual(1)
    wrapper.find('.test__article--btn').at(0).simulate('click')
    expect(wrapper.find('.test__article--body').length).toEqual(0)

  });  ///не могу понять почем не работает

});