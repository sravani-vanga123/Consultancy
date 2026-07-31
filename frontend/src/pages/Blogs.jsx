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

   ulstyles:{
  color:"white",
}
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
          <h2> Moin Consultancy Blog</h2>
          <p>Insights, guides, and expert advice to help you make informed decisions about your education and career journey.</p>
        </div>

        {/* ================= CARD 1 ================= */}
        <div style={styles.card}>
          <div style={{ fontSize: "28px" }}> </div>

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
          <div style={{ fontSize: "28px" }}></div>

          <h3 style={styles.title}>
            Credit Transfer Program for Engineering Students (As per UGC Guidelines) 
          </h3>

          <div style={styles.meta}>April 5, 2026 </div>

          

          <div
            style={styles.readMore}
            onClick={() => setShowCreditTransfer(!showCreditTransfer)}
          >
            {showCreditTransfer ? "Show Less ↑" : "Read More →"}
          </div>

          {showCreditTransfer && (
            <div>
             
              <p style={styles.paragraph}>
               At Moin Consultancy, we offer a structured Credit Transfer Program for engineering students in India, aligned with UGC regulations and academic standards. This pathway allows students pursuing B.Tech/BE programs to transfer eligible academic credits and continue their education at recognized institutions in India or abroad—without losing academic progress.
               </p>

              
               
            <p style={styles.paragraph}>
              As per UGC guidelines under the Choice Based Credit System (CBCS) and Academic Bank of Credits (ABC), students can accumulate and transfer credits between approved institutions, provided equivalence and accreditation criteria are met. This ensures a flexible, transparent, and student-centric academic journey.
            </p>
            
               
              
              
<h4 style={styles.sectionTitle}>
  Key Benefits
</h4>
<ul style={styles.ulstyles}>
  <li>Continue your engineering degree without restarting</li>
  <li>Transfer credits through UGC-recognized frameworks (ABC/CBCS)</li>
  <li>Save time and reduce academic duplication</li>
  <li>Access national and international academic pathways</li>
  <li>Enhance career prospects with recognized qualifications</li>
</ul>

<h4 style={styles.sectionTitle}>
Our Support
</h4>

            <p style={styles.paragraph}>

At Moin Consultancy, we ensure your credit transfer process is compliant and smooth:</p>
<ul style={styles.ulstyles}>
  <li>Academic profile evaluation as per UGC norms</li>
  <li>Mapping of subjects and credit equivalence</li>
  <li>University shortlisting (India & Abroad)</li>
  <li>Documentation and application support</li>
  <li>Guidance on credit transfer through ABC portal</li>
  <li>Visa and transition support for international transfers</li>
</ul>
<h4 style={styles.sectionTitle}>
            Build Your Engineering Career with Flexibility  </h4>


    <p style={styles.paragraph}>



            With the right guidance and compliance, credit transfer becomes a smart and efficient route to complete your engineering degree while exploring broader academic opportunities.
           </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;