import React from 'react';
import Enzyme, {render, shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ArticleList from './article-list';
import mockedArticles from '../fixtures';

Enzyme.configure({ adapter: new Adapter() });

describe('Article List', function () {
    it('should render', () => {
        const wrapper = mount(
            <ArticleList articles = {mockedArticles} />
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

    it('in start all article should be closed', () => {
        const wrapper = mount(
          <ArticleList
            articles = {mockedArticles}
          />
        )

        expect(wrapper.find('.article').length).toEqual(0);
    });

    it('when btn open article click, article should be render', () => {
        const wrapper = mount(
          <ArticleList
            articles = {mockedArticles}
          />
        );

        wrapper.find('.test--article__btn').at(0).simulate('click');
        expect(wrapper.find('.article').length).toEqual(1);
    });

    it('when second article open, first article should be close', (done) => {
        const wrapper = mount(
          <ArticleList
            openItemId={null}
            articles = {mockedArticles}
          />
        );

        wrapper.find('.test--article__btn').at(0).simulate('click');
        const oldArticle = wrapper.find('.article p').text();

        wrapper.find('.test--article__btn').at(1).simulate('click')
        setTimeout(() => {
            wrapper.update();
            expect(wrapper.find('.article p').at(0).text())
              .not.toEqual(oldArticle);
            done();
        }, 600);
    });

});
