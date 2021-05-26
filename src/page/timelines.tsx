import { Chart } from "react-google-charts";

//google.charts.load("current", { packages: ["timeline"] });
//google.charts.setOnLoadCallback(mytimetable);
//google.charts.setOnLoadCallback(BSccoursetable);
//google.charts.setOnLoadCallback(MSccoursetable);
/*
function drawChart(data, element_id) {
  var container = document.getElementById(element_id);
  var chart = new google.visualization.Timeline(container);
  var dataTable = new google.visualization.DataTable();
  dataTable.addColumn({ type: "string", id: "Term" });
  dataTable.addColumn({ type: "string", id: "Name" });
  dataTable.addColumn({ type: "date", id: "Start" });
  dataTable.addColumn({ type: "date", id: "End" });
  dataTable.addRows(data);
  chart.draw(dataTable);
}
*/

export const mytimetable = () => {
  return (
    <Chart
    width={'99.99%'}
    height={'250px'}
    chartType="Timeline"
    loader={<div>Loading Chart</div>}
    data={[
    [
      { type: 'string', id: 'Term' },
      { type: 'string', id: 'Name' },
      { type: 'date', id: 'Start' },
      { type: 'date', id: 'End' },
    ],
    [
      "University of Copenhagen",
      "MSc Bioinformatics (Computer Science)",
      new Date(2020, 8, 15),
      new Date()
    ],
    [
      "University of Copenhagen",
      "RA, Center for Social Evolution",
      new Date(2021, 4, 25),
      new Date()
    ],
    [
      "Chinese Academy of Sciences",
      "RA, Institute of Oceanology",
      new Date(2019, 4, 15),
      new Date(2020, 7, 20)
    ],
    [
      "Ocean University of China",
      "BSc Biological Science (Marine Biology)",
      new Date(2016, 8, 30),
      new Date(2020, 6, 30)
    ],
    [
      "Ocean University of China",
      "RA, College of Marine Life Sciences",
      new Date(2019, 8, 15),
      new Date(2019, 11, 15)
    ],
    [
      "Ocean University of China",
      "RA, Institute of Evolution and Marine Biodiversity",
      new Date(2018, 2, 15),
      new Date(2018, 5, 15)
    ],
    ]}
  />   
  );
}

export const BSccoursetable = () => {
  return (
    <Chart
    width={'99.99%'}
    height={'450px'}
    chartType="Timeline"
    loader={<div>Loading Chart</div>}
    data={[
    [
      "General Compulsory",
      "Advanced Mathematics I 1",
      new Date(2016, 8, 1),
      new Date(2017, 0, 15)
    ],
    [
      "General Compulsory",
      "Advanced Mathematics II 2",
      new Date(2017, 2, 1),
      new Date(2017, 6, 15)
    ],
    [
      "General Compulsory",
      "Inorganic and Analytical Chemistry",
      new Date(2016, 8, 1),
      new Date(2017, 0, 15)
    ],
    [
      "General Compulsory",
      "College Physics III 1",
      new Date(2017, 2, 1),
      new Date(2017, 6, 15)
    ],
    [
      "Subject Compulsory",
      "Zoology",
      new Date(2017, 2, 1),
      new Date(2017, 6, 15)
    ],
    [
      "Restricted Elective",
      "Oceanography 3",
      new Date(2016, 8, 1),
      new Date(2017, 0, 15)
    ],
    [
      "Elective",
      "Outline of Geophysics",
      new Date(2016, 8, 1),
      new Date(2017, 0, 15)
    ],
    [
      "General Compulsory",
      "C Programme Design",
      new Date(2017, 2, 1),
      new Date(2017, 6, 15)
    ],
    [
      "Subject Compulsory",
      "Zoology Practicum",
      new Date(2017, 6, 20),
      new Date(2017, 7, 1)
    ],
    [
      "General Compulsory",
      "Organic Chemistry",
      new Date(2017, 8, 1),
      new Date(2018, 0, 15)
    ],
    [
      "General Compulsory",
      "College Physics III 2",
      new Date(2017, 8, 1),
      new Date(2018, 0, 15)
    ],
    [
      "Subject Compulsory",
      "Botany",
      new Date(2017, 8, 1),
      new Date(2018, 0, 15)
    ],
    [
      "Subject Compulsory",
      "General Biochemistry II",
      new Date(2017, 8, 1),
      new Date(2018, 0, 15)
    ],
    [
      "Restricted Elective",
      "Animal Physiology",
      new Date(2017, 8, 1),
      new Date(2018, 0, 15)
    ],
    [
      "Restricted Elective",
      "Histology and Embryology",
      new Date(2017, 8, 1),
      new Date(2018, 0, 15)
    ],
    [
      "Restricted Elective",
      "Developmental Biology",
      new Date(2018, 2, 1),
      new Date(2018, 6, 15)
    ],
    [
      "Restricted Elective",
      "Bioinformatics",
      new Date(2018, 2, 1),
      new Date(2018, 6, 15)
    ],
    [
      "Restricted Elective",
      "Marine Ecology",
      new Date(2018, 2, 1),
      new Date(2018, 6, 15)
    ],
    [
      "Restricted Elective",
      "Marine Bio-Functional Materials",
      new Date(2018, 2, 1),
      new Date(2018, 6, 15)
    ],
    [
      "Elective",
      "Downsteam Technique of Bioengineering",
      new Date(2018, 2, 1),
      new Date(2018, 6, 15)
    ],
    [
      "Subject Compulsory",
      "Cell Biology",
      new Date(2018, 2, 1),
      new Date(2018, 6, 15)
    ],
    [
      "Subject Compulsory",
      "Biostatistics",
      new Date(2018, 2, 1),
      new Date(2018, 6, 15)
    ],
    [
      "Subject Compulsory",
      "Botany Practicum",
      new Date(2018, 7, 8),
      new Date(2018, 7, 20)
    ],
    [
      "Subject Compulsory",
      "Diving and Marine Sample Collection",
      new Date(2018, 7, 1),
      new Date(2018, 7, 6)
    ],
    [
      "Subject Compulsory",
      "Microbiology",
      new Date(2018, 8, 1),
      new Date(2019, 0, 15)
    ],
    [
      "Subject Compulsory",
      "Genetics",
      new Date(2018, 8, 1),
      new Date(2019, 0, 15)
    ],
    [
      "Subject Compulsory",
      "Marine Biology",
      new Date(2018, 8, 1),
      new Date(2019, 0, 15)
    ],
    [
      "Subject Compulsory",
      "Molecular Biology",
      new Date(2019, 2, 1),
      new Date(2019, 6, 15)
    ],
    [
      "Subject Compulsory",
      "Methodology of Scientific Research",
      new Date(2019, 2, 1),
      new Date(2019, 6, 15)
    ],
    [
      "Subject Compulsory",
      "Marine Biology and Oceanography Practicum",
      new Date(2019, 2, 20),
      new Date(2019, 2, 25)
    ],
    [
      "Restricted Elective",
      "Genomics",
      new Date(2019, 2, 1),
      new Date(2019, 6, 15)
    ],
    [
      "Elective",
      "Cathedra of Aquaculture Science and Technique",
      new Date(2019, 7, 6),
      new Date(2019, 7, 20)
    ],
    [
      "Elective",
      "Data Structure and Algorithm Analysis",
      new Date(2020, 2, 1),
      new Date(2020, 6, 15)
    ],
    [
      "Subject Compulsory",
      "Undergraduate Thesis",
      new Date(2019, 9, 15),
      new Date(2020, 4, 30)
    ],
  ]}
/>   
);
}

export const MSccoursetable = () => {
  return (
    <Chart
    width={'99.99%'}
    height={'250px'}
    chartType="Timeline"
    loader={<div>Loading Chart</div>}
    data={[
    [
      "Compulsory",
      "Advanced Algorithms and Data Structures",
      new Date(2020, 7, 31),
      new Date(2020, 10, 8)
    ],
    [
      "Compulsory",
      "Biological Sequence Analysis",
      new Date(2020, 7, 31),
      new Date(2020, 10, 8)
    ],
    [
      "Compulsory",
      "Machine Learning",
      new Date(2020, 10, 16),
      new Date(2021, 0, 31)
    ],
    [
      "Compulsory",
      "Structural Bioinformatics",
      new Date(2020, 10, 16),
      new Date(2021, 0, 31)
    ],
    [
      "Restricted Elective",
      "Numerical Optimization",
      new Date(2021, 1, 8),
      new Date(2021, 3, 18)
    ],
    [
      "Restricted Elective",
      "Data Science",
      new Date(2021, 1, 8),
      new Date()
    ],
    [
      "Elective",
      "Arctic Biology",
      new Date(2021, 3, 26),
      new Date()
    ],
  ]}
/>   
);
}
