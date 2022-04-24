// COMPONENTS
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton'
import DeleteOutlined from '@mui/icons-material/DeleteOutlined'
import Typography from '@mui/material/Typography'



const NoteCard = ({ note, handleDelete }) => {
  const classes = {

    test: {
      border: () => {
        if (note.category === 'work') {
          return '1px solid red'
        }
      }
    }

  }

  return (
    <div>
      <Card elevation={1} sx={classes.test}>
        <CardHeader 
          action={
            <IconButton onClick={() => handleDelete(note.id)}>
              <DeleteOutlined />
            </IconButton>
          }
          title={note.title}
          subheader={note.category}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" >
            {note.details}
          </Typography>
        </CardContent>
      </Card>
    </div>
  )
}
export default NoteCard