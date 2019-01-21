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

    it('should close article after click on button "close"', (done) => {
        const wrapper = mount(<ArticleList articles={mockedArticles} />),
            btn = wrapper.find('.test--article__btn').at(0)

        btn.simulate('click')
        expect(btn.text()).toBe('close')

        btn.simulate('click')
        expect(btn.text()).toBe('open')

        setTimeout(() => {
            wrapper
                .find('.test--article_body')
                .at(0)
                .simulate('transitionEnd')

            expect(wrapper
                    .find('.test--article_body')
                    .at(0)
                    .exists()).toEqual(false)

            done()
        }, 3600)
    })

    it('should call fetch data on init', (done) => {
        const wrapper = mount(
            <ArticleList
                articles = {mockedArticles}
                fetchData={() => done()}
            />
        )
    });

});