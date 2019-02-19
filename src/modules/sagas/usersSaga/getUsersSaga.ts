import { call, put } from 'redux-saga/effects';
import { getUsersData, getUsersError, GetUsersFetch } from '../../actions';
import { API } from '../../../api';

export function* getUsersSaga(action: GetUsersFetch) {
    try {
        const users = yield call(API.get(), '/admin/users');
        yield put(getUsersData(users));
    } catch (error) {
        yield put(getUsersError(error));
    }
}
