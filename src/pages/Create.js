// HOOKS
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// COMPONENTS
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
// import ButtonGroup from "@mui/material/ButtonGroup"
import Container from "@mui/material/Container"
// import AcUnitOutlined from "@mui/icons-material/AcUnitOutlined"
// import SendIcon from '@mui/icons-material/Send';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import TextField from '@mui/material/TextField'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from '@mui/material/FormControl'
import FormLabel from "@mui/material/FormLabel";

// const btn = [{
//   fontSize: 60,
//   backgroundColor: 'violet',
//   '&:hover': {
//     backgroundColor: 'blue'
//   }
// }]

// const title = [{
//   textDecoration: 'underline',
//   marginBottom: 20
// }]

const field =[{
  mt: '20px',
  mb: '20px',
  display: 'block'
}]

const Create = () => {
  const navigate = useNavigate()
  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')
  const [titleError, setTitleError] = useState(false)
  const [detailsError, setDetailsError] = useState(false)
  const [category, setCategory] = useState('todos')

  const handleSubmit = (e) => { 
    e.preventDefault()
    setTitleError(false)
    setDetailsError(false)

    if (title === '') {
      setTitleError(true)
    }

    if (details === '') {
      setDetailsError(true)
    }

    if (title && details) {
      // console.log(title, details, category)
      fetch('http://localhost:8000/notes', {
        method: 'POST',
        headers: {"Content-type": "application/json"},
        body: JSON.stringify({ title, details, category })
      }).then(() => navigate('/'))
    }
   }

  return (
    <Container>
      <Typography
        // sx={title}
        variant="h6"
        color="textSecondary"
        component="h2"
        gutterBottom
      >
        Create a New Note
      </Typography>

      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField 
          sx={field}
          onChange={(e) => setTitle(e.target.value)}
          label="Note Title"
          variant="outlined"
          color="secondary"
          fullWidth
          required
          error={titleError}
        />

        <TextField 
          sx={field}
          onChange={(e) => setDetails(e.target.value)}
          label="Details"
          variant="outlined"
          color="secondary"
          multiline
          rows={4}
          fullWidth
          required
          error={detailsError}
        />

        <FormControl sx={field}>
          <FormLabel>Note Category</FormLabel>  
          <RadioGroup value={category} onChange={(e) => setCategory(e.target.value)}>  
            <FormControlLabel value="money" control={<Radio color="secondary" />} label="Money" />
            <FormControlLabel value="todos" control={<Radio color="secondary" />} label="Todos" />
            <FormControlLabel value="reminders" control={<Radio color="secondary" />} label="Reminders" />
            <FormControlLabel value="work" control={<Radio color="secondary" />} label="Work" />
            {/* <Radio value="hello" color="secondary" />
            <Radio value="goodbye" color="secondary" /> */}
          </RadioGroup>
        </FormControl>

        <Button
          // sx={btn}
          type="submit"
          color="secondary"
          variant="contained"
          endIcon={<KeyboardArrowRightIcon />}
        >
          Submit
        </Button>

      </form>

      

      {/* ICONS */}
      {/* <AcUnitOutlined />
      <AcUnitOutlined color="secondary" fontSize="large"/>
      <AcUnitOutlined color="secondary" fontSize="small"/>
      <AcUnitOutlined color="action" fontSize="large"/>
      <AcUnitOutlined color="error" fontSize="small"/>
      <AcUnitOutlined color="disabled" fontSize="small"/> */}
    </Container>
  )
}
export default Create