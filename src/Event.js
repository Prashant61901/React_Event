import React, { useState } from 'react';
import { Form, Button, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const MyForm = () => {
  const [formData, setFormData] = useState({});
  const [tableData, setTableData] = useState([]);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleChange = event => {
    const { name, value } = event.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = event => {
    event.preventDefault();
    setTableData(prevData => [...prevData, formData]);
    setFormData({});
    setIsFormSubmitted(true);
  };

  const handleEdit = () => {
    setIsFormSubmitted(false);
  };

  return (
    <div className='container'>
      <br></br>
       
    
      {!isFormSubmitted ? (
        <div>
        <h1 className='head1'>Create Event</h1>
        
        
        <Form onSubmit={handleSubmit} className='demo2'>
          <Form.Group className='col-lg-6'>
            <Form.Label>Event Name</Form.Label>
            <Form.Control type="text" name="name" placeholder='IPL' value={formData.name || ''} onChange={handleChange} />
          </Form.Group>
          <br></br>
          <Form.Group className='col-lg-6'>
            <Form.Label>Shopper</Form.Label>
            <Form.Control type="text" name="shopper" placeholder='Shopper Name' value={formData.shopper || ''} onChange={handleChange} />
          </Form.Group>
          <br></br>
          <Form.Group className='col-lg-6'>
            <Form.Label >Start Date</Form.Label>
            <Form.Control type="date" name="startDate" value={formData.startDate || ''} onChange={handleChange} />
          </Form.Group>
          <br></br>
          <Form.Group className='col-lg-6'>
            <Form.Label>End Date</Form.Label>
            <Form.Control type="date" name="endDate" value={formData.endDate || ''} onChange={handleChange} />
          </Form.Group>
          <br></br>
          <Form.Group className='col-lg-6'>
            <Form.Label>People Invited</Form.Label>
            <Form.Control type="number" name="people" placeholder='0' value={formData.people || ''} onChange={handleChange} />
          </Form.Group>
          <br></br>
          
          <Button type="submit" >Submit</Button>
        </Form>
        </div>
        
      ) : (
        
        <div>
          <h2 className='head'>Event Information</h2>
           <Button variant="primary" onClick={handleEdit}>
            Create Event
          </Button>
          <br></br>
          <br></br>
          <Table striped bordered>
            <thead>
              <tr>
                <th>Event Name</th>
                <th>Shopper</th>
                <th>Start Date</th>
                <th>End Date</th>
                <th>People Invited</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((data, index) => (
                <tr key={index}>
                  <td>{data.name}</td>
                  <td>{data.shopper}</td>
                  <td>{data.startDate}</td>
                  <td>{data.endDate}</td>
                  <td>{data.people}</td>
                </tr>
              ))}
            </tbody>
          </Table>
         
        </div>
      )}
    </div>
  );
};

export default MyForm;
