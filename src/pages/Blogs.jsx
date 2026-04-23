import React, { useState } from "react";

const BlogPage = () => {
  const [showStudyAbroad, setShowStudyAbroad] = useState(false);
  const [showCreditTransfer, setShowCreditTransfer] = useState(false);

  const styles = {
    page: {
      maxWidth: "900px",
      margin: "0 auto",
      padding: "0px",
      fontFamily: "Futura, Trebuchet MS, Arial, sans-serif",
    },

    header: {
      textAlign: "center",
      marginBottom: "30px",
    },

    card: {
      background: "linear-gradient(135deg, #A020F0, #EDE8d0)",
      borderRadius: "20px",
      padding: "25px",
      marginBottom: "30px",
      boxShadow: "0 12px 30px rgba(0,0,0,0.2)",
    },

    title: {
      fontSize: "22px",
      fontWeight: "700",
      margin: "10px 0",
      color: "#ffffff",
    },

    meta: {
      color: "#e0e0e0",
      fontSize: "14px",
      marginBottom: "10px",
    },

    desc: {
      color: "#f5f5f5",
      fontSize: "15px",
      marginBottom: "15px",
    },

    readMore: {
      fontWeight: "600",
      cursor: "pointer",
      marginTop: "10px",
      color: "#ffffff",
      textDecoration: "underline",
    },

    sectionTitle: {
      fontSize: "18px",
      fontWeight: "600",
      marginTop: "15px",
      color: "#ffffff",
    },

    paragraph: {
      marginTop: "5px",
      color: "#ffffff",
      lineHeight: "1.6",
    },
  };

  return (
    <div
      style={{
        background: "linear-gradient(135deg, #faf7ff, #f7efe5)",
        minHeight: "100vh",
        padding: "40px 0",
      }}
    >
      <div style={styles.page}>
        {/* HEADER */}
        <div style={styles.header}>
          <h2>📝 Moin Consultancy Blog</h2>
          <p>Insights, guides, and expert advice to help you make informed decisions about your education and career journey.</p>
        </div>

        {/* ================= CARD 1 ================= */}
        <div style={styles.card}>
          <div style={{ fontSize: "28px" }}>🌍</div>

          <h3 style={styles.title}>
            Why Study Abroad? Top Reasons to Take the Leap
          </h3>
          <p style={styles.paragraph}>
          Studying abroad is more than just earning a degree — it's a transformative experience that shapes your career, personality, and worldview.
</p>
          <div style={styles.meta}>April 10, 2026 </div>


          <div
            style={styles.readMore}
            onClick={() => setShowStudyAbroad(!showStudyAbroad)}
          >
            {showStudyAbroad ? "Show Less ↑" : "Read More →"}
          </div>

          {showStudyAbroad && (
            <div>
              <h4 style={styles.sectionTitle}>1.World-Class Education & Global Recognition</h4>
              <p style={styles.paragraph}>
               Universities in the USA, UK, Canada, Australia, and Germany consistently rank among the best in the world. A degree from these institutions carries international weight and opens doors to top employers globally. You gain access to cutting-edge research, modern infrastructure, and faculty who are leaders in their fields.


              </p>

              <h4 style={styles.sectionTitle}>2. Career Opportunities & Higher Earning Potential</h4>
              <p style={styles.paragraph}>
            International graduates are highly sought after by multinational companies. Studying abroad gives you access to post-study work permits (like the UK's Graduate Route or Canada's PGWP), internships with global firms, and networking opportunities that simply aren't available back home. Statistics show that international graduates earn 25–40% more than their domestic counterparts over a lifetime.


               
              </p>
              <h4 style={styles.sectionTitle}>3. Personal Growth & Independence</h4>
              <p style={styles.paragraph}>
                Living in a new country pushes you out of your comfort zone. You learn to manage finances, cook, navigate public transport, and solve problems independently. These life skills make you resilient, adaptable, and confident — qualities every employer values.
               
              </p>
              <h4 style={styles.sectionTitle}>
                4. Cultural Exposure & Global Network
              </h4>
              <p style={styles.paragraph}>
                You'll meet people from dozens of countries, experience new traditions, and develop a truly global perspective. This cultural intelligence is increasingly important in today's interconnected world. The friendships and professional connections you build abroad often last a lifetime.
               
              </p>
              <h4 style={styles.sectionTitle}>5. Pathway to Permanent Residency</h4>
              <p style={styles.paragraph}>
               Many countries offer immigration pathways for international students. Canada's Express Entry, Australia's Skilled Migration, and Germany's Job Seeker Visa all favor graduates who studied locally. Studying abroad can be your first step toward building a life in a new country.


              </p>
              <h4 style={styles.sectionTitle}>6. Scholarship & Financial Aid Opportunities</h4>
              <p style={styles.paragraph}>
               Contrary to popular belief, studying abroad can be affordable. Many universities offer merit-based scholarships, teaching assistantships, and need-based aid for international students. Countries like Germany and Norway offer tuition-free or low-cost education at public universities.


              </p>
               <h4 style={styles.sectionTitle}>How Moin Consultancy Helps</h4>
              <p style={styles.paragraph}>
               At Moin Consultancy, we guide you through every step — from shortlisting universities and crafting compelling SOPs to visa applications and pre-departure orientation. Our expert counsellors have helped hundreds of students achieve their study abroad dreams across 15+ countries.
              </p>
               
               
             
            </div>
          )}
        </div>

        {/* ================= CARD 2 ================= */}
        <div style={styles.card}>
          <div style={{ fontSize: "28px" }}>🎓</div>

          <h3 style={styles.title}>
            Credit Transfer Programs: Complete Your Degree Abroad
          </h3>

          <div style={styles.meta}>April 5, 2026 </div>

          <p style={styles.desc}>
           Already started your degree in India? Credit transfer programs let you complete your education at a top international university without starting over.
          </p>

          <div
            style={styles.readMore}
            onClick={() => setShowCreditTransfer(!showCreditTransfer)}
          >
            {showCreditTransfer ? "Show Less ↑" : "Read More →"}
          </div>

          {showCreditTransfer && (
            <div>
              <h4 style={styles.sectionTitle}>
                What is a Credit Transfer Program?
              </h4>
              <p style={styles.paragraph}>
                A credit transfer program allows students to transfer academic credits earned at one institution to another — typically from an Indian university to an international one. This means you can complete part of your degree at home and finish the remaining semesters abroad, saving both time and money while earning a globally recognized qualification.
                </p>

              <h4 style={styles.sectionTitle}> How Does It Work?   </h4>
              <p style={styles.paragraph}>
               The process involves evaluating your existing coursework against the curriculum of the target university. Credits for subjects that match or are equivalent get transferred, and you only need to complete the remaining courses abroad. Most programs require a minimum GPA (usually 2.5–3.0 on a 4.0 scale) and course-by-course evaluation by the receiving institution.
              </p>
               <h4 style={styles.sectionTitle}>Popular Destinations for Credit Transfer</h4>
              <p style={styles.paragraph}>
               The USA, Canada, UK, and Australia are the most popular destinations for credit transfers. American universities are especially flexible, with many state universities actively accepting transfer students. Canadian colleges and universities also have well-established credit transfer frameworks, particularly in provinces like British Columbia and Ontario.
              </p>
               <h4 style={styles.sectionTitle}>Benefits of Credit Transfer Programs</h4>
              <p style={styles.paragraph}>
                The biggest advantage is cost savings — you pay domestic tuition for the initial semesters and international tuition only for the remaining period. You also save on living expenses abroad. Additionally, you gain international exposure and a degree from a recognized foreign university, which significantly boosts your employability and immigration prospects.
               
              </p>
               <h4 style={styles.sectionTitle}>Who is Eligible?</h4>
              <p style={styles.paragraph}>
               Students currently enrolled in or having completed 1–2 years of a bachelor's or master's degree program are ideal candidates. You'll need official transcripts, course descriptions (syllabus), proof of English proficiency (IELTS/TOEFL), and sometimes a letter from your current institution. Some universities also accept credits from diploma programs
              </p>
               <h4 style={styles.sectionTitle}>Common Challenges & How to Overcome Them</h4>
              <p style={styles.paragraph}>
               Not all credits may transfer — some courses might not have equivalents at the target university. Accreditation differences between countries can also complicate the process. Working with experienced consultants like Moin Consultancy ensures your credits are evaluated properly and you're matched with universities that maximize your transferable credits.
              </p>
               <h4 style={styles.sectionTitle}>Step-by-Step Process with Moin Consultancy</h4>
              <p style={styles.paragraph}>
               Our team handles the entire credit transfer journey: (1) We evaluate your transcripts and identify transferable credits, (2) We shortlist universities with the best credit acceptance rates, (3) We prepare your application with detailed course descriptions, (4) We assist with visa processing and pre-departure support. Our success rate for credit transfers exceeds 90%.


              </p>


              
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;