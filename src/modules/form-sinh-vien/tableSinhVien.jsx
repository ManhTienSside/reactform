import React, { Component } from 'react'
import {connect} from 'react-redux'

class TableSinhVien extends Component {
  renderSinhVien =() =>{
    const {mangSinhVien} = this.props;
    return mangSinhVien.map((sinhVien,index)=>{
      return(
        <tr key={sinhVien.maSV}>
          <td>{sinhVien.maSV}</td>
          <td>{sinhVien.hoTen}</td>
          <td>{sinhVien.soDienThoai}</td>
          <td>{sinhVien.email}</td>
          <td>
            <button className='btn btn-danger mx-2'>Xoa</button>
            <button className='btn btn-warning'>Edit</button>
          </td>
        </tr>
      )
    })
  }
  render() {
    return (
      <div className='container'>
        <table className='table'>
          <thead>
            <tr className='bg-dark text-whites'>
              <th>Ma Sinh Vien</th>
              <th>Ho Va Ten</th>
              <th>So Dien thoai</th>
              <th>Email</th>
              <th>Chuc Nang</th>
            </tr>
          </thead>
          <tbody>
            {this.renderSinhVien()}
          </tbody>
        </table>
      </div>
    )
  }
}
const mapStateToProps = (state) =>{
  return {
    mangSinhVien:state.QuanLySinhVien.mangSinhVien
  }
};
export default connect(mapStateToProps,null)(TableSinhVien);