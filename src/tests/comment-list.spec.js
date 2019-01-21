import React from 'react';
import Enzyme, {render, shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import mockedArticles from '../fixtures';
import CommentList from '../components/comment-list';

Enzyme.configure({ adapter: new Adapter() });

describe('Comment List', function () {
    it('default: should render only button', () => {
        const wrapper = mount(
            <CommentList comments={mockedArticles[0].comments} />
        );

        expect(wrapper.find('.test--comment-btn').length)
        .toEqual(1)
    })

    it('default: should render without open comments', () => {
        const wrapper = mount(
            <CommentList comments={mockedArticles[0].comments} />
        );

        expect(wrapper.find('.test--comments-container').length)
            .toEqual(0)
    })

    it('should show comment text after click on button', () => {
        const wrapper = mount(
            <CommentList comments={mockedArticles[0].comments} />
        );

        wrapper.find('.test--comment-btn').at(0).simulate('click');

        expect(wrapper.find('.test--comments-container').length)
            .toEqual(1)
    })
})
