import React from 'react';

function Testing() {
  return (
    <div 
      aria-labelledby="swal2-title" 
      aria-describedby="swal2-content" 
      className="swal2-popup swal2-modal _reminder__popup_16jko_641 swal2-noanimation" 
      tabIndex="-1" 
      role="dialog" 
      aria-live="assertive" 
      aria-modal="true" 
      style={{ display: 'flex' }}
    >
      <div className="swal2-header">
        <ul className="swal2-progress-steps" style={{ display: 'none' }}></ul>
        <div className="swal2-icon swal2-error" style={{ display: 'none' }}></div>
        <div className="swal2-icon swal2-question" style={{ display: 'none' }}></div>
        <div className="swal2-icon swal2-warning" style={{ display: 'none' }}></div>
        <div className="swal2-icon swal2-info" style={{ display: 'none' }}></div>
        <div className="swal2-icon swal2-success" style={{ display: 'none' }}></div>
        <img className="swal2-image" style={{ display: 'none' }} alt="" />
        <h2 className="swal2-title _popup__title_16jko_658" id="swal2-title" style={{ display: 'flex' }}>
          Reminder Set
        </h2>
        <button type="button" className="swal2-close" aria-label="Close this dialog" style={{ display: 'none' }}>
          ×
        </button>
      </div>
      <div className="swal2-content _popup__content_16jko_665">
        <div id="swal2-content" className="swal2-html-container" style={{ display: 'block' }}>
          We will send a reminder to your email 1 hour before the contest.
        </div>
        <input className="swal2-input" style={{ display: 'none' }} />
        <input type="file" className="swal2-file" style={{ display: 'none' }} />
        <div className="swal2-range" style={{ display: 'none' }}>
          <input type="range" />
          <output></output>
        </div>
        <select className="swal2-select" style={{ display: 'none' }}></select>
        <div className="swal2-radio" style={{ display: 'none' }}></div>
        <label htmlFor="swal2-checkbox" className="swal2-checkbox" style={{ display: 'none' }}>
          <input type="checkbox" />
          <span className="swal2-label"></span>
        </label>
        <textarea className="swal2-textarea" style={{ display: 'none' }}></textarea>
        <div className="swal2-validation-message" id="swal2-validation-message"></div>
      </div>
      <div className="swal2-actions">
        <button type="button" className="swal2-confirm _confirm__btn_16jko_645 swal2-styled" aria-label="" style={{ display: 'inline-block', borderLeftColor: 'rgb(44, 132, 219)', borderRightColor: 'rgb(44, 132, 219)' }}>
          OK
        </button>
        <button type="button" className="swal2-cancel swal2-styled" aria-label="" style={{ display: 'none' }}>
          Cancel
        </button>
      </div>
      <div className="swal2-footer" style={{ display: 'none' }}></div>
      <div className="swal2-timer-progress-bar-container">
        <div className="swal2-timer-progress-bar" style={{ display: 'none' }}></div>
      </div>
    </div>
  );
}

export default Testing;
