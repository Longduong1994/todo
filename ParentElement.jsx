import React,{useState} from 'react'
import Controls from './Controls'
import ListStudent from './ListStudent'
import Form from './Form'

function ParentElement() {
    // tạo state thông tin sinh viên
    const [students, setStudents] = useState([
        {
          studentId: "SV001",
          studentName: "Nguyễn Văn A",
          age: 20,
          sex: true,
          birthDate: "2003-04-15",
          birthPlace: "HN",
          address: "Số 1 Phạm Hùng",
        },
        {
          studentId: "SV002",
          studentName: "Nguyễn Thị B",
          age: 22,
          sex: false,
          birthDate: "2001-09-09",
          birthPlace: "ĐN",
          address: "Số 1 Trần Duy Hưng",
        },
        {
          studentId: "SV003",
          studentName: "Nguyễn Văn C",
          age: 18,
          sex: true,
          birthDate: "2005-11-22",
          birthPlace: "HCM",
          address: "22 Lý Tự Trọng",
        },]);
        // truyền 1 hàm xuống component là controls 
        // const [actionName,setActionName] =useState("");
        // const handleActionAdd = ()=>{
        //     setActionName(actionName);
        // }
        //tạo state bặt tắt toggle
        const [toggle,setToggle]= useState(false);
        // sử dụng hàm handleActionAdd đã 
        const [actionName,setActionName] =useState("");
        const handleActionAdd = (toggle,action)=>{
            setToggle(toggle);
            setActionName(action);

        }
        let elementStudent = null;
        toggle ? elementStudent = <Form/>: <></>
  return (
    <div>
        <div className="row">
  <div className="col-lg-7 grid-margin stretch-card">
    <div className="card">
      {/* START CONTROL */}
      {/* truyền hàm xuống component controls */}
      <Controls toggle={toggle} propsAction = {handleActionAdd}/>
      {/* END CONTROL */}
      {/* START LIST STUDENT */}
      {/* truyền dữ liệu xuống component listStudent */}
    <ListStudent ListStudentProps = {students}/>
      {/* END LIST STUDENT */}
    </div>
  </div>
  {/* START FORM SINH VIEN */}
  <div className="col-5 grid-margin">
    <div className="card">
      <div className="card-body">
        <h3 className="card-title">Thông tin sinh viên</h3>
       <Form/>
      </div>
    </div>
  </div>
  {/* END FORM SINH VIÊN */}
</div>

        </div>
  )
}

export default ParentElement