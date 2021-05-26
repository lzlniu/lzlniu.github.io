import * as React from "react";
import { useRef, useEffect } from "react";
import { motion, useCycle } from "framer-motion";
//import { useDimensions } from "./use-dimensions";
import { MenuToggle } from "./MenuToggle";
import { Navigation } from "./Navigation";
import { Route, Switch, Link } from "react-router-dom";
//import iconR from "./iconR.png";
import arrowpng from "./page/content/arrow.png";
//import pausegif from "./page/content/pause.gif";
import qrcode from "./page/content/qrcode.jpg";
import qqgroupchatimg from "./page/content/qqgroupchatimg.png"
import "./Main.css";
import "./fonts.css";
import "./page/style.css";
import { mytimetable, BSccoursetable, MSccoursetable } from "./page/timelines";
import { getRandomColorSeries } from "./page/random_color_series";
import { gen_main_text2 } from "./page/main_text2_generation";
import { Dragbox } from "./page/Dragbox";
import { Contentbox } from "./page/Contentbox";
import { render } from "@testing-library/react";

// qq text machine learning
const qqset = ['']; //This is an app for text mining on Tecent QQ chat files.
const qqitems = {
  id:[0, 1, 2, 3], title:["♦","♣","♥","♠"],
  content:[
    'To do this, first you need to open your QQ client soft on PC. Click the bottom left \'三\' shape main menu, then click options (设置).',
    'After that, go to the safty options (安全设置), from \'message record (消息记录)\' find and click the \'Open the message manager (打开消息管理器)\'.',
    'Finally, you can export any message from normal chat or group chat by right click the dialog box and click \'export message record (导出消息记录)\'',
    'You can export them separately or export as a whole (e.g. all group chat). I suggest to export them in \'.txt\' format, and they will look like picture below.'
  ]
};
const qqapp = 
  <div id="bottom" style={{ top:`35px` }}>
    <Contentbox id={qqitems.id} title={qqitems.title} content={qqitems.content}/>
    <p>All group chat (view in <a href="https://www.sublimetext.com/" target="_blank" style={{ color:`gray` }}>Sublime Text</a>):</p>
    <img src={qqgroupchatimg}></img>
    <p>To be continued!</p>
  </div>
;

// minecraft bioinformatics mod
const mcset = [
  'This mod is made by myself for Java practicing and OOP programming.',
  'The mod is still in testing, much of the code as well as description can be seen at https://github.com/lzlniu/minecraft_bioinformatics_mod.',
  'You are welcome to pull request to that repo. But recently I may not update it.'
];
const mcapp = <p></p>;

// ku courses
const kuset= [
  'KU courses study notes, collecting from fellow students.',
  `For now, this page will be rely on GitHub page temple at: https://lzlniu.github.io/UCPH_courses. I may update it to here in the future.`
];
const kuapp = <p></p>;

// my blog
const otherset = [
  'This is my personal notebook (or called blog), and most of which may record in Chinese. 以下为中文记录:',
  '初步完成了这一React网页的基本框架，感觉JavaScript/TypeScript实在是能做太多事了，也包含了太多形形色色我还不能很好理解的编程范式，但蛮有趣。\t\t——2021/4/2',
  '调整了一下聊天泡泡的内容板块，将其模块化了，感觉不错，然后在尝试Tensorflow.js，此前也没学过Tensorflow，初步尝试还是有点迷的。\t\t——2021/5/12',
  'Tensorflow没管了，但加了仨时间表，用了Google Charts。\t\t——2021/5/26',
  '待续'
];
const otherapp = <p></p>;

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 10,
      restDelta: 2
    }
  }),
  closed: {
    clipPath: "circle(40px at 50px 50px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40
    }
  }
};

//const header_bottom = <div id="header_bottom" style={{ bottom:`0px`}}></div>;
const scrollup = <div className="downb"><button onClick={() => { window.scrollTo(0, 0) }}><img src={arrowpng}></img></button></div>
//const scrollup = <div className="downb"><a href="#Apptop"><img src={arrowpng}></img></a></div>;
const scrollback = <div className="downb2"><Link to="/" style={{ background:`transparent` }}><button><img src={arrowpng} style={{ transform: `rotate(-90deg)` }}></img></button></Link></div>
const contactinfo = <p>If you would like to know more about me, feel free to contact me through WeChat Official Account 'newslzl' or my e-mail: zelin.l@foxmail.com. Google scholar: <a href="https://scholar.google.com/citations?user=y_hS_t4AAAAJ" style={{color:`gray`}} target="_blank">Zelin Li</a>, <a href="https://orcid.org/0000-0002-0790-3064" style={{color:`gray`}} target="_blank">ORCID</a></p>;
const qrimage = <img src={qrcode} alt="newslzl's QR-code" style={{ maxWidth:`360px` }}></img>;
const copyright = <p style={{fontSize:`14px`, marginLeft:`10px`, marginRight:`10px` }}>Copyright 2020-2021 Zelin Li all rights reserved</p>;

function Home({...props}) {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  //const { height } = useDimensions(containerRef);
  
  return (
    <header className="App-header">
      <div id="App-header_text">
        <div id="App-header_text_title">
          {props.title}
        </div>
        {props.description}
        <div id="App-header_text_time">
          {props.date}
        </div>
      </div>
      {/*
        <div className="App-iconR">
        <img src={iconR} className="App-iconR-img" alt="iconR" />
      </div>
      */}
      <motion.nav initial={false} animate={isOpen ? "open" : "closed"} ref={containerRef}>
        <motion.div className="background" variants={sidebar} />
        <Navigation />
        <MenuToggle toggle={() => toggleOpen()} />
      </motion.nav>
    </header>
  );
};
/*
function main_text2_gen(main_text2_num:number,main_text2_info:string) {
  main_text2_num--;
  if (main_text2_num>0) {
    main_text2_gen(main_text2_num,`This is count: ${main_text2_num}`);
  };
  return gen_main_text2(main_text2_info);
};
*/
interface MyProps {
  atitle:string;
  asubtitle:string;
  description_set:string[];
  this_app:JSX.Element;
}

function CommonContent({...props}:MyProps) {
  //const newheaderstyle = { background: `linear-gradient(0deg, rgb(215,255,5),#212121)` }
  //const newmainstyle = { background: `linear-gradient(0deg, rgb(33,33,33), rgb(70,107,47), rgb(108,181,61), rgb(145,255,75), rgb(155,255,65), rgb(165,255,55), rgb(175,255,45), rgb(185,255,35), rgb(195,255,25),rgb(205,255,15), rgb(215,255,5))` };
  //const newmainstyle = { background: `linear-gradient(0deg, rgb(33,33,33), rgb(145,255,75), rgb(155,255,65), rgb(165,255,55), rgb(175,255,45), rgb(185,255,35), rgb(195,255,25),rgb(205,255,15), rgb(215,255,5), rgb(124,144,19), rgb(33,33,33))` };
  const newmainstyle = getRandomColorSeries(); //My default color is #212121 which is rgb(33,33,33), while this is random
  const commonbottom = <div id="bottom" style={{ top:`25px`, marginTop:'25px' }}>{copyright}</div>;
  var check_num = 0;

  return (
    <div>
      <div className="header" style={newmainstyle}>
        <Dragbox title={props.atitle} subtitle={props.asubtitle}/>
      </div>
      <div className="main" style={{ background: `#212121` }}>
        {props.description_set.map(i => gen_main_text2(i,++check_num))}
        {props.this_app}
        {commonbottom}
      </div>
      {scrollup}
      {scrollback}
    </div>
  );
};

function Timelines() { // Timelines page, static HTML page
  return (
    <div className="timelines" style={{ background:`rgb(255,255,255)`, fontSize:`28px`, color:`rgb(225,225,225)` }}>
      <div id="Apptop"></div>
      <p style={{ marginTop:`0px`,fontSize:`0.001px` }}>.</p>
      <p style={{ background:`rgb(33,33,33)` }}>General Study and Work Timetable</p>
      {mytimetable()}
      <p style={{ background:`rgb(33,33,33)` }}>BSc Core Courses Timetable</p>
      {BSccoursetable()}
      <p style={{ background:`rgb(33,33,33)` }}>MSc Courses Timetable</p>
      {MSccoursetable()}
      {scrollup}
      {scrollback}
    </div>
  );
};

function IntroContent() { // Intro page, static HTML page
  return (
  <div>
    <div className="header">
      <div id="header_text">
        <h1>Intro</h1>
        <h2>Hello!</h2>
      </div>
    </div>  
    <div className="main">
      <div id="main_text">
        <p>Note1:Hover/tap the transparent dialog box to show the contents.</p>
        <p>Note2:Click the top left button back to the main menu, click the top right button to scroll to the top.</p>
      </div>
      <div id="main_text2">
        <p>Hello, I'm Zelin Li, I studied Biological Science (Marine Biology track) at Ocean University of China, and now is a master student studying Bioinformatics (Computer Science track) at University of Copenhagen.</p>
        <p>Click to view my: <Link to="/timeline">Timelines</Link></p>
      </div>
      <div id="main_text2">
        <p>You can find this page's source code and many other stuffs on my <a href="https://github.com/lzlniu" target="_blank">github</a>.</p>
        <p>For other stuffs made by me, you can go to the top menu and click to see '2,3,4,5'.</p>
      </div>
      <div id="main_text2">
        <p>I had spent one year internship at Institute of Oceanology, Chinese Academy of Sciencs. Mainly focused on comparative genomics. I worked on NGS high-throughout sequences analysis, and mostly is DNA-seq analysis there. Including de novo genome assembly, annotation, amplicon analysis and phylogenetics analysis, here is the relative publication: <a href="https://doi.org/10.1016/j.hal.2020.101911" target="_blank">Development of a high-resolution molecular marker for tracking Phaeocystis globosa genetic diversity through comparative analysis of chloroplast genomes</a></p>
      </div>
      <div id="main_text2">
        <p>I used several soft to do these jobs and create several bioinformatics pipelines (you can found them on my Github repositories), I also list up these softwares' website or Github page and recommend books here:</p>
        <details><summary>Assembly</summary>
				  <h4><a href="https://github.com/bcgsc/abyss" target="_blank">1.ABySS</a></h4>
				  <h4><a href="http://platanus.bio.titech.ac.jp/platanus2" target="_blank">2.Platanus_allee</a></h4>
				  <h4><a href="http://cab.spbu.ru/software/spades/" target="_blank">3.SPAdes</a></h4>
				  <h4><a href="https://github.com/aquaskyline/SOAPdenovo2" target="_blank">4.SOAPdenovo</a></h4>
				  <h4><a href="https://github.com/voutcn/megahit" target="_blank">5.megahit</a></h4>
				  <h4><a href="https://www.ebi.ac.uk/~zerbino/velvet/" target="_blank">6.velvet</a></h4>
				  <h4><a href="https://github.com/alekseyzimin/masurca/releases" target="_blank">7.MaSuRCA</a></h4>
				  <h4><a href="https://www.pacb.com/support/software-downloads/" target="_blank">8.smrtlink</a></h4>
				  <h4><a href="https://canu.readthedocs.io/en/latest/" target="_blank">9.canu</a></h4>
			  </details>
			  <details><summary>Alignment and QC</summary>
				  <h4><a href="http://bio-bwa.sourceforge.net" target="_blank">1.BWA</a></h4>
				  <h4><a href="http://bowtie-bio.sourceforge.net/bowtie2/manual.shtml" target="_blank">2.Bowtie2</a></h4>
				  <h4><a href="https://github.com/DaehwanKimLab/tophat" target="_blank">3.Tophat</a></h4>
				  <h4><a href="https://daehwankimlab.github.io/hisat2/" target="_blank">4.HISAT2</a></h4>
				  <h4><a href="https://github.com/samtools/samtools" target="_blank">5.SAMtools</a></h4>
				  <h4><a href="https://github.com/samtools/bcftools" target="_blank">6.BCFtools</a></h4>
				  <h4><a href="http://broadinstitute.github.io/picard/" target="_blank">7.Picard-tools</a></h4>
				  <h4><a href="http://www.bioinformatics.babraham.ac.uk/projects/fastqc/" target="_blank">8.FastQC</a></h4>
			  </details>
		    <details><summary>Recommend Books</summary>
          <h4><a href="https://b-ok.cc/book/2734031/5bfa36" target="_blank">1.Bioinformatics data skills</a></h4>
          <h4><a href="https://b-ok.cc/book/5005191/12b728" target="_blank">2.Genomes 4</a></h4>
			  </details>
      </div>
      <div id="main_text2">
        <p>Recently I am constructing this page with react; I am learning text mining for future research. Also, If you are a student from UCPH, you're welcome to contribute on <a href="https://lzlniu.github.io/UCPH_courses/" target="_blank">UCPH_courses</a>, which help students sharing their study notes and learn from each other.</p>
      </div>
		  <div id="bottom">{contactinfo}{qrimage}{copyright}</div>
    </div>
    {scrollup}
    {scrollback}
  </div>
  );
};

function tick() {
  const pageinfo = {
  	date: new Date().toLocaleDateString(),
    //time: new Date().toLocaleTimeString(),
    title: 'ZELIN\'s page',
    description: 'Better than mantis shrimp!',
  };
  return pageinfo
};

export const Main = () => {
  const pinfo = tick();

  return (
    <div className="App">
      {/*<div id="Apptop"></div>*/}
      <Switch>
        <Route exact path="/"><Home title={pinfo.title} description={pinfo.description} date={pinfo.date}/></Route>
        <Route path="/intro"><IntroContent /></Route>
        <Route path="/textml"><CommonContent atitle="Text ML" asubtitle="Using QQ" description_set={qqset} this_app={qqapp}/></Route>
        <Route path="/minecraft"><CommonContent atitle="Minecraft" asubtitle="Bioinformatics mod" description_set={mcset} this_app={mcapp}/></Route>
        <Route path="/ucph"><CommonContent atitle="UCPH courses" asubtitle="" description_set={kuset} this_app={kuapp}/></Route>
        <Route path="/other"><CommonContent atitle="Other" asubtitle="Zelin's note" description_set={otherset} this_app={otherapp}/></Route>
        <Route path="/timeline"><Timelines /></Route>
      </Switch>
    </div>
  );
};
//onClick={() => loginfunc()}
