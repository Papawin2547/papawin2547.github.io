// English is the source copy. Keep project names, brands, and specialist terms unchanged.
(() => {
    const textTranslations = new Map([
        // Hero and About
        [`Hello, I'm`, `สวัสดีครับ ผมคือ`],
        [`I am glad you came to see my Portfolio.`, `ยินดีที่คุณเข้ามาชม Portfolio ของผม`],
        [`About Me`, `เกี่ยวกับผม`],
        [`My Projects`, `ผลงานของผม`],
        [`Scroll down`, `เลื่อนลง`],
        [`to see projects`, `เพื่อดูผลงาน`],
        [`Mr. Papawin Namchue`, `นายปภาวินท์ นามซื่อ`],
        [`Hi, I'm Papawin Namchue (Tonoak), a Product Designer passionate about crafting web, app, and game interfaces. Currently studying Multimedia Technology and Animation at Mae Fah Luang University, I create digital experiences using Figma backed by front-end foundations in HTML, CSS, and JavaScript.`, `สวัสดีครับ ผมปภาวินท์ นามซื่อ (Tonoak) เป็น Product Designer ที่สนใจออกแบบอินเทอร์เฟซสำหรับเว็บไซต์ แอป และเกม ปัจจุบันกำลังศึกษา Multimedia Technology and Animation ที่ Mae Fah Luang University ผมออกแบบประสบการณ์ดิจิทัลด้วย Figma และมีพื้นฐาน Front-end ใน HTML, CSS และ JavaScript`],
        [`Education`, `การศึกษา`],
        [`Science and Mathematics Plus program`, `โครงการวิทยาศาสตร์และคณิตศาสตร์ Plus`],
        [`Core Competencies`, `ทักษะหลัก`],
        [`Design Tools`, `เครื่องมือออกแบบ`],
        [`Programming & Dev Tools`, `เครื่องมือเขียนโปรแกรมและพัฒนา`],
        [`AI & Other Technologies`, `AI และเทคโนโลยีอื่น ๆ`],
        [`Soft Skills`, `ทักษะการทำงานร่วมกับผู้อื่น`],
        [`Communication`, `การสื่อสาร`],
        [`Problem Solving`, `การแก้ปัญหา`],
        [`Teamwork`, `การทำงานเป็นทีม`],
        [`Critical Thinking`, `การคิดอย่างมีวิจารณญาณ`],
        [`Languages`, `ภาษา`],
        [`Thai (Native)`, `ไทย (ภาษาแม่)`],
        [`English (Intermediate)`, `อังกฤษ (ระดับกลาง)`],

        // Shared project labels
        [`Timeline:`, `ช่วงเวลา:`],
        [`Jan 2026 – Present`, `ม.ค. 2026 – ปัจจุบัน`],
        [`Overview`, `ภาพรวม`],
        [`Overview:`, `ภาพรวม:`],
        [`The Challenge & Solution`, `ปัญหาและแนวทางแก้ไข`],
        [`Research & Impact`, `การวิจัยและผลลัพธ์`],
        [`Key Responsibilities`, `หน้าที่หลัก`],
        [`My Role & Responsibilities`, `บทบาทและหน้าที่ของผม`],
        [`Key Features`, `ฟีเจอร์หลัก`],
        [`View Project`, `ดูผลงาน`],
        [`View`, `ดูรายละเอียด`],

        // LearningHaus
        [`Interactive E-Learning & Course Creation Platform`, `แพลตฟอร์ม E-Learning แบบอินเทอร์แอกทีฟสำหรับสร้างคอร์ส`],
        [`Designed a versatile, gamified educational web platform that empowers educators, creators, and institutions to upload their own content and transform traditional lessons into interactive learning experiences.`, `ออกแบบแพลตฟอร์มการเรียนรู้ออนไลน์ที่ใช้ Gamification เพื่อให้ผู้สอน ผู้สร้างเนื้อหา และสถาบันอัปโหลดบทเรียนของตนเอง และเปลี่ยนการเรียนแบบเดิมให้เป็นประสบการณ์ที่มีส่วนร่วมมากขึ้น`],
        [`Traditional online learning often suffers from low engagement and passive consumption, while course creators struggle to make their content exciting. Learninghaus solves this by providing a centralized hub where creators can easily integrate gamified elements such as scenario-based challenges, instant feedback, and progression levels into their curriculum, making complex topics accessible and engaging for learners.`, `การเรียนออนไลน์แบบเดิมมักขาดการมีส่วนร่วม ขณะที่ผู้สร้างคอร์สก็ทำให้เนื้อหาน่าสนใจได้ยาก LearningHaus จึงเป็นศูนย์กลางที่ช่วยเพิ่มองค์ประกอบแบบเกม เช่น โจทย์ตามสถานการณ์ Feedback ทันที และระบบเลเวลลงในบทเรียน ทำให้เนื้อหาซับซ้อนเข้าใจง่ายและชวนเรียนยิ่งขึ้น`],
        [`Conducted quantitative UX research (n=33) to validate the platform’s core concept. The gamified approach was highly successful, with 87.9% of surveyed users confirming that the interactive format significantly improved their motivation and ability to understand complex topics compared to standard learning methods.`, `ทำ UX Research เชิงปริมาณกับผู้ใช้ 33 คนเพื่อตรวจสอบแนวคิดหลักของแพลตฟอร์ม โดย 87.9% ของผู้ตอบแบบสำรวจระบุว่ารูปแบบการเรียนแบบมีปฏิสัมพันธ์ช่วยเพิ่มแรงจูงใจและความเข้าใจเรื่องซับซ้อนได้ดีกว่าวิธีเรียนทั่วไป`],
        [`Led the end-to-end product design lifecycle. Defined core concepts and user personas, mapped out complex user flows for both "Learners" and "Content Creators," and designed high-fidelity prototypes in Figma. Currently bridging design and development by overseeing the front-end and back-end implementation.`, `ดูแลกระบวนการออกแบบผลิตภัณฑ์ตั้งแต่ต้นจนจบ กำหนดแนวคิดหลักและ User Persona วาง User Flow สำหรับทั้งผู้เรียนและผู้สร้างเนื้อหา และออกแบบ Prototype ความละเอียดสูงใน Figma ปัจจุบันยังประสานงานระหว่างงานออกแบบกับการพัฒนา Front-end และ Back-end`],
        [`Process`, `กระบวนการ`],
        [`Target Audience & User Persona`, `กลุ่มเป้าหมายและ User Persona`],
        [`Developed detailed User Personas to clearly define target users, ensuring the platform's features and overall experience align directly with real user behaviors and needs.`, `สร้าง User Persona อย่างละเอียดเพื่อกำหนดกลุ่มผู้ใช้เป้าหมายให้ชัดเจน และทำให้ฟีเจอร์กับประสบการณ์ของแพลตฟอร์มสอดคล้องกับพฤติกรรมและความต้องการจริงของผู้ใช้`],
        [`Information Architecture & User Flow`, `Information Architecture และ User Flow`],
        [`Mapped out comprehensive user flows to strategically plan the project's structure. This involved defining entry points, decision pathways, and outcomes to build a logical and seamless user journey.`, `วาง User Flow ครอบคลุมทั้งจุดเริ่มต้น เส้นทางการตัดสินใจ และผลลัพธ์ เพื่อนำมาออกแบบโครงสร้างโปรเจกต์และสร้างเส้นทางใช้งานที่ต่อเนื่องและเข้าใจง่าย`],
        [`Style Guide & Prototyping`, `Style Guide และ Prototyping`],
        [`Established a scalable Style Guide (including Typography, Colors, and UI Components) and created both Low-fidelity (Lo-fi) and High-fidelity (Hi-fi) prototypes. This approach maintained visual consistency and significantly streamlined the design and development workflow.`, `จัดทำ Style Guide ที่ขยายต่อได้ ครอบคลุม Typography สี และ UI Components พร้อมสร้าง Prototype ทั้ง Lo-fi และ Hi-fi เพื่อรักษาความสม่ำเสมอของภาพและช่วยให้กระบวนการออกแบบกับพัฒนาทำงานได้คล่องขึ้น`],

        // MFYOU
        [`Campus Communication & Services App`, `แอปสื่อสารและบริการภายในมหาวิทยาลัย`],
        [`MFYOU is an all-in-one campus application designed for Mae Fah Luang University. It streamlines communication between students, professors, and various university departments while integrating essential campus services like disaster monitoring and student job opportunities into a single platform.`, `MFYOU เป็นแอปแบบครบวงจรสำหรับ Mae Fah Luang University ช่วยให้การสื่อสารระหว่างนักศึกษา อาจารย์ และหน่วยงานต่าง ๆ สะดวกขึ้น พร้อมรวมบริการสำคัญ เช่น การติดตามสถานการณ์ภัยพิบัติและโอกาสงานสำหรับนักศึกษาไว้ในแพลตฟอร์มเดียว`],
        [`Students frequently experienced significant friction when trying to reach professors, often relying on cumbersome and slow email workflows. Furthermore, contacting internal departments, discovering campus activities, and finding student job opportunities required navigating multiple fragmented online pages and disconnected channels, resulting in a frustrating user experience.`, `นักศึกษามักติดต่ออาจารย์ได้ยากเพราะต้องพึ่งอีเมลที่ช้าและหลายขั้นตอน การติดต่อหน่วยงาน การหากิจกรรม และโอกาสงานยังต้องค้นจากหลายหน้าเว็บและหลายช่องทาง ทำให้ประสบการณ์ใช้งานไม่ต่อเนื่อง`],
        [`We conceptualized a unified digital hub that replaces traditional emails with a direct, real-time communication system. MFYOU allows users to instantly check the online status of professors and departments, enabling quick and seamless contact. By centralizing academic communication, job listings, medical consultations, and disaster alerts, the app delivers a highly efficient campus experience.`, `ทีมจึงออกแบบศูนย์กลางดิจิทัลที่ใช้ระบบสื่อสารแบบ Real-Time แทนอีเมลแบบเดิม ผู้ใช้ตรวจสอบสถานะออนไลน์ของอาจารย์และหน่วยงานผ่าน MFYOU ได้ทันที และเข้าถึงการสื่อสารเรื่องเรียน ประกาศงาน การปรึกษาด้านสุขภาพ และการแจ้งเตือนภัยพิบัติได้จากที่เดียว`],
        [`Actively collaborated in team brainstorming sessions to conceptualize core features, define system logic, and map out complex user flows for diverse user groups (students, professors, and staff).`, `ร่วมระดมความคิดกับทีมเพื่อกำหนดฟีเจอร์หลัก ตรรกะของระบบ และ User Flow สำหรับผู้ใช้หลายกลุ่ม ทั้งนักศึกษา อาจารย์ และบุคลากร`],
        [`Spearheaded the initial design phase by creating low-fidelity wireframes to establish an intuitive navigation structure before moving into detailed interface design.`, `เริ่มงานออกแบบด้วย Wireframe แบบ Lo-fi เพื่อวางโครงสร้างการนำทางให้เข้าใจง่าย ก่อนพัฒนาต่อเป็นรายละเอียดของอินเทอร์เฟซ`],
        [`Eliminates cumbersome emails by allowing direct communication with online professors and departments.`, `ลดขั้นตอนการใช้อีเมลด้วยช่องทางติดต่ออาจารย์และหน่วยงานที่ออนไลน์อยู่ได้โดยตรง`],
        [`A centralized space for students to easily find internal job openings and university activities.`, `รวมตำแหน่งงานภายในและกิจกรรมของมหาวิทยาลัยไว้ในพื้นที่เดียวให้นักศึกษาค้นหาได้ง่าย`],
        [`Integrated disaster monitoring system and direct access to medical consultations for student well-being.`, `รวมระบบติดตามภัยพิบัติและช่องทางปรึกษาด้านสุขภาพเพื่อดูแลความเป็นอยู่ของนักศึกษา`],

        // Gem Tracking
        [`Real-Time Campus Transit App`, `แอปติดตามรถรับส่งในมหาวิทยาลัยแบบ Real-Time`],
        [`Gem Tracking is a smart campus transit application designed to monitor the status and routes of GEM (Global Electric Motorcars) vehicles at Mae Fah Luang University. The platform provides students with reliable schedules, live location tracking, and smart navigation features to improve their daily commutes.`, `Gem Tracking เป็นแอปติดตามสถานะและเส้นทางของรถ GEM (Global Electric Motorcars) ภายใน Mae Fah Luang University ช่วยให้นักศึกษาดูตารางเวลา ตำแหน่งรถแบบ Real-Time และวางแผนการเดินทางในแต่ละวันได้สะดวกขึ้น`],
        [`Students frequently struggled with the unpredictability of campus travel due to a lack of accessible GEM vehicle schedules. Without the ability to track vehicle locations in real-time, they faced uncertain wait times and had difficulty planning their routes across the university efficiently. We designed an interactive prototype that empowers students with real-time transit data. By displaying live GEM car locations and comparing estimated travel times between walking and taking a vehicle, the app effectively streamlines campus navigation, reduces wait anxiety, and improves the overall student commuting experience.`, `นักศึกษาวางแผนการเดินทางในมหาวิทยาลัยได้ยาก เพราะตารางรถ GEM เข้าถึงไม่สะดวกและไม่รู้ตำแหน่งรถแบบ Real-Time จึงต้องรอโดยไม่แน่ใจว่าจะใช้เวลานานเท่าไร เราออกแบบ Prototype ที่แสดงตำแหน่งรถและเปรียบเทียบเวลาเดินกับเวลานั่งรถ ช่วยลดความกังวลเรื่องการรอและทำให้การเดินทางสะดวกขึ้น`],
        [`Led the user interface and visual design of the prototype, ensuring a clean, intuitive, and accessible experience tailored for students on the go.`, `รับผิดชอบการออกแบบ UI และภาพรวมของ Prototype ให้เรียบง่าย เข้าใจง่าย และเข้าถึงได้สำหรับนักศึกษาที่กำลังเดินทาง`],
        [`Collaborated closely with the team during brainstorming sessions to conceptualize core application features, define transit tracking mechanisms, and map out the underlying system architecture.`, `ร่วมระดมความคิดกับทีมเพื่อกำหนดฟีเจอร์หลัก กลไกติดตามรถ และโครงสร้างระบบเบื้องหลัง`],
        [`A real-time map interface displaying the current locations, active routes, and movement of all GEM cars on campus.`, `แผนที่แบบ Real-Time แสดงตำแหน่ง เส้นทางที่ให้บริการ และการเคลื่อนที่ของรถ GEM ในมหาวิทยาลัย`],
        [`An intelligent comparative feature that calculates and displays the travel time difference between walking to a destination versus waiting for a GEM vehicle.`, `ฟีเจอร์เปรียบเทียบเวลาที่ใช้เดินไปยังจุดหมายกับเวลารอรถ GEM เพื่อช่วยตัดสินใจเลือกวิธีเดินทาง`],
        [`Clear, easy-to-read transit timetables to help students plan their journeys ahead of time.`, `ตารางเวลาเดินรถที่อ่านง่าย ช่วยให้นักศึกษาวางแผนการเดินทางล่วงหน้า`],

        // Feature labels and multimedia introduction
        [`System Architecture & Ideation:`, `System Architecture และการคิดไอเดีย:`],
        [`Wireframing & Prototyping:`, `Wireframing และ Prototyping:`],
        [`Real-Time Status & Direct Contact:`, `สถานะ Real-Time และการติดต่อโดยตรง:`],
        [`Campus Opportunities Board:`, `กระดานโอกาสในมหาวิทยาลัย:`],
        [`Emergency & Health Hub:`, `ศูนย์ข้อมูลฉุกเฉินและสุขภาพ:`],
        [`Feature Ideation & System Logic:`, `การคิดฟีเจอร์และ System Logic:`],
        [`Live Vehicle Tracking:`, `ติดตามรถแบบ Real-Time:`],
        [`Smart Travel Estimation:`, `ประเมินเวลาเดินทางอัจฉริยะ:`],
        [`Accessible Schedules:`, `ตารางเวลาที่เข้าถึงง่าย:`],
        [`Multimedia Projects`, `ผลงาน Multimedia`],
        [`Exploring game systems, 3D environments, and interactive media fuels my creative versatility. These multi-disciplinary skills equip me to integrate gamification and dynamic interactions into user-centric products.`, `การทดลองสร้างระบบเกม สภาพแวดล้อม 3D และสื่อแบบอินเทอร์แอกทีฟช่วยขยายมุมมองสร้างสรรค์ของผม ทักษะเหล่านี้ทำให้ผมนำ Gamification และการโต้ตอบที่มีชีวิตชีวามาใช้กับผลิตภัณฑ์ที่ยึดผู้ใช้เป็นศูนย์กลางได้`],

        // Physical & Brand Identity
        [`Brand Concept & Identity:`, `แนวคิดและอัตลักษณ์ของแบรนด์:`],
        [`Driven by a personal passion for tea and coffee culture, I established PAWINHAUS a specialized campus beverage brand offering Thai Tea, Matcha, and Fresh Milk. For the visual identity, I designed a recognizable and approachable logo inspired by my own pet cat, establishing a memorable signature feline motif that resonates with the target audience.`, `ด้วยความชอบชาและกาแฟ ผมก่อตั้ง PAWINHAUS แบรนด์เครื่องดื่มในมหาวิทยาลัยที่จำหน่ายชาไทย Matcha และนมสด ผมออกแบบโลโก้จากแมวที่เลี้ยงเองให้จดจำง่ายและเป็นมิตร จนกลายเป็นเอกลักษณ์ที่เชื่อมโยงกับกลุ่มลูกค้า`],
        [`Business Strategy & Operations:`, `กลยุทธ์ธุรกิจและการดำเนินงาน:`],
        [`To validate this entrepreneurial concept in a real-world market, I designed the end-to-end customer journey (Service Design). I utilized LINE Business (LINE Official Account) as the primary digital storefront for seamless order management and personally orchestrated the logistics for campus-wide delivery.`, `เพื่อลองแนวคิดธุรกิจในตลาดจริง ผมออกแบบ Customer Journey ตั้งแต่ต้นจนจบ (Service Design) ใช้ LINE Business (LINE Official Account) เป็นหน้าร้านดิจิทัลและช่องทางจัดการคำสั่งซื้อ พร้อมวางระบบจัดส่งทั่วมหาวิทยาลัยด้วยตนเอง`],
        [`Outcome & Key Learnings:`, `ผลลัพธ์และสิ่งที่ได้เรียนรู้:`],
        [`I conducted a thorough cost-revenue analysis which successfully proved the business model's profitability. Beyond financial metrics, managing PAWINHAUS provided deep insights into customer retention, revealing that operational consistency and reliable service are the true drivers for maintaining a loyal user base.`, `ผมวิเคราะห์ต้นทุนและรายได้จนพิสูจน์ได้ว่าโมเดลธุรกิจทำกำไรได้ นอกจากตัวเลขแล้ว การดูแล PAWINHAUS ยังทำให้เข้าใจว่าความสม่ำเสมอในการดำเนินงานและบริการที่เชื่อถือได้คือปัจจัยสำคัญในการรักษาลูกค้าประจำ`],
        [`The Product Design Takeaway:`, `บทเรียนด้าน Product Design:`],
        [`Building PAWINHAUS from scratch honed my ability to balance aesthetic branding with actual business constraints. Mapping the customer journey from a digital tap on the LINE app to the physical delivery of a drink sharpened my skills in Omni-channel Service Design.`, `การสร้าง PAWINHAUS จากศูนย์ทำให้ผมฝึกสมดุลระหว่างความสวยงามของแบรนด์กับข้อจำกัดทางธุรกิจ การวาง Customer Journey ตั้งแต่การกดสั่งใน LINE ไปจนถึงการส่งเครื่องดื่มจริง ช่วยพัฒนาทักษะ Omni-channel Service Design ของผม`],
        [`Concept & Storytelling:`, `แนวคิดและ Storytelling:`],
        [`Inspired by auspicious traditional Thai sweets (Thong Yip, Thong Yod, Foi Thong, and Dara Thong), this Art Toy collection features a signature gold color palette paired with intriguing backstories. The concept stems from a playful Thai phrase: "Am I feeling irritable today, or am I just low on sugar?" Designed to deliver "100% sweetness" and happiness, these characters stand out in the market with their unique cultural charm and emotional connection.`, `คอลเลกชัน Art Toy นี้ได้แรงบันดาลใจจากขนมไทยมงคล ได้แก่ ทองหยิบ ทองหยอด ฝอยทอง และดาราทอง ใช้สีทองเป็นเอกลักษณ์พร้อมเรื่องราวของตัวละคร แนวคิดมาจากคำถามสนุก ๆ ว่า “วันนี้หงุดหงิด หรือแค่ระดับน้ำตาลต่ำ?” ตัวละครจึงสื่อความหวาน 100% และความสุขผ่านเสน่ห์วัฒนธรรมไทย`],
        [`End-to-End Design Process:`, `กระบวนการออกแบบแบบ End-to-End:`],
        [`Concept & Production:`, `แนวคิดและการผลิต:`],
        [`Initiated character concepts through 2D drafts, utilized AI tools to accelerate 3D modeling generation, and successfully brought the characters to life as physical physical models via 3D printing.`, `เริ่มออกแบบตัวละครด้วยร่าง 2D ใช้เครื่องมือ AI ช่วยเร่งการขึ้นโมเดล 3D และสร้างตัวละครเป็นชิ้นงานจริงด้วยการพิมพ์ 3D`],
        [`Validation & Feedback:`, `การทดสอบและ Feedback:`],
        [`Conducted character testing and gathered user feedback to iterate and refine the designs before launch, ensuring they truly resonated with our target audience.`, `ทดสอบตัวละครและรวบรวม Feedback จากผู้ใช้ เพื่อนำมาปรับแบบก่อนเปิดตัวให้ตรงกับความชอบของกลุ่มเป้าหมาย`],
        [`Brand Strategy & Management:`, `กลยุทธ์และการบริหารแบรนด์:`],
        [`As the Brand Manager, I oversaw the entire product lifecycle and business strategy. My core responsibilities extended beyond character design to include:`, `ในบทบาท Brand Manager ผมดูแลวงจรผลิตภัณฑ์และกลยุทธ์ธุรกิจทั้งหมด นอกเหนือจากการออกแบบตัวละคร ผมรับผิดชอบงานต่อไปนี้`],
        [`Brand Building:`, `การสร้างแบรนด์:`],
        [`Developed the Visual Identity, Brand Messaging, and Tone of Voice.`, `พัฒนา Visual Identity, Brand Messaging และ Tone of Voice`],
        [`Market Strategy:`, `กลยุทธ์การตลาด:`],
        [`Led Market Research, Target Audience Identification, and Marketing Strategies Planning.`, `ทำ Market Research กำหนดกลุ่มเป้าหมาย และวางแผนกลยุทธ์การตลาด`],
        [`Creative Execution:`, `การสร้างสรรค์ผลงาน:`],
        [`Directed Visual Content Creation to align with the brand's core concept of delivering happiness.`, `กำกับการสร้าง Visual Content ให้สอดคล้องกับแนวคิดหลักของแบรนด์ที่ต้องการส่งต่อความสุข`],
        [`Managing this physical product brand honed my entrepreneurial mindset. Conducting market research, defining user personas, and iterating based on real user feedback are the exact same principles I apply to creating user-centric digital products.`, `การบริหารแบรนด์สินค้าจริงช่วยพัฒนามุมมองผู้ประกอบการของผม การทำ Market Research กำหนด User Persona และปรับปรุงจาก Feedback ของผู้ใช้จริง ล้วนเป็นหลักการเดียวกับการสร้างผลิตภัณฑ์ดิจิทัลที่ยึดผู้ใช้เป็นศูนย์กลาง`],

        // Game Design and 3D Modeling
        [`I created an adventure fantasy game, working as the UI designer and also as a game designer.`, `ผมสร้างเกมผจญภัยแฟนตาซี โดยรับหน้าที่ทั้งออกแบบ UI และ Game Design`],
        [`I created a dark fantasy exploration mystery game, and it's my only project for game development, where I designed the story and all the in-game systems.`, `ผมสร้างเกมแนวสำรวจและสืบปริศนา Dark Fantasy ซึ่งเป็นโปรเจกต์พัฒนาเกมเพียงชิ้นเดียวของผม โดยออกแบบทั้งเนื้อเรื่องและระบบทั้งหมดภายในเกม`],
        [`Learninghaus is an educational web-based platform designed to promote legal and ethical awareness in the use of Artificial Intelligence (AI). The platform aims to guide users in understanding how to utilize AI technologies responsibly, without violating copyright laws or infringing upon the rights of others.`, `Learninghaus เป็นแพลตฟอร์มการเรียนรู้บนเว็บที่ส่งเสริมความเข้าใจด้านกฎหมายและจริยธรรมในการใช้ Artificial Intelligence (AI) เพื่อให้ผู้ใช้ใช้เทคโนโลยี AI อย่างรับผิดชอบ โดยไม่ละเมิดลิขสิทธิ์หรือสิทธิของผู้อื่น`],
        [`I used my imagination to create it and inspiration from the Sahara in Africa. The idea came from my fascination with its endless dunes, dramatic skies, and the peaceful solitude it offers. Pressing (Q) would toggle between night and day colors.`, `ผมสร้างฉากนี้จากจินตนาการและแรงบันดาลใจจากทะเลทราย Sahara ในแอฟริกา ทั้งเนินทรายสุดสายตา ท้องฟ้าที่เปลี่ยนอารมณ์ และความสงบของพื้นที่ ผู้ชมกด Q เพื่อสลับสีระหว่างกลางวันและกลางคืนได้`],

        // Graphic Design
        [`Participate in the design competition for a souvenir representing Maejo University's identity, under the theme "Maejo Up: Innovating for Tomorrow." The logo design concept incorporates mountains symbolizing stability, upward-pointing curves representing forward growth, and a gradient of color from dark to light to convey positive development.`, `เข้าร่วมประกวดออกแบบของที่ระลึกซึ่งสะท้อนอัตลักษณ์ของ Maejo University ภายใต้หัวข้อ “Maejo Up: Innovating for Tomorrow.” แนวคิดโลโก้ใช้ภูเขาสื่อถึงความมั่นคง เส้นโค้งชี้ขึ้นสื่อถึงการเติบโต และสีไล่ระดับจากเข้มไปอ่อนเพื่อสื่อถึงการพัฒนาในทางบวก`],
        [`A conceptual ad campaign applying a full-funnel marketing strategy (TOFU, MOFU, BOFU). The design adapts visual communication to match specific user behaviors across different social platforms.`, `แคมเปญโฆษณาเชิงแนวคิดที่ใช้กลยุทธ์ Marketing Funnel ครบทุกช่วง (TOFU, MOFU, BOFU) โดยปรับการสื่อสารด้วยภาพให้เข้ากับพฤติกรรมผู้ใช้ของแต่ละแพลตฟอร์มโซเชียล`],
        [`Vibrant colors and prominent product placement for immediate brand recognition.`, `ใช้สีสดและวางสินค้าให้เด่น เพื่อให้จดจำแบรนด์ได้ทันที`],
        [`Warm lighting and lifestyle aesthetics to create a natural, premium mood.`, `ใช้แสงโทนอุ่นและภาพแบบ Lifestyle เพื่อสร้างบรรยากาศธรรมชาติที่ดูพรีเมียม`],
        [`Clean, concise design optimized for fast-paced scrolling and quick visual appeal.`, `ออกแบบให้สะอาดและกระชับ เพื่อดึงสายตาผู้ชมที่เลื่อนฟีดอย่างรวดเร็ว`],
        [`The UX Takeaway:`, `บทเรียนด้าน UX:`],
        [`Adapting content for different platform algorithms sharpened my ability to design context-aware user interfaces that fit the user's environment.`, `การปรับเนื้อหาให้เหมาะกับอัลกอริทึมของแต่ละแพลตฟอร์มช่วยฝึกให้ผมออกแบบ UI โดยคำนึงถึงบริบทและสภาพแวดล้อมของผู้ใช้`],
        [`Combining storytelling with strategic visual design enhanced my understanding of visual hierarchy. This directly applies to product design by teaching me how to effectively guide user attention and craft a seamless user journey from initial awareness to final action.`, `การผสาน Storytelling กับการออกแบบภาพอย่างมีกลยุทธ์ช่วยให้ผมเข้าใจ Visual Hierarchy มากขึ้น และนำไปใช้กับ Product Design เพื่อกำหนดจุดสนใจและสร้าง User Journey ที่ต่อเนื่องตั้งแต่การรับรู้ไปจนถึงการลงมือทำ`],
        [`A conceptual ad campaign featuring art toys inspired by traditional Thai desserts. This project demonstrates the application of a Marketing Funnel strategy by adapting visual communication and storytelling to suit different platforms and user intentions.`, `แคมเปญโฆษณาเชิงแนวคิดสำหรับ Art Toy ที่ได้แรงบันดาลใจจากขนมไทย แสดงการใช้กลยุทธ์ Marketing Funnel ผ่านการปรับภาพและ Storytelling ให้เหมาะกับแต่ละแพลตฟอร์มและความตั้งใจของผู้ใช้`],
        [`Designed to build brand awareness by introducing the characters "Dara" and "Yod Thong". The visual utilizes warm golden tones, 3D shading, and soft lighting to create a luxurious, collectible feel that reflects Thai cultural richness.`, `ออกแบบเพื่อสร้าง Brand Awareness โดยแนะนำตัวละคร “Dara” และ “Yod Thong” ใช้โทนสีทองอบอุ่น แสงนุ่ม และการลงเงา 3D เพื่อให้รู้สึกหรูหรา น่าสะสม และสะท้อนเสน่ห์วัฒนธรรมไทย`],
        [`Focused on driving conversion through a "10.10 Promotion" theme. It highlights the main character using bright lighting and strong visual elements to encourage immediate purchase, while the gold and green color harmony symbolizes prosperity and freshness`, `เน้นกระตุ้นการตัดสินใจซื้อด้วยธีม “10.10 Promotion” ใช้แสงสว่างและองค์ประกอบภาพที่เด่นเพื่อขับตัวละครหลักและชวนให้ซื้อทันที สีทองกับสีเขียวสื่อถึงความมั่งคั่งและความสดใหม่`],

        // Activities and contact
        [`Activity`, `กิจกรรม`],
        [`I participated in the MFU Ambassador 2023 competition as a representative of the School of Applied Digital Technology. This experience cultivated my leadership skills and empowered me to serve as an active voice advocating for the MFU student community.`, `ผมเข้าร่วมการแข่งขัน MFU Ambassador 2023 ในฐานะตัวแทน School of Applied Digital Technology ประสบการณ์นี้ช่วยพัฒนาทักษะความเป็นผู้นำและเปิดโอกาสให้ผมเป็นกระบอกเสียงให้กับชุมชนนักศึกษา MFU`],
        [`Participated in a seminar and workshop to develop an entrepreneurial mindset and learn how to turn creative ideas into real-world businesses from industry experts. The highlight was a business simulation workshop where I practiced structured problem-solving. I went through the process of identifying "1 Core Problem," brainstorming "5 Potential Solutions," and critically selecting the "1 Best Solution" to build a viable business model. This experience significantly broadened my business perspective. It taught me that effective product design isn't just about aesthetics or usability; it's about solving real-world user problems while strongly aligning with business goals.`, `ผมเข้าร่วมสัมมนาและ Workshop เพื่อพัฒนามุมมองผู้ประกอบการและเรียนรู้จากผู้เชี่ยวชาญว่าจะเปลี่ยนไอเดียสร้างสรรค์ให้เป็นธุรกิจจริงได้อย่างไร ส่วนที่ประทับใจที่สุดคือ Workshop จำลองธุรกิจ ซึ่งให้ฝึกแก้ปัญหาอย่างเป็นระบบ ตั้งแต่หา “1 Core Problem” ระดม “5 Potential Solutions” และเลือก “1 Best Solution” เพื่อสร้างโมเดลธุรกิจที่เป็นไปได้ ประสบการณ์นี้ทำให้ผมเห็นว่า Product Design ที่ดีไม่ได้มีเพียงความสวยงามหรือใช้งานง่าย แต่ต้องแก้ปัญหาจริงของผู้ใช้และสอดคล้องกับเป้าหมายธุรกิจ`],
        [`I participated in the MFU Internship & Job Fair 2025, a student readiness program, and am looking for the right career path for my future. The event allowed me to explore the industry landscape, identify companies offering roles that align with my skill set, and significantly broaden my perspective on potential career paths.`, `ผมเข้าร่วม MFU Internship & Job Fair 2025 ซึ่งเป็นกิจกรรมเตรียมความพร้อมสำหรับนักศึกษาและช่วยให้ผมมองหาเส้นทางอาชีพที่เหมาะกับอนาคต ได้สำรวจภาพรวมอุตสาหกรรม รู้จักบริษัทที่มีตำแหน่งตรงกับทักษะของตนเอง และเปิดมุมมองต่อโอกาสทางอาชีพมากขึ้น`],
        [`THANK YOU`, `ขอบคุณครับ`],
        [`I'm eager to grow, refine my skills, and take on new challenges. If my work resonates with you, I would be excited to contribute and create meaningful experiences together.`, `ผมพร้อมเรียนรู้ พัฒนาทักษะ และรับความท้าทายใหม่ ๆ หากผลงานของผมตรงกับสิ่งที่คุณกำลังมองหา ผมยินดีร่วมสร้างประสบการณ์ที่มีความหมายไปด้วยกัน`],
    ]);

    const imageAltTranslations = new Map([
        [`Papawin Namchue Photo`, `ภาพนายปภาวินท์ นามซื่อ`],
        [`Learninghaus Project Mockup`, `ภาพ Mockup โปรเจกต์ LearningHaus`],
        [`LearningHaus visual assets and game chapter components`, `Visual Assets และองค์ประกอบบทเรียนของ LearningHaus`],
        [`LearningHaus interface screen exploration`, `การออกแบบหน้าจอของ LearningHaus`],
        [`LearningHaus typography and color design system`, `Typography และระบบสีของ LearningHaus`],
        [`LearningHaus user flow diagram`, `แผนภาพ User Flow ของ LearningHaus`],
        [`MFYOU Project Mockup`, `ภาพ Mockup โปรเจกต์ MFYOU`],
        [`Gem Tracking Project Mockup`, `ภาพ Mockup โปรเจกต์ Gem Tracking`],
        [`PAWINHAUS Campus Beverage Brand overview`, `ภาพรวมแบรนด์เครื่องดื่ม PAWINHAUS`],
        [`HWAN ROY Thai Dessert Art Toy Brand overview`, `ภาพรวมแบรนด์ Art Toy ขนมไทย HWAN ROY`],
        [`Whispers ther Dreambound game design`, `ผลงาน Game Design Whispers ther Dreambound`],
        [`The Orchard of Sin game design concept 2`, `แนวคิด Game Design The Orchard of Sin ภาพที่ 2`],
        [`The Orchard of Sin game design concept 1`, `แนวคิด Game Design The Orchard of Sin ภาพที่ 1`],
        [`Shap Buttom 3D modeling project`, `ผลงาน 3D Modeling Shap Buttom`],
        [`Interactive Day and Night Camping Scene in Spline`, `ฉากแคมป์กลางวันและกลางคืนแบบอินเทอร์แอกทีฟใน Spline`],
        [`Maejo Up logo design concept 2`, `แนวคิดออกแบบโลโก้ Maejo Up ภาพที่ 2`],
        [`Maejo Up logo design concept 1`, `แนวคิดออกแบบโลโก้ Maejo Up ภาพที่ 1`],
        [`KhaI Hhem Din So Phong graphic design concept 2`, `แนวคิด Graphic Design KhaI Hhem Din So Phong ภาพที่ 2`],
        [`KhaI Hhem Din So Phong graphic design concept 3`, `แนวคิด Graphic Design KhaI Hhem Din So Phong ภาพที่ 3`],
        [`KhaI Hhem Din So Phong graphic design concept 1`, `แนวคิด Graphic Design KhaI Hhem Din So Phong ภาพที่ 1`],
        [`Sweets Life Instagram TOFU campaign`, `ภาพแคมเปญ Sweets Life บน Instagram ช่วง TOFU`],
        [`Sweets Life TikTok BOFU campaign`, `ภาพแคมเปญ Sweets Life บน TikTok ช่วง BOFU`],
        [`Papawin at the MFU Ambassador 2023 competition`, `ปภาวินท์ในกิจกรรม MFU Ambassador 2023`],
        [`Papawin participating in THE NEXT FOUNDER workshop`, `ปภาวินท์เข้าร่วม Workshop THE NEXT FOUNDER`],
        [`Papawin at the MFU Internship & Job Fair 2025`, `ปภาวินท์ในกิจกรรม MFU Internship & Job Fair 2025`],
    ]);

    const languageButtons = document.querySelectorAll('.language-switch button');
    const textNodes = [];
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    let node;

    while ((node = walker.nextNode())) {
        if (node.parentElement?.closest('header, script, style, svg')) continue;

        const original = node.nodeValue;
        const key = original.trim().replace(/\s+/g, ' ');
        const thai = textTranslations.get(key);
        if (!thai) continue;

        const leading = original.match(/^\s*/)[0];
        const trailing = original.match(/\s*$/)[0];
        textNodes.push({ node, original, thai: leading + thai + trailing });
    }

    const images = [...document.querySelectorAll('img:not(.image-lightbox-image)')].map(image => ({
        image,
        originalAlt: image.alt,
    }));
    const dialog = document.querySelector('.image-lightbox');
    const dialogImage = document.querySelector('.image-lightbox-image');
    const dialogClose = document.querySelector('.image-lightbox-close');

    const setLanguage = language => {
        const isThai = language === 'th';

        textNodes.forEach(({ node: textNode, original, thai }) => {
            textNode.nodeValue = isThai ? thai : original;
        });

        images.forEach(({ image, originalAlt }) => {
            image.alt = isThai ? imageAltTranslations.get(originalAlt) || originalAlt : originalAlt;
            image.setAttribute('aria-label', `${image.alt} — ${isThai ? 'ดูภาพขนาดเต็ม' : 'view full size'}`);
        });

        if (dialog.open) {
            const source = images.find(({ image }) => (image.currentSrc || image.src) === dialogImage.src);
            if (source) dialogImage.alt = source.image.alt;
        }

        dialog.setAttribute('aria-label', isThai ? 'แสดงภาพขนาดเต็ม' : 'Full-size image preview');
        dialogClose.setAttribute('aria-label', isThai ? 'ปิดภาพขนาดเต็ม' : 'Close full-size image');
        document.querySelector('.language-switch').setAttribute('aria-label', isThai ? 'เลือกภาษา' : 'Choose language');
        document.documentElement.lang = isThai ? 'th' : 'en';

        languageButtons.forEach(button => {
            button.setAttribute('aria-pressed', String(button.dataset.language === language));
        });

        try {
            localStorage.setItem('portfolio-language', language);
        } catch {
            // Language switching still works when storage is unavailable.
        }
    };

    let savedLanguage = 'en';
    try {
        if (localStorage.getItem('portfolio-language') === 'th') savedLanguage = 'th';
    } catch {
        // Some file:// and private browsing contexts do not provide storage.
    }

    languageButtons.forEach(button => {
        button.addEventListener('click', () => setLanguage(button.dataset.language));
    });

    setLanguage(savedLanguage);
})();
