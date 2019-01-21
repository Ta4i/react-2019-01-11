import React from 'react';
import Enzyme, {render, shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CommentList from './comment-list';
import mockedArticles from '../../fixtures';
import ArticleList from "../article-list";

Enzyme.configure({adapter: new Adapter()});

describe('Comments List', function () {
    it('should render', () => {
        const wrapper = mount(
            <CommentList articles={mockedArticles}/>
        )

        expect(wrapper.find('.test--coml__container').length)
    });

    it('should not render without open comments', () => {
        const wrapper = render(
            <CommentList articles={mockedArticles}/>
        )

        expect(wrapper.find('.test--comment_body').length)
            .toEqual(0)
    });

    it('should show comment text after click on button', () => {
        const wrapper = mount(
            <CommentList articles={mockedArticles}/>
        )

        wrapper.find('.test--comment__btn').at(0).simulate('click');

        // check if comments exists in this article
        if (expect(wrapper.find('.test--comment_body')) > 0 ){
            expect(wrapper.find('.test--comment_body').length)
                .toEqual(1)
        }
    });

});