import * as React from "react";
import { useRef } from "react";
import { motion, useCycle } from "framer-motion";
//import { useDimensions } from "./use-dimensions";
import { MenuToggle } from "./MenuToggle";
import { Navigation } from "./Navigation";
import { Route, Switch, Link } from "react-router-dom";
//import iconR from "./iconR.png";
import arrowpng from "./page/content/arrow.png";
//import pausegif from "./page/content/pause.gif";
import qrcode from "./page/content/qrcode.jpg";
import "./Main.css";
import "./fonts.css";
import "./page/content/style.css";
import { getRandomColorSeries } from "./page/content/random_color_series";
import { gen_main_text2 } from "./page/content/main_text2_generation";

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
const scrollup = <div className="downb"><a href="#Apptop"><img src={arrowpng}></img></a></div>;
const scrollback = <div className="downb2"><Link to="/" style={{ background:`transparent` }}><a><img src={arrowpng} style={{ transform: `rotate(-90deg)` }}></img></a></Link></div>
const contactinfo = <p>If you would like to know more about me, feel free to contact me through WeChat Official Account 'newslzl' or my e-mail: zelin.l@foxmail.com.</p>;
const qrimage = <img src={qrcode} alt="newslzl's QR-code"></img>;
const copyright = <p>Copyright 2020-2021 Zelin Li all rights reserved</p>;

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
  description1:string;
  description2_set:string[];
}

function CommonContent({...props}:MyProps) {
  //const newheaderstyle = { background: `linear-gradient(0deg, rgb(215,255,5),#212121)` }
  //const newmainstyle = { background: `linear-gradient(0deg, rgb(33,33,33), rgb(70,107,47), rgb(108,181,61), rgb(145,255,75), rgb(155,255,65), rgb(165,255,55), rgb(175,255,45), rgb(185,255,35), rgb(195,255,25),rgb(205,255,15), rgb(215,255,5))` };
  //const newmainstyle = { background: `linear-gradient(0deg, rgb(33,33,33), rgb(145,255,75), rgb(155,255,65), rgb(165,255,55), rgb(175,255,45), rgb(185,255,35), rgb(195,255,25),rgb(205,255,15), rgb(215,255,5), rgb(124,144,19), rgb(33,33,33))` };
  const newmainstyle = getRandomColorSeries(); //My default color is #212121 which is rgb(33,33,33), while this is random
  const textmlbottom = <div id="bottom">{copyright}</div>;
  return (
    <div>
      <div className="header" style={newmainstyle}>
        {scrollup}
        {scrollback}
        <div id="header_text">
          <h1>{props.atitle}</h1>
          <h2>{props.asubtitle}</h2>
        </div>
      </div>
      <div className="main" style={{ background: `#212121` }}>
        <div id="main_text2" style={{ margin: `0 auto` }}><p>{props.description1}</p></div>
        {props.description2_set.map(i => gen_main_text2(i))}
        {textmlbottom}
      </div>
    </div>
  );
};

function BW() {
  const introbottom = <div id="bottom">{contactinfo}{qrimage}{copyright}</div>;

  return (
  <div>
    <div className="header">
      {scrollup}
      {scrollback}
      <div id="header_text">
        <h1>Intro</h1>
        <h2>Hello!</h2>
      </div>
    </div>  
    <div className="main">
      <div id="main_text">
        <p>Note1:Hover/tap the transparent dialog box to show the contents.</p>
        <p>Note2:Click the top left button back to the menu, click the top right button to back to this page top.</p>
      </div>
      <div id="main_text2">
        <p>Hello, I'm Zelin Li, I studied Biological Science (Marine Biology track) at Ocean University of China, and now is a master student studying Bioinformatics (Computer Science track) at University of Copenhagen.</p>
      </div>
      <div id="main_text2">
        <p>You can find this page's source code and many other stuffs on my <a href="https://github.com/lzlniu" target="_blank">github</a>.</p>
        <p>For other stuffs made by me, you can go to the top menu and click to see '2,3,4,5'.</p>
      </div>
      <div id="main_text2">
        <p>I had spent one year internship at Institute of Oceanology, Chinese Academy of Sciencs. Mainly focused on comparative genomics. I worked on NGS high-throughout sequences analysis, and mostly is DNA-seq analysis there. Including de novo genome assembly, annotation, amplicon analysis, metagenomics and phylogenetics analysis.</p>
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
		  {introbottom}
    </div>
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

const pinfo = tick();

export const Main = () => {
  const qqdcrp = 'Text mining on Tecent QQ chat files.';
  const qqset = [
    'To do this, first you need to open your QQ client soft on PC. Click the bottom left \'三\' shape main menu, then click options (设置).',
    'After that, go to the safty options (安全设置), from \'message record (消息记录)\' find and click the \'Open the message manager (打开消息管理器)\'.',
    'Finally, you can export any message from normal chat or group chat by right click the dialog box and click \'export message record (导出消息记录)\'',
    'You can export them separately or export as a whole (e.g. all group chat). I suggest to export them in \'.txt\' format, and they will look like picture below.'
  ];
  const mcdcrp = 'This mod is made by myself for Java practicing and OOP programming.'
  const mcset = [
    'mc testing',
    'Mc testing',
    'MC0001 testing'
  ];
  const kudcrp = 'KU courses study notes, collecting from fellow students.'
  const kuset= [
    'ku KU testing'
  ];
  const otherdcrp = 'This is my personal notebook (or called blog).'
  const otherset = [
    'aaaa',
    'bbbb',
    'ccccc',
    'dddd ddd ddd ddd',
    'asfasg fas'
  ];
  return (
    <div className="App">
      <div id="Apptop"></div>
      <Switch>
        <Route exact path="/"><Home title={pinfo.title} description={pinfo.description} date={pinfo.date}/></Route>
        <Route path="/intro"><BW /></Route>
        <Route path="/textml"><CommonContent atitle="Text ML" asubtitle="Using QQ" description1={qqdcrp} description2_set={qqset}/></Route>
        <Route path="/minecraft"><CommonContent atitle="Minecraft" asubtitle="Bioinformatics mod" description1={mcdcrp} description2_set={mcset}/></Route>
        <Route path="/ucph"><CommonContent atitle="UCPH courses" asubtitle="" description1={kudcrp} description2_set={kuset}/></Route>
        <Route path="/other"><CommonContent atitle="Other" asubtitle="Zelin's note" description1={otherdcrp} description2_set={otherset}/></Route>
      </Switch>
    </div>
  );
};
//onClick={() => loginfunc()}
