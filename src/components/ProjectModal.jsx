"use client";
import React, { Dispatch, SetStateAction } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Fade from "@mui/material/Fade";
//img
import Img1 from "../assets/ics.jpg";
import Img2 from "../assets/mifs.png";
import Img3 from "../assets/hdvn.png";

function ProjectModal({ open, onClose, children }) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpansion = () => {
    setExpanded((prevExpanded) => !prevExpanded);
  };
  return (
    // <div onClick={onClose} className={`fixed inset-0 flex justify-center items-center transition-colors border-xl z-100
    // ${[open ? "visible bg-black/20" : "invisible"]}
    // `}>
    //   {/* modal */}
    //   <div onClick={e=> e.stopPropagation()} className={`bg-white rounded-xl shadow p-6 transition-all ${open? "scale-100 opacity-100":"scale-125 opacity-0"}`}>
    //     <button onClick={onClose} className='absolute top-2 right-2 p-1 rounded-lg text-gray-400 bg-white hover:bg-gray-50 hover:text-gray-600'>
    //       X
    //     </button>
    //   ProjectModal
    //   </div>

    // </div>
    <Dialog open={open} onClose={onClose} fullWidth={true}>
      <DialogTitle id="alert-dialog-title">
        <h2 className="font-primary leading-tight text-accent">My latest work detail</h2>
      </DialogTitle>
      <DialogContent>
        {/* list of project */}
        <Accordion
          expanded={expanded}
          onChange={handleExpansion}
          slots={{ transition: Fade }}
          slotProps={{ transition: { timeout: 400 } }}
          sx={[
            expanded
              ? {
                  "& .MuiAccordion-region": {
                    height: "auto",
                  },
                  "& .MuiAccordionDetails-root": {
                    display: "block",
                  },
                }
              : {
                  "& .MuiAccordion-region": {
                    height: 0,
                  },
                  "& .MuiAccordionDetails-root": {
                    display: "none",
                  },
                },
          ]}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
            className="btn"
          >
            <Typography>
              Inventory Control System
              <br/><span style={{fontSize:'14px', fontWeight:'lighter'}}>
              (01/2024 - 09/2024)
              </span>
              </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <div>
                {/* img */}
                <img className="rounded-xl"
                  src={Img1}
                  alt="" />
                {/* content */}
                <div>
                  <h2 style={{fontWeight:"bold", fontSize:"24px"}} className="font-secondary mt-2">ICS Project</h2>
                  <div>
                    <Button style={{height:'20px', width:'30px'}} variant="outlined">NextJs</Button>
                  </div>
                  <p className="mt-2 font-secondary"> 
                  A production management tool designed to track material and product imports and exports, manage production plans, and provide inventory alerts to ensure sufficient stock for future production.   
                  </p>
                  <b className="text-md">Responsibilities:</b>
                  <div className="ml-4 font-secondary">
                    
                    <ul style={{listStyleType:"initial"}}>
                        <li>
                        Discussed Department of Production Control requirements and analyzed practical processes to propose effective solutions.
                        </li>
                        <li>
                        Collaborated with the team to design the database, develop APIs, create workflows, and plan development.
                        </li>
                        <li>Coded and tested system features to ensure reliability and functionality.
                        </li>
                        <li>
                        Coded and tested features to ensure functionality and reliability.
                        </li>
                        <li>Conducted weekly meetings to share progress, gather feedback, and enhance the software.
                        </li>
                        <li>Created user manuals and documented source code for future maintenance.
                        </li>
                      </ul>
                  </div>
                  
                </div>
              </div>
            </Typography>
          </AccordionDetails>
        </Accordion>
        {/* mifs */}
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
            className="btn"
          >
            <Typography>
              Maintenance Management System <br/><span style={{fontSize:'14px', fontWeight:'lighter'}}>
              (07/2023 - 10/2023)
              </span>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <div>
                {/* img */}
                <img className="rounded-xl"
                  src={Img2}
                  alt="" />
                {/* content */}
                <div>
                  <h2 style={{fontWeight:"bold", fontSize:"24px"}} className="font-secondary mt-2">MIFS Project </h2>
                  <div>
                    <Button style={{height:'20px', width:'100px'}} variant="outlined">Angular</Button>
                  </div>
                  <p className="mt-2 font-secondary"> 
                  A system designed to track machine downtime, collect and analyze NG (non-good) information, visualize electrical consumption, and generate statistical reports.
                  </p>
                  <b className="text-md">Responsibilities:</b>
                  <div className="ml-4 font-secondary">
                  
                    <ul style={{listStyleType:"initial"}}>
                        <li>
                        Collaborated with the Maintenance Department to understand reporting needs and requirements.
                        </li>
                        <li>
                        Visualized NG names, effect rates, and electrical consumption data for actionable insights.
                        </li>
                        <li>Coded and tested features to ensure accurate data collection and reporting.
                        </li>
                      </ul>
                  </div>
                </div>
              </div>
            </Typography>
          </AccordionDetails>
        </Accordion>
        {/* HDVN */}
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
            className="btn"
          >
            <Typography>
              Inspection system <br />
              <span style={{fontSize:'14px', fontWeight:'lighter'}}>
              (04/2022 - 05/2023)
              </span>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <div>
                {/* img */}
                <img className="rounded-xl"
                  src={Img3}
                  alt="" />
                {/* content */}
                <div>
                  <h2 style={{fontWeight:"bold", fontSize:"24px"}} className="font-secondary mt-2">IS Project</h2>
                  <div>
                    <Button style={{height:'20px', width:'30px'}} variant="outlined">PHP</Button>
                  </div>
                  <p className="mt-2 font-secondary"> 
                  A system developed to inspect input parts, manage inspection standards, record inspection values, and generate reports and charts for quality management.
                  </p>
                  <b className="text-md">Responsibilities:</b>
                  <div className="ml-4 font-secondary">
                    <ul style={{listStyleType:"initial"}}>
                    <li>
                        Discussed customers requirements and analyzed practical processes to propose effective solutions.
                        </li>
                        <li>
                        Collaborated with the team to design the database, develop APIs, create workflows, and plan development.
                        </li>
                        <li>Coded and tested system features to ensure reliability and functionality.
                        </li>
                        <li>
                        Coded and tested features to ensure functionality and reliability.
                        </li>
                        <li>Conducted weekly meetings to share progress, gather feedback, and enhance the software.
                        </li>
                        <li>Created user manuals and documented source code for future maintenance.
                        </li>
                    </ul>
                  </div>
                  
                </div>
              </div>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </DialogContent>
      <DialogActions>
        {/* <Button style={{color:'black', border:'solid 1px'}} onClick={onClose} autoFocus variant="contained" color='info'>
          Close
          </Button> */}
        <Button onClick={onClose} variant="outlined" color="secondary">Close</Button>
      </DialogActions>
    </Dialog>
  );
}

export default ProjectModal;
