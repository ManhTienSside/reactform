import React, { Component } from 'react'
import {connect} from 'react-redux'
import { dangKySinhVien } from '../../redux/formSinhVien.action';
class FormSinhVien extends Component {
  state ={
    value:{
      maSV:'',
      hoTen:'',
      email:'',
      soDienThoai:'',
    },
    error:{
      maSV:'',
      hoTen:'',
      email:'',
      soDienThoai:'',
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
    //validate khong duoc bo trong va phai la so\
    let newError = {};
    for (const key in this.state.touch) {
      if(this.state.touch[key]){
        // dk: ko dk bo trong
        // const __value = key ===id ? value: this.state.value[key];
        // cach 1
        if(key === name) {
          if(value.length === 0){
            newError[key] = key + 'Khong duoc bo trong';
          }
        }else {
          if(this.state.value[key].length === 0) {
            newError[key] = key + 'Khong duoc bo trong';
          }
        }
        // cach 2
        // if(__value.length ===0) {
        //   newError[key] = key + 'Khong duoc bo trong';
        // }
      }
    }

    this.setState({
      value:{
        ...this.state.value,
        [name]:value,
      },
      error:newError,
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
  handleSubmit = (event) =>{
    event.preventDefault();
    for (const key in this.state.value) {
      //phai nhap day du
      if (this.state.value[key].length ===0) {
        return;
      }
      //khong con dong bao loi nao
      //optional chaining '?'
      if(this.state.error[key]?.length>0){
        alert(this.state.error[key]);
        return;
      }
    }
    console.log('submit',this.state.value)
    this.props.dispatch(dangKySinhVien(this.state.value))
  }
  render() {
    console.log(this.state)
    return (
    <div className='container'> 
      <div className="card text-left">
        <div className="card-header bg-dark text-white">
          <h3>Thong tin Sinh Vien</h3>
        </div>
        <div className="card-body">
          <form onSubmit={this.handleSubmit}>
            <div className="row">
              <div className="form-group col-6">
                <span>Ma Sinh Vien</span>
                <input 
                onFocus={this.handleForcus}
                value={this.state.value.maSV} 
                onChange={this.handleChange}
                name='maSV'
                className='form-control'/>
                {this.state.touch.maSV && this.state.error.maSV &&
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
                {this.state.touch.hoTen && this.state.error.hoTen &&
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
                {this.state.touch.soDienThoai && this.state.error.soDienThoai &&
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
                {this.state.touch.email && this.state.error.email &&
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

export default connect()(FormSinhVien);