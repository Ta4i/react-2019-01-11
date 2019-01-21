import React from 'react';
import Enzyme, {render, shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CommentList from '.';
import mockedArticles from '../../fixtures';

const { comments: mockedComments } = mockedArticles[0];

Enzyme.configure({ adapter: new Adapter() });

describe('Comment List', function () {
    it('should render', () => {
        const wrapper = mount(
            <CommentList comments = {mockedComments} />
        );

        expect(wrapper.find('.test--comment-list__container').length)
            .toEqual(1)
    });

    it('should render closed if comments no empty', () => {
        const wrapper = mount(
            <CommentList comments={mockedComments} />
        );

        expect(wrapper.find('.test--comment-list__list').length)
            .toEqual(0);
    });

    it('should render closed if comments empty', () => {
        const wrapper = mount(
            <CommentList />
        );

        expect(wrapper.find('.test--comment-list__stub').length)
            .toEqual(0);
  });

    it('should render comments list', () => {
        const wrapper = mount(
            <CommentList comments={mockedComments} />
        );

        wrapper.setState({isOpen: true});
        expect(wrapper.find('.test--comment-list__list').length)
            .toEqual(1);
    });

    it('should render no comments stub', () => {
        const wrapper = mount(
            <CommentList />
        );

        wrapper.setState({isOpen: true});
        expect(wrapper.find('.test--comment-list__stub').length)
            .toEqual(1);
    });
});
