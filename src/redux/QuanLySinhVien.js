import { ReactForm } from "./formSinhVien.const";
const stateDefault ={
    mangSinhVien:[{
        maSV:1,
        hoTen:'Nguyen Van A',
        soDienThoai:'0773936010',
        email:'manhtien790@gmail.com',
    }]
};
export const QuanLySinhVien = (state=stateDefault,action) =>{
    switch (action.type) {
        case ReactForm.DangKySinhVien:{
            state.mangSinhVien = [...state.mangSinhVien, action.payload]
            return{...state};
        };
        default:{
            return{...state};
        }
    }
}