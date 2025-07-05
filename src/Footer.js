import { Box, IconButton, Link, Typography } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';

const data = [
  { src: "/indiaGovIn.png", title: "The National Portal of India" },
  { src: "/EPFO.png", title:"Employees' Provident Fund Organisation, India", subtitle: "Ministry of Labour & Employment, Government of India",},
  { src: "/WCD.png", title: "Women & Child Development" },
  { src: "/DGMS.png", title: "Directorate General of Mines Safety" },
  { src: "/CLC.png", title:"Chief Labour Commissioner (Central)", subtitle:"Government of India"},
];

const Links=[
    "Contact Us",
    "Feedback",
    "Manager",
    "Accessibility Statement",
    "Terms & Conditions",
    "Website Policies",
    "Web Information",
    "Archives",
    "NCLP",
    "Orders & Circulars",
    "Acts",
    "Complaint/Report",
    "National Conference/Media",
    "Dashboard",
    "FAQs",
    "Help",
];

const Footer = () => {
  const settings = {dots: false,infinite: true,speed: 700,slidesToShow: 4,slidesToScroll: 1,autoplay: true,autoplaySpeed: 2000,cssEase:"linear",responsive: [
      {breakpoint: 960,settings: {slidesToShow: 3,},},
      {breakpoint: 600,settings: {slidesToShow: 2,},},
      {breakpoint: 450,settings: {slidesToShow: 1,},},
    ],
  };

  const today = new Date().toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
  const date = today.slice(0,2)+"-"+today.slice(3,5)+"-"+today.slice(6,11);

  return (
    <div style={{ width: "98vw" }}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <Box sx={{ width: "96%", backgroundColor: "rgba(0, 0, 0, 0.05)", py: 3,my:5 }}>
          <Slider {...settings}>
                {data.map((item, idx) => (
                <Box key={idx} sx={{height: "4rem",px: 2,display: "flex",alignItems: "center",gap: 2, }}>
                <img src={item.src} alt={item.title} style={{ height: "100%" }} />
                <Box>
                  <Typography fontSize={item.subtitle ? "12px" : "body1"} fontWeight="bold" color={item.src === "/EPFO.png" || item.src === "/CLC.png" ? "rgba(255, 4, 4, 1)" : "black"} > {item.title}</Typography>
                  {item.subtitle && (
                    <Typography fontSize="9px" color="black">
                      {item.subtitle}
                    </Typography>
                    )}
                </Box>
              </Box>
            ))}
          </Slider>
        </Box>

        <Box sx={{zIndex: 100,position: "relative",width: "80%",height: "10rem",backgroundColor: "#882D00",p: 1,px: 5,borderRadius: "10px 10px 0px 0px",display: "flex",flexDirection: "column",justifyContent: "center",alignItems: "center",color: "white",}}>
          <Typography variant="h5" mb={2}>
            Disclaimer
          </Typography>
          <Typography fontSize={"11px"}>
            The approval of implementation of National Child Labour Project (NCLP)
            Scheme was up to 31.03.2021. Thereafter, the scheme has been subsumed /
            merged with Samagra Shiksha Abhiyan (SSA). Thus, opening of new Special
            Training Centres (STCs) or enrolment of new children in the STCs after
            31.03.2021, is not permitted. The children enrolled in STCs before
            31.03.2021 will be mainstreamed as per NCLP Guidelines. This Ministry
            will not release funds for running of those STCs which have been opened
            & children have been enrolled after 31.03.2021.
          </Typography>
        </Box>

        <Box sx={{width: "100%",position: "relative",top: "-5rem",height: "23rem",backgroundColor: "rgba(0, 0, 0, 0.03)",display:"flex",alignItems:"center",justifyContent:"space-around"}}>
            <Box width={"20%"} height={"40%"} sx={{display:"flex",flexDirection:"column",justifyContent:"space-around",alignItems:"center"}}>
                <Typography color="rgba(219, 95, 33, 1)">Reach Us</Typography>
                <Box sx={{width:"100%",gap:3,display:"flex",alignItems:"center"}}>
                    <img src="/embelem.png" width={"20%"}/>
                    <Typography variant="body2" textAlign={"left"}>Ministry of Labour and Employment Government of India Shram Shakti Bhawan Rafi Marg, New Delhi-110001</Typography>
                </Box>
            </Box>
            <Box width={"25%"} height={"40%"} sx={{display:"flex",flexDirection:"column",justifyContent:"space-between",alignItems:"center"}}>
                <Typography color="rgba(219, 95, 33, 1)">Find Us @</Typography>
                <Box mb={5} display={'flex'} justifyContent={'space-between'} width={'60%'}>
                  <IconButton>
                      <WhatsAppIcon />
                  </IconButton>
                  <IconButton>
                      <TwitterIcon />
                  </IconButton>
                  <IconButton>
                      <FacebookIcon />
                  </IconButton>
                  <IconButton>
                      <YouTubeIcon />
                  </IconButton>
                </Box>
            </Box>
            <Box width={"23%"} height={"40%"} sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <Typography color="rgba(219, 95, 33, 1)" mb={1}>Sitemap</Typography>
              <Box sx={{ display: "flex", justifyContent: "space-between",textAlign:"center", width: "100%" }}>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                  {Links.slice(0, Math.ceil(Links.length / 2)).map((link, index) => (
                    <Link key={index} href={`#`} underline="none" color="black"fontSize="12px">
                      {link}
                    </Link>
                  ))}
                </Box>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                  {Links.slice(Math.ceil(Links.length / 2)).map((link, index) => (
                    <Link key={index} href={`#`} underline="none" color="black"fontSize="12px">
                      {link}
                    </Link>
                  ))}
                </Box>
              </Box>
            </Box>
        </Box>
        <Box sx={{width: "100%",position: "relative",top:"-5rem",height: "3rem",backgroundColor: "#FE884D",display: "flex",justifyContent: "center",alignItems: "center",}}>
          <Typography variant="body2" sx={{ width: "60%", textAlign: "center" }}>
            PPELJ, developed and hosted by National Informatics Centre (NIC) | Last
            update: {date} | Total unique visitor : 0018338 ©2024 Ministry of
            Labour & Employment. All rights reserved
          </Typography>
        </Box>
      </div>
    </div>
  );
};

export default Footer;
