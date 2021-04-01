import * as React from "react";
import { useRef } from "react";
import { motion, useCycle } from "framer-motion";
//import { useDimensions } from "./use-dimensions";
import { MenuToggle } from "./MenuToggle";
import { Navigation } from "./Navigation";
import { Route } from "react-router-dom";
import iconR from "./iconR.png";
import arrowpng from "./page/content/arrow.png";
import bioinfo from "./page/content/bioinformatics data skills.png";
import genome4 from "./page/content/genomes 4.png";
//import pausegif from "./page/content/pause.gif";
import qrcode from "./page/content/qrcode.jpg";
import "./Main.css";
import "./fonts.css";
import "./page/content/style.css";
//import "./page/content/togg";

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
      <div className="App-iconR">
        <img src={iconR} className="App-iconR-img" alt="iconR" />
      </div>
      <motion.nav initial={false} animate={isOpen ? "open" : "closed"} ref={containerRef}>
        <motion.div className="background" variants={sidebar} />
        <Navigation />
        <MenuToggle toggle={() => toggleOpen()} />
      </motion.nav>
    </header>
  );
}

function BW() {
  return (
  <div>
    <div className="header">
	    <div id="top">
      </div>
      <div id="header_text">
        <h1>Intro</h1>
        <h2>Hello!</h2>
      </div>
    </div>  
    <div className="main">
      <div id="main_text">
        <p>Note1:hover the transparent dialog box to show the contents.</p>
        <p>Note2:click the left button to open the menu, click the right button to move to the top.</p>
      </div>
      <div id="main_text2">
        <p>You can find this page's source code and many other stuffs on <a href="https://github.com/lzlniu" target="_blank">my Github page</a>.</p>
      </div>
      <div id="main_text3">
        <p>Hello, I'm Zelin Li, a bachelor student studied biological science (marine biology) at Ocean University of China, and now is a master student studying bioinformatics (computer science) at University of Copenhagen.</p>
      </div>
      <div id="main_text4">
        <p>I had spent one year internship at Institute of Oceanology, Chinese Academy of Sciencs. Mainly focused on comparative research of marine algae. I worked on NGS high-throughout sequences analysis, and mostly is DNA-seq analysis there. Including de novo genome assembly, annotation, amplicon analysis, metagenomics and phylogenetics analysis.</p>
      </div>
      <div id="main_text5">
        <p>I used several soft to do these jobs and create several bioinformatics pipelines (you can found them on my Github repositories), so I list up these softwares' website or Github page at the bottom of this page.</p>
      </div>
      <div id="main_text6">
        <p>Recently I am learning React and try to reconstruct this page; I am learning text mining for future research. Also, If you are a student from UCPH, you're welcome to contribute on <a href="https://lzlniu.github.io/UCPH_courses/" target="_blank">UCPH_courses</a>, which help students sharing their study notes and learn from each other.</p>
      </div>
		  <div id="bottom">
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
				  <a href="https://b-ok.cc/book/2734031/5bfa36" target="_blank"><img src={bioinfo}></img></a>
				  <a href="https://b-ok.cc/book/5005191/12b728" target="_blank"><img src={genome4}></img></a>
			  </details>
			  <p>If you would like to know more about me, feel free to contact me through WeChat Official Account 'newslzl' or my e-mail: zelin.l@foxmail.com.</p>
		    <img src={qrcode} alt="newslzl's QR-code"></img>
			  <p>Copyright 2020-2021 Zelin Li All rights Reserved.</p>
      </div>
    </div>
    <div className="downb">
      <a href="#top"><img src={arrowpng}></img></a>
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
}

const pinfo = tick();

export const Main = () => {
  return (
    <div className="App">
      <Route path="/"><Home title={pinfo.title} description={pinfo.description} date={pinfo.date}/></Route>
      <Route path="/BW"><BW /></Route>
    </div>
  );
};
//onClick={() => loginfunc()}