import React from 'react'
import '../styles/issues.css'

const Issues = () => {
  return (
    <div className="dashboard--content2">
      <div className="sub--header">
        <h2>Report issues</h2>
      </div>
      <div className='commu-board'>
        <div className="history--issue">
          <div className="sub--header">
            <h3>Issues history</h3>
          </div>
          <div className="history--tab">
            <div className="his--detail">
              Topic : XXXXXX
            </div>
            <div className="his--detail">
              Details : xxxxxxxxxxxxxxxxxxxx
            </div>
            <div className="his--detail">
              Dates : xx/xx/xx
            </div>
            <div className="his--detail">
              Status : Undone
            </div>
          </div>
          <div className="history--tab">
            <div className="his--detail">
              Topic : XXXXXX
            </div>
            <div className="his--detail">
              Details : xxxxxxxxxxxxxxxxxxxx
            </div>
            <div className="his--detail">
              Dates : xx/xx/xx
            </div>
            <div className="his--detail">
              Status : Done
            </div>
          </div>
        </div>
        <div className="new--issue">
          <div className="sub--header">
            <h3>New issues</h3>
          </div>
          <div className='form--issue'>
            <label>Topic : </label>
            <input className='form--size' name="postTitle" defaultValue="XXXXX" />
            <label>Details : </label>
            <textarea className='form--size'
              name="postContent"
              defaultValue="xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
              rows={6}
              cols={40}
            />
            <button className='form--but'>Submit</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Issues