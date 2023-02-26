import project1 from '../img/project1.png'
import project2 from '../img/project2.png'
import project3 from '../img/project3.png'
import project4 from '../img/project4.png'
import project5 from '../img/project5.png'
import project6 from '../img/project6.png'
import project7 from '../img/project7.png'
import project8 from '../img/project8.png'
import project9 from '../img/project9.png'
import project10 from '../img/project10.png'

import { FaUser, FaCalendar, FaPhoneAlt,FaEnvelope } from "react-icons/fa";
import { SiGithub,SiNaver }from "react-icons/si";
const btns = [
  { id: 1, name: "All", value: "All" },
  { id: 2, name: "React", value: "React" },
  { id: 3, name: "HTML/CSS/JS", value: "HTML/CSS/JS" },
  { id: 4, name: "Training", value: "Training" },
];


const projects = [
  {
    id: 1,
    image: project1,
    value: "React",
  },
  {
    id: 2,
    image: project2,
    value: "HTML/CSS/JS",
  },
  {
    id: 3,
    image: project3,
    value: "HTML/CSS/JS",
  },
  {
    id: 4,
    image: project4,
    value: "Training",
  },
  {
    id: 5,
    image: project5,
    value: "React",
  },
  {
    id: 6,
    image: project6,
    value: "HTML/CSS/JS",
  },
  {
    id: 7,
    image: project7,
    value: "Training",
  },
  {
    id: 8,
    image: project8,
    value: "Training",
  },
  {
    id: 9,
    image: project9,
    value: "HTML/CSS/JS",
  },
  {
    id: 10,
    image: project10,
    value: "React",
  },
];

const contacts = [
  {
    id: 1,
    icon: <FaUser />,
    text: "신화영",
  },
  {
    id: 2,
    icon: <FaCalendar />,
    text: "1995.09.21",
  },
  {
    id: 3,
    icon: <FaPhoneAlt />,
    text: "+82 010-7356-5795",
  },
  {
    id: 4,
    icon: <FaEnvelope />,
    text: "ghkdud5795@naver.com",
  }
];

const archiving = [
  {
    id: 1,
    name:'GitHub',
    icon: <SiGithub />,
    add: "github.com/bbayong28",
    intro:"소스 코드 저장소 입니다.",
    des1:"국비지원 학원에서의 프로젝트 코드",
    des2:"혼자서 코딩 연습을 위해 만든 프로젝트 코드"
  },
  {
    id: 2,
    name: 'Blog',
    icon: <SiNaver />,
    add : 'blog.naver/ghkdud5795',
    intro:"공부 및 지식 공유 목적의 블로그 입니다.",
    des1:"공부하며 알게된 지식들 정리위한 기록",
    des2:"지식 공유를 통해 다른사람에게 도움이 되기 위해"
  }
];


export { btns, projects, contacts,archiving }