import React, {useState} from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Time from './../tools/Time';
import "../../App.css";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function FAC() {

  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);

  const handleOpen1 = () => setOpen1(true);
  const handleClose1 = () => setOpen1(false);
  const handleOpen2 = () => setOpen2(true);
  const handleClose2 = () => setOpen2(false);
  const handleOpen3 = () => setOpen3(true);
  const handleClose3 = () => setOpen3(false);
  const handleOpen4 = () => setOpen4(true);
  const handleClose4 = () => setOpen4(false);


  return (
    <div className='flex_box'>
      <div className='flex_title'>
        <h1>Түгээмэл асуулт & хариулт</h1>
      </div>
      <div className='FAQ_btn'>
        <Button variant="contained" onClick={handleOpen1}>1. Бүртгүүлэх/Нэвтрэх заавар</Button>
        <Modal
          open={open1}
          onClose={handleClose1}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" component="h2">
              shoppy.mn-д бүртгүүлэхийн тулд хэрэглэгчийн профайл хэсэг дэх “нэвтрэх” товч дээр дарна.
            </Typography>
            <ul>
              <li>
                Фэйсбүүк хаягаар шууд нэвтэрнэ эсвэл ашигладаг и-мэйл хаягаа оруулна.
              </li>
              <li>
                Бүртгүүлэх/Нэвтрэх нууц үгээ оруулаад нэвтэрнэ.
              </li>
            </ul>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Хэрэглэгч shoppy.mn - д бүртгүүлэх үед цахим шуудангийн хаяг болон хэрэглэгчийн 
              үүсгэсэн нууц үг системд хадгалагдана. Хэрэглэгчийн оруулсан нууц үгийг систем 
              шифрлэн кодчилж хадгалах тул хэрэглэгчээс өөр хүн нууц үгийг мэдэх боломжгүй юм.
            </Typography>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Нууц үгээ мартсан бол яах вэ?
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            “Нууц үг сэргээх” товч дээр дарж бүртгэлтэй и-мэйл хаягаар ирсэн баталгаажуулах 
            кодыг оруулна. Шинээр нууц үг оруулаад нэвтэрнэ.
            </Typography>
          </Box>
        </Modal>
        <Button variant="contained" onClick={handleOpen2}>2. Захиалга яаж баталгаажих вэ?</Button>
        <Modal
          open={open2}
          onClose={handleClose2}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <ul>
              <li>
                Фэйсбүүк хаягаар шууд нэвтэрнэ эсвэл ашигладаг и-мэйл хаягаа оруулна.
              </li>
              <li>
                Бүртгүүлэх/Нэвтрэх нууц үгээ оруулаад нэвтэрнэ.
              </li>
            </ul>
          </Box>
        </Modal>
        <Button variant="contained" onClick={handleOpen3}>3. Захиалгаа цуцлах боломжтой юу?</Button>
        <Modal
          open={open3}
          onClose={handleClose3}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" component="h2">
              shoppy.mn-д бүртгүүлэхийн тулд хэрэглэгчийн профайл хэсэг дэх “нэвтрэх” товч дээр дарна.
            </Typography>
            <ul>
              <li>
                Фэйсбүүк хаягаар шууд нэвтэрнэ эсвэл ашигладаг и-мэйл хаягаа оруулна.
              </li>
              <li>
                Бүртгүүлэх/Нэвтрэх нууц үгээ оруулаад нэвтэрнэ.
              </li>
            </ul>
          </Box>
        </Modal>
        <Button variant="contained" onClick={handleOpen4}>4. Захиалгын төлбөрөө хэрхэн төлөх вэ?</Button>
        <Modal
          open={open4}
          onClose={handleClose4}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" component="h2">
              shoppy.mn-д бүртгүүлэхийн тулд хэрэглэгчийн профайл хэсэг дэх “нэвтрэх” товч дээр дарна.
            </Typography>
            
          </Box>
        </Modal>
      </div>
      <Time/>
    </div>
  )
}

export default FAC
