import React, { Component } from 'react'
import {connect} from 'react-redux'
class FormSinhVien extends Component {
  state ={
    values:{
      maSV:'',
      hoTen:'',
      email:'',
      soDienThoai:'',
    },
    errors:{
      maSV:'',
      hoTen:'',
      email:'',
      soDienThoai:'',
    }
  }
  handleChange = (event) =>{
    let tagInput = event.target;
    let {name,value} = tagInput;
    // this.setState ({
    //   [name]:value
    // })
    if(value === ''){
    }
  }
  handleSubmit = (event) =>{
    event.prevenDefault();
    this.props.themSinhVien(this.state)
  }
  render() {
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
                <input type='text'  className='form-control'/>
                <p className='text-danger'>{this.state.errors.maSV}</p>
              </div>
              <div className="form-group col-6">
                <span>Ho va Ten</span>
                <input type='text' className='form-control' />
                <p className='text-danger'>{this.state.errors.hoTen}</p>
              </div>
            </div>
            <div className="row">
              <div className="form-group col-6">
                <span>So Dien Thoai</span>
                <input type='text' className='form-control' />
                <p className='text-danger'>{this.state.errors.email}</p>
              </div>
              <div className="form-group col-6">
                <span>Email</span>
                <input type='text' className='form-control'/>
                <p className='text-danger'>{this.state.errors.soDienThoai}</p>
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