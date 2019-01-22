import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CommentList from './index';
import mockedArticles from '../../fixtures';

Enzyme.configure({ adapter: new Adapter() });

describe('Comment List', function () {
    const mockedComments = mockedArticles[0].comments
    it('should render button by default', () => {
        const wrapper = mount(
            <CommentList comments={mockedComments} />
        )
        expect(wrapper.find('.test--comments__btn').length)
            .toEqual(1)
    });
    it('should render comments on click', () => {
        const wrapper = mount(
            <CommentList comments={mockedComments} />
        )
        wrapper.find('.test--comments__btn').at(0).simulate('click');

        expect(wrapper.find('.test--comment__container').length)
            .toEqual(5)
    });

    it('should not render without comments', () => {
        const wrapper = mount(
            <CommentList comments={[]} />
        )
        wrapper.find('.test--comments__btn').at(0).simulate('click');

        expect(wrapper.find('.test--comment__container').length)
            .toEqual(0)
        expect(wrapper.find('.test--comment__empty-list').text()).toBe(
            'No comments yet'
        )    
    });

});