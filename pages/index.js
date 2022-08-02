import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import React, { useState, useEffect, useRef } from "react";

import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Zoom from '@mui/material/Zoom';

const style_modal = {
  position: 'absolute',
  top: '20%',
  left: '25%',
  right: '25%',
  // transform: 'translate(-50%, -50%)',
  // width: 400,
  bgcolor: 'background.paper',
  
  background: 'rgba(0, 0, 0, 0.5)',
  boxShadow: '24',
  'border-radius': '10px',
  p: 4,
};

let counter = 4
let sum = 0

export default function Home() {

  let [count, setCount] = useState(0)
  let [bonus, setBonus] = useState(0)
  const id = "s123"
  count = counter
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  function click_getbonus() {

    if (counter > 0) {
      const ss = document.getElementById(id)
      if (ss) {
        ss.remove()
      }
      handleClickOpen()

      setTimeout(() => {
        createCard(id)
      }, 100);

      counter--
      setCount(counter)
    }
    else {
      // alert("not enough credit")
      alert("สิทธิในการลุ้นโบนัสหมดแล้ว")
    }

  }

  function createCard(id) {
    
    const card_s = createElement('div')
    const card_inner = createElement('div')
    const card_back = createElement('div')
    const card_front = createElement('div')
    const img_back = createElement('img')
    const img_front = createElement('img')

    addClassToElement(card_inner, styles.card_inner)

    addIdToElement(card_inner, id)

    addClassToElement(card_back, styles.card_back)
    addClassToElement(img_back, styles.img_show)
    

    //random
    let index = random_cal()

    const val = [20, 50, 100, 300, 500, 1000, 2000, 5000]

    //นำค่าเงินไปแสดง
    sum = val[index]

    //เลือกการ์ดตรงกับค่าเงิน
    let c_show = card_show(val[index])    

    addSrcToImageElem(img_back, c_show)

    addClassToElement(card_front, styles.card_front)
    addClassToElement(img_front, styles.img_show)
    addSrcToImageElem(img_front, "/images/card sure-01.png")

    addChildElement(card_front, img_front)    
    addChildElement(card_back, img_back)

    addChildElement(card_inner, card_front)
    addChildElement(card_inner, card_back)

    addClassToElement(card_s, styles.card_s)
    addChildElement(card_s, card_inner)
    
    addCard_call_first_div(card_s, styles.card)

    setTimeout(() => {
      flip_it(id)
      setTimeout(() => {
        setBonus(sum)
      }, 600);
    }, 1200);

  }

  function createCard2(id) {

    const card_inners = createElement('div')
    const card_back2 = createElement('div')
    const img = createElement('img')

    addClassToElement(card_inners, styles.card_inners)

    addIdToElement(card_inners, id)

    addClassToElement(img, styles.card_back2)
    addClassToElement(img, styles.img_show)

    //random
    let index = random_cal()

    const val = [20, 50, 100, 300, 500, 1000, 2000, 5000]

    //นำค่าเงินไปแสดง
    sum = val[index]

    //เลือกการ์ดตรงกับค่าเงิน
    let c_show = card_show(val[index])    

    addSrcToImageElem(img, c_show)

    addChildElement(card_inners, img)
    addCard_call_first_div(card_inners, styles.card)

    setTimeout(() => {
      flip_it(id)
      setTimeout(() => {
        setBonus(sum)
      }, 600);
    }, 1200);

  }


  function flip_it(id) {

    const ss = document.getElementById(id)
    try{
      ss.classList.add(styles.flip_it)
    }catch (err) {
      // alert(err.message);
    }
    

  }


  return (

    <>

      <div className={styles.container}>
      <div className={styles.header_img_container}>
            <img src={"/images/betflix-sure-logo.webp"} alt="" className={styles.header_img} />
          </div>
        <div className={styles.header_round_info_container}>
        {/* <div className={styles.header_score_container}>
           
          </div> */}

          <div className={styles.header_score_container}>
          <h2 className={styles.score}>โบนัส:&nbsp;<span className={styles.badge}>{bonus}</span></h2>
          </div>

        <div className={styles.header_round_container}>
            {/* <img src={"/images/AceSpades.png"} alt="" className={styles.header_img} /> */}
            <h2 className={styles.round}>สิทธิ:&nbsp;<span className={styles.badge}>{count}</span></h2>

          </div>
         
          
          
        </div>
        <div className={styles.header_status_info_container}>
          <p className={styles.current_status}>
            Click 'Card' button to Bonus
          </p>
        </div>
        <div className={styles.header_button_container}>
          <div className={styles.game_play_button_container}>


            {/* <div className={styles.main}></div> */}
            <div className={styles.card_container}>


              <div className={styles.card_pos_a}>
                <img src={"/images/card sure-01.png"} onClick={click_getbonus} alt="" className={styles.button_img} />
              </div>
              <div className={styles.card_pos_b}>
                <img src={"/images/card sure-01.png"} onClick={click_getbonus} alt="" className={styles.button_img} />
              </div>
              <div className={styles.card_pos_c}>
                <img src={"/images/card sure-01.png"} onClick={click_getbonus} alt="" className={styles.button_img} />
              </div>
              <div className={styles.card_pos_d}>
                <img src={"/images/card sure-01.png"} onClick={click_getbonus} alt="" className={styles.button_img} />
              </div>
              <div className={styles.card_pos_e}>
                <img src={"/images/card sure-01.png"} onClick={click_getbonus} alt="" className={styles.button_img} />
              </div>
              <div className={styles.card_pos_f}>
                <img src={"/images/card sure-01.png"} onClick={click_getbonus} alt="" className={styles.button_img} />
              </div>
              <div className={styles.card_pos_g}>
                <img src={"/images/card sure-01.png"} onClick={click_getbonus} alt="" className={styles.button_img} />
              </div>
              <div className={styles.card_pos_h}>
                <img src={"/images/card sure-01.png"} onClick={click_getbonus} alt="" className={styles.button_img} />
              </div>

            </div>
          </div>

          {/* <div className={styles.card} >
              <div className={[styles.card_inner , styles.flip_it]}>
                <div className={styles.card_front}>
                <img src={"/images/card sure-02.png"} alt="" className={styles.card_img}/>

                </div>
                <div className={styles.card_back}>
                <img src={"/images/card sure-01.png"} alt="" className={styles.card_img}/>

                </div>
              </div>
            </div> */}


        </div>

        <div>

          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 2500,
            }}
            style={{ alignItems: 'center', justifyContent: 'center' }}
          >
            <Zoom in={open}>
              <Box sx={style_modal} className={[styles.div1, styles.card]}>

              </Box>
            </Zoom>
          </Modal>

        </div>

      </div>
    </>
  );
}

function createElement(elemType) {
  return document.createElement(elemType)

}
function addClassToElement(elem, className) {
  elem.classList.add(className)
}
function addIdToElement(elem, id) {
  elem.id = id
}
function addSrcToImageElem(imgElem, src) {
  imgElem.src = src
}
function addChildElement(parentElem, childElem) {
  parentElem.appendChild(childElem)
}

function addCard_call_first_div(card, classes) {

  const cardPosElem = document.querySelector('.' + classes)

  addChildElement(cardPosElem, card)

}


function card_show(val) {

  if (val == 20) {
    return "/images/card sure-02.png"
  }
  else if (val == 50) {
    return "/images/card sure-03.png"
  }
  else if (val == 100) {
    return "/images/card sure-04.png"
  }
  else if (val == 300) {
    return "/images/card sure-05.png"
  }
  else if (val == 500) {
    return "/images/card sure-06.png"
  }
  else if (val == 1000) {
    return "/images/card sure-07.png"
  }
  else if (val == 2000) {
    return "/images/card sure-08.png"
  }
  else if (val == 5000) {
    return "/images/card sure-09.png"
  }

}

function random_cal() {
  let ran1 = Math.random();
  let index = Math.floor(ran1 * 8)

  return index;
}