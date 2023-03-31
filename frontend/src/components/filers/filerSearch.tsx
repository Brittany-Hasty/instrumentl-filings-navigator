import React, { useState } from 'react'
import FilersIndex from './filersIndex'

export default function FilerSearch() {
  const [ein, setEin] = useState("")
  const [name, setName] = useState("")
  const [city, setCity] = useState("")
  const [state, setState] = useState("")
  const [lessFilingsThan, setLessFilingsThan] = useState(0)
  const [checkLessFilings, setCheckLessFilings] = useState(false)
  const [moreFilingsThan, setMoreFilingsThan] = useState(0)
  const [checkMoreFilings, setCheckMoreFilings] = useState(false)
  const [lessAwardsThan, setLessAwardsThan] = useState(0)
  const [checkLessAwards, setCheckLessAwards] = useState(false)
  const [moreAwardsThan, setMoreAwardsThan] = useState(0)
  const [checkMoreAwards, setCheckMoreAwards] = useState(false)
  const [awardedLessThan, setAwardedLessThan] = useState(0)
  const [checkAwardedLess, setCheckAwardedLess] = useState(false)
  const [awardedMoreThan, setAwardedMoreThan] = useState(0)
  const [checkAwardedMore, setCheckAwardedMore] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const stateToParams = () => {
    const paramsList = []
    if (ein !== "") { paramsList.push(`ein=${ein}`) }
    if (name !== "") { paramsList.push(`name=${name}`) }
    if (city !== "") { paramsList.push(`city=${city}`) }
    if (state !== "") { paramsList.push(`state=${state}`) }
    if (checkMoreFilings) { paramsList.push(`more_filings_than=${moreFilingsThan}`)}
    if (checkLessFilings) { paramsList.push(`less_filings_than=${lessFilingsThan}`) }
    if (checkMoreAwards) { paramsList.push(`more_awards_than=${moreAwardsThan}`) }
    if (checkLessAwards) { paramsList.push(`less_awards_than=${lessAwardsThan}`) }
    if (checkAwardedMore) { paramsList.push(`awarded_more_than=${awardedMoreThan}`) }
    if (checkAwardedLess) { paramsList.push(`awarded_less_than=${awardedLessThan}`) }
    return paramsList.join('&')
  }

  const displayResults = () => {
    return (
      <div className="m-4">
        <hr />
        <h3 className="text-center">Query Results:</h3>
        <hr />
        <FilersIndex params={stateToParams()} />
      </div>
    )
  }

  const handleAmountInput = (amount: string, handleNumberType: string) => {
    let moneyAmount = parseInt(amount)
    if (moneyAmount < 0) {
      moneyAmount = 0
    }

    if (handleNumberType === 'lessFilingsThan') {
      setLessFilingsThan(moneyAmount)
    } else if (handleNumberType === 'moreFilingsThan') {
      setMoreFilingsThan(moneyAmount)
    } else if (handleNumberType === 'lessAwardsThan') {
      setLessAwardsThan(moneyAmount)
    } else if (handleNumberType === 'moreAwardsThan') {
      setMoreAwardsThan(moneyAmount)
    } else if (handleNumberType === 'awardedLessThan') {
      setAwardedLessThan(moneyAmount)
    } else {
      setAwardedMoreThan(moneyAmount)
    }
  }

  return (
    <>
      <div className='m-4'>
        <h3 className="text-center">Find Filings By:</h3>
        <hr />
        <div className='row'>
          <div className='mb-3 col'>
            <label htmlFor="ein" className='form-label'>EIN:</label>
            <input type="text" name="ein" id="ein" value={ein}
              onChange={(e) => setEin(e.target.value)} className='form-control' disabled={submitted} />
          </div>
          <div className='mb-3 col'>
            <label htmlFor="name" className='form-label'>Name:</label>
            <input type="text" name="name" id="name" value={name}
              onChange={(e) => setName(e.target.value)} className='form-control' disabled={submitted} />
          </div>
        </div>
        <div className='row'>
          <div className='mb-3 col'>
            <label htmlFor="city" className='form-label'>City:</label>
            <input type="text" name="city" id="city" value={city}
              onChange={(e) => setCity(e.target.value)} className='form-control' disabled={submitted} />
          </div>
          <div className='mb-3 col'>
            <label htmlFor="state" className='form-label'>State:</label>
            <input type="text" name="state" id="state" value={state}
              onChange={(e) => setState(e.target.value)} className='form-control' disabled={submitted} />
          </div>
        </div>
        <div className='row'>
          <div className='mb-3 col'>
            <label htmlFor="lessFilingsThan" className="form-label">Total Filings Less Than:</label>
            <div className="input-group">
              <input type="number" className="form-control" id="lessFilingsThan" name="lessFilingsThan" min="0" step="1" value={lessFilingsThan} onChange={(e) => handleAmountInput(e.target.value, 'lessFilingsThan')} disabled={submitted} />
            </div>
            <div className="form-check form-switch mt-3">
              <label className="form-check-label" htmlFor="checkLessFilings">Enable</label>
              <input className="form-check-input" type="checkbox" id="checkLessFilings" name="checkLessFilings" value={checkLessFilings ? "0" : "1"} onClick={() => setCheckLessFilings(!checkLessFilings)} disabled={submitted} />
            </div>
          </div>
          <div className='mb-3 col'>
            <label htmlFor="moreFilingsThan" className="form-label">Total Filings Greater Than:</label>
            <div className="input-group">
              <input type="number" className="form-control" id="moreFilingsThan" name="moreFilingsThan" min="0" step="1" value={moreFilingsThan} onChange={(e) => handleAmountInput(e.target.value, 'moreFilingsThan')} disabled={submitted} />
            </div>
            <div className="form-check form-switch mt-3">
              <label className="form-check-label" htmlFor="checkMoreFilings">Enable</label>
              <input className="form-check-input" type="checkbox" id="checkMoreFilings" name="checkMoreFilings" value={checkMoreFilings ? "0" : "1"} onClick={() => setCheckMoreFilings(!checkMoreFilings)} disabled={submitted} />
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='mb-3 col'>
            <label htmlFor="lessAwardsThan" className="form-label">Total Awards Less Than:</label>
            <div className="input-group">
              <input type="number" className="form-control" id="lessAwardsThan" name="lessAwardsThan" min="0" step="1" value={lessAwardsThan} onChange={(e) => handleAmountInput(e.target.value, 'lessAwardsThan')} disabled={submitted} />
            </div>
            <div className="form-check form-switch mt-3">
              <label className="form-check-label" htmlFor="checkLessAwards">Enable</label>
              <input className="form-check-input" type="checkbox" id="checkLessAwards" name="checkLessAwards" value={checkLessAwards ? "0" : "1"} onClick={() => setCheckLessAwards(!checkLessAwards)} disabled={submitted} />
            </div>
          </div>
          <div className='mb-3 col'>
            <label htmlFor="moreAwardsThan" className="form-label">Total Awards Greater Than:</label>
            <div className="input-group">
              <input type="number" className="form-control" id="moreAwardsThan" name="moreAwardsThan" min="0" step="1" value={moreAwardsThan} onChange={(e) => handleAmountInput(e.target.value, 'moreAwardsThan')} disabled={submitted} />
            </div>
            <div className="form-check form-switch mt-3">
              <label className="form-check-label" htmlFor="checkMoreAwards">Enable</label>
              <input className="form-check-input" type="checkbox" id="checkMoreAwards" name="checkMoreAwards" value={checkMoreAwards ? "0" : "1"} onClick={() => setCheckMoreAwards(!checkMoreAwards)} disabled={submitted} />
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='mb-3 col'>
            <label htmlFor="awardedLessThan" className="form-label">Sum Of All Awards Less Than:</label>
            <div className="input-group">
              <span className="input-group-text">$</span>
              <input type="number" className="form-control" id="awardedLessThan" name="awardedLessThan" min="0" step="1" value={awardedLessThan} onChange={(e) => handleAmountInput(e.target.value, 'awardedLessThan')} disabled={submitted} />
            </div>
            <div className="form-check form-switch mt-3">
              <label className="form-check-label" htmlFor="checkAwardedLess">Enable</label>
              <input className="form-check-input" type="checkbox" id="checkAwardedLess" name="checkAwardedLess" value={checkAwardedLess ? "0" : "1"} onClick={() => setCheckAwardedLess(!checkAwardedLess)} disabled={submitted} />
            </div>
          </div>
          <div className='mb-3 col'>
            <label htmlFor="awardedMoreThan" className="form-label">Sum Of All Awards Greater Than:</label>
            <div className="input-group">
              <span className="input-group-text">$</span>
              <input type="number" className="form-control" id="awardedMoreThan" name="awardedMoreThan" min="0" step="1" value={awardedMoreThan} onChange={(e) => handleAmountInput(e.target.value, 'awardedMoreThan')} disabled={submitted} />
            </div>
            <div className="form-check form-switch mt-3">
              <label className="form-check-label" htmlFor="checkAwardedMore">Enable</label>
              <input className="form-check-input" type="checkbox" id="checkAwardedMore" name="checkAwardedMore" value={checkAwardedMore ? "0" : "1"} onClick={() => setCheckAwardedMore(!checkAwardedMore)} disabled={submitted} />
            </div>
          </div>
        </div>
        <div>
          <button className={`btn btn-outline-light btn-lg ${submitted ? "disabled" : ""}`} onClick={() => setSubmitted(true)}>
            Submit
          </button>
          {submitted && <button className='ms-2 btn btn-outline-light btn-lg' onClick={() => setSubmitted(false)}>Edit Search</button>}
        </div>
      </div>
      {submitted && displayResults()}
    </>
  )
}