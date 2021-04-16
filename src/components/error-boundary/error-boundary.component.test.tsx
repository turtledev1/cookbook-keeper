import { shallow, ShallowWrapper } from 'enzyme';
import React from 'react';
import { handleUnexpectedError } from '../../actions/errors/errors.actions';
import store from '../../store/store';
import { FallbackErrorResult } from '../result/fallback-error-result.component';
import { ErrorBoundary } from './error-boundary.component';

jest.mock('../../store/store');

describe('ErrorBoundary', () => {
    const FakeComponent = () => null;

    const ERROR: Error = {
        message: 'message',
        name: 'name',
        stack: 'stack',
    };

    let wrapper: ShallowWrapper;

    const getChildren = () => wrapper.find(FakeComponent);
    const getFallbackErrorResult = () => wrapper.find(FallbackErrorResult);

    describe('on render', () => {
        beforeEach(() => {
            wrapper = shallow(
                <ErrorBoundary>
                    <FakeComponent />
                </ErrorBoundary>
            );
        });

        describe('when there is no error', () => {
            it('should display the children', () => {
                expect(getChildren().exists()).toEqual(true);
            });

            it('should not display the FallbackErrorResult', () => {
                expect(getFallbackErrorResult().exists()).toEqual(false);
            });
        });

        describe('when an error happens', () => {
            beforeEach(() => {
                getChildren().simulateError(ERROR);
            });

            it('should not display the children', () => {
                expect(getChildren().exists()).toEqual(false);
            });

            it('should display the FallbackErrorResult', () => {
                expect(getFallbackErrorResult().exists()).toEqual(true);
            });

            it('should dispatch unexpected error action', () => {
                expect(store.dispatch).toHaveBeenCalledWith(handleUnexpectedError(ERROR));
            });
        });
    });
});
