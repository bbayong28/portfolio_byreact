import React from 'react'

const Home = () => {
  return (
    <div className='Home' id='1'>
      <div className="container flex">
          <div className="left">
            <img src={process.env.PUBLIC_URL + "/img/home_me.png"} alt="" />
          </div>
          <div className='right'>
            <span>Web Developer</span>
            <h2>SHIN HWAYEONG</h2>
          <p>
            안녕하세요.<br />
            프론트엔트 개발자로 성장하고 있는 신화영 입니다.<br/>
            꾸준한 배움과 노력으로 항상 발전하는 개발자가 되고싶습니다.<br />
            
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