import React from 'react';
import { Button, Card } from 'react-bootstrap';

const Blog = () => {
    const [multiUser, setMultiUser] = React.useState([
        {
            name: 'Abu Hasan',
            desc: 'Some quick example text to build on the card title and make up the bulk of the cards content.',
            roll: 10
        }
    ]);
    const [getFromData, setFromData] = React.useState({});

    const getData = (e) => {
        // console.log(e);
        // 1 , 2, 3, 4
        setFromData({ ...getFromData, [e.target.name]: e.target.value.trim() });
    }

    const handleSubmit = () => {
        console.log(getFromData);
        setMultiUser([...multiUser, getFromData]);
    }


    console.log(multiUser);
    return (
        <div className='container'>
            <div className='userInput pb-3' style={{ maxWidth: '300px' }}>
                <label htmlFor="name" className='d-flex flex-column'>
                    Name:
                    <input id="name" name="name" type="text" placeholder='Enter name' onChange={(e) => getData(e)} />
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

            {
                multiUser?.map((data, index) =>
                    <Card className='mb-3' style={{ width: '18rem' }} key={index}>
                        <Card.Body>
                            <Card.Title>{data?.name}</Card.Title>
                            <Card.Text>
                                {data.desc}
                            </Card.Text>
                            <Button variant="primary">{data.roll}</Button>
                        </Card.Body>
                    </Card>
                )
            }
        </div>
    );
};

export default Blog;