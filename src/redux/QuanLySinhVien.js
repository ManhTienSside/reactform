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
        case 'ThemSinhVien':{
            const mangSVUpdate =[...state.mangSinhVien,action.sinhVien];
            state.mangSinhVien = mangSVUpdate;
            return{...state};
        };
        default:{
            return{...state};
        }
    }
}