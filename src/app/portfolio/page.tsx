"use client";

import {
  Button,
  Center,
  Heading,
  Stack,
  Text,
  Container,
  useColorModeValue,
  Divider,
  Flex,
} from "@chakra-ui/react";

import { BsGithub } from "react-icons/bs";

import { ChakraProvider } from "@chakra-ui/react";
import customTheme from "../utils/theme";
import Header from "./header";

import "./index.css";

const projects = [
  {
    title: "Dr. Manisha's Yoga Institute",
    description:
      "Created a MEVN Stack Web Application. Gave more than 180+ hours on this project. The project also includes admin panel along with CRUD Functionalities. Blogging System using Firebase.",
    image: "/images/main.png",
    tags: [
      "Vue.js",
      "Tailwind CSS",
      "Vuex",
      "MongoDB",
      "Node-Express",
      "Firebase",
    ],
    source: "https://www.drmanishasyogainstitute.com/",
    visit: "https://www.drmanishasyogainstitute.com/",
    id: "yogainstitute",
  },
  {
    title: "Anandlok Ayurveda",
    description:
      "Using ReactJs, Next.js, and Material-UI, I worked as an Intern for Anandlok Ayurveda & Panchakrma Hospital and created a website for Ayurveda & Panchakarma practitioners to share their knowledge and experience with others.",
    image: "/images/1.png",
    tags: ["Next.js", "React.Js", "CSS", "Material-UI"],
    source: "https://www.anandlokayurveda.com/",
    visit: "https://www.anandlokayurveda.com/",
    id: "anandlokayurveda",
  },
  {
    title: "News-o-Pedia",
    description:
      "Using Vue.js I have created this news application having the main feature of Image Mapping, Used newsapi.org api to fetch the news from different parts of the world. Note: The API used works developers mode (i.e, locally. download it).",
    image: "/images/news-o-pedia.png",
    tags: ["Vue.js", "CSS", "NewsAPI.org"],
    source: "https://github.com/Yashkapure06/News-O-Pedia",
    visit: "https://news-o-pedia.netlify.app/",
    id: "news-o-pedia",
  },
  {
    title: "Select Text to Speech Chrome extention",
    description:
      "A simple chrome extension where you can select text, then right click and then select the option 'Read aloud' and you can hear the final audio.",
    image: "/images/text-to-sppech.webp",
    tags: ["JavaScript"],
    source: "https://github.com/Yashkapure06/TextToSpeech-ChromeExtension",
    visit: "https://github.com/Yashkapure06/TextToSpeech-ChromeExtension",
    id: "texttospeech",
  },
  {
    title: "Restro - A Restaurent Website",
    description:
      "A simple and beautiful Restaurent Website made with Pure HTML, CSS and JS. With some beautiful Animation and data fetching using API. ",
    image: "/images/restro.png",
    tags: ["HTML", "CSS", "Javascript", "API"],
    source:
      "https://github.com/Yashkapure06/fyndAcademy-MEVN/tree/master/Project3-HTML%2BCSS%2BJS",
    visit: "https://fynd-academy-mevn.vercel.app/",
    id: "restro",
  },
  {
    title: "OpenSource Contribution in Chakra-UI",
    description:
      "I created a portfolio website for my OpenSource contribution in Chakra-UI. This website is a collection of my contributions to the Chakra-UI community.",
    image: "/images/9.png",
    tags: ["Chakra-UI", "React.Js", "CSS"],
    source: "https://github.com/Yashkapure06/awesome-chakra-ui",
    visit: "https://chakra-ui.com/community/showcase",
    id: "opensource",
  },
  {
    title: "Netflix Clone using ReactJs",
    description:
      "I created a Netflix clone using ReactJs and Sass. This is a clone of Netflix website. And played a lot with Api.",
    image: "/images/10.png",
    tags: ["React JS", "SCSS", "CSS", "API"],
    source: "https://github.com/Yashkapure06/netflix-clone",
    visit: "https://netflix-clone-06.netlify.app/",
    id: "netflix-clone",
  },
  {
    title: "YouTube Clone using ReactJs",
    description:
      "I created a YouTube clone using ReactJs and Material UI. Used Rapid API to fetch data and learnt how to fetch data using API. The API used here was YouTube v3.",
    image: "/images/11.png",
    tags: ["ReactJs", "CSS", "Material-UI", "API"],
    source: "https://github.com/Yashkapure06/youtube_clone",
    visit: "https://youtube-clone-06.netlify.app/",
    id: "youtube-clone",
  },
  {
    title: "Blogging Website",
    description:
      "This Blogging Website is made with NodeJs, Express and MongoDB. It is a simple blogging website where you can read, write, delete and edit your blog post. ",
    image: "/images/7.png",
    tags: ["Nodejs", "Express", "CSS", "MongoDB"],
    source: "https://github.com/Yashkapure06/Blogging-Website",
    visit: "https://github.com/Yashkapure06/Blogging-Website",
    id: "bloggingwebsite",
  },
  {
    title: "Personal Portfolio",
    description:
      "This is my personal portfolio website. I have made this with the help of NextJS + Its documents .You can see my projects, skills, and contact me over here as well. ",
    image: "/images/8.png",
    tags: ["NextJs", "MaterialUI"],
    source: "https://github.com/Yashkapure06/PersonalPortfolio",
    visit: "https://yash-kapure.vercel.app/",
    id: "personalPortfolio",
  },
  {
    title: "Space Talks ✨",
    description:
      "This is a MERN Website. I have created this website using ReactJs, Material-UI, Nodejs, CSS, Express and MongoDB. This website is a platform for people to share their love and knowledge about space, universe, stars, galaxies and other planets with people from all over.",
    image: "/images/spacetalks.png",
    tags: ["ReactJs", "Material-UI", "Three.Js", "MongoDB"],
    source: "https://github.com/Yashkapure06/Space-Talks-MERN",
    visit: "https://space-talks.netlify.app/",
    id: "spacetalks",
  },
  {
    title: "Personal Portfolio",
    description:
      "This is My 1st Portfolio Website. I Made this with ReactJS while Learning ReactJS. A lots of CSS is Used for Animation. I have also added the feature of Dark & Light Mode",
    image: "/images/4.png",
    tags: ["React", "CSS3", "JavaScript"],
    source: "https://github.com/Yashkapure06/PersonalPortfolio2",
    visit: "https://yashkapure-portfolio.web.app/",
    id: "personalportfolio",
  },
  {
    title: "Movie WebApp",
    description:
      "A Simple Movie App Using Pure ReactJs - made for just revision purpose",
    image: "/images/6.png",
    tags: ["React", "CSS3", "JavaScript", "API"],
    source: "https://github.com/Yashkapure06/Movie-App",
    visit: "https://react-movie-app-yash.netlify.app/",
    id: "movieapp",
  },
  {
    title: "Complete React Website",
    description:
      "I made this whole website from scratch with latest versions of React. This Complete Demo Website is Made using ReactJs, HTML, CSS. This website is a complete demo website which includes all the components of ReactJs.",
    image: "/images/3.png",
    tags: ["React", "CSS3"],
    source: "https://github.com/Yashkapure06/React-Website",
    visit: "https://reactwebsite-3b247.web.app/",
    id: "reactwebsite",
  },
  {
    title: "Wedding Invitation Website",
    description:
      "This Website is purely made with HTML, CSS and mainly JS. You Will find some Beautiful animations in this website. Some Special Features are also added in this website, please visit and check.",
    image: "/images/5.png",
    tags: ["HTML", "CSS", "JS"],
    source: "https://github.com/Yashkapure06/Wedding-Website",
    visit: "https://harshal-nandani.web.app/",
    id: "weddingwebsite",
  },
];

const Projects = ({ post, _id }: { post: any; _id: Number }) => {
  return (
    <ChakraProvider theme={customTheme}>
      <Flex
        direction="column"
        align="center"
        m="0 auto"
        maxW={{ xl: "1200px" }}
      >
        <Header />
      </Flex>
      <Flex direction="column" align="center" m="0 auto">
        <Divider />

        <Center id="projects" py={4}>
          <Text
            textTransform={"uppercase"}
            color={"blue.400"}
            fontWeight={600}
            fontSize={"sm"}
            bg={useColorModeValue("blue.50", "blue.900")}
            p={2}
            alignSelf={"flex-start"}
            rounded={"md"}
          >
            My Projects
          </Text>
        </Center>
        <Center py={2}>
          <Heading style={{ paddingLeft: 30 }}>
            <Text>Here are some of My Projects</Text>
          </Heading>
        </Center>
        <hr
          style={{
            width: 75,
            height: 4,
            margin: "20 auto",
            border: 0,
            background: "#ff0080",
          }}
        />
        {/* <Center py={2}>
      <Text
        Text
        color={useColorModeValue("black", "white")}
        fontSize={20}
        style={{ textAlign: "center", padding: " 0 0.5em 0 0.5em " }}
      >
        <i>
          “Learning to write programs stretches your mind, and helps you think
          better, creates a way of thinking about things that I think is
          helpful in all domains.”
        </i>
      </Text>
    </Center>
    <Center>
      <i style={{ textAlign: "center" }}>
        —Bill Gates, Co-Chairman, Bill & Melinda Gates Foundation, Co-Founder,
        Microsoft
      </i>
    </Center> */}
        {/* <Hr /> */}
        {/* <Container id="about" > */}
        {/* <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}> */}
        {/* <Center py={6}> */}
        <section className=" main" id="about">
          {projects.map(
            ({
              id,
              image,
              title,
              description,
              tags,
              source,
              visit,
            }: {
              image: String;
              tags: String[];
              id: String;
              title: String;
              description: String;
              source: String;
              visit: String;
            }) => {
              return (
                <div className=" card" key={Number(title)}>
                  <img src={image} alt={title} />
                  <div className="card-body">
                    <h6>{title}</h6>
                    <p>{description}</p>
                    <div
                      style={{
                        textAlign: "center",
                        padding: ".7rem 10px 0px .7rem",
                      }}
                    >
                      <strong>Stack</strong>
                    </div>
                    <ul
                      style={{
                        display: "flex",
                        paddingLeft: 10,
                      }}
                    >
                      {tags.map((tag, index) => (
                        <Text key={index} style={{ fontWeight: "600" }}>
                          <li
                            style={{
                              paddingLeft: 12,
                              letterSpacing: "0.1rem",
                              listStyle: "none",
                              fontSize: ".7rem",
                            }}
                          >
                            {tag}
                          </li>
                        </Text>
                      ))}
                    </ul>
                    <div>
                      <Stack
                        width={"100%"}
                        mt={"1rem"}
                        direction={"row"}
                        padding={1}
                        justifyContent={"space-between"}
                        alignItems={"center"}
                      >
                        <Button
                          flex={1}
                          fontSize={"sm"}
                          rounded={"full"}
                          _focus={{
                            bg: "gray.200",
                          }}
                          onClick={() => {
                            window.open({ visit }, "_blank");
                          }}
                        >
                          Visit
                        </Button>
                        <Button
                          flex={1}
                          fontSize={"sm"}
                          rounded={"full"}
                          bg={"black"}
                          color={"white"}
                          boxShadow={
                            "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
                          }
                          _hover={
                            {
                              // bgGradient: "linear(to-r, #000000, #FF0080)",
                            }
                          }
                          // _focus={{
                          //   bg: "blue.500",
                          // }}
                          onClick={() => {
                            window.open(source, "_blank");
                          }}
                        >
                          {<BsGithub size="28px" />}
                        </Button>
                      </Stack>
                    </div>
                  </div>
                </div>
              );
            }
          )}
        </section>
      </Flex>
    </ChakraProvider>
  );
};

export default Projects;
