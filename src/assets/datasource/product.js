// all images imported from images directory

import image_01 from '../images/dataentry-1.png';
import image_02 from '../images/dataentry-2.jpg';
import image_03 from '../images/web-design-1.jpg';
import image_04 from '../images/dataentry-3.jpg';
import hoobank from '../images/hoobank.png';
import datafetch from '../images/datafetch.png';
import image_07 from '../images/web-development-1.png';
import image_08 from '../images/web-development-2.jpg';


const products = [
  {
    id: "01",
    title: "Research Work",
    working_time: 2016,
    image: image_01,
    category: "Data_Entry",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },

  {
    id: "02",
    title: "Result Entry",
    working_time: 2021,
    image: image_02,
    category: "Data_Entry",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.  ",
  },

  {
    id: "03",
    title: "Portfolio website Design",
    working_time: 2022,
    image: image_03,
    category: "Web_Design",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: "04",
    title: "Student Data Input",
    working_time: 2021,
    image: image_04,
    category: "Data_Entry",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
  },

  {
    id: "05",
    title: "HooBank website Design(Replica)",
    working_time: 2022,
    image: hoobank,
    category: "Web_Design",
    desc: "The website is designed for learning purpose",
    github:"https://github.com/smferoj/Hoobank",
    website: "https://hoobanksm.netlify.app"
  },

  {
    id: "06",
    title: "Data Fetching from github",
    working_time: 2022,
    image: datafetch,
    category: "Web_Design",
    desc: " Data Fetching from github project",
    github:"https://github.com/smferoj/data-fetch-github",
    website: "https://usergithubsm.netlify.app"
  },
  {
    id: "07",
    title: "Basic CRUD Project",
    working_time: 2023,
    image: image_07,
    category: "Web_Development",
    desc: " Basic Crud project with backend" ,
    github:"https://github.com/smferoj/basic-crud-project",
    website: "https://usergithubsm.netlify.app"
    
  },

  {
    id: "08",
    title: "Inventory Management Full Project",
    working_time: 2023,
    image: image_08,
    category: "Web_Development",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est  ",
  },
  
];

export default products;
