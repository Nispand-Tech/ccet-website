import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import Header from "./components/header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./index.css";
import NoPage from "./pages/Nopage/NoPage.jsx";
import FAQ from "./pages/FAQ/faq";
import VisionMission from "./pages/vision-mission/vision-mission.jsx";
import Infrastructure from "./pages/infrastructure/infrastructure.jsx";
import Convocation from "./pages/Convocation/Convocation.jsx";
import AntiRagging from "./pages/Students-Section/Student-Welfare/Anti-Ragging/AntiRagging.jsx";
import AntiRaggingCommittee from "./pages/Students-Section/Student-Welfare/Anti-Ragging-Committee/AntiRaggingCommittee";
import Academicheads from "./pages/AcadmicHeads/Academicheads.jsx";
import Courses from "./pages/Courses/Courses.jsx";
import Principal from "./pages/Principal/Principal.jsx";
import AcademicProspectusPage from "./pages/Academic-Prospectus/AcademicProspectusPage.jsx";
import ContactUs from "./pages/ContactUs/ContactUs.jsx";
import NIRF from "./pages/NIRF/nirf.jsx";
import HelpDesk from "./pages/HelpDesk/HelpDesk.jsx";
import Examinations from "./pages/Examinations/Examinations.jsx";
import ECell from "./pages/ECell/ECell.jsx";
import SportsFacility from "./pages/Sports/SportsFacility.jsx";
import FitIndiaPage from "./pages/Students-Section/Academics/FitIndia/FitIndiaPage.jsx";
import Leet from "./pages/Degree-PU-LEET/Degree-pu-leet.jsx";
import Doctorate from "./pages/Doctorate/PhdProgrammes.jsx";
import Degree from "./pages/Degree/Degree.jsx";
import Tenders from "./pages/Tenders/Tenders.jsx";
import History from "./pages/History/History.jsx";
import RecentUpdates from "./pages/RecentUpdates.jsx";
import StudentChaptersandClubs from "./pages/StudentChaptersandClubs/StudentChaptersandClubs.jsx";
import NewsDetails from "./pages/Home/NewsDetails.jsx";
import EceOverview from "./pages/ECE-Department/ece-overview.jsx";
import ECE_Faculty from "./pages/ECE-Department/ece-faculty.jsx";
import EceLabs from "./pages/ECE-Department/ece-labs.jsx";
import CampusVirtualTour from "./pages/CampusVirtualTour.jsx";
import Classrooms from "./pages/Classrooms/Classrooms.jsx";

function App() {
  return (
    <HashRouter>
      <Routes>
        {/* Home */}
        <Route
          path="/"
          element={
            <>
              <Header />
              <Home />
              <Footer />
            </>
          }
        />

        {/* News Page */}
        <Route path="/news" element={<NewsDetails />} />

        {/* About Us */}
        <Route
          path="/about/academic-heads"
          element={
            <>
              <Header />
              <Academicheads />
              <Footer />
            </>
          }
        />
        <Route
          path="/about/principal"
          element={
            <>
              <Header />
              <Principal />
              <Footer />
            </>
          }
        />
        <Route
          path="/about/history"
          element={
            <>
              <Header />
              <History />
              <Footer />
            </>
          }
        />

        {/* Academics */}
        <Route
          path="/vision-mission"
          element={
            <>
              <Header />
              <VisionMission />
              <Footer />
            </>
          }
        />
        <Route
          path="/infrastructure"
          element={
            <>
              <Header />
              <Infrastructure />
              <Footer />
            </>
          }
        />
        <Route
  path="/life/virtual-tour"
  element={
    <>
      <Header />
      <CampusVirtualTour />
      <Footer />
    </>
  }
/>

        <Route
          path="/academics/nirf"
          element={
            <>
              <Header />
              <NIRF />
              <Footer />
            </>
          }
        />

        {/* Courses & Prospectus */}
        <Route
          path="/courses"
          element={
            <>
              <Header />
              <Courses />
              <Footer />
            </>
          }
        />
        <Route
  path="/classrooms"
  element={
    <>
      <Header />
      <Classrooms />
      <Footer />
    </>
  }
/>

        <Route
          path="/prospectus"
          element={
            <>
              <Header />
              <AcademicProspectusPage />
              <Footer />
            </>
          }
        />

        {/* Convocation */}
        <Route
          path="/convocation"
          element={
            <>
              <Header />
              <Convocation />
              <Footer />
            </>
          }
        />

        {/* Student Section */}
        <Route
          path="/anti-ragging"
          element={
            <>
              <Header />
              <AntiRagging />
              <Footer />
            </>
          }
        />
        <Route
          path="/anti-ragging-committee"
          element={
            <>
              <Header />
              <AntiRaggingCommittee />
              <Footer />
            </>
          }
        />
        <Route
          path="/fit-india"
          element={
            <>
              <Header />
              <FitIndiaPage />
              <Footer />
            </>
          }
        />
        <Route
          path="/student-chapters-clubs"
          element={<StudentChaptersandClubs />}
        />

        {/* Programmes */}
        <Route
          path="/programmes/pu-leet"
          element={
            <>
              <Header />
              <Leet />
              <Footer />
            </>
          }
        />
        <Route
          path="/programmes/phd"
          element={
            <>
              <Header />
              <Doctorate />
              <Footer />
            </>
          }
        />
        <Route
          path="/programmes/degree"
          element={
            <>
              <Header />
              <Degree />
              <Footer />
            </>
          }
        />

        {/* Other Sections */}
        <Route
          path="/examinations"
          element={
            <>
              <Header />
              <Examinations />
              <Footer />
            </>
          }
        />
        <Route
          path="/ecell"
          element={
            <>
              <Header />
              <ECell />
              <Footer />
            </>
          }
        />
        <Route
          path="/sports-facility"
          element={
            <>
              <Header />
              <SportsFacility />
              <Footer />
            </>
          }
        />
        <Route
          path="/notices/tenders"
          element={
            <>
              <Header />
              <Tenders />
              <Footer />
            </>
          }
        />
        <Route
          path="/recent-updates"
          element={
            <>
              <Header />
              <RecentUpdates />
              <Footer />
            </>
          }
        />

        {/* Contact & Help */}
        <Route
          path="/contact"
          element={
            <>
              <Header />
              <ContactUs />
              <Footer />
            </>
          }
        />
        <Route
          path="/helpdesk"
          element={
            <>
              <Header />
              <HelpDesk />
              <Footer />
            </>
          }
        />

        {/* FAQ */}
        <Route
          path="/faq"
          element={
            <>
              <Header />
              <FAQ />
              <Footer />
            </>
          }
        />

        {/* ECE Department */}
        <Route
          path="/ece"
          element={
            <>
              <Header />
              <EceOverview />
              <Footer />
            </>
          }
        />
        <Route
          path="/ece/ece-faculty"
          element={
            <>
              <Header />
              <ECE_Faculty />
              <Footer />
            </>
          }
        />
        <Route
          path="/ece/ece-labs"
          element={
            <>
              <Header />
              <EceLabs />
              <Footer />
            </>
          }
        />

        {/* Fallback */}
        <Route
          path="*"
          element={
            <>
              <Header />
              <NoPage />
              <Footer />
            </>
          }
        />
      </Routes>
    </HashRouter>
  );
}

export default App;
