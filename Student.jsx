import React from 'react'

function Student(props) {
    const{studentInfo,keyStudent} = props
    return (

        <tr key= {keyStudent}>
            <td>{keyStudent+1}</td>
            <td>{studentInfo.studentId}</td>
            <td>{studentInfo.studentName}</td>
            <td>{studentInfo.age}</td>
            <td>{studentInfo.sex ? "Nam" : "Nữ"}</td>
            <td>
                <div className="template-demo">
                    <button
                        type="button"
                        className="btn btn-danger btn-icon-text"
                    >
                        Xem
                    </button>
                    <button
                        type="button"
                        className="btn btn-warning btn-icon-text"
                    >
                        Sửa
                    </button>
                    <button
                        type="button"
                        className="btn btn-success btn-icon-text"
                    >
                        Xóa
                    </button>
                </div>
            </td>
        </tr>

    )
}

export default Student