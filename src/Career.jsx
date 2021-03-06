import { Component } from "react";
import Card from "./Card";
import Footer from "./Footer";
//const { Performance } = require("w3c-hr-time");
//const performance=new Performance();

class Career extends Component {
  constructor(props) {
    super(props);

    if (props.languageCode === "en-US") {
      this.state = {
        languageCode: "en-US",
        title: "Career",
        header: "Occupancy Job For ",
        jobDescriptionsHeader: "Job Description",
        Apply: "Apply for this job",

        careerSummary: "Empowering, upgrade, and build yourself with our experienced team to develop Indonesia together. Join our ship and sail ourself together to chase the stars and reach the bright future with us.",
        cards: [
          // {
          //   code: "IES",
          //   title: "IT Engineer Senior",
          //   text1: "Some quick example text to build on the card title and make up the bulk of the card's content.",
          //   imgsrc: "Pictures/Pictures19.jpg",
          //   linkSourceText: "Detail",
          //   createdAt: "2022-02-02T10:23:59.000Z",
          //   expiredAt: "2022-04-03T12:59:59.000Z",
          //   enabled: true,
          //   vacancy: 25,
          //   requirements: [
          //     "Experience in using at least one of these JAVA, C, Spring Framework, JPA, Oracle, MySQL",
          //     "Experience developing Package Solution such as Temenos Transact, Oracle Flexcube, Finastra Fusion, etc)",
          //     "Experience in customer requirements analysis and project implementation",
          //     "Experience in core banking and finance SI",
          //     "Application Architecture and MSA design/develop",
          //   ],
          //   job_description: [
          //     "Package Customizing Corebanking, Payment Gateway, Integrate Digital Sector, Banking Terminal",
          //     "Work Specialization Customizing General Management (Purchase Management Only), IT Operation Management (ITSM Service), Credit Card System, Digital Contact Management (AML/FDS)",
          //     "In-house (Information System, Credit Synthesis System, General Management, Core Banking (Swamitra))",
          //   ],
          // },
          {
            code: "IIS",
            title: "IT Infrastructure Senior",
            text1:
              "Some quick example text to build on the card title and make up the bulk of the card's content.",
            imgsrc: "Pictures/presentation_woman.jpg",
            linkSourceText: "Detail",
            createdAt: "2021-11-08T10:22:43.819Z",
            expiredAt: "2022-05-13T10:22:43.819Z",
            expired: "Expired date ",
            enabled: true,
            vacancy: 10,
            requirements: [
              "New Server Configuration (I/O and file system design, environment configuration)",
              "Storage allocation, network configuration, DB link, Security vulnerability",
              "System AS-IS analaysis, construction plan, implementation plan, establishing test plan",
            ],
            job_description: [
              "Infrastructure (Transportation, IT Operation Management (Security Control S/W), Banking Terminal, Infrastructure S/W, Integrated Authentification/Authority Management",
            ],
          },
          {
            code: "IEJ",
            title: "IT Engineer Junior",
            text1:
              "Some quick example text to build on the card title and make up the bulk of the card's content.",
            imgsrc: "Pictures/Pictures11.jpg",
            linkSourceText: "Detail",
            createdAt: "2022-03-29T10:22:43.819Z",
            expiredAt: "2022-10-03T10:22:43.819Z",
            expired: "Expired date ",
            enabled: true,
            vacancy: 20,
            requirements: [
              "Experience in using at least one of these JAVA, C, Spring Framework, JPA, Oracle, MySQL",
              "Experience developing Package Solution such as (Temenos Transact, Oracle Flexcube, Finastra Fusion, etc)",
              "Experience in customer requirements analysis and project implementation",
              "Experience in core banking and finance SI",
              "Application Architecture and MSA design/develop",
            ],
            job_description: [
              "Package Customizing Corebanking, Payment Gateway, Integrate Digital Sector, Banking Terminal",
              "Work Specialization Customizing General Management (Purchase Management Only), IT Operation Management (ITSM Service), Credit Card System, Digital Contact Management (AML/FDS)",
              "In-house (Information System, Credit Synthesis System, General Management, Core Banking (Swamitra))",
            ],
          },
          {
            code: "IIJ",
            title: "IT Infrastructure Junior",
            text1:
              "Some quick example text to build on the card title and make up the bulk of the card's content.",
            imgsrc: "Pictures/Picture8.jpg",
            linkSourceText: "Detail",
            createdAt: "2020-10-10T10:22:43.819Z",
            expiredAt: "2022-09-15T10:22:43.819Z",
            expired: "Expired date ",
            enabled: true,
            vacancy: 15,
            requirements: [
              "New Server Configuration (I/O and file system design, environment configuration)",
              "Storage allocation, network configuration, DB link, Security vulnerability",
              "System AS-IS analaysis, construction plan, implementation plan, establishing test plan",
            ],
            job_description: [
              "Infrastructure (Transportation, IT Operation Management (Security Control S/W), Banking Terminal, Infrastructure S/W, Integrated Authentification/Authority Management ",
            ],
          },
        ],
      };
    } else if (props.languageCode === "id-ID") {
      this.state = {
        languageCode: "id-ID",
        RequirementHeader: "Persyaratan untuk pekerjaan ini :",
        Apply: "Lamar sekarang",
        jobDescriptionsHeader: "Deskripsi Pekerjaan",
        careerSummary: "Berdayakan, tingkatkan, dan bangun diri Anda dengan tim kami yang berpengalaman untuk membangun Indonesia bersama. Bergabunglah dengan kapal kami dan berlayarlah bersama untuk mengejar bintang dan meraih masa depan yang cerah bersama kami.",
        title: "Karir",
        header: "Lowongan Pekerjaan Untuk",
        cards: [
          // {
          // //   code: "IES",
          // //   title: "IT Engineer Senior",
          // //   text1:
          // //     "Some quick example text to build on the card title and make up the bulk of the card's content.",
          // //   imgsrc: "Pictures/Pictures19.jpg",
          // //   linkSourceText: "Detail",
          // //   createdAt: "2022-02-02T10:23:59.000Z",
          // //   expiredAt: "2022-04-03T12:59:59.000Z",
          // //   enabled: true,
          // //   vacancy: 25,
          // //   requirements: [
          // //     "Experience in using at least one of these JAVA, C, Spring Framework, JPA, Oracle, MySQL",
          // //     "Experience developing Package Solution such as Temenos Transact, Oracle Flexcube, Finastra Fusion, etc)",
          // //     "Experience in customer requirements analysis and project implementation",
          // //     "Experience in core banking and finance SI",
          // //     "Application Architecture and MSA design/develop",
          // //   ],
          // //   job_description: [
          // //     "Package Customizing Corebanking, Payment Gateway, Integrate Digital Sector, Banking Terminal",
          // //     "Work Specialization Customizing General Management (Purchase Management Only), IT Operation Management (ITSM Service), Credit Card System, Digital Contact Management (AML/FDS)",
          // //     "In-house (Information System, Credit Synthesis System, General Management, Core Banking (Swamitra))",
          // //   ],
          // // },
          {
            code: "IIS",
            title: "IT Infrastructure Senior",
            text1:
              "Some quick example text to build on the card title and make up the bulk of the card's content.",
            imgsrc: "Pictures/presentation_woman.jpg",
            linkSourceText: "Detail",
            createdAt: "2021-11-08T10:22:43.819Z",
            expiredAt: "2022-05-13T10:22:43.819Z",
            expired: "Berakhir pada ",
            enabled: true,
            vacancy: 10,
            "requirements": [
              "Konfigurasi Server Baru (I/O dan desain sistem file, konfigurasi sarana prasarana TI))",
              "Alokasi penyimpanan, konfigurasi jaringan, DB Link, Kerentanan keamanan",
              "Analisis AS-IS sistem, rencana konstruksi, rencana implementasi, penetapan rencana pengujian"
            ],
            "job_description": ["Infrastruktur (Transportasi, Manajemen Operasi TI (Kontrol Keamanan S/W), Terminal Perbankan, Infrastruktur S/W, Otentikasi Terintegrasi/Manajemen Otoritas"],
          },
          {
            code: "IEJ",
            title: "IT Engineer Junior",
            text1:
              "Some quick example text to build on the card title and make up the bulk of the card's content.",
            imgsrc: "Pictures/Pictures11.jpg",
            linkSourceText: "Detail",
            createdAt: "2022-03-29T10:22:43.819Z",
            expiredAt: "2022-10-03T10:22:43.819Z",
            expired: "Berakhir pada ",
            enabled: true,
            vacancy: 20,
            requirements: [
              "Pengalaman dalam menggunakan setidaknya salah satu dari JAVA, C, Spring Framework, JPA, Oracle, MySQLIntegrated Autentification/Authority Management",
              "Pengalaman mengembangkan Package Solution seperti (Temenos Transact, Oracle Flexcube, Finastra Fusion, dll)",
              "Pengalaman dalam analisis kebutuhan pelanggan dan implementasi proyek",
              "Pengalaman di perbankan inti dan keuangan Analisis persyaratan dan implementasi proyek",
              "Arsitektur Aplikasi dan desain/pengembangan MSA"
            ],
            job_description: [
              "Paket Menyesuaikan Corebanking, Gateway Pembayaran, Integrasi Sektor Digital, Terminal Perbankan",
              "Work Specialization Customizing General Management (Purchase Management Only), IT Operation Management (ITSM Service), Credit Card System, Digital Contact Management (AML/FDS)",
              "In-house (Sistem Informasi, Sistem Sintesis Kredit, Manajemen Umum, Core Banking (Swamitra))"
            ],
          },
          {
            code: "IIJ",
            title: "IT Infrastructure Junior",
            text1:
              "Some quick example text to build on the card title and make up the bulk of the card's content.",
            imgsrc: "Pictures/Picture8.jpg",
            linkSourceText: "Detail",
            createdAt: "2020-10-10T10:22:43.819Z",
            expiredAt: "2022-09-15T10:22:43.819Z",
            expired: "Berakhir pada ",
            enabled: true,
            vacancy: 15,
            requirements: [
              "Konfigurasi Server Baru (I/O dan desain sistem file, konfigurasi lingkungan)",
              "Alokasi penyimpanan, konfigurasi jaringan, tautan DB, Kerentanan keamanan",
              "Analisis AS-IS sistem, rencana konstruksi, rencana implementasi, penetapan rencana pengujian"
            ],
            job_description: ["Infrastruktur (Transportasi, Manajemen Operasi TI (Security Control S/W), Terminal Perbankan, Infrastruktur S/W, Manajemen Otentikasi/Otoritas Terintegrasi "],
          },
        ],
      };
    } else if (props.languageCode === "ko-KR") {
      this.state = {
        languageCode: "ko-KR",
        title: "??????",
        header: "??? ?????? ?????? ??????",
        jobDescriptionsHeader: "?????? ?????????",
        Apply: "??? ????????? ??????",
        RequirementHeader: "??? ????????? ?????? ?????? ?????? :",
        careerSummary: "????????? ????????? ?????? ?????? ????????? ???????????? ????????????????????? ???????????? ?????????????????? ?????? ?????????????????????. ?????? ?????? ???????????? ?????? ???????????? ?????? ?????? ????????? ?????? ?????? ????????? ??????????????????.",
        cards: [
          // {
          //   code: "IES",
          //   title: "IT Engineer Senior",
          //   text1:
          //     "Some quick example text to build on the card title and make up the bulk of the card's content.",
          //   imgsrc: "Pictures/Pictures19.jpg",
          //   linkSourceText: "?????? ??????",
          //   createdAt: "2022-02-02T10:23:59.000Z",
          //   expiredAt: "2022-04-03T12:59:59.000Z",
          //   enabled: true,
          //   vacancy: 25,
          //   requirements: [
          //     "Experience in using at least one of these JAVA, C, Spring Framework, JPA, Oracle, MySQL",
          //     "Experience developing Package Solution such as Temenos Transact, Oracle Flexcube, Finastra Fusion, etc)",
          //     "Experience in customer requirements analysis and project implementation",
          //     "Experience in core banking and finance SI",
          //     "Application Architecture and MSA design/develop",
          //   ],
          //   job_description: [
          //     "Package Customizing Corebanking, Payment Gateway, Integrate Digital Sector, Banking Terminal",
          //     "Work Specialization Customizing General Management (Purchase Management Only), IT Operation Management (ITSM Service), Credit Card System, Digital Contact Management (AML/FDS)",
          //     "In-house (Information System, Credit Synthesis System, General Management, Core Banking (Swamitra))",
          //   ],
          // },
          {
            code: "IIS",
            title: "IT Infrastructure Senior",
            text1:
              "Some quick example text to build on the card title and make up the bulk of the card's content.",
            imgsrc: "Pictures/presentation_woman.jpg",
            linkSourceText: "?????? ??????",
            createdAt: "2021-11-08T10:22:43.819Z",
            expiredAt: "2022-05-13T10:22:43.819Z",
            expired: "?????? ??????",
            enabled: true,
            vacancy: 10,
            requirements: ["??? ?????? ??????(I/O ??? ?????? ????????? ??????, ?????? ??????)", "????????? ??????, ???????????? ??????, DB ??????, ?????? ?????????", "????????? AS-IS ??????, ?????? ??????, ?????? ??????, ????????? ?????? ??????"],
            job_description: ["?????????(??????, IT ????????????(???????????? S/W), ???????????????, ????????? S/W, ????????????/????????????"],
          },
          {
            code: "IEJ",
            title: "IT Engineer Junior",
            text1:
              "Some quick example text to build on the card title and make up the bulk of the card's content.",
            imgsrc: "Pictures/Pictures11.jpg",
            linkSourceText: "?????? ??????",
            createdAt: "2022-03-29T10:22:43.819Z",
            expiredAt: "2022-10-03T10:22:43.819Z",
            expired: "?????? ??????",
            enabled: true,
            vacancy: 20,
            requirements: [
              "JAVA, C, Spring Framework, JPA, Oracle, MySQL ??? ?????? ?????? ?????? ??????",
              "(Temenos Transact, Oracle Flexcube, Finastra Fusion ???) Package Solution ?????? ??????",
              "?????? ?????? ?????? ?????? ??? ???????????? ?????? ??????",
              "???????????? ??? ?????? SI ??????",
              "?????????????????? ???????????? ??? MSA ??????/??????"
            ],
            job_description: [
              "Corebanking, ?????? ???????????????, ?????? ????????? ??????, ?????? ???????????? ????????? ???????????? ?????????",
              "????????????(???????????????), IT????????????(ITSM ?????????), ?????????????????????, ????????????????????????(AML/FDS) ?????????????????? ???????????????",
              "??????(???????????????, ?????????????????????, ????????????, ????????????(Swamitra))"
            ],
          },
          {
            code: "IIJ",
            title: "IT Infrastructure Junior",
            text1:
              "Some quick example text to build on the card title and make up the bulk of the card's content.",
            imgsrc: "Pictures/Picture8.jpg",
            linkSourceText: "?????? ??????",
            createdAt: "2020-10-10T10:22:43.819Z",
            expiredAt: "2022-09-15T10:22:43.819Z",
            expired: "?????? ?????? ",
            enabled: true,
            vacancy: 15,
            requirements: [
              "??? ?????? ??????(I/O ??? ?????? ????????? ??????, ?????? ??????)",
              "????????? ??????, ???????????? ??????, DB ??????, ?????? ?????????",
              "????????? AS-IS ??????, ?????? ??????, ?????? ??????, ????????? ?????? ??????"
            ],
            job_description: [
              "?????????(??????, IT ????????????(???????????? S/W), ???????????????, ????????? S/W, ????????????/???????????? "
            ]
          },
        ],
      };
    }
  }

  changeLanguage = (val) => {
    this.props.changeLanguage(val);
  };
  componentWillUnmount() { }

  onLanguageClick = (value) => {
    this.setState(
      {
        languageCode: value,
      },
      () => {
        this.changeLanguage(this.state.languageCode);
      }
    );
  };

  componentDidUpdate() {
    fetch("./careerData.json")
      .then((response) => response.json())
      .then((result) => {
        for (var i = 0; i < result.length; i++) {
          var obj = result[i];

          if (obj.languageCode === this.props.languageCode) {
            //console.log(obj.languageCode);
            var cardsFinal = [];
            for (var j = 0; j < obj.cards.length; j++) {
              var cardObserved = obj.cards[j];

              var dateCards = new Date(cardObserved.expiredAt);
              var dateNow = Date.now();

              if (dateCards[Symbol.toPrimitive]("number") > dateNow) {
                cardsFinal.push(cardObserved);
                //console.log(cardsFinal);
              }
            }

            this.setState({
              languageCode: obj.languageCode,
              title: obj.title,
              linkSourceText: obj.linkSourceText,
              careerSummary: obj.careerSummary,
              cards: cardsFinal,
            });
            //console.log(performance.timeOrigin);
            break;
          }
        }
        //console.log(date.toLocaleTimeString());
        // console.log(this.state.text1);
      });
  }

  render() {
    return (
      <>
        <section id="career">
          <div className="container">
            <div style={{ marginTop: 50 }}>
              <div className="my-5" style={{ color: "rgb(255, 188, 0)" }}>
                <h1 className="text-center">{this.state.title}</h1>
              </div>
              <div className="my-3" style={{ marginLeft: "5rem", marginRight: "5rem" }}>
                <p style={{ fontSize: 18, textAlign: "center" }}>{this.state.careerSummary}</p>
              </div>
              <div className="col-11 mx-auto">
                <div className="row gy-4">
                  {this.state.cards.map((card) => (
                    <Card

                      code={card.code}
                      key={card.code}
                      title={card.title}
                      imgsrc={card.imgsrc}
                      text1={card.expiredAt}
                      expired={card.expired}
                      linkSourceText={card.linkSourceText}
                      languageCode={this.state.languageCode}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </>
    );
  }
}

export default Career;
