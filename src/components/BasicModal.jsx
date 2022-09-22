import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 230,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const boxStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  border: "1px solid black",
  margin: "10px",
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen} sx = { boxStyle }>알러지 정보</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-description" sx={{ ...style }}>
            1. 난류(계란) <br></br>2. 우유 <br></br>3. 메밀 <br></br>4. 땅콩 <br></br> 5. 대두(콩) <br></br> 6. 밀 <br></br> 7. 고등어 <br></br> 8.
            게 <br></br> 9. 새우 <br></br> 10. 돼지고기 <br></br> 11. 복숭아 <br></br> 12. 토마토 <br></br> 13. 아황산류 <br></br> 14. 호두
            <br></br> 15. 닭고기 <br></br> 16. 쇠고기 <br></br> 17. 오징어 <br></br> 18. 조개류(굴,전복,홍합 포함)
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
