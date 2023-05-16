import React from 'react'

function Controls({toggle,propsAction}) {
// nhận dữ liệu từ controls gửi lên parent
// khi click vào button thêm mới 
//=> sẽ gửi lên parent 1 trạng thái true/fales và 1 actionName tương ứng
   const handleToggleAdd=()=>{
    propsAction(!toggle,"ADD")
    console.log(toggle)
   }
    return (
        <div>
           <div className="card-header">
        <div className="row">
          <div className="col-3">
            <button type="button" className="btn btn-primary btn-icon-text" onClick={handleToggleAdd}>
              Thêm mới sinh viên
            </button>
          </div>
          <div className="col-6">
            <form className="search-form" action="#">
              <i className="icon-search" />
              <input
                type="search"
                className="form-control"
                placeholder="Search Here"
                title="Search here"
              />
              <button className="btn btn-primary btn-icon-text">
                Tìm kiếm
              </button>
            </form>
          </div>
          <div className="col-3 d-flex align-items-center">
            <select className="form-control">
              <option value="">Sắp xếp</option>
              <option value="">ABC def</option>
              <option value="">ABC def</option>
              <option value="">ABC def</option>
            </select>
          </div>
        </div>
      </div>
        </div>
    )
}

export default Controls