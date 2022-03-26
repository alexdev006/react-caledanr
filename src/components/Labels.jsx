import React, { useContext } from 'react'
import GlobalContext from '../context/GlobalContext';

import './Labels.css'


const Labels = () => {

    const { labels, updateLabel } = useContext(GlobalContext);
    return (
        <React.Fragment>
            <p className="lbl-title">Labels</p>
            {labels.map(({ label: lbl, checked }, idx) => (
                <label key={idx} className='lbl-checkbox'>
                    <input
                        type="checkbox"
                        checked={checked}
                        className="input-checkbox"
                        onChange={() => updateLabel({ label: lbl, checked: !checked })}
                    />
                    <span style={{ 'backgroundColor': lbl, 'content': '', 'height': '100%', 'minHeight': '100%', 'borderRadius': '9999px' }} > </span>
                    <span className="lbl-name">{lbl}</span>
                </label>
            ))}

        </React.Fragment>
    )
}

export default Labels