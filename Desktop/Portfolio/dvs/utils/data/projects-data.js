import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'Desktop Virtual Assistant',
        description: "Introducing Batman, an advanced virtual assistant developed using Python to showcase my skills in cutting-edge technology. This application leverages the speech_recognition library to activate with the wake word Batman, enabling intuitive voice commands. It seamlessly integrates web browsing capabilities to open websites such as Google, Facebook, YouTube, and LinkedIn. The assistant also features music playback through a custom music library and provides up-to-date news headlines using the NewsAPI.I utilized text-to-speech technologies with pyttsx3, gTTS, and pygame to deliver clear and engaging responses. Additionally, the integration of OpenAI’s GPT-3.5-turbo allows the assistant to handle complex queries with remarkable efficiency. This project highlights my expertise in voice recognition, web automation, and API integration, demonstrating a strong command of modern programming techniques and a commitment to creating innovative solutions.",
        tools: ['Python', 'Audio Recognition', 'OpenAI API', 'Web automation', 'API integration'],
        role: 'Full Stack Developer',
        code: 'Github',
        demo: '',
        image: crefin,
    },
    {
        id: 2,
        name: 'Meteor Strike',
        description: 'Introducing "Meteor Strike," an engaging and interactive game developed using Python and Pygame, showcasing my ability to integrate multimedia elements into a dynamic gaming experience. In this project, players navigate a spaceship, dodge falling targets, and shoot at them to earn points. The game features a **vibrant user interface** with custom graphics and sound effects, including an immersive background soundtrack.Key features include **real-time gameplay mechanics** like bullet management and target spawning, a **high score system** that tracks and saves player achievements, and interactive **game over screens** with replay and exit options. Utilizing `pyttsx3` for voice feedback and Pygame for game development, I crafted a polished and user-friendly experience. This project highlights my skills in **game design**, **event handling**, and **multimedia integration**, demonstrating a thorough understanding of Python programming and game development principles.',
        tools: ['Python', 'Pygame', "Pyttsx3", "game design", "multimedia integration", "Event response handling"],
        role: 'Full Stack Developer',
        code: '',
        demo: '',
        image: travel,
    },
    {
        id: 3,
        name: 'Detection and Response System [Arudino]',
        description: 'Introducing the Aaryan Detection and Response System, a sophisticated security solution that merges real-time object detection with automated defensive actions. Utilizing an ultrasonic sensor, the system detects objects within a user-defined range and activates a servo motor to block the path, preventing unauthorized access.Upon detection, the system sends a signal to a Python application that performs multiple functions: it generates a desktop notification to alert the user, delivers a voice announcement stating "Object detected" and "Path blocked" using pyttsx3, and activates an LED light for visual indication. This multi-faceted approach ensures comprehensive monitoring and immediate response.highlights my proficiency in hardware-software integration, real-time communication, and automated notifications, demonstrating my ability to create effective and responsive monitoring systems.This project highlights my proficiency in sensor integration, automated control systems, and multimedia notifications, demonstrating a robust understanding of combining hardware and software to create effective and intelligent security solutions.',
        tools: ['C++', 'Arduino', 'Pyhton', 'Ultrasound Sensor', 'Servo Motor', 'LED', 'Desktop Notification', 'Pyttsx3', 'Multimedia Notifications','hardware-software integration', 'real-time communication', 'automated notifications'],
        code: '',
        role: 'Full Stack Developer',
        demo: '',
        image: realEstate,
    },
    {
        id: 4,
        name: 'Rock-Paper-Scissors:The Ultimate Showdown [GUI]',
        description: "**Rock-Paper-Scissors: The Ultimate Showdown** is an engaging Pygame-based game that modernizes the classic hand game with a rich interactive experience. Players select rock, paper, or scissors through intuitive icons, and the game vividly displays both the player's and the computer’s choices with high-quality graphics and animations. Enhanced by immersive sound effects, including clicks and choice-specific audio, the game dynamically tracks scores and progresses until one side hits the target score. Featuring customizable win conditions and an engaging win/loss screen, the game offers replayability with options to continue or exit, and concludes with a thank you and credits screen. This project showcases proficiency in **game development**, **graphic design**, and **sound integration**, delivering a polished, interactive gaming experience.",
        tools: ['Python', 'GUI', 'Pygame', 'Sound and Visuals', "Interactive Gameplay"],
        code: '',
        demo: '',
        image: ayla,
        role: 'Full Stack Developer',
    },
    {
        id: 5,
        name: 'UnDistractor',
        description: "Undistractor is a desktop notification application designed to keep users focused during crucial study sessions or exam preparations by delivering timely reminders. It sends an initial motivational notification alerting users about an upcoming exam, urging them to study, followed by a follow-up notification if the user hasn’t taken action. The system operates in a loop, sending notifications at regular intervals to ensure continuous awareness and motivation. Utilizing the `plyer` library for notifications and Python’s `time` and `threading` modules for scheduling, Undistractor features customizable alerts with user-defined icons to enhance engagement and effectiveness. Ideal for students and professionals needing structured reminders to minimize distractions and boost productivity, this tool helps users stay on track and achieve their goals.",
        tools: ['Python', 'Practical', 'Notifier', 'Sound and Visuals', "Interactive"],
        code: '',
        demo: '',
        image: ayla,
        role: 'Full Stack Developer',
    }
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },