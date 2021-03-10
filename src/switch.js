import {useRef, useEffect, useState} from 'react';
import './switch.css'

function Switch({setDarkMode, checked, setChecked}) {

  // const [checked, setChecked] = useState(defaultChecked);
  const ref = useRef(null);

  function handleChange(e) {
    console.log(e.target.checked)
    console.log(ref.current.checked);
    setChecked(ref.current.checked)
    setDarkMode(ref.current.checked)
    if (ref.current.checked) {
      // document.body.classList.remove('is-light-mode')
      // document.body.classList.add('is-dark-mode')
    } else {
      // document.body.classList.remove('is-dark-mode')
      // document.body.classList.add('is-light-mode')
    }
  }

  return (
    <div className="dark-mode">
      <p className="dark-mode-title">Dark Mode</p>
      <input ref={ref} onChange={handleChange} type="checkbox" checked={checked} className="checkbox" id="checkbox" />
      <label className="switch" htmlFor="checkbox">

      </label>
    </div>
  )
}

export default Switch;