import "../Style/Main.css";
import "../Style/General.css";
import PopoverComp from  '../Components/Popover'
import React from "react";

function Main() {
  const [showpop , setPop] = React.useState(false)

  function TogglePopover() {
    setPop(preval => !preval)
  }
  return (
    <section className="Article-section">
      <div className="Article-Wrapper">
      <div className="Article-img-container">
        <img src="drawers.jpg" alt="" />
      </div>
      <div className="Article-content-container">
        <h2>
          Shift the overall look and feel by adding these wonderful touches to
          furniture in your home
        </h2>
        <p>
          Ever been in a room and felt like something was missing? Perhaps it
          felt slightly bare and uninviting. I’ve got some simple tips to help
          you make any room feel complete.
        </p>
        <div className="Article-Usr-content">
        <div className="Usr-img">
          <img src="avatar-michelle.jpg" alt="" />
        </div>
        <div className="Usr-name">
          <h6>Michelle Appleton</h6>
          <small>28 Jun 2020</small>
        </div>
         {showpop && <PopoverComp/> }
          <div className="Usr-btn">
          <div className={showpop && 'anim-btn'}>
            <button className={showpop && 'whites'} onClick={TogglePopover}>
            <i className="fa-solid fa-share"></i>
            </button>
            </div>
          </div>

        </div>
        </div>
      </div>
    </section>
  );
}

export default Main;
