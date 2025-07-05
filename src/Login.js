import { useState } from 'react';
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';
import CachedSharpIcon from '@mui/icons-material/CachedSharp';
import {Grid, Card, Divider,Radio,FormControlLabel,Box,TextField,RadioGroup,Typography,Button,Link} from '@mui/material';

const Login = () =>{
    const [loginMethod, setLoginMethod] = useState('otp');
    
    const handleLoginMethodChange = (event) => {
        setLoginMethod(event.target.value);
    };

    const isOtpMethod = loginMethod === 'otp';
    
    const [userInput, setUserInput] = useState('');
    const [inputError, setInputError] = useState('');

    const handleInputChange = (event) => {
        const value = event.target.value;
        setUserInput(value);

        if (!value) {
            setInputError('');
            return;
        }

        const firstChar = value.charAt(0);
        if (!isNaN(firstChar)) {
            const onlyNumbers = /^[0-9]{10}$/;
            if (!onlyNumbers.test(value)) {
                setInputError('Enter a valid 10-digit mobile number');
            } else {
                setInputError('');
            }
        } else {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) {
                setInputError('Enter a valid email address');
            } else {
                setInputError('');
            }
        }
    };


    return (
       <div style={{backgroundImage: `url(/LoginBack.svg)`,backgroundSize: "cover",backgroundRepeat:"no-repeat"}}>
         <Grid sx={{display:"flex", justifyContent:'center', alignItems:'center',minHeight:"90vh"}}>
            <Card variant="outlined" sx={{width:{sm:'30rem',xs:"auto"},p:3,pb:0, display:'flex',flexDirection:"column",alignItems:"center", borderColor:"#DB5F21",borderRadius:"10px",borderWidth:"2px",backgroundColor:"rgba(255,255,255,0.7)",height:"auto"}}>
                
                <AccountCircleSharpIcon sx={{fontSize:"60px"}}/>
                
                <Typography variant="h2" sx={{ color: "#AB3900", fontSize: { xs: '1.2rem', sm: '1.7rem'},py:1, '@media (max-width:322px)': { fontSize: '1.2rem' }}}> Existing user - Login</Typography>
                
                <Divider sx={{ bgcolor: "#DBAB74", width:"100%",height:'1px'}} variant="middle"/>
 
                <RadioGroup row name="loginMethod" value={loginMethod} onChange={handleLoginMethodChange} sx={{width: "80%",display: "flex",justifyContent: "space-between",py: 1.5 }}>
                    <FormControlLabel value="otp" control={ <Radio size="smaller" sx={{color: "#140A00",'&.Mui-checked': { color: "black" } }} /> } label="Mobile / Email OTP" sx={{ '& .MuiFormControlLabel-label': {fontSize: '1rem','@media (max-width:372px)':{fontSize: '0.8rem'}}}}/>
                    <FormControlLabel value="password"control={ <Radio size="smaller"sx={{color: "black",'&.Mui-checked': { color: "black" }}}/>} label="Username / Password"sx={{'& .MuiFormControlLabel-label': {fontSize: '1rem','@media (max-width:372px)': {fontSize: '0.8rem'}}}}/>
                </RadioGroup>

                <Grid sx={{ display: "flex", flexDirection:"column", alignItems:"center", width:{xs:"auto", md:"25rem"} }}>
                    {isOtpMethod && (
                        <Grid sx={{ display: "flex", flexDirection: "column", justifyContent: "space-evenly", height: "9rem",width:{xs:'100%',md:"90%"}}}>
                            <Box component="form" sx={{display: 'flex',border: '2px solid #FFA500',borderRadius: '6px',overflow: 'visible',height: "auto",position: 'relative'}} autoComplete="off">
                                <Box sx={{backgroundColor: '#140A00',color: 'white',display: 'flex',pl:4,alignItems: 'center',border: '1px solid #FFA500',borderRadius: '6px',width:"8rem",px:1,textAlign:"center",position: 'relative',zIndex: 2,marginRight: '-10px','@media (max-width:372px)':{width:"7rem", marginRight: '-8px'},'@media (max-width:492px)':{px:0}}}>
                                    <Typography sx={{fontSize:'12px','@media (max-width:456px)':{fontSize:"0.7rem",ml:0.5}, '@media (max-width:379px)':{fontSize:"0.6rem"}}}>Mobile/ Email Id</Typography>
                                </Box>
                                <TextField variant='outlined' size='small' value={userInput} onChange={handleInputChange}sx={{ width: "100%",'& .MuiOutlinedInput-root': {paddingLeft: '10px',backgroundColor: inputError ? 'rgba(255, 0, 0, 0.1)' : 'transparent',backdropFilter: inputError ? 'blur(2px)' : 'none','& fieldset': { borderColor: '#FFA500' },'&:hover fieldset': { borderColor: '#FFA500' },'&.Mui-focused fieldset': { borderColor: '#FFA500' },'@media (max-width:372px)': { paddingLeft: '8px' }}}} />
                            </Box>
                            <Box component="form" sx={{display: 'flex',justifyContent:'space-between',overflow: 'hidden',height: "auto"}} autoComplete="off">
                                <Button variant="contained" sx={{backgroundColor: "#F09A07",'@media (max-width: 486px)':{width:'6.5rem', fontSize:"0.75rem"},'@media (max-width:361px)':{p:1}}}>Send OTP</Button>
                                <TextField variant='outlined' size='small' placeholder='Enter OTP' sx={{'& .MuiOutlinedInput-root': {'& fieldset': {borderColor: '#FFA500'},'&:hover fieldset': {borderColor: '#FFA500'},'&.Mui-focused fieldset': {borderColor: '#FFA500'}}}} />
                            </Box>
                        </Grid>
                    )}

                    {!isOtpMethod && (
                        <Grid sx={{ display: "flex", flexDirection: "column", justifyContent: "space-evenly", height: "9rem", width:{xs:'100%',md:"90%"} }}>
                            <Box component="form" sx={{display: 'flex',border: '2px solid #FFA500',borderRadius: '6px',overflow: 'visible',height: "auto",position: 'relative'}} autoComplete="off">
                                <Box sx={{ backgroundColor: '#140A00', color: 'white', width: "30%", display: 'flex', alignItems: 'center', justifyContent: "center", border: '1px solid #FFA500', borderRadius: '6px',position: 'relative',zIndex: 2,marginRight: '-10px'}}>
                                    <Typography variant="body2">User Id</Typography>
                                </Box>
                                <TextField variant='outlined'size='small' sx={{ width: "75%",'& .MuiOutlinedInput-root': {paddingLeft: '10px','& fieldset': {borderColor: '#FFA500'},'&:hover fieldset': {borderColor: '#FFA500'},'&.Mui-focused fieldset': {borderColor: '#FFA500'}}}} />
                            </Box>
                            <Box component="form" sx={{display: 'flex',border: '2px solid #FFA500',borderRadius: '6px',overflow: 'visible',height: "auto",position: 'relative'}} autoComplete="off">
                                <Box sx={{ backgroundColor: '#140A00', color: 'white', width: "30%", display: 'flex', alignItems: 'center', justifyContent: "center", border: '1px solid #FFA500', borderRadius: '6px',position: 'relative',zIndex: 2,marginRight: '-10px'}}>
                                    <Typography variant="body2">Password</Typography>
                                </Box>
                                <TextField type='password' variant='outlined' size='small' sx={{width:"75%",'& .MuiOutlinedInput-root': {paddingLeft: '10px','& fieldset': {borderColor: '#FFA500'},'&:hover fieldset': {borderColor: '#FFA500'},'&.Mui-focused fieldset': {borderColor: '#FFA500'}}}} />
                            </Box>
                        </Grid>
                    )}

                    <Grid container sx={{display:'flex',width:{xs:'100%',md:"90%"},justifyContent:"space-between", alignItems:"center",'@media (max-width: 420px)':{justifyContent:"center"}}}>
                        <Grid><Box component="form" sx={{display: 'flex',border: '2px solid #FFA500',borderRadius: '6px',height:"40px",mr:"auto",overflow: 'visible',position: 'relative'}} autoComplete="off">
                            <Box sx={{backgroundColor: '#140A00',color: 'white',display: 'flex',alignItems: 'center',justifyContent:"center",border: '1px solid #FFA500', borderRadius: '6px',position: 'relative',zIndex: 2,marginRight: '-10px'}}>
                                <Typography variant="body2" sx={{width:'6.5rem', fontSize:"12px", textAlign:"center"}}>Verification Code</Typography>
                            </Box>
                            <TextField variant='outlined' size='small' sx={{'& .MuiInputBase-root': {width:{xs:120,sm:125},height:50,paddingLeft: '10px'},'& .MuiInputBase-input': {padding: '1px 8px'},'& .MuiOutlinedInput-root': {'& fieldset': {borderColor: '#FFA500'},'&:hover fieldset': {borderColor: '#FFA500'},'&.Mui-focused fieldset': {borderColor: '#FFA500'}}}}/>
                        </Box>
                        </Grid>
                        <Grid sx={{display:"flex",alignItems:"center",gap:1,'@media (max-width: 413px)':{mt:1}}} mt={{xs:1,sm:0}}>
                            <Box sx={{backgroundColor: 'whitesmoke',color: 'black',display: 'flex',alignItems: 'center',justifyContent:"center",position: 'relative',zIndex: 2,marginRight: '-5px'}}>
                                <Typography variant="body2" sx={{width:'4rem', p:1.5, textAlign:"center"}}>4 + 8 = ?</Typography>
                            </Box>
                            <CachedSharpIcon fontSize='large' color='primary' sx={{position: 'relative',zIndex: 1}}/>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid container spacing={3} mt={2}>
                    <Grid><Button variant="contained" sx={{backgroundColor:"#140A00", color:"#FFFFFF"}}>Login</Button></Grid>
                    <Grid><Button variant="contained" sx={{backgroundColor:"#DBAB74", color:"#000000"}}>Reset</Button></Grid>
                </Grid>

                <Box sx={{ display: "flex", alignItems: "center",ml:{md:"auto"}}} mt={2}>
                    <Link href="#" underline="none" sx={{ color: "#AB3900" }}>New User?</Link>
                    <Typography variant="body2" sx={{ p:1, backgroundColor: "white", color: "#AB3900" }}> Register Here</Typography>
                </Box>

                <Grid container sx={{width:{xs:"118%",sm:"36rem"},p:1,display:'flex',justifyContent:{xs:"space-evenly"},alignItems:"center",backgroundColor:"#AB3900"}}>
                    <Grid><Link href="#" underline="none" sx={{ color: "#FFFFFF",ml:2, fontSize:{xs:"80%",sm:"medium"},'@media (max-width: 360px)':{ml:0}}}>Forgot User Id?</Link></Grid>
                    <Grid><Button variant="contained" sx={{backgroundColor:"#F09A07",fontSize:{xs:"50%",sm:"small"}}} size='small'>Login with Parichay</Button></Grid>
                    <Grid><Link href="#" underline="none" sx={{ color: "#FFFFFF",mr:2, fontSize:{xs:"80%",sm:"medium"},'@media (max-width: 360px)':{mr:0}}}>Forgot Password?</Link></Grid>
                </Grid>
            </Card>
        </Grid>
       </div>
    );
}
export default Login;