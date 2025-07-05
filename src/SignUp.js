import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';
import CachedSharpIcon from '@mui/icons-material/CachedSharp';
import {Grid, Card, Divider,Box,TextField,Typography,Button,Link} from '@mui/material';

const SignUp = () =>{
    return (
       <div style={{backgroundImage: `url(/LoginBack.svg)`,backgroundSize: "cover",backgroundRepeat:"no-repeat"}}>
         <Grid sx={{display:"flex", justifyContent:'center', alignItems:'center',minHeight:"90vh"}}>
            <Card variant="outlined" sx={{width:{sm:'30rem',xs:"auto"},p:3,pb:0, display:'flex',flexDirection:"column",alignItems:"center", borderColor:"#DB5F21",borderRadius:"10px",borderWidth:"2px",backgroundColor:"rgba(255,255,255,0.7)",height:"auto"}}>
                
                <AccountCircleSharpIcon sx={{fontSize:"60px"}}/>
                
                <Typography variant="h2" sx={{ color: "#AB3900", fontSize: { xs: '1.2rem', sm: '1.7rem'},py:1, '@media (max-width:322px)': { fontSize: '1.2rem' }}}> New user - Register</Typography>

                <Divider sx={{ bgcolor: "#DBAB74", width:"100%",height:'1px'}} variant="middle"/>

                <Grid sx={{ display: "flex", flexDirection:"column", alignItems:"center", width:{xs:"auto", md:"100%"} }}>
                    <Grid sx={{ display: "flex", flexDirection: "column", justifyContent: "space-evenly", height: "13rem", width:{xs:'100%',md:"90%"} }}>
                        <Box component="form" sx={{width:'65%',display: 'flex',border: '2px solid #FFA500',borderRadius: '6px',overflow: 'visible',height: "auto",position: 'relative'}} autoComplete="off">
                            <Box sx={{ backgroundColor: '#140A00', color: 'white', width: "30%", display: 'flex', alignItems: 'center', justifyContent: "center", border: '1px solid #FFA500', borderRadius: '6px',position: 'relative',zIndex: 2,marginRight: '-10px'}}>
                                <Typography variant="body2">Name</Typography>
                            </Box>
                            <TextField required variant='outlined'size='small' sx={{ width: "75%",'& .MuiOutlinedInput-root': {paddingLeft: '10px','& fieldset': {borderColor: '#FFA500'},'&:hover fieldset': {borderColor: '#FFA500'},'&.Mui-focused fieldset': {borderColor: '#FFA500'}}}} />
                        </Box>
                        <Grid sx={{display:'flex', justifyContent:"space-between"}}>
                            <Box component="form" sx={{width:'65%',display: 'flex',border: '2px solid #FFA500',borderRadius: '6px',overflow: 'visible',height: "auto",position: 'relative'}} autoComplete="off">
                                <Box sx={{ backgroundColor: '#140A00', color: 'white', width: "30%", display: 'flex', alignItems: 'center', justifyContent: "center", border: '1px solid #FFA500', borderRadius: '6px',position: 'relative',zIndex: 2,marginRight: '-10px'}}>
                                    <Typography variant="body2">Email Id</Typography>
                                </Box>
                                <TextField required type='password' variant='outlined' size='small' sx={{width:"75%",'& .MuiOutlinedInput-root': {paddingLeft: '10px','& fieldset': {borderColor: '#FFA500'},'&:hover fieldset': {borderColor: '#FFA500'},'&.Mui-focused fieldset': {borderColor: '#FFA500'}}}} />
                            </Box>
                            <Button variant="contained" sx={{backgroundColor: "#F09A07", fontSize:"0.8rem",px:1.5,'@media (max-width: 411px)':{fontSize:'0.65rem'},'@media (max-width: 362px)':{fontSize:'0.55rem'}}}>Verify email</Button>
                        </Grid>
                       <Grid sx={{display:'flex', justifyContent:"space-between"}}>
                            <Box component="form" sx={{width:'65%',display: 'flex',border: '2px solid #FFA500',borderRadius: '6px',overflow: 'visible',height: "auto",position: 'relative'}} autoComplete="off">
                                <Box sx={{ backgroundColor: '#140A00', color: 'white', width: "30%", display: 'flex', alignItems: 'center', justifyContent: "center", border: '1px solid #FFA500', borderRadius: '6px',position: 'relative',zIndex: 2,marginRight: '-10px'}}>
                                    <Typography variant="body2" sx={{'@media (max-width: 424px)':{fontSize:'0.75rem'},'@media (max-width: 471px)':{fontSize:'0.7rem'}}}>Mobile No.</Typography>
                                </Box>
                                <TextField required type='password' variant='outlined' size='small' sx={{width:"75%",'& .MuiOutlinedInput-root': {paddingLeft: '10px','& fieldset': {borderColor: '#FFA500'},'&:hover fieldset': {borderColor: '#FFA500'},'&.Mui-focused fieldset': {borderColor: '#FFA500'}}}} />
                            </Box>
                            <Button variant="contained" sx={{backgroundColor: "#F09A07", fontSize:"0.8rem",px:2.5,'@media (max-width: 411px)':{fontSize:'0.65rem',px:2.3},'@media (max-width: 362px)':{fontSize:'0.55rem'}}}>Verify No.</Button>
                        </Grid>
                    </Grid>

                    <Grid container sx={{display:'flex',width:{xs:'100%',md:"90%"},justifyContent:"space-between", alignItems:"center",'@media (max-width: 466px)':{justifyContent:"center"}}}>
                        <Box component="form" sx={{display: 'flex',border: '2px solid #FFA500',borderRadius: '6px',height:"40px",mr:"auto",overflow: 'visible',position: 'relative'}} autoComplete="off">
                            <Box sx={{backgroundColor: '#140A00',color: 'white',display: 'flex',alignItems: 'center',justifyContent:"center",border: '1px solid #FFA500', borderRadius: '6px',position: 'relative',zIndex: 2,marginRight: '-10px'}}>
                                <Typography variant="body2" sx={{width:'6.5rem', fontSize:"12px", textAlign:"center"}}>Verification Code</Typography>
                            </Box>
                            <TextField variant='outlined' size='small' sx={{'& .MuiInputBase-root': {width:{xs:173,md:185},height:50,paddingLeft: '10px'},'& .MuiInputBase-input': {padding: '1px 8px'},'& .MuiOutlinedInput-root': {'& fieldset': {borderColor: '#FFA500'},'&:hover fieldset': {borderColor: '#FFA500'},'&.Mui-focused fieldset': {borderColor: '#FFA500'}}}}/>
                        </Box>
                        <Grid sx={{display:"flex",alignItems:"center",gap:1,'@media (max-width: 466px)':{mt:1},}}>
                            <Box sx={{backgroundColor: 'whitesmoke',color: 'black',display: 'flex',alignItems: 'center',justifyContent:"center",position: 'relative',zIndex: 2,marginRight: '-5px'}}>
                                <Typography variant="body2" sx={{width:'4rem', p:1.5, textAlign:"center"}}>4 + 8 = ?</Typography>
                            </Box>
                            <CachedSharpIcon fontSize='large' color='primary' sx={{position: 'relative',zIndex: 1}}/>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid container spacing={3} mt={2}>
                    <Grid><Button variant="contained" sx={{backgroundColor:"#140A00", color:"#FFFFFF"}}>Submit</Button></Grid>
                    <Grid><Button variant="contained" sx={{backgroundColor:"#DBAB74", color:"#000000"}}>Reset</Button></Grid>
                </Grid>

                <Box sx={{ display: "flex", alignItems: "center",ml:{md:"auto"}}} mt={2}>
                    <Link href="#" underline="none" sx={{ color: "#AB3900" }}>Existing User ?</Link>
                    <Typography variant="body2" sx={{ p:1, backgroundColor: "white", color: "#AB3900" }}> Login Here</Typography>
                </Box>

                <Grid container sx={{width:{xs:"118%",sm:"38rem"},p:1,display:'flex',justifyContent:{xs:"space-evenly"},alignItems:"center",backgroundColor:"#AB3900"}}>
                    <Grid><Button variant="contained" sx={{backgroundColor:"#F09A07",fontSize:{xs:"50%",sm:"small"}}} size='small'>Login with Parichay</Button></Grid>
                </Grid>
            </Card>
        </Grid>
       </div>
    );
}
export default SignUp   ;