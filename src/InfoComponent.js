import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

const InfoComponent = () => {
    return (
        <div>
            <h3 className="name-plate">William Steinbrink</h3>
            <h5 className="job-plate">Trainee</h5>
            <Button className="d-grid gap-2" variant="outline-secondary" href="mailto:william.steinbrink@gmail.com">Email Me</Button>
        </div>
    )
}

export default InfoComponent;