import { Button, Checkbox, Container, FormControlLabel, Input, InputLabel, MenuItem, Select, TextField} from '@material-ui/core';
import { Assignment } from '@mui/icons-material';
import { Autocomplete } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import React, { useState } from 'react';
import { Course } from '../types/type';

const NewEvent = () => {
    const Navigate = useNavigate();
    const [courses, setCourses] = useState<Course[]>([]);
	const getCandidate = async () => {
    const response = await axios.get("http://localhost:8080")
		.then(
			response => {
				setCourses(response.data)
			}
		)
		.catch(
			error => {
				console.error(error);
			}
		)
    }
    return(
        <>
            <Container className='container'>                     
                <h4 className='container-title'><i><Assignment/></i> Nouvel evenement</h4>
                <hr/>
                <div className="event-time">
                    <div>
                        <InputLabel>Date:</InputLabel>
                        <Input type='date'/>
                    </div>
                    <div>
                        <InputLabel>Heure de debut:</InputLabel>
                        <Input type='time'/>
                    </div>
                    <div>
                        <InputLabel>Heure de fin:</InputLabel>
                        <Input type='time'/>
                    </div>
                </div>

                <div className="event-description">
                    <div>
                        <InputLabel>Type d'evenement:</InputLabel>
                        <Select variant='standard'>
                            <MenuItem value="cours" >Cours</MenuItem>
                            <MenuItem value="autre">Autre</MenuItem>
                        </Select>
                    </div>
                    <div>
                        <InputLabel>Lieu:</InputLabel>
                        <Input/>
                    </div>
                    <div>
                        <InputLabel>Nom de l'evenement:</InputLabel>
                        <Autocomplete
                            id="courses"
                            options={courses}
                            renderInput = {
                                params => (
                                    <TextField
                                        {...params}
                                        label="courses"
                                    />
                                )
                            }
                            getOptionLabel={option => option.ref}
                        />

                    </div>    
                </div>

                <div className='event-participant'>
                    <InputLabel>Groupe:</InputLabel>
                    <div className='event-participant-form'>
                        <FormControlLabel control={<Checkbox />} label="G1" className='checkbox'/>
                        <FormControlLabel control={<Checkbox />} label="G2" className='checkbox'/>
                        <FormControlLabel control={<Checkbox />} label="G3" className='checkbox'/>
                    </div>
                </div>

                <Button variant='contained' color='primary' className='presence-button' onClick={
                    () => {
                        Navigate("/Camera")
                    }
                }>Faire presence</Button>
                <Button variant='contained' color='secondary' className='exit-button'>Annuler</Button>
            </Container> 
        </>
    );
}

export default NewEvent;
