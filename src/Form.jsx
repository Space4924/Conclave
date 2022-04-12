import React from 'react'
import { useState } from 'react'
import './normal.css'
import axios from 'axios'
import { Multiselect } from 'multiselect-react-dropdown';

const Form = () => {
    const selection = [

        { label: "  building sustaiable campus", value: "building sustaiable campus" },
        { label: "virtual sustainable tourd", value: "virtual sustainable tourd" },
        { label: "policy case", value: "policy case" },
        { label: "Case Study", value: "Case Study" },
        { label: "Ideathon", value: "Ideathon" },
        { label: "MUN", value: "MUN" },
        { label: "Turcoat", value: "Turcoat" },
        { label: "treasure hunt", value: "treasure hunt" },
        { label: "video competition", value: "video competition" },
        { label: "workshops", value: "workshops" },
        { label: "sustainability", value: "sustainability" },
        { label: "Conference", value: "Conference" },


    ]
    // const [selected,setSelected]=useState([]);
    
    // const [options] = useState(selection);


    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');
    const [college, setCollege] = useState('');
    const [country, setCountry] = useState('');
    const [field1, setField1] = useState(selection);
    const [field2, setField2] = useState('');



    const Submit = (e) => {
        e.preventDefault();
        // console.log(email,address,number,College,zip);
        const data = {
            Name: name,
            Email: email,
            Number: number,
            College: college,
            Country: country,
            Field1: field1,
            Field2: field2,

        }
        axios.post('https://sheet.best/api/sheets/e2890736-b436-4e1f-9757-f5fc77ea8a4d', data).then((response) => {
            console.log(response);
            setName('');
            setEmail('');
            setNumber('');
            setCollege('');
            setCountry('');
            setField1('');
            setField2('');




        })
    }



    return (
        <div>
            <form className="row g-3 form" onSubmit={Submit}>
                <div className="col-12">
                    <label for="inputAddress" className="form-label">Name</label>
                    <input type="text" required onChange={(e) => setName(e.target.value)} value={name} className="form-control" id="inputAddress" placeholder="User Name" />
                </div>
                <div className="col-md-12">
                    <label for="inputEmail4" className="form-label">Email</label>
                    <input type="email" required onChange={(e) => setEmail(e.target.value)} value={email} className="form-control" id="inputEmail4" />
                </div>

                <div className="col-12">
                    <label for="inputAddress2" className="form-label">Number</label>
                    <input type="text" required onChange={(e) => setNumber(e.target.value)} value={number} className="form-control" id="inputAddress2" />
                </div>
                <div className="col-md-8">
                    <label for="inputCollege" className="form-label">College</label>
                    <input type="text" required onChange={(e) => setCollege(e.target.value)} value={college} className="form-control" id="inputCollege" />
                </div>
                <div className="col-md-4">
                    <label for="inputCollege" className="form-label">Country</label>
                    <input type="text" required onChange={(e) => setCountry(e.target.value)} value={country} className="form-control" id="inputCollege" />
                </div>

                <div class="col-md-12">
                    <label for="inputState" class="form-label">Feild</label>
                    <Multiselect id="inputState" value={field1}  displayValue='label' options={field1} required onChange={(e) => setField1(e.target.value)} class="form-select">

                    </Multiselect>
       
                </div>
              

                <div className="col-12">
                    <button type="submit" style={{ 'width': '12vh', 'height': '5vh', 'fontSize': '2.5vh' , 'margin':'1vh 0 0 0'}} className="btn btn-primary">Sign in</button>
                </div>
            </form>
        </div>
    )
}

export default Form

//sheet   https://docs.google.com/spreadsheets/d/1dAoKykiP0k-MmKUwd9HsFEnGfFYPwBZa2XElzzgqJoQ/edit#gid=0




{/*
                <div class="col-md-4">
                    <label for="inputState" class="form-label">Feild</label>
                    <select id="inputState" required onChange={(e) => setField3(e.target.value)} class="form-select">
                        <option selected>Choose...</option>
                        <option value="building sustaiable campus">Building Sustainable Campus</option>
                        <option value='virtual sustainable tourd'>Virtual Sustainable Tourd</option>
                        <option value='policy case'>Policy Case</option>
                        <option value='case study'>Case study</option>
                        <option value='Ideathon'>Ideathon</option>
                        <option value='MUN'>MUN</option>
                        <option value='Turcoat'>Turncoat</option>
                        <option value='treasure hunt'>Treasure hunt</option>
                        <option value='video competition'>Video Competition</option>
                        <option value='workshops'>Workshops</option>
                        <option value='sustainability'> Sustainability</option>
                        <option value='Conference'>Conference</option>
                    </select>
                </div> */}
{/* <div className="col-12">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="gridCheck" />
                        <label className="form-check-label" for="gridCheck">
                            Check me out
                        </label>
                    </div>
                </div> */}