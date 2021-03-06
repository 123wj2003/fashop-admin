import express from "@/services/express";

export default {
    namespace: "express",
    state: {
        list: {
            result: { list: [] ,total_number:0 }
        },
        info: {},
        add: {},
        edit: {},
        del: {},
        setCommonlyUse: {}
    },
    effects: {
        * list({ payload, callback }, { call, put }) {
            const response = yield call(express.list, payload);
            yield put({
                type: "_list",
                payload: response
            });
            if (callback) callback(response);
        },
        * info({ payload, callback }, { call, put }) {
            const response = yield call(express.info, payload);
            yield put({
                type: "_info",
                payload: response
            });
            if (callback) callback(response);
        },
        * add({ payload, callback }, { call, put }) {
            const response = yield call(express.add, payload);
            yield put({
                type: "_add",
                payload: response
            });
            if (callback) callback(response);
        },
        * edit({ payload, callback }, { call, put }) {
            const response = yield call(express.edit, payload);
            yield put({
                type: "_edit",
                payload: response
            });
            if (callback) callback(response);
        },
        * del({ payload, callback }, { call, put }) {
            const response = yield call(express.del, payload);
            yield put({
                type: "_del",
                payload: response
            });
            if (callback) callback(response);
        },
        * setCommonlyUse({ payload, callback }, { call, put }) {
            const response = yield call(express.setCommonlyUse, payload);
            yield put({
                type: "_setCommonlyUse",
                payload: response
            });
            if (callback) callback(response);
        }
    },
    reducers: {
        _list(state, action) {
            return {
                ...state,
                list: action.payload
            };
        },
        _info(state, action) {
            return {
                ...state,
                info: action.payload
            };
        },
        _add(state, action) {
            return {
                ...state,
                add: action.payload
            };
        },
        _edit(state, action) {
            return {
                ...state,
                edit: action.payload
            };
        },
        _del(state, action) {
            return {
                ...state,
                del: action.payload
            };
        },
        _setCommonlyUse(state, action) {
            return {
                ...state,
                setCommonlyUse: action.payload
            };
        }
    }
};
