import { FaUser, FaCalendar, FaPhoneAlt,FaEnvelope } from "react-icons/fa";
import { SiGithub, SiNaver } from "react-icons/si";


const HomeMenu = [
  {
    id: 1,
    icon: 'xi-home',
    title: 'Home'
  },
  {
    id: 2,
    icon: 'xi-package',
    title: 'Archiving'
  },
  {
    id: 3,
    icon: 'xi-library-add',
    title: 'Skill'
  },
  {
    id: 4,
    icon: 'xi-documents',
    title: 'Projects'
  },
  {
    id: 5,
    icon: 'xi-mail',
    title: 'Contact'
  },
];

const skills = [
  {
    id: 1,
  },
  {
    id: 2,
  },
  {
    id: 3,
  },
  {
    id: 4,
  },
  {
    id: 5,
  },
  {
    id: 6,
  },
  {
    id: 7,
  },
  {
    id: 8,
  },
  {
    id: 9,
  },
  {
    id: 10,
  }
]

const btns = [
  { id: 1, name: "All", value: "All" },
  { id: 2, name: "React", value: "React" },
  { id: 3, name: "HTML/CSS/JS", value: "HTML/CSS/JS" },
  { id: 4, name: "Training", value: "Training" },
];

const projects = [
  {
    id: 1,
    name:'megflix',
    value: "React",
    url:""
  },
  {
    id: 2,
    name:'한국 미술관',
    value: "React",
    url:"https://bbayong28.github.io/art_museum/"
  },
  {
    id: 3,
    name:'카카오뱅크',
    value: "React",
    url:"https://bbayong28.github.io/practice01_tr/"
  },
  {
    id: 4,
    name:'diary',
    value: "React",
    url:"https://bbayong28.github.io/diary/"
  },
  {
    id: 5,
    name:'이메일 매니저',
    value: "React",
    url:"https://bbayong28.github.io/contact_step01/"
  },
  {
    id: 6,
    name:'잭슨카멜레온',
    value: "HTML/CSS/JS",
    url:"https://bbayong28.github.io/originalmain/Jackson_tr/"
  },
  {
    id: 7,
    name: '한화',
    value: "HTML/CSS/JS",
    url:"https://bbayong28.github.io/originalmain/hanhwa_tr/"
  },
  {
    id: 8,
    name: '롯데리조트',
    value: "HTML/CSS/JS",
    url:"https://bbayong28.github.io/originalmain/lotte_resort/"
  },
  {
    id: 9,
    name:'마리떼',
    value: "HTML/CSS/JS",
    url:"https://bbayong28.github.io/originalmain/marithe_francois_girbaud_tr/"
  },
  {
    id: 10,
    name: '메타퀘스트',
    value: "HTML/CSS/JS",
    url:"https://bbayong28.github.io/originalmain/Meta_quest2_tr/"
  },
  {
    id: 11,
    name:'국사랑',
    value: "HTML/CSS/JS",
    url:"https://bbayong28.github.io/originalmain/kooksarang_tr/"
  },
  {
    id: 12,
    name:'calculator',
    value: "React",
    url:"https://bbayong28.github.io/calculator_r/index.html"
  },
  {
    id: 13,
    name:'Hyundai(react/jquery/js)',
    value: "Training",
    url:"https://bbayong28.github.io/hd_web_jquery/"
  },
    {
    id: 14,
    name: '숫자 맞추기 게임',
    value: "HTML/CSS/JS",
    url:"https://bbayong28.github.io/remove/guess_number/"
  },
  {
    id: 15,
    name:'모멘텀_클론코딩',
    value: "Training",
    url:"https://bbayong28.github.io/remove/momentum/"
  },
  {
    id: 16,
    name:'단위 변환기',
    value: "React/Js",
    url:"https://bbayong28.github.io/home/nmd_react_practice/"
  },
  {
    id: 17,
    name:'간단한 카운터',
    value: "React",
    url:"https://bbayong28.github.io/simple_counter/"
  },
  {
    id: 18,
    name:'배터리잔량',
    value: "Training",
    url:"https://bbayong28.github.io/etc/js/battery/"
  },
  {
    id: 19,
    name:'로그인',
    value: "React",
    url:"https://bbayong28.github.io/login_page/index.html"
  },
  {
    id: 20,
    name:'플립게임',
    value: "Training",
    url:"https://bbayong28.github.io/etc/js/flip_game/"
  },
  {
    id: 21,
    name:'번역기',
    value: "Training",
    url:"https://bbayong28.github.io/remove/translator/"
  },
  {
    id: 22,
    name:'날씨어플',
    value: "Training",
    url:"https://bbayong28.github.io/etc/js/weather/"
  }
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
    add: "https://github.com/bbayong28",
    intro: "소스 코드 저장소 입니다.",
    des1: "학원에서의 실습 프로젝트 코드",
    des2: "혼자서 코딩 연습을 위해 만든 프로젝트 코드"
  },
  {
    id: 2,
    name: 'Blog',
    icon: <SiNaver />,
    add : 'https://blog.naver.com/ghkdud5795',
    intro: "공부 및 지식 공유 목적의 블로그 입니다.",
    des1: "공부하며 알게된 지식들 정리위한 기록",
    des2: "지식 공유를 통해 다른사람에게 도움이 되기 위해"
  }
];


export { HomeMenu, skills, btns, projects, contacts, archiving }