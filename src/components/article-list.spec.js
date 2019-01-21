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

    //можно ли считать, что этот тест не только на закрытие статьи, но и на открытие тоже?
    it('should open and close an article on click', (done) => {
        const wrapper = mount(<ArticleList articles = {mockedArticles}/>)

        expect(wrapper.find('.test--article_body').length).toEqual(0)

        wrapper
            .find('.test--article__btn')
            .at(0)
            .simulate('click')

        expect(wrapper.find('.test--article_body').length).toEqual(1)

        wrapper
            .find('.test--article__btn')
            .at(0)
            .simulate('click')

        setTimeout(() => {
            try {
                wrapper.simulate('transitionEnd')
                expect(wrapper.find('.test--article_body').length).toEqual(0)
                done()
            } catch (err) {
                done.fail(err)
            }
        }, 900) 
        //почему этот таймаут при значении, например, 15000 не ждет столько времени?
        //почему пришлось менять transitionLeaveTimeout={300} внутри article, чтобы этому таймауту хватило времени?
    });

});