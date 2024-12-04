// publications.js
const publications = [
    {
        type: 'International Conference',
        year: 2024,
        title: 'Towards Unmasking LGTM Smells in Code Reviews: A Comparative Study of Comment-Free and Commented Reviews',
        authors: 'Furkan Gon, Burak Yetistiren, Eray Tüzün',
        venue: '40th IEEE International Conference on Software Maintenance and Evolution',
    },
    {
        type: 'International Conference',
        year: 2020,
        title: 'ToolStackers: A Boardgame for SE Education',
        authors: 'Barış Ardıç, Eray Tüzün',
        venue: 'Proceedings of SE-Games Workshop 2020, Munich, Germany',
    },
    {
        type: 'International Journal',
        year: 2023,
        title: 'Taxonomy of Inline Comments',
        authors: 'Elgun Jabrayilzade, Ayda Yurtoğlu, Eray Tüzün',
        venue: 'Empirical Software Engineering'
    },
    {
        type: 'International Journal',
        year: 2024,
        title: 'Enhanced Code Reviews Using Pull Request Based Change Impact Analysis',
        authors: 'İsmail Sergen Göçmen, Ahmed Salih Cezayir, Eray Tüzün',
        venue: 'Empirical Software Engineering'
    },
    {
        type: 'International Journal',
        year: 2024,
        title: 'An Empirical Analysis of Issue Templates Usage in Large-Scale Projects on GitHub',
        authors: 'Emre Sülün, Metehan Saçakcı, Eray Tüzün',
        venue: 'ACM Transactions on Software Engineering and Methodology'
    },
    {
        type: 'International Conference',
        year: 2023,
        title: 'Analyzing Bug Life Cycles to Derive Practical Insights',
        authors: 'Çağrı Eren, Kerem Şahin, Eray Tüzün',
        venue: '27th International Conference on Evaluation and Assessment in Software Engineering - Best Paper Award',
    },
    {
        type: 'International Conference',
        year: 2023,
        title: 'Towards Better Code Reviews: Using Mutation Testing to Improve Reviewer Attention',
        authors: 'Ziya Mukhtarov, Mannan Abdul, Mokhlaroyim Raupova, Javid Baghirov, Osama Tanveer, Haluk Altunel, Eray Tüzün',
        venue: '17th International Conference on Software and System Processes - Best Paper Award',
    },
    {
        type: 'International Conference',
        year: 2023,
        title: 'Do Developers Fix Continuous Integration Smells?',
        authors: 'Ayberk Yaşa, Ege Ergül, Hakan Erdoğmuş, Eray Tüzün',
        venue: '19th International Conference on Predictive Models and Data Analytics in Software Engineering'
    },
    {
        type: 'International Conference',
        year: 2023,
        title: 'BFSig: Leveraging File Significance in Bus Factor Estimation',
        authors: 'Vahid Haratian, Mikhail Evtikhiev, Pouria Derakhshanfar, Eray Tüzün, Vladimir Kovalenko',
        venue: '31st ACM Joint European Software Engineering Conference and Symposium on the Foundations of Software Engineering'
    },
    {
        type: 'International Conference',
        year: 2023,
        title: 'Bus Factor Explorer',
        authors: 'Egor Klimov, Muhammad Umair Ahmed, Nikolai Sviridov, Pouria Derakhshanfar, Eray Tüzün, Vladimir Kovalenko',
        venue: '38th IEEE/ACM International Conference on Automated Software Engineering',
        location: 'Kirchberg, Luxembourg'
    },
    {
        type: 'International Journal',
        year: 2023,
        title: 'Evaluating the Code Quality of AI-Assisted Code Generation Tools: An Empirical Study on GitHub Copilot, Amazon CodeWhisperer, and ChatGPT',
        authors: 'Burak Yetistiren, Isik Ozsoy, Miray Ayerdem, Eray Tuzun',
        venue: 'https://arxiv.org/abs/2304.10778'
    },
    {
        type: 'International Journal',
        year: 2024,
        title: 'Do Code Reviews Lead to Fewer Code Smells?',
        authors: 'Erdem Tuna, Carolyn Seaman, Eray Tüzün',
        venue: 'Journal of Systems and Software'
    },
    {
        type: 'International Journal',
        year: 2022,
        title: 'Cleaning Ground Truth Data in Software Task Assignment',
        authors: 'K. Ayberk Tecimer, Eray Tüzün, Cansu Moran, Hakan Erdogmus',
        venue: 'Information Software and Technology'
    },
    {
        type: 'International Journal',
        year: 2022,
        title: 'Taxonomy of Bug Tracking Process Smells: Perceptions of practitioners and an empirical analysis',
        authors: 'Khushbakht Ali Qamar, Emre Sulun, Eray Tuzun',
        venue: 'Information and Software Technology'
    },
    {
        type: 'International Conference',
        year: 2022,
        title: 'Assessing the Quality of GitHub Copilot’s Code Generation',
        authors: 'Burak Yetistiren, Isik Ozsoy, Eray Tuzun',
        venue: 'Proceedings of the 18th International Conference on Predictive Models and Data Analytics in Software Engineering'
    },
    {
        type: 'International Journal',
        year: 2022,
        title: 'Analyzing Developer Contributions using Artifact Traceability Graphs',
        authors: 'H. Alperen Çetin, Eray Tüzün',
        venue: 'Empirical Software Engineering'
    },
    {
        type: 'International Journal',
        year: 2022,
        title: 'Characterizing Duplicate Bugs: Perceptions of practitioners and an empirical analysis',
        authors: 'Berfin Küçük, İdil Hanhan, Eray Tüzün',
        venue: 'Journal of Software: Evolution and Process'
    },
    {
        type: 'International Journal',
        year: 2023,
        title: 'Evaluating The Impact of a Serious Game Approach For Teaching The Code Review Practice',
        authors: 'Barış Ardıç, Eray Tüzün',
        venue: 'Journal of Software: Evolution and Process'
    },
    {
        type: 'International Conference',
        year: 2022,
        title: 'Bug Tracking Process Smells In Practice',
        authors: 'Erdem Tuna, Vladimir Kovalenko, Eray Tüzün',
        venue: 'International Conference on Software Engineering in Practice'
    },
    {
        type: 'International Conference',
        year: 2022,
        title: 'Bus Factor In Practice',
        authors: 'Elgun Jabrayilzade, Mikhail Evtikhiev, Eray Tüzün, Vladimir Kovalenko',
        venue: 'International Conference on Software Engineering in Practice'
    },
    {
        type: 'International Conference',
        year: 2022,
        title: 'An Interactive Approach to Teaching Git Version Control System',
        authors: 'Elgun Jabrayilzade, Fatih Sevban Uyanık, Emre Sülün, Eray Tüzün',
        venue: 'CSEE&T / HICSS 2022 Conference on Software Engineering Education and Training'
    },
    {
        type:'International Conference',
        year: 2022,
        title: 'Teaching Design Patterns Using Interactive Methods',
        authors: 'Mehmet Ata Yurtsever, Eray Tuzun',
        venue: 'CSEE&T / HICSS 2022 Conference on Software Engineering Education and Training'
    },
    {
        type: 'International Conference',
        year: 2021,
        title: 'Augmenting Code Review Experience Through Visualization',
        authors: 'Faruk Balcı, Dilruba Sultan Haliloğlu, Onur Şahin, Cankat Tilki, Mehmet Ata Yurtsever, Eray Tüzün',
        venue: '2021 Working Conference on Software Visualization (VISSOFT)'
    },
    {
        type: 'International Conference',
        year: 2021,
        title: 'Towards a Taxonomy of Bug Tracking Process Smells: A Quantitative Analysis',
        authors: 'Khushbakht Ali Qamar, Emre Sülün, Eray Tüzün',
        venue: '2021 47th Euromicro Conference on Software Engineering and Advanced Applications (SEAA)'
    },
    {
        type: 'International Conference',
        year: 2021,
        title: 'Towards a Taxonomy of Inline Code Comment Smells',
        authors: 'Elgun Jabrayilzade, Olcaytu Gürkan, Eray Tüzün',
        venue: '2021 IEEE 21st International Working Conference on venue Code Analysis and Manipulation (SCAM)'
    },
    {
        type: 'International Conference',
        year: 2021,
        title: 'Detection and Elimination of Systematic Labeling Bias in Code Reviewer Recommendation Studies',
        authors: 'Ayberk Tecimer, Hamdi Dibeklioğlu, Eray Tüzün',
        venue: '25th International Conference on Evaluation and Assessment in Software Engineering 2021'
    },
    {
        type: 'International Journal',
        year: 2021,
        title: 'A Review of Code Reviewer Recommendation Studies: Challenges and Future Directions',
        authors: 'Alperen Çetin, Emre Doğan, Eray Tüzün',
        venue: 'Science and Computer Programming'
    },
    {
        type: 'International Journal',
        year: 2021,
        title: 'Towards a Taxonomy of Code Review Smells: A Quantitative Analysis',
        authors: 'Emre Doğan, Eray Tüzün',
        venue: 'Information and Software Technology'
    },
    {
        type: 'International Journal',
        year: 2021,
        title: 'Ground Truth Deficiencies in Software Engineering: When codifying the past is counterproductive',
        authors: 'Eray Tüzün, Hakan Erdoğmuş, Maria Teresa Baldassare, Michael Felderer, Robert Feldt, Burak Turhan',
        venue: 'IEEE Software'
    },
    {
        type: 'International Journal',
        year: 2021,
        title: 'What makes Agile Software Development Agile?',
        authors: 'HELENA Consortium',
        venue: 'IEEE Transactions on Software Engineering'
    },
    {
        type: 'International Journal',
        year: 2021,
        title: 'A Fine-grained Data Set and Analysis of Tangling in Bug Fixing Commits',
        authors: 'Steffen Herbold, Alexander Trautsch, Benjamin Ledel, ... , Eray Tüzün, ...',
        venue: 'Empirical Software Engineering'
    },
    {
        type: 'International Journal',
        year: 2021,
        title: 'RSTrace+: Reviewer Suggestion using Software Artifact Traceability Graphs',
        authors: 'Emre Sülün, Uğur Doğrusöz, Eray Tüzün',
        venue: 'Information and Software Technology'
    },
    {
        type: 'Book Chapter',
        year: 2018,
        title: 'IoT System Development Methods',
        authors: 'Görkem Giray, Bedir Tekinerdogan, Eray Tüzün',
        venue: 'Internet of Things: Challenges, Advances and Applications, CRC Press'
    },
    {
        type: 'Book Chapter',
        year: 2018,
        title: 'Adopting the Essence Framework to Derive a Practice Library for the Development of IoT Systems',
        authors: 'Görkem Giray, Bedir Tekinerdogan, Eray Tüzün',
        venue: 'Connected Environments for the Internet of Things, Challenges and Solutions, Springer International Publishing'
    },
    {
        type: 'Book Chapter',
        year: 2017,
        title: 'Investigating the role of Product Manager in Software Product Organizations',
        authors: 'Ece Isel, Izzet Gokhan Ozbilgin, Eray Tuzun',
        venue: 'Enterprise & Business Management, Tectum Verlag'
    },
    {
        type: 'International Conference',
        year: 2020,
        title: 'CRSG: A Serious Game for teaching Code Review',
        authors: 'Kaan Ünlü, Barış Ardıç, Eray Tüzün',
        venue: '28th Joint Meeting on European Software Engineering Conference and Symposium on the Foundations of Software Engineering'
    },
    {
        type: 'International Conference',
        year: 2020,
        title: 'Creation of a Serious Game For Teaching Code Review: An Experience Report',
        authors: 'Barış Ardıç, İrem Yurdakul, Eray Tüzün',
        venue: 'IEEE 32nd Conference on Software Engineering Education and Training (CSEET)'
    },
    {
        type: 'International Journal',
        year: 2020,
        title: 'RSTrace+: Reviewer Suggestion using Software Artifact Traceability Graphs',
        authors: 'Emre Sülün, Eray Tüzün',
        venue: 'Information and Software Technology'
    },
    {
        type: 'International Conference',
        year: 2020,
        title: 'Identifying Key Developers using Artifact Traceability Graphs',
        authors: 'Alperen Cetin, Eray Tüzün',
        venue: 'The 16th International Conference on Predictive Models and Data Analytics in Software Engineering'
    },
    {
        type: 'International Journal',
        year: 2020,
        title: 'Closing the gap between software engineering education and industrial needs',
        authors: 'Vahid Garousi, Görkem Giray, Eray Tüzün, Cagatay Catal, Michael Felderer',
        venue: 'IEEE Software '
    },
    {
        type: 'International Conference',
        year: 2019,
        title: 'Investigating the Validity of Ground Truth in Code Reviewer Recommendation Studies',
        authors: 'Emre Dogan, Eray Tuzun, Ayberk Tecimer, H. Altay Guvenir',
        venue: 'Empirical Software Engineering and Measurement (ESEM) - Best paper award'
    },
    {
        type: 'International Conference',
        year: 2019,
        title: 'Applying Blockchain to Improve the Integrity of the Software Development Process',
        authors: 'M Yilmaz, S Tasel, E Tuzun, U Gulec, RV O\'Connor, Paul Clarke',
        venue: 'European Conference on Software Process Improvement'
    },
    {
        type: 'International Journal',
        year: 2019,
        title: 'Aligning software engineering education with industrial needs: a meta-analysis',
        authors: 'Vahid Garousi, Görkem Giray, Eray Tüzün, Cagatay Catal, Michael Felderer',
        venue: 'Journal of Systems and Software'
    },
    {
        type: 'International Journal',
        year: 2019,
        title: 'Closing the gap between software engineering education and industrial needs',
        authors: 'Vahid Garousi, Görkem Giray, Eray Tüzün, Cagatay Catal, Michael Felderer',
        venue: 'IEEE Software'
    },
    {
        type: 'International Conference',
        year: 2019,
        title: 'Reviewer Recommendation Using Software Artifact Traceability Graphs',
        authors: 'Emre Sülün, Eray Tüzün, Uğur Doğrusöz',
        venue: 'The 15th International Conference on Predictive Models and Data Analytics in Software Engineering'
    },
    {
        type: 'International Conference',
        year: 2019,
        title: 'Catching up with Method and Process Practice: A new Baseline for Researchers',
        authors: 'HELENA Consortium',
        venue: 'International Conference on Software Engineering in Practice (Acceptance rate <25%)'
    },
    {
        type: 'International Journal',
        year: 2019,
        title: 'Understanding the knowledge gaps of software engineers: An empirical analysis based on SWEBOK',
        authors: 'Vahid Garousi, Görkem Giray, Eray Tüzün',
        venue: 'ACM Transactions on Computing Education'
    },
    {
        type: 'International Journal',
        year: 2019,
        title: 'Adopting Integrated Application Lifecycle Management within a Large-Scale Software Company: An Action Research Approach',
        authors: 'Eray Tuzun, Bedir Tekinerdogan, Yagup Macit, Kursat Ince',
        venue: 'Journal of Systems and Software'
    },
    {
        type: 'International Journal',
        year: 2019,
        title: 'An Auction-Based Serious Game for Bug Tracking',
        authors: 'Cagdas Usfekes, Eray Tuzun, Murat Yılmaz, Yagup Macit, Paul Clarke',
        venue: 'IET Software'
    },
    {
        type: 'International Conference',
        year: 2019,
        title: 'Adopting Augmented Reality for the Purpose of Software Development Process Training and Improvement: An Exploration',
        authors: 'İpek Ohri, İrem Öge, Bora Orkun, Murat Yılmaz, Eray Tüzün, Paul Clarke, RV O’Connor',
        venue: 'European Conference on Software Process Improvement, 195-206'
    },
    {
        type: 'International Conference',
        year: 2019,
        title: 'Towards Unified Software Project Monitoring for Organizations using Hybrid Processes and Tools',
        authors: 'Eray Tüzün, Çağdaş Üsfekes, Yagup Macit, Görkem Giray',
        venue: 'ICSSP (International Conference on Software and Systems Process) 2019'
    },
    {
        type: 'International Conference',
        year: 2018,
        title: 'Are Computer Science and Engineering Graduates Ready for the Software Industry? Experiences from an Industrial Student Training Program',
        authors: 'Eray Tuzun, Hakan Erdogmus, Izzet Gokhan Ozbilgin',
        venue: 'International Conference in Software Engineering'
    },
    {
        type: 'International Conference',
        year: 2017,
        title: 'Examining Reward Mechanisms for Effective Usage of Application Lifecycle Management Tools',
        authors: 'Ç Üsfekes, M Yilmaz, E Tuzun, PM Clarke, RV O’Connor',
        venue: 'European Conference on Software Process Improvement, 259-268'
    },
    {
        type: 'International Conference',
        year: 2017,
        title: 'Tarski: a platform for automated analysis of dynamically configurable traceability semantics',
        authors: 'F Erata, M Challenger, B Tekinerdogan, A Monceaux, E Tüzün, G Kardas',
        venue: 'Proceedings of the Symposium on Applied Computing, 1607-1614'
    },
    {
        type: 'International Conference',
        year: 2016,
        title: 'Systematic approach for mapping software development methods to the essence framework',
        authors: 'G.Giray, E.Tuzun, B. Tekinerdogan, Y. Macit',
        venue: 'Proceedings of the 5th International Workshop on Theory-Oriented Software Engineering, 26-32'
    },
    {
        type: 'International Journal',
        year: 2015,
        title: 'Analyzing Impact of Experience Curve on ROI in Software Product Line Engineering',
        authors: 'E. Tüzün and B. Tekinerdogan',
        venue: 'Information and Software Technology, vol. 59, pp. 136–148'
    },
    {
        type: 'International Journal',
        year: 2015,
        title: 'Empirical Evaluation of a Decision Support Model for Adopting Software Product Line Engineering',
        authors: 'E. Tüzün, B. Tekinerdogan, M. E. Kalender, S. Bilgen',
        venue: 'Information and Software Technology, vol. 60, pp. 77–101'
    },
    {
        type: 'International Conference',
        year: 2013,
        title: 'Decision Support for Adopting SPLE with Transit-PL',
        authors: 'M. E. Kalender, E. Tuzun, B. Tekinerdogan',
        venue: 'Proc. of the 17th International Software Product Line Conference co-located workshops, pp. 150–153'
    },
    {
        type: 'International Conference',
        year: 2013,
        title: 'Deriving Metrics to Support Software Product Line Feasibility Analysis',
        authors: 'E. Tuzun, B. Tekinerdogan, S. Bilgen',
        venue: 'In Proc. of International Workshop on Designing Reusable Components and Measuring Reusability, Pisa, Italy'
    },
    {
        type: 'International Confernce',
        year: 2012,
        title: 'Comparison of Customer-Centric and Product-Centric Organizations for Software Product Line Engineering',
        authors: 'E. Tüzün, B. Tekinerdogan, H.A. Topçuoğlu',
        venue: 'Proc. of the 2nd International Workshop on Services, Clouds and Alternative Design Strategies for Variant-Rich Software Systems, Salvador, Brasil'
    },
    {
        type: 'International Conference',
        year: 2012,
        title: 'A Case study on Applying Clone technology to an Industrial Application Framework',
        authors: 'E. Tüzün, E. Er',
        venue: 'Proc. of the 6th International Workshop on Software Clones (IWSC 2012), Switzerland'
    },
    {
        type: 'International Conference',
        year: 2010,
        title: 'Multidimensional Classification Approach for Defining Product Line Engineering Transition Strategies',
        authors: 'B. Tekinerdoğan, E. Tüzün, E. Şaykol',
        venue: 'Proc. of the 14th International Software Product Line Conference (SPLC 2010), Korea LNCS 6287, pp. 461–465'
    },
    {
        type: 'International Conference',
        year: 2010,
        title: 'Exploring the Business Case for Transitioning from a Framework-based Approach to a Software Product Line Engineering Approach',
        authors: 'B. Tekinerdoğan, E. Tüzün, E. Şaykol',
        venue: 'Proc. of the 14th International Software Product Line Conference, Vol. 2, Industrial Track, pp. 251-255'
    },
    {
        type: 'International Conference',
        year: 2010,
        title: 'A Data-Centric Framework for Network Enabled C4ISR Software Systems',
        authors: 'Karaca, H.N., Yüksel M., Tüzün E., Kılınç, I., Baykal B.',
        venue: 'Lectures Notes in Electrical Engineering ISCIS 2010, Springer Belin, Volume 62, pp 173-176'
    },
    {
        type: 'International Conference',
        year: 2009,
        title: 'Using Continuous Integration and Automated Test Techniques for a Robust C4ISR System',
        authors: 'H. Mehmet Yüksel, Eray Tüzün, Erdoğan Gelirli, Emrah Bıyıklı, Buyurman Baykal',
        venue: 'ISCIS 2009'
    },
/*
    {
        type: 'International Journal',
        year: 2008,
        title: 'Mapping and sequencing of structural variation from eight human genomes',
        authors: 'JM Kidd et al.',
        venue: 'Nature 453 (7191), 56-64'
    },
    {
        type: 'International Journal',
        year: 2007,
        title: 'Closing gaps in the human genome with fosmid revenues generated from multiple individuals',
        authors: 'DBovee et al.',
        venue: 'Nature genetics 40 (1), 96-101'
    },
    {
        type: 'International Journal',
        year: 2007,
        title: 'Population stratification of a common APOBEC gene deletion polymorphism',
        authors: 'Kidd JM, Newman TL, Tuzun E, Kaul R, Eichler EE',
        venue: 'PLoS Genet. 2007;3:63'
    },
    {
        type: 'International Journal',
        year: 2007,
        title: 'Molecular refinement of gibbon genome rearrangements',
        authors: 'Roberta Roberto, Oronzo Capozzi, Richard K. Wilson, Elaine R. Mardis, Mariana Lomiento, Eray Tuzun, Ze Cheng, Alan R. Mootnick, Nicoletta Archidiacono, Mariano Rocchi, Evan E. Eichler',
        venue: 'Genome Res. 2007 February; 17(2): 249–257'
    },
    {
        type: 'International Journal',
        year: 2005,
        title: 'Initial sequence of the chimpanzee genome and comparison with the human genome',
        authors: 'Chimpanzee Sequencing and Analysis Consortium',
        venue: 'Nature. 2005 Sep 1;437(7055):50-1'
    },
    {
        type: 'International Journal',
        year: 2005,
        title: 'Manipulating multiple sequence alignments via MaM and WebMam',
        authors: 'Can Alkan, Eray Tüzün, Jerome Buard, Franck Lethiec, Evan Eicher, Jeff Bailey, S. Cenk Sahinalp',
        venue: 'Nucleic Acids Research, July 1;33 (Web server issue): W295-W298'
    },
    {
        type: 'International Journal',
        year: 2005,
        title: 'Fine-Scale Structural Variation of the Human Genome',
        authors: 'Tuzun E, Sharp AJ, Bailey JA, Kaul R, Morrison VA, Pertz LM, Haugen E, Hayden H, Albertson D, Pinkel D, Olson MV, Eichler EE',
        venue: 'Nat Genet. 2005 Jul;37(7):727-32'
    },
    {
        type: 'International Journal',
        year: 2005,
        title: 'A genome-wide survey of structural variation between human and chimpanzee',
        authors: 'Newman, T.L., Tuzun, E., Morrison, V.A., Hayden, K.E., Ventura, M., McGrath, S.D., Rocchi, M., Eichler, E.E.',
        venue: 'Genome Res. 15:1344–1356'
    },
    {
        type: 'International Journal',
        year: 2004,
        title: 'Sequence and comparative analysis of the chicken genome provide unique perspectives on vertebrate evolution',
        authors: 'International Chicken Genome Sequencing Consortium',
        venue: 'Nature. 2004 Dec 9;432(7018):695-716'
    },
    {
        type: 'International Journal',
        year: 2004,
        title: 'The Role of Unequal Crossover in Alpha-Satellite DNA Evolution: A Computational Analysis',
        authors: 'Can Alkan, Evan E. Eichler, Jeffrey A. Bailey, S. Cenk Şahinalp, Eray Tüzün',
        venue: 'Journal of Computational Biology. October 2004, 11(5): 933-944'
    },
    {
        type: 'International Journal',
        year: 2004,
        title: 'Shotgun sequence assembly and recent segmental duplications within the human genome',
        authors: 'She X, Jiang Z, Clark RA, Liu G, Cheng Z, Tuzun E, Church DM, Sutton G, Halpern AL, Eichler EE',
        venue: 'Nature 2004 Oct 21;431(7011):927-30'
    },
    {
        type: 'International Journal',
        year: 2004,
        title: 'Recent segmental duplications in the working draft assembly of the brown norway rat',
        authors: 'Tuzun, E, Bailey, J. A, Eichler, EE',
        venue: 'Genome Research 2004 Apr;14(4):493-506'
    },
    {
        type: 'International Journal',
        year: 2004,
        title: 'Genome Sequence of the Brown Norway Rat yields insights into mammalian evolution',
        authors: 'Rat Genome Sequencing Project Consortium',
        venue: 'Nature. 2004 Apr 1;428(6982):493-521'
    },
    {
        type: 'International Journal',
        year: 2003,
        title: 'Analysis of Primate Genomic Variation Reveals a Repeat-Driven Expansion of the Human Genome',
        authors: 'Liu G, Program NI, Zhao S, Bailey JA, Sahinalp SC, Alkan C, Tuzun E, Green ED, Eichler EE',
        venue: 'Genome Research, 2003 Mar 1; 13(3): 358-368'
    },
    {
        type: 'International Journal',
        year: 2002,
        title: 'An algorithmic analysis of the role of unequal crossover in alpha-satellite DNA evolution',
        authors: 'Can Alkan, Jeff Bailey, Evan Eichler, S. Cenk Sahinalp, Eray Tuzun',
        venue: 'Genome Informatics Workshop 2002, Tokyo, Japan'
    },
    {
        type: 'International Journal',
        year: 2002,
        title: 'MaM: Multiple alignment manipulator',
        authors: 'C Alkan, E Tuzun, EE Eicher, JA Bailey, SC Sahinalp',
        venue: 'Currents in computational molecular biology, 3-4'
    },
    {
        type: 'International Journal',
        year: 2001,
        title: 'Divergent Origins and Concerted Expansion of Two Segmental Duplications on Chromosome 16',
        authors: 'E. E. Eichler, M. E. Johnson, C. Alkan, E. Tuzun, C. Sahinalp, D. Misceo, N. Archidiacono, M. Rocchi',
        venue: 'Journal of Heredity 2001 92: 462-468'
    },

*/
    {
        type: 'National Publication',
        year: 2020,
        title: 'Mimari Borç Tanılama için Yöntemler: Bir Sistematik Eşleme Çalışması',
        authors: 'Yagup Macit, Görkem Giray, Eray Tüzün',
        venue: 'UYMS 2020'
    },
    {
        type: 'National Publication',
        year: 2018,
        title: 'GelISlet (DevOps) Icin Ciddi Oyun Eklentisi Deneyimi (Serious Game Plug-in Experience for DevOps)',
        authors: 'Çağdaş Üsfekes, Yagup Macit, Murat Yılmaz, Eray Tüzün',
        venue: 'UYMS 2018'
    },
    {
        type: 'National Publication',
        year: 2018,
        title: 'Artırılmış Gerçeklik Tabanlı Sürekli Işe Alıştıma Sistemi (Augmented Reality Based Continuous Onboarding Framework)',
        authors: 'İrem Öğe, İpek Ohri, Bora Orkun, Murat Yılmaz, Eray Tüzün',
        venue: 'UYMS 2018'
    },
    {
        type: 'National Publication',
        year: 2017,
        title: 'Sentez Tabanlı Yazılım Mimarisi Tasarım Yaklaşımının Essence Çerçevesiyle Modellenmesi',
        authors: 'G Giray, B Tekinerdogan, E Tüzün',
        venue: 'Journal of Science and Engineering 19 (55.1), 2017'
    },
    {
        type: 'National Publication',
        year: 2017,
        title: 'İşe Alıştırma (Onboarding) Süreçlerinin İyileştirilmesi için Düşünülmüş Bir Endüstriyel Vaka Çalışması',
        authors: 'Murat Yilmaz, Ulas Gulec, Rory O\'Connor, Paul Clarke, Eray Tuzun',
        venue: 'UYMS 2017'
    },
    {
        type: 'National Publication',
        year: 2017,
        title: 'Essence Süreç Modelleme Çerçevesi için Otomasyon Yazılımı Geliştirme Deneyimi',
        authors: 'Yagup Macit, Cagdas Usfekes, Ahsen Ikbal Aytekin, Eray Tuzun',
        venue: 'UYMS 2017'
    },
    {
        type: 'National Publication',
        year: 2017,
        title: 'Uygulama Yaşam Döngüsü Yönetim Araçlarının Verimini Arttırmak İçin Ciddi Oyun Uygulaması',
        authors: 'Cagdas Usfekes, Murat Yilmaz, Eray Tuzun',
        venue: 'UYMS 2017'
    },
    {
        type: 'National Publication',
        year: 2016,
        title: 'Türkiye\'deki Üniversitelerdeki Yazılım Mühendisliği Öğretim Programlarının SWEBOK Kılavuzu Kullanılarak Değerlendirilmesi',
        authors: 'G Giray, E Tüzün, V Garousi',
        venue: 'UYMS 2016'
    },
    {
        type: 'National Publication',
        year: 2016,
        title: 'Sanal Ofis Ortamısnda Kod Gözden Geçirme ile Kod Değerlendirmesi',
        authors: 'M Kaymak, M Namiduru, E Tüzün, M Yilmaz',
        venue: 'UYMS 2016'
    },
    {
        type: 'National Publication',
        year: 2016,
        title: 'Uygulama Yaşam Döngüsü Yönetimi Altyapısı için GelISlet (DevOps) Deneyimi',
        authors: 'AI Aytekin, Y Macit, E Tüzün',
        venue: 'UYMS 2016'
    },
    {
        type: 'National Publication',
        year: 2015,
        title: 'Uygulama Yaşam Döngüsü Yönetimi Karşılaştırmalı Süreç İncelemesi',
        authors: 'Yagup Macit, Eray Tüzün',
        venue: 'UYMS 2015'
    },
    {
        type: 'National Publication',
        year: 2015,
        title: 'Uygulama Yaşam Döngüsü Yönetimi Sistematik Eşleme Çalışması',
        authors: 'Ahsen İkbal Aytekin, Eray Tüzün, Yagup Macit, Bedir Tekinerdoğan',
        venue: 'UYMS 2015'
    },
    {
        type: 'National Publication',
        year: 2014,
        title: 'Büyük Ölçekli Bir Organizasyonda Uygulama Yaşam Döngüsü Yönetimi Uygulama Deneyimi',
        authors: 'Yagup Macit, Eray Tüzün, Kürsat Ince, Ahsen Ikbal Aytekin',
        venue: 'UYMS 2014'
    },
    {
        type: 'National Publication',
        year: 2012,
        title: 'Müşteri Odaklı Organizasyonlarda Yazılım Ürün Hattına Geçiş–Bir Öneri',
        authors: 'Eray Tüzün, Bedir Tekinerdogan, Semih Bilgen',
        venue: 'UYMS 2012'
    },
    {
        type: 'National Publication',
        year: 2010,
        title: 'Yazılım Klonları, Oluşum Nedenleri ve Mücadele Yöntemleri Üzerine Bir İnceleme',
        authors: 'Eray Tüzün, Emre Er, Buyurman Baykal',
        venue: '2. Yazılım Kalitesi ve Yazılım Geliştirme Araçları Sempozyumu 2010'
    },
];

export default publications;


