import React from "react";
import "./Interested.scss";
import Zoom from "react-reveal/Zoom";

const Interested = () => {
  const formBtn = (e) => {
    e.preventDefault();
    //  console.log(e)
    if (e.target[0].value.length > 0) {
      let botMessege = `
 Salom, Yangi Xabar!😊%0A
 Raqam ☎: ${e.target[0].value}%0A 
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

      
    } else {
      return -1;
    }
  };
  return (
    <div className="interested" id="contact">
      <Zoom left cascade>
        <div className="interested__container">
          <div className="left">
            <h1>Sizni qiziqtirdimi?</h1>
            <p>Raqamingizni qoldiring, biz sizga yana qo'ng'iroq qilamiz</p>
          </div>
            <form onSubmit={formBtn}>
          <div className="right">
            <p>+998</p>
              <input type="text" placeholder="| Raqamingizni yozing" />
              <button>Yuborish</button>
          </div>
            </form>
        </div>
      </Zoom>
    </div>
  );
};

export default Interested;
