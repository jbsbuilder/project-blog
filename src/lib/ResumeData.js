import { TicketOutline } from "flowbite-svelte-icons"

const skills = [
  {title:"Golang", description: "Fast APIs, Microservices"},
  {title:"Python", description: "Flask, Lambda, Data Analysis"},
  {title:"SQL, PostgreSQL", description: "PostgreSQL, DynamoDB"},
  {title:"Terraform", description: "VPCs, Severless apps, Jenkins IAC"},
  {title:"Git", description: "Github"},
]

const educations = [
  {title: 'Associates of General Studies', period: '2017.05'},
  {title: 'Bacholors of Criminology', period: '2019.05'},
]

const certificates = [
  {title: 'CompTIA A+', date:'2023.03'},
  {title: 'CompTIA Network+', date:'2023.08'},
  {title: 'CompTIA Security+', date: '2023.09'},
  {title: 'AWS Cloud Pracitioner', date: '2023.11'},
  {title: 'AWS Solutions Architect - Associate', date: '2024.02'}

]
const careers = [
  {title: 'not sure',
  period:'2021.06 ~ ',
  description: ['fill me in']}
]

const papers = [
  // AMA style
  {ref:'fill me in', doi: 'https://doi.org/10.3390/jpm14030316'},
  {ref:'Song MJ, Jang Y, Lee JH, et al. Association of Dexmedetomidine With New-Onset Atrial Fibrillation in Patients With Critical Illness. JAMA Netw Open. 2023;6(4):e239955.', doi:'https://doi.org/10.1001/jamanetworkopen.2023.9955'},
  {ref:'Moon JH, Jang Y, Oh TJ, Jung SY. The Risk of Type 2 Diabetes Mellitus according to Changes in Obesity Status in Late Middle-Aged Adults: A Nationwide Cohort Study of Korea. Diabetes Metab J. 2023;47(4):514-522.', doi:'https://doi.org/10.4093/dmj.2022.0159'},
  {ref:'Jang Y, You M, Park G, et al. Analysis of Communication Content on Bedside Rounds in a Hospital - Implications for Patient Centered Communication Qual Improv Health Care. 2023;29(1):43-57.', doi:'https://doi.org/10.14371/QIH.2023.29.1.43'},
  {ref:'Jung SY, Jang Y, Bae WK, Han JS. Changes of Body Mass Index and the Incidence of Hypertension in Late Middle Age: A Nationwide Cohort Study in South Korea. Korean J Health Promot 2022;22(4):175-182.', doi:'https://doi.org/10.15384/kjhp.2022.22.4.175'},
  {ref:'Jang Y, You M, Lee H, et al. Burnout and peritraumatic distress of healthcare workers in the COVID-19 pandemic. BMC Public Health 2021;21, 2075', doi:'https://doi.org/10.1186/s12889-021-11978-0'},
  {ref:'Jang Y, You M, Lee S, Lee W. Factors Associated With the Work Intention of Hospital Workers’ in South Korea During the Early Stages of the COVID-19 Outbreak. Disaster Medicine and Public Health Preparedness, 2021;15(3), E23-E30.', doi:'https://doi.org/10.1017/dmp.2020.221'},
]

const howIWork = [
  "How I work",
  "contract details if needed",
  "contract details if needed",
  "Job details needed",
  "job details needed",
]

export { skills, educations, certificates, papers, careers, howIWork }