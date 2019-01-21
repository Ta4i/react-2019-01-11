import React from 'react';
import Enzyme, {render, shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CommentList from './comment-list';
import mockedArticles from '../fixtures';

Enzyme.configure({ adapter: new Adapter() });

describe('Comment List', function () {
    it('should be closed initially', () => {
        const wrapper = mount(
            <CommentList comments={mockedArticles[0].comments} />
        )
            expect(wrapper.find('.test--cl__container').length)
                .toEqual(0)        
    });

    it('should show comments after click on button', () => {
        const wrapper = mount(
            <CommentList comments = {mockedArticles[0].comments} />
        )

        wrapper.find('.test--cl__btn').at(0).simulate('click');

        expect(wrapper.find('.test--cl__item').length)
            .toEqual(mockedArticles[0].comments.length)
    });

    it('should render empty comment list', () => {
        const wrapper = mount(
            <CommentList comments={[]}/>
        )

        wrapper.find('.test--cl__btn').at(0).simulate('click');

        expect(wrapper.find('.test--cl__item--empty').length)
            .toBe(1)
    });
})