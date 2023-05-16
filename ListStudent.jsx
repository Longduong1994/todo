import React from 'react'
import Student from './Student'

function ListStudent({ ListStudentProps }) {
   
    return (
        <div>
            <div className="card-body">
                <h3 className="card-title">Danh sách sinh viên</h3>
                <div className="table-responsive pt-3">
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Mã sinh viên</th>
                                <th>Tên sinh viên</th>
                                <th>Tuổi</th>
                                <th>Giới tính</th>
                                <th>Hành động</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* tách tr thành 1 component để hiển thị giữ liệu */}
                            {ListStudentProps.map((element, index) => (
                                <Student keyStudent={index} studentInfo={element} />
                            )
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default ListStudent