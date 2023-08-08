import { ReactForm } from "./formSinhVien.const";
export const dangKySinhVien = (payload) =>{
    return{
        type:ReactForm.DangKySinhVien,
        payload,
    };
};