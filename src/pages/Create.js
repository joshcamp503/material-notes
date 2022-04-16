// COMPONENTS
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
// import ButtonGroup from "@mui/material/ButtonGroup"
import Container from "@mui/material/Container"
// import AcUnitOutlined from "@mui/icons-material/AcUnitOutlined"
// import SendIcon from '@mui/icons-material/Send';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const Create = () => {

  return (
    <Container>
      <Typography
        variant="h6"
        color="textSecondary"
        component="h2"
        gutterBottom
      >
        Create a New Note
      </Typography>

      <Button
        onClick={() => console.log('You clicked me')}
        type="submit"
        color="secondary"
        variant="contained"
        endIcon={<KeyboardArrowRightIcon />}
      >
        Submit
      </Button>

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