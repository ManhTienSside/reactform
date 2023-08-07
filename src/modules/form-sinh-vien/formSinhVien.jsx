import React, { Component } from 'react'
import {connect} from 'react-redux'
class FormSinhVien extends Component {
  state ={
    value:{
      maSV:'',
      hoTen:'',
      email:'',
      soDienThoai:'',
    },
    error:{
      maSV:'maSV Khong duoc bo trong',
      hoTen:'hoTen Khong duoc bo trong',
      email:'email Khong duoc bo trong',
      soDienThoai:'soDienThoai Khong duoc bo trong',
    },
    touch:{
      maSV:false,
      hoTen:false,
      email:false,
      soDienThoai:false,
    },
  };
  handleChange =(event) =>{
    const {value,maSV,hoTen,email,soDienThoai, name} = event.target;
    this.setState({
      value:{
        ...this.state.value,
        [name]:value,
      },
    });
  }
  handleForcus = (event)=>{
    const {name} = event.target;
    this.setState({
      touch:{
        ...this.state.touch,
        [name]:true,
      },
    });
  }
  render() {
    console.log(this.state.touch)
    return (
    <div className='container'> 
      <div className="card text-left">
        <div className="card-header bg-dark text-white">
          <h3>Thong tin Sinh Vien</h3>
        </div>
        <div className="card-body">
          <form >
            <div className="row">
              <div className="form-group col-6">
                <span>Ma Sinh Vien</span>
                <input 
                onFocus={this.handleForcus}
                value={this.state.value.maSV} 
                onChange={this.handleChange}
                name='maSV'
                className='form-control'/>
                {this.state.touch.name && this.state.error.name &&
                (<p className='text-danger'> Khong duoc bo trong</p>)
                }
                
              </div>
              <div className="form-group col-6">
                <span>Ho va Ten</span>
                <input
                onFocus={this.handleForcus}
                value={this.state.value.hoTen}  
                onChange={this.handleChange}
                name='hoTen'
                className='form-control' />
                {this.state.touch.name && this.state.error.name &&
                (<p className='text-danger'> Khong duoc bo trong</p>)
                }
              </div>
            </div>
            <div className="row">
              <div className="form-group col-6">
                <span>So Dien Thoai</span>
                <input 
                onFocus={this.handleForcus}
                value={this.state.value.soDienThoai} 
                onChange={this.handleChange}
                name='soDienThoai'
                className='form-control' />
                {this.state.touch.name && this.state.error.name &&
                (<p className='text-danger'> Khong duoc bo trong</p>)
                }
              </div>
              <div className="form-group col-6">
                <span>Email</span>
                <input 
                onFocus={this.handleForcus}
                value={this.state.value.email} 
                onChange={this.handleChange}
                name='email'
                className='form-control'/>
                {this.state.touch.name && this.state.error.name &&
                (<p className='text-danger'> Khong duoc bo trong</p>)
                }
              </div>
            </div>
            <div className="row my-2">
              <div className="col-md-12 text-center">
                <button type='submit' className='btn btn-success'>ThemSinhVien</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    )
  }
}
const mapDispatchToProps = (dispatch) =>{
  return{
    themSinhVien:(sinhVien) =>{
      const action = {
        type:'ThemSinhVien',
        sinhVien
      }
      dispatch(action);
    }
  }
}
export default connect(null,mapDispatchToProps)(FormSinhVien);