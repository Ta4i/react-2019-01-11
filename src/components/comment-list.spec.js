import React from 'react';
import Enzyme, {render, shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CommentList from './comment-list';
import mockedArticles from '../fixtures';

Enzyme.configure({ adapter: new Adapter() });

describe('Comment List', function () {
    it('should render', () => {
        mockedArticles.forEach((article) => {
            const wrapper = mount(
                <CommentList comments = {article.comments} />
            );
            wrapper.setState({isOpen: true}) 
            expect(wrapper.find('.test--comment__container').length).toEqual(article.comments ? article.comments.length : 0)
        })   
    });

    it('should render without open comments', () => {
        mockedArticles.forEach((article) => {
            const wrapper = mount(
                <CommentList comments = {article.comments} />
            );

            expect(wrapper.find('.test--comment_body').length)
                .toEqual(0)
        });    
    });

    it('should show article text after click on button', () => {
        mockedArticles.forEach((article) => {
            const wrapper = mount(
                <CommentList comments = {article.comments} />
            );
            wrapper.find('.test--comment__btn').at(0).simulate('click');
            expect(wrapper.find('.test--comment__container').length).toEqual(article.comments ? article.comments.length : 0)
        })   
    });
});