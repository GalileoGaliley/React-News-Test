const localSetting = JSON.parse(localStorage.getItem("settings"));

let initialState;
if (localSetting){
    initialState = {
        light: localSetting.light,
        font: localSetting.font,
        pageSize: localSetting.pageSize
    }
}else {
    initialState = {
        light: 'light',
        font: 12,
        pageSize: 20
    }
}
export default function settingReducer(state = initialState, action) {
    switch (action.type) {
        case 'CHANGE_SETTING': {
            return {
                light: action.payload.light,
                font: action.payload.font,
                pageSize: action.payload.pageSize
            }
        }
        default:
            return state
    }
}