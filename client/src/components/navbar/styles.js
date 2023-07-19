import { makeStyles } from "@material-ui/core";
import { deepPurple } from "@material-ui/core/colors";

export default makeStyles((theme)=>({
appBar: {
  background:'black',
  margin: '0 0 20px 0',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding:'10px 50px',
  borderBottom:'5px',
  borderColor:'red',
},
heading: {
  color: 'white',
},
image: {
  borderRadius:'50%',
},
toolbar: {
  display: 'flex',
  justifyContent: 'flex-end',
  width: '400px',
},
profile: {
  display: 'flex',
  justifyContent: 'space-between',
  width: '400px',
},
userName: {
  display: 'flex',
  alignItems: 'center',
},
brandContainer: {
  display: 'flex',
  alignItems: 'center',
},
purple: {
  color: theme.palette.getContrastText(deepPurple[500]),
  backgroundColor: deepPurple[500],
},
}));