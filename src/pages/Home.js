import React from 'react'

const Home = () => {
  return (
    <div className='Home'>
      <div className="container flex">
          <div className="left">
            <img src={process.env.PUBLIC_URL + "/img/home_me.png"} alt="" />
          </div>
          <div className='right'>
            <span>Web Developer</span>
            <h2>SHIN HWAYEONG</h2>
          <p>
            안녕하세요.<br/>
            신입 프론트엔드 개발자 신화영 입니다.<br/>
            꼼꼼하고 뭐든 열심히는게 제 장점입니다.<br/> 공부가 취미인 신입개발자 입니다.
            </p>
            <div className='more'>
              <a>
                프로젝트 보러가기<i className='xi-long-arrow-down'></i>
              </a>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Home