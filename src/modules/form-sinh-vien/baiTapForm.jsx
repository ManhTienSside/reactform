import React, { Component } from 'react'
import FormSinhVien from './formSinhVien'
import TableSinhVien from './tableSinhVien'


export default class BaiTapForm extends Component {
  render() {
    return (
      <div className='container'>
        <FormSinhVien/>
        <TableSinhVien/>
      </div>
    )
  }
}
