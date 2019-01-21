import React from 'react';
import Enzyme, {render, shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CommentList from './comment-list';
import mockedArticles from '../fixtures';

Enzyme.configure({ adapter: new Adapter() });
const comments = mockedArticles[0].comments;

describe('Comment List', function () {
     it('should render', () => {
        const wrapper = render(
            <CommentList comments = {comments} />
        )

        expect(wrapper.find('.test--cmns__section').length)
    
    });

    it('should show comments body after click on button', () => {
        const wrapper = mount(
            <CommentList comments = {comments} />
        )

        wrapper.find('.test--cmn__btn').at(0).simulate('click');

        expect(
            wrapper.find('.test--cmn__list').length)
            .toEqual(1)
    });

    it('should show all comments after click on button', () => {
        const wrapper = mount(
            <CommentList comments = {comments} />
        )

        wrapper.find('.test--cmn__btn').at(0).simulate('click');

        expect(
            wrapper.find('.test--cmn__body').length)
            .toEqual(comments.length)
    });

});