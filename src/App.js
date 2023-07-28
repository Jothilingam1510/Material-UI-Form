import React,{useState} from 'react'
import './App.css';
import { API_URL } from './URL.js';
import { Typography, Card, CardContent, FormControl, FormLabel,  FormControlLabel, Button, } from '@mui/material';
import { Grid, Select, Switch} from '@material-ui/core';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import axios from 'axios';

function App(){
  const [details,setDetails] = useState({
    firstName: "",
    lastName: "",
    age: "",
    gender: "",
    degree: "",
    fresher: false,
  });
  
  const [selectedCheckboxes, setSelectedCheckboxes] = useState([]);
  
const degreeinfo=['BE','Bsc','BTech','BCom','MSc',"ME",'MTech','MCom','']

const handleChange = (e) =>{
    const {name, value} = e.target;
    setDetails((prev) =>{
      return{ ...prev, [name]: value, fresher :e.target.checked};
    })
  }
  

  
  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setSelectedCheckboxes((prevSelected) => [...prevSelected, value]);
    } else {
      setSelectedCheckboxes((prevSelected) =>
        prevSelected.filter((checkboxValue) => checkboxValue !== value)
      );
    }
  };

  const postData = async() => {
    await axios.post(API_URL,{
      details,
      selectedCheckboxes
    })
   
  }

  return (
    <div className='App'>
    <Typography gutterBottom variant="h3" align='center'>React-App</Typography>
    <Card style={{maxWidth:430, margin:"0 auto", padding:"10px 5px"}}>
      <CardContent>
      <Typography gutterBottom variant="h5" align='left'>Contact US</Typography>
<form>
  
  <Grid container spacing={2}>
    <Grid  sm={6} item>
      
      <input className='fn'
      type='text'
      name='firstName' 
      placeholder=' First Name'
      onChange={handleChange}
      fullWidth />
      
    </Grid>
    <Grid sx={12} sm={6} item>
      <input className='ln'
      type='text'
      name='lastName'
      placeholder='Last Name'
      onChange={handleChange}
      fullWidth />
    </Grid>
  
  <br/>
  
  <Grid sm={6} item>
    <FormControl style={{width:"190px"}} size="large">
    <InputLabel id="demo-multiple-degree-label">degree</InputLabel>

      <Select 
        onChange={handleChange}
        input={<OutlinedInput label="degree" name='degree'/>}
        >
         {degreeinfo.map((degree) => (
            <option value={degree} key={degree}>
              {degree}
            </option>
          ))}
      </Select>
    </FormControl>
    </Grid>

      <Grid sm={6} item> 
        <FormControl style={{width:"190px"}} >
          <input className='age'
          name='age'
          variant='outlined'
          onChange={handleChange}
          label='Age'
          placeholder='Age'
          type='number'
          inputProps={{min:10,max:100,step:1}}/>
        </FormControl>
      </Grid>
  </Grid>
  <br/>

  <div>
    <FormControl>
      <FormLabel  id="demo-radio-buttons-group-label">Gender</FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          name="gender"
          onChange={handleChange}
          >
          <div className='gender'>
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="female"  control={<Radio />} label="Female" />
            <FormControlLabel value="other"  control={<Radio />} label="Other" />
          </div>
        </RadioGroup>
    </FormControl>
  </div> 

  <FormLabel gutterBottom id="demo-radio-buttons-group-label">Language Kown</FormLabel>
  <br/>
  <div className='lang'>
    <Grid container spacing={12}>
      <label style={{fontSize:"20px", marginRight: '40px'}}>
          <input
          type="checkbox"
          name="option1"
          onChange={handleCheckboxChange}
        />
        Tamil
      </label>
     
      <label style={{fontSize:"20px", marginRight: '40px'}}>
        <input
          type="checkbox"
          name="option2"
          onChange={handleCheckboxChange}
        />
        English
      </label>
    
      <label style={{fontSize:"20px", marginRight: '40px'}}>
        <input
          type="checkbox"
          name="option3"
          onChange={handleCheckboxChange}
        />
        Malayalam
      </label>
      <label style={{fontSize:"20px", marginRight: '40px'}}>
        <input
          type="checkbox"
          name="option4"
          onChange={handleCheckboxChange}
        />
        Hindi
      </label>
      <label style={{fontSize:"20px", marginRight: '40px'}}>
        <input
          type="checkbox"
          name="option5"
          onChange={handleCheckboxChange}
        />
        Telungu
      </label>
      <label style={{fontSize:"20px", marginRight: '40px'}}>
        <input
          type="checkbox"
          name="option6"
          onChange={handleCheckboxChange}
        />
        Kannada
      </label>
      <br />
     
    </Grid>
  </div> 

  <div><label>Fresher</label>
      <Switch
        checked={details.fresher}
        onChange={handleChange}
        name="fresher"
      />
  </div>

   
   <div>
   <Grid>
      <Button onClick={postData}  variant="contained"  color='primary' fullWidth > Submit</Button>
    </Grid>
   </div>
</form>
</CardContent>
</Card>
</div>
  )
  };

export default App