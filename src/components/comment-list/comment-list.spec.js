import React from 'react';
import Enzyme, {render, shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CommentList from './index';
import mockedArticles from '../../fixtures';

Enzyme.configure({ adapter: new Adapter() });

describe('Comment List', function () {
    it('should render', () => {
        const wrapper = mount(
            <CommentList comments = {mockedArticles[0].comments} />
        )

        expect(wrapper.find('.test--comment-list__container').length)
            .toEqual(1)
    });

    it('should render without comments', () => {
        const wrapper = render(
            <CommentList comments = {mockedArticles[0].comments} />
        )

        expect(wrapper.find('.test--comment__container').length)
            .toEqual(0)
    });

    it('should show comments after click on button', () => {
        const wrapper = mount(
            <CommentList comments = {mockedArticles[0].comments} />
        )

        wrapper.find('.test--comment-list__btn').at(0).simulate('click');

        expect(wrapper.find('.test--comment__container').length)
            .toEqual(5)
    });
});