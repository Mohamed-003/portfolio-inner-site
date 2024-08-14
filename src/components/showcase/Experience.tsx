import React from 'react';
import ResumeDownload from './ResumeDownload';

export interface ExperienceProps {}

const Experience: React.FC<ExperienceProps> = (props) => {
    return (
        <div className="site-page-content">
            <ResumeDownload />
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>Trusty Bytes</h1>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href={'https://www.trustybytes.com/'}
                        >
                            <h4>www.trustybytes.com</h4>
                        </a>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>Full Stack Developer </h3>
                        <b>
                            <p>Nov 2021 - Present · 3 yrs</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                {/* <p>
                    Targeted towards online content creators and streamers
                    looking to build a brand, Hover is the home of over 150K
                    users. Written in Typescript using React, React-Native,
                    Framer, Express, and Redux.
                </p> */}
                <br />
                <ul>
                    <li>
                        <p>
                        Led development of a high-performance e-commerce platform, boosting SEO rankings by 75% using React.js and Node.js.
                        </p>
                    </li>
                    <li>
                        <p>
                        Engineered an AI-driven aquaculture solution using Next.js and GraphQL, revolutionizing operations for fish and shrimp farmers.
                        </p>
                    </li>
                    <li>
                        <p>
                        Implemented Docker containerization and GitHub-based CI/CD pipeline for a digital signage management system, significantly improving deployment efficiency.
                        </p>
                    </li>
                    <li>
                        <p>
                        Designed and built a scalable restaurant management system, streamlining operations for 10-20 US-based restaurants.
                        </p>
                    </li>
                    <li>
                        <p>
                        Rescued a stalled Ed-Tech project, delivering a production-ready application within 2 weeks using React.js and Python.
                        </p>
                    </li>
                    <li>
                        <p>
                        Developed cloud-native applications leveraging AWS services including Lambda, S3, EC2, and Elastic Beanstalk.
                        </p>
                    </li>
                    <li>
                        <p>
                        Created a QR code-based marketing tool that increased client website traffic and social media engagement.
                        </p>
                    </li>
                    <li>
                        <p>
                        Demonstrated versatility across full-stack development, from frontend frameworks (React, Angular) to backend technologies (Node.js, Python, PHP).
                        </p>
                    </li>
                    
                </ul>
                <p>
                        <b>Skills:</b> JavaScript · Bootstrap (Framework) · Resource Planning · Vue.js · Express.js · Teamwork · MySQL · Amazon Web Services (AWS) · Communication · Docker · React.js · Problem Solving · Shell Scripting · Representational State Transfer (REST) · Server Side · Critical Thinking · SQL · Jest · Microservices · Version Control · Web Development · Flask · PostgreSQL · Presentation Skills · AWS Identity and Access Management (AWS IAM) · AngularJS · RESTful WebServices · Presentations · Web Solutions · React Native · Data Caching · Tailwind CSS · TypeScript · Content Management Systems (CMS) · REST APIs · Unit Testing · Cloud Computing · Webpack · Technical Proficiency · Code Review · Material-UI · Leadership · Elasticsearch · Responsive Web Design · Front-End Development · Web Applications · Analytical Skills
                        </p>
            </div>
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>Aquaconnect - Consultant</h1>
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href={'https://aquaconnect.blue/'}
                        >
                            <h4>www.aquaconnect.blue</h4>
                        </a>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>Full Stack Developer</h3>
                        <b>
                            <p>May 2024 - Jul 2024 · 3 mos</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                {/* <p>
                    Supervised and developed the front end of bracs.co, a
                    beautifully simple and effective bracket creation and
                    management engine. Written in Typescript using React and
                    deployed using AWS Elastic Beanstalk.
                </p> */}
                <br />
                <ul>
                    <li>
                        <p>
                        • Pioneered an innovative AI-driven aquaculture platform using Next.js, revolutionizing operations for shrimp and fish farmers.
                        </p>
                    </li>
                    <li>
                        <p>
                        • Implemented GraphQL for efficient data querying, optimizing data retrieval and reducing backend load in a complex aquaculture system. 
                        </p>
                    </li>
                    <li>
                        <p>
                        • Leveraged Recoil.js for state management, enhancing application performance and user experience in a data-intensive environment.
                        </p>
                    </li>
                    <li>
                        <p>
                        • Developed predictive analytics features using AI, enabling farmers to optimize feeding schedules and improve yield. 
                        </p>
                    </li>
                    <li>
                        <p>
                        • Created an intuitive dashboard for real-time monitoring of water quality parameters, leveraging Next.js for server-side rendering. 
                        </p>
                    </li>
                    <li>
                        <p>
                        • Implemented AI-based disease detection algorithms, significantly reducing crop losses in aquaculture farms.  
                        </p>
                    </li>
                    <li>
                        <p>
                        • Utilized Next.js API routes to create a seamless backend-frontend integration, improving overall system responsiveness.  
                        </p>
                    </li>
                    <li>
                        <p>
                        • Designed and developed a scalable architecture capable of handling data from multiple farm locations simultaneously.  
                        </p>
                    </li>
                   
                </ul>
                <p>
                        <b>Skills:</b> React.js · nodejs · recoil · GraphQL · Next.js · REST APIs
                        </p>
            </div>
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>Plateron - Consultant</h1>
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href={'https://www.plateron.com/'}
                        >
                            <h4>www.plateron.com</h4>
                        </a>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>Frontend Developer</h3>
                        <b>
                            <p>Oct 2022 - Jun 2023 · 9 mos</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                {/* <p>
                    Applied problem solving and technical skills to operate
                    large equipment such as rain machines, fog machines, small
                    explosives and general rigging with a professional crew of
                    50+ people.
                </p> */}
                <br />
                <ul>
                    <li>
                        <p>
                        • Architected a scalable React.js-based restaurant management system, driving operational efficiency for multiple US-based eateries.
                        </p>
                    </li>
                    <li>
                        <p>
                        • Leveraged TypeScript to enhance code quality and maintainability in a complex, multi-restaurant management platform.
                        </p>
                    </li>
                    <li>
                        <p>
                        • Implemented Redux for state management, ensuring seamless data flow across various modules of the restaurant system.
                        </p>
                    </li>
                    <li>
                        <p>
                        • Developed interactive data visualization components using Konva.js, providing restaurant owners with intuitive insights into their operations.

                        </p>
                    </li>
                    <li>
                        <p>
                        • Designed and built a user-friendly interface that simplified complex restaurant processes, improving staff productivity and customer service.
                        </p>
                    </li>
                    <li>
                        <p>
                        • Created a modular system architecture, allowing for easy customization and scalability to accommodate diverse restaurant needs.
                        </p>
                    </li>
                    <li>
                        <p>
                        • Implemented real-time features for order tracking and inventory management, enhancing operational transparency and efficiency.
                        </p>
                    </li>
                    
                    
                   
                </ul>
                <p>
                        <b>Skills:</b> JavaScript · SASS · Express.js · Teamwork · React.js · Problem Solving · Cascading Style Sheets (CSS) · Server Side · Critical Thinking · Microservices · Presentation Skills · HTML5 · Presentations · Web Solutions · Tailwind CSS · Unit Testing · Responsive Web Design · Web Applications
                        </p>

            </div>
        </div>
    );
};

const styles: StyleSheetCSS = {
    header: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '100%',
    },
    skillRow: {
        flex: 1,
        justifyContent: 'space-between',
    },
    skillName: {
        minWidth: 56,
    },
    skill: {
        flex: 1,
        padding: 8,
        alignItems: 'center',
    },
    progressBar: {
        flex: 1,
        background: 'red',
        marginLeft: 8,
        height: 8,
    },
    hoverLogo: {
        height: 32,
        marginBottom: 16,
    },
    headerContainer: {
        alignItems: 'flex-end',
        width: '100%',
        justifyContent: 'center',
    },
    hoverText: {
        marginBottom: 8,
    },
    indent: {
        marginLeft: 24,
    },
    headerRow: {
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    },
    row: {
        display: 'flex',
        justifyContent: 'space-between',
    },
};

export default Experience;
