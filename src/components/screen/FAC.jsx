import React, {useState} from 'react'
import Typography from '@mui/material/Typography';
import Time from './../tools/Time';
import "../../App.css";

import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';


function FAC() {

  const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
  ))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
  }));

  const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
      expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
      {...props}
    />
  ))(({ theme }) => ({
    backgroundColor:
      theme.palette.mode === 'dark'
        ? 'rgba(255, 255, 255, .05)'
        : 'rgba(0, 0, 0, .03)',
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
      transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
      marginLeft: theme.spacing(1),
    },
  }));

  const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .125)',
  }));

  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };


  return (
    <div className='flex_box'>
      <div className='flex_title'>
        <h1 className='components_title'>Түгээмэл асуулт & хариулт</h1>
      </div>
      <div className='FAQ_btn'>

      <div className='faq_box'>
        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>shoppy.mn-д бүртгүүлэхийн тулд хэрэглэгчийн профайл хэсэг дэх “нэвтрэх” товч дээр дарна.</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <ul>
              <li>
                Фэйсбүүк хаягаар шууд нэвтэрнэ эсвэл ашигладаг и-мэйл хаягаа оруулна.
              </li>
              <li>
                Бүртгүүлэх/Нэвтрэх нууц үгээ оруулаад нэвтэрнэ.
              </li>
            </ul>
            <p>
              Хэрэглэгч shoppy.mn - д бүртгүүлэх үед цахим шуудангийн хаяг болон хэрэглэгчийн 
              үүсгэсэн нууц үг системд хадгалагдана. Хэрэглэгчийн оруулсан нууц үгийг систем 
              шифрлэн кодчилж хадгалах тул хэрэглэгчээс өөр хүн нууц үгийг мэдэх боломжгүй юм.
              </p>
          </Typography>
        </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
          <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
            <Typography>Нууц үгээ мартсан бол яах вэ?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              “Нууц үг сэргээх” товч дээр дарж бүртгэлтэй и-мэйл хаягаар ирсэн баталгаажуулах 
              кодыг оруулна. Шинээр нууц үг оруулаад нэвтэрнэ.
              <ul>
                <li>
                  Фэйсбүүк хаягаар шууд нэвтэрнэ эсвэл ашигладаг и-мэйл хаягаа оруулна.
                </li>
                <li>
                  Бүртгүүлэх/Нэвтрэх нууц үгээ оруулаад нэвтэрнэ.
                </li>
              </ul>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
          <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
            <Typography>Захиалгаа цуцлах боломжтой юу?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              shoppy.mn-д бүртгүүлэхийн тулд хэрэглэгчийн профайл хэсэг дэх “нэвтрэх” товч дээр дарна.
              <ul>
                <li>
                  Фэйсбүүк хаягаар шууд нэвтэрнэ эсвэл ашигладаг и-мэйл хаягаа оруулна.
                </li>
                <li>
                  Бүртгүүлэх/Нэвтрэх нууц үгээ оруулаад нэвтэрнэ.
                </li>
              </ul>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
          <Typography>Захиалгын төлбөрөө хэрхэн төлөх вэ?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            shoppy.mn-д бүртгүүлэхийн тулд хэрэглэгчийн профайл хэсэг дэх “нэвтрэх” товч дээр дарна.
          </Typography>
        </AccordionDetails>
        </Accordion>
      </div>
      </div>
      <Time/>
    </div>
  )
}

export default FAC
