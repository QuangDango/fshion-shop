import React, { useEffect, useState } from 'react'

import DEALOFWEEK from "../../assets/images/deal_ofthe_week.png";

function Advertisement(props) {

    const [date, setDate] = useState({
        days: 0,
        hours: 0,
        min: 0,
        sec: 0,
    });

    let interval;

    useEffect(() => {
        interval = setInterval(() => {
            const date = calculateCountdown(props.date);
            date ? setDate(date) : stop();
        }, 1000);

        return () => {
            stop();
        }
    }, []);

    const countDown = date;

    function calculateCountdown(endDate) {
        let diff = (Date.parse(new Date(endDate)) - Date.parse(new Date())) / 1000;
    
        // clear countdown when date is reached
        if (diff <= 0) return false;
    
        const timeLeft = {
          years: 0,
          days: 0,
          hours: 0,
          min: 0,
          sec: 0,
          millisec: 0
        };
    
        // calculate time difference between now and expected date
        if (diff >= 365.25 * 86400) {
          // 365.25 * 24 * 60 * 60
          timeLeft.years = Math.floor(diff / (365.25 * 86400));
          diff -= timeLeft.years * 365.25 * 86400;
        }
        if (diff >= 86400) {
          // 24 * 60 * 60
          timeLeft.days = Math.floor(diff / 86400);
          diff -= timeLeft.days * 86400;
        }
        if (diff >= 3600) {
          // 60 * 60
          timeLeft.hours = Math.floor(diff / 3600);
          diff -= timeLeft.hours * 3600;
        }
        if (diff >= 60) {
          timeLeft.min = Math.floor(diff / 60);
          diff -= timeLeft.min * 60;
        }
        timeLeft.sec = diff;
    
        return timeLeft;
      }
    
      function stop() {
        clearInterval(interval);
      }
    
      function addLeadingZeros(value) {
        value = String(value);
        while (value.length < 2) {
          value = "0" + value;
        }
        return value;
      }

      const handleClickOnShop = (e) => {
        e.preventDefault();
        window.scrollTo({ top: 900, behavior: 'smooth' });
    }

    return (
        <>
            <div className="deal_ofthe_week" data-aos="fade-up">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="deal_ofthe_week_img">
                                <img src={DEALOFWEEK} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6 text-right deal_ofthe_week_col">
                            <div className="deal_ofthe_week_content d-flex flex-column align-items-center float-right">
                                <div className="section_title">
                                    <h2>Deal Of The Week</h2>
                                </div>
                                <ul className="timer">
                                    <li className="d-inline-flex flex-column justify-content-center align-items-center">
                                        <div id="day" className="timer_num">
                                            {addLeadingZeros(countDown.days)}{" "}
                                        </div>
                                        <div className="timer_unit">
                                            {countDown.days === 1 ? "Day" : "Days"}
                                        </div>
                                    </li>
                                    <li className="d-inline-flex flex-column justify-content-center align-items-center">
                                        <div id="hour" className="timer_num">
                                            {addLeadingZeros(countDown.hours)}
                                        </div>
                                        <div className="timer_unit">Hours</div>
                                    </li>
                                    <li className="d-inline-flex flex-column justify-content-center align-items-center">
                                        <div id="minute" className="timer_num">
                                            {addLeadingZeros(countDown.min)}
                                        </div>
                                        <div className="timer_unit">Mins</div>
                                    </li>
                                    <li className="d-inline-flex flex-column justify-content-center align-items-center">
                                        <div id="second" className="timer_num">
                                            {addLeadingZeros(countDown.sec)}
                                        </div>
                                        <div className="timer_unit">Sec</div>
                                    </li>
                                </ul>
                                <div className="red_button deal_ofthe_week_button">
                                    <a onClick={handleClickOnShop} href="">shop now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

Advertisement.defaultProps = {
    date: new Date(new Date().getTime() + 5 * 24 * 60 * 60 * 1000).toString()
};

export default Advertisement