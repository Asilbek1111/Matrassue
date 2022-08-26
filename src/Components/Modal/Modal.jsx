import * as React from "react";
import { useRef } from "react";
import Box from "@mui/material/Box";
// import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { MyContext } from "../../Context/Context";
import "./Modal.scss";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  backgroundColor: "#f6fbff",
};

export default function BasicModal() {
  //   const [open, setOpen] = React.useState(false);
  //   const handleOpen = () => setOpen(true);
  //   const handleClose = () => setOpen(false);

  const { open, setOpen, handleOpen, handleClose } =
    React.useContext(MyContext);
  const useinpmy = useRef();

  const [quantity, setQuantity] = React.useState(0);
  
  function increase() {
    setQuantity((prev) => prev + 1);
  }

  function decrease() {
    if (quantity >= 1) {
      setQuantity((prev) => prev - 1);
    }
  }

  //   console.log(useinpmy.current.val)
  const formBtn = (e) => {
    e.preventDefault();
    //  console.log(e)
    if (e.target[0].value.length > 0 && e.target[1].value.length > 0) {
      let botMessege = `
 Salom, Yangi Xabar!😊%0A
 Ismi 👤: ${e.target[0].value}%0A
 Raqam ☎: ${e.target[1].value}%0A 
 Mahsulot 💰: ${e.target[2].value} + ni sotib olishmoqchi %0A
 Miqdori : ${useinpmy.current.value}
                           
            `;
      //  console.log(botMessege)

      let url = `https://api.telegram.org/bot5690733237:AAEuOiI0p6xBNtfzmcRvcnfN0VDZTvPsCiI/sendMessage?chat_id=1328407566&text=${botMessege}`;
      //   console.log(url)
      async function fetchAsync(url) {
        let response = await fetch(url);
        //   console.log(response,"1-si")
        let data = await response.json();
        // console.log(data,"2-si")
        return data;
      }
      fetchAsync(url);

      e.target[0].value = "";

      e.target[1].value = "";
      e.target[2].value = "";
      e.target[3].value = "";
    } else {
      return -1;
    }
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <h2 className="buyurtma">Buyurtma berish</h2>
          </Typography>
          <form onSubmit={formBtn}>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              <input
                type="text"
                className="commonM"
                placeholder="Ismingizni yozing"
              />
            </Typography>
            <Typography
              id="modal-modal-description"
              className="headnumd"
              sx={{ mt: 2 }}
            >
              <p className="headnum">+998</p>
              <input
                type="text"
                className="commonM"
                placeholder="Raqamingizni yozing"
              />
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              <p>Mahsulotlar toifasini tanlang</p>
              <select className="commonM sel">
                <option value="Model A">Model A</option>
                <option value="Model B">Model B</option>
                <option value="Model C">Model C</option>
                <option value="Model D">Model D</option>
              </select>
            </Typography>

            <Typography id="modal-modal-description hb" sx={{ mt: 2 }}>
              <p>Miqdorni tanlang</p>
              <div>
                <button className="commonB" onClick={decrease}>
                  -
                </button>
                <input
                  ref={useinpmy}
                  value={quantity}
                  className="commonA"
                  type="number"
                />
                <button className="commonB" onClick={increase}>
                  +
                </button>
              </div>
            </Typography>

            <button className="sbb" type="submit">
              Yuborish
            </button>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
