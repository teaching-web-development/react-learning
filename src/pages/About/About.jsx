import React, { useState } from 'react';
import { Button, Card } from 'react-bootstrap';

const About = () => {
    const [user, setUser] = React.useState({
        name: 'Abu Hasan',
        desc: 'Some quick example text to build on the card title and make up the bulk of the cards content.',
        roll: 10
    });


    const [getFromData, setFromData] = useState({});
    const [formErr, setFormErr] = useState({
        name: false,
        desc: false,
        roll: false
    });

    const getData = (e) => {
        // console.log(e);
        // 1 , 2, 3, 4
        setFromData({ ...getFromData, [e.target.name]: e.target.value.trim() });
        getFromData.name && setFormErr({ name: false });
    }

    const handleSubmit = () => {
        console.log(getFromData);
        // alert('Test')
        setUser(getFromData);
        if (!getFromData.name) {
            setFormErr({ name: true })
        } else {
            setFormErr({ name: false })
        }

    }

    return (
        <div>
            <h1>This is About</h1>
            <div className='userInput pb-3' style={{ maxWidth: '300px' }}>
                <label htmlFor="name" className='d-flex flex-column'>
                    Name:
                    <input id="name" name="name" type="text" placeholder='Enter name' onChange={(e) => getData(e)} />
                    {formErr.name && <span className='text-danger'>Name is required</span>}
                </label>

                <label htmlFor="name" className='d-flex flex-column'>
                    Description:
                    <textarea id="desc" name="desc" type="text" placeholder='Enter desc' onChange={(e) => getData(e)} />
                </label>

                <label htmlFor="name" className='d-flex flex-column'>
                    Roll:
                    <input id="roll" name="roll" type="number" placeholder='Enter roll' onChange={(e) => getData(e)} />
                </label>
                <button onClick={() => handleSubmit()}>Submit</button>
            </div>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{user?.name}</Card.Title>
                    <Card.Text>
                        {user.desc}
                    </Card.Text>
                    <Button variant="primary">{user.roll}</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default About;