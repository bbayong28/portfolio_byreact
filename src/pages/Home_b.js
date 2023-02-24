import React from 'react'

const Home = () => {
  return (
    <div className='Home'>
      <div className="container">
        <div className="cont">
          <div className="home_img">
            <img src={process.env.PUBLIC_URL + "/img/home_me.png"} alt="" />
          </div>
          <div className='intro'>
            <span>Web Developer</span>
            <h2>Shin Hwayeong</h2>
            <p>
              신입 프론트엔드 개발자 신화영 입니다.신입 프론트엔드 개발자 신화영 입니다.신입 프론트엔드 개발자 신화영 입니다.신입 프론트엔드 개발자 신화영 입니다.신입 프론트엔드 개발자 신화영 입니다.신입 프론트엔드 개발자 신화영 입니다.신입 프론트엔드 개발자 신화영 입니다.신입 프론트엔드 개발자 신화영 입니다.신입 프론트엔드 개발자 신화영 입니다.신입 프론트엔드 개발자 신화영 입니다.
            </p>
            <div className='more'>
              <a>
                더 알아보기<i className='xi-long-arrow-down'></i>
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Home